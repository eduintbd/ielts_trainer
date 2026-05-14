import { z } from 'zod';

export const XpReasonSchema = z.enum([
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
export type XpReason = z.infer<typeof XpReasonSchema>;

export const XP_VALUES: Record<XpReason, number> = {
  test_completed: 100,
  lesson_watched: 25,
  vocab_reviewed: 5,
  voice_session: 50,
  forum_helpful_answer: 30,
  daily_login: 10,
  streak_bonus: 0, // computed dynamically
  perfect_score: 50,
  admin_grant: 0,
};

export const LeaderboardPeriodSchema = z.enum(['daily', 'weekly', 'all_time']);
export type LeaderboardPeriod = z.infer<typeof LeaderboardPeriodSchema>;

export type Badge = {
  id: string;
  name: string;
  description: string;
  iconKey?: string;
};

export const STARTER_BADGES: Badge[] = [
  { id: 'first_steps', name: 'First Steps', description: 'Sign up and complete your profile.' },
  { id: 'first_mock', name: 'Test Pilot', description: 'Complete your first mock test.' },
  { id: 'streak_7', name: 'Week Warrior', description: 'Maintain a 7-day study streak.' },
  { id: 'streak_30', name: 'Habit Forged', description: 'Maintain a 30-day study streak.' },
  { id: 'streak_100', name: 'Centurion', description: 'Maintain a 100-day study streak.' },
  { id: 'vocab_500', name: 'Word Hoarder', description: 'Review 500 vocabulary cards.' },
  { id: 'speaking_first', name: 'Voice Activated', description: 'Complete your first voice session.' },
  { id: 'band_7', name: 'Seven Up', description: 'Score Band 7 on a writing or speaking test.' },
  { id: 'band_8', name: 'Eight Outstanding', description: 'Score Band 8 on a writing or speaking test.' },
  { id: 'helpful_10', name: 'Mentor', description: '10 of your forum answers were marked helpful.' },
  { id: 'top_100', name: 'Top 100', description: 'Reach top 100 on the weekly leaderboard.' },
];
