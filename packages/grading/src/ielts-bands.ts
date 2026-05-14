/**
 * IELTS scoring helpers.
 * Listening / Reading: raw correct count → band (Academic and General Training have separate tables;
 * we use the most common Academic Listening table here as a baseline).
 *
 * Writing / Speaking: bands are computed by averaging four criteria, then rounded to the nearest 0.5
 * (band ending in .25 → up, .75 → up, per the official rule).
 *
 * Overall: average of the four sections, rounded to the nearest 0.5 (.25 rounds up, .75 rounds up).
 */

const LISTENING_BAND_TABLE: Array<[number, number]> = [
  // [minRaw, band]
  [39, 9.0], [37, 8.5], [35, 8.0], [32, 7.5], [30, 7.0],
  [26, 6.5], [23, 6.0], [18, 5.5], [16, 5.0], [13, 4.5],
  [10, 4.0], [8, 3.5], [6, 3.0], [4, 2.5], [0, 0],
];

const ACADEMIC_READING_BAND_TABLE: Array<[number, number]> = [
  [39, 9.0], [37, 8.5], [35, 8.0], [33, 7.5], [30, 7.0],
  [27, 6.5], [23, 6.0], [19, 5.5], [15, 5.0], [13, 4.5],
  [10, 4.0], [8, 3.5], [6, 3.0], [4, 2.5], [0, 0],
];

const GENERAL_READING_BAND_TABLE: Array<[number, number]> = [
  [40, 9.0], [39, 8.5], [37, 8.0], [36, 7.5], [34, 7.0],
  [32, 6.5], [30, 6.0], [27, 5.5], [23, 5.0], [19, 4.5],
  [15, 4.0], [12, 3.5], [9, 3.0], [6, 2.5], [0, 0],
];

export type ReadingTrack = 'academic' | 'general';

export function listeningRawToBand(rawCorrect: number): number {
  return rawToBand(rawCorrect, LISTENING_BAND_TABLE);
}

export function readingRawToBand(rawCorrect: number, track: ReadingTrack = 'academic'): number {
  const table = track === 'academic' ? ACADEMIC_READING_BAND_TABLE : GENERAL_READING_BAND_TABLE;
  return rawToBand(rawCorrect, table);
}

function rawToBand(raw: number, table: Array<[number, number]>): number {
  for (const [min, band] of table) {
    if (raw >= min) return band;
  }
  return 0;
}

/**
 * Round a numeric IELTS score to the nearest 0.5 per IELTS rules.
 * Averages of four 0.5-step bands land on multiples of 0.125, so we snap to that grid first,
 * then apply the IELTS rule: .25 rounds up to .5, .75 rounds up to next whole number,
 * other thirds round to the nearer 0.5.
 */
export function roundIeltsBand(value: number): number {
  const eighths = Math.round(value * 8) / 8;
  const floor = Math.floor(eighths);
  const frac = eighths - floor;
  if (frac >= 0.75) return floor + 1;
  if (frac >= 0.25) return floor + 0.5;
  return floor;
}

export function averageWritingBands(criteria: {
  taskAchievement: number;
  coherence: number;
  lexical: number;
  grammar: number;
}): number {
  const sum = criteria.taskAchievement + criteria.coherence + criteria.lexical + criteria.grammar;
  return roundIeltsBand(sum / 4);
}

export function averageSpeakingBands(criteria: {
  fluency: number;
  lexical: number;
  grammar: number;
  pronunciation: number;
}): number {
  const sum = criteria.fluency + criteria.lexical + criteria.grammar + criteria.pronunciation;
  return roundIeltsBand(sum / 4);
}

export function overallBand(sections: {
  listening?: number;
  reading?: number;
  writing?: number;
  speaking?: number;
}): number {
  const values = Object.values(sections).filter((v): v is number => typeof v === 'number');
  if (values.length === 0) return 0;
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return roundIeltsBand(avg);
}
