import Link from 'next/link';
import { db, schema } from '@ielts/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function TestsPage() {
  const papers = await db.query.testPapers.findMany({
    with: { exam: true },
    limit: 50,
    orderBy: (p, { desc }) => [desc(p.createdAt)],
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Mock tests</h1>
        <p className="text-sm text-muted-foreground">
          Full-length, timed, scored exactly like the real exam. Three filters help you pick.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">IELTS</CardTitle>
            <CardDescription>Academic & General. 4 modules · ~165 minutes total.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/ielts">Read the guide</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">TOEFL iBT</CardTitle>
            <CardDescription>Reading + Listening + Speaking + Writing. ~2 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/toefl">Read the guide</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">PTE Academic</CardTitle>
            <CardDescription>20 item types across 3 parts. ~2 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/pte">Read the guide</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {papers.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>The test library is loading.</CardTitle>
            <CardDescription>
              While we seed your first set of practice papers, here is what to do tonight:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>· 15 minutes on the <Link href="/voice" className="text-primary hover:underline">Voice coach</Link> — pronunciation drill.</p>
            <p>· One <Link href="/english/writing" className="text-primary hover:underline">writing paragraph</Link> submitted to the AI tutor.</p>
            <p>· 10 minutes of <Link href="/english/listening" className="text-primary hover:underline">listening practice</Link> on a BBC clip.</p>
            <p>· Five flashcards on the <Link href="/vocab" className="text-primary hover:underline">vocab deck</Link>.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
                <CardDescription>
                  {p.exam.name} · {p.difficulty} · {p.durationMinutes} min
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/tests/${p.id}`}>Start</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
