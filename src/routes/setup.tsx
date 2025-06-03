import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Apple, Terminal, Github, Code, Download, Settings, FolderPlus, Search } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { InteractiveCodeBlock } from "@/components/InteractiveCodeBlock";

export const Route = createFileRoute("/setup")({
  component: SetupPage,
});

function SetupPage() {
  const [activeTab, setActiveTab] = useState<"windows" | "macos" | "linux">("macos");

  const tabs = [
    { id: "macos" as const, label: "macOS", icon: Apple },
    { id: "windows" as const, label: "Windows", icon: Monitor },
    { id: "linux" as const, label: "Linux", icon: Terminal },
  ];

  return (
    <div>
      <h1>Development Environment Setup</h1>

      <div className="not-prose mb-8">
        <div className="tabs tabs-boxed bg-base-200 p-1 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab tab-lg gap-2 ${activeTab === tab.id ? "tab-active bg-primary text-primary-content" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      
      {activeTab === "windows" && <WindowsSetup />}
      {activeTab === "macos" && <MacOSSetup />}
      {activeTab === "linux" && <LinuxSetup />}
    </div>
  );
}

function WindowsSetup() {
  return (
    <div className="space-y-8">
      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">1</div>
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install Windows Terminal</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">A modern terminal for Windows with better WSL support:</p>
          <div className="not-prose">
            <div className="alert alert-info">
              <div>
                <strong>Download:</strong>{" "}
                <a href="https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US" target="_blank" rel="noopener noreferrer" className="link">
                  Windows Terminal on Microsoft Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">2</div>
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install WSL</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">WSL provides a Linux environment within Windows for development:</p>
          <div className="not-prose">
            <div className="alert alert-info">
              <div>
                <strong>Reference:</strong>{" "}
                <a href="https://learn.microsoft.com/en-us/windows/wsl/setup/environment" target="_blank" rel="noopener noreferrer" className="link">
                  Microsoft WSL Setup Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">3</div>
          <Github className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create GitHub account</h2>
        </div>
        <div className="ml-12">
          <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">4</div>
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install VS Code</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
          <div className="not-prose">
            <div className="alert alert-info">
              <div>
                <strong>WSL Integration:</strong>{" "}
                <a href="https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode" target="_blank" rel="noopener noreferrer" className="link">
                  Set up VS Code with WSL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">5</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install pnpm</h2>
        </div>
        <div className="ml-12">
          <div className="space-y-3">
            <CodeBlock language="bash">curl -fsSL https://get.pnpm.io/install.sh | sh -</CodeBlock>
            <div className="alert alert-info">
              <div>
                <strong>Important:</strong> After installation, copy and paste the last line from the command output back into your terminal to start using pnpm.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">5</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install Node.js</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">pnpm env use --global lts</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">6</div>
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-content text-sm font-bold">AI</div>
          <h2 className="text-xl font-semibold">Install Claude Code</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">pnpm install -g @anthropic-ai/claude-code</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">7</div>
          <Settings className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Configure Git</h2>
        </div>
        <div className="ml-12">
          <InteractiveCodeBlock
            language="bash"
            template={`git config --global user.name "{userName}"
git config --global user.email "{userEmail}"`}
            placeholders={{
              userName: "Your Name",
              userEmail: "your.email@example.com"
            }}
          />
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">9</div>
          <FolderPlus className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create projects directory</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">mkdir ~/projects</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">10</div>
          <Search className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install ripgrep</h2>
          <div className="badge badge-outline badge-lg">Optional</div>
        </div>
        <div className="ml-12">
          <p className="mb-4">Fast search tool used by Claude Code. Install in your WSL Ubuntu environment:</p>
          <CodeBlock language="bash">sudo apt-get install ripgrep</CodeBlock>
        </div>
      </div>
    </div>
  );
}

function MacOSSetup() {
  return (
    <div className="space-y-8">
      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">1</div>
          <Github className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create GitHub account</h2>
        </div>
        <div className="ml-12">
          <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">2</div>
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install VS Code</h2>
        </div>
        <div className="ml-12">
          <p>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">3</div>
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install Xcode Command Line Tools</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Usually installed automatically, but if needed:</p>
          <CodeBlock language="bash">xcode-select --install</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">4</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install pnpm</h2>
        </div>
        <div className="ml-12">
          <div className="space-y-3">
            <CodeBlock language="bash">curl -fsSL https://get.pnpm.io/install.sh | sh -</CodeBlock>
            <div className="alert alert-info">
              <div>
                <strong>Important:</strong> After installation, copy and paste the last line from the command output back into your terminal to start using pnpm.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">5</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install Node.js</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">pnpm env use --global lts</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">6</div>
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-content text-sm font-bold">AI</div>
          <h2 className="text-xl font-semibold">Install Claude Code</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">pnpm install -g @anthropic-ai/claude-code</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">7</div>
          <Settings className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Configure Git</h2>
        </div>
        <div className="ml-12">
          <InteractiveCodeBlock
            language="bash"
            template={`git config --global user.name "{userName}"
git config --global user.email "{userEmail}"`}
            placeholders={{
              userName: "Your Name",
              userEmail: "your.email@example.com"
            }}
          />
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">8</div>
          <FolderPlus className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create projects directory</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">mkdir ~/projects</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">9</div>
          <Search className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install ripgrep</h2>
          <div className="badge badge-outline badge-lg">Optional</div>
        </div>
        <div className="ml-12">
          <p className="mb-4">Fast search tool used by Claude Code:</p>
          <CodeBlock language="bash">brew install ripgrep</CodeBlock>
        </div>
      </div>

    </div>
  );
}

function LinuxSetup() {
  return (
    <div className="space-y-8">
      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">1</div>
          <Github className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create GitHub account</h2>
        </div>
        <div className="ml-12">
          <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">2</div>
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install VS Code</h2>
        </div>
        <div className="ml-12">
          <p>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">3</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install pnpm</h2>
        </div>
        <div className="ml-12">
          <div className="space-y-3">
            <CodeBlock language="bash">curl -fsSL https://get.pnpm.io/install.sh | sh -</CodeBlock>
            <div className="alert alert-info">
              <div>
                <strong>Important:</strong> After installation, copy and paste the last line from the command output back into your terminal to start using pnpm.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">4</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install Node.js</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">pnpm env use --global lts</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">5</div>
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-content text-sm font-bold">AI</div>
          <h2 className="text-xl font-semibold">Install Claude Code</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">pnpm install -g @anthropic-ai/claude-code</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">6</div>
          <Settings className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Configure Git</h2>
        </div>
        <div className="ml-12">
          <InteractiveCodeBlock
            language="bash"
            template={`git config --global user.name "{userName}"
git config --global user.email "{userEmail}"`}
            placeholders={{
              userName: "Your Name",
              userEmail: "your.email@example.com"
            }}
          />
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">7</div>
          <FolderPlus className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create projects directory</h2>
        </div>
        <div className="ml-12">
          <CodeBlock language="bash">mkdir ~/projects</CodeBlock>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">8</div>
          <Search className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install ripgrep</h2>
          <div className="badge badge-outline badge-lg">Optional</div>
        </div>
        <div className="ml-12">
          <p className="mb-4">Fast search tool used by Claude Code. Choose your package manager:</p>
          <div className="space-y-3">
            <div>
              <p className="font-medium mb-2">Ubuntu/Debian:</p>
              <CodeBlock language="bash">sudo apt-get install ripgrep</CodeBlock>
            </div>
            <div>
              <p className="font-medium mb-2">Arch Linux:</p>
              <CodeBlock language="bash">sudo pacman -S ripgrep</CodeBlock>
            </div>
            <div>
              <p className="font-medium mb-2">Fedora:</p>
              <CodeBlock language="bash">sudo dnf install ripgrep</CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}