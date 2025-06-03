import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema defines your data model for the database.
// For more information, see https://docs.convex.dev/database/schema
export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
  }).index("by_clerkId", ["clerkId"]),
  
  reports: defineTable({
    userId: v.id("users"),
    title: v.string(),
    description: v.string(),
    content: v.string(),
    plusCount: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_plus_count", ["plusCount"]),
  
  reportPluses: defineTable({
    userId: v.id("users"),
    reportId: v.id("reports"),
  })
    .index("by_user", ["userId"])
    .index("by_report", ["reportId"])
    .index("by_user_and_report", ["userId", "reportId"]),
});
