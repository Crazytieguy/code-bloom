import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Apple, Terminal, Github, Code, Download, Settings, FolderPlus, Cloud, Container } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { InteractiveCodeBlock } from "@/components/InteractiveCodeBlock";

export const Route = createFileRoute("/setup")({
  component: SetupPage,
});

function SetupPage() {
  const [activeMainTab, setActiveMainTab] = useState<"remote" | "local">("remote");
  const [activeLocalTab, setActiveLocalTab] = useState<"docker" | "full">("docker");
  const [activeOSTab, setActiveOSTab] = useState<"windows" | "macos" | "linux">("macos");

  const mainTabs = [
    { id: "remote" as const, label: "Remote Development", icon: Cloud, recommended: true },
    { id: "local" as const, label: "Local Development", icon: Settings, recommended: false },
  ];

  const localTabs = [
    { id: "docker" as const, label: "Docker Setup", icon: Container, recommended: true },
    { id: "full" as const, label: "Full Local Setup", icon: Download, recommended: false },
  ];

  const osTabs = [
    { id: "macos" as const, label: "macOS", icon: Apple },
    { id: "windows" as const, label: "Windows", icon: Monitor },
    { id: "linux" as const, label: "Linux", icon: Terminal },
  ];

  return (
    <div>
      <h1>Development Environment Setup</h1>

      <div className="not-prose mb-4">
        <div className="tabs tabs-boxed bg-base-200 p-1 justify-center">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <div key={tab.id} className="relative">
                <button
                  className={`tab tab-lg gap-2 ${activeMainTab === tab.id ? "tab-active bg-primary text-primary-content" : ""}`}
                  onClick={() => setActiveMainTab(tab.id)}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
                {tab.recommended && (
                  <div className="badge badge-accent badge-xs absolute -top-1 -right-1 z-10">
                    Recommended
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {activeMainTab === "remote" && <RemoteSetup />}
      {activeMainTab === "local" && (
        <div>
          <div className="not-prose mb-4">
            <div className="tabs tabs-boxed bg-base-200 p-1 justify-center">
              {localTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <div key={tab.id} className="relative">
                    <button
                      className={`tab tab-lg gap-2 ${activeLocalTab === tab.id ? "tab-active bg-secondary text-secondary-content" : ""}`}
                      onClick={() => setActiveLocalTab(tab.id)}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                    {tab.recommended && (
                      <div className="badge badge-accent badge-xs absolute -top-1 -right-1 z-10">
                        Recommended
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {activeLocalTab === "docker" && <DockerSetup />}
          {activeLocalTab === "full" && (
            <div>
              <div className="not-prose mb-4">
                <div className="tabs tabs-boxed bg-base-300 p-1 justify-center">
                  {osTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        className={`tab gap-2 ${activeOSTab === tab.id ? "tab-active bg-accent text-accent-content" : ""}`}
                        onClick={() => setActiveOSTab(tab.id)}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {activeOSTab === "windows" && <WindowsSetup />}
              {activeOSTab === "macos" && <MacOSSetup />}
              {activeOSTab === "linux" && <LinuxSetup />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RemoteSetup() {
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
          <h2 className="text-xl font-semibold">Install VS Code (optional)</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
          <p className="text-sm opacity-80">Also install <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces" target="_blank" rel="noopener noreferrer" className="link">GitHub Codespaces extension</a></p>
        </div>
      </div>
    </div>
  );
}

function DockerSetup() {
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
          <p className="mb-4">Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
          <p className="text-sm opacity-80">Also install <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" target="_blank" rel="noopener noreferrer" className="link">Dev Containers extension</a></p>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">3</div>
          <Container className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install Docker</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Download from <a href="https://www.docker.com/get-started/" target="_blank" rel="noopener noreferrer" className="link">docker.com/get-started</a></p>
          
          <div className="not-prose">
            <div className="alert alert-warning">
              <div>
                <strong>Windows users:</strong> You must install WSL 2 first before installing Docker Desktop.
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Windows WSL 2 Setup:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Install Windows Terminal:</strong>{" "}
                <a href="https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US" target="_blank" rel="noopener noreferrer" className="link">
                  Download from Microsoft Store
                </a>
              </li>
              <li>
                <strong>Install WSL:</strong> Follow the{" "}
                <a href="https://learn.microsoft.com/en-us/windows/wsl/setup/environment" target="_blank" rel="noopener noreferrer" className="link">
                  Microsoft WSL Setup Guide
                </a>
              </li>
              <li>
                <strong>Then install Docker Desktop:</strong> It will automatically detect and use WSL 2
              </li>
            </ul>
          </div>
        </div>
      </div>
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
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install required utilities</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Install essential tools used by Claude Code in your WSL Ubuntu environment:</p>
          <CodeBlock language="bash">sudo apt-get install tmux jq ripgrep</CodeBlock>
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
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install required utilities</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Install essential tools used by Claude Code:</p>
          <CodeBlock language="bash">brew install tmux jq ripgrep</CodeBlock>
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
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Install required utilities</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Install essential tools used by Claude Code. Choose your package manager:</p>
          <div className="space-y-3">
            <div>
              <p className="font-medium mb-2">Ubuntu/Debian:</p>
              <CodeBlock language="bash">sudo apt-get install tmux jq ripgrep</CodeBlock>
            </div>
            <div>
              <p className="font-medium mb-2">Arch Linux:</p>
              <CodeBlock language="bash">sudo pacman -S tmux jq ripgrep</CodeBlock>
            </div>
            <div>
              <p className="font-medium mb-2">Fedora:</p>
              <CodeBlock language="bash">sudo dnf install tmux jq ripgrep</CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}