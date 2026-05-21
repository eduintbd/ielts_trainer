'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SiteShell, Section } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';
import {
  PART1_TOPICS,
  PART2_TOPICS,
  PART3_TOPICS,
  type Part1Topic,
  type Part2Topic,
  type Part3Topic,
} from '@/lib/learn/speaking-topics';

const CONTENT = {
  en: {
    badge: 'Free Learning Hub / Speaking',
    h1: '86 IELTS Speaking topics — all three parts.',
    desc: 'Complete question sets for Part 1, cue cards for Part 2, and discussion questions for Part 3. Each topic includes band-specific strategy tips and vocabulary lists.',
    parts: [
      {
        label: 'Part 1 — Personal Questions',
        sublabel: '4–5 minute interview',
        desc: 'The examiner asks simple questions about familiar topics. Aim for extended answers (3–4 sentences) — never one word.',
      },
      {
        label: 'Part 2 — Long Turn',
        sublabel: '1 min prep + 2 min speech',
        desc: 'You receive a cue card and must speak for 2 minutes. Use the four printed points as your structure — they are there to help.',
      },
      {
        label: 'Part 3 — Discussion',
        sublabel: '4–5 minute abstract discussion',
        desc: 'The examiner asks more abstract questions linked to the Part 2 topic. Extended reasoning and hedging language are rewarded here.',
      },
    ],
    bandTipLabel: 'Band tip',
    vocabLabel: 'Vocabulary to use',
    questionsLabel: 'Questions',
    cueCardLabel: 'Cue card',
    followUpLabel: 'Follow-up question',
    pointsLabel: 'Cover these points:',
  },
  bn: {
    badge: 'বিনামূল্যে লার্নিং হাব / স্পিকিং',
    h1: '৮৬টি IELTS স্পিকিং টপিক — তিনটি অংশ।',
    desc: 'পার্ট ১ এর জন্য সম্পূর্ণ প্রশ্নসমূহ, পার্ট ২ এর জন্য কিউ কার্ড এবং পার্ট ৩ এর জন্য আলোচনা প্রশ্ন। প্রতিটি টপিকে ব্যান্ড-নির্দিষ্ট কৌশল টিপস এবং শব্দভাণ্ডার তালিকা রয়েছে।',
    parts: [
      {
        label: 'পার্ট ১ — ব্যক্তিগত প্রশ্ন',
        sublabel: '৪-৫ মিনিটের সাক্ষাৎকার',
        desc: 'পরীক্ষক পরিচিত বিষয়ে সহজ প্রশ্ন করেন। বিস্তারিত উত্তর দেওয়ার লক্ষ্য রাখুন (৩-৪ বাক্য) — কখনো একটি শব্দে নয়।',
      },
      {
        label: 'পার্ট ২ — লং টার্ন',
        sublabel: '১ মিনিট প্রস্তুতি + ২ মিনিট বক্তৃতা',
        desc: 'আপনি একটি কিউ কার্ড পাবেন এবং ২ মিনিট কথা বলতে হবে। চারটি মুদ্রিত পয়েন্ট আপনার কাঠামো হিসেবে ব্যবহার করুন — সেগুলো সাহায্যের জন্যই আছে।',
      },
      {
        label: 'পার্ট ৩ — আলোচনা',
        sublabel: '৪-৫ মিনিটের বিমূর্ত আলোচনা',
        desc: 'পরীক্ষক পার্ট ২ টপিকের সাথে সংযুক্ত আরও বিমূর্ত প্রশ্ন করেন। বর্ধিত যুক্তি এবং হেজিং ভাষা এখানে পুরস্কৃত হয়।',
      },
    ],
    bandTipLabel: 'ব্যান্ড টিপ',
    vocabLabel: 'ব্যবহার করার শব্দভাণ্ডার',
    questionsLabel: 'প্রশ্নসমূহ',
    cueCardLabel: 'কিউ কার্ড',
    followUpLabel: 'ফলো-আপ প্রশ্ন',
    pointsLabel: 'এই পয়েন্টগুলো কভার করুন:',
  },
};

function Part1Card({ topic, lang }: { topic: Part1Topic; lang: 'en' | 'bn' }) {
  const [open, setOpen] = useState(false);
  const c = CONTENT[lang];
  const questions = lang === 'en' ? topic.questions : topic.questionsBn;

  return (
    <div className="rounded-xl border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div>
          <p className="font-semibold">{topic.topic}</p>
          <p className="text-xs text-muted-foreground">{topic.topicBn} · {topic.category}</p>
        </div>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="border-t px-5 pb-5 pt-4 text-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.questionsLabel}</p>
          <ol className="list-decimal space-y-1.5 pl-5 text-muted-foreground">
            {questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
          <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs">
            <p className="font-semibold text-primary">{c.bandTipLabel}</p>
            <p className="mt-1 text-foreground">{lang === 'en' ? topic.bandTip : topic.bandTipBn}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            <p className="w-full text-xs font-semibold text-muted-foreground">{c.vocabLabel}:</p>
            {topic.vocabulary.map((v) => (
              <span key={v} className="rounded bg-muted px-2 py-0.5 text-xs">{v}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Part2Card({ topic, lang }: { topic: Part2Topic; lang: 'en' | 'bn' }) {
  const [open, setOpen] = useState(false);
  const c = CONTENT[lang];
  const points = lang === 'en' ? topic.cueCard.points : topic.cueCard.pointsBn;
  const describe = lang === 'en' ? topic.cueCard.describe : topic.cueCard.describeBn;
  const followUp = lang === 'en' ? topic.cueCard.followUp : topic.cueCard.followUpBn;

  return (
    <div className="rounded-xl border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div>
          <p className="font-semibold">{topic.topic}</p>
          <p className="text-xs text-muted-foreground">{topic.topicBn} · {topic.category}</p>
        </div>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="border-t px-5 pb-5 pt-4 text-sm">
          <div className="rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.cueCardLabel}</p>
            <p className="mt-2 font-medium">{describe}</p>
            <p className="mt-2 text-xs text-muted-foreground">{c.pointsLabel}</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-muted-foreground">
              {points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
            <div className="mt-3 border-t pt-3">
              <p className="text-xs font-semibold text-muted-foreground">{c.followUpLabel}</p>
              <p className="mt-1 text-xs italic">{followUp}</p>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs">
            <p className="font-semibold text-primary">{c.bandTipLabel}</p>
            <p className="mt-1 text-foreground">{lang === 'en' ? topic.bandTip : topic.bandTipBn}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            <p className="w-full text-xs font-semibold text-muted-foreground">{c.vocabLabel}:</p>
            {topic.vocabulary.map((v) => (
              <span key={v} className="rounded bg-muted px-2 py-0.5 text-xs">{v}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Part3Card({ topic, lang }: { topic: Part3Topic; lang: 'en' | 'bn' }) {
  const [open, setOpen] = useState(false);
  const c = CONTENT[lang];
  const questions = lang === 'en' ? topic.questions : topic.questionsBn;

  return (
    <div className="rounded-xl border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div>
          <p className="font-semibold">{topic.topic}</p>
          <p className="text-xs text-muted-foreground">{topic.topicBn} · {topic.category}</p>
        </div>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="border-t px-5 pb-5 pt-4 text-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.questionsLabel}</p>
          <ol className="list-decimal space-y-1.5 pl-5 text-muted-foreground">
            {questions.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
          <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs">
            <p className="font-semibold text-primary">{c.bandTipLabel}</p>
            <p className="mt-1 text-foreground">{lang === 'en' ? topic.bandTip : topic.bandTipBn}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SpeakingTopicsPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const [activePart, setActivePart] = useState<1 | 2 | 3>(1);

  const partLabels = c.parts as { label: string; sublabel: string; desc: string }[];
  const partData = [
    { part: 1 as const, topics: PART1_TOPICS, label: partLabels[0] },
    { part: 2 as const, topics: PART2_TOPICS, label: partLabels[1] },
    { part: 3 as const, topics: PART3_TOPICS, label: partLabels[2] },
  ] as const;

  const current = partData.find(p => p.part === activePart) ?? partData[0];

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.desc}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        {/* Part tabs */}
        <div className="mb-6 flex gap-2">
          {partData.map(({ part, label, topics }) => (
            <button
              key={part}
              onClick={() => setActivePart(part)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activePart === part
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              {label?.label}
              <span className="ml-1.5 text-xs opacity-70">({topics.length})</span>
            </button>
          ))}
        </div>

        {/* Part description */}
        <div className="mb-6 rounded-lg border bg-muted/40 px-5 py-4">
          <p className="text-sm font-semibold">{current.label?.sublabel}</p>
          <p className="mt-1 text-sm text-muted-foreground">{current.label?.desc}</p>
        </div>

        {/* Topic cards */}
        <div className="space-y-3">
          {activePart === 1 &&
            PART1_TOPICS.map((topic) => (
              <Part1Card key={topic.id} topic={topic} lang={lang} />
            ))}
          {activePart === 2 &&
            PART2_TOPICS.map((topic) => (
              <Part2Card key={topic.id} topic={topic} lang={lang} />
            ))}
          {activePart === 3 &&
            PART3_TOPICS.map((topic) => (
              <Part3Card key={topic.id} topic={topic} lang={lang} />
            ))}
        </div>
      </section>
    </SiteShell>
  );
}
