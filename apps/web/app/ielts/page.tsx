'use client';

import Link from 'next/link';
import { ArrowRight, Headphones, BookOpen, PenLine, Mic } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'Exam · IELTS',
    h1: 'IELTS, with Bangla-aware coaching.',
    desc: 'IELTS — International English Language Testing System — is the most accepted English test for Bangladeshi students applying abroad. UK, Australia, Canada, New Zealand, much of Europe, and an increasing number of US universities all take IELTS. This is the complete guide, from band targets to test centres in Dhaka and Chattogram.',
    cta: 'Start free',
    mockCta: 'Take a mock test',
    academic: {
      title: 'Academic vs General Training — which one are you sitting?',
      at: 'IELTS Academic',
      atBody:
        'For university admission (undergrad and graduate) and professional registration (medicine, nursing, engineering). Reading and Writing modules use academic texts and tasks. If you are applying to a university, this is you.',
      gt: 'IELTS General Training',
      gtBody:
        'For work visas, permanent residency (Canada, Australia, UK skilled migration), and secondary education. Reading and Writing are more practical — workplace, emails, social contexts. Listening and Speaking are identical to Academic.',
    },
    modules: {
      title: "The four modules — what's tested, how long, how to win",
      listening: 'Listening · 30 min + 10 min transfer · 40 questions',
      listeningDesc:
        'Four recordings. Sections 1–2 are everyday situations; sections 3–4 are academic. Played once. Multiple accents — British heavily featured but Australian and Indian appear in Sections 2 and 4.',
      listeningTips: [
        'Underline keywords in the question paper before each recording starts.',
        'Predict the type of answer (number, name, noun, verb) — limits your guessing space.',
        'Pay attention to spelling. "Wednesday" misspelled = wrong.',
        'Transfer time is for transferring, not for guessing — answer in real time.',
      ],
      reading: 'Reading · 60 min · 40 questions',
      readingDesc:
        'Three passages (Academic) or three sections (General). 60 minutes flat — no extra transfer time. Most Bangladeshi candidates run out of time on passage 3.',
      readingLinkLabel: 'Reading module',
      readingTips: [
        'Use the four-pass method (see the Reading module).',
        '"True / False / Not Given" — Not Given trips up 70% of students. If the passage doesn\'t state it, NG.',
        'Spend less time on early questions to bank time for matching headings.',
      ],
      writing: 'Writing · 60 min · 2 tasks',
      writingDesc:
        'Task 1 (20 min, 150 words): describe a graph / chart / process (Academic) or write a letter (General). Task 2 (40 min, 250 words): a structured essay.',
      writingTips: [
        "Task 2 is worth twice as much. Don't blow your time on Task 1.",
        'Overview sentence in Task 1 is non-negotiable — without it, you cannot exceed Band 6.',
        'For Task 2: PEEL paragraphs, clear thesis, one example per body paragraph.',
        'Hand-count your words. Under 250 = automatic band drop.',
      ],
      speaking: 'Speaking · 11–14 min · 3 parts',
      speakingDesc:
        'A face-to-face interview with a certified examiner. Part 1 — personal questions (4–5 min). Part 2 — cue card, 1-minute prep + 2-minute long turn. Part 3 — abstract discussion of Part 2\'s topic (4–5 min).',
      speakingTips: [
        "Don't memorise answers — examiners spot scripts and mark you down.",
        'Speak in extended turns. One-sentence answers = Band 5.',
        'For the cue card, use the four points printed — they are scaffolding, use them.',
        'It is fine to disagree with the examiner in Part 3. They want extended reasoning.',
      ],
    },
    bands: {
      title: 'Band scoring decoded',
      intro:
        'Each module is scored 0–9 in half-band steps. The overall band is the average of the four, rounded to the nearest half. Below are the realistic interpretations Bangladeshi students should plan around.',
      b55: 'Band 5.5 — most undergrad in Bangladesh sit here on the first mock. Conversational, makes errors, gets the message across.',
      b60: 'Band 6.0 — minimum for many UK / Australian undergrad programs. Reasonably accurate, can argue an opinion in writing.',
      b65: 'Band 6.5 — most postgrad admissions. Errors don\'t impede communication. The sweet spot to aim for in 90 days from a 5.5 start.',
      b70: 'Band 7.0 — competitive scholarships, Australian PR. Articulate, precise vocabulary, controlled grammar.',
      b75: 'Band 7.5+ — top universities, medicine boards. Reads like a native speaker — but still makes occasional errors.',
      b80: 'Band 8+ — fluency is automatic; only rare slips remain.',
    },
    centres: {
      title: 'Test centres and fees in Bangladesh',
      intro:
        'IELTS is delivered in Bangladesh by British Council and IDP Education. Both are equally accepted — choose based on date availability and venue convenience.',
      dhaka: 'Dhaka — multiple centres, weekly slots. Most students sit here.',
      others:
        'Chattogram, Sylhet, Khulna — monthly slots, book early especially around university admission cycles.',
      computer:
        'Computer-delivered IELTS — faster results (3–5 days vs 13 days for paper). Available at most main centres.',
      retake:
        'IELTS One Skill Retake — you can retake one module without redoing the whole test if you sat computer-delivered.',
      note: 'Fees and dates change frequently. Always confirm on the official British Council Bangladesh and IDP Bangladesh websites before booking.',
    },
    plan: {
      title: 'The realistic 90-day study plan',
      d1: 'Days 1–14: Baseline mock + daily 30-min English-mastery habits. No exam tricks yet.',
      d2: 'Days 15–45: Grammar repair + the four-pass reading method + 10-min daily shadowing.',
      d3: 'Days 46–75: Two full mock tests per week + AI tutor essay reviews + voice-coach speaking drills.',
      d4: 'Days 76–90: Final tactics — Task 1 templates, speaking Part 2 framework, weakness-targeted drills.',
      cta: 'Open the 90-day plan',
    },
    faqs: {
      title: 'Bangladesh-specific FAQs',
      q1: 'Is British Council or IDP harder?',
      a1: 'Identical test. Some students believe IDP examiners are more lenient in Speaking; there is no published data. Pick by venue and date.',
      q2: 'Should I sit paper or computer?',
      a2: 'Computer if your typing speed is > 30 wpm in English and you find paper-grading anxiety distracting. Paper if your handwriting is faster than your typing. Results in 3-5 days for computer; 13 days for paper.',
      q3: 'How many attempts is normal?',
      a3: 'Most Bangladeshi students hit their target by attempt 2. If you score below your target by 1 band, study another 6–8 weeks targeting your weakest module and retake.',
      q4: 'Does IELTS expire?',
      a4: 'Two years from your test date. Most universities require a score within two years of admission.',
    },
  },
  bn: {
    badge: 'পরীক্ষা · IELTS',
    h1: 'IELTS, বাংলা-সচেতন কোচিং সহ।',
    desc: 'IELTS — International English Language Testing System — বাংলাদেশি শিক্ষার্থীদের বিদেশে পড়তে যাওয়ার জন্য সবচেয়ে গ্রহণযোগ্য ইংরেজি পরীক্ষা। যুক্তরাজ্য, অস্ট্রেলিয়া, কানাডা, নিউজিল্যান্ড, ইউরোপের অনেক দেশ এবং ক্রমবর্ধমান সংখ্যক মার্কিন বিশ্ববিদ্যালয় IELTS গ্রহণ করে। এটি সম্পূর্ণ গাইড — ব্যান্ড লক্ষ্যমাত্রা থেকে ঢাকা ও চট্টগ্রামের পরীক্ষাকেন্দ্র পর্যন্ত।',
    cta: 'বিনামূল্যে শুরু করুন',
    mockCta: 'একটি মক টেস্ট দিন',
    academic: {
      title: 'একাডেমিক বনাম জেনারেল ট্রেইনিং — আপনি কোনটিতে বসছেন?',
      at: 'IELTS Academic',
      atBody:
        'বিশ্ববিদ্যালয় ভর্তি (আন্ডারগ্র্যাড ও গ্র্যাজুয়েট) এবং পেশাদার নিবন্ধনের (চিকিৎসা, নার্সিং, ইঞ্জিনিয়ারিং) জন্য। রিডিং ও রাইটিং মডিউলে একাডেমিক পাঠ্য ও কাজ। আপনি যদি বিশ্ববিদ্যালয়ে আবেদন করছেন, এটিই আপনার।',
      gt: 'IELTS General Training',
      gtBody:
        'কর্মভিসা, স্থায়ী বাসস্থান (কানাডা, অস্ট্রেলিয়া, যুক্তরাজ্যের দক্ষ মাইগ্রেশন) এবং মাধ্যমিক শিক্ষার জন্য। রিডিং ও রাইটিং আরও ব্যবহারিক — কর্মক্ষেত্র, ইমেইল, সামাজিক প্রসঙ্গ। লিসেনিং এবং স্পিকিং একাডেমিকের মতো।',
    },
    modules: {
      title: 'চারটি মডিউল — কী পরীক্ষা হয়, কতক্ষণ, কীভাবে জিতবেন',
      listening: 'লিসেনিং · ৩০ মিনিট + ১০ মিনিট ট্রান্সফার · ৪০টি প্রশ্ন',
      listeningDesc:
        'চারটি রেকর্ডিং। সেকশন ১–২ দৈনন্দিন পরিস্থিতি; সেকশন ৩–৪ একাডেমিক। একবার বাজানো হয়। বিভিন্ন উচ্চারণ — ব্রিটিশ বেশি তবে অস্ট্রেলিয়ান ও ভারতীয় সেকশন ২ ও ৪-এ আসে।',
      listeningTips: [
        'রেকর্ডিং শুরুর আগে প্রশ্নপত্রে কীওয়ার্ড আন্ডারলাইন করুন।',
        'উত্তরের ধরন আগে ভাবুন (সংখ্যা, নাম, বিশেষ্য, ক্রিয়া) — অনুমানের পরিসর কমায়।',
        'বানানে মনোযোগ দিন। "Wednesday" ভুল বানান = ভুল উত্তর।',
        'ট্রান্সফার সময় ট্রান্সফারের জন্য, অনুমানের জন্য নয় — রিয়েল-টাইমে উত্তর দিন।',
      ],
      reading: 'রিডিং · ৬০ মিনিট · ৪০টি প্রশ্ন',
      readingDesc:
        'তিনটি অনুচ্ছেদ (একাডেমিক) বা তিনটি সেকশন (জেনারেল)। ৬০ মিনিট — কোনো অতিরিক্ত ট্রান্সফার সময় নেই। বেশিরভাগ বাংলাদেশি প্রার্থী অনুচ্ছেদ ৩-এ সময় শেষ করে ফেলে।',
      readingLinkLabel: 'রিডিং মডিউল',
      readingTips: [
        'চার-পাস পদ্ধতি ব্যবহার করুন (রিডিং মডিউল দেখুন)।',
        '"True / False / Not Given" — Not Given-এ ৭০% শিক্ষার্থী ভুল করে। অনুচ্ছেদে না বললে NG।',
        'পরের প্রশ্নের জন্য সময় বাঁচাতে প্রথম প্রশ্নে কম সময় দিন।',
      ],
      writing: 'রাইটিং · ৬০ মিনিট · ২টি টাস্ক',
      writingDesc:
        'Task 1 (২০ মিনিট, ১৫০ শব্দ): গ্রাফ/চার্ট/প্রক্রিয়া বর্ণনা (একাডেমিক) বা চিঠি লেখা (জেনারেল)। Task 2 (৪০ মিনিট, ২৫০ শব্দ): কাঠামোবদ্ধ রচনা।',
      writingTips: [
        'Task 2 দ্বিগুণ মূল্যবান। Task 1-এ সময় নষ্ট করবেন না।',
        'Task 1-এ ওভারভিউ বাক্য অবশ্যই লিখতে হবে — ছাড়া ব্যান্ড ৬-এর বেশি পাওয়া সম্ভব নয়।',
        'Task 2: PEEL প্যারাগ্রাফ, স্পষ্ট থিসিস, প্রতিটি বডি প্যারায় একটি উদাহরণ।',
        'হাতে গুনে শব্দ গণনা করুন। ২৫০-এর নিচে = স্বয়ংক্রিয় ব্যান্ড হ্রাস।',
      ],
      speaking: 'স্পিকিং · ১১–১৪ মিনিট · ৩টি পার্ট',
      speakingDesc:
        'একজন সার্টিফাইড পরীক্ষকের সাথে সামনাসামনি সাক্ষাৎকার। পার্ট ১ — ব্যক্তিগত প্রশ্ন (৪–৫ মিনিট)। পার্ট ২ — কিউ কার্ড, ১ মিনিট প্রস্তুতি + ২ মিনিট দীর্ঘ বক্তব্য। পার্ট ৩ — পার্ট ২-এর বিষয়ে বিমূর্ত আলোচনা (৪–৫ মিনিট)।',
      speakingTips: [
        'মুখস্থ উত্তর দেবেন না — পরীক্ষকরা স্ক্রিপ্ট ধরেন এবং নম্বর কমান।',
        'বিস্তারিত উত্তর দিন। এক-বাক্যের উত্তর = ব্যান্ড ৫।',
        'কিউ কার্ডের চারটি পয়েন্ট ব্যবহার করুন — এগুলো ভারা, ব্যবহার করুন।',
        'পার্ট ৩-এ পরীক্ষকের সাথে দ্বিমত করা ঠিক আছে। তারা বিস্তৃত যুক্তি চান।',
      ],
    },
    bands: {
      title: 'ব্যান্ড স্কোরিং সহজে বোঝা',
      intro:
        'প্রতিটি মডিউল হাফ-ব্যান্ড ধাপে ০–৯ স্কোর করা হয়। সামগ্রিক ব্যান্ড চারটির গড়, নিকটতম হাফে গোলাকার। নিচে বাস্তবসম্মত ব্যাখ্যা দেওয়া হয়েছে যা বাংলাদেশি শিক্ষার্থীদের পরিকল্পনায় সহায়ক।',
      b55: 'ব্যান্ড ৫.৫ — বেশিরভাগ বাংলাদেশি শিক্ষার্থী প্রথম মক টেস্টে এখানে থাকে। কথোপকথনমূলক, ভুল করে, বার্তা পৌঁছায়।',
      b60: 'ব্যান্ড ৬.০ — অনেক যুক্তরাজ্য / অস্ট্রেলিয়ান আন্ডারগ্র্যাড প্রোগ্রামের ন্যূনতম। যুক্তিসঙ্গত নির্ভুলতা, লেখায় মতামত দিতে পারে।',
      b65: 'ব্যান্ড ৬.৫ — বেশিরভাগ পোস্টগ্র্যাড ভর্তি। ভুল যোগাযোগে বাধা দেয় না। ৫.৫ থেকে শুরু করে ৯০ দিনে এটাই লক্ষ্য।',
      b70: 'ব্যান্ড ৭.০ — প্রতিযোগিতামূলক বৃত্তি, অস্ট্রেলিয়ান PR। স্পষ্ট, নির্ভুল শব্দভাণ্ডার, নিয়ন্ত্রিত ব্যাকরণ।',
      b75: 'ব্যান্ড ৭.৫+ — শীর্ষ বিশ্ববিদ্যালয়, মেডিসিন বোর্ড। নেটিভের মতো পড়ে — তবে মাঝেমাঝে ভুল হয়।',
      b80: 'ব্যান্ড ৮+ — স্বতঃস্ফূর্ত দক্ষতা; কেবল বিরল ভুল থাকে।',
    },
    centres: {
      title: 'বাংলাদেশে পরীক্ষাকেন্দ্র ও ফি',
      intro:
        'IELTS বাংলাদেশে ব্রিটিশ কাউন্সিল এবং IDP Education দ্বারা পরিচালিত হয়। উভয়ই সমানভাবে গ্রহণযোগ্য — তারিখের প্রাপ্যতা ও কেন্দ্রের সুবিধা অনুযায়ী বেছে নিন।',
      dhaka: 'ঢাকা — একাধিক কেন্দ্র, সাপ্তাহিক স্লট। বেশিরভাগ শিক্ষার্থী এখানেই পরীক্ষা দেয়।',
      others:
        'চট্টগ্রাম, সিলেট, খুলনা — মাসিক স্লট, বিশ্ববিদ্যালয় ভর্তির মৌসুমের আগে বুক করুন।',
      computer:
        'কম্পিউটার-ডেলিভার্ড IELTS — দ্রুত ফলাফল (৩-৫ দিন বনাম কাগজে ১৩ দিন)। বেশিরভাগ প্রধান কেন্দ্রে পাওয়া যায়।',
      retake:
        'IELTS One Skill Retake — কম্পিউটারে পরীক্ষা দিলে পুরো পরীক্ষা না করে একটি মডিউল পুনরায় দেওয়া যায়।',
      note: 'ফি ও তারিখ প্রায়ই পরিবর্তন হয়। বুক করার আগে সরকারি ব্রিটিশ কাউন্সিল বাংলাদেশ ও IDP বাংলাদেশ ওয়েবসাইটে নিশ্চিত করুন।',
    },
    plan: {
      title: 'বাস্তবসম্মত ৯০ দিনের অধ্যয়ন পরিকল্পনা',
      d1: 'দিন ১–১৪: বেসলাইন মক + প্রতিদিন ৩০ মিনিটের ইংরেজি-আয়ত্তের অভ্যাস। এখনও কোনো পরীক্ষার কৌশল নেই।',
      d2: 'দিন ১৫–৪৫: ব্যাকরণ মেরামত + চার-পাস রিডিং পদ্ধতি + দৈনিক ১০ মিনিট শ্যাডোয়িং।',
      d3: 'দিন ৪৬–৭৫: প্রতি সপ্তাহে দুটি পূর্ণ মক টেস্ট + AI টিউটর রচনা পর্যালোচনা + ভয়েস-কোচ স্পিকিং ড্রিল।',
      d4: 'দিন ৭৬–৯০: চূড়ান্ত কৌশল — Task 1 টেমপ্লেট, স্পিকিং পার্ট ২ ফ্রেমওয়ার্ক, দুর্বলতা-লক্ষ্যভিত্তিক ড্রিল।',
      cta: '৯০ দিনের পরিকল্পনা খুলুন',
    },
    faqs: {
      title: 'বাংলাদেশ-নির্দিষ্ট সাধারণ প্রশ্ন',
      q1: 'ব্রিটিশ কাউন্সিল নাকি IDP কঠিন?',
      a1: 'একই পরীক্ষা। কেউ কেউ মনে করে IDP পরীক্ষকরা স্পিকিংয়ে বেশি সহানুভূতিশীল; কোনো প্রকাশিত তথ্য নেই। কেন্দ্র ও তারিখ অনুযায়ী বেছে নিন।',
      q2: 'কাগজ নাকি কম্পিউটারে বসব?',
      a2: 'কম্পিউটার যদি ইংরেজিতে টাইপের গতি > ৩০ wpm হয় এবং কাগজে গ্রেডিং-উদ্বেগ বিক্ষিপ্ত মনে হয়। কাগজ যদি হাতের লেখা টাইপের চেয়ে দ্রুত হয়। কম্পিউটারে ৩-৫ দিনে ফলাফল; কাগজে ১৩ দিন।',
      q3: 'কতটি পরীক্ষা স্বাভাবিক?',
      a3: 'বেশিরভাগ বাংলাদেশি শিক্ষার্থী ২য় চেষ্টায় লক্ষ্য অর্জন করে। ১ ব্যান্ড কম পেলে দুর্বল মডিউল লক্ষ্য করে আরও ৬–৮ সপ্তাহ পড়ুন এবং পুনরায় দিন।',
      q4: 'IELTS কি মেয়াদোত্তীর্ণ হয়?',
      a4: 'পরীক্ষার তারিখ থেকে দুই বছর। বেশিরভাগ বিশ্ববিদ্যালয় ভর্তির দুই বছরের মধ্যে স্কোর চায়।',
    },
  },
};

export default function IeltsPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/sign-up">
              {c.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tests">{c.mockCta}</Link>
          </Button>
        </div>
      </section>

      <Section title={c.academic.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.academic.at}>{c.academic.atBody}</Tile>
          <Tile title={c.academic.gt}>{c.academic.gtBody}</Tile>
        </div>
      </Section>

      <Section title={c.modules.title}>
        <div className="space-y-5">
          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.modules.listening}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.modules.listeningDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.modules.listeningTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.modules.reading}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.modules.readingDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>
                {lang === 'bn' ? (
                  <>চার-পাস পদ্ধতি ব্যবহার করুন (<Link href="/english/reading" className="text-primary underline-offset-2 hover:underline">{c.modules.readingLinkLabel}</Link> দেখুন)।</>
                ) : (
                  <>Use the four-pass method (see the <Link href="/english/reading" className="text-primary underline-offset-2 hover:underline">{c.modules.readingLinkLabel}</Link>).</>
                )}
              </li>
              {c.modules.readingTips.slice(1).map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <PenLine className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.modules.writing}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.modules.writingDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.modules.writingTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.modules.speaking}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.modules.speakingDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.modules.speakingTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={c.bands.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>{c.bands.intro}</p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">5.5</span> — {c.bands.b55.replace('Band 5.5 — ', '').replace('ব্যান্ড ৫.৫ — ', '')}</li>
            <li><span className="font-semibold">6.0</span> — {c.bands.b60.replace('Band 6.0 — ', '').replace('ব্যান্ড ৬.০ — ', '')}</li>
            <li><span className="font-semibold">6.5</span> — {c.bands.b65.replace('Band 6.5 — ', '').replace('ব্যান্ড ৬.৫ — ', '')}</li>
            <li><span className="font-semibold">7.0</span> — {c.bands.b70.replace('Band 7.0 — ', '').replace('ব্যান্ড ৭.০ — ', '')}</li>
            <li><span className="font-semibold">7.5+</span> — {c.bands.b75.replace('Band 7.5+ — ', '').replace('ব্যান্ড ৭.৫+ — ', '')}</li>
            <li><span className="font-semibold">8+</span> — {c.bands.b80.replace('Band 8+ — ', '').replace('ব্যান্ড ৮+ — ', '')}</li>
          </ul>
        </div>
      </Section>

      <Section title={c.centres.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>{c.centres.intro}</p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">{lang === 'bn' ? 'ঢাকা' : 'Dhaka'}</span> — {c.centres.dhaka.split(' — ').slice(1).join(' — ')}</li>
            <li><span className="font-semibold">{lang === 'bn' ? 'চট্টগ্রাম, সিলেট, খুলনা' : 'Chattogram, Sylhet, Khulna'}</span> — {c.centres.others.split(' — ').slice(1).join(' — ')}</li>
            <li><span className="font-semibold">{lang === 'bn' ? 'কম্পিউটার-ডেলিভার্ড IELTS' : 'Computer-delivered IELTS'}</span> — {c.centres.computer.split(' — ').slice(1).join(' — ')}</li>
            <li><span className="font-semibold">IELTS One Skill Retake</span> — {c.centres.retake.replace('IELTS One Skill Retake — ', '').replace('IELTS One Skill Retake — ', '')}</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{c.centres.note}</p>
        </div>
      </Section>

      <Section title={c.plan.title}>
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4">{c.plan.d1}</li>
          <li className="rounded-lg border bg-card p-4">{c.plan.d2}</li>
          <li className="rounded-lg border bg-card p-4">{c.plan.d3}</li>
          <li className="rounded-lg border bg-card p-4">{c.plan.d4}</li>
        </ol>
        <Button asChild className="mt-5">
          <Link href="/sign-up">
            {c.plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>

      <Section title={c.faqs.title}>
        <div className="space-y-3 text-sm">
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.faqs.q1}</p>
            <p className="mt-1 text-muted-foreground">{c.faqs.a1}</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.faqs.q2}</p>
            <p className="mt-1 text-muted-foreground">{c.faqs.a2}</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.faqs.q3}</p>
            <p className="mt-1 text-muted-foreground">{c.faqs.a3}</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.faqs.q4}</p>
            <p className="mt-1 text-muted-foreground">{c.faqs.a4}</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
