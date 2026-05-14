import { pgTable, text, timestamp, integer, jsonb, pgEnum, index, uuid, real, boolean, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './auth';
import { targetExam } from './auth';

export const cefrLevel = pgEnum('cefr_level', ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

export const vocabDecks = pgTable(
  'vocab_decks',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    description: text('description'),
    level: cefrLevel('level').notNull().default('B1'),
    exam: targetExam('exam').default('IELTS'),
    ownerKind: text('owner_kind').notNull().default('system'), // system | user
    ownerId: text('owner_id'),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    levelIdx: index('vocab_decks_level_idx').on(t.level),
    examIdx: index('vocab_decks_exam_idx').on(t.exam),
  }),
);

export const vocabCards = pgTable(
  'vocab_cards',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    deckId: uuid('deck_id').notNull().references(() => vocabDecks.id, { onDelete: 'cascade' }),
    term: text('term').notNull(),
    partOfSpeech: text('part_of_speech'),
    pronunciationIpa: text('pronunciation_ipa'),
    definition: text('definition').notNull(),
    bnTranslation: text('bn_translation'),
    examplesJson: jsonb('examples_json').$type<string[]>(),
    audioBlobKey: text('audio_blob_key'),
    imageBlobKey: text('image_blob_key'),
    orderIndex: integer('order_index').notNull().default(0),
  },
  (t) => ({
    deckIdx: index('vocab_cards_deck_idx').on(t.deckId),
    termIdx: index('vocab_cards_term_idx').on(t.term),
  }),
);

// SM-2 spaced-repetition state per user per card
export const userCardState = pgTable(
  'user_card_state',
  {
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    cardId: uuid('card_id').notNull().references(() => vocabCards.id, { onDelete: 'cascade' }),
    ease: real('ease').notNull().default(2.5),
    interval: integer('interval').notNull().default(0), // days
    repetitions: integer('repetitions').notNull().default(0),
    lapses: integer('lapses').notNull().default(0),
    lastReviewedAt: timestamp('last_reviewed_at', { withTimezone: true }),
    dueAt: timestamp('due_at', { withTimezone: true }).notNull().defaultNow(),
    suspended: boolean('suspended').notNull().default(false),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.cardId] }),
    dueIdx: index('user_card_state_due_idx').on(t.userId, t.dueAt),
  }),
);

export const vocabDecksRelations = relations(vocabDecks, ({ many }) => ({
  cards: many(vocabCards),
}));

export const vocabCardsRelations = relations(vocabCards, ({ one, many }) => ({
  deck: one(vocabDecks, { fields: [vocabCards.deckId], references: [vocabDecks.id] }),
  states: many(userCardState),
}));

export const userCardStateRelations = relations(userCardState, ({ one }) => ({
  user: one(users, { fields: [userCardState.userId], references: [users.id] }),
  card: one(vocabCards, { fields: [userCardState.cardId], references: [vocabCards.id] }),
}));

export type VocabDeck = typeof vocabDecks.$inferSelect;
export type VocabCard = typeof vocabCards.$inferSelect;
export type UserCardState = typeof userCardState.$inferSelect;
