import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useConvexAuth } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/reports/$reportId")({
  component: ReportView,
});

function ReportView() {
  const { reportId } = Route.useParams();
  const { isAuthenticated } = useConvexAuth();
  const navigate = useNavigate();
  const report = useQuery(api.reports.get, { reportId: reportId as Id<"reports"> });
  const togglePlus = useMutation(api.reports.togglePlus);
  const [hasPlussed, setHasPlussed] = useState(false);
  const [plusCount, setPlusCount] = useState(0);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    if (report) {
      setHasPlussed(report.hasPlussed);
      setPlusCount(report.plusCount);
    }
  }, [report]);

  const handleTogglePlus = async () => {
    if (!isAuthenticated) {
      // Could redirect to sign in or show a message
      return;
    }
    
    setIsToggling(true);
    try {
      const result = await togglePlus({ reportId: reportId as Id<"reports"> });
      setHasPlussed(result.plussed);
      setPlusCount(prev => result.plussed ? prev + 1 : prev - 1);
    } catch (error) {
      console.error("Failed to toggle plus:", error);
    } finally {
      setIsToggling(false);
    }
  };

  if (!report) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/reports" className="btn btn-ghost btn-sm gap-2">
          ← Back to Reports
        </Link>
      </div>

      <article className="card bg-base-200">
        <div className="card-body">
          <div className="flex justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{report.title}</h1>
              <div className="flex items-center gap-4 text-sm text-base-content/60">
                <span>by {report.userName}</span>
                <span>•</span>
                <span>{new Date(report._creationTime).toLocaleDateString()}</span>
              </div>
            </div>
            <button
              onClick={() => void handleTogglePlus()}
              disabled={!isAuthenticated || isToggling}
              className={`btn ${hasPlussed ? "btn-primary" : "btn-outline"} gap-2`}
              title={isAuthenticated ? "Click to plus this report" : "Sign in to plus"}
            >
              <Plus className="w-5 h-5" />
              <span>{plusCount}</span>
            </button>
          </div>

          <div className="divider"></div>

          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{report.content.replace(/^#\s+.*\n/, '')}</ReactMarkdown>
          </div>
        </div>
      </article>

      {!isAuthenticated && (
        <div className="card bg-base-300 mt-6">
          <div className="card-body text-center">
            <p className="mb-4">Sign in to plus this report or share your own experience</p>
            <button 
              onClick={() => void navigate({ to: "/" })}
              className="btn btn-primary btn-sm"
            >
              Go to Home to Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}