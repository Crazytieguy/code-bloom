import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ChildProcess, spawn } from "child_process";
import { EventEmitter } from "events";
import { z } from "zod";

// Command configuration
const ALLOWED_COMMANDS = {
  "dev-frontend": {
    command: "pnpm",
    args: ["run", "dev:frontend"],
    name: "Frontend Dev Server",
    cwd: process.cwd(),
  },
  "dev-backend": {
    command: "pnpm",
    args: ["run", "dev:backend"],
    name: "Convex Backend",
    cwd: process.cwd(),
  },
};

// Process manager
class ProcessManager extends EventEmitter {
  private processes: Map<
    string,
    {
      process: ChildProcess;
      stdout: string[];
      stderr: string[];
      startTime: Date;
    }
  > = new Map();

  private maxLines = 10000; // Maximum lines to buffer per stream

  async launch(
    id: string,
    config: (typeof ALLOWED_COMMANDS)[keyof typeof ALLOWED_COMMANDS],
  ): Promise<void> {
    // Kill existing process if running
    if (this.processes.has(id)) {
      await this.kill(id);
    }

    const childProcess = spawn(config.command, config.args, {
      cwd: config.cwd,
      shell: true,
      env: process.env,
      // Create new process group on Unix for better cleanup
      detached: process.platform !== "win32",
    });

    const processData = {
      process: childProcess,
      stdout: [] as string[],
      stderr: [] as string[],
      startTime: new Date(),
    };

    this.processes.set(id, processData);

    // Handle stdout
    childProcess.stdout?.on("data", (data) => {
      const lines = data
        .toString()
        .split("\n")
        .filter((line: string) => line.length > 0);
      processData.stdout.push(...lines);

      // Trim buffer if too large
      if (processData.stdout.length > this.maxLines) {
        processData.stdout = processData.stdout.slice(-this.maxLines);
      }
    });

    // Handle stderr
    childProcess.stderr?.on("data", (data) => {
      const lines = data
        .toString()
        .split("\n")
        .filter((line: string) => line.length > 0);
      processData.stderr.push(...lines);

      // Trim buffer if too large
      if (processData.stderr.length > this.maxLines) {
        processData.stderr = processData.stderr.slice(-this.maxLines);
      }
    });

    // Handle process exit
    childProcess.on("exit", (code, signal) => {
      console.error(
        `Process ${id} exited with code ${code} and signal ${signal}`,
      );
      this.processes.delete(id);
    });

    childProcess.on("error", (error) => {
      console.error(`Process ${id} error:`, error);
      this.processes.delete(id);
    });
  }

  async kill(id: string): Promise<boolean> {
    const processData = this.processes.get(id);
    if (!processData) return false;

    const { process } = processData;
    
    try {
      // Kill the entire process group on Unix
      if (process.pid && global.process.platform !== "win32") {
        // Use negative PID to kill the entire process group
        global.process.kill(-process.pid, "SIGTERM");
      } else {
        process.kill("SIGTERM");
      }

      // Give it time to terminate gracefully
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Force kill if still running
      if (!process.killed) {
        if (process.pid && global.process.platform !== "win32") {
          global.process.kill(-process.pid, "SIGKILL");
        } else {
          process.kill("SIGKILL");
        }
      }
    } catch (error) {
      console.error(`Error killing process ${id}:`, error);
    }

    this.processes.delete(id);
    return true;
  }

  list(): Array<{
    id: string;
    pid: number | undefined;
    startTime: Date;
    stdoutLines: number;
    stderrLines: number;
  }> {
    return Array.from(this.processes.entries()).map(([id, data]) => ({
      id,
      pid: data.process.pid,
      startTime: data.startTime,
      stdoutLines: data.stdout.length,
      stderrLines: data.stderr.length,
    }));
  }

  getOutput(
    id: string,
    stream: "stdout" | "stderr",
    mode: "head" | "tail",
    lines: number,
    skip: number = 0,
  ): {
    lines: string[];
    totalLines: number;
    returnedLines: { start: number; end: number };
  } | null {
    const processData = this.processes.get(id);
    if (!processData) return null;

    const buffer =
      stream === "stdout" ? processData.stdout : processData.stderr;
    const totalLines = buffer.length;

    let selectedLines: string[];
    let start: number;
    let end: number;

    if (mode === "head") {
      start = skip;
      end = Math.min(skip + lines, totalLines);
      selectedLines = buffer.slice(start, end);
    } else {
      // tail mode
      start = Math.max(0, totalLines - skip - lines);
      end = totalLines - skip;
      selectedLines = buffer.slice(start, end);
    }

    return {
      lines: selectedLines,
      totalLines,
      returnedLines: { start: start + 1, end }, // 1-indexed for user clarity
    };
  }

  sendInput(id: string, input: string): boolean {
    const processData = this.processes.get(id);
    if (!processData || !processData.process.stdin) return false;

    processData.process.stdin.write(input + "\n");
    return true;
  }
}

// Create server and process manager
const processManager = new ProcessManager();
const server = new McpServer({
  name: "shell-command-server",
  version: "1.0.0",
});

// Tool: Launch backend dev server
server.tool("launch-dev-backend", {}, async () => {
  try {
    await processManager.launch("dev-backend", ALLOWED_COMMANDS["dev-backend"]);
    return {
      content: [
        {
          type: "text",
          text: "Successfully launched Convex backend. The process will restart if it was already running.",
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Failed to launch Convex backend: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    };
  }
});

// Tool: Launch frontend dev server
server.tool("launch-dev-frontend", {}, async () => {
  try {
    await processManager.launch(
      "dev-frontend",
      ALLOWED_COMMANDS["dev-frontend"],
    );
    return {
      content: [
        {
          type: "text",
          text: "Successfully launched frontend dev server (Vite). The process will restart if it was already running.",
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Failed to launch frontend dev server: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    };
  }
});

// Tool: Launch both dev servers
server.tool("launch-dev-all", {}, async () => {
  try {
    await Promise.all([
      processManager.launch("dev-backend", ALLOWED_COMMANDS["dev-backend"]),
      processManager.launch("dev-frontend", ALLOWED_COMMANDS["dev-frontend"]),
    ]);
    return {
      content: [
        {
          type: "text",
          text: "Successfully launched both frontend and backend dev servers.",
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Failed to launch dev servers: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    };
  }
});

// Tool: List running commands
server.tool("list-commands", {}, async () => {
  const processes = processManager.list();

  if (processes.length === 0) {
    return {
      content: [
        {
          type: "text",
          text: "No commands are currently running.",
        },
      ],
    };
  }

  const processInfo = processes
    .map(
      (p) =>
        `- ${p.id} (PID: ${p.pid || "N/A"})\n` +
        `  Started: ${p.startTime.toISOString()}\n` +
        `  Stdout lines: ${p.stdoutLines}\n` +
        `  Stderr lines: ${p.stderrLines}`,
    )
    .join("\n\n");

  return {
    content: [
      {
        type: "text",
        text: `Running commands:\n\n${processInfo}`,
      },
    ],
  };
});

// Tool: Get command output
server.tool(
  "get-output",
  {
    id: z
      .string()
      .describe("Command ID (e.g., 'dev-frontend' or 'dev-backend')"),
    stream: z
      .enum(["stdout", "stderr"])
      .describe("Which output stream to read"),
    mode: z
      .enum(["head", "tail"])
      .describe("Read from start (head) or end (tail) of output"),
    lines: z.number().min(1).max(1000).describe("Number of lines to return"),
    skip: z
      .number()
      .min(0)
      .default(0)
      .describe("Number of lines to skip from start (head) or end (tail)"),
  },
  async ({ id, stream, mode, lines, skip }) => {
    const output = processManager.getOutput(id, stream, mode, lines, skip);

    if (!output) {
      return {
        content: [
          {
            type: "text",
            text: `No process found with ID: ${id}`,
          },
        ],
      };
    }

    const header =
      `${stream} output for ${id} (${mode} mode):\n` +
      `Total lines: ${output.totalLines}\n` +
      `Returned lines: ${output.returnedLines.start}-${output.returnedLines.end}\n` +
      `${"─".repeat(50)}\n`;

    const content =
      output.lines.length > 0
        ? header + output.lines.join("\n")
        : header + "(no output)";

    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  },
);

// Tool: Send input to command
server.tool(
  "send-input",
  {
    id: z
      .string()
      .describe("Command ID (e.g., 'dev-frontend' or 'dev-backend')"),
    input: z.string().describe("Input text to send to the command's stdin"),
  },
  async ({ id, input }) => {
    const success = processManager.sendInput(id, input);

    if (!success) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to send input. No process found with ID: ${id}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: `Successfully sent input to ${id}: "${input}"`,
        },
      ],
    };
  },
);

// Tool: Kill command
server.tool(
  "kill-command",
  {
    id: z
      .string()
      .describe("Command ID to kill (e.g., 'dev-frontend' or 'dev-backend')"),
  },
  async ({ id }) => {
    const success = await processManager.kill(id);

    if (!success) {
      return {
        content: [
          {
            type: "text",
            text: `No process found with ID: ${id}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: `Successfully killed process: ${id}`,
        },
      ],
    };
  },
);

// Setup exit watchdog (based on Playwright MCP server approach)
function setupExitWatchdog() {
  let isExiting = false;
  
  const handleExit = async () => {
    if (isExiting) return;
    isExiting = true;
    
    console.error("Shutting down MCP shell server...");
    
    // Set a hard timeout to force exit if cleanup takes too long
    setTimeout(() => process.exit(0), 5000);
    
    // Kill all child processes
    const processes = processManager.list();
    await Promise.all(processes.map((p) => processManager.kill(p.id)));
    
    process.exit(0);
  };
  
  // Handle various exit signals
  process.stdin.on("close", () => void handleExit());
  process.on("SIGINT", () => void handleExit());
  process.on("SIGTERM", () => void handleExit());
}

// Setup exit handling
setupExitWatchdog();

// Start server
const transport = new StdioServerTransport();
server
  .connect(transport)
  .then(() => {
    console.error("MCP Shell Command Server started");
  })
  .catch((error) => {
    console.error("Failed to start MCP server:", error);
    process.exit(1);
  });
