import { createFileRoute } from "@tanstack/react-router";
import { GitBranch, Download, Play, Code } from "lucide-react";
import { InteractiveCodeBlock } from "@/components/InteractiveCodeBlock";

export const Route = createFileRoute("/usage")({
  component: UsagePage,
});

function UsagePage() {
  return (
    <div>
      <h1>Using the Template Repository</h1>
      <p>Follow these steps to create your own application using this fullstack template.</p>

      <div className="space-y-8">
        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">1</div>
            <GitBranch className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">Access the template</h2>
          </div>
          <div className="ml-12">
            <p className="mb-4">Navigate to the template repository and create your own copy:</p>
            <div className="not-prose space-y-3">
              <div className="alert alert-info">
                <div>
                  <strong>Template Repository:</strong>{" "}
                  <a 
                    href="https://github.com/Crazytieguy/fullstack-vibe-coding-template" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                  >
                    github.com/Crazytieguy/fullstack-vibe-coding-template
                  </a>
                </div>
              </div>
              <p>Click the <strong>"Use this template"</strong> button to create your own repository.</p>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg">2</div>
            <Download className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">Clone your new repository</h2>
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

    </div>
  );
}