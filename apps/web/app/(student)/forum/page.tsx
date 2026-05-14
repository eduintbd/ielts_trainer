import Link from 'next/link';
import { db } from '@ielts/db';
import { desc } from 'drizzle-orm';
import { forumTopics } from '@ielts/db/schema';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function ForumPage() {
  const topics = await db.query.forumTopics.findMany({
    with: { author: { columns: { id: true, name: true, image: true } } },
    orderBy: [desc(forumTopics.pinned), desc(forumTopics.lastReplyAt), desc(forumTopics.createdAt)],
    limit: 50,
  });

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Community forum</h1>
          <p className="text-sm text-muted-foreground">
            Ask questions, share scores, find a daily speaking partner. Bangla and English both welcome.
          </p>
        </div>
        <Button asChild>
          <Link href="/forum/new">New topic</Link>
        </Button>
      </div>

      <Card className="bg-muted/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">A short list of forum rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm text-muted-foreground">
          <p>· Be kind. Many people here are speaking English in public for the first time.</p>
          <p>· No selling, no spam, no promo links. Centres and coaches must use the partners channel.</p>
          <p>· Sharing official IELTS / TOEFL / PTE papers you don&apos;t own copyright to is not allowed.</p>
          <p>· Asking for a speaking partner? Mention your timezone, level, and target band.</p>
        </CardContent>
      </Card>

      {topics.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Be the first to post.</CardTitle>
            <CardDescription>Some starter topics other students always engage with:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1 text-sm text-muted-foreground">
            <p>· &quot;My first mock score broke me — how did you bounce back?&quot;</p>
            <p>· &quot;Looking for a Speaking Part 2 partner — Dhaka, evenings.&quot;</p>
            <p>· &quot;Which writing template stuck for you in Task 2?&quot;</p>
            <p>· &quot;British Council vs IDP — your honest experience?&quot;</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {topics.map((t) => (
            <Link key={t.id} href={`/forum/${t.id}`} className="block">
              <Card className="transition hover:bg-muted/40">
                <CardHeader className="py-3">
                  <CardTitle className="text-base">{t.pinned && '📌 '}{t.title}</CardTitle>
                  <CardDescription>
                    {t.author.name} · {t.category.replaceAll('_', ' ')} · {t.replyCount} replies
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
