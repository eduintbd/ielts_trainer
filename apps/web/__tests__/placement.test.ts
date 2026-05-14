import { describe, it, expect } from 'vitest';
import {
  scorePlacement,
  getLevel,
  PLACEMENT_QUESTIONS,
  type CefrLevel,
} from '../lib/placement';

describe('getLevel', () => {
  it('returns A1-A2 for scores 0–4', () => {
    expect(getLevel(0)).toBe('A1-A2');
    expect(getLevel(4)).toBe('A1-A2');
  });

  it('returns B1 for scores 5–8', () => {
    expect(getLevel(5)).toBe('B1');
    expect(getLevel(8)).toBe('B1');
  });

  it('returns B2 for scores 9–11', () => {
    expect(getLevel(9)).toBe('B2');
    expect(getLevel(11)).toBe('B2');
  });

  it('returns C1-C2 for scores 12–15', () => {
    expect(getLevel(12)).toBe('C1-C2');
    expect(getLevel(15)).toBe('C1-C2');
  });
});

describe('scorePlacement', () => {
  it('scores zero when all answers are null', () => {
    const result = scorePlacement(Array(15).fill(null));
    expect(result.score).toBe(0);
    expect(result.total).toBe(15);
    expect(result.level).toBe('A1-A2');
  });

  it('scores zero when all answers are wrong', () => {
    const wrongAnswers = PLACEMENT_QUESTIONS.map((q) => (q.answer === 0 ? 1 : 0));
    const result = scorePlacement(wrongAnswers);
    expect(result.score).toBe(0);
  });

  it('scores 15 when all answers are correct', () => {
    const correctAnswers = PLACEMENT_QUESTIONS.map((q) => q.answer);
    const result = scorePlacement(correctAnswers);
    expect(result.score).toBe(15);
    expect(result.total).toBe(15);
    expect(result.level).toBe('C1-C2');
  });

  it('includes level label and description in result', () => {
    const correctAnswers = PLACEMENT_QUESTIONS.map((q) => q.answer);
    const result = scorePlacement(correctAnswers);
    expect(result.label).toBe('Advanced');
    expect(result.description).toContain('Advanced');
  });

  it('returns 3 course recommendations (one per exam)', () => {
    const result = scorePlacement(Array(15).fill(null));
    expect(result.recommendedCourses).toHaveLength(3);
    const exams = result.recommendedCourses.map((c) => c.exam);
    expect(exams).toContain('IELTS');
    expect(exams).toContain('TOEFL');
    expect(exams).toContain('PTE');
  });

  it('recommends Foundation tier for A1-A2 students', () => {
    const result = scorePlacement(Array(15).fill(null));
    expect(result.level).toBe('A1-A2');
    expect(result.recommendedCourses.every((c) => c.tier === 'Foundation')).toBe(true);
  });

  it('recommends Foundation tier for B1 students', () => {
    const answers = Array(15).fill(null);
    answers[0] = PLACEMENT_QUESTIONS[0].answer;
    answers[1] = PLACEMENT_QUESTIONS[1].answer;
    answers[2] = PLACEMENT_QUESTIONS[2].answer;
    answers[3] = PLACEMENT_QUESTIONS[3].answer;
    answers[4] = PLACEMENT_QUESTIONS[4].answer;
    const result = scorePlacement(answers);
    expect(result.level).toBe('B1');
    expect(result.recommendedCourses.every((c) => c.tier === 'Foundation')).toBe(true);
  });

  it('recommends Intermediate tier for B2 students', () => {
    const answers = PLACEMENT_QUESTIONS.map((q, i) => (i < 9 ? q.answer : null));
    const result = scorePlacement(answers);
    expect(result.level).toBe('B2');
    expect(result.recommendedCourses.every((c) => c.tier === 'Intermediate')).toBe(true);
  });

  it('recommends Advanced tier for C1-C2 students', () => {
    const answers = PLACEMENT_QUESTIONS.map((q, i) => (i < 12 ? q.answer : null));
    const result = scorePlacement(answers);
    expect(result.level).toBe('C1-C2');
    expect(result.recommendedCourses.every((c) => c.tier === 'Advanced')).toBe(true);
  });

  it('each recommendation has a valid href', () => {
    const result = scorePlacement(Array(15).fill(null));
    for (const course of result.recommendedCourses) {
      expect(course.href).toMatch(/^\/courses\//);
    }
  });
});

describe('PLACEMENT_QUESTIONS', () => {
  it('has exactly 15 questions', () => {
    expect(PLACEMENT_QUESTIONS).toHaveLength(15);
  });

  it('has 5 grammar, 5 vocabulary, 5 reading questions', () => {
    const grammar = PLACEMENT_QUESTIONS.filter((q) => q.type === 'grammar');
    const vocab = PLACEMENT_QUESTIONS.filter((q) => q.type === 'vocabulary');
    const reading = PLACEMENT_QUESTIONS.filter((q) => q.type === 'reading');
    expect(grammar).toHaveLength(5);
    expect(vocab).toHaveLength(5);
    expect(reading).toHaveLength(5);
  });

  it('every question has exactly 4 options', () => {
    for (const q of PLACEMENT_QUESTIONS) {
      expect(q.options).toHaveLength(4);
    }
  });

  it('every answer index is valid (0–3)', () => {
    for (const q of PLACEMENT_QUESTIONS) {
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThanOrEqual(3);
    }
  });

  it('reading questions have a passage', () => {
    const reading = PLACEMENT_QUESTIONS.filter((q) => q.type === 'reading');
    for (const q of reading) {
      expect(q.passage).toBeTruthy();
    }
  });

  it('all questions have unique ids', () => {
    const ids = PLACEMENT_QUESTIONS.map((q) => q.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(PLACEMENT_QUESTIONS.length);
  });
});
