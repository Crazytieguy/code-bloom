import {
  ClerkProvider,
  useAuth as useClerkAuth,
  useUser,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  ConvexReactClient,
  useMutation,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  convexClient: ConvexReactClient;
}>()({
  component: RootComponent,
});

function UserMenu() {
  const { user } = useUser();

  if (!user) {
    return (
      <SignInButton mode="modal">
        <button className="btn btn-sm btn-primary">Sign In</button>
      </SignInButton>
    );
  }

  return <UserButton />;
}

function RootComponent() {
  const { queryClient, convexClient: convex } = Route.useRouteContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <ConvexProviderWithClerk client={convex} useAuth={useClerkAuth}>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen flex flex-col">
            <EnsureUser />
            {/* Mobile sidebar drawer */}
            <div className="drawer min-h-screen">
              <input
                id="drawer-toggle"
                type="checkbox"
                className="drawer-toggle"
                checked={isSidebarOpen}
                onChange={toggleSidebar}
              />
              <div className="drawer-content container mx-auto flex flex-col h-full">
                {/* Navbar */}
                <header className="navbar bg-base-100 shadow-sm border-b border-base-300">
                  <div className="navbar-start">
                    <label
                      htmlFor="drawer-toggle"
                      className="btn btn-square btn-ghost drawer-button lg:hidden mr-2"
                    >
                      <Menu className="w-5 h-5" />
                    </label>
                    <Link to="/" className="btn btn-ghost btn-circle">
                      <img src="/code-bloom.svg" alt="Code Bloom" className="w-8 h-8" />
                    </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                    <nav className="flex">
                      <Link
                        to="/"
                        className="btn btn-ghost"
                        activeProps={{
                          className: "btn btn-ghost btn-active",
                        }}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        to="/development"
                        className="btn btn-ghost"
                        activeProps={{
                          className: "btn btn-ghost btn-active",
                        }}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Development
                      </Link>
                      <Link
                        to="/showcase"
                        className="btn btn-ghost"
                        activeProps={{
                          className: "btn btn-ghost btn-active",
                        }}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Showcase
                      </Link>
                      <Link
                        to="/reports"
                        className="btn btn-ghost"
                        activeProps={{
                          className: "btn btn-ghost btn-active",
                        }}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Reports
                      </Link>
                    </nav>
                  </div>
                  <div className="navbar-end">
                    <UserMenu />
                  </div>
                </header>
                {/* Main content */}
                <main className="flex-1 p-4 prose prose-invert max-w-none">
                  <Outlet />
                </main>
                <footer className="footer footer-center p-4 text-base-content">
                  <p>© {new Date().getFullYear()} Code Bloom</p>
                </footer>
              </div>
              {/* Sidebar content for mobile */}
              <div className="drawer-side z-10">
                <label
                  htmlFor="drawer-toggle"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="menu p-4 w-64 min-h-full bg-base-200 text-base-content flex flex-col">
                  <div className="flex-1">
                    <div className="menu-title mb-4">Navigation</div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/"
                          onClick={() => setIsSidebarOpen(false)}
                          activeProps={{
                            className: "active",
                          }}
                          className="flex items-center p-2"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/development"
                          onClick={() => setIsSidebarOpen(false)}
                          activeProps={{
                            className: "active",
                          }}
                          className="flex items-center p-2"
                        >
                          Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/showcase"
                          onClick={() => setIsSidebarOpen(false)}
                          activeProps={{
                            className: "active",
                          }}
                          className="flex items-center p-2"
                        >
                          Showcase
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/reports"
                          onClick={() => setIsSidebarOpen(false)}
                          activeProps={{
                            className: "active",
                          }}
                          className="flex items-center p-2"
                        >
                          Reports
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto p-4 border-t border-base-300">
                    <UserMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {import.meta.env.DEV && <TanStackRouterDevtools />}
        </QueryClientProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

function EnsureUser() {
  const { isLoaded, isSignedIn, user } = useUser();
  const ensureUser = useMutation(api.users.ensureUser);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      void ensureUser();
    }
  }, [isLoaded, isSignedIn, user, ensureUser]);

  return null;
}
