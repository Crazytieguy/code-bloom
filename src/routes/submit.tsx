import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { useClerk } from "@clerk/clerk-react";

export const Route = createFileRoute("/submit")({
  component: SubmitReport,
});

function SubmitReport() {
  const { user } = useClerk();
  const navigate = useNavigate();
  const createReport = useMutation(api.reports.create);
  const [markdown, setMarkdown] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const parseMarkdown = (content: string) => {
    const lines = content.trim().split("\n");
    
    // Extract title from first heading
    const titleLine = lines.find(line => line.startsWith("# "));
    if (!titleLine) {
      throw new Error("Report must start with a heading (# Title)");
    }
    const title = titleLine.replace(/^#\s+/, "").trim();
    
    // Find first paragraph after title
    let description = "";
    let foundTitle = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("# ")) {
        foundTitle = true;
        continue;
      }
      if (foundTitle && lines[i].trim() && !lines[i].startsWith("#")) {
        description = lines[i].trim();
        break;
      }
    }
    
    if (!description) {
      throw new Error("Report must have a description paragraph after the title");
    }
    
    return { title, description, content };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    try {
      const { title, description, content } = parseMarkdown(markdown);
      await createReport({ title, description, content });
      navigate({ to: "/reports" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit report");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Sign in to Share Your Experience</h2>
        <p className="text-base-content/70 mb-6">
          Join the Code Bloom community to share your Claude Code experiences
        </p>
        <button 
          onClick={() => navigate({ to: "/" })}
          className="btn btn-primary"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Share Your Experience</h1>
      <p className="text-base-content/70 mb-8">
        Help others learn from your Claude Code session
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">
            <span className="label-text">Your Report (Markdown)</span>
          </label>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="textarea textarea-bordered w-full h-96 font-mono text-sm"
            placeholder={`# Your main takeaway or learning

Brief description of what happened during your Claude Code session...

## More details...`}
            required
          />
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title mt-0">Report Format</h3>
            <div className="prose prose-sm max-w-none">
              <ul>
                <li>Start with a heading: <code># Your Main Learning or Takeaway</code></li>
                <li>First paragraph: Brief description of what happened and why you learned this</li>
                <li>Rest of report: Detailed explanation of your experience</li>
              </ul>
            </div>
          </div>
        </div>

        {error && (
          <div role="alert" className="alert alert-error">
            <span>{error}</span>
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting || !markdown.trim()}
            className="btn btn-primary"
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner"></span>
                Submitting...
              </>
            ) : (
              "Submit Report"
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate({ to: "/reports" })}
            className="btn btn-ghost"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}