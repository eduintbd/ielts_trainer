export type ExamType = 'ielts' | 'toefl' | 'pte';

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  free: boolean;
  /** External free resource link when free === true */
  resourceUrl?: string;
  resourceLabel?: string;
}

export interface CourseTier {
  id: string;
  name: 'Foundation' | 'Intermediate' | 'Advanced';
  tagline: string;
  target: string;
  price: number;
  currency: '৳';
  period: 'month';
  features: string[];
  modules: CourseModule[];
}

export interface ExamCourse {
  exam: ExamType;
  title: string;
  badge: string;
  description: string;
  tiers: CourseTier[];
}

// ─── IELTS ───────────────────────────────────────────────────────────────────

const ieltsFoundationModules: CourseModule[] = [
  {
    id: 'ielts-f-1',
    title: 'English Grammar Fundamentals',
    description: 'The 12 grammar rules Bangladeshi speakers get wrong most often — tenses, articles, prepositions.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://learnenglish.britishcouncil.org/grammar',
    resourceLabel: 'British Council Grammar',
  },
  {
    id: 'ielts-f-2',
    title: 'Core Academic Vocabulary (AWL)',
    description: 'The 570 Academic Word List headwords organised by frequency. Flashcard decks included.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-vocabulary',
    resourceLabel: 'BBC 6-Minute Vocabulary',
  },
  {
    id: 'ielts-f-3',
    title: 'Listening: Strategies & Accent Exposure',
    description: 'British, Australian and Indian accents. Keyword prediction, gap-fill and MCQ techniques.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'ielts-f-4',
    title: 'Reading: The 4-Pass Method',
    description: 'Skim → scan → read → confirm. True/False/Not Given mastery. Time allocation per passage.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'ielts-f-5',
    title: 'Writing Task 1: Graphs & Charts',
    description: 'Overview sentence, grouping data, sequencing trends. 12 graph types with model answers.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-f-6',
    title: 'Writing Task 2: Essay Structure',
    description: 'PEEL paragraphs, thesis statements, cohesive devices. Opinion, discussion and problem–solution types.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'ielts-f-7',
    title: 'Speaking Parts 1 & 2',
    description: 'Personal questions, cue card framework, 1-minute prep strategy. Recorded sample answers.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-f-8',
    title: 'Full Mock Test 1 + AI Feedback',
    description: 'Timed full-length IELTS Academic mock with automated band scoring and written AI feedback.',
    duration: '3 hrs',
    free: false,
  },
];

const ieltsIntermediateModules: CourseModule[] = [
  {
    id: 'ielts-i-1',
    title: 'Advanced Grammar for Band 7+',
    description: 'Complex sentence structures, cleft sentences, inversion for emphasis. Tested against IELTS rubrics.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://learnenglish.britishcouncil.org/grammar/b2-c1-grammar',
    resourceLabel: 'British Council B2–C1 Grammar',
  },
  {
    id: 'ielts-i-2',
    title: 'Sophisticated Vocabulary in Context',
    description: 'Collocations, idiomatic phrases, hedging language — what separates Band 6.5 from Band 7.5.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://www.ielts.org/about-ielts/ielts-for-test-takers/general-training/practice-materials',
    resourceLabel: 'IELTS.org Practice Materials',
  },
  {
    id: 'ielts-i-3',
    title: 'Advanced Listening: Inference & Attitude',
    description: 'Section 4 academic lectures. Attitude/opinion questions, speaker relationship identification.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'ielts-i-4',
    title: 'Reading: Matching Headings & Information',
    description: 'The two question types that cost Bangladeshi students the most marks. Step-by-step elimination method.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-i-5',
    title: 'Writing Task 2: Advanced Argumentation',
    description: 'Concession–refutation, synthesis of multiple perspectives, Band 8 model essays analysed.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'ielts-i-6',
    title: 'Speaking Part 3: Abstract Discussion',
    description: 'Hypothetical reasoning, hedging, extending answers beyond one sentence. Fluency drills.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-i-7',
    title: 'Full Mock Tests 2 & 3 + Tutor Review',
    description: 'Two timed mocks with AI scoring plus one live written tutor review of your essay.',
    duration: '6 hrs',
    free: false,
  },
];

const ieltsAdvancedModules: CourseModule[] = [
  {
    id: 'ielts-a-1',
    title: 'C1–C2 Grammar Mastery',
    description: 'Nominalization, ellipsis, passive constructions — the grammar that unlocks Band 8+.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://learnenglish.britishcouncil.org/grammar/c1-c2-grammar',
    resourceLabel: 'British Council C1–C2 Grammar',
  },
  {
    id: 'ielts-a-2',
    title: 'Lexical Resource: Band 8–9 Vocabulary',
    description: 'Low-frequency academic vocabulary, precise word choice, avoiding repetition at C2 level.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://www.youtube.com/c/ieltsliz',
    resourceLabel: 'IELTS Liz (YouTube)',
  },
  {
    id: 'ielts-a-3',
    title: 'Listening: Distractors & Paraphrase Mastery',
    description: 'How IELTS uses paraphrase to catch unprepared candidates. 40-question drills under timed conditions.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-a-4',
    title: 'Reading Under Time Pressure',
    description: 'Speed reading, 20-minute-per-passage discipline, zero-guessing strategy for passage 3.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-a-5',
    title: 'Writing: Achieving Coherence & Cohesion Band 8',
    description: 'Discourse markers, referencing chains, paragraph flow — graded against official descriptors.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'ielts-a-6',
    title: 'Speaking: Naturalness & Repair Strategies',
    description: 'Self-correction, hesitation devices, topic extensions — what Band 8 speaking actually sounds like.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'ielts-a-7',
    title: 'Unlimited Mocks + Priority AI Feedback',
    description: 'Unlimited full-length mocks, priority AI essay grading, weekly detailed band breakdown report.',
    duration: 'Ongoing',
    free: false,
  },
];

// ─── TOEFL ───────────────────────────────────────────────────────────────────

const toeflFoundationModules: CourseModule[] = [
  {
    id: 'toefl-f-1',
    title: 'TOEFL Format & Question Types',
    description: 'Overview of all 4 sections, 20 question types, scoring breakdown, and pacing strategy.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://www.ets.org/toefl/test-takers/ibt/about/content.html',
    resourceLabel: 'ETS TOEFL Official Guide',
  },
  {
    id: 'toefl-f-2',
    title: 'Reading: Inference & Vocabulary-in-Context',
    description: 'The 10 TOEFL reading question types with step-by-step elimination strategies.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://www.ets.org/toefl/test-takers/ibt/prepare/practice-tests.html',
    resourceLabel: 'ETS Free Practice Test',
  },
  {
    id: 'toefl-f-3',
    title: 'Listening: Lectures & Conversations',
    description: 'Note-taking symbols, purpose questions, attitude/function identification for academic lectures.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'toefl-f-4',
    title: 'Speaking: Independent & Integrated Tasks',
    description: 'Task 1 opinion framework, Tasks 2–4 read–listen–speak templates. 45-second delivery practice.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'toefl-f-5',
    title: 'Writing: Integrated Task',
    description: 'How to contrast lecture and reading passage in 150–225 words. Templates + 10 model responses.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'toefl-f-6',
    title: 'Writing: Academic Discussion Task',
    description: 'Structuring your response to add a unique perspective. Word-count strategy (120–180 words).',
    duration: '3 hrs',
    free: false,
  },
  {
    id: 'toefl-f-7',
    title: 'Full Practice Test + Score Report',
    description: 'Timed simulation of the full TOEFL iBT with AI-generated score report and feedback.',
    duration: '4 hrs',
    free: false,
  },
];

const toeflIntermediateModules: CourseModule[] = [
  {
    id: 'toefl-i-1',
    title: 'Academic Vocabulary for TOEFL 80+',
    description: 'High-frequency TOEFL word families, synonyms used in questions vs passages.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://learnenglish.britishcouncil.org/vocabulary',
    resourceLabel: 'British Council Vocabulary',
  },
  {
    id: 'toefl-i-2',
    title: 'Reading: Prose Summary & Category Charts',
    description: 'The two highest-value (2-point) reading questions. Elimination and paraphrase mastery.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://www.ets.org/toefl/test-takers/ibt/prepare/practice-tests.html',
    resourceLabel: 'ETS Practice Tests',
  },
  {
    id: 'toefl-i-3',
    title: 'Listening: Connecting Information Questions',
    description: 'Organizational purpose, relationship between ideas, comparing information across sources.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'toefl-i-4',
    title: 'Speaking: Fluency & Delivery Scoring',
    description: 'How TOEFL Speaking is scored by SpeechRater™. Pace, rhythm, and natural language use.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'toefl-i-5',
    title: 'Writing: Score 24+ on Both Tasks',
    description: 'Advanced integrated writing and academic discussion strategies with model score-24 responses.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'toefl-i-6',
    title: 'Practice Tests 2 & 3 + Section Reviews',
    description: 'Two full-length timed tests with detailed section-by-section analysis and improvement plans.',
    duration: '8 hrs',
    free: false,
  },
];

const toeflAdvancedModules: CourseModule[] = [
  {
    id: 'toefl-a-1',
    title: 'TOEFL 100+ Strategy Blueprint',
    description: 'Score-distribution analysis, weak-section targeting, and time-allocation for 100+ scorers.',
    duration: '2 hrs',
    free: true,
    resourceUrl: 'https://www.ets.org/toefl/test-takers/ibt/scores/understanding.html',
    resourceLabel: 'ETS Score Understanding',
  },
  {
    id: 'toefl-a-2',
    title: 'Perfect Reading Score (30/30)',
    description: 'Every question type at speed. Zero-error strategy for prose summary and category charts.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://www.youtube.com/c/NoteFull',
    resourceLabel: 'NoteFull TOEFL Mastery (YouTube)',
  },
  {
    id: 'toefl-a-3',
    title: 'Listening 28–30: Detail & Inference',
    description: 'Advanced note-taking, multi-speaker lecture parsing, inference under ambiguity.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'toefl-a-4',
    title: 'Speaking 28–30: Delivery Perfection',
    description: 'Prosody, connected speech, task timing. Recorded response comparison to Band 30 samples.',
    duration: '5 hrs',
    free: false,
  },
  {
    id: 'toefl-a-5',
    title: 'Writing 27–30: Synthesis & Style',
    description: 'Concise academic prose, verb nominalization, hedging for TOEFL writing at the highest level.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'toefl-a-6',
    title: 'Unlimited Practice + Priority Review',
    description: 'Full-length mocks on demand, priority AI feedback on writing and speaking tasks.',
    duration: 'Ongoing',
    free: false,
  },
];

// ─── PTE ─────────────────────────────────────────────────────────────────────

const pteFoundationModules: CourseModule[] = [
  {
    id: 'pte-f-1',
    title: 'PTE Academic: 20 Item Types Explained',
    description: 'How AI scores each of the 20 task types. The point-weighting system and where to prioritise.',
    duration: '3 hrs',
    free: true,
    resourceUrl: 'https://www.pearsonpte.com/pte-academic/prepare',
    resourceLabel: 'Pearson PTE Prep Materials',
  },
  {
    id: 'pte-f-2',
    title: 'Speaking: Read Aloud & Repeat Sentence',
    description: 'The two highest-impact PTE speaking tasks. Pacing, stress patterns, microphone technique.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://www.pearsonpte.com/pte-academic/prepare/scored-practice-tests',
    resourceLabel: 'Pearson Scored Practice Test',
  },
  {
    id: 'pte-f-3',
    title: 'Writing: Summarise Written Text',
    description: '75-word constraint. How to compress an academic paragraph into a single grammatical sentence.',
    duration: '3 hrs',
    free: false,
  },
  {
    id: 'pte-f-4',
    title: 'Writing: Essay (200–300 words)',
    description: 'PTE essay rubric decoded. Two-paragraph structure for both sides + personal stance.',
    duration: '3 hrs',
    free: false,
  },
  {
    id: 'pte-f-5',
    title: 'Reading: Fill in the Blanks & Re-order',
    description: 'Collocations for gap-fill. Re-order paragraphs using discourse connectors and topic flow.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'pte-f-6',
    title: 'Listening: Summarise Spoken Text & Dictation',
    description: 'Note-taking, 70-word spoken summary strategy, and accurate dictation under speed.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'pte-f-7',
    title: 'Scored Practice Test + Feedback',
    description: 'Full AI-scored PTE simulation with section-level gap analysis and priority fix list.',
    duration: '3 hrs',
    free: false,
  },
];

const pteIntermediateModules: CourseModule[] = [
  {
    id: 'pte-i-1',
    title: 'PTE Scoring Algorithm Deep Dive',
    description: 'How enabling skills (grammar, vocabulary, spelling, fluency, pronunciation) feed section scores.',
    duration: '2 hrs',
    free: true,
    resourceUrl: 'https://www.pearsonpte.com/pte-academic/scores',
    resourceLabel: 'Pearson PTE Score Guide',
  },
  {
    id: 'pte-i-2',
    title: 'Pronunciation: PTE Phoneme Targets',
    description: 'The 10 phonemes most often mispronounced by Bangladeshi speakers. AI pronunciation trainer.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://www.bbc.co.uk/learningenglish/english/features/pronunciation',
    resourceLabel: 'BBC Pronunciation (free)',
  },
  {
    id: 'pte-i-3',
    title: 'Describe Image: All 6 Image Types',
    description: 'Bar, pie, line, process, map, and combination charts. 40-second response templates.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'pte-i-4',
    title: 'Reading Speed & Accuracy',
    description: 'Timed reading with PTE-style questions. 200+ wpm target with 90%+ accuracy.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'pte-i-5',
    title: 'Listening: Highlight Correct Summary',
    description: 'Distractor elimination, main-idea vs supporting detail distinction, summary language patterns.',
    duration: '3 hrs',
    free: false,
  },
  {
    id: 'pte-i-6',
    title: 'Practice Tests 2 & 3 + Targeted Drills',
    description: 'Two full-length scored tests with targeted item-type drills based on your weakest areas.',
    duration: '7 hrs',
    free: false,
  },
];

const pteAdvancedModules: CourseModule[] = [
  {
    id: 'pte-a-1',
    title: 'PTE 79+ Score Architecture',
    description: 'How enabling skills compound. The minimum enabling-skill scores needed for a 79+ overall.',
    duration: '2 hrs',
    free: true,
    resourceUrl: 'https://www.pearsonpte.com/pte-academic/scores/score-guide',
    resourceLabel: 'Pearson Score Architecture',
  },
  {
    id: 'pte-a-2',
    title: 'Fluency Training: Native-Rate Delivery',
    description: 'Shadowing real academic lectures to match the pace expected for a top Oral Fluency score.',
    duration: '4 hrs',
    free: true,
    resourceUrl: 'https://www.youtube.com/c/PTEAcademicOfficial',
    resourceLabel: 'PTE Academic Official (YouTube)',
  },
  {
    id: 'pte-a-3',
    title: 'Retell Lecture & Answer Short Question',
    description: 'Advanced note-taking from lectures. 40-second retell structure and short-answer speed drills.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'pte-a-4',
    title: 'Essay: Score 79+ in Writing',
    description: 'Consistent 79+ essay blueprint: argument variety, grammar complexity, and vocabulary range.',
    duration: '4 hrs',
    free: false,
  },
  {
    id: 'pte-a-5',
    title: 'Error-Zero Dictation & FIB-L',
    description: 'How to write under audio-only constraint with 100% accuracy. Spelling and punctuation rules.',
    duration: '3 hrs',
    free: false,
  },
  {
    id: 'pte-a-6',
    title: 'Unlimited Scored Mocks + Priority AI Review',
    description: 'Unlimited full PTE simulations with daily AI feedback and weekly score-trend reports.',
    duration: 'Ongoing',
    free: false,
  },
];

// ─── Catalogue ────────────────────────────────────────────────────────────────

export const EXAM_COURSES: Record<ExamType, ExamCourse> = {
  ielts: {
    exam: 'ielts',
    title: 'IELTS Preparation',
    badge: 'UK · Australia · Canada',
    description:
      'Structured IELTS prep from Band 5.0 to 8.0. Covers all four skills — Listening, Reading, Writing, and Speaking — with AI-graded mock tests and real examiner rubrics.',
    tiers: [
      {
        id: 'ielts-foundation',
        name: 'Foundation',
        tagline: 'Build the base. Reach Band 6.5.',
        target: 'Band 5.0 → 6.5',
        price: 2999,
        currency: '৳',
        period: 'month',
        features: [
          '8 structured modules',
          '2 full IELTS Academic mock tests',
          'AI writing & speaking feedback',
          'Vocabulary flashcard decks',
          'Bangla explanations for grammar',
          'Progress tracking dashboard',
        ],
        modules: ieltsFoundationModules,
      },
      {
        id: 'ielts-intermediate',
        name: 'Intermediate',
        tagline: 'Sharpen exam strategy. Target Band 7.5.',
        target: 'Band 6.5 → 7.5',
        price: 4999,
        currency: '৳',
        period: 'month',
        features: [
          '7 advanced modules',
          '3 full mock tests with AI + tutor review',
          'Task 2 essay bank (50+ topics)',
          'Speaking recording comparison',
          'Weak-section drill library',
          'Everything in Foundation',
        ],
        modules: ieltsIntermediateModules,
      },
      {
        id: 'ielts-advanced',
        name: 'Advanced',
        tagline: 'Push past Band 7.5. Compete for Band 8+.',
        target: 'Band 7.5+',
        price: 7999,
        currency: '৳',
        period: 'month',
        features: [
          '7 mastery modules',
          'Unlimited mock tests',
          'Priority AI feedback (24-hr turnaround)',
          'Weekly band-score trend report',
          'C1–C2 grammar & vocabulary course',
          'Everything in Intermediate',
        ],
        modules: ieltsAdvancedModules,
      },
    ],
  },

  toefl: {
    exam: 'toefl',
    title: 'TOEFL iBT Preparation',
    badge: 'USA · Graduate Admissions',
    description:
      'Complete TOEFL iBT prep from 60 to 110. Master Reading, Listening, Speaking, and Writing with AI-scored practice tests and SpeechRater-aligned speaking feedback.',
    tiers: [
      {
        id: 'toefl-foundation',
        name: 'Foundation',
        tagline: 'Get exam-ready. Score 60–79.',
        target: 'Score 60 → 79',
        price: 2999,
        currency: '৳',
        period: 'month',
        features: [
          '7 structured modules',
          '1 full TOEFL iBT simulation',
          'AI speaking & writing scoring',
          'Question-type drill library',
          'Bangla grammar explanations',
          'Progress tracking dashboard',
        ],
        modules: toeflFoundationModules,
      },
      {
        id: 'toefl-intermediate',
        name: 'Intermediate',
        tagline: 'Reach 80+. Unlock top US universities.',
        target: 'Score 80 → 99',
        price: 4999,
        currency: '৳',
        period: 'month',
        features: [
          '6 advanced modules',
          '3 full simulations + section reviews',
          'SpeechRater-style speaking analysis',
          'Score-24 writing templates',
          'Vocabulary in context drills',
          'Everything in Foundation',
        ],
        modules: toeflIntermediateModules,
      },
      {
        id: 'toefl-advanced',
        name: 'Advanced',
        tagline: 'Score 100+. Elite program admissions.',
        target: 'Score 100+',
        price: 7999,
        currency: '৳',
        period: 'month',
        features: [
          '6 mastery modules',
          'Unlimited full simulations',
          'Priority AI feedback',
          'Perfect Reading (30/30) strategy',
          'Section score deep-dive reports',
          'Everything in Intermediate',
        ],
        modules: toeflAdvancedModules,
      },
    ],
  },

  pte: {
    exam: 'pte',
    title: 'PTE Academic Preparation',
    badge: 'Australia · NZ · Fast Results',
    description:
      'AI-exam prep for AI-graded PTE Academic. Master all 20 item types, understand the enabling-skills scoring engine, and target 79+ for Australian PR or top university entry.',
    tiers: [
      {
        id: 'pte-foundation',
        name: 'Foundation',
        tagline: 'Learn the AI scoring system. Reach score 65.',
        target: 'Score 50 → 65',
        price: 2999,
        currency: '৳',
        period: 'month',
        features: [
          '7 structured modules',
          '1 full AI-scored PTE simulation',
          'Read Aloud & Repeat Sentence drills',
          'Pronunciation phoneme trainer',
          'Bangla grammar notes',
          'Progress tracking dashboard',
        ],
        modules: pteFoundationModules,
      },
      {
        id: 'pte-intermediate',
        name: 'Intermediate',
        tagline: 'Beat the algorithm. Score 65–79.',
        target: 'Score 65 → 79',
        price: 4999,
        currency: '৳',
        period: 'month',
        features: [
          '6 advanced modules',
          '3 full simulations + item-type drills',
          'Describe Image templates (all 6 types)',
          'Enabling-skills gap analysis',
          'Fluency shadowing library',
          'Everything in Foundation',
        ],
        modules: pteIntermediateModules,
      },
      {
        id: 'pte-advanced',
        name: 'Advanced',
        tagline: 'Hit 79+. Australian PR ready.',
        target: 'Score 79+',
        price: 7999,
        currency: '৳',
        period: 'month',
        features: [
          '6 mastery modules',
          'Unlimited AI-scored practice tests',
          'Priority AI review',
          'Native-rate fluency training',
          'Weekly score-trend reports',
          'Everything in Intermediate',
        ],
        modules: pteAdvancedModules,
      },
    ],
  },
};

export const ALL_EXAM_TYPES: ExamType[] = ['ielts', 'toefl', 'pte'];

export function getCourse(exam: string): ExamCourse | null {
  if (exam === 'ielts' || exam === 'toefl' || exam === 'pte') {
    return EXAM_COURSES[exam];
  }
  return null;
}
