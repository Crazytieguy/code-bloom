# Claude Notes - Information Sharing Feature

## Current Feature: Community Reports
Implementing a community-driven information sharing system where users can:
- Share their Claude Code experiences as markdown reports
- View and "plus" (upvote) other users' reports
- Browse reports sorted by popularity

## Implementation Progress:
✅ Created Convex schema for reports with user relationships
✅ Implemented CRUD operations for reports in Convex
✅ Created report submission page with markdown parsing
✅ Created reports list page with pagination
✅ Created individual report view page with markdown rendering
✅ Implemented plus/upvote functionality
✅ Added authentication integration with Clerk
✅ Updated navigation to include Reports section
✅ Added Community Reports section to home page

## Technical Details:
- Reports use markdown format with specific structure:
  - Title from first heading (#)
  - Description from first paragraph
  - Full content stored and rendered with react-markdown
- Plus/upvote system tracks unique user votes
- Reports sorted by plusCount in descending order
- Authentication required for submitting and plussing reports

## Next Steps:
- User can test the feature by signing in and creating reports
- Consider adding user profile pages to see all reports by a user
- Could add search/filter functionality for reports
- Consider adding categories or tags for reports