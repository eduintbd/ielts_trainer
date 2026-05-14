import { z } from 'zod';

export const ExamTypeSchema = z.enum(['IELTS', 'TOEFL', 'PTE']);
export type ExamType = z.infer<typeof ExamTypeSchema>;

export const ExamSectionSchema = z.enum(['listening', 'reading', 'writing', 'speaking']);
export type ExamSection = z.infer<typeof ExamSectionSchema>;

export const QuestionTypeSchema = z.enum([
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
export type QuestionType = z.infer<typeof QuestionTypeSchema>;

export const DifficultySchema = z.enum(['beginner', 'intermediate', 'advanced', 'expert']);
export type Difficulty = z.infer<typeof DifficultySchema>;

export const AccentSchema = z.enum(['british', 'american', 'australian', 'indian', 'mixed']);
export type Accent = z.infer<typeof AccentSchema>;

export const AttemptStatusSchema = z.enum([
  'in_progress',
  'submitted',
  'grading',
  'graded',
  'abandoned',
]);
export type AttemptStatus = z.infer<typeof AttemptStatusSchema>;

export const AnswerSchema = z.union([
  z.object({ kind: z.literal('text'), value: z.string() }),
  z.object({ kind: z.literal('mcq'), value: z.string() }),
  z.object({ kind: z.literal('multi'), value: z.array(z.string()) }),
  z.object({ kind: z.literal('audio'), blobKey: z.string(), durationMs: z.number() }),
]);
export type Answer = z.infer<typeof AnswerSchema>;

export const SaveResponseSchema = z.object({
  attemptId: z.string().uuid(),
  questionId: z.string().uuid(),
  answer: AnswerSchema,
});
export type SaveResponseInput = z.infer<typeof SaveResponseSchema>;
