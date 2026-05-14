import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { reviewCard, type SM2Quality, INITIAL_STATE } from '@ielts/grading';
import { listDueCards, getDb, enqueueOutbox, type LocalCard } from '@/lib/offline-db';

export default function VocabReviewScreen() {
  const [queue, setQueue] = useState<LocalCard[]>([]);
  const [showBack, setShowBack] = useState(false);
  const [done, setDone] = useState(0);

  useEffect(() => {
    listDueCards().then(setQueue);
  }, []);

  const card = queue[0];

  async function grade(quality: SM2Quality) {
    if (!card) return;
    const db = await getDb();
    const row = (await db.getFirstAsync<{
      ease: number;
      interval: number;
      repetitions: number;
      lapses: number;
      due_at: number;
    }>(
      `SELECT ease, interval, repetitions, lapses, due_at FROM local_card_state WHERE card_id = ?`,
      card.id,
    )) ?? null;

    const prev = row
      ? { ...row, dueAt: new Date(row.due_at) }
      : { ...INITIAL_STATE, dueAt: new Date() };

    const next = reviewCard(prev, quality);

    await db.runAsync(
      `INSERT INTO local_card_state (card_id, ease, interval, repetitions, lapses, last_reviewed_at, due_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(card_id) DO UPDATE SET ease=excluded.ease, interval=excluded.interval,
         repetitions=excluded.repetitions, lapses=excluded.lapses,
         last_reviewed_at=excluded.last_reviewed_at, due_at=excluded.due_at`,
      card.id,
      next.ease,
      next.interval,
      next.repetitions,
      next.lapses,
      Date.now(),
      next.dueAt.getTime(),
    );

    await enqueueOutbox(`/api/vocab/cards/${card.id}/review`, 'POST', { quality });

    setQueue((q) => q.slice(1));
    setShowBack(false);
    setDone((n) => n + 1);
  }

  if (!card) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-6">
        <Text className="text-lg font-semibold">All caught up!</Text>
        <Text className="mt-2 text-sm text-zinc-500">Reviewed {done} cards. Come back later for more.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-between bg-white p-6">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold">{card.term}</Text>
        {card.pronunciationIpa && <Text className="mt-2 text-sm text-zinc-500">/{card.pronunciationIpa}/</Text>}

        {showBack && (
          <View className="mt-6 items-center">
            <Text className="text-base">{card.definition}</Text>
            {card.bnTranslation && <Text className="mt-2 text-base font-bn text-zinc-700">{card.bnTranslation}</Text>}
          </View>
        )}
      </View>

      {showBack ? (
        <View className="flex-row gap-2">
          <GradeButton label="Again" onPress={() => grade(0)} variant="bad" />
          <GradeButton label="Hard" onPress={() => grade(3)} />
          <GradeButton label="Good" onPress={() => grade(4)} />
          <GradeButton label="Easy" onPress={() => grade(5)} variant="good" />
        </View>
      ) : (
        <Pressable
          onPress={() => setShowBack(true)}
          className="rounded-md bg-primary px-4 py-3 active:opacity-80"
        >
          <Text className="text-center font-semibold text-white">Show answer</Text>
        </Pressable>
      )}
    </View>
  );
}

function GradeButton({
  label,
  onPress,
  variant,
}: {
  label: string;
  onPress: () => void;
  variant?: 'good' | 'bad';
}) {
  const bg = variant === 'good' ? 'bg-emerald-600' : variant === 'bad' ? 'bg-red-600' : 'bg-zinc-700';
  return (
    <Pressable onPress={onPress} className={`flex-1 rounded-md ${bg} px-3 py-3 active:opacity-80`}>
      <Text className="text-center text-sm font-semibold text-white">{label}</Text>
    </Pressable>
  );
}
