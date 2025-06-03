import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    const reportId = await ctx.db.insert("reports", {
      userId: user._id,
      title: args.title,
      description: args.description,
      content: args.content,
      plusCount: 0,
    });

    return reportId;
  },
});

export const list = query({
  args: {
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    const reports = await ctx.db
      .query("reports")
      .withIndex("by_plus_count")
      .order("desc")
      .paginate(args.paginationOpts);

    const identity = await ctx.auth.getUserIdentity();
    let currentUser = null;
    if (identity) {
      currentUser = await ctx.db
        .query("users")
        .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
        .unique();
    }

    const reportsWithUsers = await Promise.all(
      reports.page.map(async (report) => {
        const user = await ctx.db.get(report.userId);
        
        let hasPlussed = false;
        if (currentUser) {
          const existingPlus = await ctx.db
            .query("reportPluses")
            .withIndex("by_user_and_report", (q) =>
              q.eq("userId", currentUser._id).eq("reportId", report._id)
            )
            .unique();
          
          hasPlussed = !!existingPlus;
        }
        
        return {
          ...report,
          userName: user?.name || "Unknown User",
          hasPlussed,
        };
      })
    );

    return {
      ...reports,
      page: reportsWithUsers,
    };
  },
});

export const get = query({
  args: {
    reportId: v.id("reports"),
  },
  handler: async (ctx, args) => {
    const report = await ctx.db.get(args.reportId);
    if (!report) {
      throw new ConvexError("Report not found");
    }

    const user = await ctx.db.get(report.userId);
    const identity = await ctx.auth.getUserIdentity();
    
    let hasPlussed = false;
    if (identity) {
      const currentUser = await ctx.db
        .query("users")
        .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
        .unique();
      
      if (currentUser) {
        const existingPlus = await ctx.db
          .query("reportPluses")
          .withIndex("by_user_and_report", (q) =>
            q.eq("userId", currentUser._id).eq("reportId", args.reportId)
          )
          .unique();
        
        hasPlussed = !!existingPlus;
      }
    }

    return {
      ...report,
      userName: user?.name || "Unknown User",
      hasPlussed,
    };
  },
});

export const togglePlus = mutation({
  args: {
    reportId: v.id("reports"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    const report = await ctx.db.get(args.reportId);
    if (!report) {
      throw new ConvexError("Report not found");
    }

    const existingPlus = await ctx.db
      .query("reportPluses")
      .withIndex("by_user_and_report", (q) =>
        q.eq("userId", user._id).eq("reportId", args.reportId)
      )
      .unique();

    if (existingPlus) {
      await ctx.db.delete(existingPlus._id);
      await ctx.db.patch(args.reportId, {
        plusCount: Math.max(0, report.plusCount - 1),
      });
      return { plussed: false };
    } else {
      await ctx.db.insert("reportPluses", {
        userId: user._id,
        reportId: args.reportId,
      });
      await ctx.db.patch(args.reportId, {
        plusCount: report.plusCount + 1,
      });
      return { plussed: true };
    }
  },
});

export const getUserReports = query({
  args: {
    userId: v.optional(v.id("users")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) {
      return [];
    }

    const targetUserId = args.userId || user._id;
    
    const reports = await ctx.db
      .query("reports")
      .withIndex("by_user", (q) => q.eq("userId", targetUserId))
      .collect();

    return reports;
  },
});