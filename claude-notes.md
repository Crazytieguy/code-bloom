# Claude Code Session Notes

## Session Start
- Starting commit: 967e064
- Session commits:
  - 7db1427 feat: add interactive development flow diagram to home page
  - Updated diagram with custom logos and side panel layout

## Current Work
- Working on Code Bloom template project
- Focus: Community features and documentation
- Just updated: Interactive diagram with custom Vercel/Namecheap logos and side panel connections

## Status
- Project is running with development servers active
- All auth features working with Clerk in production
- Interactive diagram on home page shows:
  - Developer workflow components
  - Development tools (Claude Code, Node.js, Vite, etc.)
  - Cloud services (GitHub, Vercel, Convex, Clerk, etc.)
  - How everything connects together
  - Click-to-explore functionality
  - Side panel for connection flow (desktop view)
  - Custom Vercel and Namecheap logos
  - Moved below page links as requested

## Important Context
- Using Convex for backend with auth configured
- TanStack Router for navigation
- DaisyUI for styling (v5 with Tailwind CSS 4)
- Authentication uses Clerk with Convex integration

## Key Files
- `/src/routes/` - All page routes
- `/convex/` - Backend functions
- `/src/components/` - Reusable components
- `/src/components/DevelopmentFlowDiagram.tsx` - Interactive diagram component with custom icons
- `CLAUDE.md` - Project guidelines

## Next Steps
- User will provide feedback on connection descriptions
- Consider adding more interactive features
- Expand community report functionality
- Improve documentation and examples