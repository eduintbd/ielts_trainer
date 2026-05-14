import { pgTable, text, timestamp, integer, jsonb, pgEnum, index, real, uuid, customType } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users, targetExam } from './auth';

export const examSection = pgEnum('exam_section', [
  'listening',
  'reading',
  'writing',
  'speaking',
]);

export const questionType = pgEnum('question_type', [
  'mcq',
  'multi_select',
  'fill_blank',
  'matching',
  'short_answer',
  'essay',
  'speaking_prompt',
  'listening_audio',
  'reading_passage',
]);

export const paperSource = pgEnum('paper_source', ['official', 'past_paper', 'mock', 'practice']);

export const difficulty = pgEnum('difficulty', ['beginner', 'intermediate', 'advanced', 'expert']);

export const accent = pgEnum('accent', ['british', 'american', 'australian', 'indian', 'mixed']);

export const attemptStatus = pgEnum('attempt_status', [
  'in_progress',
  'submitted',
  'grading',
  'graded',
  'abandoned',
]);

const vector = customType<{ data: number[]; driverData: string }>({
  dataType() {
    return 'vector(1024)';
  },
  toDriver(value) {
    return `[${value.join(',')}]`;
  },
  fromDriver(value) {
    return JSON.parse(value);
  },
});

export const exams = pgTable('exams', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: targetExam('type').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  structureJson: jsonb('structure_json').$type<ExamStructure>(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export type ExamStructure = {
  sections: Array<{
    section: 'listening' | 'reading' | 'writing' | 'speaking';
    durationMinutes: number;
    questionCount: number;
  }>;
};

export const testPapers = pgTable(
  'test_papers',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    examId: uuid('exam_id').notNull().references(() => exams.id, { onDelete: 'cascade' }),
    year: integer('year'),
    source: paperSource('source').notNull().default('mock'),
    title: text('title').notNull(),
    description: text('description'),
    difficulty: difficulty('difficulty').notNull().default('intermediate'),
    accent: accent('accent').default('british'),
    durationMinutes: integer('duration_minutes').notNull(),
    locked: text('locked').default('public'), // public | premium | admin_only
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    examIdx: index('test_papers_exam_idx').on(t.examId),
    sourceIdx: index('test_papers_source_idx').on(t.source),
  }),
);

export const testQuestions = pgTable(
  'test_questions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    paperId: uuid('paper_id').notNull().references(() => testPapers.id, { onDelete: 'cascade' }),
    section: examSection('section').notNull(),
    type: questionType('type').notNull(),
    orderIndex: integer('order_index').notNull(),
    prompt: text('prompt').notNull(),
    audioBlobKey: text('audio_blob_key'),
    imageBlobKey: text('image_blob_key'),
    passageText: text('passage_text'),
    optionsJson: jsonb('options_json').$type<string[]>(),
    correctAnswerJson: jsonb('correct_answer_json'),
    rubricJson: jsonb('rubric_json'),
    points: integer('points').notNull().default(1),
    embedding: vector('embedding'),
  },
  (t) => ({
    paperIdx: index('test_questions_paper_idx').on(t.paperId),
    sectionIdx: index('test_questions_section_idx').on(t.section),
  }),
);

export const testAttempts = pgTable(
  'test_attempts',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    paperId: uuid('paper_id').notNull().references(() => testPapers.id, { onDelete: 'cascade' }),
    status: attemptStatus('status').notNull().default('in_progress'),
    startedAt: timestamp('started_at', { withTimezone: true }).notNull().defaultNow(),
    finishedAt: timestamp('finished_at', { withTimezone: true }),
    durationSeconds: integer('duration_seconds'),
    scoresJson: jsonb('scores_json').$type<AttemptScores>(),
    bandOverall: real('band_overall'),
    aiFeedbackMd: text('ai_feedback_md'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userIdx: index('test_attempts_user_idx').on(t.userId),
    paperIdx: index('test_attempts_paper_idx').on(t.paperId),
    statusIdx: index('test_attempts_status_idx').on(t.status),
  }),
);

export type AttemptScores = {
  listening?: number;
  reading?: number;
  writing?: { taskAchievement: number; coherence: number; lexical: number; grammar: number; band: number };
  speaking?: { fluency: number; lexical: number; grammar: number; pronunciation: number; band: number };
};

export const attemptResponses = pgTable(
  'attempt_responses',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    attemptId: uuid('attempt_id').notNull().references(() => testAttempts.id, { onDelete: 'cascade' }),
    questionId: uuid('question_id').notNull().references(() => testQuestions.id, { onDelete: 'cascade' }),
    responseText: text('response_text'),
    responseAudioBlobKey: text('response_audio_blob_key'),
    transcript: text('transcript'),
    score: real('score'),
    aiFeedback: text('ai_feedback'),
    correctedTextDiff: jsonb('corrected_text_diff'),
    embedding: vector('embedding'),
    autoSavedAt: timestamp('auto_saved_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    attemptIdx: index('attempt_responses_attempt_idx').on(t.attemptId),
    questionIdx: index('attempt_responses_question_idx').on(t.questionId),
  }),
);

export const examsRelations = relations(exams, ({ many }) => ({
  papers: many(testPapers),
}));

export const testPapersRelations = relations(testPapers, ({ one, many }) => ({
  exam: one(exams, { fields: [testPapers.examId], references: [exams.id] }),
  questions: many(testQuestions),
  attempts: many(testAttempts),
}));

export const testQuestionsRelations = relations(testQuestions, ({ one, many }) => ({
  paper: one(testPapers, { fields: [testQuestions.paperId], references: [testPapers.id] }),
  responses: many(attemptResponses),
}));

export const testAttemptsRelations = relations(testAttempts, ({ one, many }) => ({
  user: one(users, { fields: [testAttempts.userId], references: [users.id] }),
  paper: one(testPapers, { fields: [testAttempts.paperId], references: [testPapers.id] }),
  responses: many(attemptResponses),
}));

export const attemptResponsesRelations = relations(attemptResponses, ({ one }) => ({
  attempt: one(testAttempts, { fields: [attemptResponses.attemptId], references: [testAttempts.id] }),
  question: one(testQuestions, { fields: [attemptResponses.questionId], references: [testQuestions.id] }),
}));

export type Exam = typeof exams.$inferSelect;
export type TestPaper = typeof testPapers.$inferSelect;
export type TestQuestion = typeof testQuestions.$inferSelect;
export type TestAttempt = typeof testAttempts.$inferSelect;
export type AttemptResponse = typeof attemptResponses.$inferSelect;
