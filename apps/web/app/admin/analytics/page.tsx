export const dynamic = 'force-dynamic';
import { db, schema, sql } from '@ielts/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function AdminAnalyticsPage() {
  const dau = (await db
    .select({
      day: sql<string>`date_trunc('day', ${schema.analyticsEvents.ts})::date::text`,
      users: sql<number>`count(distinct ${schema.analyticsEvents.userId})::int`,
    })
    .from(schema.analyticsEvents)
    .where(sql`${schema.analyticsEvents.ts} > now() - interval '30 days'`)
    .groupBy(sql`date_trunc('day', ${schema.analyticsEvents.ts})`)
    .orderBy(sql`date_trunc('day', ${schema.analyticsEvents.ts}) desc`)) as Array<{ day: string; users: number }>;

  const topEvents = (await db
    .select({
      name: schema.analyticsEvents.name,
      count: sql<number>`count(*)::int`,
    })
    .from(schema.analyticsEvents)
    .where(sql`${schema.analyticsEvents.ts} > now() - interval '7 days'`)
    .groupBy(schema.analyticsEvents.name)
    .orderBy(sql`count(*) desc`)
    .limit(20)) as Array<{ name: string; count: number }>;

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Daily active users (30d)</CardTitle>
            <CardDescription>Distinct users per day from analytics_events.</CardDescription>
          </CardHeader>
          <CardContent>
            {dau.length === 0 ? (
              <p className="text-sm text-muted-foreground">No data yet.</p>
            ) : (
              <ul className="space-y-1 text-sm">
                {dau.map((d) => (
                  <li key={d.day} className="flex justify-between">
                    <span>{d.day}</span>
                    <span className="font-medium">{d.users}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top events (7d)</CardTitle>
            <CardDescription>Most-fired event names.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              {topEvents.map((e) => (
                <li key={e.name} className="flex justify-between">
                  <span className="font-mono">{e.name}</span>
                  <span className="font-medium">{e.count.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
