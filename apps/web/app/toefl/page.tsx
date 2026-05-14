import Link from 'next/link';
import { ArrowRight, Headphones, BookOpen, PenLine, Mic } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'TOEFL iBT Preparation for Bangladeshi Students · IELTS Trainer',
  description:
    'A complete TOEFL iBT guide: all four sections, integrated tasks, score targets, Bangladesh test centres, and the 90-day plan.',
};

export default function ToeflPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam · TOEFL iBT</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          TOEFL iBT — the American route.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          TOEFL iBT is the English test most US universities prefer (though most also accept IELTS). It is fully
          computer-delivered, runs about two hours, and tests "academic English" — listening to lectures, reading
          textbook passages, summarising what you just read into what you just heard. If you are applying to the US,
          this guide is for you.
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

      <Section title="What's different about TOEFL vs IELTS?">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="100% American academic English">
            All audio is North American. All readings are from textbook-style academic sources. No British / Australian
            accents. No general-conversation register.
          </Tile>
          <Tile title="Integrated tasks">
            TOEFL's signature: you read a passage, then listen to a lecture about the same topic, then write a summary
            comparing the two. IELTS has nothing like it. Bangladeshi students often underestimate this section.
          </Tile>
          <Tile title="Computer-delivered only">
            You type all your essays. You speak into a microphone for the Speaking section — no human examiner. Useful
            if you find face-to-face interviews stressful.
          </Tile>
          <Tile title="Scoring 0–120">
            Each of the four sections scores 0–30; the total is the sum. Most US grad schools want 90+ overall, top
            schools 100+, with no single section below 22.
          </Tile>
        </div>
      </Section>

      <Section title="The four sections, in TOEFL order">
        <div className="space-y-5">
          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Reading · ~35 min · 2 passages · 20 questions</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Academic textbook passages, ~700 words each. Questions cover vocabulary, inference, sentence-rewording,
              and a final "summary" question worth 2 points.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Sentence-rewording questions: look for paraphrase + retained meaning. Trap answers either drop a key idea or add a wrong one.</li>
              <li>The final summary question — get 3 main ideas (not details) into 3 of the 6 options.</li>
              <li>You can revisit questions within a section. Use that — flag, move on, come back.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Listening · ~36 min · 5 audio segments · 28 questions</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Three lectures (3–5 min each) and two campus conversations (advisor meetings, librarian queries). Take
              notes. Notes are allowed and essential.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Set up a left-column / right-column notes layout — main ideas left, examples right.</li>
              <li>Don't try to transcribe. Capture structure: thesis, two examples, conclusion.</li>
              <li>"Function" questions (why did the professor say X?) — focus on attitude and emphasis, not literal meaning.</li>
              <li>Bangladeshi students often miss the campus-conversation segments because they assume "informal = easy." It isn't — register is the test.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Speaking · ~16 min · 4 tasks · into a microphone</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Task 1 — independent opinion (45 sec answer). Tasks 2–4 — integrated: read a passage, hear audio, then
              speak. The hardest section for most Bangla speakers.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>15-second prep window is short — pre-build a template: "I prefer X because of A and B. Firstly... Secondly..."</li>
              <li>Speak loudly and clearly into the mic — TOEFL graders rate clarity heavily.</li>
              <li>Integrated tasks need 60-90 seconds of speech with no pauses. Practice timing.</li>
              <li>It is better to give a complete, slightly slower answer than to rush and trail off.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <PenLine className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Writing · ~29 min · 2 tasks · typed</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Task 1 (integrated, 20 min, ~150-225 words): read a passage, listen to a lecture that contradicts it,
              summarise both sides. Task 2 (academic discussion, 10 min, &gt;100 words): respond to a professor's
              question in a discussion board format.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li>Task 1 has a fixed structure — three reading points, three matching lecture rebuttals. Memorise the template.</li>
              <li>Task 2 wants you to engage with two prior student posts shown to you, add a new angle, and support it.</li>
              <li>Type fast. Most Bangladeshi students undertype Task 2. Get to 130+ words.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Score targets to aim for">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <ul className="space-y-2">
            <li><span className="font-semibold">80+</span> — entry-level US universities, community college transfer.</li>
            <li><span className="font-semibold">90+</span> — most public US universities, many private mid-tier.</li>
            <li><span className="font-semibold">100+</span> — top 50 US universities, most graduate programs.</li>
            <li><span className="font-semibold">105+ with 24+ in Speaking</span> — Teaching Assistantship eligibility for most PhDs.</li>
            <li><span className="font-semibold">110+</span> — Ivy League and equivalent. Realistic with focused 4-6 month prep from a 90.</li>
          </ul>
        </div>
      </Section>

      <Section title="TOEFL in Bangladesh">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>
            TOEFL iBT is delivered by <span className="font-semibold">ETS</span> at authorised centres. As of recent
            cycles, Dhaka has multiple ETS-authorised venues; Chattogram is intermittent.
          </p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">TOEFL iBT Home Edition</span> — sit from home if you have a quiet
              room, a reliable connection, and a webcam-equipped computer. Same score, same acceptance.</li>
            <li><span className="font-semibold">Score reporting</span> — official scores in 4-8 days. You can send to
              4 institutions free, more for a fee.</li>
            <li><span className="font-semibold">Validity</span> — 2 years.</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Confirm centre availability, fees, and dates on the official ETS TOEFL website. Slots fill 6–8 weeks
            ahead in peak admissions months (Oct-Dec, Feb-Apr).
          </p>
        </div>
      </Section>

      <Section title="The 90-day TOEFL plan">
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 1–14:</span> Baseline mock + American-accent immersion (NPR, The Daily, TED-Ed).</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 15–45:</span> Note-taking system + integrated task templates + grammar repair.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 46–75:</span> Two full mock tests per week, with section-specific drills for weakest area.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 76–90:</span> Speaking template polish, typing speed, final mock under exam conditions.</li>
        </ol>
        <Button asChild className="mt-5">
          <Link href="/sign-up">
            Start the plan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>

      <Section title="Common TOEFL pitfalls for Bangladeshi candidates">
        <div className="space-y-3 text-sm">
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">Speaking pace too slow</p>
            <p className="mt-1 text-muted-foreground">
              45-second / 60-second answers must be full. Long pauses hurt the rating more than minor grammar errors.
              Practice with a timer until pacing is automatic.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">Typing too slow on Writing</p>
            <p className="mt-1 text-muted-foreground">
              If you type at &lt; 25 wpm in English, you will fall short. Spend two weeks on typing.com or
              keybr.com before final prep.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold">Not understanding "campus conversation" register</p>
            <p className="mt-1 text-muted-foreground">
              American advisor / student talk is fast, idiomatic, and assumes shared culture. The fix: watch US
              college vlogs. Yes, really.
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
