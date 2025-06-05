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
  Sparkles,
  Chrome
} from "lucide-react";

const VercelIcon = () => (
  <svg data-testid="geist-icon" height="24" strokeLinejoin="round" style={{color:"currentColor"}} viewBox="0 0 16 16" width="24">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path>
  </svg>
);

const NamecheapIcon = () => (
  <svg width="24" height="24" viewBox="0 -57 256 256" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="13.3220455%" y1="94.9449067%" x2="82.6195455%" y2="1.13156385%" id="linearGradient-1">
            <stop stopColor="#D4202C" offset="0%"></stop>
            <stop stopColor="#D82D2B" stopOpacity="0.9583" offset="4.166156%"></stop>
            <stop stopColor="#E25226" stopOpacity="0.824" offset="17.6%"></stop>
            <stop stopColor="#EB7123" stopOpacity="0.6833" offset="31.67%"></stop>
            <stop stopColor="#F28920" stopOpacity="0.5365" offset="46.35%"></stop>
            <stop stopColor="#F69A1E" stopOpacity="0.3812" offset="61.88%"></stop>
            <stop stopColor="#F9A41D" stopOpacity="0.2114" offset="78.86%"></stop>
            <stop stopColor="#FAA71D" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="86.6243182%" y1="5.04045911%" x2="17.3261364%" y2="98.8545194%" id="linearGradient-2">
            <stop stopColor="#D4202C" offset="0%"></stop>
            <stop stopColor="#D82D2B" stopOpacity="0.9583" offset="4.166156%"></stop>
            <stop stopColor="#E25226" stopOpacity="0.824" offset="17.6%"></stop>
            <stop stopColor="#EB7123" stopOpacity="0.6833" offset="31.67%"></stop>
            <stop stopColor="#F28920" stopOpacity="0.5365" offset="46.35%"></stop>
            <stop stopColor="#F69A1E" stopOpacity="0.3812" offset="61.88%"></stop>
            <stop stopColor="#F9A41D" stopOpacity="0.2114" offset="78.86%"></stop>
            <stop stopColor="#FAA71D" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M232,0 C223,0 215.2,5 211.1,12.3 L210.6,13.3 L191.8,50.3 L168,97.2 L183.6,127.9 L184.5,129.6 C186.9,133.8 190.5,137.3 194.9,139.4 C199.3,137.2 202.9,133.8 205.3,129.6 L206.2,127.9 L252.9,35.9 L254,33.7 C255.3,30.7 256,27.5 256,24 C256,10.7 245.3,0 232,0 L232,0 Z" fill="#FF5000"></path>
        <path d="M87.9,44.6 L72.4,14 L71.5,12.3 C69.1,8.1 65.5,4.6 61.1,2.5 C56.7,4.7 53.1,8.1 50.7,12.3 L49.9,14 L3.2,106 L2.1,108.2 C0.8,111.2 0.1,114.4 0.1,117.9 C0.1,131.1 10.8,141.9 24.1,141.9 C33.1,141.9 40.9,136.9 45,129.6 L45.5,128.6 L64.3,91.6 L88,44.7 L87.9,44.6 L87.9,44.6 Z" fill="#FF5000"></path>
        <path d="M232,0 C223,0 215.1,5 211.1,12.3 L210.6,13.3 L191.8,50.3 L168,97.2 L183.6,127.9 L184.5,129.6 C186.9,133.8 190.5,137.3 194.9,139.4 C199.3,137.2 202.9,133.8 205.3,129.6 L206.2,127.9 L252.9,35.9 L254,33.7 C255.3,30.7 256,27.5 256,24 C256,10.7 245.2,0 232,0 L232,0 Z" fill="url(#linearGradient-1)"></path>
        <path d="M24,141.9 C33,141.9 40.9,136.9 44.9,129.6 L45.4,128.6 L64.2,91.6 L88,44.7 L72.4,14 L71.5,12.3 C69.1,8.1 65.5,4.6 61.1,2.5 C56.7,4.7 53.1,8.1 50.7,12.3 L49.9,14 L3.2,106 L2,108.3 C0.7,111.3 0,114.5 0,118 C0,131.2 10.7,141.9 24,141.9 L24,141.9 Z" fill="url(#linearGradient-2)"></path>
        <path d="M87.9,44.6 L72.4,14 L71.5,12.3 C69.1,8.1 65.5,4.6 61.1,2.5 C62.5,1.8 64.1,1.2 65.6,0.8 C67.5,0.3 69.6,0 71.6,0 L71.6,0 L104,0 L104.2,0 L104.4,0 C113.4,0.1 121.2,5 125.3,12.3 L126,14 L168.1,97.3 L183.6,127.9 L184.5,129.6 C186.9,133.8 190.5,137.3 194.9,139.4 C193.5,140.1 191.9,140.7 190.4,141.1 C188.5,141.6 186.4,141.9 184.3,141.9 L184.3,141.9 L152.1,141.9 L151.9,141.9 L151.7,141.9 C142.7,141.8 134.9,136.9 130.8,129.6 L129.9,127.9 L87.9,44.6 L87.9,44.6 Z" fill="#FF8C44"></path>
    </g>
  </svg>
);

const ConvexIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#F59E0B"/>
    <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#EF4444"/>
    <path d="M12 12L3 7V17L12 22V12Z" fill="#A855F7"/>
    <path d="M12 12L21 7V17L12 22V12Z" fill="#F59E0B" opacity="0.8"/>
  </svg>
);

const AnthropicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.335 2.063h-3.732l-6.106 20h3.732l1.483-5.093h5.957l1.483 5.093h3.732l-6.106-20h-.443zm-2.046 3.865h.301l2.168 7.46h-4.636l2.167-7.46z"/>
  </svg>
);

const NodejsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.9998 2.14661C11.7915 2.14661 11.5915 2.22244 11.4332 2.35828L3.55817 7.39161C3.23317 7.62494 3.0415 7.99994 3.0415 8.39994V13.5999C3.0415 13.9999 3.23317 14.3749 3.55817 14.6083L11.4332 19.6416C11.7582 19.8749 12.2332 19.8749 12.5582 19.6416L20.4332 14.6083C20.7582 14.3749 20.9498 13.9999 20.9498 13.5999V8.39994C20.9498 7.99994 20.7582 7.62494 20.4332 7.39161L12.5582 2.35828C12.3998 2.22244 12.1998 2.14661 11.9998 2.14661Z" fill="#339933"/>
  </svg>
);

const ClaudeCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#FF6600"/>
    <path d="M8 16L10.5 8H13.5L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 13H14.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ViteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.906 4.903L12.49 21.66a.563.563 0 01-1.029 0L2.045 4.903a.563.563 0 01.544-.816l9.197 1.677a.562.562 0 00.202 0l9.374-1.677a.563.563 0 01.544.816z" fill="url(#vite-gradient)"/>
    <path d="M15.907 2.768L10.428 3.66a.281.281 0 00-.237.325l1.099 6.251a.281.281 0 00.34.234l2.486-.547a.562.562 0 01.68.467l.421 2.403a.281.281 0 01-.383.317l-1.144-.471a.281.281 0 00-.389.256v.844a.281.281 0 00.15.249l3.195 1.677a.562.562 0 00.803-.35l1.985-9.365a.562.562 0 00-.527-.632z" fill="#FFD62E"/>
    <defs>
      <linearGradient id="vite-gradient" x1="2.045" y1="4.087" x2="12.274" y2="22.097" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF"/>
        <stop offset="1" stopColor="#BD34FE"/>
      </linearGradient>
    </defs>
  </svg>
);

const ClerkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#6366F1"/>
    <path d="M12 6C8.686 6 6 8.686 6 12s2.686 6 6 6c1.647 0 3.14-.666 4.224-1.745l-1.414-1.414A3.982 3.982 0 0112 16c-2.206 0-4-1.794-4-4s1.794-4 4-4a3.982 3.982 0 012.81 1.159l1.414-1.414A5.972 5.972 0 0012 6z" fill="white"/>
  </svg>
);

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
    color: "bg-info",
    connections: ["shell", "claudecode", "nodejs"]
  },
  {
    id: "shell",
    title: "Terminal/Shell",
    description: "Command center for developers. Run commands to start servers and manage your project.",
    icon: Terminal,
    color: "bg-accent",
    connections: ["nodejs", "filesystem"]
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "JavaScript runtime. Makes your code come alive on your computer.",
    icon: NodejsIcon,
    color: "bg-success",
    connections: ["vite", "convex-dev"]
  },
  {
    id: "claudecode",
    title: "Claude Code",
    description: "AI pair programmer. Helps you write code faster and learn as you go.",
    icon: ClaudeCodeIcon,
    color: "bg-secondary",
    connections: ["anthropic", "filesystem"]
  },
  {
    id: "anthropic",
    title: "Anthropic Servers",
    description: "AI brain in the cloud. Powers Claude's intelligence and code suggestions.",
    icon: AnthropicIcon,
    color: "bg-secondary",
    connections: ["claudecode"]
  },
  {
    id: "vite",
    title: "Vite Dev Server",
    description: "Lightning-fast development server. Shows your changes instantly in the browser.",
    icon: ViteIcon,
    color: "bg-warning",
    connections: ["browser-dev", "filesystem"]
  },
  {
    id: "convex-dev",
    title: "Convex (Dev)",
    description: "Backend database & API during development. Stores and manages your app's data.",
    icon: ConvexIcon,
    color: "bg-info",
    connections: ["browser-dev", "convex-prod"]
  },
  {
    id: "clerk",
    title: "Clerk Auth",
    description: "User authentication service. Handles sign-ups, logins, and keeps accounts secure.",
    icon: ClerkIcon,
    color: "bg-accent",
    connections: ["browser-dev", "browser-user"]
  },
  {
    id: "browser-dev",
    title: "Your Browser",
    description: "Where you test your app. See changes live as you code.",
    icon: Chrome,
    color: "bg-primary",
    connections: ["vite", "convex-dev", "clerk"]
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Deployment platform. Takes your code from GitHub and makes it live on the internet.",
    icon: VercelIcon,
    color: "bg-base-300",
    connections: ["github", "namecheap", "browser-user"]
  },
  {
    id: "namecheap",
    title: "Namecheap",
    description: "Domain registrar. Gives your app a custom web address like 'myapp.com'.",
    icon: NamecheapIcon,
    color: "bg-base-100",
    connections: ["vercel", "browser-user"]
  },
  {
    id: "convex-prod",
    title: "Convex (Production)",
    description: "Live backend database. Handles real user data securely in the cloud.",
    icon: ConvexIcon,
    color: "bg-info",
    connections: ["browser-user", "convex-dev"]
  },
  {
    id: "browser-user",
    title: "End User's Browser",
    description: "Where people use your finished app. The final destination of all your hard work!",
    icon: Chrome,
    color: "bg-success",
    connections: ["vercel", "convex-prod", "clerk", "namecheap"]
  }
];

export function DevelopmentFlowDiagram() {
  const [selectedStep, setSelectedStep] = useState<string | null>("developer");
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

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      {step.id === 'vercel' || step.id === 'namecheap' || 
                       step.id === 'convex-dev' || step.id === 'convex-prod' || 
                       step.id === 'anthropic' || step.id === 'nodejs' || 
                       step.id === 'claudecode' || step.id === 'vite' || 
                       step.id === 'clerk' ? (
                        <Icon />
                      ) : (
                        <Icon className="w-6 h-6 text-base-100" />
                      )}
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
        </div>

        <div className="lg:w-96">
          <div className="card bg-info/10 border border-info/20 shadow-lg sticky top-4">
            <div className="card-body">
              <h4 className="card-title text-lg mb-4">Connection Flow</h4>
              {selectedStep ? (
                <div className="space-y-3">
                  {getStepById(selectedStep)?.connections.map(connId => {
                    const connectedStep = getStepById(connId);
                    if (!connectedStep) return null;
                    
                    return (
                      <div key={connId} className="flex items-start gap-3 text-left">
                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{connectedStep.title}</div>
                          <div className="text-sm opacity-80">{getConnectionDescription(selectedStep, connId)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-sm opacity-80 text-left">
                  Click on any component to see how it connects to others in your development ecosystem.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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