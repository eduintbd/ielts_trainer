import { pgTable, text, timestamp, integer, jsonb, pgEnum, index, uuid, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './auth';

export const xpReason = pgEnum('xp_reason', [
  'test_completed',
  'lesson_watched',
  'vocab_reviewed',
  'voice_session',
  'forum_helpful_answer',
  'daily_login',
  'streak_bonus',
  'perfect_score',
  'admin_grant',
]);

export const userGamification = pgTable('user_gamification', {
  userId: text('user_id').primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  xp: integer('xp').notNull().default(0),
  level: integer('level').notNull().default(1),
  streakDays: integer('streak_days').notNull().default(0),
  longestStreak: integer('longest_streak').notNull().default(0),
  lastActiveAt: timestamp('last_active_at', { withTimezone: true }),
  badgesJson: jsonb('badges_json').$type<string[]>().default([]),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const xpEvents = pgTable(
  'xp_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    reason: xpReason('reason').notNull(),
    amount: integer('amount').notNull(),
    metaJson: jsonb('meta_json'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userIdx: index('xp_events_user_idx').on(t.userId),
    createdIdx: index('xp_events_created_idx').on(t.createdAt),
  }),
);

export const leaderboardPeriod = pgEnum('leaderboard_period', ['daily', 'weekly', 'all_time']);

export const leaderboardSnapshots = pgTable(
  'leaderboard_snapshots',
  {
    period: leaderboardPeriod('period').notNull(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    xp: integer('xp').notNull(),
    rank: integer('rank').notNull(),
    capturedAt: timestamp('captured_at', { withTimezone: true }).notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.period, t.userId, t.capturedAt] }),
    periodIdx: index('leaderboard_period_idx').on(t.period, t.capturedAt, t.rank),
  }),
);

export const badges = pgTable('badges', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  iconKey: text('icon_key'),
  criteriaJson: jsonb('criteria_json'),
});

export const userGamificationRelations = relations(userGamification, ({ one }) => ({
  user: one(users, { fields: [userGamification.userId], references: [users.id] }),
}));

export const xpEventsRelations = relations(xpEvents, ({ one }) => ({
  user: one(users, { fields: [xpEvents.userId], references: [users.id] }),
}));

export type UserGamification = typeof userGamification.$inferSelect;
export type XpEvent = typeof xpEvents.$inferSelect;
export type LeaderboardSnapshot = typeof leaderboardSnapshots.$inferSelect;
