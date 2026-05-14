import Link from 'next/link';
import { ArrowRight, Mic } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Master English Speaking · IELTS Trainer',
  description:
    'A practical speaking curriculum for Bangla speakers. Shadowing, voice coach, accent training, and the four habits that finally make you fluent.',
};

export default function SpeakingPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">English Mastery / Speaking</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Speak English without freezing.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          The single biggest gap for Bangla speakers is not vocabulary — it is the muscle memory of using English with
          your mouth. You have read it for a decade. You have spoken it for hours. This module fixes that imbalance.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/voice">
              <Mic className="mr-2 h-4 w-4" /> Open voice coach
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </section>

      <Section title="Why your speaking is stuck" subtitle="It is not effort. It is approach.">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="You translate before speaking">
            Bangla sentence forms in your head, you translate it into English, you speak. The lag is 2-3 seconds —
            enough for the examiner to mark you down on fluency. The fix is direct-thinking drills, not faster
            translation.
          </Tile>
          <Tile title="You speak with your eyes">
            Reading English silently exercises the brain. It does not exercise the tongue, jaw, or breathing. The first
            time you have to say "thoroughly" out loud, the muscles fail you.
          </Tile>
          <Tile title="You avoid mistakes">
            Bangladeshi students are perfectionists. You wait until the sentence is "right" before speaking. By then
            the conversation has moved on. We teach a "70% accurate, 100% on-time" mindset.
          </Tile>
          <Tile title="You don't speak daily">
            One hour of speaking per week loses to ten minutes per day. Always. The brain consolidates muscle patterns
            during sleep — daily reps win.
          </Tile>
        </div>
      </Section>

      <Section title="The four habits that build a Band 7+ speaker">
        <ol className="space-y-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">1. Shadowing — ten minutes a day</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick a 60-second native audio clip. Play one sentence, pause, repeat it out loud copying every contour
              of pitch, every linked sound, every stressed syllable. You are not just saying the words; you are
              imitating the music of English.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Best sources:</span> BBC Learning English's "6 Minute
              English," Voice of America Learning English, TED-Ed shorts.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">2. The 60-second monologue, daily</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick a topic — "the bus ride this morning," "what I ate yesterday," "my opinion about WhatsApp." Set a
              60-second timer. Speak without stopping. Record yourself. Listen back once. Note the moment you got
              stuck and look up that exact phrase the next day.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">3. Read aloud — fifteen minutes, three times a week</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Editorials from The Daily Star or BBC News. Read every sentence aloud at conversational speed. Mark the
              words that feel wrong in your mouth, then drill them with the voice coach.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-sm font-semibold text-primary">4. One real conversation per week</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The voice coach is a scaffold, not a destination. Find one human — a classmate, a cousin abroad, a
              community partner in the forum — and have a 20-minute English-only call once a week. No exceptions.
            </p>
          </li>
        </ol>
      </Section>

      <Section title="Bangla-speaker pronunciation watchlist">
        <p className="mb-4 text-sm text-muted-foreground">
          These six sound patterns are flagged automatically by the voice coach. Knowing the list in advance shortens
          your correction loop.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Tile title="V vs W">
            "Wery good" instead of "very good." Bangla has no /v/. Bite your bottom lip lightly with your top teeth.
          </Tile>
          <Tile title="P vs F">
            "Pavourite" instead of "favourite." /f/ is upper teeth on bottom lip + breath. /p/ is full lip closure.
          </Tile>
          <Tile title="S vs Sh">
            "Sip" vs "ship." Pull the tongue back slightly for "sh." Bangla speakers often default to "sh."
          </Tile>
          <Tile title="Schwa (the lazy 'uh')">
            "About" is uh-BOUT, not ah-BOUT. English has one schwa sound in nearly every unstressed syllable.
          </Tile>
          <Tile title="Word stress">
            PHO-to-graph vs pho-TO-gra-phy. The vowel shifts when the stress shifts. Bangla is syllable-timed; English
            is stress-timed.
          </Tile>
          <Tile title="Final consonants">
            "Walked" has a /t/ ending, "wanted" has /id/. Bangla speakers often drop the ending. The examiner notices.
          </Tile>
        </div>
      </Section>

      <Section title="Tonight's exercise">
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm font-semibold text-primary">~12 minutes</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            <li>Open the voice coach and choose "Pronunciation drill."</li>
            <li>Run the V/W and P/F sets — 4 minutes.</li>
            <li>Switch to "Free conversation." Pick a topic from your day. Speak for 5 minutes.</li>
            <li>Read the AI's transcript. Highlight one mistake. Decide tomorrow's drill.</li>
          </ol>
          <Button asChild className="mt-5">
            <Link href="/voice">
              Start the session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
