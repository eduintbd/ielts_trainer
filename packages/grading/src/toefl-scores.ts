/**
 * TOEFL iBT scoring (each section 0-30, total 0-120).
 * Reading and Listening use raw → scaled tables. Writing and Speaking are scored 0-5
 * (Speaking) / 0-5 (Writing) by rubric, then mapped to scaled 0-30.
 *
 * Tables below are approximations of public ETS conversion charts.
 */

const READING_SCALED: Array<[number, number]> = [
  // [minRawPct, scaled]
  [100, 30], [97, 29], [94, 28], [91, 27], [89, 26], [86, 25], [83, 24],
  [81, 23], [78, 22], [75, 21], [72, 20], [69, 19], [67, 18], [64, 17],
  [61, 16], [58, 15], [56, 14], [53, 13], [50, 12], [47, 11], [44, 10],
  [42, 9], [39, 8], [36, 7], [33, 6], [31, 5], [28, 4], [25, 3], [22, 2],
  [19, 1], [0, 0],
];

const LISTENING_SCALED = READING_SCALED; // same approximate curve

export function rawPctToToeflScaled(rawPct: number): number {
  for (const [min, scaled] of READING_SCALED) {
    if (rawPct >= min) return scaled;
  }
  return 0;
}

export function rubricToToeflWriting(rubric: number /* 0..5 */): number {
  // Linear: 5 → 30, 0 → 0
  return Math.round((rubric / 5) * 30);
}

export function rubricToToeflSpeaking(rubric: number /* 0..4 */): number {
  return Math.round((rubric / 4) * 30);
}

export function toeflTotal(sections: {
  reading: number;
  listening: number;
  speaking: number;
  writing: number;
}): number {
  return sections.reading + sections.listening + sections.speaking + sections.writing;
}
