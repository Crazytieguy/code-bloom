import { createFileRoute } from "@tanstack/react-router";
import { GitBranch, Download, Play, Code, Cloud, Container } from "lucide-react";
import { InteractiveCodeBlock } from "@/components/InteractiveCodeBlock";
import { useState } from "react";

export const Route = createFileRoute("/usage")({
  component: UsagePage,
});

function UsagePage() {
  const [activeTab, setActiveTab] = useState<"remote" | "local">("remote");
  const [activeLocalTab, setActiveLocalTab] = useState<"docker" | "full">("docker");

  const tabs = [
    { id: "remote" as const, label: "Remote Development", icon: Cloud },
    { id: "local" as const, label: "Local Development", icon: Code },
  ];

  const localTabs = [
    { id: "docker" as const, label: "Docker Setup", icon: Container, recommended: true },
    { id: "full" as const, label: "Fully Local", icon: Download, recommended: false },
  ];

  return (
    <div>
      <h1>Using the Template Repository</h1>
      <p>Follow these steps to create your own application using this fullstack template.</p>

      <div className="not-prose mb-4">
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

      {activeTab === "remote" && <RemoteUsage />}
      {activeTab === "local" && (
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
          
          {activeLocalTab === "docker" && <DockerUsage />}
          {activeLocalTab === "full" && <FullLocalUsage />}
        </div>
      )}

      <div className="divider my-8"></div>

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
    </div>
  );
}

function RemoteUsage() {
  return (
    <div className="space-y-8">
      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">1</div>
          <GitBranch className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create your repository</h2>
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
          <div className="badge badge-primary badge-lg">2</div>
          <Cloud className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Open in Codespace</h2>
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
          <div className="badge badge-primary badge-lg">3</div>
          <Play className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Initialize the project</h2>
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
          <h2 className="text-xl font-semibold">Start coding!</h2>
        </div>
        <div className="ml-12">
          <p>You're ready to start building your application!</p>
        </div>
      </div>
    </div>
  );
}

function DockerUsage() {
  return (
    <div className="space-y-8">
      <div className="not-prose">
        <div className="alert alert-info mb-6">
          <div>
            Make sure you've completed the <a href="/setup" className="link">Docker Setup</a> first.
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">1</div>
          <GitBranch className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create your repository</h2>
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
          <div className="badge badge-primary badge-lg">2</div>
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Clone in Container</h2>
        </div>
        <div className="ml-12">
          <p className="mb-4">Use VS Code to clone the repository directly into a Docker container:</p>
          
          <div className="not-prose">
            <div className="card bg-primary/5 shadow-sm border border-primary/20">
              <div className="card-body">
                <h4 className="card-title text-lg">Dev Container Setup</h4>
                <div className="space-y-2">
                  <p className="text-sm opacity-80">Automatic development environment with all dependencies pre-configured</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Open VS Code on your computer</li>
                    <li>Press <code>Ctrl+Shift+P</code> (or <code>Cmd+Shift+P</code> on Mac) to open command palette</li>
                    <li>Type and select <strong>"Dev Containers: Clone Repository in Container Volume"</strong></li>
                    <li>Select your repository from the list (or paste the URL if needed)</li>
                    <li>Wait for the container to build and VS Code to connect</li>
                  </ol>
                  <div className="alert alert-info mt-3">
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
          <div className="badge badge-primary badge-lg">3</div>
          <Play className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Initialize the project</h2>
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
          <h2 className="text-xl font-semibold">Start coding!</h2>
        </div>
        <div className="ml-12">
          <p>You're ready to start building your application!</p>
        </div>
      </div>
    </div>
  );
}

function FullLocalUsage() {
  return (
    <div className="space-y-8">
      <div className="not-prose">
        <div className="alert alert-info mb-6">
          <div>
            Make sure you've completed the <a href="/setup" className="link">setup guide</a> for your operating system first.
          </div>
        </div>
      </div>

      <div className="not-prose">
        <div className="flex items-center gap-3 mb-4">
          <div className="badge badge-primary badge-lg">1</div>
          <GitBranch className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Create your repository</h2>
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
          <div className="badge badge-primary badge-lg">2</div>
          <Download className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Clone your repository</h2>
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
          <div className="badge badge-primary badge-lg">3</div>
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Open the project</h2>
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
          <div className="badge badge-primary badge-lg">4</div>
          <Play className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Initialize the project</h2>
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
          <h2 className="text-xl font-semibold">Start coding!</h2>
        </div>
        <div className="ml-12">
          <p>You're ready to start building your application!</p>
        </div>
      </div>
    </div>
  );
}