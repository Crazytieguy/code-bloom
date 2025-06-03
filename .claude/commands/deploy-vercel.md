# Deploy to Vercel

Guide a user through deploying their application to Vercel

## Step 1: Prepare Repository

- Ensure all changes are committed: `git status` should show clean working tree
- Push to your remote repository: `git push origin main`
- Verify the push was successful

## Step 2: Set Up Convex Production

- Go to [Convex Dashboard](https://dashboard.convex.dev)
- Navigate to your project
- Create a production deployment
- Generate a production deployment key
  - Select your project -> production
  - Settings
  - "Generate Production Deployment Key"
- Copy the deployment key (you'll need it for Vercel environment variables)

## Step 3: Deploy to Vercel

- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Log in to your Vercel account
- Click "New Project" or "Add New..."
- Connect your GitHub/GitLab/Bitbucket repository
- Select the repository containing your application
- Project settings will be auto detected from vercel.json

## Step 4: Configure Environment Variables

In the Vercel project settings, add these environment variables:

- `CONVEX_DEPLOY_KEY`: Use the production deployment key from Step 2
- `VITE_CLERK_PUBLISHABLE_KEY`: Copy from @.env.example

## Step 5: Deploy and Verify

- Click "Deploy" to start the deployment
- Wait for the build to complete
- Visit your deployed application URL
