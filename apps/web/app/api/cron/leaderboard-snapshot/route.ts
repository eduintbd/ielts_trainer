import { NextResponse } from 'next/server';
import { db, schema, sql } from '@ielts/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Vercel cron — invoked daily at 00:00 BDT (18:00 UTC) per vercel.ts.
 * Computes weekly + all-time top 100 and writes to leaderboardSnapshots.
 */
export async function GET(req: Request) {
  // Vercel signs cron requests with the cron secret.
  const auth = req.headers.get('authorization');
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ code: 'unauthorized' }, { status: 401 });
  }

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const weeklyRows = await db
    .select({
      userId: schema.xpEvents.userId,
      xp: sql<number>`coalesce(sum(${schema.xpEvents.amount}), 0)::int`,
    })
    .from(schema.xpEvents)
    .where(sql`${schema.xpEvents.createdAt} >= ${sevenDaysAgo}`)
    .groupBy(schema.xpEvents.userId)
    .orderBy(sql`sum(${schema.xpEvents.amount}) desc`)
    .limit(100);

  if (weeklyRows.length > 0) {
    await db.insert(schema.leaderboardSnapshots).values(
      weeklyRows.map((row, i) => ({
        period: 'weekly' as const,
        userId: row.userId,
        xp: row.xp,
        rank: i + 1,
        capturedAt: now,
      })),
    );
  }

  const allTimeRows = await db
    .select({ userId: schema.userGamification.userId, xp: schema.userGamification.xp })
    .from(schema.userGamification)
    .orderBy(sql`${schema.userGamification.xp} desc`)
    .limit(100);

  if (allTimeRows.length > 0) {
    await db.insert(schema.leaderboardSnapshots).values(
      allTimeRows.map((row, i) => ({
        period: 'all_time' as const,
        userId: row.userId,
        xp: row.xp,
        rank: i + 1,
        capturedAt: now,
      })),
    );
  }

  return NextResponse.json({ ok: true, weeklyCount: weeklyRows.length, allTimeCount: allTimeRows.length });
}
