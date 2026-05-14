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

    // Placement test
    'placement.badge': 'Free · 5 minutes',
    'placement.title': 'Find your English level',
    'placement.subtitle':
      '15 questions across grammar, vocabulary, and reading. We use the result to recommend the right course for you.',
    'placement.cta': 'Take the placement test',

    // Courses CTA
    'courses.browse': 'Browse all courses',

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

    // Placement test
    'placement.badge': 'বিনামূল্যে · ৫ মিনিট',
    'placement.title': 'আপনার ইংরেজির স্তর জানুন',
    'placement.subtitle':
      'গ্রামার, শব্দভাণ্ডার ও পঠন-বোধের উপর ১৫টি প্রশ্ন। ফলাফলের ভিত্তিতে আপনার জন্য সঠিক কোর্সটি সুপারিশ করব।',
    'placement.cta': 'প্লেসমেন্ট টেস্ট দিন',

    // Courses CTA
    'courses.browse': 'সব কোর্স দেখুন',

    // Language toggle
    'lang.toggle': 'English',
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
