import * as SQLite from 'expo-sqlite';

/**
 * Local SQLite for offline vocabulary review and downloaded lessons.
 * Schema mirrors a subset of packages/db.
 */
export type LocalCard = {
  id: string;
  deckId: string;
  term: string;
  definition: string;
  bnTranslation: string | null;
  pronunciationIpa: string | null;
  audioBlobKey: string | null;
};

export type LocalCardState = {
  cardId: string;
  ease: number;
  interval: number;
  repetitions: number;
  lapses: number;
  lastReviewedAt: number | null;
  dueAt: number;
};

export type OutboxEntry = {
  id: string;
  endpoint: string;
  method: string;
  payload: string;
  attempts: number;
  createdAt: number;
};

let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null;

export function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const db = await SQLite.openDatabaseAsync('ielts.db');
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS local_cards (
          id TEXT PRIMARY KEY,
          deck_id TEXT NOT NULL,
          term TEXT NOT NULL,
          definition TEXT NOT NULL,
          bn_translation TEXT,
          pronunciation_ipa TEXT,
          audio_blob_key TEXT
        );

        CREATE TABLE IF NOT EXISTS local_card_state (
          card_id TEXT PRIMARY KEY,
          ease REAL NOT NULL DEFAULT 2.5,
          interval INTEGER NOT NULL DEFAULT 0,
          repetitions INTEGER NOT NULL DEFAULT 0,
          lapses INTEGER NOT NULL DEFAULT 0,
          last_reviewed_at INTEGER,
          due_at INTEGER NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_local_card_state_due ON local_card_state(due_at);

        CREATE TABLE IF NOT EXISTS outbox (
          id TEXT PRIMARY KEY,
          endpoint TEXT NOT NULL,
          method TEXT NOT NULL,
          payload TEXT NOT NULL,
          attempts INTEGER NOT NULL DEFAULT 0,
          created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS downloaded_lessons (
          lesson_id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          local_video_path TEXT,
          transcript TEXT,
          downloaded_at INTEGER NOT NULL
        );
      `);
      return db;
    })();
  }
  return dbPromise;
}

export async function listDueCards(now = Date.now()): Promise<LocalCard[]> {
  const db = await getDb();
  return db.getAllAsync<LocalCard>(
    `SELECT c.* FROM local_cards c
     JOIN local_card_state s ON s.card_id = c.id
     WHERE s.due_at <= ?
     ORDER BY s.due_at ASC LIMIT 50`,
    now,
  );
}

export async function enqueueOutbox(endpoint: string, method: string, payload: unknown) {
  const db = await getDb();
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await db.runAsync(
    `INSERT INTO outbox (id, endpoint, method, payload, attempts, created_at) VALUES (?, ?, ?, ?, 0, ?)`,
    id,
    endpoint,
    method,
    JSON.stringify(payload),
    Date.now(),
  );
}

export async function flushOutbox(apiBaseUrl: string, getAuthHeader: () => Promise<string | null>) {
  const db = await getDb();
  const entries = await db.getAllAsync<OutboxEntry>(
    `SELECT * FROM outbox ORDER BY created_at ASC LIMIT 50`,
  );
  for (const e of entries) {
    try {
      const auth = await getAuthHeader();
      const res = await fetch(`${apiBaseUrl}${e.endpoint}`, {
        method: e.method,
        headers: { 'Content-Type': 'application/json', ...(auth ? { Authorization: auth } : {}) },
        body: e.payload,
      });
      if (res.ok) {
        await db.runAsync(`DELETE FROM outbox WHERE id = ?`, e.id);
      } else if (res.status >= 500) {
        await db.runAsync(`UPDATE outbox SET attempts = attempts + 1 WHERE id = ?`, e.id);
      } else {
        // 4xx — drop, can't be retried
        await db.runAsync(`DELETE FROM outbox WHERE id = ?`, e.id);
      }
    } catch {
      await db.runAsync(`UPDATE outbox SET attempts = attempts + 1 WHERE id = ?`, e.id);
    }
  }
}
