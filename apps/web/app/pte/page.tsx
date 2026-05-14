import Link from 'next/link';
import { ArrowRight, Mic, Headphones, BookOpen, PenLine } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'PTE Academic Preparation for Bangladeshi Students · IELTS Trainer',
  description:
    'A complete PTE Academic guide: all four parts, AI-graded item types, score targets, Bangladesh test centres, and the 60-day plan.',
};

export default function PtePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam · PTE Academic</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          PTE Academic — fast results, AI grading.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Pearson Test of English Academic is the test of choice if you want results in 48 hours and prefer a
          fully-AI-graded exam (no human examiner can lower your score on a bad mood day). Accepted by Australian and
          New Zealand universities, almost all UK institutions, and increasingly by the US and Canada. PTE is the
          fastest way to a study visa for Australia from Bangladesh.
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

      <Section title="What makes PTE different">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="100% computer + AI graded">
            No human examiner. Your speaking is graded by speech-recognition AI. This is the single biggest tactical
            difference — you must speak clearly, at consistent volume, without long pauses (the AI penalises silence
            harshly).
          </Tile>
          <Tile title="Integrated skills">
            One task can test reading + speaking simultaneously (Read Aloud), or listening + writing (Summarise Spoken
            Text). Practice for the skill combos, not the skills in isolation.
          </Tile>
          <Tile title="Fast results">
            Scores in 2 business days, sometimes 24 hours. If your visa deadline is tight, this is the test.
          </Tile>
          <Tile title="Score 10–90 scaled">
            Maps roughly to CEFR levels. 65+ = competitive university. 79+ = top universities and Australian PR
            superior English points.
          </Tile>
        </div>
      </Section>

      <Section title="The three parts of PTE Academic">
        <div className="space-y-5">
          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Part 1 · Speaking + Writing · 54–67 min</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              The longest section. Mixed item types:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li><span className="font-semibold">Read Aloud</span> — read a 60-word passage aloud. Pronunciation, fluency, and oral content all scored.</li>
              <li><span className="font-semibold">Repeat Sentence</span> — listen to a sentence, repeat it exactly. Memory + pronunciation.</li>
              <li><span className="font-semibold">Describe Image</span> — 40 seconds to describe a chart or photo. Pre-built templates win here.</li>
              <li><span className="font-semibold">Re-tell Lecture</span> — listen to a 60-90 second lecture, summarise it in your own words for 40 seconds.</li>
              <li><span className="font-semibold">Answer Short Question</span> — one-word or short-phrase answer to general knowledge questions.</li>
              <li><span className="font-semibold">Summarise Written Text</span> — read 300 words, summarise in one sentence (5-75 words).</li>
              <li><span className="font-semibold">Essay</span> — 200-300 words on a given topic, 20 minutes.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Part 2 · Reading · 29–30 min</h3>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li><span className="font-semibold">Reading & Writing: Fill in the Blanks</span> — drop-down menus, requires grammar + collocation knowledge.</li>
              <li><span className="font-semibold">Multiple Choice (single answer)</span> — typical comprehension.</li>
              <li><span className="font-semibold">Re-order Paragraphs</span> — drag and drop sentences into logical order. Cohesion devices are your clue.</li>
              <li><span className="font-semibold">Reading: Fill in the Blanks</span> — drag words into gaps. Vocabulary + meaning fit.</li>
              <li><span className="font-semibold">Multiple Choice (multiple answer)</span> — usually 2-3 correct out of 5-7. Wrong answers cost you points (negative marking), so don't guess wildly.</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Part 3 · Listening · 30–43 min</h3>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li><span className="font-semibold">Summarise Spoken Text</span> — listen to a 60-90s audio, write a 50-70 word summary in 10 minutes.</li>
              <li><span className="font-semibold">Multiple Choice</span> (single and multiple answer) — academic lectures and dialogues.</li>
              <li><span className="font-semibold">Fill in the Blanks</span> — type missing words while listening. Hardest for slow typists.</li>
              <li><span className="font-semibold">Highlight Correct Summary</span> — pick the option that summarises what you heard.</li>
              <li><span className="font-semibold">Select Missing Word</span> — predict the last word of an audio clip.</li>
              <li><span className="font-semibold">Highlight Incorrect Words</span> — read along with audio, click the words that differ.</li>
              <li><span className="font-semibold">Write from Dictation</span> — listen to a sentence, type it exactly. Spelling-critical.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="The AI-grading rules every PTE candidate must internalise">
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">1. The AI does not give partial credit for hesitation.</span> A 3-second
            pause is worse than a wrong word, especially in Read Aloud and Repeat Sentence.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">2. Volume matters.</span> If your microphone level drops below the
            threshold, the AI scores you near zero on that item. Always position the mic 4-6cm from your mouth.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">3. Pronounce every syllable.</span> The AI does not understand context.
            "PHO-to" without "graph" sounds like a different word to it.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">4. Multiple-answer questions have negative marking.</span> Wrong picks
            subtract points. Only click options you are confident about.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">5. Skills are scored together.</span> A bad Read Aloud hurts both your
            Speaking AND your Reading score. Practice integrated items, not isolated skills.
          </li>
        </ol>
      </Section>

      <Section title="Score targets to plan around">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <ul className="space-y-2">
            <li><span className="font-semibold">PTE 50</span> ≈ IELTS 6.0 — minimum for many Australian undergrad programs.</li>
            <li><span className="font-semibold">PTE 58</span> ≈ IELTS 6.5 — most postgrad admissions.</li>
            <li><span className="font-semibold">PTE 65</span> ≈ IELTS 7.0 — competitive scholarships, "proficient English" points for Australian PR.</li>
            <li><span className="font-semibold">PTE 79</span> ≈ IELTS 8.0 — "superior English" — maximum points for Australian skilled migration. The realistic premium target.</li>
          </ul>
        </div>
      </Section>

      <Section title="PTE in Bangladesh">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>
            Pearson operates an authorised PTE test centre in Dhaka. Slots run multiple days per week and book up 2–6
            weeks ahead. Check the official Pearson PTE website for current centres, fees, and dates.
          </p>
          <ul className="mt-3 space-y-2">
            <li><span className="font-semibold">PTE Academic Online</span> — sit from home, same score, same
              acceptance. Requires a webcam, working mic, and a quiet room.</li>
            <li><span className="font-semibold">Score validity</span> — 2 years.</li>
            <li><span className="font-semibold">Score sending</span> — unlimited free sends to institutions.</li>
          </ul>
        </div>
      </Section>

      <Section title="The 60-day PTE plan">
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 1–10:</span> Baseline mock + learn all 20 item types + audio setup.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 11–30:</span> Item-by-item drills, especially Read Aloud, Describe Image, Re-tell Lecture, Write from Dictation.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 31–50:</span> Two full mocks per week, focused weak-item drilling.</li>
          <li className="rounded-lg border bg-card p-4"><span className="font-semibold">Days 51–60:</span> Final templates, mock under exam conditions, exam day.</li>
        </ol>
        <Button asChild className="mt-5">
          <Link href="/sign-up">
            Start the plan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
