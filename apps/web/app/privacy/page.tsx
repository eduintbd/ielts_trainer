'use client';

import { SiteShell, Section } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    title: 'Privacy',
    subtitle:
      'Plain English first, lawyer English second. If anything below is unclear, email us and we\'ll fix the wording.',
    s1h: 'What we collect',
    s1b: 'Your name, email, and (if you sign in with Google or Facebook) a profile photo. Your test answers, voice recordings, vocabulary progress, and forum posts. We do not collect your phone, NID, address, or any payment data we don\'t need.',
    s2h: 'Why we collect it',
    s2b: 'To grade your tests, track progress, run the leaderboard, send you reminders, and improve the AI tutor. Voice recordings are used to give you pronunciation feedback and to improve the speech model — never shared with advertisers.',
    s3h: 'Who sees it',
    s3b: 'You, the IELTS Trainer engineering team (only when investigating support issues), and our AI providers (OpenAI, Anthropic, ElevenLabs) strictly under their data-processing agreements. Anything you post in the public forum is, well, public.',
    s4h: 'How to delete your data',
    s4b: 'Profile → Delete account. Everything except aggregate analytics is removed within 30 days. You can also email',
    s5h: 'Cookies',
    s5b: 'One auth cookie so you stay signed in. No third-party advertising cookies.',
  },
  bn: {
    title: 'গোপনীয়তা নীতি',
    subtitle:
      'আগে সহজ বাংলা, তারপর আইনি ভাষা। নিচের কিছু অস্পষ্ট হলে ইমেইল করুন — আমরা ভাষা ঠিক করে দেব।',
    s1h: 'আমরা কী সংগ্রহ করি',
    s1b: 'আপনার নাম, ইমেইল এবং (Google বা Facebook দিয়ে সাইন ইন করলে) একটি প্রোফাইল ছবি। আপনার টেস্টের উত্তর, ভয়েস রেকর্ডিং, শব্দভাণ্ডারের অগ্রগতি এবং ফোরাম পোস্ট। আমরা আপনার ফোন নম্বর, NID, ঠিকানা বা অপ্রয়োজনীয় কোনো পেমেন্ট ডেটা সংগ্রহ করি না।',
    s2h: 'কেন সংগ্রহ করি',
    s2b: 'আপনার টেস্ট গ্রেড করতে, অগ্রগতি ট্র্যাক করতে, লিডারবোর্ড চালাতে, রিমাইন্ডার পাঠাতে এবং AI টিউটর উন্নত করতে। ভয়েস রেকর্ডিং উচ্চারণ ফিডব্যাক দিতে এবং স্পিচ মডেল উন্নত করতে ব্যবহৃত হয় — কখনো বিজ্ঞাপনদাতাদের সাথে শেয়ার করা হয় না।',
    s3h: 'কে দেখতে পায়',
    s3b: 'আপনি, IELTS Trainer ইঞ্জিনিয়ারিং টিম (শুধুমাত্র সাপোর্ট সমস্যা তদন্তের সময়) এবং আমাদের AI প্রদানকারীরা (OpenAI, Anthropic, ElevenLabs) তাদের ডেটা-প্রক্রিয়াকরণ চুক্তির অধীনে। পাবলিক ফোরামে আপনি যা পোস্ট করেন তা, স্বাভাবিকভাবেই, পাবলিক।',
    s4h: 'ডেটা মুছে ফেলার উপায়',
    s4b: 'প্রোফাইল → অ্যাকাউন্ট মুছুন। সমষ্টিগত বিশ্লেষণ ছাড়া সব কিছু ৩০ দিনের মধ্যে সরানো হবে। ইমেইলও করতে পারেন',
    s5h: 'কুকিজ',
    s5b: 'সাইন ইন থাকার জন্য একটি অথ কুকি। কোনো তৃতীয়-পক্ষ বিজ্ঞাপন কুকি নেই।',
  },
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <SiteShell>
      <Section title={c.title} subtitle={c.subtitle}>
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h3 className="font-semibold">{c.s1h}</h3>
            <p className="mt-1 text-muted-foreground">{c.s1b}</p>
          </div>
          <div>
            <h3 className="font-semibold">{c.s2h}</h3>
            <p className="mt-1 text-muted-foreground">{c.s2b}</p>
          </div>
          <div>
            <h3 className="font-semibold">{c.s3h}</h3>
            <p className="mt-1 text-muted-foreground">{c.s3b}</p>
          </div>
          <div>
            <h3 className="font-semibold">{c.s4h}</h3>
            <p className="mt-1 text-muted-foreground">
              {c.s4b}{' '}
              <span className="font-medium text-foreground">privacy@ielts-trainer.bd</span>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">{c.s5h}</h3>
            <p className="mt-1 text-muted-foreground">{c.s5b}</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
