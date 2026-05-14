import { pgTable, text, timestamp, integer, pgEnum, index, uuid, boolean, smallint, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './auth';

export const forumCategory = pgEnum('forum_category', [
  'ielts_general',
  'toefl_general',
  'pte_general',
  'speaking_partners',
  'experiences',
  'study_tips',
  'visa_immigration',
  'meta',
]);

export const moderationStatus = pgEnum('moderation_status', [
  'visible',
  'flagged',
  'auto_hidden',
  'removed',
]);

export const forumTopics = pgTable(
  'forum_topics',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    category: forumCategory('category').notNull(),
    authorId: text('author_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    title: text('title').notNull(),
    bodyMd: text('body_md').notNull(),
    locked: boolean('locked').notNull().default(false),
    pinned: boolean('pinned').notNull().default(false),
    moderationStatus: moderationStatus('moderation_status').notNull().default('visible'),
    score: integer('score').notNull().default(0),
    replyCount: integer('reply_count').notNull().default(0),
    lastReplyAt: timestamp('last_reply_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    categoryIdx: index('forum_topics_category_idx').on(t.category),
    authorIdx: index('forum_topics_author_idx').on(t.authorId),
    pinnedIdx: index('forum_topics_pinned_idx').on(t.pinned, t.lastReplyAt),
  }),
);

export const forumReplies = pgTable(
  'forum_replies',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    topicId: uuid('topic_id').notNull().references(() => forumTopics.id, { onDelete: 'cascade' }),
    authorId: text('author_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    parentReplyId: uuid('parent_reply_id'),
    bodyMd: text('body_md').notNull(),
    moderationStatus: moderationStatus('moderation_status').notNull().default('visible'),
    score: integer('score').notNull().default(0),
    isAcceptedAnswer: boolean('is_accepted_answer').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    topicIdx: index('forum_replies_topic_idx').on(t.topicId),
    authorIdx: index('forum_replies_author_idx').on(t.authorId),
  }),
);

export const forumVotes = pgTable(
  'forum_votes',
  {
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    targetKind: text('target_kind').notNull(), // 'topic' | 'reply'
    targetId: uuid('target_id').notNull(),
    value: smallint('value').notNull(), // -1 | +1
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.targetKind, t.targetId] }),
  }),
);

export const forumReports = pgTable(
  'forum_reports',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    reporterId: text('reporter_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    targetKind: text('target_kind').notNull(),
    targetId: uuid('target_id').notNull(),
    reason: text('reason').notNull(),
    resolved: boolean('resolved').notNull().default(false),
    resolvedById: text('resolved_by_id').references(() => users.id),
    resolvedAt: timestamp('resolved_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    targetIdx: index('forum_reports_target_idx').on(t.targetKind, t.targetId),
    resolvedIdx: index('forum_reports_resolved_idx').on(t.resolved),
  }),
);

export const forumTopicsRelations = relations(forumTopics, ({ one, many }) => ({
  author: one(users, { fields: [forumTopics.authorId], references: [users.id] }),
  replies: many(forumReplies),
}));

export const forumRepliesRelations = relations(forumReplies, ({ one }) => ({
  topic: one(forumTopics, { fields: [forumReplies.topicId], references: [forumTopics.id] }),
  author: one(users, { fields: [forumReplies.authorId], references: [users.id] }),
}));

export type ForumTopic = typeof forumTopics.$inferSelect;
export type ForumReply = typeof forumReplies.$inferSelect;
export type ForumVote = typeof forumVotes.$inferSelect;
