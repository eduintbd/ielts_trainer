import { z } from 'zod';

export const WritingBandsSchema = z.object({
  taskAchievement: z.number().min(0).max(9),
  coherence: z.number().min(0).max(9),
  lexical: z.number().min(0).max(9),
  grammar: z.number().min(0).max(9),
  band: z.number().min(0).max(9),
});
export type WritingBands = z.infer<typeof WritingBandsSchema>;

export const SpeakingBandsSchema = z.object({
  fluency: z.number().min(0).max(9),
  lexical: z.number().min(0).max(9),
  grammar: z.number().min(0).max(9),
  pronunciation: z.number().min(0).max(9),
  band: z.number().min(0).max(9),
});
export type SpeakingBands = z.infer<typeof SpeakingBandsSchema>;

export const CorrectionSchema = z.object({
  original: z.string(),
  corrected: z.string(),
  reason: z.string(),
  category: z.enum(['grammar', 'lexical', 'spelling', 'punctuation', 'style']),
  startIndex: z.number().int(),
  endIndex: z.number().int(),
});
export type Correction = z.infer<typeof CorrectionSchema>;

export const GradeWritingRequestSchema = z.object({
  attemptId: z.string().uuid(),
  questionId: z.string().uuid(),
  prompt: z.string(),
  responseText: z.string(),
  rubric: z.string().optional(),
  taskKind: z.enum(['task1', 'task2', 'integrated', 'independent']),
});
export type GradeWritingRequest = z.infer<typeof GradeWritingRequestSchema>;

export const GradeWritingResponseSchema = z.object({
  bands: WritingBandsSchema,
  feedbackMd: z.string(),
  corrections: z.array(CorrectionSchema),
  improvementHints: z.array(z.string()),
});
export type GradeWritingResponse = z.infer<typeof GradeWritingResponseSchema>;

export const GradeSpeakingRequestSchema = z.object({
  attemptId: z.string().uuid(),
  questionId: z.string().uuid(),
  audioBlobKey: z.string(),
  prompt: z.string(),
  expectedDurationS: z.number().optional(),
});
export type GradeSpeakingRequest = z.infer<typeof GradeSpeakingRequestSchema>;

export const GradeSpeakingResponseSchema = z.object({
  bands: SpeakingBandsSchema,
  transcript: z.string(),
  wordsPerMinute: z.number(),
  fillerCount: z.number(),
  pauseCount: z.number(),
  feedbackMd: z.string(),
  corrections: z.array(CorrectionSchema),
});
export type GradeSpeakingResponse = z.infer<typeof GradeSpeakingResponseSchema>;
