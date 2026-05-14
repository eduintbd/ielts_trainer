import { z } from 'zod';
import { AccentSchema } from './exam';

export const VoiceModeSchema = z.enum([
  'free_conversation',
  'speaking_part_1',
  'speaking_part_2',
  'speaking_part_3',
  'listening_drill',
  'translate_bn_en',
  'translate_en_bn',
  'pronunciation_drill',
]);
export type VoiceMode = z.infer<typeof VoiceModeSchema>;

export const VoiceTurnRoleSchema = z.enum(['user', 'assistant']);

export const VoiceTurnSchema = z.object({
  role: VoiceTurnRoleSchema,
  text: z.string(),
  audioBlobKey: z.string().optional(),
  startMs: z.number(),
  endMs: z.number(),
  corrections: z
    .array(
      z.object({
        original: z.string(),
        corrected: z.string(),
        reason: z.string(),
      }),
    )
    .optional(),
});
export type VoiceTurn = z.infer<typeof VoiceTurnSchema>;

export const StartVoiceSessionSchema = z.object({
  mode: VoiceModeSchema,
  accent: AccentSchema.default('british'),
});
export type StartVoiceSessionInput = z.infer<typeof StartVoiceSessionSchema>;

export const VoiceTurnRequestSchema = z.object({
  sessionId: z.string().uuid(),
  audioBlobKey: z.string(),
  userText: z.string().optional(),
});
export type VoiceTurnRequest = z.infer<typeof VoiceTurnRequestSchema>;

export const VoiceTurnResponseSchema = z.object({
  userTurn: VoiceTurnSchema,
  assistantTurn: VoiceTurnSchema,
  ttsAudioUrl: z.string().url(),
});
export type VoiceTurnResponse = z.infer<typeof VoiceTurnResponseSchema>;
