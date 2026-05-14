/**
 * Streak math — number of consecutive UTC days a user has been active.
 * Time zone for "day" is BDT (UTC+6) since target users are in Bangladesh.
 */

const BD_OFFSET_HOURS = 6;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function bdtDayKey(date: Date): string {
  const shifted = new Date(date.getTime() + BD_OFFSET_HOURS * 60 * 60 * 1000);
  return shifted.toISOString().slice(0, 10); // YYYY-MM-DD in BDT
}

function bdtDayDiff(a: Date, b: Date): number {
  const aKey = bdtDayKey(a);
  const bKey = bdtDayKey(b);
  const aDate = new Date(`${aKey}T00:00:00Z`);
  const bDate = new Date(`${bKey}T00:00:00Z`);
  return Math.round((aDate.getTime() - bDate.getTime()) / MS_PER_DAY);
}

export type StreakState = {
  streakDays: number;
  longestStreak: number;
  lastActiveAt: Date | null;
};

export function applyActivity(state: StreakState, now: Date = new Date()): StreakState {
  if (!state.lastActiveAt) {
    return {
      streakDays: 1,
      longestStreak: Math.max(1, state.longestStreak),
      lastActiveAt: now,
    };
  }
  const diff = bdtDayDiff(now, state.lastActiveAt);
  if (diff === 0) {
    return { ...state, lastActiveAt: now };
  }
  if (diff === 1) {
    const newStreak = state.streakDays + 1;
    return {
      streakDays: newStreak,
      longestStreak: Math.max(newStreak, state.longestStreak),
      lastActiveAt: now,
    };
  }
  // missed a day or more
  return {
    streakDays: 1,
    longestStreak: Math.max(state.longestStreak, 1),
    lastActiveAt: now,
  };
}

export function streakBonusXp(streakDays: number): number {
  if (streakDays >= 100) return 100;
  if (streakDays >= 30) return 50;
  if (streakDays >= 7) return 25;
  return 0;
}
