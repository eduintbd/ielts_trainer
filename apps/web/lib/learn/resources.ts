// Curated free learning resources from awesome-english and awesome-IELTS repos.
// All links are publicly accessible and free unless noted.

export type ResourceSkill =
  | 'listening'
  | 'speaking'
  | 'reading'
  | 'writing'
  | 'vocabulary'
  | 'grammar'
  | 'mock-tests';

export type ResourceLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

export type Resource = {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  url: string;
  skill: ResourceSkill;
  level: ResourceLevel;
  highlight?: string;
  highlightBn?: string;
};

export const RESOURCES: Resource[] = [
  // ── LISTENING ─────────────────────────────────────────────────────────────
  {
    id: 'bbc-6min',
    title: 'BBC Learning English — 6 Minute English',
    titleBn: 'BBC লার্নিং ইংলিশ — ৬ মিনিট ইংলিশ',
    description:
      'Weekly 6-minute audio episodes on real-world topics with transcripts. Ideal for shadowing practice and expanding vocabulary on topical issues.',
    descriptionBn:
      'ট্রান্সক্রিপ্ট সহ বাস্তব-বিশ্বের বিষয়ে সাপ্তাহিক ৬ মিনিটের অডিও পর্ব। শ্যাডোয়িং অনুশীলন এবং বিষয়ভিত্তিক বিষয়ে শব্দভাণ্ডার বিস্তারের জন্য আদর্শ।',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
    skill: 'listening',
    level: 'intermediate',
    highlight: 'Best for shadowing',
    highlightBn: 'শ্যাডোয়িংয়ের জন্য সেরা',
  },
  {
    id: 'voa-learning',
    title: 'Voice of America — Learning English',
    titleBn: 'ভয়েস অফ আমেরিকা — লার্নিং ইংলিশ',
    description:
      'News articles read at slower pace with transcripts. Builds both listening and reading simultaneously. American accent — good for TOEFL candidates.',
    descriptionBn:
      'ট্রান্সক্রিপ্ট সহ ধীর গতিতে পড়া সংবাদ নিবন্ধ। একসাথে শোনা এবং পড়া উভয়ই তৈরি করে। আমেরিকান উচ্চারণ — TOEFL প্রার্থীদের জন্য ভালো।',
    url: 'https://learningenglish.voanews.com',
    skill: 'listening',
    level: 'beginner',
    highlight: 'Slower speech, transcripts',
    highlightBn: 'ধীর বক্তৃতা, ট্রান্সক্রিপ্ট',
  },
  {
    id: 'ted-talks',
    title: 'TED Talks — Ideas Worth Spreading',
    titleBn: 'TED টকস — আইডিয়াস ওয়ার্থ স্প্রেডিং',
    description:
      'Short 15–20 minute lectures on academic and professional topics. Native-speed speech, subtitles available. The topics frequently appear as IELTS writing prompts.',
    descriptionBn:
      'একাডেমিক ও পেশাদার বিষয়ে সংক্ষিপ্ত ১৫-২০ মিনিটের বক্তৃতা। নেটিভ গতির বক্তৃতা, সাবটাইটেল উপলব্ধ। বিষয়গুলো প্রায়ই IELTS রাইটিং প্রম্পট হিসেবে আসে।',
    url: 'https://www.ted.com/talks',
    skill: 'listening',
    level: 'advanced',
    highlight: 'Topics match IELTS Task 2',
    highlightBn: 'বিষয় IELTS টাস্ক ২ এর সাথে মেলে',
  },
  {
    id: 'bbc-world-service',
    title: 'BBC World Service — Global News Podcast',
    titleBn: 'BBC ওয়ার্ল্ড সার্ভিস — গ্লোবাল নিউজ পডকাস্ট',
    description:
      'Twice-daily news podcast at natural British English speed. Builds listening stamina and exposes you to news vocabulary essential for IELTS Part 4.',
    descriptionBn:
      'প্রাকৃতিক ব্রিটিশ ইংরেজি গতিতে দৈনিক দুইবার সংবাদ পডকাস্ট। শোনার সহনশীলতা গড়ে তোলে এবং IELTS পার্ট ৪ এর জন্য অপরিহার্য সংবাদ শব্দভাণ্ডারের সাথে পরিচয় করিয়ে দেয়।',
    url: 'https://www.bbc.co.uk/programmes/p02nq0gn/episodes/downloads',
    skill: 'listening',
    level: 'advanced',
    highlight: 'Builds listening stamina',
    highlightBn: 'শোনার সহনশীলতা তৈরি করে',
  },
  {
    id: 'elllo',
    title: 'ELLLO — English Language Listening Lab Online',
    titleBn: 'ELLLO — ইংলিশ ল্যাঙ্গুয়েজ লিসেনিং ল্যাব অনলাইন',
    description:
      'Thousands of free listening exercises featuring speakers from 60+ countries. Crucial for IELTS candidates who need to adapt to different accents.',
    descriptionBn:
      '৬০+ দেশের বক্তাদের সাথে হাজার হাজার বিনামূল্যে শোনার অনুশীলন। IELTS প্রার্থীদের জন্য অত্যন্ত গুরুত্বপূর্ণ যাদের বিভিন্ন উচ্চারণে মানিয়ে নিতে হবে।',
    url: 'https://www.elllo.org',
    skill: 'listening',
    level: 'all',
    highlight: '60+ accents — IELTS prep',
    highlightBn: '৬০+ উচ্চারণ — IELTS প্রস্তুতি',
  },

  // ── SPEAKING ──────────────────────────────────────────────────────────────
  {
    id: 'ieltsliz-speaking',
    title: 'IELTS Liz — Speaking Practice',
    titleBn: 'IELTS লিজ — স্পিকিং প্র্যাকটিস',
    description:
      'Free Part 1, 2, and 3 question lists with model answers and examiner tips. One of the most trusted free resources for IELTS Speaking.',
    descriptionBn:
      'মডেল উত্তর ও পরীক্ষকের টিপস সহ বিনামূল্যে পার্ট ১, ২ এবং ৩ প্রশ্নের তালিকা। IELTS স্পিকিংয়ের জন্য সবচেয়ে বিশ্বস্ত বিনামূল্যে সম্পদগুলির মধ্যে একটি।',
    url: 'https://ieltsliz.com/ielts-speaking/',
    skill: 'speaking',
    level: 'all',
    highlight: 'Examiner tips + model answers',
    highlightBn: 'পরীক্ষকের টিপস + মডেল উত্তর',
  },
  {
    id: 'forvo',
    title: 'Forvo — Pronunciation Dictionary',
    titleBn: 'ফোরভো — উচ্চারণ অভিধান',
    description:
      'Hear any English word pronounced by native speakers from multiple countries. Essential for checking pronunciation of academic vocabulary before the speaking test.',
    descriptionBn:
      'একাধিক দেশের নেটিভ স্পিকারদের দ্বারা উচ্চারিত যেকোনো ইংরেজি শব্দ শুনুন। স্পিকিং টেস্টের আগে একাডেমিক শব্দভাণ্ডারের উচ্চারণ পরীক্ষার জন্য অপরিহার্য।',
    url: 'https://forvo.com/languages/en/',
    skill: 'speaking',
    level: 'all',
    highlight: 'Native pronunciation check',
    highlightBn: 'নেটিভ উচ্চারণ পরীক্ষা',
  },
  {
    id: 'cambridge-english-yt',
    title: 'Cambridge English — YouTube Channel',
    titleBn: 'কেমব্রিজ ইংলিশ — ইউটিউব চ্যানেল',
    description:
      'Official IELTS Speaking sample tests with examiner commentary. Watch real Band 6, 7, and 8 candidates so you know exactly what each band sounds like.',
    descriptionBn:
      'পরীক্ষকের ভাষ্য সহ অফিসিয়াল IELTS স্পিকিং নমুনা পরীক্ষা। বাস্তব Band ৬, ৭ এবং ৮ প্রার্থীদের দেখুন যাতে প্রতিটি ব্যান্ড কেমন শোনায় তা সঠিকভাবে জানতে পারেন।',
    url: 'https://www.youtube.com/@CambridgeEnglish',
    skill: 'speaking',
    level: 'all',
    highlight: 'Official sample Speaking tests',
    highlightBn: 'অফিসিয়াল নমুনা স্পিকিং পরীক্ষা',
  },
  {
    id: 'speechling',
    title: 'Speechling — Pronunciation Coaching',
    titleBn: 'স্পিচলিং — উচ্চারণ কোচিং',
    description:
      'Record yourself saying phrases and get feedback from human coaches. Free tier available. Especially useful for fixing the specific pronunciation patterns Bangla speakers struggle with.',
    descriptionBn:
      'বাক্যাংশ বলে রেকর্ড করুন এবং মানব কোচদের কাছ থেকে প্রতিক্রিয়া পান। বিনামূল্যে স্তর উপলব্ধ। বাংলাভাষীরা যে নির্দিষ্ট উচ্চারণ নিদর্শনে সংগ্রাম করেন তা ঠিক করার জন্য বিশেষভাবে উপকারী।',
    url: 'https://speechling.com',
    skill: 'speaking',
    level: 'all',
    highlight: 'Human feedback on your voice',
    highlightBn: 'আপনার কণ্ঠে মানব প্রতিক্রিয়া',
  },

  // ── READING ───────────────────────────────────────────────────────────────
  {
    id: 'the-guardian',
    title: 'The Guardian',
    titleBn: 'দ্য গার্ডিয়ান',
    description:
      'Free international broadsheet covering politics, science, culture, and environment. The writing style and vocabulary closely match IELTS Academic Reading passages.',
    descriptionBn:
      'রাজনীতি, বিজ্ঞান, সংস্কৃতি এবং পরিবেশ সম্পর্কে বিনামূল্যে আন্তর্জাতিক ব্রডশিট। লেখার শৈলী এবং শব্দভাণ্ডার IELTS একাডেমিক রিডিং প্যাসেজের সাথে ঘনিষ্ঠভাবে মেলে।',
    url: 'https://www.theguardian.com',
    skill: 'reading',
    level: 'advanced',
    highlight: 'Matches IELTS Academic style',
    highlightBn: 'IELTS একাডেমিক শৈলীর সাথে মেলে',
  },
  {
    id: 'bbc-news',
    title: 'BBC News',
    titleBn: 'BBC নিউজ',
    description:
      'Balanced international news coverage. Articles are shorter and more accessible than The Guardian — good starting point for Intermediate learners building reading speed.',
    descriptionBn:
      'ভারসাম্যপূর্ণ আন্তর্জাতিক সংবাদ কভারেজ। নিবন্ধগুলো দ্য গার্ডিয়ানের চেয়ে সংক্ষিপ্ত এবং বেশি সহজলভ্য — মধ্যবর্তী শিক্ষার্থীদের জন্য ভালো শুরু।',
    url: 'https://www.bbc.com/news',
    skill: 'reading',
    level: 'intermediate',
    highlight: 'Accessible international topics',
    highlightBn: 'সহজলভ্য আন্তর্জাতিক বিষয়',
  },
  {
    id: 'project-gutenberg',
    title: 'Project Gutenberg — Free eBooks',
    titleBn: 'প্রজেক্ট গুটেনবার্গ — বিনামূল্যে ই-বুক',
    description:
      'Over 70,000 free public domain books. For advanced learners: read classic novels to absorb natural English syntax, idioms, and sentence rhythm.',
    descriptionBn:
      '৭০,০০০+ বিনামূল্যে পাবলিক ডোমেইন বই। উন্নত শিক্ষার্থীদের জন্য: প্রাকৃতিক ইংরেজি বাক্য গঠন, বাগধারা এবং বাক্যের ছন্দ আত্মস্থ করতে ক্লাসিক উপন্যাস পড়ুন।',
    url: 'https://www.gutenberg.org',
    skill: 'reading',
    level: 'advanced',
    highlight: '70,000+ free classic texts',
    highlightBn: '৭০,০০০+ বিনামূল্যে ক্লাসিক পাঠ',
  },
  {
    id: 'cambridge-reading',
    title: 'Cambridge English — Reading Sample Tests',
    titleBn: 'কেমব্রিজ ইংলিশ — রিডিং নমুনা পরীক্ষা',
    description:
      'Official Cambridge IELTS sample reading passages with answer keys. The gold standard for IELTS reading practice.',
    descriptionBn:
      'উত্তর কী সহ অফিসিয়াল কেমব্রিজ IELTS নমুনা রিডিং প্যাসেজ। IELTS রিডিং অনুশীলনের জন্য স্বর্ণমান।',
    url: 'https://www.cambridgeenglish.org/exams-and-tests/ielts/preparation/',
    skill: 'reading',
    level: 'all',
    highlight: 'Official Cambridge materials',
    highlightBn: 'অফিসিয়াল কেমব্রিজ উপকরণ',
  },
  {
    id: 'ielts-org-reading',
    title: 'IELTS.org — Official Practice Tests',
    titleBn: 'IELTS.org — অফিসিয়াল প্র্যাকটিস টেস্ট',
    description:
      'Free sample reading questions and full practice tests directly from the test creators. The most authoritative free preparation resource available.',
    descriptionBn:
      'সরাসরি পরীক্ষা নির্মাতাদের কাছ থেকে বিনামূল্যে নমুনা রিডিং প্রশ্ন এবং সম্পূর্ণ অনুশীলন পরীক্ষা। উপলব্ধ সবচেয়ে নির্ভরযোগ্য বিনামূল্যে প্রস্তুতি সম্পদ।',
    url: 'https://www.ielts.org/about-ielts/how-to-prepare-for-ielts',
    skill: 'reading',
    level: 'all',
    highlight: 'Direct from test creators',
    highlightBn: 'সরাসরি পরীক্ষা নির্মাতাদের কাছ থেকে',
  },

  // ── WRITING ───────────────────────────────────────────────────────────────
  {
    id: 'ieltsliz-writing',
    title: 'IELTS Liz — Writing Task 1 & 2',
    titleBn: 'IELTS লিজ — রাইটিং টাস্ক ১ ও ২',
    description:
      'Comprehensive free guides for both IELTS Writing tasks with model Band 9 essays, vocabulary lists, and structure templates.',
    descriptionBn:
      'মডেল ব্যান্ড ৯ রচনা, শব্দভাণ্ডার তালিকা এবং কাঠামো টেমপ্লেট সহ উভয় IELTS রাইটিং টাস্কের জন্য বিস্তারিত বিনামূল্যে গাইড।',
    url: 'https://ieltsliz.com/ielts-writing-task-2/',
    skill: 'writing',
    level: 'all',
    highlight: 'Band 9 model essays',
    highlightBn: 'Band ৯ মডেল রচনা',
  },
  {
    id: 'ielts-simon-writing',
    title: 'IELTS Simon — Writing Lessons',
    titleBn: 'IELTS সাইমন — রাইটিং লেসনস',
    description:
      'Written by a former IELTS examiner. Exceptional for understanding what examiners actually look for in Task 1 and Task 2 responses.',
    descriptionBn:
      'একজন প্রাক্তন IELTS পরীক্ষক দ্বারা লিখিত। পরীক্ষকরা টাস্ক ১ এবং টাস্ক ২ প্রতিক্রিয়ায় আসলে কী খোঁজেন তা বোঝার জন্য অসাধারণ।',
    url: 'https://ielts-simon.com',
    skill: 'writing',
    level: 'all',
    highlight: 'Written by an IELTS examiner',
    highlightBn: 'একজন IELTS পরীক্ষক দ্বারা লিখিত',
  },
  {
    id: 'grammarly-blog',
    title: 'Grammarly Blog — Writing Tips',
    titleBn: 'গ্র্যামারলি ব্লগ — রাইটিং টিপস',
    description:
      'Practical writing guides covering sentence structure, punctuation, and style. Good for understanding the grammatical rules behind common errors.',
    descriptionBn:
      'বাক্য গঠন, বিরাম চিহ্ন এবং শৈলী সম্পর্কে ব্যবহারিক লেখার গাইড। সাধারণ ভুলের পেছনে ব্যাকরণগত নিয়ম বোঝার জন্য ভালো।',
    url: 'https://www.grammarly.com/blog/category/handbook/',
    skill: 'writing',
    level: 'intermediate',
    highlight: 'Grammar rules explained clearly',
    highlightBn: 'ব্যাকরণের নিয়ম স্পষ্টভাবে ব্যাখ্যা করা হয়েছে',
  },
  {
    id: 'british-council-writing',
    title: 'British Council — LearnEnglish Writing',
    titleBn: 'ব্রিটিশ কাউন্সিল — লার্নইংলিশ রাইটিং',
    description:
      'Free writing exercises with model answers across all CEFR levels (A1 to C1). Covers emails, essays, reports, and creative writing.',
    descriptionBn:
      'সমস্ত CEFR স্তরে (A1 থেকে C1) মডেল উত্তর সহ বিনামূল্যে রাইটিং অনুশীলন। ইমেইল, রচনা, রিপোর্ট এবং সৃজনশীল লেখা অন্তর্ভুক্ত।',
    url: 'https://learnenglish.britishcouncil.org/skills/writing',
    skill: 'writing',
    level: 'all',
    highlight: 'All CEFR levels covered',
    highlightBn: 'সমস্ত CEFR স্তর অন্তর্ভুক্ত',
  },

  // ── VOCABULARY ────────────────────────────────────────────────────────────
  {
    id: 'cambridge-dictionary',
    title: 'Cambridge English Dictionary',
    titleBn: 'কেমব্রিজ ইংলিশ ডিকশনারি',
    description:
      'The most trusted dictionary for IELTS candidates. Provides clear definitions, example sentences, pronunciation, and collocations. Always use this over general dictionaries.',
    descriptionBn:
      'IELTS প্রার্থীদের জন্য সবচেয়ে বিশ্বস্ত অভিধান। স্পষ্ট সংজ্ঞা, উদাহরণ বাক্য, উচ্চারণ এবং collocations প্রদান করে। সর্বদা সাধারণ অভিধানের পরিবর্তে এটি ব্যবহার করুন।',
    url: 'https://dictionary.cambridge.org',
    skill: 'vocabulary',
    level: 'all',
    highlight: 'Best dictionary for IELTS',
    highlightBn: 'IELTS এর জন্য সেরা অভিধান',
  },
  {
    id: 'quizlet',
    title: 'Quizlet — Flashcard Learning',
    titleBn: 'কুইজলেট — ফ্ল্যাশকার্ড লার্নিং',
    description:
      'Search for "IELTS Academic Word List" or "COCA 5000" to find ready-made vocabulary decks. The spaced repetition algorithm ensures you review at the optimal time.',
    descriptionBn:
      '"IELTS Academic Word List" বা "COCA 5000" খুঁজুন রেডিমেড শব্দভাণ্ডার ডেক খুঁজে পেতে। স্পেসড রিপিটিশন অ্যালগরিদম নিশ্চিত করে আপনি সর্বোত্তম সময়ে পর্যালোচনা করেন।',
    url: 'https://quizlet.com',
    skill: 'vocabulary',
    level: 'all',
    highlight: 'Spaced repetition flashcards',
    highlightBn: 'স্পেসড রিপিটিশন ফ্ল্যাশকার্ড',
  },
  {
    id: 'vocabulary-com',
    title: 'Vocabulary.com',
    titleBn: 'ভোকাবুলারি.কম',
    description:
      'Adaptive vocabulary game that teaches words in context with example sentences drawn from real publications. More engaging than traditional word lists.',
    descriptionBn:
      'অভিযোজিত শব্দভাণ্ডার গেম যা বাস্তব প্রকাশনা থেকে নেওয়া উদাহরণ বাক্য সহ প্রসঙ্গে শব্দ শেখায়। ঐতিহ্যবাহী শব্দ তালিকার চেয়ে আরও আকর্ষণীয়।',
    url: 'https://www.vocabulary.com',
    skill: 'vocabulary',
    level: 'intermediate',
    highlight: 'Adaptive learning games',
    highlightBn: 'অভিযোজিত শিক্ষা গেম',
  },
  {
    id: 'word-hippo',
    title: 'WordHippo — Synonyms & Collocations',
    titleBn: 'ওয়ার্ডহিপো — সমার্থক শব্দ ও Collocations',
    description:
      'Find synonyms, antonyms, and example sentences instantly. IELTS Writing Task 2 requires lexical variety — WordHippo helps you avoid repeating the same words.',
    descriptionBn:
      'তাৎক্ষণিকভাবে সমার্থক শব্দ, বিপরীতার্থক শব্দ এবং উদাহরণ বাক্য খুঁজুন। IELTS রাইটিং টাস্ক ২ তে শব্দগত বৈচিত্র্য প্রয়োজন — WordHippo আপনাকে একই শব্দ পুনরাবৃত্তি এড়াতে সাহায্য করে।',
    url: 'https://www.wordhippo.com',
    skill: 'vocabulary',
    level: 'all',
    highlight: 'Synonyms for lexical variation',
    highlightBn: 'শব্দগত বৈচিত্র্যের জন্য সমার্থক শব্দ',
  },
  {
    id: 'english-profile',
    title: 'English Profile — CEFR Vocabulary',
    titleBn: 'ইংলিশ প্রোফাইল — CEFR শব্দভাণ্ডার',
    description:
      'Vocabulary lists organised by CEFR level (A1–C2). Check which words belong to your target band level and focus your study accordingly.',
    descriptionBn:
      'CEFR স্তর অনুযায়ী সংগঠিত শব্দভাণ্ডার তালিকা (A1–C2)। কোন শব্দগুলো আপনার লক্ষ্য ব্যান্ড স্তরের অন্তর্গত তা পরীক্ষা করুন এবং সেই অনুযায়ী পড়াশোনায় মনোযোগ দিন।',
    url: 'https://www.englishprofile.org/wordlists',
    skill: 'vocabulary',
    level: 'all',
    highlight: 'Words mapped to CEFR levels',
    highlightBn: 'CEFR স্তরে শব্দ ম্যাপ করা',
  },
  {
    id: 'merriam-wotd',
    title: 'Merriam-Webster — Word of the Day',
    titleBn: 'মেরিয়াম-ওয়েবস্টার — ওয়ার্ড অফ দ্য ডে',
    description:
      'One advanced word per day with etymology, usage examples, and audio pronunciation. Building a habit around this can expand your vocabulary by 300+ words per year.',
    descriptionBn:
      'ব্যুৎপত্তি, ব্যবহারের উদাহরণ এবং অডিও উচ্চারণ সহ দিনে একটি উন্নত শব্দ। এর চারপাশে একটি অভ্যাস গড়ে তোলা প্রতি বছর ৩০০+ শব্দ দিয়ে আপনার শব্দভাণ্ডার বিস্তার করতে পারে।',
    url: 'https://www.merriam-webster.com/word-of-the-day',
    skill: 'vocabulary',
    level: 'advanced',
    highlight: '1 word/day habit builder',
    highlightBn: 'প্রতিদিন ১ শব্দ অভ্যাস গড়া',
  },

  // ── GRAMMAR ───────────────────────────────────────────────────────────────
  {
    id: 'british-council-grammar',
    title: 'British Council — LearnEnglish Grammar',
    titleBn: 'ব্রিটিশ কাউন্সিল — লার্নইংলিশ গ্র্যামার',
    description:
      'Clear explanations of every major grammar point from A1 to C1, with interactive exercises and instant feedback. The most comprehensive free grammar resource available.',
    descriptionBn:
      'ইন্টারেক্টিভ অনুশীলন এবং তাৎক্ষণিক প্রতিক্রিয়া সহ A1 থেকে C1 পর্যন্ত প্রতিটি প্রধান ব্যাকরণ বিষয়ের স্পষ্ট ব্যাখ্যা। উপলব্ধ সবচেয়ে ব্যাপক বিনামূল্যে ব্যাকরণ সম্পদ।',
    url: 'https://learnenglish.britishcouncil.org/grammar',
    skill: 'grammar',
    level: 'all',
    highlight: 'Most complete free grammar site',
    highlightBn: 'সবচেয়ে সম্পূর্ণ বিনামূল্যে ব্যাকরণ সাইট',
  },
  {
    id: 'perfect-english-grammar',
    title: 'Perfect English Grammar',
    titleBn: 'পারফেক্ট ইংলিশ গ্র্যামার',
    description:
      'Hundreds of free grammar exercises organised by specific topics (conditionals, articles, tenses, reported speech). Excellent for targeted drilling of weak areas.',
    descriptionBn:
      'নির্দিষ্ট বিষয় (conditionals, articles, tenses, reported speech) দ্বারা সংগঠিত শত শত বিনামূল্যে ব্যাকরণ অনুশীলন। দুর্বল ক্ষেত্রগুলির লক্ষ্যভিত্তিক ড্রিলিংয়ের জন্য চমৎকার।',
    url: 'https://www.perfect-english-grammar.com',
    skill: 'grammar',
    level: 'intermediate',
    highlight: 'Targeted drills per grammar point',
    highlightBn: 'প্রতি ব্যাকরণ বিষয়ে লক্ষ্যভিত্তিক ড্রিল',
  },
  {
    id: 'engvid-grammar',
    title: 'EngVid — English Grammar Videos',
    titleBn: 'EngVid — ইংলিশ গ্র্যামার ভিডিও',
    description:
      'Free video lessons from qualified teachers on specific grammar points. Useful for visual learners who find text-based explanations hard to follow.',
    descriptionBn:
      'নির্দিষ্ট ব্যাকরণ বিষয়ে যোগ্য শিক্ষকদের বিনামূল্যে ভিডিও পাঠ। ভিজ্যুয়াল শিক্ষার্থীদের জন্য উপকারী যারা পাঠ্য-ভিত্তিক ব্যাখ্যা অনুসরণ করা কঠিন মনে করেন।',
    url: 'https://www.engvid.com/english-grammar/',
    skill: 'grammar',
    level: 'all',
    highlight: 'Video explanations from teachers',
    highlightBn: 'শিক্ষকদের ভিডিও ব্যাখ্যা',
  },

  // ── MOCK TESTS ────────────────────────────────────────────────────────────
  {
    id: 'british-council-practice',
    title: 'British Council — IELTS Practice Tests',
    titleBn: 'ব্রিটিশ কাউন্সিল — IELTS প্র্যাকটিস টেস্ট',
    description:
      'Free full practice tests including listening audio, reading passages, and writing tasks. Timed conditions. Official-standard materials from one of the two IELTS administrators.',
    descriptionBn:
      'শোনার অডিও, রিডিং প্যাসেজ এবং রাইটিং টাস্ক সহ বিনামূল্যে সম্পূর্ণ অনুশীলন পরীক্ষা। সময়মতো শর্ত। দুটি IELTS প্রশাসকের একটি থেকে অফিসিয়াল-মানের উপকরণ।',
    url: 'https://www.britishcouncil.org/exam/ielts/preparation-resources/practice-tests',
    skill: 'mock-tests',
    level: 'all',
    highlight: 'Full timed practice tests',
    highlightBn: 'সম্পূর্ণ সময়মতো অনুশীলন পরীক্ষা',
  },
  {
    id: 'idp-practice',
    title: 'IDP IELTS — Free Sample Tests',
    titleBn: 'IDP IELTS — বিনামূল্যে নমুনা পরীক্ষা',
    description:
      'Free sample tests from IDP Education, the co-administrator of IELTS. Includes computer-delivered IELTS format practice — increasingly important as more centres go digital.',
    descriptionBn:
      'IDP এডুকেশন থেকে বিনামূল্যে নমুনা পরীক্ষা, IELTS এর সহ-প্রশাসক। কম্পিউটার-প্রদত্ত IELTS ফর্ম্যাট অনুশীলন অন্তর্ভুক্ত — আরও বেশি কেন্দ্র ডিজিটালে যাওয়ার সাথে সাথে ক্রমশ গুরুত্বপূর্ণ।',
    url: 'https://www.ielts.com.au/prepare/practice-tests',
    skill: 'mock-tests',
    level: 'all',
    highlight: 'Computer-delivered format practice',
    highlightBn: 'কম্পিউটার-প্রদত্ত ফর্ম্যাট অনুশীলন',
  },
  {
    id: 'ieltsbuddy-tests',
    title: 'IELTS Buddy — Practice Tests & Tips',
    titleBn: 'IELTS বাডি — প্র্যাকটিস টেস্ট ও টিপস',
    description:
      'Large collection of free practice tests with answer keys, plus tips and sample answers. Good for supplementary practice beyond official Cambridge materials.',
    descriptionBn:
      'উত্তর কী সহ বিনামূল্যে অনুশীলন পরীক্ষার বড় সংগ্রহ, এছাড়াও টিপস এবং নমুনা উত্তর। অফিসিয়াল কেমব্রিজ উপকরণের বাইরে সম্পূরক অনুশীলনের জন্য ভালো।',
    url: 'https://www.ieltsbuddy.com',
    skill: 'mock-tests',
    level: 'all',
    highlight: 'Large free test bank',
    highlightBn: 'বড় বিনামূল্যে টেস্ট ব্যাংক',
  },
  {
    id: 'ets-toefl-practice',
    title: 'ETS — Free TOEFL Practice Online',
    titleBn: 'ETS — বিনামূল্যে TOEFL প্র্যাকটিস অনলাইন',
    description:
      'Free TOEFL sample questions directly from ETS, the test creator. Essential for anyone sitting TOEFL rather than IELTS — the formats differ significantly.',
    descriptionBn:
      'পরীক্ষা নির্মাতা ETS থেকে সরাসরি বিনামূল্যে TOEFL নমুনা প্রশ্ন। IELTS এর পরিবর্তে TOEFL দিতে যে কারো জন্য অপরিহার্য — ফরম্যাটগুলো উল্লেখযোগ্যভাবে আলাদা।',
    url: 'https://www.ets.org/toefl/test-takers/ibt/prepare/tests.html',
    skill: 'mock-tests',
    level: 'all',
    highlight: 'Official TOEFL sample tests',
    highlightBn: 'অফিসিয়াল TOEFL নমুনা পরীক্ষা',
  },
];

export const SKILL_TABS: {
  value: ResourceSkill | 'all';
  label: string;
  labelBn: string;
  count: number;
}[] = [
  { value: 'all', label: 'All', labelBn: 'সব', count: RESOURCES.length },
  { value: 'listening', label: 'Listening', labelBn: 'শোনা', count: RESOURCES.filter(r => r.skill === 'listening').length },
  { value: 'speaking', label: 'Speaking', labelBn: 'কথা বলা', count: RESOURCES.filter(r => r.skill === 'speaking').length },
  { value: 'reading', label: 'Reading', labelBn: 'পড়া', count: RESOURCES.filter(r => r.skill === 'reading').length },
  { value: 'writing', label: 'Writing', labelBn: 'লেখা', count: RESOURCES.filter(r => r.skill === 'writing').length },
  { value: 'vocabulary', label: 'Vocabulary', labelBn: 'শব্দভাণ্ডার', count: RESOURCES.filter(r => r.skill === 'vocabulary').length },
  { value: 'grammar', label: 'Grammar', labelBn: 'ব্যাকরণ', count: RESOURCES.filter(r => r.skill === 'grammar').length },
  { value: 'mock-tests', label: 'Mock Tests', labelBn: 'মক পরীক্ষা', count: RESOURCES.filter(r => r.skill === 'mock-tests').length },
];

export const SKILL_ICONS: Record<ResourceSkill, string> = {
  listening: '🎧',
  speaking: '🎤',
  reading: '📖',
  writing: '✍️',
  vocabulary: '📚',
  grammar: '📝',
  'mock-tests': '📋',
};
