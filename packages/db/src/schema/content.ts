import { pgTable, text, timestamp, integer, jsonb, pgEnum, index, uuid, real, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './auth';
import { exams, examSection, difficulty } from './exam';

export const lessonKind = pgEnum('lesson_kind', ['video', 'article', 'pdf', 'live_recording']);

export const lessons = pgTable(
  'lessons',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    examId: uuid('exam_id').references(() => exams.id, { onDelete: 'set null' }),
    section: examSection('section'),
    kind: lessonKind('kind').notNull().default('video'),
    title: text('title').notNull(),
    description: text('description'),
    videoBlobKey: text('video_blob_key'),
    pdfBlobKey: text('pdf_blob_key'),
    bodyMd: text('body_md'),
    transcript: text('transcript'),
    durationSeconds: integer('duration_seconds'),
    difficulty: difficulty('difficulty').notNull().default('beginner'),
    orderIndex: integer('order_index').notNull().default(0),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    examIdx: index('lessons_exam_idx').on(t.examId),
    sectionIdx: index('lessons_section_idx').on(t.section),
  }),
);

export const lessonProgress = pgTable(
  'lesson_progress',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    lessonId: uuid('lesson_id').notNull().references(() => lessons.id, { onDelete: 'cascade' }),
    watchedSeconds: integer('watched_seconds').notNull().default(0),
    watchedPct: real('watched_pct').notNull().default(0),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    lastSeenAt: timestamp('last_seen_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userIdx: index('lesson_progress_user_idx').on(t.userId),
    lessonIdx: index('lesson_progress_lesson_idx').on(t.lessonId),
  }),
);

export const voiceMode = pgEnum('voice_mode', [
  'free_conversation',
  'speaking_part_1',
  'speaking_part_2',
  'speaking_part_3',
  'listening_drill',
  'translate_bn_en',
  'translate_en_bn',
  'pronunciation_drill',
]);

export const voiceSessions = pgTable(
  'voice_sessions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    mode: voiceMode('mode').notNull(),
    accent: text('accent').default('british'),
    durationSeconds: integer('duration_seconds').notNull().default(0),
    transcriptJson: jsonb('transcript_json').$type<VoiceTurn[]>(),
    scoresJson: jsonb('scores_json').$type<VoiceScores>(),
    summaryMd: text('summary_md'),
    startedAt: timestamp('started_at', { withTimezone: true }).notNull().defaultNow(),
    endedAt: timestamp('ended_at', { withTimezone: true }),
  },
  (t) => ({
    userIdx: index('voice_sessions_user_idx').on(t.userId),
    modeIdx: index('voice_sessions_mode_idx').on(t.mode),
  }),
);

export type VoiceTurn = {
  role: 'user' | 'assistant';
  text: string;
  audioBlobKey?: string;
  startMs: number;
  endMs: number;
  corrections?: Array<{ original: string; corrected: string; reason: string }>;
};

export type VoiceScores = {
  fluency: number;
  pronunciation: number;
  grammar: number;
  vocabulary: number;
  band: number;
};

export const aiThreads = pgTable(
  'ai_threads',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    title: text('title').notNull().default('New chat'),
    pinned: boolean('pinned').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userIdx: index('ai_threads_user_idx').on(t.userId),
  }),
);

export const aiMessages = pgTable(
  'ai_messages',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    threadId: uuid('thread_id').notNull().references(() => aiThreads.id, { onDelete: 'cascade' }),
    role: text('role').notNull(), // user | assistant | system | tool
    content: text('content').notNull(),
    toolCallsJson: jsonb('tool_calls_json'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    threadIdx: index('ai_messages_thread_idx').on(t.threadId),
  }),
);

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  exam: one(exams, { fields: [lessons.examId], references: [exams.id] }),
  progress: many(lessonProgress),
}));

export const lessonProgressRelations = relations(lessonProgress, ({ one }) => ({
  user: one(users, { fields: [lessonProgress.userId], references: [users.id] }),
  lesson: one(lessons, { fields: [lessonProgress.lessonId], references: [lessons.id] }),
}));

export const voiceSessionsRelations = relations(voiceSessions, ({ one }) => ({
  user: one(users, { fields: [voiceSessions.userId], references: [users.id] }),
}));

export const aiThreadsRelations = relations(aiThreads, ({ one, many }) => ({
  user: one(users, { fields: [aiThreads.userId], references: [users.id] }),
  messages: many(aiMessages),
}));

export const aiMessagesRelations = relations(aiMessages, ({ one }) => ({
  thread: one(aiThreads, { fields: [aiMessages.threadId], references: [aiThreads.id] }),
}));

export type Lesson = typeof lessons.$inferSelect;
export type LessonProgress = typeof lessonProgress.$inferSelect;
export type VoiceSession = typeof voiceSessions.$inferSelect;
export type AiThread = typeof aiThreads.$inferSelect;
export type AiMessage = typeof aiMessages.$inferSelect;
