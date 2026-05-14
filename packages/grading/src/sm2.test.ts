import { describe, it, expect } from 'vitest';
import { reviewCard, INITIAL_STATE, bucketByDueness, type SM2State } from './sm2';

const start = new Date('2026-01-01T00:00:00Z');

const initial: SM2State = { ...INITIAL_STATE, dueAt: start };

describe('SM-2', () => {
  it('first perfect review schedules 1 day out', () => {
    const next = reviewCard(initial, 5, start);
    expect(next.repetitions).toBe(1);
    expect(next.interval).toBe(1);
    expect(next.dueAt.getTime() - start.getTime()).toBe(24 * 60 * 60 * 1000);
  });

  it('second review schedules 6 days out', () => {
    const after1 = reviewCard(initial, 5, start);
    const after2 = reviewCard(after1, 5, after1.dueAt);
    expect(after2.repetitions).toBe(2);
    expect(after2.interval).toBe(6);
  });

  it('third review uses ease factor (interval uses ease from before this review)', () => {
    const after1 = reviewCard(initial, 5, start);
    const after2 = reviewCard(after1, 5, after1.dueAt);
    const after3 = reviewCard(after2, 5, after2.dueAt);
    expect(after3.repetitions).toBe(3);
    expect(after3.interval).toBe(Math.round(after2.interval * after2.ease));
  });

  it('failure resets repetitions and increments lapses', () => {
    let s = reviewCard(initial, 5, start);
    s = reviewCard(s, 5, s.dueAt);
    const fail = reviewCard(s, 1, s.dueAt);
    expect(fail.repetitions).toBe(0);
    expect(fail.lapses).toBe(1);
    expect(fail.interval).toBe(1);
  });

  it('ease factor floors at 1.3', () => {
    let s = initial;
    for (let i = 0; i < 20; i++) {
      s = reviewCard(s, 0, s.dueAt);
    }
    expect(s.ease).toBeGreaterThanOrEqual(1.3);
  });

  it('bucketByDueness classifies correctly', () => {
    const now = new Date('2026-01-01T12:00:00Z');
    expect(bucketByDueness(new Date('2025-12-31T00:00:00Z'), now)).toBe('overdue');
    expect(bucketByDueness(new Date('2026-01-01T18:00:00Z'), now)).toBe('today');
    expect(bucketByDueness(new Date('2026-01-03T00:00:00Z'), now)).toBe('soon');
    expect(bucketByDueness(new Date('2026-01-10T00:00:00Z'), now)).toBe('later');
  });
});
