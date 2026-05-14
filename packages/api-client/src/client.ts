import { z } from 'zod';
import { ApiError, NetworkError } from './errors';

export type FetchInit = Omit<RequestInit, 'body'> & { body?: unknown };

export type ClientOptions = {
  baseURL: string;
  /** Function returning auth headers (e.g., from a session token). */
  getAuthHeaders?: () => Record<string, string> | Promise<Record<string, string>>;
  /** Default fetch implementation; defaults to global fetch. */
  fetchImpl?: typeof fetch;
};

export class ApiClient {
  constructor(private readonly opts: ClientOptions) {}

  async request<T>(path: string, init: FetchInit = {}, schema?: z.ZodType<T>): Promise<T> {
    const url = path.startsWith('http') ? path : `${this.opts.baseURL}${path}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(init.headers as Record<string, string> | undefined),
      ...((await this.opts.getAuthHeaders?.()) ?? {}),
    };

    const fetchImpl = this.opts.fetchImpl ?? fetch;
    let res: Response;
    try {
      res = await fetchImpl(url, {
        ...init,
        headers,
        body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
        credentials: 'include',
      });
    } catch (err) {
      throw new NetworkError(err instanceof Error ? err.message : 'fetch failed');
    }

    const text = await res.text();
    let json: unknown;
    if (text) {
      try {
        json = JSON.parse(text);
      } catch {
        json = text;
      }
    }

    if (!res.ok) {
      const obj = (json as { code?: string; message?: string; details?: unknown }) ?? {};
      throw new ApiError(res.status, obj.code ?? 'unknown', obj.message ?? res.statusText, obj.details);
    }

    return schema ? schema.parse(json) : (json as T);
  }

  get<T>(path: string, schema?: z.ZodType<T>): Promise<T> {
    return this.request<T>(path, { method: 'GET' }, schema);
  }
  post<T>(path: string, body: unknown, schema?: z.ZodType<T>): Promise<T> {
    return this.request<T>(path, { method: 'POST', body }, schema);
  }
  patch<T>(path: string, body: unknown, schema?: z.ZodType<T>): Promise<T> {
    return this.request<T>(path, { method: 'PATCH', body }, schema);
  }
  delete<T>(path: string, schema?: z.ZodType<T>): Promise<T> {
    return this.request<T>(path, { method: 'DELETE' }, schema);
  }

  /**
   * Stream Server-Sent Events from a POST endpoint.
   * Used for AI Instructor chat and voice turn streaming.
   */
  async *stream(path: string, body: unknown, signal?: AbortSignal): AsyncGenerator<string, void, void> {
    const url = path.startsWith('http') ? path : `${this.opts.baseURL}${path}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
      ...((await this.opts.getAuthHeaders?.()) ?? {}),
    };
    const fetchImpl = this.opts.fetchImpl ?? fetch;
    const res = await fetchImpl(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      credentials: 'include',
      signal,
    });
    if (!res.ok || !res.body) throw new ApiError(res.status, 'stream_failed', res.statusText);

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = '';
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf('\n\n')) !== -1) {
        const event = buf.slice(0, idx);
        buf = buf.slice(idx + 2);
        const dataLines = event.split('\n').filter((l) => l.startsWith('data: '));
        for (const line of dataLines) {
          yield line.slice(6);
        }
      }
    }
  }
}
