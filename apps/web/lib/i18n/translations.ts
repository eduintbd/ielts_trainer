export type Lang = 'en' | 'bn';

const translations = {
  en: {
    // Nav
    'nav.logo': 'IELTS Trainer',
    'nav.english': 'English Mastery',
    'nav.ielts': 'IELTS',
    'nav.toefl': 'TOEFL',
    'nav.pte': 'PTE',
    'nav.courses': 'Courses',
    'nav.placement': 'Take Placement Test',
    'nav.signin': 'Sign in',
    'nav.getstarted': 'Get started',
    'nav.dashboard': 'Dashboard',
    'nav.signout': 'Sign out',

    // Footer
    'footer.tagline': 'Built in Dhaka for the next generation of Bangladeshi students aiming abroad.',
    'footer.masterenglish': 'Master English',
    'footer.speaking': 'Speaking',
    'footer.writing': 'Writing',
    'footer.listening': 'Listening',
    'footer.reading': 'Reading',
    'footer.grammar': 'Grammar',
    'footer.pronunciation': 'Pronunciation',
    'footer.exams': 'Exams',
    'footer.about': 'About',
    'footer.aboutus': 'About us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.courses': 'Courses',
    'footer.copyright': '© {year} IELTS Trainer · Made with care for Bangladeshi learners.',

    // Home hero
    'home.hero.line1': 'Master English first.',
    'home.hero.line2': 'Then crack IELTS, TOEFL or PTE.',
    'home.hero.subtitle':
      'Built in Dhaka for Bangladeshi students. Voice coaching, mock tests, AI feedback, and a Bangla-aware curriculum — designed to make you genuinely fluent, not just exam-trained.',
    'home.hero.cta.start': 'Start free',
    'home.hero.cta.explore': 'Explore English Mastery',
    'home.hero.pill1': '30 min/day · 90-day plans',
    'home.hero.pill2': 'Free tier with real mock tests',
    'home.hero.pill3': 'Bangla feedback when you need it',

    // Home sections
    'home.step1.title': 'Step 1 — Master the language',
    'home.step1.subtitle':
      'No test prep platform can shortcut English itself. Speak, write, listen, read — every day. The exam will follow.',
    'home.step2.title': 'Step 2 — Choose your exam',
    'home.step2.subtitle':
      "The right test depends on where you're applying. We've broken down each, with realistic targets for Bangladeshi candidates.",
    'home.step3.title': 'Step 3 — Use the tools',
    'home.step3.subtitle': 'Built into every plan. Free tier included.',
    'home.why.title': 'Why students keep coming back',
    'home.english.link': 'Open the English Mastery hub',
    'home.exam.guide': 'Read the guide →',

    // Home CTA
    'home.cta.title': 'Make tonight count.',
    'home.cta.subtitle':
      'One placement quiz. One personalised 90-day plan. One first mock test. Nothing to install.',
    'home.cta.create': 'Create my free account',

    // Skills summaries
    'skill.speaking.summary': 'Daily voice coach, shadowing, accent training.',
    'skill.writing.summary': 'Paragraph templates, AI essay feedback.',
    'skill.listening.summary': 'Five accents, four difficulty tiers.',
    'skill.reading.summary': 'Skim, scan, four-pass method.',
    'skill.grammar.summary': 'The 12 leaks Bangla speakers share.',
    'skill.pronunciation.summary': 'V/W, P/F, S/Sh, schwa, stress.',

    // Exam cards (home page)
    'exam.ielts.badge': 'For UK · Australia · Canada',
    'exam.ielts.bullet1': 'Academic & General Training',
    'exam.ielts.bullet2': 'Computer or paper-delivered',
    'exam.ielts.bullet3': 'Band 5.5 → 8.0 plans',
    'exam.toefl.badge': 'For the US',
    'exam.toefl.bullet1': 'Fully computer-delivered',
    'exam.toefl.bullet2': 'Integrated reading + listening + writing',
    'exam.toefl.bullet3': 'Score 0–120, target 100+',
    'exam.pte.badge': 'Fast results · Australia / NZ',
    'exam.pte.bullet1': 'AI-graded, 48-hour results',
    'exam.pte.bullet2': '20 item types across 3 parts',
    'exam.pte.bullet3': 'Score 10–90, target 79+',

    // Features
    'feature.mocks.title': 'Full mock tests',
    'feature.mocks.desc': 'IELTS, TOEFL & PTE — sectioned, timed, scored exactly like the real exam.',
    'feature.voice.title': 'AI voice coach',
    'feature.voice.desc': 'Practice speaking with multi-accent AI. Real-time pronunciation & grammar correction.',
    'feature.listening.title': 'Listening practice',
    'feature.listening.desc': 'British, American, Australian, Indian accents. Difficulty from beginner to expert.',
    'feature.ai.title': 'AI Instructor',
    'feature.ai.desc': 'Personalised feedback that learns your weak spots over time.',
    'feature.gamify.title': 'Gamified progress',
    'feature.gamify.desc': 'XP, streaks, badges and leaderboards keep you studying daily.',
    'feature.bangla.title': 'Bangla support',
    'feature.bangla.desc':
      'Bilingual UI. AI translation, mistake explanations in Bangla, native-tone Bangla→English coaching.',

    // Why tiles
    'tile.habit.title': 'A daily habit, not a course',
    'tile.habit.body':
      "Most prep apps are giant content libraries. We are a 30-minute-a-day discipline. Streaks, leaderboards, and the AI tutor's nudges keep you accountable.",
    'tile.feedback.title': 'Feedback in your language',
    'tile.feedback.body':
      'Grammar explanations, idiom meanings, and tough vocabulary all come with a Bangla toggle. When you need English-only — flip it off.',
    'tile.free.title': 'Free tier you can actually use',
    'tile.free.body':
      'One full IELTS mock, one TOEFL mock, one PTE mock per month — free. Daily voice coach access. Vocabulary decks. Forum. You can hit Band 7 without paying us a taka.',

    // Placement test
    'placement.badge': 'Free · 5 minutes',
    'placement.title': 'Find your English level',
    'placement.desc':
      "15 questions across grammar, vocabulary, and reading comprehension. There is no time limit — take your time with each question. At the end, we'll tell you your CEFR level and recommend the right course for you.",
    'placement.subtitle':
      '15 questions across grammar, vocabulary, and reading. We use the result to recommend the right course for you.',
    'placement.cta': 'Take the placement test',
    'placement.check.grammar': '5 Grammar questions',
    'placement.check.vocab': '5 Vocabulary questions',
    'placement.check.reading': '5 Reading comprehension questions',
    'placement.check.result': 'Your result: A1–A2, B1, B2, or C1–C2',
    'placement.check.reco': 'Personalised course recommendations',
    'placement.start': 'Start the test',
    'placement.type.grammar': 'Grammar',
    'placement.type.vocabulary': 'Vocabulary',
    'placement.type.reading': 'Reading',
    'placement.quiz.question': 'Question {current} of {total}',
    'placement.quiz.passage': 'Read the passage',
    'placement.quiz.choosebest': 'Choose the best answer.',
    'placement.quiz.back': 'Back',
    'placement.quiz.next': 'Next question',
    'placement.quiz.see': 'See my results',

    // Results page
    'results.notfound': 'No result found. Please take the placement test first.',
    'results.taketest': 'Take the test',
    'results.header': 'Your placement result',
    'results.correct': '{pct}% correct',
    'results.breakdown': 'Score breakdown',
    'results.overall': 'Overall score based on {total} questions.',
    'results.reco.title': 'Recommended for your level',
    'results.reco.subtitle':
      'Based on your {level} ({label}) result, here are the courses we recommend.',
    'results.course.tier': '{tier} Course',
    'results.course.link': 'View course',
    'results.browse': 'Browse all courses',
    'results.retake': 'Retake the test',

    // Courses page
    'courses.browse': 'Browse all courses',
    'courses.hero.badge': 'Courses',
    'courses.hero.title': 'Structured prep. Real results.',
    'courses.hero.subtitle':
      'Three tiers for each exam — Foundation, Intermediate, and Advanced. Every tier includes free preview modules, AI-graded mock tests, and Bangla-aware explanations.',
    'courses.pill.free': 'Free preview modules',
    'courses.pill.ai': 'AI mock test grading',
    'courses.pill.bangla': 'Bangla explanations',
    'courses.pill.locked': 'Full content after enrollment',
    'courses.choose': 'Choose your exam',
    'courses.ielts.badge': 'UK · Australia · Canada',
    'courses.toefl.badge': 'USA · Graduate Schools',
    'courses.pte.badge': 'Australia · NZ · Fast Results',
    'courses.explore': 'Explore {exam} courses',
    'courses.modules.info': '{free} free preview modules · {total} total modules',
    'courses.pricing.title': 'Pricing at a glance',
    'courses.pricing.subtitle': 'All prices in Bangladeshi Taka (BDT). Cancel any time.',
    'courses.pricing.tier': 'Tier',
    'courses.pricing.target': 'Target',
    'courses.pricing.mo': '/mo',
    'courses.pricing.note':
      '* First 2 modules of any course are always free to preview — no sign-in required.',
    'courses.cta.title': 'Not sure which tier is right for you?',
    'courses.cta.subtitle':
      "Take our free 5-minute placement test. We'll assess your current English level and tell you exactly which course to start with.",

    // Exam detail page
    'exam.breadcrumb': 'Courses',
    'exam.modules.total': '{count} total modules',
    'exam.modules.free': '{count} free previews — no sign-in required',
    'exam.modules.locked': 'Full access after enrollment',
    'exam.tiers.title': 'Choose your tier',
    'exam.tiers.subtitle': 'All tiers include free preview modules. Upgrade or cancel any time.',
    'exam.tier.per.month': 'per month',
    'exam.tier.target': 'Target: {target}',
    'exam.module.free': 'FREE PREVIEW',
    'exam.module.enroll': 'Enroll',
    'exam.tier.preview.count': '{free} free preview · {locked} locked modules',
    'exam.tier.enroll': 'Enroll in {name}',
    'exam.faq.title': 'Common questions',
    'exam.faq.q1': 'Can I try before I buy?',
    'exam.faq.a1':
      'Yes. The first {count} modules across all tiers are free previews — no account needed. Just scroll up and click any "FREE PREVIEW" module.',
    'exam.faq.q2': 'What happens after I enroll?',
    'exam.faq.a2':
      'Create a free account, choose your tier, and complete payment via Bkash or card. Access is unlocked immediately.',
    'exam.faq.q3': 'Can I switch tiers later?',
    'exam.faq.a3':
      'Yes. You can upgrade at any time and pay only the difference. Downgrading takes effect at the next billing cycle.',
    'exam.faq.q4': 'Is there a refund policy?',
    'exam.faq.a4':
      'If you are not satisfied within the first 7 days, contact us for a full refund — no questions asked.',
    'exam.cta.title': 'Ready to start?',
    'exam.cta.subtitle': 'Not sure which tier fits your level? Take the free 5-minute placement test first.',
    'exam.cta.create': 'Create free account',
    'exam.cta.placement': 'Take placement test',

    // Course catalogue
    'course.ielts.title': 'IELTS Preparation',
    'course.ielts.desc':
      'Structured IELTS prep from Band 5.0 to 8.0. Covers all four skills — Listening, Reading, Writing, and Speaking — with AI-graded mock tests and real examiner rubrics.',
    'course.toefl.title': 'TOEFL iBT Preparation',
    'course.toefl.desc':
      'Complete TOEFL iBT prep from 60 to 110. Master Reading, Listening, Speaking, and Writing with AI-scored practice tests and SpeechRater-aligned feedback.',
    'course.pte.title': 'PTE Academic Preparation',
    'course.pte.desc':
      'AI-exam prep for AI-graded PTE Academic. Master all 20 item types, understand the enabling-skills engine, and target 79+ for Australian PR or top university entry.',
    'tier.foundation': 'Foundation',
    'tier.intermediate': 'Intermediate',
    'tier.advanced': 'Advanced',

    // Language toggle
    'lang.toggle': 'বাংলা',
    'lang.toggle.current': 'EN',
  },

  bn: {
    // Nav
    'nav.logo': 'IELTS ট্রেইনার',
    'nav.english': 'ইংরেজি দক্ষতা',
    'nav.ielts': 'IELTS',
    'nav.toefl': 'TOEFL',
    'nav.pte': 'PTE',
    'nav.courses': 'কোর্সসমূহ',
    'nav.placement': 'প্লেসমেন্ট টেস্ট দিন',
    'nav.signin': 'সাইন ইন',
    'nav.getstarted': 'শুরু করুন',
    'nav.dashboard': 'ড্যাশবোর্ড',
    'nav.signout': 'সাইন আউট',

    // Footer
    'footer.tagline': 'ঢাকায় তৈরি — বিদেশে পড়তে যেতে চাওয়া বাংলাদেশি শিক্ষার্থীদের জন্য।',
    'footer.masterenglish': 'ইংরেজি শিখুন',
    'footer.speaking': 'স্পিকিং',
    'footer.writing': 'রাইটিং',
    'footer.listening': 'লিসেনিং',
    'footer.reading': 'রিডিং',
    'footer.grammar': 'গ্রামার',
    'footer.pronunciation': 'উচ্চারণ',
    'footer.exams': 'পরীক্ষাসমূহ',
    'footer.about': 'পরিচিতি',
    'footer.aboutus': 'আমাদের সম্পর্কে',
    'footer.contact': 'যোগাযোগ',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'শর্তাবলি',
    'footer.courses': 'কোর্সসমূহ',
    'footer.copyright': '© {year} IELTS ট্রেইনার · বাংলাদেশি শিক্ষার্থীদের ভালোবেসে তৈরি।',

    // Home hero
    'home.hero.line1': 'আগে ইংরেজি আয়ত্ত করুন।',
    'home.hero.line2': 'তারপর IELTS, TOEFL বা PTE জয় করুন।',
    'home.hero.subtitle':
      'ঢাকায় বাংলাদেশি শিক্ষার্থীদের জন্য তৈরি। ভয়েস কোচিং, মক টেস্ট, AI ফিডব্যাক এবং বাংলা-সচেতন পাঠ্যক্রম — শুধু পরীক্ষায় পাস নয়, আপনাকে সত্যিকার ইংরেজি দক্ষ করতে।',
    'home.hero.cta.start': 'বিনামূল্যে শুরু করুন',
    'home.hero.cta.explore': 'ইংরেজি মডিউল দেখুন',
    'home.hero.pill1': 'দিনে ৩০ মিনিট · ৯০ দিনের পরিকল্পনা',
    'home.hero.pill2': 'ফ্রি টায়ারে সত্যিকার মক টেস্ট',
    'home.hero.pill3': 'প্রয়োজনে বাংলায় ব্যাখ্যা',

    // Home sections
    'home.step1.title': 'ধাপ ১ — ভাষা আয়ত্ত করুন',
    'home.step1.subtitle':
      'কোনো পরীক্ষার প্রস্তুতি প্ল্যাটফর্ম ইংরেজির বিকল্প হতে পারে না। প্রতিদিন বলুন, লিখুন, শুনুন, পড়ুন — পরীক্ষার ফলাফল এমনিই আসবে।',
    'home.step2.title': 'ধাপ ২ — পরীক্ষা বেছে নিন',
    'home.step2.subtitle':
      'কোন পরীক্ষা দেবেন তা নির্ভর করে কোথায় আবেদন করছেন তার উপর। প্রতিটি পরীক্ষার বিস্তারিত এবং বাংলাদেশি শিক্ষার্থীদের জন্য বাস্তবসম্মত লক্ষ্যমাত্রা দেওয়া আছে।',
    'home.step3.title': 'ধাপ ৩ — টুলস ব্যবহার করুন',
    'home.step3.subtitle': 'প্রতিটি প্ল্যানে অন্তর্ভুক্ত। ফ্রি টায়ারও আছে।',
    'home.why.title': 'শিক্ষার্থীরা কেন বারবার ফিরে আসে',
    'home.english.link': 'ইংরেজি মডিউল হাব খুলুন',
    'home.exam.guide': 'গাইড পড়ুন →',

    // Home CTA
    'home.cta.title': 'আজ রাতটাকে কাজে লাগান।',
    'home.cta.subtitle':
      'একটি প্লেসমেন্ট কুইজ। একটি ব্যক্তিগতকৃত ৯০ দিনের পরিকল্পনা। একটি প্রথম মক টেস্ট। কিছু ইন্সটল করতে হবে না।',
    'home.cta.create': 'আমার ফ্রি অ্যাকাউন্ট তৈরি করুন',

    // Skills summaries
    'skill.speaking.summary': 'প্রতিদিন ভয়েস কোচ, শ্যাডোয়িং, উচ্চারণ প্রশিক্ষণ।',
    'skill.writing.summary': 'প্যারাগ্রাফ টেমপ্লেট, AI প্রবন্ধ মূল্যায়ন।',
    'skill.listening.summary': 'পাঁচটি অ্যাকসেন্ট, চারটি কঠিনতার স্তর।',
    'skill.reading.summary': 'স্কিম, স্ক্যান, চার-পাস পদ্ধতি।',
    'skill.grammar.summary': 'বাংলাভাষীদের ১২টি সাধারণ ব্যাকরণ ভুল।',
    'skill.pronunciation.summary': 'V/W, P/F, S/Sh, শ্বা, শব্দের জোর।',

    // Exam cards (home page)
    'exam.ielts.badge': 'যুক্তরাজ্য · অস্ট্রেলিয়া · কানাডার জন্য',
    'exam.ielts.bullet1': 'একাডেমিক ও জেনারেল ট্রেইনিং',
    'exam.ielts.bullet2': 'কম্পিউটার বা কাগজে পরীক্ষা',
    'exam.ielts.bullet3': 'ব্যান্ড ৫.৫ → ৮.০ পরিকল্পনা',
    'exam.toefl.badge': 'যুক্তরাষ্ট্রের জন্য',
    'exam.toefl.bullet1': 'সম্পূর্ণ কম্পিউটারে পরীক্ষা',
    'exam.toefl.bullet2': 'সমন্বিত রিডিং + লিসেনিং + রাইটিং',
    'exam.toefl.bullet3': 'স্কোর ০–১২০, লক্ষ্য ১০০+',
    'exam.pte.badge': 'দ্রুত ফলাফল · অস্ট্রেলিয়া / নিউজিল্যান্ড',
    'exam.pte.bullet1': 'AI দ্বারা গ্রেডেড, ৪৮ ঘণ্টায় ফলাফল',
    'exam.pte.bullet2': '৩টি অংশে ২০ ধরনের প্রশ্ন',
    'exam.pte.bullet3': 'স্কোর ১০–৯০, লক্ষ্য ৭৯+',

    // Features
    'feature.mocks.title': 'পূর্ণ মক টেস্ট',
    'feature.mocks.desc': 'IELTS, TOEFL ও PTE — বিভাগ অনুযায়ী, সময়সীমা সহ, আসল পরীক্ষার মতোই স্কোর।',
    'feature.voice.title': 'AI ভয়েস কোচ',
    'feature.voice.desc': 'বহু-উচ্চারণের AI দিয়ে স্পিকিং অনুশীলন। রিয়েল-টাইম উচ্চারণ ও ব্যাকরণ সংশোধন।',
    'feature.listening.title': 'লিসেনিং অনুশীলন',
    'feature.listening.desc': 'ব্রিটিশ, আমেরিকান, অস্ট্রেলিয়ান, ভারতীয় উচ্চারণ। শিক্ষানবিশ থেকে বিশেষজ্ঞ পর্যন্ত।',
    'feature.ai.title': 'AI ইন্সট্রাক্টর',
    'feature.ai.desc': 'ব্যক্তিগতকৃত মূল্যায়ন যা ধীরে ধীরে আপনার দুর্বল জায়গাগুলো চিহ্নিত করে।',
    'feature.gamify.title': 'গেমিফাইড প্রগ্রেস',
    'feature.gamify.desc': 'XP, স্ট্রিক, ব্যাজ এবং লিডারবোর্ড আপনাকে প্রতিদিন পড়াশোনায় অনুপ্রাণিত রাখে।',
    'feature.bangla.title': 'বাংলা সাপোর্ট',
    'feature.bangla.desc':
      'দ্বিভাষিক UI। AI অনুবাদ, বাংলায় ভুলের ব্যাখ্যা, স্বাভাবিক বাংলায় ইংরেজি কোচিং।',

    // Why tiles
    'tile.habit.title': 'একটি দৈনিক অভ্যাস, কোর্স নয়',
    'tile.habit.body':
      'বেশিরভাগ প্রস্তুতি অ্যাপ বড় কন্টেন্ট লাইব্রেরি। আমরা দিনে ৩০ মিনিটের শৃঙ্খলা। স্ট্রিক, লিডারবোর্ড এবং AI টিউটরের উৎসাহ আপনাকে দায়বদ্ধ রাখে।',
    'tile.feedback.title': 'আপনার ভাষায় মূল্যায়ন',
    'tile.feedback.body':
      'ব্যাকরণের ব্যাখ্যা, বাগধারার অর্থ এবং কঠিন শব্দ সবই বাংলায় পাওয়া যায়। শুধু ইংরেজি চাইলে — বন্ধ করুন।',
    'tile.free.title': 'আসলেই ব্যবহারযোগ্য ফ্রি টায়ার',
    'tile.free.body':
      'প্রতি মাসে একটি পূর্ণ IELTS মক, একটি TOEFL মক, একটি PTE মক — বিনামূল্যে। প্রতিদিন ভয়েস কোচ। ভোকাবুলারি ডেক। ফোরাম। আমাদের একটি টাকাও না দিয়েই ব্যান্ড ৭ পাওয়া সম্ভব।',

    // Placement test
    'placement.badge': 'বিনামূল্যে · ৫ মিনিট',
    'placement.title': 'আপনার ইংরেজির স্তর জানুন',
    'placement.desc':
      '১৫টি প্রশ্ন — গ্রামার, শব্দভাণ্ডার ও পঠন-বোধের উপর। কোনো সময়সীমা নেই — প্রতিটি প্রশ্নে আপনার সময় নিন। শেষে আপনার CEFR স্তর এবং সঠিক কোর্সের সুপারিশ জানাব।',
    'placement.subtitle':
      'গ্রামার, শব্দভাণ্ডার ও পঠন-বোধের উপর ১৫টি প্রশ্ন। ফলাফলের ভিত্তিতে আপনার জন্য সঠিক কোর্সটি সুপারিশ করব।',
    'placement.cta': 'প্লেসমেন্ট টেস্ট দিন',
    'placement.check.grammar': '৫টি গ্রামার প্রশ্ন',
    'placement.check.vocab': '৫টি শব্দভাণ্ডার প্রশ্ন',
    'placement.check.reading': '৫টি পঠন-বোধ প্রশ্ন',
    'placement.check.result': 'আপনার ফলাফল: A1–A2, B1, B2, বা C1–C2',
    'placement.check.reco': 'ব্যক্তিগতকৃত কোর্সের সুপারিশ',
    'placement.start': 'টেস্ট শুরু করুন',
    'placement.type.grammar': 'গ্রামার',
    'placement.type.vocabulary': 'শব্দভাণ্ডার',
    'placement.type.reading': 'পঠন-বোধ',
    'placement.quiz.question': 'প্রশ্ন {current} / {total}',
    'placement.quiz.passage': 'অনুচ্ছেদটি পড়ুন',
    'placement.quiz.choosebest': 'সেরা উত্তরটি বেছে নিন।',
    'placement.quiz.back': 'পেছনে',
    'placement.quiz.next': 'পরের প্রশ্ন',
    'placement.quiz.see': 'আমার ফলাফল দেখুন',

    // Results page
    'results.notfound': 'কোনো ফলাফল পাওয়া যায়নি। অনুগ্রহ করে প্রথমে প্লেসমেন্ট টেস্ট দিন।',
    'results.taketest': 'টেস্ট দিন',
    'results.header': 'আপনার প্লেসমেন্ট ফলাফল',
    'results.correct': '{pct}% সঠিক',
    'results.breakdown': 'স্কোরের বিবরণ',
    'results.overall': 'মোট {total}টি প্রশ্নের উপর ভিত্তিতে সামগ্রিক স্কোর।',
    'results.reco.title': 'আপনার স্তরের জন্য সুপারিশকৃত',
    'results.reco.subtitle': 'আপনার {level} ({label}) ফলাফলের ভিত্তিতে আমাদের সুপারিশকৃত কোর্সসমূহ।',
    'results.course.tier': '{tier} কোর্স',
    'results.course.link': 'কোর্স দেখুন',
    'results.browse': 'সব কোর্স দেখুন',
    'results.retake': 'আবার দিন',

    // Courses page
    'courses.browse': 'সব কোর্স দেখুন',
    'courses.hero.badge': 'কোর্সসমূহ',
    'courses.hero.title': 'কাঠামোবদ্ধ প্রস্তুতি। বাস্তব ফলাফল।',
    'courses.hero.subtitle':
      'প্রতিটি পরীক্ষার জন্য তিনটি স্তর — ফাউন্ডেশন, ইন্টারমিডিয়েট এবং অ্যাডভান্সড। প্রতিটি স্তরে ফ্রি প্রিভিউ মডিউল, AI-গ্রেডেড মক টেস্ট এবং বাংলায় ব্যাখ্যা।',
    'courses.pill.free': 'ফ্রি প্রিভিউ মডিউল',
    'courses.pill.ai': 'AI মক টেস্ট গ্রেডিং',
    'courses.pill.bangla': 'বাংলায় ব্যাখ্যা',
    'courses.pill.locked': 'ভর্তির পর সম্পূর্ণ কন্টেন্ট',
    'courses.choose': 'আপনার পরীক্ষা বেছে নিন',
    'courses.ielts.badge': 'যুক্তরাজ্য · অস্ট্রেলিয়া · কানাডা',
    'courses.toefl.badge': 'যুক্তরাষ্ট্র · গ্র্যাজুয়েট স্কুল',
    'courses.pte.badge': 'অস্ট্রেলিয়া · নিউজিল্যান্ড · দ্রুত ফলাফল',
    'courses.explore': '{exam} কোর্স দেখুন',
    'courses.modules.info': '{free}টি ফ্রি প্রিভিউ মডিউল · মোট {total}টি মডিউল',
    'courses.pricing.title': 'এক নজরে মূল্য',
    'courses.pricing.subtitle': 'সকল মূল্য বাংলাদেশি টাকায় (BDT)। যেকোনো সময় বাতিল করুন।',
    'courses.pricing.tier': 'স্তর',
    'courses.pricing.target': 'লক্ষ্যমাত্রা',
    'courses.pricing.mo': '/মাস',
    'courses.pricing.note':
      '* যেকোনো কোর্সের প্রথম ২টি মডিউল সবসময় বিনামূল্যে দেখা যাবে — সাইন ইন ছাড়াই।',
    'courses.cta.title': 'কোন স্তরটি আপনার জন্য সঠিক বুঝতে পারছেন না?',
    'courses.cta.subtitle':
      'আমাদের বিনামূল্যের ৫ মিনিটের প্লেসমেন্ট টেস্ট দিন। আমরা আপনার বর্তমান ইংরেজি স্তর মূল্যায়ন করে বলব কোন কোর্স থেকে শুরু করতে হবে।',

    // Exam detail page
    'exam.breadcrumb': 'কোর্সসমূহ',
    'exam.modules.total': 'মোট {count}টি মডিউল',
    'exam.modules.free': '{count}টি ফ্রি প্রিভিউ — সাইন ইন ছাড়াই',
    'exam.modules.locked': 'ভর্তির পর সম্পূর্ণ অ্যাক্সেস',
    'exam.tiers.title': 'আপনার স্তর বেছে নিন',
    'exam.tiers.subtitle': 'সব স্তরে ফ্রি প্রিভিউ মডিউল। যেকোনো সময় আপগ্রেড বা বাতিল করুন।',
    'exam.tier.per.month': 'প্রতি মাস',
    'exam.tier.target': 'লক্ষ্য: {target}',
    'exam.module.free': 'বিনামূল্যে প্রিভিউ',
    'exam.module.enroll': 'ভর্তি হন',
    'exam.tier.preview.count': '{free}টি ফ্রি প্রিভিউ · {locked}টি লক করা মডিউল',
    'exam.tier.enroll': '{name}-এ ভর্তি হন',
    'exam.faq.title': 'সাধারণ প্রশ্নসমূহ',
    'exam.faq.q1': 'কেনার আগে কি চেষ্টা করা যাবে?',
    'exam.faq.a1':
      'হ্যাঁ। সকল স্তরের প্রথম {count}টি মডিউল ফ্রি প্রিভিউ — অ্যাকাউন্ট ছাড়াই। উপরে স্ক্রোল করে যেকোনো "বিনামূল্যে প্রিভিউ" মডিউলে ক্লিক করুন।',
    'exam.faq.q2': 'ভর্তি হওয়ার পর কী হবে?',
    'exam.faq.a2':
      'একটি ফ্রি অ্যাকাউন্ট তৈরি করুন, আপনার স্তর বেছে নিন এবং বিকাশ বা কার্ডে পেমেন্ট করুন। সাথে সাথে অ্যাক্সেস পাবেন।',
    'exam.faq.q3': 'পরে কি স্তর পরিবর্তন করা যাবে?',
    'exam.faq.a3':
      'হ্যাঁ। যেকোনো সময় আপগ্রেড করুন এবং শুধু পার্থক্যটা দিন। ডাউনগ্রেড পরবর্তী বিলিং চক্রে কার্যকর হবে।',
    'exam.faq.q4': 'ফেরত দেওয়ার নীতি আছে কি?',
    'exam.faq.a4':
      'প্রথম ৭ দিনের মধ্যে সন্তুষ্ট না হলে, আমাদের সাথে যোগাযোগ করুন — কোনো প্রশ্ন ছাড়াই সম্পূর্ণ অর্থ ফেরত।',
    'exam.cta.title': 'শুরু করতে প্রস্তুত?',
    'exam.cta.subtitle':
      'কোন স্তরটি আপনার জন্য উপযুক্ত বুঝতে পারছেন না? আগে বিনামূল্যের ৫ মিনিটের প্লেসমেন্ট টেস্ট দিন।',
    'exam.cta.create': 'ফ্রি অ্যাকাউন্ট তৈরি করুন',
    'exam.cta.placement': 'প্লেসমেন্ট টেস্ট দিন',

    // Course catalogue
    'course.ielts.title': 'IELTS প্রস্তুতি',
    'course.ielts.desc':
      'ব্যান্ড ৫.০ থেকে ৮.০ পর্যন্ত কাঠামোবদ্ধ IELTS প্রস্তুতি। AI-গ্রেডেড মক টেস্টসহ সব চারটি দক্ষতা — লিসেনিং, রিডিং, রাইটিং এবং স্পিকিং।',
    'course.toefl.title': 'TOEFL iBT প্রস্তুতি',
    'course.toefl.desc':
      '৬০ থেকে ১১০ পর্যন্ত সম্পূর্ণ TOEFL iBT প্রস্তুতি। AI-স্কোরড প্র্যাকটিস টেস্ট এবং SpeechRater-ভিত্তিক ফিডব্যাকসহ সব অংশ।',
    'course.pte.title': 'PTE Academic প্রস্তুতি',
    'course.pte.desc':
      'AI-গ্রেডেড PTE Academic-এর জন্য AI প্রস্তুতি। সব ২০টি আইটেম টাইপ আয়ত্ত করুন, স্কোরিং ইঞ্জিন বুঝুন এবং অস্ট্রেলিয়ান PR বা শীর্ষ বিশ্ববিদ্যালয়ের জন্য ৭৯+ লক্ষ্য করুন।',
    'tier.foundation': 'ফাউন্ডেশন',
    'tier.intermediate': 'ইন্টারমিডিয়েট',
    'tier.advanced': 'অ্যাডভান্সড',

    // Language toggle
    'lang.toggle': 'EN',
    'lang.toggle.current': 'বাংলা',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Lang, key: TranslationKey, vars?: Record<string, string>): string {
  const map = translations[lang] as Record<string, string>;
  let str = map[key] ?? (translations.en as Record<string, string>)[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, v);
    }
  }
  return str;
}

export { translations };
