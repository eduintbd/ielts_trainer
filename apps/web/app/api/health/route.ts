import { NextResponse } from 'next/server';
import { db } from '@ielts/db';
import { sql } from 'drizzle-orm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const startedAt = Date.now();

export async function GET() {
  const checks: Record<string, { ok: boolean; latencyMs?: number; error?: string }> = {};

  // DB ping
  const dbStart = Date.now();
  try {
    await db.execute(sql`select 1`);
    checks.db = { ok: true, latencyMs: Date.now() - dbStart };
  } catch (err) {
    checks.db = { ok: false, error: err instanceof Error ? err.message : 'unknown' };
  }

  // AI service ping
  const aiStart = Date.now();
  try {
    const aiUrl = process.env.AI_SERVICE_URL;
    if (aiUrl) {
      const res = await fetch(`${aiUrl}/health`, { signal: AbortSignal.timeout(2000) });
      checks.ai_service = { ok: res.ok, latencyMs: Date.now() - aiStart };
    } else {
      checks.ai_service = { ok: false, error: 'AI_SERVICE_URL not set' };
    }
  } catch (err) {
    checks.ai_service = { ok: false, error: err instanceof Error ? err.message : 'unknown' };
  }

  const allOk = Object.values(checks).every((c) => c.ok);
  return NextResponse.json(
    { ok: allOk, uptime: Date.now() - startedAt, checks },
    { status: allOk ? 200 : 503 },
  );
}
