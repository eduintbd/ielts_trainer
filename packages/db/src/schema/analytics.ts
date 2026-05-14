import { pgTable, text, timestamp, jsonb, index, uuid } from 'drizzle-orm/pg-core';
import { users } from './auth';

export const analyticsEvents = pgTable(
  'analytics_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').references(() => users.id, { onDelete: 'set null' }),
    sessionId: text('session_id'),
    name: text('name').notNull(),
    propsJson: jsonb('props_json'),
    surface: text('surface'), // web | ios | android | admin
    ipHash: text('ip_hash'),
    userAgent: text('user_agent'),
    ts: timestamp('ts', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userIdx: index('analytics_events_user_idx').on(t.userId),
    nameIdx: index('analytics_events_name_idx').on(t.name),
    tsIdx: index('analytics_events_ts_idx').on(t.ts),
  }),
);

export const auditLog = pgTable(
  'audit_log',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    actorId: text('actor_id').references(() => users.id, { onDelete: 'set null' }),
    action: text('action').notNull(),
    targetKind: text('target_kind'),
    targetId: text('target_id'),
    payloadJson: jsonb('payload_json'),
    ipHash: text('ip_hash'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    actorIdx: index('audit_log_actor_idx').on(t.actorId),
    targetIdx: index('audit_log_target_idx').on(t.targetKind, t.targetId),
    createdIdx: index('audit_log_created_idx').on(t.createdAt),
  }),
);

export const notifications = pgTable(
  'notifications',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').notNull(), // streak_warning | grading_complete | mention | reply | badge_earned
    title: text('title').notNull(),
    body: text('body'),
    payloadJson: jsonb('payload_json'),
    readAt: timestamp('read_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userIdx: index('notifications_user_idx').on(t.userId, t.createdAt),
    unreadIdx: index('notifications_unread_idx').on(t.userId, t.readAt),
  }),
);

export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type AuditLogEntry = typeof auditLog.$inferSelect;
export type Notification = typeof notifications.$inferSelect;
