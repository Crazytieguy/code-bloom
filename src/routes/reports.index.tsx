import { createFileRoute, Link } from "@tanstack/react-router";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useClerk } from "@clerk/clerk-react";

export const Route = createFileRoute("/reports/")({
  component: ReportsList,
});

function ReportsList() {
  const { user } = useClerk();
  const { results, status, loadMore } = usePaginatedQuery(
    api.reports.list,
    {},
    { initialNumItems: 10 }
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Reports</h1>
          <p className="text-base-content/70">
            Learn from others' experiences with Claude Code
          </p>
        </div>
        {user && (
          <Link to="/submit" className="btn btn-primary">
            Share Your Experience
          </Link>
        )}
      </div>

      {status === "LoadingFirstPage" ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-base-content/70 mb-4">No reports yet. Be the first to share!</p>
          {user ? (
            <Link to="/submit" className="btn btn-primary">
              Create First Report
            </Link>
          ) : (
            <p className="text-sm">Sign in to share your experience</p>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-6">
            {results.map((report) => (
              <Link
                key={report._id}
                to="/reports/$reportId"
                params={{ reportId: report._id }}
                className="card bg-base-200 hover:bg-base-300 transition-colors"
              >
                <div className="card-body">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h2 className="card-title text-xl mb-2">{report.title}</h2>
                      <p className="text-base-content/70 mb-3 line-clamp-2">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-base-content/60">
                        <span>by {report.userName}</span>
                        <span>•</span>
                        <span>{new Date(report._creationTime).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="badge badge-lg gap-2">
                        <span className="text-lg">+</span>
                        <span>{report.plusCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {status === "CanLoadMore" && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => loadMore(10)}
                className="btn btn-outline"
              >
                Load More
              </button>
            </div>
          )}
          {status === "LoadingMore" && (
            <div className="flex justify-center mt-8">
              <span className="loading loading-spinner"></span>
            </div>
          )}
        </>
      )}
    </div>
  );
}