import { describe, it, expect } from 'vitest';
import { EXAM_COURSES, getCourse, ALL_EXAM_TYPES } from '../lib/courses';
import type { ExamType } from '../lib/courses';

describe('EXAM_COURSES', () => {
  it('has exactly 3 exams: ielts, toefl, pte', () => {
    const keys = Object.keys(EXAM_COURSES) as ExamType[];
    expect(keys).toHaveLength(3);
    expect(keys).toContain('ielts');
    expect(keys).toContain('toefl');
    expect(keys).toContain('pte');
  });

  for (const exam of ['ielts', 'toefl', 'pte'] as ExamType[]) {
    describe(`${exam.toUpperCase()} course`, () => {
      const course = EXAM_COURSES[exam];

      it('has exactly 3 tiers', () => {
        expect(course.tiers).toHaveLength(3);
      });

      it('tiers are named Foundation, Intermediate, Advanced in order', () => {
        expect(course.tiers[0].name).toBe('Foundation');
        expect(course.tiers[1].name).toBe('Intermediate');
        expect(course.tiers[2].name).toBe('Advanced');
      });

      it('Foundation is cheapest, Advanced is most expensive', () => {
        expect(course.tiers[0].price).toBeLessThan(course.tiers[1].price);
        expect(course.tiers[1].price).toBeLessThan(course.tiers[2].price);
      });

      it('all tiers have prices in BDT and are positive', () => {
        for (const tier of course.tiers) {
          expect(tier.currency).toBe('৳');
          expect(tier.price).toBeGreaterThan(0);
        }
      });

      it('specific prices match the agreed pricing (2999 / 4999 / 7999)', () => {
        expect(course.tiers[0].price).toBe(2999);
        expect(course.tiers[1].price).toBe(4999);
        expect(course.tiers[2].price).toBe(7999);
      });

      it('each tier has at least 5 modules', () => {
        for (const tier of course.tiers) {
          expect(tier.modules.length).toBeGreaterThanOrEqual(5);
        }
      });

      it('each tier has at least 2 free preview modules', () => {
        for (const tier of course.tiers) {
          const freeModules = tier.modules.filter((m) => m.free);
          expect(freeModules.length).toBeGreaterThanOrEqual(2);
        }
      });

      it('free modules have exactly 2 free ones at the beginning', () => {
        for (const tier of course.tiers) {
          expect(tier.modules[0].free).toBe(true);
          expect(tier.modules[1].free).toBe(true);
        }
      });

      it('free modules include a resourceUrl and resourceLabel', () => {
        for (const tier of course.tiers) {
          const freeModules = tier.modules.filter((m) => m.free);
          for (const m of freeModules) {
            expect(m.resourceUrl).toBeTruthy();
            expect(m.resourceLabel).toBeTruthy();
          }
        }
      });

      it('module ids are unique within the course', () => {
        const allIds = course.tiers.flatMap((t) => t.modules.map((m) => m.id));
        const unique = new Set(allIds);
        expect(unique.size).toBe(allIds.length);
      });

      it('each tier has at least 4 feature bullet points', () => {
        for (const tier of course.tiers) {
          expect(tier.features.length).toBeGreaterThanOrEqual(4);
        }
      });

      it('course has a non-empty title, badge, and description', () => {
        expect(course.title).toBeTruthy();
        expect(course.badge).toBeTruthy();
        expect(course.description).toBeTruthy();
      });

      it('exam field matches the key', () => {
        expect(course.exam).toBe(exam);
      });
    });
  }
});

describe('getCourse', () => {
  it('returns the IELTS course for "ielts"', () => {
    const c = getCourse('ielts');
    expect(c).not.toBeNull();
    expect(c?.exam).toBe('ielts');
  });

  it('returns the TOEFL course for "toefl"', () => {
    const c = getCourse('toefl');
    expect(c?.exam).toBe('toefl');
  });

  it('returns the PTE course for "pte"', () => {
    const c = getCourse('pte');
    expect(c?.exam).toBe('pte');
  });

  it('returns null for an unknown exam string', () => {
    expect(getCourse('gmat')).toBeNull();
    expect(getCourse('')).toBeNull();
    expect(getCourse('IELTS')).toBeNull();
  });
});

describe('ALL_EXAM_TYPES', () => {
  it('contains ielts, toefl, pte', () => {
    expect(ALL_EXAM_TYPES).toContain('ielts');
    expect(ALL_EXAM_TYPES).toContain('toefl');
    expect(ALL_EXAM_TYPES).toContain('pte');
  });

  it('has exactly 3 entries', () => {
    expect(ALL_EXAM_TYPES).toHaveLength(3);
  });
});
