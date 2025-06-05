import { useState } from "react";
import { 
  Github, 
  HardDrive, 
  Terminal, 
  Users, 
  ArrowRight
} from "lucide-react";

const VercelIcon = () => (
  <svg data-testid="geist-icon" height="24" strokeLinejoin="round" viewBox="0 0 16 16" width="24">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="#000000"></path>
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
        <path d="M232,0 C223,0 215.2,5 211.1,12.3 L210.6,13.3 L191.8,50.3 L168,97.2 L183.6,127.9 L184.5,129.6 C186.9,133.8 190.5,137.3 194.9,139.4 C199.3,137.2 202.9,133.8 205.3,129.6 L206.2,127.9 L252.9,35.9 L254,33.7 C255.3,30.7 256,27.5 256,24 C256,10.7 245.3,0 232,0 L232,0 Z" fill="#000000"></path>
        <path d="M87.9,44.6 L72.4,14 L71.5,12.3 C69.1,8.1 65.5,4.6 61.1,2.5 C56.7,4.7 53.1,8.1 50.7,12.3 L49.9,14 L3.2,106 L2.1,108.2 C0.8,111.2 0.1,114.4 0.1,117.9 C0.1,131.1 10.8,141.9 24.1,141.9 C33.1,141.9 40.9,136.9 45,129.6 L45.5,128.6 L64.3,91.6 L88,44.7 L87.9,44.6 L87.9,44.6 Z" fill="#000000"></path>
        <path d="M232,0 C223,0 215.1,5 211.1,12.3 L210.6,13.3 L191.8,50.3 L168,97.2 L183.6,127.9 L184.5,129.6 C186.9,133.8 190.5,137.3 194.9,139.4 C199.3,137.2 202.9,133.8 205.3,129.6 L206.2,127.9 L252.9,35.9 L254,33.7 C255.3,30.7 256,27.5 256,24 C256,10.7 245.2,0 232,0 L232,0 Z" fill="#000000"></path>
        <path d="M24,141.9 C33,141.9 40.9,136.9 44.9,129.6 L45.4,128.6 L64.2,91.6 L88,44.7 L72.4,14 L71.5,12.3 C69.1,8.1 65.5,4.6 61.1,2.5 C56.7,4.7 53.1,8.1 50.7,12.3 L49.9,14 L3.2,106 L2,108.3 C0.7,111.3 0,114.5 0,118 C0,131.2 10.7,141.9 24,141.9 L24,141.9 Z" fill="#000000"></path>
        <path d="M87.9,44.6 L72.4,14 L71.5,12.3 C69.1,8.1 65.5,4.6 61.1,2.5 C62.5,1.8 64.1,1.2 65.6,0.8 C67.5,0.3 69.6,0 71.6,0 L71.6,0 L104,0 L104.2,0 L104.4,0 C113.4,0.1 121.2,5 125.3,12.3 L126,14 L168.1,97.3 L183.6,127.9 L184.5,129.6 C186.9,133.8 190.5,137.3 194.9,139.4 C193.5,140.1 191.9,140.7 190.4,141.1 C188.5,141.6 186.4,141.9 184.3,141.9 L184.3,141.9 L152.1,141.9 L151.9,141.9 L151.7,141.9 C142.7,141.8 134.9,136.9 130.8,129.6 L129.9,127.9 L87.9,44.6 L87.9,44.6 Z" fill="#000000"></path>
    </g>
  </svg>
);

const ConvexIcon = () => (
  <svg width="32" height="32" viewBox="0 0 184 188" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M108.092 130.021C126.258 128.003 143.385 118.323 152.815 102.167C148.349 142.128 104.653 167.385 68.9858 151.878C65.6992 150.453 62.8702 148.082 60.9288 145.034C52.9134 132.448 50.2786 116.433 54.0644 101.899C64.881 120.567 86.8748 132.01 108.092 130.021Z" fill="#000000"/>
    <path d="M53.4012 90.1735C46.0375 107.191 45.7186 127.114 54.7463 143.51C22.9759 119.608 23.3226 68.4578 54.358 44.7949C57.2286 42.6078 60.64 41.3097 64.2178 41.1121C78.9312 40.336 93.8804 46.0225 104.364 56.6193C83.0637 56.831 62.318 70.4756 53.4012 90.1735Z" fill="#000000"/>
    <path d="M114.637 61.8552C103.89 46.8701 87.0686 36.6684 68.6387 36.358C104.264 20.1876 148.085 46.4045 152.856 85.1654C153.3 88.7635 152.717 92.4322 151.122 95.6775C144.466 109.195 132.124 119.679 117.702 123.559C128.269 103.96 126.965 80.0151 114.637 61.8552Z" fill="#000000"/>
  </svg>
);

const AnthropicIcon = () => (
  <svg version="1.1" width="24" height="24" viewBox="0 0 92.2 65" xmlns="http://www.w3.org/2000/svg">
    <path fill="#181818" d="M66.5,0H52.4l25.7,65h14.1L66.5,0z M25.7,0L0,65h14.4l5.3-13.6h26.9L51.8,65h14.4L40.5,0C40.5,0,25.7,0,25.7,0z M24.3,39.3l8.8-22.8l8.8,22.8H24.3z"/>
  </svg>
);

const NodejsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 71 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_337_7891)" fill="#000000">
      <path d="M35.625 79.5c-1.081 0-2.09-.288-3.028-.792l-9.59-5.686c-1.442-.792-.721-1.08-.289-1.224 1.947-.648 2.308-.792 4.327-1.944.216-.144.504-.072.72.072l7.356 4.391c.288.144.649.144.865 0l28.77-16.628c.289-.144.433-.431.433-.791V23.714c0-.36-.144-.648-.432-.792L35.986 6.366c-.288-.144-.65-.144-.865 0L6.35 22.922c-.29.144-.434.504-.434.792v33.184c0 .287.145.647.433.791l7.86 4.535c4.254 2.16 6.922-.36 6.922-2.879V26.593c0-.432.36-.864.865-.864h3.678c.432 0 .865.36.865.864v32.752c0 5.687-3.1 8.998-8.509 8.998-1.658 0-2.956 0-6.633-1.8l-7.572-4.319A6.073 6.073 0 0 1 .798 56.97V23.786a6.073 6.073 0 0 1 3.028-5.255l28.77-16.628c1.804-1.008 4.255-1.008 6.058 0l28.77 16.628a6.073 6.073 0 0 1 3.029 5.255V56.97a6.073 6.073 0 0 1-3.029 5.254l-28.77 16.628c-.865.36-1.947.648-3.029.648Z" />
      <path d="M44.567 56.682c-12.62 0-15.215-5.759-15.215-10.654 0-.432.36-.864.865-.864h3.75c.433 0 .793.288.793.72.577 3.815 2.235 5.687 9.879 5.687 6.057 0 8.652-1.368 8.652-4.607 0-1.871-.72-3.24-10.167-4.175-7.86-.792-12.762-2.52-12.762-8.782 0-5.83 4.903-9.285 13.123-9.285 9.23 0 13.772 3.167 14.35 10.077 0 .216-.073.432-.217.648-.144.144-.36.288-.577.288h-3.822a.844.844 0 0 1-.793-.648c-.865-3.96-3.1-5.255-9.013-5.255-6.634 0-7.427 2.304-7.427 4.031 0 2.088.937 2.736 9.879 3.887 8.869 1.152 13.05 2.808 13.05 8.998 0 6.335-5.263 9.934-14.348 9.934Z" />
    </g>
    <defs><clipPath id="clip0_337_7891"><path fill="#fff" d="M0 .5h71v79H0z" /></clipPath></defs>
  </svg>
);

const ClaudeIcon = () => (
  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#000000" fillRule="nonzero"/>
  </svg>
);

const ChromeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="23.9947" r="12" fill="currentColor" fillOpacity="0.1"/>
    <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" fill="none"/>
    <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="24" cy="24" r="9.5" fill="currentColor"/>
    <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="currentColor" fillOpacity="0.8"/>
    <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="currentColor" fillOpacity="0.7"/>
  </svg>
);

const ViteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="currentColor"/>
    <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="#7C3AED"/>
  </svg>
);

const ClerkIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m21.47 20.829 -2.881 -2.881a0.572 0.572 0 0 0 -0.7 -0.084 6.854 6.854 0 0 1 -7.081 0 0.576 0.576 0 0 0 -0.7 0.084l-2.881 2.881a0.576 0.576 0 0 0 -0.103 0.69 0.57 0.57 0 0 0 0.166 0.186 12 12 0 0 0 14.113 0 0.58 0.58 0 0 0 0.239 -0.423 0.576 0.576 0 0 0 -0.172 -0.453Zm0.002 -17.668 -2.88 2.88a0.569 0.569 0 0 1 -0.701 0.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0 -1.222 3.692 6.86 6.86 0 0 0 0.978 3.764 0.573 0.573 0 0 1 -0.083 0.699l-2.881 2.88a0.567 0.567 0 0 1 -0.864 -0.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637 -0.405 0.566 0.566 0 0 1 0.232 0.418 0.57 0.57 0 0 1 -0.168 0.448Zm-7.118 12.261a3.427 3.427 0 1 0 0 -6.854 3.427 3.427 0 0 0 0 6.854Z" fill="currentColor" stroke-width="1"/>
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
    icon: ClaudeIcon,
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
    icon: ChromeIcon,
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
    color: "bg-warning",
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
    icon: ChromeIcon,
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
                    <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-3 text-base-content`}>
                      {step.id === 'vercel' || step.id === 'namecheap' || 
                       step.id === 'convex-dev' || step.id === 'convex-prod' || 
                       step.id === 'anthropic' || step.id === 'nodejs' || 
                       step.id === 'claudecode' || step.id === 'vite' || 
                       step.id === 'clerk' || step.id === 'browser-dev' || 
                       step.id === 'browser-user' ? (
                        <Icon />
                      ) : (
                        <Icon className="w-6 h-6" />
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
              <h4 className="card-title text-lg mb-4 text-left">Connection Flow</h4>
              <div className="space-y-3">
                {getStepById(activeStep || "developer")?.connections.map(connId => {
                  const connectedStep = getStepById(connId);
                  if (!connectedStep) return null;
                  
                  return (
                    <div key={connId} className="flex items-start gap-3 text-left">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-left">
                        <div className="font-semibold text-left">{connectedStep.title}</div>
                        <div className="text-sm opacity-80 text-left">{getConnectionDescription(activeStep || "developer", connId)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
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