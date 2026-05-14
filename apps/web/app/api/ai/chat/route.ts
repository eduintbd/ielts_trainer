import { getSessionUser } from '@/lib/session';
import { aiService } from '@/lib/ai-service';

export const runtime = 'nodejs';
export const maxDuration = 300;

const SYSTEM_PROMPT = `You are an experienced IELTS, TOEFL, and PTE instructor for Bangladeshi students.
You are warm, specific, and pragmatic. Use clear examples. When users ask about strategies, give
concrete templates they can use. When they share writing, give per-criterion band feedback. When
they ask in Bangla, you may respond bilingually.

Keep responses focused. Cite official band descriptors when relevant.`;

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return new Response(JSON.stringify({ code: 'unauthorized' }), { status: 401 });

  const { messages } = (await req.json()) as { messages: Array<{ role: string; content: string }> };

  const upstream = await aiService.stream('/llm/chat', {
    systemPrompt: SYSTEM_PROMPT,
    messages,
    user: { name: user.name, targetExam: user.targetExam },
  });

  return new Response(upstream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
