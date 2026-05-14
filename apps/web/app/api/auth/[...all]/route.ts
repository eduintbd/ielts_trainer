import { NextResponse } from 'next/server';

// Auth is now handled by Supabase.
// OAuth callbacks go to /auth/callback (app/auth/callback/route.ts).
// This route is kept to avoid 404s from any old client references.
export function GET() {
  return NextResponse.json({ message: 'Auth is handled by Supabase.' }, { status: 200 });
}
export function POST() {
  return NextResponse.json({ message: 'Auth is handled by Supabase.' }, { status: 200 });
}
