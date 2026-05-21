export const dynamic = 'force-dynamic';
import { db, schema, eq, and, lte } from '@ielts/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getSessionUser } from '@/lib/session';

export default async function VocabPage() {
  const user = (await getSessionUser())!;

  const [decks, dueCount] = await Promise.all([
    db.query.vocabDecks.findMany({ orderBy: (d, { asc }) => [asc(d.level)] }),
    db
      .select({ count: schema.userCardState.cardId })
      .from(schema.userCardState)
      .where(and(eq(schema.userCardState.userId, user.id), lte(schema.userCardState.dueAt, new Date())))
      .then((rows) => rows.length),
  ]);

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Vocabulary</h1>
          <p className="text-sm text-muted-foreground">
            Spaced-repetition flashcards. 15 cards a day for 90 days = a working academic vocabulary.
          </p>
        </div>
        <Button asChild>
          <Link href="/vocab/review">Review {dueCount} due</Link>
        </Button>
      </div>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">How to use this without burning out</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>· Don't rush new cards. Add 10–15 per day max. The reviews stack up — your future self will thank you.</p>
          <p>· When you blank on a card, mark "again," not "good." Cheating yourself only slows the algorithm.</p>
          <p>· Every word you meet in a mock test or article — add it. Context-acquired words stick longest.</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decks.length === 0 ? (
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Decks are loading.</CardTitle>
              <CardDescription>While we seed the system decks, try these habits tonight:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>· Open today's Daily Star editorial. Pick five words you don't fully own. Look them up.</p>
              <p>· Write one sentence using each. Read each sentence aloud twice.</p>
              <p>· Tomorrow, use one of them in a forum post or a writing paragraph.</p>
            </CardContent>
          </Card>
        ) : (
          decks.map((d) => (
            <Card key={d.id}>
              <CardHeader>
                <CardTitle className="text-base">{d.name}</CardTitle>
                <CardDescription>
                  Level {d.level} · {d.exam}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/vocab/decks/${d.id}`}>Open</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
