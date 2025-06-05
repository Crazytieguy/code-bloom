import { useState } from "react";
import { 
  Code2, 
  Github, 
  HardDrive, 
  Terminal, 
  Server, 
  Globe, 
  Users, 
  Cpu,
  Cloud,
  Shield,
  Zap,
  MonitorSmartphone,
  ArrowRight,
  ArrowLeft,
  ArrowUpDown,
  Sparkles
} from "lucide-react";

type FlowStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  connections: string[];
};

const flowSteps: FlowStep[] = [
  {
    id: "developer",
    title: "Developer (You! 👨‍💻)",
    description: "The creative mind behind the app. Uses various tools to build amazing things.",
    icon: Users,
    color: "bg-primary",
    connections: ["filesystem", "shell", "claudecode", "browser-dev", "github"]
  },
  {
    id: "github",
    title: "GitHub",
    description: "Version control & collaboration. Stores your code in the cloud so you never lose it.",
    icon: Github,
    color: "bg-neutral",
    connections: ["filesystem", "vercel"]
  },
  {
    id: "filesystem",
    title: "File System",
    description: "Your computer's storage. Where all your project files live locally.",
    icon: HardDrive,
    color: "bg-base-300",
    connections: ["shell", "claudecode", "nodejs"]
  },
  {
    id: "shell",
    title: "Terminal/Shell",
    description: "Command center for developers. Run commands to start servers and manage your project.",
    icon: Terminal,
    color: "bg-base-300",
    connections: ["nodejs", "filesystem"]
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "JavaScript runtime. Makes your code come alive on your computer.",
    icon: Cpu,
    color: "bg-success",
    connections: ["vite", "convex-dev"]
  },
  {
    id: "claudecode",
    title: "Claude Code",
    description: "AI pair programmer. Helps you write code faster and learn as you go.",
    icon: Sparkles,
    color: "bg-secondary",
    connections: ["anthropic", "filesystem"]
  },
  {
    id: "anthropic",
    title: "Anthropic Servers",
    description: "AI brain in the cloud. Powers Claude's intelligence and code suggestions.",
    icon: Cloud,
    color: "bg-secondary",
    connections: ["claudecode"]
  },
  {
    id: "vite",
    title: "Vite Dev Server",
    description: "Lightning-fast development server. Shows your changes instantly in the browser.",
    icon: Zap,
    color: "bg-warning",
    connections: ["browser-dev", "filesystem"]
  },
  {
    id: "convex-dev",
    title: "Convex (Dev)",
    description: "Backend database & API during development. Stores and manages your app's data.",
    icon: Server,
    color: "bg-info",
    connections: ["browser-dev", "convex-prod"]
  },
  {
    id: "clerk",
    title: "Clerk Auth",
    description: "User authentication service. Handles sign-ups, logins, and keeps accounts secure.",
    icon: Shield,
    color: "bg-accent",
    connections: ["browser-dev", "browser-user"]
  },
  {
    id: "browser-dev",
    title: "Your Browser",
    description: "Where you test your app. See changes live as you code.",
    icon: MonitorSmartphone,
    color: "bg-primary",
    connections: ["vite", "convex-dev", "clerk"]
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Deployment platform. Takes your code from GitHub and makes it live on the internet.",
    icon: Globe,
    color: "bg-base-300",
    connections: ["github", "namecheap", "browser-user"]
  },
  {
    id: "namecheap",
    title: "Namecheap",
    description: "Domain registrar. Gives your app a custom web address like 'myapp.com'.",
    icon: Globe,
    color: "bg-info",
    connections: ["vercel", "browser-user"]
  },
  {
    id: "convex-prod",
    title: "Convex (Production)",
    description: "Live backend database. Handles real user data securely in the cloud.",
    icon: Server,
    color: "bg-info",
    connections: ["browser-user", "convex-dev"]
  },
  {
    id: "browser-user",
    title: "End User's Browser",
    description: "Where people use your finished app. The final destination of all your hard work!",
    icon: Users,
    color: "bg-success",
    connections: ["vercel", "convex-prod", "clerk", "namecheap"]
  }
];

export function DevelopmentFlowDiagram() {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const getStepById = (id: string) => flowSteps.find(step => step.id === id);
  const activeStep = selectedStep || hoveredStep;
  const activeConnections = activeStep ? getStepById(activeStep)?.connections || [] : [];

  return (
    <div className="not-prose my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">How Everything Works Together</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Click on any component to see how it connects to others. This is the complete picture of your development ecosystem!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {flowSteps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          const isConnected = activeConnections.includes(step.id);
          
          return (
            <div
              key={step.id}
              className={`
                card cursor-pointer transition-all duration-300 
                ${isActive ? 'ring-4 ring-primary scale-105 shadow-xl' : ''}
                ${isConnected && !isActive ? 'ring-2 ring-primary/50 shadow-lg' : ''}
                ${!isActive && !isConnected && activeStep ? 'opacity-50' : ''}
                hover:shadow-lg
              `}
              onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="card-body">
                <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-base-100" />
                </div>
                <h3 className="card-title text-base">{step.title}</h3>
                <p className="text-sm opacity-80">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedStep && (
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="alert alert-info shadow-lg">
            <div>
              <h4 className="font-bold text-lg mb-2">Connection Flow:</h4>
              <div className="space-y-2">
                {getStepById(selectedStep)?.connections.map(connId => {
                  const connectedStep = getStepById(connId);
                  if (!connectedStep) return null;
                  
                  return (
                    <div key={connId} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-semibold">{connectedStep.title}:</span>
                      <span className="text-sm opacity-80">{getConnectionDescription(selectedStep, connId)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title mb-4">The Development Journey 🚀</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="badge badge-primary">1</div>
                <div>
                  <h4 className="font-semibold">Writing Code</h4>
                  <p className="text-sm opacity-80">You write code with Claude Code's help, saving files to your file system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary">2</div>
                <div>
                  <h4 className="font-semibold">Local Development</h4>
                  <p className="text-sm opacity-80">Run dev servers through your terminal - Vite for frontend, Convex for backend</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary">3</div>
                <div>
                  <h4 className="font-semibold">Testing</h4>
                  <p className="text-sm opacity-80">Preview changes instantly in your browser, with hot reload from Vite</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary">4</div>
                <div>
                  <h4 className="font-semibold">Version Control</h4>
                  <p className="text-sm opacity-80">Push code to GitHub to save your progress and collaborate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary">5</div>
                <div>
                  <h4 className="font-semibold">Deployment</h4>
                  <p className="text-sm opacity-80">Vercel automatically deploys from GitHub, making your app live on the web</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary">6</div>
                <div>
                  <h4 className="font-semibold">Going Live</h4>
                  <p className="text-sm opacity-80">Users access your app through their browsers via your custom domain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getConnectionDescription(fromId: string, toId: string): string {
  const connections: Record<string, string> = {
    "developer-filesystem": "Edits and creates files",
    "developer-shell": "Runs commands",
    "developer-claudecode": "Gets AI assistance",
    "developer-browser-dev": "Tests the application",
    "developer-github": "Pushes code changes",
    "github-filesystem": "Pulls and pushes code",
    "github-vercel": "Triggers automatic deployments",
    "filesystem-shell": "Executes project files",
    "filesystem-claudecode": "AI reads and writes code",
    "filesystem-nodejs": "Node runs your JavaScript",
    "shell-nodejs": "Starts development servers",
    "nodejs-vite": "Runs the frontend dev server",
    "nodejs-convex-dev": "Runs the backend dev server",
    "claudecode-anthropic": "Gets AI intelligence",
    "anthropic-claudecode": "Provides code suggestions",
    "vite-browser-dev": "Serves your app locally",
    "convex-dev-browser-dev": "Provides data and APIs",
    "convex-dev-convex-prod": "Deploys to production",
    "clerk-browser-dev": "Handles authentication",
    "clerk-browser-user": "Authenticates real users",
    "vercel-namecheap": "Points to your domain",
    "vercel-browser-user": "Serves the live app",
    "namecheap-browser-user": "Provides custom URL",
    "convex-prod-browser-user": "Serves production data",
  };
  
  return connections[`${fromId}-${toId}`] || "Communicates with";
}