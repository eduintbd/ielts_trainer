import type { ApiClient } from './client';
import {
  GradeWritingRequestSchema,
  GradeWritingResponseSchema,
  GradeSpeakingRequestSchema,
  GradeSpeakingResponseSchema,
  type GradeWritingRequest,
  type GradeWritingResponse,
  type GradeSpeakingRequest,
  type GradeSpeakingResponse,
} from '@ielts/shared-types';

export function makeEndpoints(client: ApiClient) {
  return {
    health: () => client.get<{ ok: true; uptime: number }>('/api/health'),

    tests: {
      list: (examId?: string) =>
        client.get<unknown>(`/api/tests${examId ? `?examId=${encodeURIComponent(examId)}` : ''}`),
      getPaper: (paperId: string) => client.get<unknown>(`/api/tests/papers/${paperId}`),
      startAttempt: (paperId: string) =>
        client.post<{ attemptId: string }>(`/api/tests/papers/${paperId}/attempt`, {}),
      saveResponse: (input: unknown) => client.post<{ ok: true }>('/api/tests/response', input),
      submitAttempt: (attemptId: string) =>
        client.post<{ status: 'grading' }>(`/api/tests/attempt/${attemptId}/submit`, {}),
      getAttempt: (attemptId: string) => client.get<unknown>(`/api/tests/attempt/${attemptId}`),
    },

    grade: {
      writing: (req: GradeWritingRequest) => {
        GradeWritingRequestSchema.parse(req);
        return client.post<GradeWritingResponse>('/api/grade/writing', req, GradeWritingResponseSchema);
      },
      speaking: (req: GradeSpeakingRequest) => {
        GradeSpeakingRequestSchema.parse(req);
        return client.post<GradeSpeakingResponse>('/api/grade/speaking', req, GradeSpeakingResponseSchema);
      },
    },

    voice: {
      start: (input: unknown) => client.post<{ sessionId: string }>('/api/voice/start', input),
      turn: (input: unknown) => client.post<unknown>('/api/voice/turn', input),
      end: (sessionId: string) =>
        client.post<{ summary: string; scores: unknown }>(`/api/voice/${sessionId}/end`, {}),
    },

    forum: {
      listTopics: (category: string) =>
        client.get<unknown>(`/api/forum/topics?category=${encodeURIComponent(category)}`),
      createTopic: (input: unknown) => client.post<{ id: string }>('/api/forum/topics', input),
      getTopic: (id: string) => client.get<unknown>(`/api/forum/topics/${id}`),
      reply: (input: unknown) => client.post<{ id: string }>('/api/forum/replies', input),
      vote: (input: unknown) => client.post<{ score: number }>('/api/forum/vote', input),
    },

    vocab: {
      listDecks: () => client.get<unknown>('/api/vocab/decks'),
      due: () => client.get<unknown>('/api/vocab/due'),
      review: (cardId: string, quality: number) =>
        client.post<{ next: unknown }>(`/api/vocab/cards/${cardId}/review`, { quality }),
    },

    gamification: {
      me: () => client.get<unknown>('/api/me/gamification'),
      leaderboard: (period: 'daily' | 'weekly' | 'all_time') =>
        client.get<unknown>(`/api/leaderboard?period=${period}`),
    },

    aiChat: {
      threads: () => client.get<unknown>('/api/ai/threads'),
      messages: (threadId: string) => client.get<unknown>(`/api/ai/threads/${threadId}/messages`),
      stream: (threadId: string, body: unknown, signal?: AbortSignal) =>
        client.stream(`/api/ai/threads/${threadId}/stream`, body, signal),
    },
  };
}

export type Endpoints = ReturnType<typeof makeEndpoints>;
