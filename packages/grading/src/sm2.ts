/**
 * SuperMemo SM-2 spaced repetition algorithm.
 * Reference: https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method
 *
 * Quality scale (q):
 *   0 - complete blackout
 *   1 - incorrect, but on seeing the answer it felt familiar
 *   2 - incorrect, but the answer seemed easy to remember
 *   3 - correct, but with serious difficulty
 *   4 - correct, after some hesitation
 *   5 - perfect recall
 *
 * For UX, we expose 4 buttons: Again (0), Hard (3), Good (4), Easy (5).
 */

export type SM2State = {
  ease: number;        // E-Factor, starts at 2.5
  interval: number;    // days
  repetitions: number; // consecutive correct
  lapses: number;
  dueAt: Date;
};

export type SM2Quality = 0 | 1 | 2 | 3 | 4 | 5;

export const INITIAL_STATE: Omit<SM2State, 'dueAt'> = {
  ease: 2.5,
  interval: 0,
  repetitions: 0,
  lapses: 0,
};

/**
 * Compute the next SRS state given the previous state and a quality grade.
 * Pure function — no Date.now() calls, takes `now` as input for testability.
 */
export function reviewCard(prev: SM2State, quality: SM2Quality, now: Date = new Date()): SM2State {
  const passed = quality >= 3;

  let { ease, interval, repetitions, lapses } = prev;

  if (passed) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1; // reschedule for tomorrow
    lapses += 1;
  }

  // E-Factor update (clamp at 1.3)
  ease = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (ease < 1.3) ease = 1.3;

  const dueAt = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

  return { ease, interval, repetitions, lapses, dueAt };
}

/** Bucket cards by review urgency for UI. */
export function bucketByDueness(due: Date, now: Date = new Date()): 'overdue' | 'today' | 'soon' | 'later' {
  const diffMs = due.getTime() - now.getTime();
  const day = 24 * 60 * 60 * 1000;
  if (diffMs < 0) return 'overdue';
  if (diffMs < day) return 'today';
  if (diffMs < 3 * day) return 'soon';
  return 'later';
}
