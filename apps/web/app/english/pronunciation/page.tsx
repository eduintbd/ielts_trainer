import Link from 'next/link';
import { ArrowRight, Languages } from 'lucide-react';
import { SiteShell, Section, Tile } from '@/components/site-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'English Pronunciation for Bangla Speakers · IELTS Trainer',
  description:
    'The exact sounds that mark you as a Bangla speaker — and the daily drills to soften them. Built for IELTS / TOEFL / PTE speaking sections.',
};

export default function PronunciationPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">English Mastery / Pronunciation</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          A clearer accent in 30 days.
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Nobody is asking you to "sound British." Examiners want clarity — sounds that don't make the listener
          re-process what you said. There are six pronunciation patterns Bangla speakers can fix in a month, and they
          unlock most of the speaking score.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/voice">
              <Languages className="mr-2 h-4 w-4" /> Open the drill
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </section>

      <Section title="The Bangla-speaker pronunciation map">
        <div className="grid gap-4 md:grid-cols-2">
          <Tile title="V vs W">
            <p><span className="font-semibold">/v/</span> — upper teeth gently touching lower lip + vibration. Try
              "very, vase, vote."</p>
            <p className="mt-2"><span className="font-semibold">/w/</span> — lips round and pushed forward, no teeth.
              Try "we, water, win."</p>
            <p className="mt-2 text-xs">Drill word pair: vine / wine.</p>
          </Tile>
          <Tile title="P vs F">
            <p><span className="font-semibold">/p/</span> — both lips closed, then burst of air. Hold a tissue, it should
              flutter for "p" but not for "f."</p>
            <p className="mt-2"><span className="font-semibold">/f/</span> — upper teeth on lower lip, steady breath.
              Try "fine, four, friend."</p>
            <p className="mt-2 text-xs">Drill word pair: pan / fan.</p>
          </Tile>
          <Tile title="S vs Sh">
            <p>Tongue near the gum ridge for /s/ — sharp, focused, like a snake hiss.</p>
            <p className="mt-2">Tongue pulled back for /sh/ — rounder, broader. Bangla speakers default to "sh."</p>
            <p className="mt-2 text-xs">Drill: see / she, sip / ship, sue / shoe.</p>
          </Tile>
          <Tile title="The schwa /ə/">
            <p>The lazy "uh" sound in nearly every unstressed English syllable. Without it, your speech sounds
              syllable-by-syllable — exam dock.</p>
            <p className="mt-2 text-xs">Drill: about → uh-BOUT. banana → buh-NAH-nuh. photograph → FOH-tuh-graf.</p>
          </Tile>
          <Tile title="Word stress">
            <p>English shifts both the stress and the vowel as a word changes form.</p>
            <p className="mt-2 text-xs">
              PHO-to-graph → pho-TO-gra-phy → pho-to-GRA-phic. Don't say each one with the same rhythm.
            </p>
          </Tile>
          <Tile title="Final consonants">
            <p>Bangla speakers swallow the last sound of English words. The examiner hears "wal" instead of "walked."</p>
            <p className="mt-2 text-xs">
              Drill: walked /wokt/, asked /askt/, played /pleyd/, wanted /WONT-id/. Make the ending audible.
            </p>
          </Tile>
        </div>
      </Section>

      <Section title="The minimal-pair drill (5 minutes, daily)">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>
            Pick one Bangla-speaker leak. Find ten minimal pairs (words that differ by only that sound). Say each pair
            aloud, slowly. Then record yourself and play it back. Your ear will pick up the difference before your
            mouth does.
          </p>
          <p className="mt-3 font-semibold">Today's pair set: V / W</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-6 text-muted-foreground">
            <li>vine / wine</li>
            <li>vest / west</li>
            <li>vet / wet</li>
            <li>veil / wail</li>
            <li>vow / wow</li>
            <li>verse / worse</li>
            <li>vary / wary</li>
            <li>vine / whine</li>
            <li>vow / wow</li>
            <li>victor / Wicker</li>
          </ul>
        </div>
      </Section>

      <Section title="Sentence stress is more important than word stress">
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p>
            In English, content words (nouns, main verbs, adjectives, adverbs) are stressed. Function words (the, a,
            of, to, in, was, has) are squeezed flat. Bangla is mostly syllable-timed — every syllable gets roughly
            equal weight. This is the single biggest reason Bangladeshi speakers sound "non-native" even when
            individual words are perfect.
          </p>
          <p className="mt-3">Try this sentence with English-style stress:</p>
          <p className="mt-2 italic">
            "I <span className="font-bold">went</span> to the <span className="font-bold">market</span> and{' '}
            <span className="font-bold">bought</span> some <span className="font-bold">fish</span>."
          </p>
          <p className="mt-2 text-muted-foreground">
            The bolded words land hard. Everything else — "I to the and some" — passes through quickly. Practise
            stretching that rhythm and your speech immediately sounds more natural.
          </p>
        </div>
      </Section>

      <Section title="Three-week clarity plan">
        <ol className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Week 1.</span> V/W and P/F. Five minutes daily on minimal pairs in the
            voice coach.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Week 2.</span> S/Sh and final consonants. Read aloud one news editorial
            with deliberate ending sounds.
          </li>
          <li className="rounded-lg border bg-card p-4">
            <span className="font-semibold">Week 3.</span> Schwa and sentence stress. Shadow native audio — copy the
            rhythm, not just the words.
          </li>
        </ol>
        <Button asChild className="mt-5">
          <Link href="/voice">
            Start today's drill <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
