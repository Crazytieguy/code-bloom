import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Settings } from "lucide-react";

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
        A complete TypeScript stack with React, Vite, TanStack Router, Convex, and Clerk
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="card-title">Development Setup</h2>
            </div>
            <p className="text-left opacity-80 mb-4">
              Get your development environment ready with step-by-step instructions for Windows, macOS, and Linux.
            </p>
            <div className="card-actions justify-end">
              <Link to="/setup" className="btn btn-primary">
                Setup Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="card-title">Template Usage</h2>
            </div>
            <p className="text-left opacity-80 mb-4">
              Learn how to use this template repository to create your own fullstack application.
            </p>
            <div className="card-actions justify-end">
              <Link to="/usage" className="btn btn-primary">
                Usage Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
