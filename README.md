# Full-Stack Web Application Starter Template

This starter template accelerates full-stack web app development, emphasizing an excellent Developer Experience (DX), especially for LLM-assisted coding. It integrates Convex, TanStack Router, Clerk, Vite, React, and Tailwind CSS to provide a robust foundation.

## Quick Start for Humans

Follow these steps to get your development environment set up:

1.  **Install pnpm:**

    ```bash
    curl -fsSL https://get.pnpm.io/install.sh | sh -
    ```

    _Restart your terminal after installation for `pnpm` to be available._

2.  **Install Node.js (if needed):**

    ```bash
    pnpm env use --global lts
    ```

3.  **Use this template:**

    Click "Use this template" on GitHub to create your own repository, then clone it.

4.  **Install Claude Code:**

    Claude Code is highly recommended for this template.

    ```bash
    pnpm install -g @anthropic-ai/claude-code
    ```

    Further Instructions: [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)

5.  **Initialize the project:**

    ```bash
    pnpm run init
    ```

    This will:

    - Install all dependencies
    - Initialize Convex

6.  **Run the app:**

    ```bash
    pnpm dev
    ```

7.  **Clerk Configuration:**

    The app comes preconfigured with a demo Clerk instance for development.

    For using your own Clerk account:

    - Follow steps 1 to 3 in the [Clerk onboarding guide](https://docs.convex.dev/auth/clerk#get-started)
    - Paste the Issuer URL as `CLERK_JWT_ISSUER_DOMAIN` to your dev deployment environment variable settings on the Convex dashboard (see [docs](https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances))
    - Paste your publishable key as `VITE_CLERK_PUBLISHABLE_KEY="<your publishable key>"` to the `.env.local` file in this directory.

## Deployment

### Vercel

This template includes a `vercel.json` file configured for Convex deployments. To deploy:

1. Connect your repository to Vercel via their GitHub integration
2. Set `CONVEX_DEPLOY_KEY` in Vercel environment variables (generate in Convex dashboard)
3. Set `VITE_CLERK_PUBLISHABLE_KEY` for your production environment

For detailed instructions, see [Convex Vercel Deployment Guide](https://docs.convex.dev/production/hosting/vercel).

## License

MIT
