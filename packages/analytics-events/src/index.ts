/**
 * Single source of truth for product-analytics event names + payload shapes.
 * Both web and mobile import from here. Keeps PostHog/admin dashboards consistent.
 */

export type AnalyticsEvents = {
  // Auth
  user_signed_up: { method: 'email' | 'google' | 'facebook' };
  user_signed_in: { method: 'email' | 'google' | 'facebook' };
  user_signed_out: Record<string, never>;

  // Onboarding
  onboarding_started: { surface: Surface };
  onboarding_completed: { targetExam: string; targetBand?: string };

  // Tests
  test_paper_viewed: { paperId: string; examType: string };
  test_attempt_started: { attemptId: string; paperId: string; examType: string };
  test_attempt_resumed: { attemptId: string };
  test_attempt_submitted: { attemptId: string; durationSeconds: number };
  test_attempt_graded: { attemptId: string; bandOverall: number };

  // Lessons
  lesson_started: { lessonId: string };
  lesson_completed: { lessonId: string; watchedPct: number };

  // Vocab
  vocab_card_reviewed: { cardId: string; quality: number; deckId: string };
  vocab_offline_synced: { count: number };

  // Voice
  voice_session_started: { sessionId: string; mode: string; accent: string };
  voice_session_ended: { sessionId: string; durationSeconds: number };
  voice_turn_completed: { sessionId: string; userMs: number; assistantMs: number };

  // Forum
  forum_topic_created: { topicId: string; category: string };
  forum_reply_created: { replyId: string; topicId: string };
  forum_voted: { targetKind: 'topic' | 'reply'; targetId: string; value: -1 | 0 | 1 };

  // Gamification
  xp_awarded: { reason: string; amount: number; total: number };
  badge_earned: { badgeId: string };
  streak_extended: { days: number };
  streak_broken: { previousDays: number };

  // AI
  ai_chat_message_sent: { threadId: string; promptTokens?: number };
  ai_chat_message_received: { threadId: string; latencyMs: number; model: string };

  // Errors
  error_caught: { surface: Surface; component?: string; message: string };
};

export type Surface = 'web' | 'ios' | 'android' | 'admin';
export type EventName = keyof AnalyticsEvents;

export type EventPayload<N extends EventName> = AnalyticsEvents[N] & {
  surface?: Surface;
  ts?: number;
};

/** Type-safe event constructor used by client analytics wrappers. */
export function buildEvent<N extends EventName>(name: N, props: AnalyticsEvents[N]) {
  return { name, props } as { name: N; props: AnalyticsEvents[N] };
}
