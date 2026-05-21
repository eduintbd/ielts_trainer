export const dynamic = 'force-dynamic';
import { db, schema, eq, desc } from '@ielts/db';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default async function LeaderboardPage() {
  const top = await db
    .select({
      userId: schema.leaderboardSnapshots.userId,
      xp: schema.leaderboardSnapshots.xp,
      rank: schema.leaderboardSnapshots.rank,
      name: schema.users.name,
      image: schema.users.image,
    })
    .from(schema.leaderboardSnapshots)
    .innerJoin(schema.users, eq(schema.users.id, schema.leaderboardSnapshots.userId))
    .where(eq(schema.leaderboardSnapshots.period, 'weekly'))
    .orderBy(desc(schema.leaderboardSnapshots.capturedAt), schema.leaderboardSnapshots.rank)
    .limit(50);

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-6">
      <div className="flex items-center gap-2">
        <Trophy className="h-6 w-6 text-accent" />
        <h1 className="text-2xl font-bold">Weekly leaderboard</h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Resets every Monday at 6 a.m. Dhaka time. You earn XP for completing lessons, finishing mock tests, hitting
        vocab streaks, and posting helpfully in the forum. There is no shortcut — only consistency.
      </p>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top learners this week</CardTitle>
        </CardHeader>
        <CardContent>
          {top.length === 0 ? (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>The leaderboard fills up as students earn XP this week.</p>
              <p>Quick wins for tonight:</p>
              <ul className="space-y-1 pl-4">
                <li>· Complete one voice session — 25 XP</li>
                <li>· Submit a writing paragraph to the AI tutor — 30 XP</li>
                <li>· Clear today&apos;s vocab cards — 10 XP per card</li>
                <li>· Help someone in the forum — 15 XP per useful reply</li>
              </ul>
            </div>
          ) : (
            <ol className="divide-y">
              {top.map((row) => (
                <li key={row.userId} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-sm font-bold text-muted-foreground">#{row.rank}</span>
                    <span className="font-medium">{row.name}</span>
                  </div>
                  <span className="font-semibold text-primary">{row.xp.toLocaleString()} XP</span>
                </li>
              ))}
            </ol>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
