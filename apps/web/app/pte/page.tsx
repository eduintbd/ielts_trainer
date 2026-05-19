'use client';

import Link from 'next/link';
import { ArrowRight, Mic, Headphones, BookOpen } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'Exam · PTE Academic',
    h1: 'PTE Academic — fast results, AI grading.',
    desc: 'Pearson Test of English Academic is the test of choice if you want results in 48 hours and prefer a fully-AI-graded exam (no human examiner can lower your score on a bad mood day). Accepted by Australian and New Zealand universities, almost all UK institutions, and increasingly by the US and Canada. PTE is the fastest way to a study visa for Australia from Bangladesh.',
    cta: 'Start free',
    mockCta: 'Take a mock test',
    diff: {
      title: 'What makes PTE different',
      t1: '100% computer + AI graded',
      t1b: 'No human examiner. Your speaking is graded by speech-recognition AI. This is the single biggest tactical difference — you must speak clearly, at consistent volume, without long pauses (the AI penalises silence harshly).',
      t2: 'Integrated skills',
      t2b: 'One task can test reading + speaking simultaneously (Read Aloud), or listening + writing (Summarise Spoken Text). Practice for the skill combos, not the skills in isolation.',
      t3: 'Fast results',
      t3b: 'Scores in 2 business days, sometimes 24 hours. If your visa deadline is tight, this is the test.',
      t4: 'Score 10–90 scaled',
      t4b: 'Maps roughly to CEFR levels. 65+ = competitive university. 79+ = top universities and Australian PR superior English points.',
    },
    parts: {
      title: 'The three parts of PTE Academic',
      p1: 'Part 1 · Speaking + Writing · 54–67 min',
      p1desc: 'The longest section. Mixed item types:',
      p1items: [
        'Read Aloud — read a 60-word passage aloud. Pronunciation, fluency, and oral content all scored.',
        'Repeat Sentence — listen to a sentence, repeat it exactly. Memory + pronunciation.',
        'Describe Image — 40 seconds to describe a chart or photo. Pre-built templates win here.',
        'Re-tell Lecture — listen to a 60-90 second lecture, summarise it in your own words for 40 seconds.',
        'Answer Short Question — one-word or short-phrase answer to general knowledge questions.',
        'Summarise Written Text — read 300 words, summarise in one sentence (5-75 words).',
        'Essay — 200-300 words on a given topic, 20 minutes.',
      ],
      p2: 'Part 2 · Reading · 29–30 min',
      p2items: [
        'Reading & Writing: Fill in the Blanks — drop-down menus, requires grammar + collocation knowledge.',
        'Multiple Choice (single answer) — typical comprehension.',
        'Re-order Paragraphs — drag and drop sentences into logical order. Cohesion devices are your clue.',
        'Reading: Fill in the Blanks — drag words into gaps. Vocabulary + meaning fit.',
        'Multiple Choice (multiple answer) — usually 2-3 correct out of 5-7. Wrong answers cost you points (negative marking), so don\'t guess wildly.',
      ],
      p3: 'Part 3 · Listening · 30–43 min',
      p3items: [
        'Summarise Spoken Text — listen to a 60-90s audio, write a 50-70 word summary in 10 minutes.',
        'Multiple Choice (single and multiple answer) — academic lectures and dialogues.',
        'Fill in the Blanks — type missing words while listening. Hardest for slow typists.',
        'Highlight Correct Summary — pick the option that summarises what you heard.',
        'Select Missing Word — predict the last word of an audio clip.',
        'Highlight Incorrect Words — read along with audio, click the words that differ.',
        'Write from Dictation — listen to a sentence, type it exactly. Spelling-critical.',
      ],
    },
    ai: {
      title: 'The AI-grading rules every PTE candidate must internalise',
      r1: 'The AI does not give partial credit for hesitation. A 3-second pause is worse than a wrong word, especially in Read Aloud and Repeat Sentence.',
      r2: 'Volume matters. If your microphone level drops below the threshold, the AI scores you near zero on that item. Always position the mic 4-6cm from your mouth.',
      r3: 'Pronounce every syllable. The AI does not understand context. "PHO-to" without "graph" sounds like a different word to it.',
      r4: 'Multiple-answer questions have negative marking. Wrong picks subtract points. Only click options you are confident about.',
      r5: 'Skills are scored together. A bad Read Aloud hurts both your Speaking AND your Reading score. Practice integrated items, not isolated skills.',
    },
    scores: {
      title: 'Score targets to plan around',
      s50: 'PTE 50 ≈ IELTS 6.0 — minimum for many Australian undergrad programs.',
      s58: 'PTE 58 ≈ IELTS 6.5 — most postgrad admissions.',
      s65: 'PTE 65 ≈ IELTS 7.0 — competitive scholarships, "proficient English" points for Australian PR.',
      s79: 'PTE 79 ≈ IELTS 8.0 — "superior English" — maximum points for Australian skilled migration. The realistic premium target.',
    },
    bd: {
      title: 'PTE in Bangladesh',
      intro:
        'Pearson operates an authorised PTE test centre in Dhaka. Slots run multiple days per week and book up 2–6 weeks ahead. Check the official Pearson PTE website for current centres, fees, and dates.',
      online:
        'PTE Academic Online — sit from home, same score, same acceptance. Requires a webcam, working mic, and a quiet room.',
      valid: 'Score validity — 2 years.',
      send: 'Score sending — unlimited free sends to institutions.',
    },
    plan: {
      title: 'The 60-day PTE plan',
      d1: 'Days 1–10: Baseline mock + learn all 20 item types + audio setup.',
      d2: 'Days 11–30: Item-by-item drills, especially Read Aloud, Describe Image, Re-tell Lecture, Write from Dictation.',
      d3: 'Days 31–50: Two full mocks per week, focused weak-item drilling.',
      d4: 'Days 51–60: Final templates, mock under exam conditions, exam day.',
      cta: 'Start the plan',
    },
  },
  bn: {
    badge: 'পরীক্ষা · PTE Academic',
    h1: 'PTE Academic — দ্রুত ফলাফল, AI গ্রেডিং।',
    desc: 'Pearson Test of English Academic হলো সেই পরীক্ষা যদি আপনি ৪৮ ঘণ্টায় ফলাফল চান এবং সম্পূর্ণ AI-গ্রেডেড পরীক্ষা পছন্দ করেন (খারাপ দিনে কোনো মানব পরীক্ষক স্কোর কমাতে পারবে না)। অস্ট্রেলিয়ান ও নিউজিল্যান্ড বিশ্ববিদ্যালয়, প্রায় সব যুক্তরাজ্যের প্রতিষ্ঠান এবং ক্রমবর্ধমানভাবে মার্কিন ও কানাডা গ্রহণ করে। বাংলাদেশ থেকে অস্ট্রেলিয়ার স্টুডেন্ট ভিসার সবচেয়ে দ্রুত পথ।',
    cta: 'বিনামূল্যে শুরু করুন',
    mockCta: 'একটি মক টেস্ট দিন',
    diff: {
      title: 'PTE কী করে আলাদা',
      t1: '১০০% কম্পিউটার + AI গ্রেডেড',
      t1b: 'কোনো মানব পরীক্ষক নেই। আপনার স্পিকিং স্পিচ-রিকগনিশন AI দ্বারা গ্রেড করা হয়। এটাই সবচেয়ে বড় কৌশলগত পার্থক্য — স্পষ্টভাবে, সামঞ্জস্যপূর্ণ ভলিউমে, দীর্ঘ বিরতি ছাড়া কথা বলতে হবে (AI নীরবতাকে কঠোরভাবে শাস্তি দেয়)।',
      t2: 'ইন্টিগ্রেটেড দক্ষতা',
      t2b: 'একটি টাস্ক একসাথে রিডিং + স্পিকিং (Read Aloud) বা লিসেনিং + রাইটিং (Summarise Spoken Text) পরীক্ষা করতে পারে। আলাদাভাবে নয়, দক্ষতার সমন্বয়ের জন্য অনুশীলন করুন।',
      t3: 'দ্রুত ফলাফল',
      t3b: '২ কর্মদিবসে স্কোর, কখনো ২৪ ঘণ্টায়। যদি আপনার ভিসার সময়সীমা কম থাকে, এটিই পরীক্ষা।',
      t4: 'স্কোর ১০–৯০ স্কেলড',
      t4b: 'মোটামুটি CEFR স্তরের সাথে মেলে। ৬৫+ = প্রতিযোগিতামূলক বিশ্ববিদ্যালয়। ৭৯+ = শীর্ষ বিশ্ববিদ্যালয় এবং অস্ট্রেলিয়ান PR-এর উচ্চতর ইংরেজি পয়েন্ট।',
    },
    parts: {
      title: 'PTE Academic-এর তিনটি অংশ',
      p1: 'পার্ট ১ · স্পিকিং + রাইটিং · ৫৪–৬৭ মিনিট',
      p1desc: 'দীর্ঘতম অংশ। মিশ্র আইটেম টাইপ:',
      p1items: [
        'Read Aloud — একটি ৬০-শব্দের অনুচ্ছেদ জোরে পড়ুন। উচ্চারণ, স্বচ্ছন্দতা এবং মৌখিক বিষয়বস্তু সবই স্কোর করা হয়।',
        'Repeat Sentence — একটি বাক্য শুনুন, হুবহু পুনরাবৃত্তি করুন। স্মৃতি + উচ্চারণ।',
        'Describe Image — একটি চার্ট বা ছবি বর্ণনা করতে ৪০ সেকেন্ড। এখানে পূর্ব-তৈরি টেমপ্লেট জেতে।',
        'Re-tell Lecture — ৬০-৯০ সেকেন্ডের একটি লেকচার শুনুন, নিজের ভাষায় ৪০ সেকেন্ডে সারসংক্ষেপ করুন।',
        'Answer Short Question — সাধারণ জ্ঞানের প্রশ্নের এক-শব্দ বা সংক্ষিপ্ত-বাক্যাংশে উত্তর।',
        'Summarise Written Text — ৩০০ শব্দ পড়ুন, একটি বাক্যে (৫-৭৫ শব্দ) সারসংক্ষেপ করুন।',
        'Essay — একটি নির্দিষ্ট বিষয়ে ২০ মিনিটে ২০০-৩০০ শব্দ।',
      ],
      p2: 'পার্ট ২ · রিডিং · ২৯–৩০ মিনিট',
      p2items: [
        'Reading & Writing: Fill in the Blanks — ড্রপ-ডাউন মেনু, ব্যাকরণ + কোলোকেশন জ্ঞান প্রয়োজন।',
        'Multiple Choice (একক উত্তর) — সাধারণ বোধ পরীক্ষা।',
        'Re-order Paragraphs — বাক্যগুলো যৌক্তিক ক্রমে সাজান। সংযোগকারী ডিভাইসই আপনার ইঙ্গিত।',
        'Reading: Fill in the Blanks — শব্দ ফাঁকে টেনে আনুন। শব্দভাণ্ডার + অর্থের সামঞ্জস্য।',
        'Multiple Choice (একাধিক উত্তর) — সাধারণত ৫-৭টির মধ্যে ২-৩টি সঠিক। ভুল উত্তর পয়েন্ট কাটে (নেগেটিভ মার্কিং), তাই এলোমেলো অনুমান করবেন না।',
      ],
      p3: 'পার্ট ৩ · লিসেনিং · ৩০–৪৩ মিনিট',
      p3items: [
        'Summarise Spoken Text — ৬০-৯০ সেকেন্ডের অডিও শুনুন, ১০ মিনিটে ৫০-৭০ শব্দের সারসংক্ষেপ লিখুন।',
        'Multiple Choice (একক ও একাধিক উত্তর) — একাডেমিক লেকচার এবং সংলাপ।',
        'Fill in the Blanks — শুনতে শুনতে বাদ পড়া শব্দ টাইপ করুন। ধীর টাইপিস্টদের জন্য কঠিনতম।',
        'Highlight Correct Summary — আপনি যা শুনলেন তার সারসংক্ষেপ করে এমন অপশনটি বেছে নিন।',
        'Select Missing Word — একটি অডিও ক্লিপের শেষ শব্দ অনুমান করুন।',
        'Highlight Incorrect Words — অডিওর সাথে পড়তে পড়তে যে শব্দগুলো আলাদা সেগুলো ক্লিক করুন।',
        'Write from Dictation — একটি বাক্য শুনুন, হুবহু টাইপ করুন। বানান-গুরুত্বপূর্ণ।',
      ],
    },
    ai: {
      title: 'প্রতিটি PTE পরীক্ষার্থীর আত্মস্থ করা উচিত AI গ্রেডিংয়ের নিয়ম',
      r1: 'AI দ্বিধার জন্য আংশিক ক্রেডিট দেয় না। ৩ সেকেন্ডের বিরতি একটি ভুল শব্দের চেয়ে খারাপ, বিশেষত Read Aloud এবং Repeat Sentence-এ।',
      r2: 'ভলিউম গুরুত্বপূর্ণ। মাইক্রোফোনের স্তর থ্রেশহোল্ডের নিচে নামলে AI সেই আইটেমে শূন্যের কাছাকাছি স্কোর দেয়। সবসময় মাইক মুখ থেকে ৪-৬ সেমি দূরে রাখুন।',
      r3: 'প্রতিটি সিলেবল উচ্চারণ করুন। AI প্রসঙ্গ বোঝে না। "PHO-to" ছাড়া "graph" একটি ভিন্ন শব্দের মতো শোনায়।',
      r4: 'একাধিক-উত্তরের প্রশ্নে নেগেটিভ মার্কিং আছে। ভুল পছন্দ পয়েন্ট বিয়োগ করে। শুধু যে অপশনগুলো নিশ্চিত সেগুলোতেই ক্লিক করুন।',
      r5: 'দক্ষতাগুলো একসাথে স্কোর করা হয়। একটি খারাপ Read Aloud আপনার স্পিকিং এবং রিডিং উভয় স্কোরকেই প্রভাবিত করে। আলাদা নয়, ইন্টিগ্রেটেড আইটেম অনুশীলন করুন।',
    },
    scores: {
      title: 'পরিকল্পনার জন্য স্কোর লক্ষ্যমাত্রা',
      s50: 'PTE 50 ≈ IELTS 6.0 — অনেক অস্ট্রেলিয়ান আন্ডারগ্র্যাড প্রোগ্রামের ন্যূনতম।',
      s58: 'PTE 58 ≈ IELTS 6.5 — বেশিরভাগ পোস্টগ্র্যাড ভর্তি।',
      s65: 'PTE 65 ≈ IELTS 7.0 — প্রতিযোগিতামূলক বৃত্তি, অস্ট্রেলিয়ান PR-এর "দক্ষ ইংরেজি" পয়েন্ট।',
      s79: 'PTE 79 ≈ IELTS 8.0 — "উচ্চতর ইংরেজি" — অস্ট্রেলিয়ান দক্ষ মাইগ্রেশনে সর্বোচ্চ পয়েন্ট। বাস্তবসম্মত প্রিমিয়াম লক্ষ্য।',
    },
    bd: {
      title: 'বাংলাদেশে PTE',
      intro:
        'Pearson ঢাকায় একটি অনুমোদিত PTE পরীক্ষাকেন্দ্র পরিচালনা করে। স্লট সপ্তাহে একাধিক দিন চলে এবং ২–৬ সপ্তাহ আগে পূর্ণ হয়ে যায়। বর্তমান কেন্দ্র, ফি ও তারিখের জন্য সরকারি Pearson PTE ওয়েবসাইট দেখুন।',
      online:
        'PTE Academic Online — বাড়ি থেকে দিন, একই স্কোর, একই গ্রহণযোগ্যতা। ওয়েবক্যাম, কার্যকর মাইক এবং একটি শান্ত ঘর প্রয়োজন।',
      valid: 'স্কোরের মেয়াদ — ২ বছর।',
      send: 'স্কোর পাঠানো — প্রতিষ্ঠানে অসীমিত বিনামূল্যে পাঠানো যায়।',
    },
    plan: {
      title: '৬০ দিনের PTE পরিকল্পনা',
      d1: 'দিন ১–১০: বেসলাইন মক + সব ২০টি আইটেম টাইপ শেখা + অডিও সেটআপ।',
      d2: 'দিন ১১–৩০: আইটেম-বাই-আইটেম ড্রিল, বিশেষত Read Aloud, Describe Image, Re-tell Lecture, Write from Dictation।',
      d3: 'দিন ৩১–৫০: প্রতি সপ্তাহে দুটি পূর্ণ মক, দুর্বল আইটেম-কেন্দ্রিক ড্রিল।',
      d4: 'দিন ৫১–৬০: চূড়ান্ত টেমপ্লেট, পরীক্ষার পরিবেশে মক, পরীক্ষার দিন।',
      cta: 'পরিকল্পনা শুরু করুন',
    },
  },
};

export default function PtePage() {
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

      <Section title={c.diff.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title={c.diff.t1}>{c.diff.t1b}</Tile>
          <Tile title={c.diff.t2}>{c.diff.t2b}</Tile>
          <Tile title={c.diff.t3}>{c.diff.t3b}</Tile>
          <Tile title={c.diff.t4}>{c.diff.t4b}</Tile>
        </div>
      </Section>

      <Section title={c.parts.title}>
        <div className="space-y-5">
          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.parts.p1}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.parts.p1desc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.parts.p1items.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold">{item.split(' — ')[0]}</span>
                  {item.includes(' — ') ? ` — ${item.split(' — ').slice(1).join(' — ')}` : ''}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.parts.p2}</h3>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.parts.p2items.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold">{item.split(' — ')[0]}</span>
                  {item.includes(' — ') ? ` — ${item.split(' — ').slice(1).join(' — ')}` : ''}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.parts.p3}</h3>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.parts.p3items.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold">{item.split(' — ')[0]}</span>
                  {item.includes(' — ') ? ` — ${item.split(' — ').slice(1).join(' — ')}` : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={c.ai.title}>
        <ol className="space-y-3 text-sm">
          {[c.ai.r1, c.ai.r2, c.ai.r3, c.ai.r4, c.ai.r5].map((rule, i) => (
            <li key={i} className="rounded-lg border bg-card p-4">{rule}</li>
          ))}
        </ol>
      </Section>

      <Section title={c.scores.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <ul className="space-y-2">
            <li><span className="font-semibold">PTE 50</span> ≈ IELTS 6.0 — {c.scores.s50.replace(/^PTE 50 ≈ IELTS 6\.0 — /, '')}</li>
            <li><span className="font-semibold">PTE 58</span> ≈ IELTS 6.5 — {c.scores.s58.replace(/^PTE 58 ≈ IELTS 6\.5 — /, '')}</li>
            <li><span className="font-semibold">PTE 65</span> ≈ IELTS 7.0 — {c.scores.s65.replace(/^PTE 65 ≈ IELTS 7\.0 — /, '')}</li>
            <li><span className="font-semibold">PTE 79</span> ≈ IELTS 8.0 — {c.scores.s79.replace(/^PTE 79 ≈ IELTS 8\.0 — /, '')}</li>
          </ul>
        </div>
      </Section>

      <Section title={c.bd.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>{c.bd.intro}</p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">PTE Academic Online</span> — {c.bd.online.replace(/^PTE Academic Online — /, '')}</li>
            <li><span className="font-semibold">{lang === 'bn' ? 'স্কোরের মেয়াদ' : 'Score validity'}</span> — {lang === 'bn' ? '২ বছর।' : '2 years.'}</li>
            <li><span className="font-semibold">{lang === 'bn' ? 'স্কোর পাঠানো' : 'Score sending'}</span> — {lang === 'bn' ? 'প্রতিষ্ঠানে অসীমিত বিনামূল্যে পাঠানো যায়।' : 'unlimited free sends to institutions.'}</li>
          </ul>
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
    </SiteShell>
  );
}
