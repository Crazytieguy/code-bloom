import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Film } from "lucide-react";
import { DevelopmentFlowDiagram } from "@/components/DevelopmentFlowDiagram";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="text-center">
      <div className="not-prose flex justify-center mb-4">
        <img src="/code-bloom.svg" alt="Code Bloom" className="w-16 h-16" />
      </div>
      <h1>Code Bloom</h1>
      <p className="text-xl opacity-80 mb-8">
        Build your ideas into reality with AI – no coding experience needed
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="card-title">Development Environment</h2>
            </div>
            <p className="text-left opacity-80 mb-4">
              Everything you need to start building with AI. Simple setup instructions for any computer, whether you code in the cloud or on your own machine.
            </p>
            <div className="card-actions justify-end">
              <Link to="/development" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-accent/10 shadow-md border border-accent/20">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-3">
              <Film className="w-6 h-6 text-accent" />
              <h2 className="card-title">Showcase</h2>
            </div>
            <p className="text-left opacity-80 mb-4">
              Explore projects built with the Code Bloom template, including games, tools, and interactive experiences.
            </p>
            <div className="card-actions justify-end">
              <Link to="/showcase" className="btn btn-accent">
                View Showcase
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DevelopmentFlowDiagram />
    </div>
  );
}
