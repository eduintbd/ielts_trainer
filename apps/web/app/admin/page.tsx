import { db, schema, sql } from '@ielts/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

async function counts() {
  const [u, a, p, t] = await Promise.all([
    db.select({ n: sql<number>`count(*)::int` }).from(schema.users),
    db.select({ n: sql<number>`count(*)::int` }).from(schema.testAttempts),
    db.select({ n: sql<number>`count(*)::int` }).from(schema.testPapers),
    db.select({ n: sql<number>`count(*)::int` }).from(schema.forumTopics),
  ]);
  return {
    users: u[0]?.n ?? 0,
    attempts: a[0]?.n ?? 0,
    papers: p[0]?.n ?? 0,
    topics: t[0]?.n ?? 0,
  };
}

export default async function AdminOverviewPage() {
  const stats = await counts();

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Stat title="Users" value={stats.users} description="Registered students + admins." />
        <Stat title="Test attempts" value={stats.attempts} description="All-time submitted attempts." />
        <Stat title="Papers" value={stats.papers} description="Available mock + past papers." />
        <Stat title="Forum topics" value={stats.topics} description="Community posts." />
      </div>
    </div>
  );
}

function Stat({ title, value, description }: { title: string; value: number; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{value.toLocaleString()}</CardTitle>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground">{description}</CardContent>
    </Card>
  );
}
