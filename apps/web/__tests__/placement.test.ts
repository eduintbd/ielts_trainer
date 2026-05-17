import { describe, it, expect } from 'vitest';
import {
  scorePlacement,
  getLevel,
  sampleQuestions,
  GRAMMAR_BANK,
  VOCAB_BANK,
  READING_BANK,
} from '../lib/placement';

// Deterministic fixture: first 5 from each bank
const testGrammar = GRAMMAR_BANK.slice(0, 5);
const testVocab = VOCAB_BANK.slice(0, 5);
const testReading = READING_BANK[0]!.questions;
const TEST_QUESTIONS = [...testGrammar, ...testVocab, ...testReading];

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
    const result = scorePlacement(Array(15).fill(null), TEST_QUESTIONS);
    expect(result.score).toBe(0);
    expect(result.total).toBe(15);
    expect(result.level).toBe('A1-A2');
  });

  it('scores zero when all answers are wrong', () => {
    const wrongAnswers = TEST_QUESTIONS.map((q) => (q.answer === 0 ? 1 : 0));
    const result = scorePlacement(wrongAnswers, TEST_QUESTIONS);
    expect(result.score).toBe(0);
  });

  it('scores 15 when all answers are correct', () => {
    const correctAnswers = TEST_QUESTIONS.map((q) => q.answer);
    const result = scorePlacement(correctAnswers, TEST_QUESTIONS);
    expect(result.score).toBe(15);
    expect(result.total).toBe(15);
    expect(result.level).toBe('C1-C2');
  });

  it('includes level label and description in result', () => {
    const correctAnswers = TEST_QUESTIONS.map((q) => q.answer);
    const result = scorePlacement(correctAnswers, TEST_QUESTIONS);
    expect(result.label).toBe('Advanced');
    expect(result.description).toContain('Advanced');
  });

  it('returns 3 course recommendations (one per exam)', () => {
    const result = scorePlacement(Array(15).fill(null), TEST_QUESTIONS);
    expect(result.recommendedCourses).toHaveLength(3);
    const exams = result.recommendedCourses.map((c) => c.exam);
    expect(exams).toContain('IELTS');
    expect(exams).toContain('TOEFL');
    expect(exams).toContain('PTE');
  });

  it('recommends Foundation tier for A1-A2 students', () => {
    const result = scorePlacement(Array(15).fill(null), TEST_QUESTIONS);
    expect(result.level).toBe('A1-A2');
    expect(result.recommendedCourses.every((c) => c.tier === 'Foundation')).toBe(true);
  });

  it('recommends Foundation tier for B1 students', () => {
    const answers = Array(15).fill(null);
    answers[0] = TEST_QUESTIONS[0]!.answer;
    answers[1] = TEST_QUESTIONS[1]!.answer;
    answers[2] = TEST_QUESTIONS[2]!.answer;
    answers[3] = TEST_QUESTIONS[3]!.answer;
    answers[4] = TEST_QUESTIONS[4]!.answer;
    const result = scorePlacement(answers, TEST_QUESTIONS);
    expect(result.level).toBe('B1');
    expect(result.recommendedCourses.every((c) => c.tier === 'Foundation')).toBe(true);
  });

  it('recommends Intermediate tier for B2 students', () => {
    const answers = TEST_QUESTIONS.map((q, i) => (i < 9 ? q.answer : null));
    const result = scorePlacement(answers, TEST_QUESTIONS);
    expect(result.level).toBe('B2');
    expect(result.recommendedCourses.every((c) => c.tier === 'Intermediate')).toBe(true);
  });

  it('recommends Advanced tier for C1-C2 students', () => {
    const answers = TEST_QUESTIONS.map((q, i) => (i < 12 ? q.answer : null));
    const result = scorePlacement(answers, TEST_QUESTIONS);
    expect(result.level).toBe('C1-C2');
    expect(result.recommendedCourses.every((c) => c.tier === 'Advanced')).toBe(true);
  });

  it('each recommendation has a valid href', () => {
    const result = scorePlacement(Array(15).fill(null), TEST_QUESTIONS);
    for (const course of result.recommendedCourses) {
      expect(course.href).toMatch(/^\/courses\//);
    }
  });
});

describe('question banks', () => {
  it('GRAMMAR_BANK has exactly 100 questions', () => {
    expect(GRAMMAR_BANK.length).toBe(100);
  });

  it('VOCAB_BANK has exactly 100 questions', () => {
    expect(VOCAB_BANK.length).toBe(100);
  });

  it('READING_BANK has exactly 20 passages (100 reading questions total)', () => {
    expect(READING_BANK.length).toBe(20);
  });

  it('each reading passage has exactly 5 questions', () => {
    for (const group of READING_BANK) {
      expect(group.questions).toHaveLength(5);
    }
  });

  it('all grammar questions have exactly 4 options', () => {
    for (const q of GRAMMAR_BANK) {
      expect(q.options).toHaveLength(4);
    }
  });

  it('all vocab questions have exactly 4 options', () => {
    for (const q of VOCAB_BANK) {
      expect(q.options).toHaveLength(4);
    }
  });

  it('all answer indices are valid (0–3)', () => {
    const allQuestions = [
      ...GRAMMAR_BANK,
      ...VOCAB_BANK,
      ...READING_BANK.flatMap((g) => g.questions),
    ];
    for (const q of allQuestions) {
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThanOrEqual(3);
    }
  });

  it('all question ids are unique across the full bank', () => {
    const allQuestions = [
      ...GRAMMAR_BANK,
      ...VOCAB_BANK,
      ...READING_BANK.flatMap((g) => g.questions),
    ];
    const ids = allQuestions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('reading questions have a passage', () => {
    for (const group of READING_BANK) {
      for (const q of group.questions) {
        expect(q.passage).toBeTruthy();
      }
    }
  });
});

describe('sampleQuestions', () => {
  it('returns exactly 15 questions', () => {
    expect(sampleQuestions()).toHaveLength(15);
  });

  it('returns 5 grammar, 5 vocabulary, 5 reading questions', () => {
    const questions = sampleQuestions();
    expect(questions.filter((q) => q.type === 'grammar')).toHaveLength(5);
    expect(questions.filter((q) => q.type === 'vocabulary')).toHaveLength(5);
    expect(questions.filter((q) => q.type === 'reading')).toHaveLength(5);
  });

  it('returns different question sets across multiple calls', () => {
    const sets = Array.from({ length: 10 }, () => sampleQuestions().map((q) => q.id).join(','));
    const unique = new Set(sets);
    // With 10 draws from a randomised bank, at least 2 distinct sets expected
    expect(unique.size).toBeGreaterThan(1);
  });

  it('returned questions have unique ids within a sample', () => {
    const questions = sampleQuestions();
    const ids = questions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
