-- ============================================================
-- Initial schema — IELTS Trainer
-- Applied: 2026-05-14
-- ============================================================

-- ── Extensions ────────────────────────────────────────────────
create extension if not exists "uuid-ossp";
create extension if not exists "vector";

-- ── Enums ─────────────────────────────────────────────────────
create type user_role         as enum ('student', 'admin', 'moderator');
create type target_exam       as enum ('IELTS', 'TOEFL', 'PTE', 'undecided');
create type native_lang       as enum ('bn', 'en', 'hi', 'ur', 'other');
create type cefr_level        as enum ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');
create type exam_section      as enum ('listening', 'reading', 'writing', 'speaking');
create type question_type     as enum ('mcq', 'multi_select', 'fill_blank', 'matching', 'short_answer', 'essay', 'speaking_prompt', 'listening_audio', 'reading_passage');
create type paper_source      as enum ('official', 'past_paper', 'mock', 'practice');
create type difficulty        as enum ('beginner', 'intermediate', 'advanced', 'expert');
create type accent_kind       as enum ('british', 'american', 'australian', 'indian', 'mixed');
create type attempt_status    as enum ('in_progress', 'submitted', 'grading', 'graded', 'abandoned');
create type lesson_kind       as enum ('video', 'article', 'pdf', 'live_recording');
create type voice_mode        as enum ('free_conversation', 'speaking_part_1', 'speaking_part_2', 'speaking_part_3', 'listening_drill', 'translate_bn_en', 'translate_en_bn', 'pronunciation_drill');
create type xp_reason         as enum ('test_completed', 'lesson_watched', 'vocab_reviewed', 'voice_session', 'forum_helpful_answer', 'daily_login', 'streak_bonus', 'perfect_score', 'admin_grant');
create type leaderboard_period as enum ('daily', 'weekly', 'all_time');
create type forum_category    as enum ('ielts_general', 'toefl_general', 'pte_general', 'speaking_partners', 'experiences', 'study_tips', 'visa_immigration', 'meta');
create type moderation_status as enum ('visible', 'flagged', 'auto_hidden', 'removed');
create type enrollment_status as enum ('active', 'expired', 'cancelled', 'pending');

-- ── Profiles ──────────────────────────────────────────────────
-- Extends auth.users with app-specific fields.
-- role is stored here (not in user_metadata) to prevent privilege escalation.
create table public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  full_name     text,
  avatar_url    text,
  role          user_role not null default 'student',
  country       text default 'BD',
  native_lang   native_lang default 'bn',
  target_exam   target_exam default 'IELTS',
  target_band   text,
  current_band  text,
  banned        boolean not null default false,
  banned_reason text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index profiles_role_idx on public.profiles (role);

-- Auto-create a profile row on every new signup.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── Exams / test content ───────────────────────────────────────
create table public.exams (
  id             uuid primary key default gen_random_uuid(),
  type           target_exam not null,
  name           text not null,
  description    text,
  structure_json jsonb,
  created_at     timestamptz not null default now()
);

create table public.test_papers (
  id               uuid primary key default gen_random_uuid(),
  exam_id          uuid not null references public.exams(id) on delete cascade,
  year             integer,
  source           paper_source not null default 'mock',
  title            text not null,
  description      text,
  difficulty       difficulty not null default 'intermediate',
  accent           accent_kind default 'british',
  duration_minutes integer not null,
  locked           text not null default 'public',
  published_at     timestamptz,
  created_at       timestamptz not null default now()
);

create index test_papers_exam_idx   on public.test_papers (exam_id);
create index test_papers_source_idx on public.test_papers (source);

create table public.test_questions (
  id                  uuid primary key default gen_random_uuid(),
  paper_id            uuid not null references public.test_papers(id) on delete cascade,
  section             exam_section not null,
  type                question_type not null,
  order_index         integer not null,
  prompt              text not null,
  audio_blob_key      text,
  image_blob_key      text,
  passage_text        text,
  options_json        jsonb,
  correct_answer_json jsonb,
  rubric_json         jsonb,
  points              integer not null default 1,
  embedding           vector(1024)
);

create index test_questions_paper_idx   on public.test_questions (paper_id);
create index test_questions_section_idx on public.test_questions (section);

create table public.test_attempts (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users(id) on delete cascade,
  paper_id         uuid not null references public.test_papers(id) on delete cascade,
  status           attempt_status not null default 'in_progress',
  started_at       timestamptz not null default now(),
  finished_at      timestamptz,
  duration_seconds integer,
  scores_json      jsonb,
  band_overall     real,
  ai_feedback_md   text,
  created_at       timestamptz not null default now()
);

create index test_attempts_user_idx   on public.test_attempts (user_id);
create index test_attempts_paper_idx  on public.test_attempts (paper_id);
create index test_attempts_status_idx on public.test_attempts (status);

create table public.attempt_responses (
  id                      uuid primary key default gen_random_uuid(),
  attempt_id              uuid not null references public.test_attempts(id) on delete cascade,
  question_id             uuid not null references public.test_questions(id) on delete cascade,
  response_text           text,
  response_audio_blob_key text,
  transcript              text,
  score                   real,
  ai_feedback             text,
  corrected_text_diff     jsonb,
  embedding               vector(1024),
  auto_saved_at           timestamptz not null default now()
);

create index attempt_responses_attempt_idx  on public.attempt_responses (attempt_id);
create index attempt_responses_question_idx on public.attempt_responses (question_id);

-- ── Vocabulary ─────────────────────────────────────────────────
create table public.vocab_decks (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  description  text,
  level        cefr_level not null default 'B1',
  exam         target_exam default 'IELTS',
  owner_kind   text not null default 'system',
  owner_id     uuid,
  published_at timestamptz,
  created_at   timestamptz not null default now()
);

create index vocab_decks_level_idx on public.vocab_decks (level);
create index vocab_decks_exam_idx  on public.vocab_decks (exam);

create table public.vocab_cards (
  id               uuid primary key default gen_random_uuid(),
  deck_id          uuid not null references public.vocab_decks(id) on delete cascade,
  term             text not null,
  part_of_speech   text,
  pronunciation_ipa text,
  definition       text not null,
  bn_translation   text,
  examples_json    jsonb,
  audio_blob_key   text,
  image_blob_key   text,
  order_index      integer not null default 0
);

create index vocab_cards_deck_idx on public.vocab_cards (deck_id);
create index vocab_cards_term_idx on public.vocab_cards (term);

create table public.user_card_state (
  user_id          uuid not null references auth.users(id) on delete cascade,
  card_id          uuid not null references public.vocab_cards(id) on delete cascade,
  ease             real not null default 2.5,
  interval         integer not null default 0,
  repetitions      integer not null default 0,
  lapses           integer not null default 0,
  last_reviewed_at timestamptz,
  due_at           timestamptz not null default now(),
  suspended        boolean not null default false,
  primary key (user_id, card_id)
);

create index user_card_state_due_idx on public.user_card_state (user_id, due_at);

-- ── Gamification ───────────────────────────────────────────────
create table public.user_gamification (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  xp             integer not null default 0,
  level          integer not null default 1,
  streak_days    integer not null default 0,
  longest_streak integer not null default 0,
  last_active_at timestamptz,
  badges_json    jsonb not null default '[]'::jsonb,
  updated_at     timestamptz not null default now()
);

create table public.xp_events (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  reason     xp_reason not null,
  amount     integer not null,
  meta_json  jsonb,
  created_at timestamptz not null default now()
);

create index xp_events_user_idx    on public.xp_events (user_id);
create index xp_events_created_idx on public.xp_events (created_at);

create table public.leaderboard_snapshots (
  period      leaderboard_period not null,
  user_id     uuid not null references auth.users(id) on delete cascade,
  xp          integer not null,
  rank        integer not null,
  captured_at timestamptz not null,
  primary key (period, user_id, captured_at)
);

create index leaderboard_period_idx on public.leaderboard_snapshots (period, captured_at, rank);

create table public.badges (
  id            text primary key,
  name          text not null,
  description   text not null,
  icon_key      text,
  criteria_json jsonb
);

-- ── Forum ──────────────────────────────────────────────────────
create table public.forum_topics (
  id                uuid primary key default gen_random_uuid(),
  category          forum_category not null,
  author_id         uuid not null references auth.users(id) on delete cascade,
  title             text not null,
  body_md           text not null,
  locked            boolean not null default false,
  pinned            boolean not null default false,
  moderation_status moderation_status not null default 'visible',
  score             integer not null default 0,
  reply_count       integer not null default 0,
  last_reply_at     timestamptz,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index forum_topics_category_idx on public.forum_topics (category);
create index forum_topics_author_idx   on public.forum_topics (author_id);
create index forum_topics_pinned_idx   on public.forum_topics (pinned, last_reply_at);

create table public.forum_replies (
  id                uuid primary key default gen_random_uuid(),
  topic_id          uuid not null references public.forum_topics(id) on delete cascade,
  author_id         uuid not null references auth.users(id) on delete cascade,
  parent_reply_id   uuid references public.forum_replies(id) on delete set null,
  body_md           text not null,
  moderation_status moderation_status not null default 'visible',
  score             integer not null default 0,
  is_accepted_answer boolean not null default false,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index forum_replies_topic_idx  on public.forum_replies (topic_id);
create index forum_replies_author_idx on public.forum_replies (author_id);

create table public.forum_votes (
  user_id     uuid not null references auth.users(id) on delete cascade,
  target_kind text not null,
  target_id   uuid not null,
  value       smallint not null check (value in (-1, 1)),
  created_at  timestamptz not null default now(),
  primary key (user_id, target_kind, target_id)
);

create table public.forum_reports (
  id             uuid primary key default gen_random_uuid(),
  reporter_id    uuid not null references auth.users(id) on delete cascade,
  target_kind    text not null,
  target_id      uuid not null,
  reason         text not null,
  resolved       boolean not null default false,
  resolved_by_id uuid references auth.users(id),
  resolved_at    timestamptz,
  created_at     timestamptz not null default now()
);

create index forum_reports_target_idx   on public.forum_reports (target_kind, target_id);
create index forum_reports_resolved_idx on public.forum_reports (resolved);

-- ── Lessons / voice / AI ───────────────────────────────────────
create table public.lessons (
  id               uuid primary key default gen_random_uuid(),
  exam_id          uuid references public.exams(id) on delete set null,
  section          exam_section,
  kind             lesson_kind not null default 'video',
  title            text not null,
  description      text,
  video_blob_key   text,
  pdf_blob_key     text,
  body_md          text,
  transcript       text,
  duration_seconds integer,
  difficulty       difficulty not null default 'beginner',
  order_index      integer not null default 0,
  published_at     timestamptz,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index lessons_exam_idx    on public.lessons (exam_id);
create index lessons_section_idx on public.lessons (section);

create table public.lesson_progress (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  lesson_id       uuid not null references public.lessons(id) on delete cascade,
  watched_seconds integer not null default 0,
  watched_pct     real not null default 0,
  completed_at    timestamptz,
  last_seen_at    timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create index lesson_progress_user_idx   on public.lesson_progress (user_id);
create index lesson_progress_lesson_idx on public.lesson_progress (lesson_id);

create table public.voice_sessions (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users(id) on delete cascade,
  mode             voice_mode not null,
  accent           text default 'british',
  duration_seconds integer not null default 0,
  transcript_json  jsonb,
  scores_json      jsonb,
  summary_md       text,
  started_at       timestamptz not null default now(),
  ended_at         timestamptz
);

create index voice_sessions_user_idx on public.voice_sessions (user_id);
create index voice_sessions_mode_idx on public.voice_sessions (mode);

create table public.ai_threads (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  title      text not null default 'New chat',
  pinned     boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index ai_threads_user_idx on public.ai_threads (user_id);

create table public.ai_messages (
  id              uuid primary key default gen_random_uuid(),
  thread_id       uuid not null references public.ai_threads(id) on delete cascade,
  role            text not null,
  content         text not null,
  tool_calls_json jsonb,
  created_at      timestamptz not null default now()
);

create index ai_messages_thread_idx on public.ai_messages (thread_id);

-- ── Analytics / audit / notifications ─────────────────────────
create table public.analytics_events (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users(id) on delete set null,
  session_id text,
  name       text not null,
  props_json jsonb,
  surface    text,
  ip_hash    text,
  user_agent text,
  ts         timestamptz not null default now()
);

create index analytics_events_user_idx on public.analytics_events (user_id);
create index analytics_events_name_idx on public.analytics_events (name);
create index analytics_events_ts_idx   on public.analytics_events (ts);

create table public.audit_log (
  id           uuid primary key default gen_random_uuid(),
  actor_id     uuid references auth.users(id) on delete set null,
  action       text not null,
  target_kind  text,
  target_id    text,
  payload_json jsonb,
  ip_hash      text,
  created_at   timestamptz not null default now()
);

create index audit_log_actor_idx   on public.audit_log (actor_id);
create index audit_log_target_idx  on public.audit_log (target_kind, target_id);
create index audit_log_created_idx on public.audit_log (created_at);

create table public.notifications (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  type         text not null,
  title        text not null,
  body         text,
  payload_json jsonb,
  read_at      timestamptz,
  created_at   timestamptz not null default now()
);

create index notifications_user_idx   on public.notifications (user_id, created_at);
create index notifications_unread_idx on public.notifications (user_id, read_at);

-- ── Enrollments ────────────────────────────────────────────────
create table public.enrollments (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  exam        target_exam not null,
  tier        text not null,
  status      enrollment_status not null default 'pending',
  started_at  timestamptz,
  expires_at  timestamptz,
  payment_ref text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index enrollments_user_idx   on public.enrollments (user_id);
create index enrollments_status_idx on public.enrollments (status);

-- ── RLS ────────────────────────────────────────────────────────
alter table public.profiles              enable row level security;
alter table public.exams                 enable row level security;
alter table public.test_papers           enable row level security;
alter table public.test_questions        enable row level security;
alter table public.test_attempts         enable row level security;
alter table public.attempt_responses     enable row level security;
alter table public.vocab_decks           enable row level security;
alter table public.vocab_cards           enable row level security;
alter table public.user_card_state       enable row level security;
alter table public.user_gamification     enable row level security;
alter table public.xp_events             enable row level security;
alter table public.leaderboard_snapshots enable row level security;
alter table public.badges                enable row level security;
alter table public.forum_topics          enable row level security;
alter table public.forum_replies         enable row level security;
alter table public.forum_votes           enable row level security;
alter table public.forum_reports         enable row level security;
alter table public.lessons               enable row level security;
alter table public.lesson_progress       enable row level security;
alter table public.voice_sessions        enable row level security;
alter table public.ai_threads            enable row level security;
alter table public.ai_messages           enable row level security;
alter table public.analytics_events      enable row level security;
alter table public.audit_log             enable row level security;
alter table public.notifications         enable row level security;
alter table public.enrollments           enable row level security;

-- profiles
create policy "profiles: own read"   on public.profiles for select using (auth.uid() = id);
create policy "profiles: own update" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- public catalogue
create policy "exams: authenticated read"         on public.exams         for select to authenticated using (true);
create policy "test_papers: authenticated read"   on public.test_papers   for select to authenticated using (true);
create policy "test_questions: authenticated read" on public.test_questions for select to authenticated using (true);
create policy "vocab_decks: authenticated read"   on public.vocab_decks   for select to authenticated using (true);
create policy "vocab_cards: authenticated read"   on public.vocab_cards   for select to authenticated using (true);
create policy "badges: authenticated read"        on public.badges        for select to authenticated using (true);
create policy "lessons: authenticated read"       on public.lessons       for select to authenticated using (true);

-- test attempts
create policy "test_attempts: own read"   on public.test_attempts for select using (auth.uid() = user_id);
create policy "test_attempts: own insert" on public.test_attempts for insert with check (auth.uid() = user_id);
create policy "test_attempts: own update" on public.test_attempts for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- attempt responses
create policy "attempt_responses: own read"   on public.attempt_responses for select using (exists (select 1 from public.test_attempts a where a.id = attempt_id and a.user_id = auth.uid()));
create policy "attempt_responses: own insert" on public.attempt_responses for insert with check (exists (select 1 from public.test_attempts a where a.id = attempt_id and a.user_id = auth.uid()));
create policy "attempt_responses: own update" on public.attempt_responses for update using (exists (select 1 from public.test_attempts a where a.id = attempt_id and a.user_id = auth.uid()));

-- vocab spaced-repetition state
create policy "user_card_state: own read"   on public.user_card_state for select using (auth.uid() = user_id);
create policy "user_card_state: own insert" on public.user_card_state for insert with check (auth.uid() = user_id);
create policy "user_card_state: own update" on public.user_card_state for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- gamification
create policy "user_gamification: own read"          on public.user_gamification    for select using (auth.uid() = user_id);
create policy "xp_events: own read"                  on public.xp_events            for select using (auth.uid() = user_id);
create policy "leaderboard_snapshots: authenticated" on public.leaderboard_snapshots for select to authenticated using (true);

-- forum
create policy "forum_topics: visible read" on public.forum_topics for select to authenticated using (moderation_status = 'visible');
create policy "forum_topics: own insert"   on public.forum_topics for insert with check (auth.uid() = author_id);
create policy "forum_topics: own update"   on public.forum_topics for update using (auth.uid() = author_id and locked = false) with check (auth.uid() = author_id);
create policy "forum_replies: visible read" on public.forum_replies for select to authenticated using (moderation_status = 'visible');
create policy "forum_replies: own insert"   on public.forum_replies for insert with check (auth.uid() = author_id);
create policy "forum_replies: own update"   on public.forum_replies for update using (auth.uid() = author_id) with check (auth.uid() = author_id);
create policy "forum_votes: own read"   on public.forum_votes for select using (auth.uid() = user_id);
create policy "forum_votes: own insert" on public.forum_votes for insert with check (auth.uid() = user_id);
create policy "forum_votes: own delete" on public.forum_votes for delete using (auth.uid() = user_id);
create policy "forum_reports: own insert" on public.forum_reports for insert with check (auth.uid() = reporter_id);

-- content progress
create policy "lesson_progress: own read"   on public.lesson_progress for select using (auth.uid() = user_id);
create policy "lesson_progress: own insert" on public.lesson_progress for insert with check (auth.uid() = user_id);
create policy "lesson_progress: own update" on public.lesson_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- voice / AI
create policy "voice_sessions: own read"   on public.voice_sessions for select using (auth.uid() = user_id);
create policy "voice_sessions: own insert" on public.voice_sessions for insert with check (auth.uid() = user_id);
create policy "ai_threads: own read"   on public.ai_threads for select using (auth.uid() = user_id);
create policy "ai_threads: own insert" on public.ai_threads for insert with check (auth.uid() = user_id);
create policy "ai_threads: own update" on public.ai_threads for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "ai_messages: own read"   on public.ai_messages for select using (exists (select 1 from public.ai_threads t where t.id = thread_id and t.user_id = auth.uid()));
create policy "ai_messages: own insert" on public.ai_messages for insert with check (exists (select 1 from public.ai_threads t where t.id = thread_id and t.user_id = auth.uid()));

-- notifications
create policy "notifications: own read"   on public.notifications for select using (auth.uid() = user_id);
create policy "notifications: own update" on public.notifications for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- enrollments
create policy "enrollments: own read" on public.enrollments for select using (auth.uid() = user_id);

-- analytics (write-only for authenticated)
create policy "analytics_events: own insert" on public.analytics_events for insert to authenticated with check (true);
