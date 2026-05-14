import { z } from 'zod';

export const ForumCategorySchema = z.enum([
  'ielts_general',
  'toefl_general',
  'pte_general',
  'speaking_partners',
  'experiences',
  'study_tips',
  'visa_immigration',
  'meta',
]);
export type ForumCategoryName = z.infer<typeof ForumCategorySchema>;

export const CreateTopicSchema = z.object({
  category: ForumCategorySchema,
  title: z.string().min(8).max(200),
  bodyMd: z.string().min(20).max(20_000),
});
export type CreateTopicInput = z.infer<typeof CreateTopicSchema>;

export const CreateReplySchema = z.object({
  topicId: z.string().uuid(),
  parentReplyId: z.string().uuid().nullable().optional(),
  bodyMd: z.string().min(2).max(20_000),
});
export type CreateReplyInput = z.infer<typeof CreateReplySchema>;

export const VoteSchema = z.object({
  targetKind: z.enum(['topic', 'reply']),
  targetId: z.string().uuid(),
  value: z.union([z.literal(-1), z.literal(0), z.literal(1)]),
});
export type VoteInput = z.infer<typeof VoteSchema>;
