/**
 * PTE Academic uses 10-90 scaled scores per section, plus enabling skills
 * (grammar, oral fluency, pronunciation, spelling, vocabulary, written discourse).
 * Each is independently graded by the grading service; we just average and round here.
 */

export function pteSectionScore(rubricCriteria: number[]): number {
  // criteria are 0..1; map to 10-90
  const avg = rubricCriteria.reduce((a, b) => a + b, 0) / rubricCriteria.length;
  return Math.round(10 + avg * 80);
}

export function pteOverall(sections: {
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
}): number {
  const sum = sections.listening + sections.reading + sections.speaking + sections.writing;
  return Math.round(sum / 4);
}
