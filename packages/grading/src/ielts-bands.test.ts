import { describe, it, expect } from 'vitest';
import {
  listeningRawToBand,
  readingRawToBand,
  roundIeltsBand,
  averageWritingBands,
  overallBand,
} from './ielts-bands';

describe('IELTS bands', () => {
  it('listening 35/40 → 8.0', () => {
    expect(listeningRawToBand(35)).toBe(8.0);
  });

  it('listening 30/40 → 7.0', () => {
    expect(listeningRawToBand(30)).toBe(7.0);
  });

  it('academic reading 30/40 → 7.0', () => {
    expect(readingRawToBand(30, 'academic')).toBe(7.0);
  });

  it('general reading 30/40 → 6.0', () => {
    expect(readingRawToBand(30, 'general')).toBe(6.0);
  });

  it('rounds .25 up to .5', () => {
    expect(roundIeltsBand(6.25)).toBe(6.5);
  });

  it('rounds .75 up to next whole', () => {
    expect(roundIeltsBand(6.75)).toBe(7.0);
  });

  it('keeps .5 unchanged', () => {
    expect(roundIeltsBand(6.5)).toBe(6.5);
  });

  it('averages writing bands per official rule', () => {
    expect(
      averageWritingBands({ taskAchievement: 6, coherence: 7, lexical: 6, grammar: 6 }),
    ).toBe(6.5); // 25/4 = 6.25 → 6.5
  });

  it('overall band averages sections', () => {
    expect(overallBand({ listening: 7, reading: 7, writing: 6, speaking: 7 })).toBe(7.0);
    expect(overallBand({ listening: 7, reading: 6.5, writing: 6, speaking: 7 })).toBe(6.5);
  });
});
