export type QuestionType = 'grammar' | 'vocabulary' | 'reading';

export interface PlacementQuestion {
  id: number;
  type: QuestionType;
  question: string;
  /** Passage text shown above reading comprehension questions */
  passage?: string;
  options: [string, string, string, string];
  /** 0-indexed correct answer */
  answer: number;
}

export type CefrLevel = 'A1-A2' | 'B1' | 'B2' | 'C1-C2';

export interface PlacementResult {
  score: number;
  total: number;
  level: CefrLevel;
  label: string;
  description: string;
  recommendedCourses: RecommendedCourse[];
}

export interface RecommendedCourse {
  exam: 'IELTS' | 'TOEFL' | 'PTE';
  tier: 'Foundation' | 'Intermediate' | 'Advanced';
  href: string;
  reason: string;
}

const READING_PASSAGE = `Bangladesh has made remarkable progress in reducing poverty over the past two decades. Economic growth averaging 6–7% annually has lifted millions out of extreme poverty. The ready-made garments industry remains the backbone of exports, while remittances from overseas workers provide a vital second pillar. However, challenges remain — the country faces significant vulnerability to climate change and persistent income inequality, particularly between urban and rural areas.`;

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // ── Grammar (Q1–5) ──
  {
    id: 1,
    type: 'grammar',
    question: 'She ___ at the library right now. She goes there every afternoon.',
    options: ['studies', 'is studying', 'studied', 'has studied'],
    answer: 1,
  },
  {
    id: 2,
    type: 'grammar',
    question: 'By the time he arrives, we ___ already eaten dinner.',
    options: ['have', 'will have', 'had', 'would have'],
    answer: 1,
  },
  {
    id: 3,
    type: 'grammar',
    question: 'If I ___ the prime minister, I would invest more in education.',
    options: ['am', 'was', 'were', 'would be'],
    answer: 2,
  },
  {
    id: 4,
    type: 'grammar',
    question: 'Neither the teacher nor the students ___ ready for the exam.',
    options: ['was', 'is', 'were', 'has been'],
    answer: 2,
  },
  {
    id: 5,
    type: 'grammar',
    question: 'He has been working at this company ___ five years.',
    options: ['since', 'for', 'during', 'from'],
    answer: 1,
  },
  // ── Vocabulary (Q6–10) ──
  {
    id: 6,
    type: 'vocabulary',
    question: 'The word "benevolent" means:',
    options: ['aggressive', 'kind and generous', 'lazy', 'dishonest'],
    answer: 1,
  },
  {
    id: 7,
    type: 'vocabulary',
    question: 'Choose the synonym for "loquacious":',
    options: ['talkative', 'quiet', 'angry', 'confused'],
    answer: 0,
  },
  {
    id: 8,
    type: 'vocabulary',
    question: 'She is very ___: she always finds something positive even in bad situations.',
    options: ['pessimistic', 'cynical', 'optimistic', 'indifferent'],
    answer: 2,
  },
  {
    id: 9,
    type: 'vocabulary',
    question: 'The word "ephemeral" means:',
    options: ['lasting forever', 'very important', 'short-lived or temporary', 'extremely complex'],
    answer: 2,
  },
  {
    id: 10,
    type: 'vocabulary',
    question: 'Which word means "to make a bad situation worse"?',
    options: ['alleviate', 'mitigate', 'exacerbate', 'ameliorate'],
    answer: 2,
  },
  // ── Reading Comprehension (Q11–15) ──
  {
    id: 11,
    type: 'reading',
    passage: READING_PASSAGE,
    question: 'According to the passage, Bangladesh\'s average annual economic growth has been approximately:',
    options: ['4–5%', '5–6%', '6–7%', '7–8%'],
    answer: 2,
  },
  {
    id: 12,
    type: 'reading',
    passage: READING_PASSAGE,
    question: 'The passage describes Bangladesh\'s poverty reduction as:',
    options: ['minimal', 'remarkable', 'nonexistent', 'disappointing'],
    answer: 1,
  },
  {
    id: 13,
    type: 'reading',
    passage: READING_PASSAGE,
    question: 'Which sector does the passage call the "backbone of exports"?',
    options: ['agriculture', 'technology services', 'ready-made garments', 'tourism'],
    answer: 2,
  },
  {
    id: 14,
    type: 'reading',
    passage: READING_PASSAGE,
    question: 'Which of the following is NOT mentioned as a challenge facing Bangladesh?',
    options: ['climate change vulnerability', 'income inequality', 'youth unemployment', 'urban-rural gap'],
    answer: 2,
  },
  {
    id: 15,
    type: 'reading',
    passage: READING_PASSAGE,
    question: 'According to the passage, remittances serve as:',
    options: [
      'the primary source of national income',
      'a vital second pillar alongside garment exports',
      'a declining contributor to the economy',
      'the main driver of poverty reduction',
    ],
    answer: 1,
  },
];

export function scorePlacement(answers: (number | null)[]): PlacementResult {
  const total = PLACEMENT_QUESTIONS.length;
  const score = PLACEMENT_QUESTIONS.reduce((acc, q, i) => {
    return acc + (answers[i] === q.answer ? 1 : 0);
  }, 0);

  const level = getLevel(score);
  const { label, description } = LEVEL_META[level];
  const recommendedCourses = getRecommendations(level);

  return { score, total, level, label, description, recommendedCourses };
}

export function getLevel(score: number): CefrLevel {
  if (score <= 4) return 'A1-A2';
  if (score <= 8) return 'B1';
  if (score <= 11) return 'B2';
  return 'C1-C2';
}

const LEVEL_META: Record<CefrLevel, { label: string; description: string }> = {
  'A1-A2': {
    label: 'Beginner',
    description:
      'You can handle basic everyday communication but need solid grammar and vocabulary foundations before diving into exam prep. Our Foundation courses are designed exactly for your level.',
  },
  B1: {
    label: 'Lower Intermediate',
    description:
      'You have a working grasp of English and can communicate in familiar situations. A focused Foundation course will shore up your weaknesses and prepare you for exam-level tasks.',
  },
  B2: {
    label: 'Upper Intermediate',
    description:
      'You are approaching exam-ready English. An Intermediate course targeting your specific exam will get you to Band 6.5–7.0 / TOEFL 80+ / PTE 65+ efficiently.',
  },
  'C1-C2': {
    label: 'Advanced',
    description:
      'Your English is strong. An Advanced exam course focused on test strategy, sophisticated vocabulary, and high-band writing/speaking techniques is the right next step.',
  },
};

function getRecommendations(level: CefrLevel): RecommendedCourse[] {
  const tierMap: Record<CefrLevel, 'Foundation' | 'Intermediate' | 'Advanced'> = {
    'A1-A2': 'Foundation',
    B1: 'Foundation',
    B2: 'Intermediate',
    'C1-C2': 'Advanced',
  };
  const tier = tierMap[level];

  const reasonMap: Record<'Foundation' | 'Intermediate' | 'Advanced', string> = {
    Foundation: 'Builds core grammar, vocabulary, and all four skills from the ground up.',
    Intermediate: 'Focuses on exam strategy and fluency at an upper-intermediate level.',
    Advanced: 'Targets the final push to high-band scores through advanced technique.',
  };

  return (['IELTS', 'TOEFL', 'PTE'] as const).map((exam) => ({
    exam,
    tier,
    href: `/courses/${exam.toLowerCase()}`,
    reason: reasonMap[tier],
  }));
}

export const LEVEL_COLORS: Record<CefrLevel, string> = {
  'A1-A2': 'bg-orange-100 text-orange-800 border-orange-200',
  B1: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  B2: 'bg-blue-100 text-blue-800 border-blue-200',
  'C1-C2': 'bg-green-100 text-green-800 border-green-200',
};
