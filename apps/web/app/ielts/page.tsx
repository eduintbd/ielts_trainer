import Link from 'next/link';
import { ArrowRight, Headphones, BookOpen, PenLine, Mic } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'IELTS Preparation for Bangladeshi Students · IELTS Trainer',
  description:
    'A complete IELTS guide: Academic vs General, all four modules, Bangladesh test centres, fees, and the realistic 90-day study plan.',
};

export default function IeltsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam · IELTS</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          IELTS, with Bangla-aware coaching.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          IELTS — International English Language Testing System — is the most accepted English test for Bangladeshi
          students applying abroad. UK, Australia, Canada, New Zealand, much of Europe, and an increasing number of US
          universities all take IELTS. This is the complete guide, from band targets to test centres in Dhaka and
          Chattogram.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/sign-up">
              Start free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tests">Take a mock test</Link>
          </Button>
        </div>
      </section>

      <Section title="Academic vs General Training — which one are you sitting?">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="IELTS Academic">
            For university admission (undergrad and graduate) and professional registration (medicine, nursing,
            engineering). Reading and Writing modules use academic texts and tasks. <span className="font-semibold">If
            you are applying to a university, this is you.</span>
          </Tile>
          <Tile title="IELTS General Training">
            For work visas, permanent residency (Canada, Australia, UK skilled migration), and secondary education.
            Reading and Writing are more practical — workplace, emails, social contexts. Listening and Speaking are
            identical to Academic.
          </Tile>
        </div>
      </Section>

      <Section title="The four modules — what's tested, how long, how to win">
        <div className="space-y-5">
          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Listening · 30 min + 10 min transfer · 40 questions</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Four recordings. Sections 1–2 are everyday situations; sections 3–4 are academic. Played once. Multiple
              accents — British heavily featured but Australian and Indian appear in Sections 2 and 4.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Underline keywords in the question paper before each recording starts.</li>
              <li>Predict the type of answer (number, name, noun, verb) — limits your guessing space.</li>
              <li>Pay attention to spelling. "Wednesday" misspelled = wrong.</li>
              <li>Transfer time is for transferring, not for guessing — answer in real time.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Reading · 60 min · 40 questions</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Three passages (Academic) or three sections (General). 60 minutes flat — no extra transfer time. Most
              Bangladeshi candidates run out of time on passage 3.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Use the four-pass method (see the <Link href="/english/reading" className="text-primary underline-offset-2 hover:underline">Reading module</Link>).</li>
              <li>"True / False / Not Given" — Not Given trips up 70% of students. If the passage doesn't state it, NG.</li>
              <li>Spend less time on early questions to bank time for matching headings.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <PenLine className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Writing · 60 min · 2 tasks</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Task 1 (20 min, 150 words): describe a graph / chart / process (Academic) or write a letter (General).
              Task 2 (40 min, 250 words): a structured essay.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Task 2 is worth twice as much. Don't blow your time on Task 1.</li>
              <li>Overview sentence in Task 1 is non-negotiable — without it, you cannot exceed Band 6.</li>
              <li>For Task 2: PEEL paragraphs, clear thesis, one example per body paragraph.</li>
              <li>Hand-count your words. Under 250 = automatic band drop.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Speaking · 11–14 min · 3 parts</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              A face-to-face interview with a certified examiner. Part 1 — personal questions (4–5 min). Part 2 — cue
              card, 1-minute prep + 2-minute long turn. Part 3 — abstract discussion of Part 2's topic (4–5 min).
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Don't memorise answers — examiners spot scripts and mark you down.</li>
              <li>Speak in extended turns. One-sentence answers = Band 5.</li>
              <li>For the cue card, use the four points printed — they are scaffolding, use them.</li>
              <li>It is fine to disagree with the examiner in Part 3. They want extended reasoning.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Band scoring decoded">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>Each module is scored 0–9 in half-band steps. The overall band is the average of the four, rounded to
            the nearest half. Below are the realistic interpretations Bangladeshi students should plan around.</p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">Band 5.5</span> — most undergrad in Bangladesh sit here on the first
              mock. Conversational, makes errors, gets the message across.</li>
            <li><span className="font-semibold">Band 6.0</span> — minimum for many UK / Australian undergrad programs.
              Reasonably accurate, can argue an opinion in writing.</li>
            <li><span className="font-semibold">Band 6.5</span> — most postgrad admissions. Errors don't impede
              communication. The sweet spot to aim for in 90 days from a 5.5 start.</li>
            <li><span className="font-semibold">Band 7.0</span> — competitive scholarships, Australian PR. Articulate,
              precise vocabulary, controlled grammar.</li>
            <li><span className="font-semibold">Band 7.5+</span> — top universities, medicine boards. Reads like a
              native speaker — but still makes occasional errors.</li>
            <li><span className="font-semibold">Band 8+</span> — fluency is automatic; only rare slips remain.</li>
          </ul>
        </div>
      </Section>

      <Section title="Test centres and fees in Bangladesh">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>
            IELTS is delivered in Bangladesh by <span className="font-semibold">British Council</span> and{' '}
            <span className="font-semibold">IDP Education</span>. Both are equally accepted — choose based on date
            availability and venue convenience.
          </p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">Dhaka</span> — multiple centres, weekly slots. Most students sit here.</li>
            <li><span className="font-semibold">Chattogram, Sylhet, Khulna</span> — monthly slots, book early
              especially around university admission cycles.</li>
            <li><span className="font-semibold">Computer-delivered IELTS</span> — faster results (3–5 days vs 13 days
              for paper). Available at most main centres.</li>
            <li><span className="font-semibold">IELTS One Skill Retake</span> — you can retake one module without
              redoing the whole test if you sat computer-delivered.</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Fees and dates change frequently. Always confirm on the official British Council Bangladesh and IDP
            Bangladesh websites before booking.
          </p>
        </div>
      </Section>

      <Section title="The realistic 90-day study plan">
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 1–14:</span> Baseline mock + daily 30-min English-mastery habits. No exam tricks yet.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 15–45:</span> Grammar repair + the four-pass reading method + 10-min daily shadowing.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 46–75:</span> Two full mock tests per week + AI tutor essay reviews + voice-coach speaking drills.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 76–90:</span> Final tactics — Task 1 templates, speaking Part 2 framework, weakness-targeted drills.</li>
        </ol>
        <Button asChild className="mt-5">
          <Link href="/sign-up">
            Open the 90-day plan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>

      <Section title="Bangladesh-specific FAQs">
        <div className="space-y-3 text-sm">
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">Is British Council or IDP harder?</p>
            <p className="mt-1 text-muted-foreground">
              Identical test. Some students believe IDP examiners are more lenient in Speaking; there is no published
              data. Pick by venue and date.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">Should I sit paper or computer?</p>
            <p className="mt-1 text-muted-foreground">
              Computer if your typing speed is &gt; 30 wpm in English and you find paper-grading anxiety distracting.
              Paper if your handwriting is faster than your typing. Results in 3-5 days for computer; 13 days for paper.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">How many attempts is normal?</p>
            <p className="mt-1 text-muted-foreground">
              Most Bangladeshi students hit their target by attempt 2. If you score below your target by 1 band, study
              another 6–8 weeks targeting your weakest module and retake.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">Does IELTS expire?</p>
            <p className="mt-1 text-muted-foreground">
              Two years from your test date. Most universities require a score within two years of admission.
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
