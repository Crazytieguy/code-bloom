import { SignInButton } from "@clerk/clerk-react";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Authenticated, Unauthenticated } from "convex/react";
import { Zap } from "lucide-react";
import { api } from "../../convex/_generated/api";

const usersQueryOptions = convexQuery(api.users.listUsers, {});

export const Route = createFileRoute("/")({
  loader: async ({ context: { queryClient } }) =>
    await queryClient.ensureQueryData(usersQueryOptions),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="text-center">
      <div className="not-prose flex justify-center mb-4">
        <Zap className="w-16 h-16 text-primary" />
      </div>
      <h1>Fullstack Vibe Coding</h1>

      <Unauthenticated>
        <p>Sign in to see the list of users.</p>
        <div className="not-prose mt-4">
          <SignInButton mode="modal">
            <button className="btn btn-primary btn-lg">Get Started</button>
          </SignInButton>
        </div>
      </Unauthenticated>

      <Authenticated>
        <UsersList />
      </Authenticated>
    </div>
  );
}

function UsersList() {
  const { data: users } = useSuspenseQuery(usersQueryOptions);

  return (
    <>
      <h2>Users</h2>

      {users.length === 0 ? (
        <div className="not-prose">
          <div className="p-8 bg-base-200 rounded-lg">
            <p className="opacity-70">No users yet. You're the first!</p>
          </div>
        </div>
      ) : (
        <div className="not-prose overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{new Date(user._creationTime).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
