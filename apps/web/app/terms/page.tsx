'use client';

import { SiteShell, Section } from '@/components/site-shell';
import { useLanguage } from '@/components/providers/language-provider';

const CONTENT = {
  en: {
    title: 'Terms of use',
    subtitle:
      'By using IELTS Trainer you agree to a small set of rules. Most of them are common sense — they exist to keep the community useful for everyone.',
    s1h: '1. Account',
    s1b: 'One account per person. You are responsible for keeping your password safe. If someone else uses your account, the activity counts as yours.',
    s2h: '2. Acceptable use',
    s2b: "No cheating, no scraping our content, no abusing fellow students in the forum, no uploading copyrighted IELTS / TOEFL / PTE papers you don't own the rights to. We will warn once, then suspend.",
    s3h: '3. AI feedback',
    s3b: 'Our AI tutor and scoring are decision-support, not the final say. British Council, ETS, and Pearson decide your actual exam score. We will not refund you if your real-exam band is lower than your practice band.',
    s4h: '4. Paid plans',
    s4b: 'Cancel any time. Unused paid days are not refunded by default — email us if you have a genuine reason and we\'ll do the right thing.',
    s5h: '5. Changes',
    s5b: "We may update these terms. We'll email you if anything material changes.",
  },
  bn: {
    title: 'ব্যবহারের শর্তাবলি',
    subtitle:
      'IELTS Trainer ব্যবহার করে আপনি কিছু নিয়মে সম্মত হচ্ছেন। বেশিরভাগই সাধারণ জ্ঞান — এগুলো সবার জন্য কমিউনিটি উপযোগী রাখতে আছে।',
    s1h: '১. অ্যাকাউন্ট',
    s1b: 'প্রতি ব্যক্তির জন্য একটি অ্যাকাউন্ট। আপনার পাসওয়ার্ড নিরাপদ রাখার দায়িত্ব আপনার। অন্য কেউ আপনার অ্যাকাউন্ট ব্যবহার করলে সেই কার্যকলাপ আপনার বলে গণ্য হবে।',
    s2h: '২. গ্রহণযোগ্য ব্যবহার',
    s2b: 'প্রতারণা করা, আমাদের কন্টেন্ট স্ক্র্যাপ করা, ফোরামে সহ-শিক্ষার্থীদের গালি দেওয়া বা আপনার অধিকার নেই এমন কপিরাইটযুক্ত IELTS / TOEFL / PTE পেপার আপলোড করা নিষিদ্ধ। আমরা একবার সতর্ক করব, তারপর সাসপেন্ড করব।',
    s3h: '৩. AI ফিডব্যাক',
    s3b: 'আমাদের AI টিউটর ও স্কোরিং সিদ্ধান্ত-সহায়ক, চূড়ান্ত রায় নয়। ব্রিটিশ কাউন্সিল, ETS এবং Pearson আপনার আসল পরীক্ষার স্কোর নির্ধারণ করে। প্র্যাকটিস ব্যান্ডের চেয়ে আসল পরীক্ষার ব্যান্ড কম হলে আমরা অর্থ ফেরত দেব না।',
    s4h: '৪. পেইড প্ল্যান',
    s4b: 'যেকোনো সময় বাতিল করুন। অব্যবহৃত পেইড দিনগুলো ডিফল্টভাবে ফেরত দেওয়া হয় না — যদি সত্যিকারের কারণ থাকে ইমেইল করুন, আমরা সঠিক কাজটি করব।',
    s5h: '৫. পরিবর্তন',
    s5b: 'আমরা এই শর্তাবলি আপডেট করতে পারি। কিছু গুরুত্বপূর্ণ পরিবর্তন হলে ইমেইলে জানাব।',
  },
};

export default function TermsPage() {
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
            <p className="mt-1 text-muted-foreground">{c.s4b}</p>
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
