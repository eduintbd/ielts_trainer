'use client';

import Link from 'next/link';
import { ArrowRight, Headphones, BookOpen, PenLine, Mic } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    badge: 'Exam · TOEFL iBT',
    h1: 'TOEFL iBT — the American route.',
    desc: 'TOEFL iBT is the English test most US universities prefer (though most also accept IELTS). It is fully computer-delivered, runs about two hours, and tests "academic English" — listening to lectures, reading textbook passages, summarising what you just read into what you just heard. If you are applying to the US, this guide is for you.',
    cta: 'Start free',
    mockCta: 'Take a mock test',
    diff: {
      title: "What's different about TOEFL vs IELTS?",
      t1: '100% American academic English',
      t1b: 'All audio is North American. All readings are from textbook-style academic sources. No British / Australian accents. No general-conversation register.',
      t2: 'Integrated tasks',
      t2b: "TOEFL's signature: you read a passage, then listen to a lecture about the same topic, then write a summary comparing the two. IELTS has nothing like it. Bangladeshi students often underestimate this section.",
      t3: 'Computer-delivered only',
      t3b: 'You type all your essays. You speak into a microphone for the Speaking section — no human examiner. Useful if you find face-to-face interviews stressful.',
      t4: 'Scoring 0–120',
      t4b: 'Each of the four sections scores 0–30; the total is the sum. Most US grad schools want 90+ overall, top schools 100+, with no single section below 22.',
    },
    sections: {
      title: 'The four sections, in TOEFL order',
      reading: 'Reading · ~35 min · 2 passages · 20 questions',
      readingDesc:
        'Academic textbook passages, ~700 words each. Questions cover vocabulary, inference, sentence-rewording, and a final "summary" question worth 2 points.',
      readingTips: [
        'Sentence-rewording questions: look for paraphrase + retained meaning. Trap answers either drop a key idea or add a wrong one.',
        'The final summary question — get 3 main ideas (not details) into 3 of the 6 options.',
        'You can revisit questions within a section. Use that — flag, move on, come back.',
      ],
      listening: 'Listening · ~36 min · 5 audio segments · 28 questions',
      listeningDesc:
        'Three lectures (3–5 min each) and two campus conversations (advisor meetings, librarian queries). Take notes. Notes are allowed and essential.',
      listeningTips: [
        'Set up a left-column / right-column notes layout — main ideas left, examples right.',
        'Don\'t try to transcribe. Capture structure: thesis, two examples, conclusion.',
        '"Function" questions (why did the professor say X?) — focus on attitude and emphasis, not literal meaning.',
        'Bangladeshi students often miss the campus-conversation segments because they assume "informal = easy." It isn\'t — register is the test.',
      ],
      speaking: 'Speaking · ~16 min · 4 tasks · into a microphone',
      speakingDesc:
        'Task 1 — independent opinion (45 sec answer). Tasks 2–4 — integrated: read a passage, hear audio, then speak. The hardest section for most Bangla speakers.',
      speakingTips: [
        '15-second prep window is short — pre-build a template: "I prefer X because of A and B. Firstly... Secondly..."',
        'Speak loudly and clearly into the mic — TOEFL graders rate clarity heavily.',
        'Integrated tasks need 60-90 seconds of speech with no pauses. Practice timing.',
        'It is better to give a complete, slightly slower answer than to rush and trail off.',
      ],
      writing: 'Writing · ~29 min · 2 tasks · typed',
      writingDesc:
        'Task 1 (integrated, 20 min, ~150-225 words): read a passage, listen to a lecture that contradicts it, summarise both sides. Task 2 (academic discussion, 10 min, >100 words): respond to a professor\'s question in a discussion board format.',
      writingTips: [
        'Task 1 has a fixed structure — three reading points, three matching lecture rebuttals. Memorise the template.',
        'Task 2 wants you to engage with two prior student posts shown to you, add a new angle, and support it.',
        'Type fast. Most Bangladeshi students undertype Task 2. Get to 130+ words.',
      ],
    },
    scores: {
      title: 'Score targets to aim for',
      s80: '80+ — entry-level US universities, community college transfer.',
      s90: '90+ — most public US universities, many private mid-tier.',
      s100: '100+ — top 50 US universities, most graduate programs.',
      s105: '105+ with 24+ in Speaking — Teaching Assistantship eligibility for most PhDs.',
      s110: '110+ — Ivy League and equivalent. Realistic with focused 4-6 month prep from a 90.',
    },
    bd: {
      title: 'TOEFL in Bangladesh',
      intro:
        'TOEFL iBT is delivered by ETS at authorised centres. As of recent cycles, Dhaka has multiple ETS-authorised venues; Chattogram is intermittent.',
      home: 'TOEFL iBT Home Edition — sit from home if you have a quiet room, a reliable connection, and a webcam-equipped computer. Same score, same acceptance.',
      score: 'Score reporting — official scores in 4-8 days. You can send to 4 institutions free, more for a fee.',
      valid: 'Validity — 2 years.',
      note: 'Confirm centre availability, fees, and dates on the official ETS TOEFL website. Slots fill 6–8 weeks ahead in peak admissions months (Oct-Dec, Feb-Apr).',
    },
    plan: {
      title: 'The 90-day TOEFL plan',
      d1: 'Days 1–14: Baseline mock + American-accent immersion (NPR, The Daily, TED-Ed).',
      d2: 'Days 15–45: Note-taking system + integrated task templates + grammar repair.',
      d3: 'Days 46–75: Two full mock tests per week, with section-specific drills for weakest area.',
      d4: 'Days 76–90: Speaking template polish, typing speed, final mock under exam conditions.',
      cta: 'Start the plan',
    },
    pitfalls: {
      title: 'Common TOEFL pitfalls for Bangladeshi candidates',
      p1: 'Speaking pace too slow',
      p1b: '45-second / 60-second answers must be full. Long pauses hurt the rating more than minor grammar errors. Practice with a timer until pacing is automatic.',
      p2: 'Typing too slow on Writing',
      p2b: 'If you type at < 25 wpm in English, you will fall short. Spend two weeks on typing.com or keybr.com before final prep.',
      p3: 'Not understanding "campus conversation" register',
      p3b: 'American advisor / student talk is fast, idiomatic, and assumes shared culture. The fix: watch US college vlogs. Yes, really.',
    },
  },
  bn: {
    badge: 'পরীক্ষা · TOEFL iBT',
    h1: 'TOEFL iBT — আমেরিকার পথ।',
    desc: 'TOEFL iBT হলো ইংরেজি পরীক্ষা যা বেশিরভাগ মার্কিন বিশ্ববিদ্যালয় পছন্দ করে (যদিও বেশিরভাগ IELTS-ও গ্রহণ করে)। এটি সম্পূর্ণ কম্পিউটারে পরীক্ষা, প্রায় দুই ঘণ্টা চলে এবং "একাডেমিক ইংরেজি" পরীক্ষা করে — লেকচার শোনা, পাঠ্যপুস্তকের অনুচ্ছেদ পড়া, যা শুনলেন তার সাথে যা পড়লেন তা মিলিয়ে সংক্ষেপ লেখা। আপনি যদি মার্কিন যুক্তরাষ্ট্রে আবেদন করছেন, এই গাইডটি আপনার জন্য।',
    cta: 'বিনামূল্যে শুরু করুন',
    mockCta: 'একটি মক টেস্ট দিন',
    diff: {
      title: 'TOEFL বনাম IELTS-এর পার্থক্য কী?',
      t1: '১০০% আমেরিকান একাডেমিক ইংরেজি',
      t1b: 'সমস্ত অডিও উত্তর আমেরিকান। সমস্ত পঠন পাঠ্যপুস্তক-শৈলীর একাডেমিক উৎস থেকে। কোনো ব্রিটিশ / অস্ট্রেলিয়ান উচ্চারণ বা সাধারণ কথোপকথনের রেজিস্টার নেই।',
      t2: 'ইন্টিগ্রেটেড টাস্ক',
      t2b: "TOEFL-এর স্বাতন্ত্র্য: একটি অনুচ্ছেদ পড়ুন, একই বিষয়ে লেকচার শুনুন, তারপর দুটি তুলনা করে সংক্ষেপ লিখুন। IELTS-এ এরকম কিছু নেই। বাংলাদেশি শিক্ষার্থীরা প্রায়ই এই অংশটি অবমূল্যায়ন করে।",
      t3: 'শুধুমাত্র কম্পিউটারে',
      t3b: 'সব রচনা টাইপ করতে হবে। স্পিকিং অংশে মাইক্রোফোনে কথা বলতে হবে — কোনো মানব পরীক্ষক নেই। সামনাসামনি সাক্ষাৎকার চাপের মনে হলে এটি সুবিধাজনক।',
      t4: 'স্কোর ০–১২০',
      t4b: 'চারটি অংশের প্রতিটি ০–৩০ স্কোর; মোট হলো যোগফল। বেশিরভাগ মার্কিন গ্র্যাড স্কুল সামগ্রিক ৯০+, শীর্ষ স্কুল ১০০+ চায়, কোনো একটি অংশে ২২-এর নিচে না।',
    },
    sections: {
      title: 'TOEFL-এর চারটি অংশ, পর্যায়ক্রমে',
      reading: 'রিডিং · ~৩৫ মিনিট · ২টি অনুচ্ছেদ · ২০টি প্রশ্ন',
      readingDesc:
        'একাডেমিক পাঠ্যপুস্তকের অনুচ্ছেদ, প্রায় ৭০০ শব্দ প্রতিটি। শব্দভাণ্ডার, অনুমান, বাক্য পুনর্বিন্যাস এবং ২ পয়েন্টের "সারসংক্ষেপ" প্রশ্নের উপর দক্ষতা যাচাই।',
      readingTips: [
        'বাক্য পুনর্বিন্যাস প্রশ্ন: প্যারাফ্রেজ + মূল অর্থ ধরে রাখা খুঁজুন। ফাঁদ উত্তর হয় একটি মূল ধারণা বাদ দেয় অথবা ভুল ধারণা যোগ করে।',
        'চূড়ান্ত সারসংক্ষেপ প্রশ্ন — ৬টি অপশনের মধ্যে ৩টি মূল ধারণা (বিস্তারিত নয়) বেছে নিন।',
        'একটি অংশের মধ্যে প্রশ্নে ফিরে যেতে পারবেন। এটি ব্যবহার করুন — ফ্ল্যাগ করুন, এগিয়ে যান, ফিরে আসুন।',
      ],
      listening: 'লিসেনিং · ~৩৬ মিনিট · ৫টি অডিও সেগমেন্ট · ২৮টি প্রশ্ন',
      listeningDesc:
        'তিনটি লেকচার (৩–৫ মিনিট প্রতিটি) এবং দুটি ক্যাম্পাস কথোপকথন (উপদেষ্টা মিটিং, লাইব্রেরিয়ান জিজ্ঞাসা)। নোট নিন। নোট নেওয়া অনুমোদিত এবং অপরিহার্য।',
      listeningTips: [
        'বাম-কলাম / ডান-কলাম নোট লেআউট সেট আপ করুন — মূল ধারণা বামে, উদাহরণ ডানে।',
        'লিখে নেওয়ার চেষ্টা করবেন না। কাঠামো ধরুন: থিসিস, দুটি উদাহরণ, উপসংহার।',
        '"ফাংশন" প্রশ্ন (অধ্যাপক কেন X বললেন?) — মনোভাব ও জোরের উপর মনোযোগ দিন, আক্ষরিক অর্থে নয়।',
        'বাংলাদেশি শিক্ষার্থীরা প্রায়ই ক্যাম্পাস-কথোপকথন সেগমেন্ট মিস করে কারণ তারা ধরে নেয় "অনানুষ্ঠানিক = সহজ।" এটা নয় — রেজিস্টারই পরীক্ষা।',
      ],
      speaking: 'স্পিকিং · ~১৬ মিনিট · ৪টি টাস্ক · মাইক্রোফোনে',
      speakingDesc:
        'টাস্ক ১ — স্বাধীন মতামত (৪৫ সেকেন্ড উত্তর)। টাস্ক ২–৪ — ইন্টিগ্রেটেড: একটি অনুচ্ছেদ পড়ুন, অডিও শুনুন, তারপর কথা বলুন। বেশিরভাগ বাংলাভাষীর জন্য কঠিনতম অংশ।',
      speakingTips: [
        '১৫ সেকেন্ডের প্রস্তুতির সময় কম — একটি টেমপ্লেট তৈরি করুন: "আমি X পছন্দ করি কারণ A এবং B. প্রথমত... দ্বিতীয়ত..."',
        'মাইক্রোফোনে জোরে ও স্পষ্টভাবে কথা বলুন — TOEFL গ্রেডাররা স্পষ্টতাকে বেশি মূল্য দেন।',
        'ইন্টিগ্রেটেড টাস্কে বিরতি ছাড়া ৬০-৯০ সেকেন্ড বক্তব্য দরকার। সময় অনুশীলন করুন।',
        'সম্পূর্ণ, সামান্য ধীর উত্তর দেওয়া তাড়াহুড়ো করে থেমে যাওয়ার চেয়ে ভালো।',
      ],
      writing: 'রাইটিং · ~২৯ মিনিট · ২টি টাস্ক · টাইপ করা',
      writingDesc:
        'টাস্ক ১ (ইন্টিগ্রেটেড, ২০ মিনিট, ~১৫০-২২৫ শব্দ): একটি অনুচ্ছেদ পড়ুন, এর বিরোধিতাকারী একটি লেকচার শুনুন, উভয় দিক সংক্ষেপ করুন। টাস্ক ২ (একাডেমিক আলোচনা, ১০ মিনিট, >১০০ শব্দ): ডিসকাশন বোর্ড ফরম্যাটে অধ্যাপকের প্রশ্নের উত্তর দিন।',
      writingTips: [
        'টাস্ক ১-এর একটি নির্দিষ্ট কাঠামো আছে — তিনটি পঠন পয়েন্ট, তিনটি মিলে যাওয়া লেকচার খণ্ডন। টেমপ্লেট মুখস্থ করুন।',
        'টাস্ক ২ চায় আপনি দুটি পূর্ববর্তী শিক্ষার্থীর পোস্টের সাথে যুক্ত হন, একটি নতুন কোণ যোগ করুন এবং সমর্থন করুন।',
        'দ্রুত টাইপ করুন। বেশিরভাগ বাংলাদেশি শিক্ষার্থী টাস্ক ২-এ কম লেখে। ১৩০+ শব্দে পৌঁছান।',
      ],
    },
    scores: {
      title: 'লক্ষ্য করার মতো স্কোর',
      s80: '৮০+ — প্রবেশ-স্তরের মার্কিন বিশ্ববিদ্যালয়, কমিউনিটি কলেজ ট্রান্সফার।',
      s90: '৯০+ — বেশিরভাগ মার্কিন পাবলিক বিশ্ববিদ্যালয়, অনেক বেসরকারি মিড-টায়ার।',
      s100: '১০০+ — শীর্ষ ৫০ মার্কিন বিশ্ববিদ্যালয়, বেশিরভাগ গ্র্যাজুয়েট প্রোগ্রাম।',
      s105: '১০৫+ এবং স্পিকিংয়ে ২৪+ — বেশিরভাগ PhD-র Teaching Assistantship যোগ্যতা।',
      s110: '১১০+ — Ivy League এবং সমতুল্য। ৯০ থেকে ৪-৬ মাসের মনোযোগী প্রস্তুতিতে বাস্তবসম্মত।',
    },
    bd: {
      title: 'বাংলাদেশে TOEFL',
      intro:
        'TOEFL iBT ETS কর্তৃক অনুমোদিত কেন্দ্রে পরিচালিত হয়। সাম্প্রতিক চক্র অনুযায়ী, ঢাকায় একাধিক ETS-অনুমোদিত কেন্দ্র রয়েছে; চট্টগ্রামে মাঝে মাঝে।',
      home: 'TOEFL iBT Home Edition — শান্ত ঘর, নির্ভরযোগ্য সংযোগ এবং ওয়েবক্যাম-সজ্জিত কম্পিউটার থাকলে বাড়ি থেকে দিন। একই স্কোর, একই গ্রহণযোগ্যতা।',
      score: 'স্কোর রিপোর্টিং — ৪-৮ দিনে অফিসিয়াল স্কোর। ৪টি প্রতিষ্ঠানে বিনামূল্যে পাঠাতে পারবেন, আরও পাঠাতে ফি লাগবে।',
      valid: 'মেয়াদ — ২ বছর।',
      note: 'সরকারি ETS TOEFL ওয়েবসাইটে কেন্দ্রের প্রাপ্যতা, ফি ও তারিখ নিশ্চিত করুন। পিক ভর্তির মাসে (অক্টোবর-ডিসেম্বর, ফেব্রুয়ারি-এপ্রিল) ৬–৮ সপ্তাহ আগে স্লট পূর্ণ হয়ে যায়।',
    },
    plan: {
      title: '৯০ দিনের TOEFL পরিকল্পনা',
      d1: 'দিন ১–১৪: বেসলাইন মক + আমেরিকান-উচ্চারণ ইমার্শন (NPR, The Daily, TED-Ed)।',
      d2: 'দিন ১৫–৪৫: নোট-টেকিং সিস্টেম + ইন্টিগ্রেটেড টাস্ক টেমপ্লেট + ব্যাকরণ মেরামত।',
      d3: 'দিন ৪৬–৭৫: প্রতি সপ্তাহে দুটি পূর্ণ মক টেস্ট, দুর্বলতম অংশের জন্য নির্দিষ্ট ড্রিল।',
      d4: 'দিন ৭৬–৯০: স্পিকিং টেমপ্লেট পালিশ, টাইপিং গতি, পরীক্ষার পরিবেশে চূড়ান্ত মক।',
      cta: 'পরিকল্পনা শুরু করুন',
    },
    pitfalls: {
      title: 'বাংলাদেশি প্রার্থীদের সাধারণ TOEFL ভুল',
      p1: 'স্পিকিং গতি খুব ধীর',
      p1b: '৪৫-সেকেন্ড / ৬০-সেকেন্ডের উত্তর পূর্ণ হতে হবে। দীর্ঘ বিরতি ছোটখাট ব্যাকরণ ভুলের চেয়ে বেশি রেটিং কমায়। যতক্ষণ না গতি স্বয়ংক্রিয় হয় টাইমার দিয়ে অনুশীলন করুন।',
      p2: 'রাইটিংয়ে টাইপ খুব ধীর',
      p2b: 'যদি ইংরেজিতে < ২৫ wpm টাইপ করেন, পিছিয়ে পড়বেন। চূড়ান্ত প্রস্তুতির আগে typing.com বা keybr.com-এ দুই সপ্তাহ সময় দিন।',
      p3: '"ক্যাম্পাস কথোপকথন" রেজিস্টার না বোঝা',
      p3b: 'আমেরিকান উপদেষ্টা / শিক্ষার্থীর কথা দ্রুত, বাগধারাময় এবং ভাগ করা সংস্কৃতি ধরে নেয়। সমাধান: মার্কিন কলেজ ভ্লগ দেখুন। হ্যাঁ, সত্যিই।',
    },
  },
};

export default function ToeflPage() {
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

      <Section title={c.sections.title}>
        <div className="space-y-5">
          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.sections.reading}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.sections.readingDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.sections.readingTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.sections.listening}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.sections.listeningDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.sections.listeningTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.sections.speaking}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.sections.speakingDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.sections.speakingTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <PenLine className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{c.sections.writing}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.sections.writingDesc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {c.sections.writingTips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={c.scores.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <ul className="space-y-2">
            <li><span className="font-semibold">80+</span> — {c.scores.s80.replace(/^[\d\+]+ — /, '')}</li>
            <li><span className="font-semibold">90+</span> — {c.scores.s90.replace(/^[\d\+]+ — /, '')}</li>
            <li><span className="font-semibold">100+</span> — {c.scores.s100.replace(/^[\d\+]+ — /, '')}</li>
            <li><span className="font-semibold">105+</span> — {c.scores.s105.replace(/^[\d\+].* — /, '')}</li>
            <li><span className="font-semibold">110+</span> — {c.scores.s110.replace(/^[\d\+]+ — /, '')}</li>
          </ul>
        </div>
      </Section>

      <Section title={c.bd.title}>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>{c.bd.intro}</p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">{lang === 'bn' ? 'TOEFL iBT Home Edition' : 'TOEFL iBT Home Edition'}</span> — {c.bd.home.replace(/^TOEFL iBT Home Edition — /, '')}</li>
            <li><span className="font-semibold">{lang === 'bn' ? 'স্কোর রিপোর্টিং' : 'Score reporting'}</span> — {c.bd.score.replace(/^(Score reporting|স্কোর রিপোর্টিং) — /, '')}</li>
            <li><span className="font-semibold">{lang === 'bn' ? 'মেয়াদ' : 'Validity'}</span> — {lang === 'bn' ? '২ বছর।' : '2 years.'}</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{c.bd.note}</p>
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

      <Section title={c.pitfalls.title}>
        <div className="space-y-3 text-sm">
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.pitfalls.p1}</p>
            <p className="mt-1 text-muted-foreground">{c.pitfalls.p1b}</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.pitfalls.p2}</p>
            <p className="mt-1 text-muted-foreground">{c.pitfalls.p2b}</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">{c.pitfalls.p3}</p>
            <p className="mt-1 text-muted-foreground">{c.pitfalls.p3b}</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
