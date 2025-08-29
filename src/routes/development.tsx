import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Apple, Terminal, Github, Code, Download, Settings, FolderPlus, Cloud, Container, GitBranch, Play, ArrowDown } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { InteractiveCodeBlock } from "@/components/InteractiveCodeBlock";

export const Route = createFileRoute("/development")({
  component: DevelopmentPage,
});

function DevelopmentPage() {
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
      <h1>Development Environment</h1>
      <p className="lead">Complete guide for setting up your development environment and creating projects.</p>
      
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
      
      {activeMainTab === "remote" && <RemoteDevelopment />}
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
          
          {activeLocalTab === "docker" && <DockerDevelopment />}
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
              
              {activeOSTab === "windows" && <WindowsDevelopment />}
              {activeOSTab === "macos" && <MacOSDevelopment />}
              {activeOSTab === "linux" && <LinuxDevelopment />}
            </div>
          )}
        </div>
      )}

      <div className="divider my-8"></div>

      <CustomCommands />
    </div>
  );
}

function RemoteDevelopment() {
  return (
    <div>
      <div className="not-prose flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">One-Time Setup</h2>
          <p className="opacity-80 mt-1">Complete these steps once to prepare your environment</p>
        </div>
        <a href="#remote-usage" className="btn btn-sm btn-outline gap-2">
          <ArrowDown className="w-4 h-4" />
          Jump to Usage
        </a>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">1</div>
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Create GitHub account</h3>
          </div>
          <div className="ml-12">
            <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">2</div>
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install VS Code (optional)</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
            <p className="text-sm opacity-80">Also install <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces" target="_blank" rel="noopener noreferrer" className="link">GitHub Codespaces extension</a></p>
          </div>
        </div>
      </div>

      <div id="remote-usage" className="not-prose mt-12">
        <h2 className="text-2xl font-bold">Per-Project Usage</h2>
        <p className="opacity-80 mt-1 mb-4">Follow these steps for each new project you create</p>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">1</div>
            <GitBranch className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Create your repository</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Go to the template repository and create your own copy:</p>
            <div className="not-prose space-y-3">
              <div className="alert alert-info">
                <div>
                  Go to{" "}
                  <a 
                    href="https://github.com/Crazytieguy/fullstack-vibe-coding-template" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                  >
                    github.com/Crazytieguy/fullstack-vibe-coding-template
                  </a>{" "}
                  and click <strong>"Use this template"</strong> → <strong>"Create a new repository"</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">2</div>
            <Cloud className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Open in Codespace</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Start coding instantly in your browser or VS Code:</p>
            
            <div className="space-y-6">
              <div className="not-prose">
                <div className="card bg-accent/5 shadow-sm border border-accent/20">
                  <div className="card-body">
                    <h4 className="card-title text-lg">Option A: In Browser</h4>
                    <div className="space-y-2">
                      <p className="text-sm opacity-80">Quick and easy - no additional software needed</p>
                      <ol className="list-decimal list-inside space-y-1 ml-2">
                        <li>On your repository page, click <strong>"Code"</strong></li>
                        <li>Click <strong>"Codespaces"</strong> tab</li>
                        <li>Click <strong>"Create codespace on main"</strong></li>
                        <li>Wait for the environment to load in your browser</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="not-prose">
                <div className="card bg-primary/5 shadow-sm border border-primary/20">
                  <div className="card-body">
                    <h4 className="card-title text-lg">Option B: In VS Code Desktop</h4>
                    <div className="space-y-2">
                      <p className="text-sm opacity-80">Better performance and full VS Code features (requires VS Code + GitHub Codespaces extension)</p>
                      <ol className="list-decimal list-inside space-y-1 ml-2">
                        <li>Open VS Code on your computer</li>
                        <li>Press <code>Ctrl+Shift+P</code> (or <code>Cmd+Shift+P</code> on Mac) to open command palette</li>
                        <li>Type and select <strong>"Codespaces: Create new codespace..."</strong></li>
                        <li>Select your repository from the list</li>
                        <li>Choose <strong>"main"</strong> branch</li>
                        <li>Select <strong>"2 cores"</strong> for machine type (recommended)</li>
                        <li>Wait for the codespace to be created and VS Code to connect</li>
                      </ol>
                      <div className="alert alert-info mt-3">
                        <div className="text-xs">
                          <strong>First time:</strong> You'll need to authorize GitHub access when prompted.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">3</div>
            <Play className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Initialize the project</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Run the initialization command in the terminal:</p>
            <InteractiveCodeBlock
              language="bash"
              template="pnpm run init"
            />
            <p className="mt-4">This installs dependencies, configures Convex, and launches Claude Code.</p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-success badge-lg">✓</div>
            <div className="w-6 h-6 rounded bg-success flex items-center justify-center text-success-content text-sm font-bold">🚀</div>
            <h3 className="text-xl font-semibold">Start coding!</h3>
          </div>
          <div className="ml-12">
            <p>You're ready to start building your application!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DockerDevelopment() {
  return (
    <div>
      <div className="not-prose flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">One-Time Setup</h2>
          <p className="opacity-80 mt-1">Complete these steps once to prepare your environment</p>
        </div>
        <a href="#docker-usage" className="btn btn-sm btn-outline gap-2">
          <ArrowDown className="w-4 h-4" />
          Jump to Usage
        </a>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">1</div>
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Create GitHub account</h3>
          </div>
          <div className="ml-12">
            <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">2</div>
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install VS Code</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
            <p className="text-sm opacity-80">Also install <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" target="_blank" rel="noopener noreferrer" className="link">Dev Containers extension</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">3</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Windows only: Install additional prerequisites</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Windows users must install these before Docker Desktop. Skip this step on macOS/Linux.</p>
            
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Install Windows Terminal:</strong>{" "}
                <a href="https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US" target="_blank" rel="noopener noreferrer" className="link">
                  Download from Microsoft Store
                </a>
              </li>
              <li>
                <strong>Install WSL 2:</strong> Follow the{" "}
                <a href="https://learn.microsoft.com/en-us/windows/wsl/setup/environment" target="_blank" rel="noopener noreferrer" className="link">
                  Microsoft WSL Setup Guide
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">4</div>
            <Container className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install Docker Desktop</h3>
          </div>
          <div className="ml-12">
            <p>Download from <a href="https://www.docker.com/get-started/" target="_blank" rel="noopener noreferrer" className="link">docker.com/get-started</a></p>
          </div>
        </div>
      </div>

      <div id="docker-usage" className="not-prose mt-12">
        <h2 className="text-2xl font-bold">Per-Project Usage</h2>
        <p className="opacity-80 mt-1 mb-4">Follow these steps for each new project you create</p>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">1</div>
            <GitBranch className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Create your repository</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Go to the template repository and create your own copy:</p>
            <div className="not-prose space-y-3">
              <div className="alert alert-info">
                <div>
                  Go to{" "}
                  <a 
                    href="https://github.com/Crazytieguy/fullstack-vibe-coding-template" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                  >
                    github.com/Crazytieguy/fullstack-vibe-coding-template
                  </a>{" "}
                  and click <strong>"Use this template"</strong> → <strong>"Create a new repository"</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">2</div>
            <Download className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Clone your repository</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Clone your repository locally:</p>
            <InteractiveCodeBlock
              language="bash"
              template={`git clone https://github.com/{username}/{repoName}.git
cd {repoName}`}
              placeholders={{
                username: "yourusername",
                repoName: "your-repo-name"
              }}
            />
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">3</div>
            <Code className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Open the project</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Open the project in VS Code:</p>
            <InteractiveCodeBlock
              language="bash"
              template="code ."
            />
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">4</div>
            <Container className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Reopen in Dev Container</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Use VS Code's Dev Container feature for a consistent development environment:</p>
            
            <div className="not-prose">
              <div className="card bg-primary/5 shadow-sm border border-primary/20">
                <div className="card-body">
                  <h4 className="card-title text-lg">Recommended Method: Reopen in Container</h4>
                  <div className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>When VS Code opens, you should see a popup in the bottom-right corner</li>
                      <li>Click <strong>"Reopen in Container"</strong> on the popup</li>
                    </ol>
                    
                    <div>
                      <img src="/devcontainer-popup.png" alt="Dev Container popup notification" className="rounded-lg shadow-md border border-base-300 max-w-md" />
                    </div>

                    <div className="alert alert-info">
                      <div>
                        <strong>If you don't see the popup:</strong>
                        <ol className="list-decimal list-inside space-y-1 ml-2 mt-2">
                          <li>Ensure you have the <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" target="_blank" rel="noopener noreferrer" className="link">Dev Containers extension</a> installed</li>
                          <li>Press <code>Ctrl+Shift+P</code> (or <code>Cmd+Shift+P</code> on Mac)</li>
                          <li>Type and select <strong>"Dev Containers: Reopen in Container"</strong></li>
                        </ol>
                      </div>
                    </div>

                    <div className="alert alert-warning">
                      <div className="text-xs">
                        <strong>First time:</strong> Container setup can take 5-10 minutes as it downloads and builds the development environment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">5</div>
            <Play className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Initialize the project</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Run the initialization command in the VS Code terminal:</p>
            <InteractiveCodeBlock
              language="bash"
              template="pnpm run init"
            />
            <p className="mt-4">This installs dependencies, configures Convex, and launches Claude Code.</p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-success badge-lg">✓</div>
            <div className="w-6 h-6 rounded bg-success flex items-center justify-center text-success-content text-sm font-bold">🚀</div>
            <h3 className="text-xl font-semibold">Start coding!</h3>
          </div>
          <div className="ml-12">
            <p>You're ready to start building your application!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WindowsDevelopment() {
  return (
    <div>
      <div className="not-prose flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">One-Time Setup</h2>
          <p className="opacity-80 mt-1">Complete these steps once to prepare your Windows environment</p>
        </div>
        <a href="#windows-usage" className="btn btn-sm btn-outline gap-2">
          <ArrowDown className="w-4 h-4" />
          Jump to Usage
        </a>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">1</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install Windows Terminal</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">
              A modern terminal for Windows with better WSL support:{" "}
              <a href="https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US" target="_blank" rel="noopener noreferrer" className="link">
                Download from Microsoft Store
              </a>
            </p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">2</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install WSL 2</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">
              WSL provides a Linux environment within Windows for development. Follow the{" "}
              <a href="https://learn.microsoft.com/en-us/windows/wsl/setup/environment" target="_blank" rel="noopener noreferrer" className="link">
                Microsoft WSL Setup Guide
              </a>
            </p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">3</div>
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Create GitHub account</h3>
          </div>
          <div className="ml-12">
            <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">4</div>
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install VS Code</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">
              Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a>
            </p>
            <div className="alert alert-info">
              <div>
                <strong>WSL Integration:</strong> See{" "}
                <a href="https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode" target="_blank" rel="noopener noreferrer" className="link">
                  VS Code with WSL setup guide
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">5</div>
            <Download className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install pnpm</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Open Windows Terminal and run in your WSL environment:</p>
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
            <div className="badge badge-primary badge-lg">6</div>
            <Download className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install Node.js</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">pnpm env use --global lts</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">7</div>
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-content text-sm font-bold">AI</div>
            <h3 className="text-xl font-semibold">Install Claude Code</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">pnpm install -g @anthropic-ai/claude-code</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">8</div>
            <Settings className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Configure Git</h3>
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
            <h3 className="text-xl font-semibold">Create projects directory</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">mkdir ~/projects</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">10</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install required utilities</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Install essential tools used by Claude Code in your WSL Ubuntu environment:</p>
            <CodeBlock language="bash">sudo apt-get install jq ripgrep</CodeBlock>
          </div>
        </div>
      </div>

      <PerProjectUsageLocal sectionId="windows-usage" />
    </div>
  );
}

function MacOSDevelopment() {
  return (
    <div>
      <div className="not-prose flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">One-Time Setup</h2>
          <p className="opacity-80 mt-1">Complete these steps once to prepare your macOS environment</p>
        </div>
        <a href="#macos-usage" className="btn btn-sm btn-outline gap-2">
          <ArrowDown className="w-4 h-4" />
          Jump to Usage
        </a>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">1</div>
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Create GitHub account</h3>
          </div>
          <div className="ml-12">
            <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">2</div>
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install VS Code</h3>
          </div>
          <div className="ml-12">
            <p>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">3</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install Xcode Command Line Tools</h3>
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
            <h3 className="text-xl font-semibold">Install pnpm</h3>
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
            <h3 className="text-xl font-semibold">Install Node.js</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">pnpm env use --global lts</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">6</div>
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-content text-sm font-bold">AI</div>
            <h3 className="text-xl font-semibold">Install Claude Code</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">pnpm install -g @anthropic-ai/claude-code</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">7</div>
            <Settings className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Configure Git</h3>
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
            <h3 className="text-xl font-semibold">Create projects directory</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">mkdir ~/projects</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">9</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install required utilities</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Install essential tools used by Claude Code:</p>
            <CodeBlock language="bash">brew install jq ripgrep</CodeBlock>
          </div>
        </div>
      </div>

      <PerProjectUsageLocal sectionId="macos-usage" />
    </div>
  );
}

function LinuxDevelopment() {
  return (
    <div>
      <div className="not-prose flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">One-Time Setup</h2>
          <p className="opacity-80 mt-1">Complete these steps once to prepare your Linux environment</p>
        </div>
        <a href="#linux-usage" className="btn btn-sm btn-outline gap-2">
          <ArrowDown className="w-4 h-4" />
          Jump to Usage
        </a>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">1</div>
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Create GitHub account</h3>
          </div>
          <div className="ml-12">
            <p>Create an account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">github.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">2</div>
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install VS Code</h3>
          </div>
          <div className="ml-12">
            <p>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="link">code.visualstudio.com</a></p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">3</div>
            <Download className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install pnpm</h3>
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
            <h3 className="text-xl font-semibold">Install Node.js</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">pnpm env use --global lts</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">5</div>
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-content text-sm font-bold">AI</div>
            <h3 className="text-xl font-semibold">Install Claude Code</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">pnpm install -g @anthropic-ai/claude-code</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">6</div>
            <Settings className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Configure Git</h3>
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
            <h3 className="text-xl font-semibold">Create projects directory</h3>
          </div>
          <div className="ml-12">
            <CodeBlock language="bash">mkdir ~/projects</CodeBlock>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">8</div>
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Install required utilities</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Install essential tools used by Claude Code. Choose your package manager:</p>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-2">Ubuntu/Debian:</p>
                <CodeBlock language="bash">sudo apt-get install jq ripgrep</CodeBlock>
              </div>
              <div>
                <p className="font-medium mb-2">Arch Linux:</p>
                <CodeBlock language="bash">sudo pacman -S jq ripgrep</CodeBlock>
              </div>
              <div>
                <p className="font-medium mb-2">Fedora:</p>
                <CodeBlock language="bash">sudo dnf install jq ripgrep</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PerProjectUsageLocal sectionId="linux-usage" />
    </div>
  );
}

function PerProjectUsageLocal({ sectionId }: { sectionId: string }) {
  return (
    <div>
      <div id={sectionId} className="not-prose mt-12">
        <h2 className="text-2xl font-bold">Per-Project Usage</h2>
        <p className="opacity-80 mt-1 mb-4">Follow these steps for each new project you create</p>
      </div>
      <div className="divider my-6"></div>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">1</div>
            <GitBranch className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Create your repository</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Go to the template repository and create your own copy:</p>
            <div className="not-prose space-y-3">
              <div className="alert alert-info">
                <div>
                  Go to{" "}
                  <a 
                    href="https://github.com/Crazytieguy/fullstack-vibe-coding-template" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                  >
                    github.com/Crazytieguy/fullstack-vibe-coding-template
                  </a>{" "}
                  and click <strong>"Use this template"</strong> → <strong>"Create a new repository"</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">2</div>
            <Download className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Clone your repository</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Clone your repository to your local projects directory:</p>
            <InteractiveCodeBlock
              language="bash"
              template={`cd ~/projects
git clone https://github.com/{username}/{repoName}.git
cd {repoName}`}
              placeholders={{
                username: "yourusername",
                repoName: "your-repo-name"
              }}
            />
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">3</div>
            <Code className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Open the project</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Open the project in VS Code:</p>
            <InteractiveCodeBlock
              language="bash"
              template="code ."
            />
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-secondary badge-lg">4</div>
            <Play className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">Initialize the project</h3>
          </div>
          <div className="ml-12">
            <p className="mb-4">Run the initialization command in the VS Code terminal:</p>
            <InteractiveCodeBlock
              language="bash"
              template="pnpm run init"
            />
            <p className="mt-4">This installs dependencies, configures Convex, and launches Claude Code.</p>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-success badge-lg">✓</div>
            <div className="w-6 h-6 rounded bg-success flex items-center justify-center text-success-content text-sm font-bold">🚀</div>
            <h3 className="text-xl font-semibold">Start coding!</h3>
          </div>
          <div className="ml-12">
            <p>You're ready to start building your application!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomCommands() {
  return (
    <div>
      <h2>Custom Commands</h2>
      <p>This template includes several custom commands that can be run through Claude Code to help you get started:</p>
      
      <div className="alert alert-info mt-4 mb-6">
        <div>
          <strong>Usage:</strong> Copy any command below and paste it into Claude Code's input to run the corresponding workflow.
        </div>
      </div>

      <div className="space-y-6">
        <div className="not-prose">
          <h3 className="text-lg font-semibold mb-2">Initialize Application</h3>
          <p className="mb-3">Set up a new application with dependencies, Convex backend, and development servers. <em>(This runs automatically when you run <code>pnpm run init</code>)</em></p>
          <InteractiveCodeBlock
            language="text"
            template="/init-app"
          />
        </div>

        <div className="not-prose">
          <h3 className="text-lg font-semibold mb-2">Customize Theme</h3>
          <p className="mb-3">Modify the application's color scheme and styling to match your preferences.</p>
          <InteractiveCodeBlock
            language="text"
            template="/customize-theme"
          />
        </div>

        <div className="not-prose">
          <h3 className="text-lg font-semibold mb-2">Deploy Code Bloom App</h3>
          <p className="mb-3">Configure and deploy your application to Vercel and Convex with proper environment variables.</p>
          <InteractiveCodeBlock
            language="text"
            template="/deploy-code-bloom-app"
          />
        </div>

        <div className="not-prose">
          <h3 className="text-lg font-semibold mb-2">Generate Report</h3>
          <p className="mb-3">Create a comprehensive project report that can be shared with the community.</p>
          <InteractiveCodeBlock
            language="text"
            template="/generate-report"
          />
        </div>
      </div>
    </div>
  );
}