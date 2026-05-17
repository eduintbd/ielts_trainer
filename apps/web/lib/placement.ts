export type QuestionType = 'grammar' | 'vocabulary' | 'reading';

export interface PlacementQuestion {
  id: string;
  type: QuestionType;
  question: string;
  passage?: string;
  options: [string, string, string, string];
  answer: number;
}

export type CefrLevel = 'A1-A2' | 'B1' | 'B2' | 'C1-C2';

export interface PlacementResult {
  score: number;
  total: number;
  level: CefrLevel;
  label: string;
  description: string;
  recommendedCourses: RecommendedCourse[];
}

export interface RecommendedCourse {
  exam: 'IELTS' | 'TOEFL' | 'PTE';
  tier: 'Foundation' | 'Intermediate' | 'Advanced';
  href: string;
  reason: string;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i] as T;
    copy[i] = copy[j] as T;
    copy[j] = tmp;
  }
  return copy;
}

// ─── Grammar Bank (100 questions) ───────────────────────────────────────────

export const GRAMMAR_BANK: PlacementQuestion[] = [
  { id: 'g1', type: 'grammar', question: 'She ___ at the library right now. She goes there every afternoon.', options: ['studies', 'is studying', 'studied', 'has studied'], answer: 1 },
  { id: 'g2', type: 'grammar', question: 'By the time he arrives, we ___ already eaten dinner.', options: ['have', 'will have', 'had', 'would have'], answer: 1 },
  { id: 'g3', type: 'grammar', question: 'If I ___ the prime minister, I would invest more in education.', options: ['am', 'was', 'were', 'would be'], answer: 2 },
  { id: 'g4', type: 'grammar', question: 'Neither the teacher nor the students ___ ready for the exam.', options: ['was', 'is', 'were', 'has been'], answer: 2 },
  { id: 'g5', type: 'grammar', question: 'He has been working at this company ___ five years.', options: ['since', 'for', 'during', 'from'], answer: 1 },
  { id: 'g6', type: 'grammar', question: 'The report ___ by the committee before the deadline.', options: ['reviewed', 'has reviewed', 'was reviewed', 'is reviewing'], answer: 2 },
  { id: 'g7', type: 'grammar', question: 'She would have passed the exam if she ___ harder.', options: ['studied', 'had studied', 'would study', 'has studied'], answer: 1 },
  { id: 'g8', type: 'grammar', question: 'I ___ my homework before the teacher collected it.', options: ['finish', 'finished', 'had finished', 'have finished'], answer: 2 },
  { id: 'g9', type: 'grammar', question: 'The doctor recommended that he ___ more rest.', options: ['gets', 'got', 'get', 'getting'], answer: 2 },
  { id: 'g10', type: 'grammar', question: 'The more you practice English, ___ you will become.', options: ['the more fluent', 'more fluent', 'most fluent', 'the most fluent'], answer: 0 },
  { id: 'g11', type: 'grammar', question: 'I ___ to Japan three times, but I\'ve never been to China.', options: ['went', 'have been', 'was', 'had gone'], answer: 1 },
  { id: 'g12', type: 'grammar', question: 'He said he ___ tired and wanted to go home.', options: ['is', 'was', 'has been', 'will be'], answer: 1 },
  { id: 'g13', type: 'grammar', question: 'She enjoys ___ novels in her free time.', options: ['read', 'to read', 'reading', 'to reading'], answer: 2 },
  { id: 'g14', type: 'grammar', question: '___ honest mistake is better than a deliberate lie.', options: ['A', 'An', 'The', 'Some'], answer: 1 },
  { id: 'g15', type: 'grammar', question: 'The man ___ called yesterday is my uncle.', options: ['which', 'whose', 'who', 'what'], answer: 2 },
  { id: 'g16', type: 'grammar', question: 'Passengers ___ fasten their seatbelts during takeoff.', options: ['should', 'might', 'must', 'would'], answer: 2 },
  { id: 'g17', type: 'grammar', question: 'English ___ as an official language in over 50 countries.', options: ['speaks', 'is spoken', 'spoke', 'has spoken'], answer: 1 },
  { id: 'g18', type: 'grammar', question: 'If it rains tomorrow, we ___ stay indoors.', options: ['would', 'will', 'should', 'might'], answer: 1 },
  { id: 'g19', type: 'grammar', question: 'She is very good at ___ solutions to complex problems.', options: ['find', 'found', 'to find', 'finding'], answer: 3 },
  { id: 'g20', type: 'grammar', question: 'I ___ here for three hours and I\'m exhausted.', options: ['sit', 'was sitting', 'have been sitting', 'sat'], answer: 2 },
  { id: 'g21', type: 'grammar', question: 'The famous poem ___ over a hundred years ago.', options: ['writes', 'was written', 'has written', 'written'], answer: 1 },
  { id: 'g22', type: 'grammar', question: 'Everyone on the team ___ their responsibilities seriously.', options: ['take', 'takes', 'are taking', 'have taken'], answer: 1 },
  { id: 'g23', type: 'grammar', question: 'This assignment is ___ than the previous one.', options: ['more challenging', 'most challenging', 'much challenged', 'challenging more'], answer: 0 },
  { id: 'g24', type: 'grammar', question: 'She is ___ student in the entire class.', options: ['most intelligent', 'more intelligent', 'the most intelligent', 'the more intelligent'], answer: 2 },
  { id: 'g25', type: 'grammar', question: 'She asked me where I ___ for the holidays.', options: ['am going', 'will go', 'was going', 'have gone'], answer: 2 },
  { id: 'g26', type: 'grammar', question: 'He had his broken bicycle ___.', options: ['fix', 'fixing', 'to fix', 'fixed'], answer: 3 },
  { id: 'g27', type: 'grammar', question: 'I wish I ___ more free time to pursue my hobbies.', options: ['have', 'had', 'will have', 'would have'], answer: 1 },
  { id: 'g28', type: 'grammar', question: 'By age five, most children ___ recognise and write their own name.', options: ['must', 'should', 'can', 'might'], answer: 2 },
  { id: 'g29', type: 'grammar', question: 'This time next week, I ___ on a beach enjoying my vacation.', options: ['lie', 'will lie', 'will be lying', 'have been lying'], answer: 2 },
  { id: 'g30', type: 'grammar', question: 'While I was studying, someone ___ on the door.', options: ['is knocking', 'knocked', 'had knocked', 'knocks'], answer: 1 },
  { id: 'g31', type: 'grammar', question: 'She went to the market ___ fresh vegetables for dinner.', options: ['for buy', 'so that buy', 'to buy', 'buying'], answer: 2 },
  { id: 'g32', type: 'grammar', question: 'Either the manager or the board members ___ responsible for the decision.', options: ['is', 'was', 'are', 'has been'], answer: 2 },
  { id: 'g33', type: 'grammar', question: 'People ___ believe the earth was the centre of the universe.', options: ['use to', 'used to', 'were used to', 'would use'], answer: 1 },
  { id: 'g34', type: 'grammar', question: 'The project proposal ___ before Friday\'s meeting.', options: ['must submit', 'must be submitted', 'must submitting', 'must have submitting'], answer: 1 },
  { id: 'g35', type: 'grammar', question: 'Our flight ___ at 6 am tomorrow, so we need to leave by 4 am.', options: ['is departing', 'departs', 'will depart', 'depart'], answer: 1 },
  { id: 'g36', type: 'grammar', question: 'She ___ for over two hours before the results were announced.', options: ['was waiting', 'waited', 'has been waiting', 'had been waiting'], answer: 3 },
  { id: 'g37', type: 'grammar', question: 'It was ___ cold that schools across the city were closed.', options: ['too', 'very', 'so', 'such'], answer: 2 },
  { id: 'g38', type: 'grammar', question: 'The water in the pan is too hot ___.', options: ['to drink', 'for drinking', 'drink', 'drinking'], answer: 0 },
  { id: 'g39', type: 'grammar', question: 'You haven\'t submitted the assignment yet, ___?', options: ['did you', 'have you', 'don\'t you', 'aren\'t you'], answer: 1 },
  { id: 'g40', type: 'grammar', question: 'Rarely ___ such dedication in a student.', options: ['I have seen', 'have I seen', 'I see', 'I had seen'], answer: 1 },
  { id: 'g41', type: 'grammar', question: 'The new hospital ___ next year near the city centre.', options: ['will build', 'will be built', 'is building', 'builds'], answer: 1 },
  { id: 'g42', type: 'grammar', question: 'You ___ told me earlier about the change in plans.', options: ['should', 'should have', 'must', 'would have'], answer: 1 },
  { id: 'g43', type: 'grammar', question: 'My professor, ___ has published several books, is retiring this year.', options: ['which', 'that', 'who', 'whose'], answer: 2 },
  { id: 'g44', type: 'grammar', question: 'Both the president ___ the minister attended the opening ceremony.', options: ['as well as', 'and', 'or', 'nor'], answer: 1 },
  { id: 'g45', type: 'grammar', question: 'The new policy will not only save money ___ also improve efficiency.', options: ['and', 'but', 'or', 'yet'], answer: 1 },
  { id: 'g46', type: 'grammar', question: 'Despite ___ for three hours, she still felt nervous before the exam.', options: ['to prepare', 'prepare', 'preparing', 'prepared'], answer: 2 },
  { id: 'g47', type: 'grammar', question: '___ the weather was terrible, the outdoor concert went ahead as planned.', options: ['Because', 'Although', 'Since', 'As'], answer: 1 },
  { id: 'g48', type: 'grammar', question: 'The company ___ she works has offices in five countries.', options: ['that', 'for which', 'which', 'where'], answer: 1 },
  { id: 'g49', type: 'grammar', question: 'It was the manager ___ approved the budget, not the director.', options: ['that', 'which', 'who', 'whom'], answer: 2 },
  { id: 'g50', type: 'grammar', question: 'Several new roads ___ in the area over the past decade.', options: ['built', 'have built', 'have been built', 'are building'], answer: 2 },
  { id: 'g51', type: 'grammar', question: 'I ___ stayed up so late — I\'m exhausted this morning.', options: ['should have', 'shouldn\'t have', 'would have', 'might have'], answer: 1 },
  { id: 'g52', type: 'grammar', question: '___ students failed the test, but most passed with good grades.', options: ['Few', 'A few', 'Little', 'A little'], answer: 1 },
  { id: 'g53', type: 'grammar', question: 'There is ___ milk left in the fridge, enough for your tea.', options: ['few', 'a few', 'little', 'a little'], answer: 3 },
  { id: 'g54', type: 'grammar', question: 'It is essential ___ a healthy diet during exam preparation.', options: ['maintaining', 'to maintaining', 'to maintain', 'maintained'], answer: 2 },
  { id: 'g55', type: 'grammar', question: 'She spoke slowly ___ everyone could understand her explanation.', options: ['so that', 'in order', 'for that', 'so as'], answer: 0 },
  { id: 'g56', type: 'grammar', question: '___ she received her results, she called her parents to share the news.', options: ['Before', 'Until', 'As soon as', 'By the time'], answer: 2 },
  { id: 'g57', type: 'grammar', question: 'Have you eaten breakfast ___? You look tired this morning.', options: ['already', 'still', 'yet', 'just'], answer: 2 },
  { id: 'g58', type: 'grammar', question: 'I have ___ seen that film twice, so I\'ll stay home tonight.', options: ['yet', 'still', 'already', 'ever'], answer: 2 },
  { id: 'g59', type: 'grammar', question: '___ she practised every day, she still couldn\'t pronounce the word correctly.', options: ['So', 'Even though', 'Provided', 'In case'], answer: 1 },
  { id: 'g60', type: 'grammar', question: 'This application form ___ before the closing date.', options: ['must submit', 'must be submitted', 'must have submitted', 'must submitting'], answer: 1 },
  { id: 'g61', type: 'grammar', question: 'The librarian told us ___ quiet while others were studying.', options: ['to be', 'be', 'being', 'to being'], answer: 0 },
  { id: 'g62', type: 'grammar', question: '___ that the new policy will create thousands of new jobs.', options: ['It expects', 'It is expected', 'This is expected', 'There is expected'], answer: 1 },
  { id: 'g63', type: 'grammar', question: 'The coach encouraged the players ___ their best in every match.', options: ['do', 'doing', 'to do', 'done'], answer: 2 },
  { id: 'g64', type: 'grammar', question: 'She decided to take the train ___ drive through the heavy traffic.', options: ['instead', 'rather than', 'other than', 'more than'], answer: 1 },
  { id: 'g65', type: 'grammar', question: 'Take a jacket ___ the temperature drops in the evening.', options: ['if', 'when', 'in case', 'because'], answer: 2 },
  { id: 'g66', type: 'grammar', question: '___ you arrive before noon, you will be able to join the guided tour.', options: ['Unless', 'Provided that', 'In spite of', 'Because of'], answer: 1 },
  { id: 'g67', type: 'grammar', question: 'He passed all his exams, ___ made his parents very proud.', options: ['that', 'this', 'who', 'which'], answer: 3 },
  { id: 'g68', type: 'grammar', question: '___ the meeting, she went straight to the airport to catch her flight.', options: ['After finishing', 'Having finished', 'Finished', 'To finish'], answer: 1 },
  { id: 'g69', type: 'grammar', question: 'The instructions were too complicated ___ without a demonstration.', options: ['follow', 'to follow', 'following', 'for follow'], answer: 1 },
  { id: 'g70', type: 'grammar', question: 'Is she experienced enough ___ the team on her own?', options: ['manage', 'to manage', 'managing', 'managed'], answer: 1 },
  { id: 'g71', type: 'grammar', question: 'The committee ___ meeting every Monday to review progress reports.', options: ['are', 'is', 'were', 'have been'], answer: 1 },
  { id: 'g72', type: 'grammar', question: 'The project ran over budget; ___, several features had to be removed.', options: ['however', 'consequently', 'meanwhile', 'otherwise'], answer: 1 },
  { id: 'g73', type: 'grammar', question: 'The results are expected ___ by the end of next week.', options: ['announce', 'to announce', 'to be announced', 'being announced'], answer: 2 },
  { id: 'g74', type: 'grammar', question: '___ a new language takes time and consistent daily effort.', options: ['Learn', 'To learn', 'Learning', 'Learned'], answer: 2 },
  { id: 'g75', type: 'grammar', question: 'The scientist ___ research led to the discovery won the Nobel Prize.', options: ['who', 'which', 'whose', 'whom'], answer: 2 },
  { id: 'g76', type: 'grammar', question: 'She ___ be the new manager — she has her own office and staff.', options: ['could', 'should', 'must', 'might'], answer: 2 },
  { id: 'g77', type: 'grammar', question: 'It ___ snow later this evening, so dress warmly before going out.', options: ['will', 'shall', 'must', 'might'], answer: 3 },
  { id: 'g78', type: 'grammar', question: 'You can build vocabulary effectively ___ reading widely every day.', options: ['with', 'through', 'by', 'at'], answer: 2 },
  { id: 'g79', type: 'grammar', question: 'It was ___ beautiful sunset that everyone stopped to watch.', options: ['so', 'such', 'such a', 'so a'], answer: 2 },
  { id: 'g80', type: 'grammar', question: '___ the students nor the teacher was aware of the rule change.', options: ['Both', 'Either', 'Neither', 'Not only'], answer: 2 },
  { id: 'g81', type: 'grammar', question: 'Could you tell me where ___ the main library?', options: ['is', 'are', 'it is', 'is it'], answer: 2 },
  { id: 'g82', type: 'grammar', question: 'She ___ English since she enrolled in this school two years ago.', options: ['is studying', 'studied', 'has been studying', 'studies'], answer: 2 },
  { id: 'g83', type: 'grammar', question: 'He ___ fined for parking in the wrong area last week.', options: ['got', 'got to', 'was got', 'getting'], answer: 0 },
  { id: 'g84', type: 'grammar', question: 'I would rather ___ home tonight — I\'m not feeling well.', options: ['staying', 'to stay', 'stay', 'stayed'], answer: 2 },
  { id: 'g85', type: 'grammar', question: 'Hardly had I fallen asleep ___ my phone started ringing.', options: ['than', 'when', 'that', 'before'], answer: 1 },
  { id: 'g86', type: 'grammar', question: 'The doctor suggested ___ at least 30 minutes of exercise each day.', options: ['to do', 'doing', 'do', 'done'], answer: 1 },
  { id: 'g87', type: 'grammar', question: 'The film made me ___ about my own life choices.', options: ['think', 'to think', 'thinking', 'thought'], answer: 0 },
  { id: 'g88', type: 'grammar', question: 'They let the children ___ in the park until sunset.', options: ['to play', 'playing', 'play', 'played'], answer: 2 },
  { id: 'g89', type: 'grammar', question: 'You won\'t be able to enter the building ___ you have a valid ID.', options: ['if', 'when', 'unless', 'until'], answer: 2 },
  { id: 'g90', type: 'grammar', question: 'She spoke ___ she had lived in London all her life.', options: ['like', 'as if', 'as', 'that'], answer: 1 },
  { id: 'g91', type: 'grammar', question: 'The road outside our office ___ repaired this week.', options: ['is repairing', 'repairs', 'is being repaired', 'was repaired'], answer: 2 },
  { id: 'g92', type: 'grammar', question: 'By the time you read this, I ___ already left for the airport.', options: ['would', 'will have', 'have', 'will'], answer: 1 },
  { id: 'g93', type: 'grammar', question: 'She worked very hard for the promotion, and ___ her colleagues.', options: ['so did', 'so does', 'neither did', 'as did'], answer: 0 },
  { id: 'g94', type: 'grammar', question: '___ the exam, he felt relieved and went to celebrate with friends.', options: ['Completing', 'Having completed', 'To complete', 'Completed'], answer: 1 },
  { id: 'g95', type: 'grammar', question: 'He is the kind of person ___ always keeps their promises.', options: ['which', 'whose', 'who', 'what'], answer: 2 },
  { id: 'g96', type: 'grammar', question: 'The harder you work, ___ your chances of success will be.', options: ['the greater', 'greater', 'the greatest', 'more great'], answer: 0 },
  { id: 'g97', type: 'grammar', question: 'He talks about the project ___ he designed every part of it himself.', options: ['like', 'as if', 'as', 'so that'], answer: 1 },
  { id: 'g98', type: 'grammar', question: 'It is high time the government ___ action on air pollution.', options: ['takes', 'took', 'will take', 'has taken'], answer: 1 },
  { id: 'g99', type: 'grammar', question: 'No sooner ___ sat down than the fire alarm went off.', options: ['I had', 'had I', 'have I', 'I have'], answer: 1 },
  { id: 'g100', type: 'grammar', question: 'In order ___ pass the exam, she studied for twelve hours a day.', options: ['for', 'to', 'that', 'so'], answer: 1 },
];

// ─── Vocabulary Bank (100 questions) ────────────────────────────────────────

export const VOCAB_BANK: PlacementQuestion[] = [
  { id: 'v1', type: 'vocabulary', question: 'The word "benevolent" means:', options: ['aggressive', 'kind and generous', 'lazy', 'dishonest'], answer: 1 },
  { id: 'v2', type: 'vocabulary', question: 'Choose the synonym for "loquacious":', options: ['talkative', 'quiet', 'angry', 'confused'], answer: 0 },
  { id: 'v3', type: 'vocabulary', question: 'She is very ___: she always finds something positive even in bad situations.', options: ['pessimistic', 'cynical', 'optimistic', 'indifferent'], answer: 2 },
  { id: 'v4', type: 'vocabulary', question: 'The word "ephemeral" means:', options: ['lasting forever', 'very important', 'short-lived or temporary', 'extremely complex'], answer: 2 },
  { id: 'v5', type: 'vocabulary', question: 'Which word means "to make a bad situation worse"?', options: ['alleviate', 'mitigate', 'exacerbate', 'ameliorate'], answer: 2 },
  { id: 'v6', type: 'vocabulary', question: 'The word "ambiguous" means:', options: ['very clear', 'having more than one possible meaning', 'completely wrong', 'extremely important'], answer: 1 },
  { id: 'v7', type: 'vocabulary', question: 'A "diligent" student is one who:', options: ['is lazy and careless', 'works hard and carefully', 'asks too many questions', 'talks during class'], answer: 1 },
  { id: 'v8', type: 'vocabulary', question: 'Choose the antonym for "verbose":', options: ['wordy', 'talkative', 'concise', 'repetitive'], answer: 2 },
  { id: 'v9', type: 'vocabulary', question: 'The word "tenacious" means:', options: ['easily giving up', 'holding firmly to something', 'extremely tired', 'very happy'], answer: 1 },
  { id: 'v10', type: 'vocabulary', question: 'To "mitigate" a problem means to:', options: ['make it worse', 'ignore it completely', 'reduce its severity', 'cause it deliberately'], answer: 2 },
  { id: 'v11', type: 'vocabulary', question: 'An "eloquent" speaker is someone who:', options: ['speaks very quietly', 'expresses ideas fluently and persuasively', 'uses complicated jargon', 'speaks for too long'], answer: 1 },
  { id: 'v12', type: 'vocabulary', question: 'A "pragmatic" approach to a problem is:', options: ['idealistic and unrealistic', 'practical and focused on results', 'emotional and impulsive', 'theoretical and abstract'], answer: 1 },
  { id: 'v13', type: 'vocabulary', question: 'Something described as "inevitable" is:', options: ['easily avoidable', 'uncertain to happen', 'certain to happen regardless of efforts', 'happening very slowly'], answer: 2 },
  { id: 'v14', type: 'vocabulary', question: 'If someone feels "ambivalent" about a decision, they:', options: ['are completely sure about it', 'have mixed or contradictory feelings', 'strongly oppose it', 'feel very excited'], answer: 1 },
  { id: 'v15', type: 'vocabulary', question: 'Choose the most formal synonym for "begin":', options: ['start', 'launch', 'commence', 'open'], answer: 2 },
  { id: 'v16', type: 'vocabulary', question: 'Technology described as "obsolete" is:', options: ['cutting-edge and modern', 'extremely efficient', 'no longer in use or outdated', 'very expensive'], answer: 2 },
  { id: 'v17', type: 'vocabulary', question: 'Choose the antonym for "expand":', options: ['increase', 'enlarge', 'contract', 'extend'], answer: 2 },
  { id: 'v18', type: 'vocabulary', question: 'A "meticulous" person is someone who:', options: ['works very quickly', 'pays very careful attention to detail', 'tends to be disorganised', 'prefers working alone'], answer: 1 },
  { id: 'v19', type: 'vocabulary', question: 'A "profound" impact is one that is:', options: ['very minor and temporary', 'deep and far-reaching', 'unexpected and sudden', 'gradual and barely noticeable'], answer: 1 },
  { id: 'v20', type: 'vocabulary', question: 'To "alleviate" suffering means to:', options: ['make it worse', 'cause it deliberately', 'relieve or reduce it', 'record and document it'], answer: 2 },
  { id: 'v21', type: 'vocabulary', question: 'To "perceive" something means to:', options: ['deliberately ignore it', 'become aware of it through the senses or mind', 'disagree with it strongly', 'measure it scientifically'], answer: 1 },
  { id: 'v22', type: 'vocabulary', question: 'A "consensus" is:', options: ['a heated argument', 'a formal vote', 'general agreement among a group', 'a written contract'], answer: 2 },
  { id: 'v23', type: 'vocabulary', question: 'If prices "fluctuate", they:', options: ['remain completely stable', 'rise and fall irregularly', 'only increase', 'only decrease'], answer: 1 },
  { id: 'v24', type: 'vocabulary', question: 'A "substantial" improvement is one that is:', options: ['barely noticeable', 'of considerable size or significance', 'temporary and short-lived', 'negative and harmful'], answer: 1 },
  { id: 'v25', type: 'vocabulary', question: 'Which best defines "arbitrary"?', options: ['Based on careful reasoning and logic', 'Backed by scientific evidence', 'Based on random choice rather than reason', 'Widely agreed upon by experts'], answer: 2 },
  { id: 'v26', type: 'vocabulary', question: 'A "coherent" argument is one that is:', options: ['confusing and contradictory', 'logical and clearly structured', 'very long and detailed', 'supported only by opinions'], answer: 1 },
  { id: 'v27', type: 'vocabulary', question: 'To "collaborate" with someone means to:', options: ['compete against them', 'work together with them', 'criticise their work', 'copy their ideas'], answer: 1 },
  { id: 'v28', type: 'vocabulary', question: 'To "scrutinize" a document means to:', options: ['translate it', 'ignore it', 'examine it very carefully and critically', 'summarise it briefly'], answer: 2 },
  { id: 'v29', type: 'vocabulary', question: 'A "concise" report is one that:', options: ['contains a lot of repetition', 'is very long and detailed', 'gives information clearly in few words', 'uses very complex language'], answer: 2 },
  { id: 'v30', type: 'vocabulary', question: '"Innovation" in a field refers to:', options: ['copying existing methods', 'eliminating old practices without replacement', 'the introduction of new ideas or methods', 'the rejection of all technology'], answer: 2 },
  { id: 'v31', type: 'vocabulary', question: 'Choose the antonym for "transparent":', options: ['clear', 'obvious', 'opaque', 'honest'], answer: 2 },
  { id: 'v32', type: 'vocabulary', question: 'A region with "abundant" resources has:', options: ['a severe shortage', 'resources in large quantities', 'resources of poor quality', 'hard-to-access resources'], answer: 1 },
  { id: 'v33', type: 'vocabulary', question: 'A "skeptical" reader is one who:', options: ['believes everything they read', 'is not easily convinced and questions claims', 'reads very quickly', 'prefers fiction over non-fiction'], answer: 1 },
  { id: 'v34', type: 'vocabulary', question: 'Something "detrimental" to health is:', options: ['very beneficial', 'neutral in its effects', 'harmful or damaging', 'impossible to measure'], answer: 2 },
  { id: 'v35', type: 'vocabulary', question: 'To "persevere" in a task means to:', options: ['give up when it becomes difficult', 'complete it quickly without effort', 'continue despite difficulties', 'refuse to attempt it'], answer: 2 },
  { id: 'v36', type: 'vocabulary', question: 'An "impartial" judge is one who:', options: ['clearly favours one side', 'treats all sides fairly without bias', 'avoids making decisions', 'decides based on emotions'], answer: 1 },
  { id: 'v37', type: 'vocabulary', question: 'A "tedious" activity is one that is:', options: ['exciting and engaging', 'dangerous and risky', 'too long and boring', 'creative and original'], answer: 2 },
  { id: 'v38', type: 'vocabulary', question: 'An "articulate" presenter is one who:', options: ['speaks very slowly', 'expresses ideas clearly and fluently', 'relies heavily on notes', 'uses many hand gestures'], answer: 1 },
  { id: 'v39', type: 'vocabulary', question: 'The word "paramount" means:', options: ['completely irrelevant', 'more important than anything else', 'difficult to achieve', 'widely misunderstood'], answer: 1 },
  { id: 'v40', type: 'vocabulary', question: 'To "acknowledge" a mistake means to:', options: ['deny that it happened', 'repeat it again', 'admit or recognise it', 'blame others for it'], answer: 2 },
  { id: 'v41', type: 'vocabulary', question: '"Alacrity" refers to:', options: ['extreme laziness', 'great reluctance', 'eager willingness and speed', 'deep confusion'], answer: 2 },
  { id: 'v42', type: 'vocabulary', question: '"Brevity" in writing means:', options: ['wordiness and repetition', 'expressing things clearly and briefly', 'extreme complexity', 'use of technical terms'], answer: 1 },
  { id: 'v43', type: 'vocabulary', question: 'A "candid" opinion is one that is:', options: ['dishonest and misleading', 'indirect and vague', 'truthful and straightforward', 'overly complicated'], answer: 2 },
  { id: 'v44', type: 'vocabulary', question: 'A "daunting" task is one that seems:', options: ['simple and enjoyable', 'very quick to complete', 'difficult or intimidating', 'completely impossible'], answer: 2 },
  { id: 'v45', type: 'vocabulary', question: 'A "feasible" plan is one that is:', options: ['impossible to carry out', 'very expensive', 'possible and practical to implement', 'extremely risky'], answer: 2 },
  { id: 'v46', type: 'vocabulary', question: 'To "diminish" something means to:', options: ['increase it significantly', 'improve its quality', 'make it smaller or less important', 'duplicate it exactly'], answer: 2 },
  { id: 'v47', type: 'vocabulary', question: 'To "generate" electricity means to:', options: ['store it underground', 'consume it rapidly', 'produce or create it', 'measure its voltage'], answer: 2 },
  { id: 'v48', type: 'vocabulary', question: 'A "hypothesis" is:', options: ['a proven scientific law', 'a proposed explanation based on limited evidence', 'a detailed final report', 'an official government policy'], answer: 1 },
  { id: 'v49', type: 'vocabulary', question: 'To "impede" progress means to:', options: ['assist or speed it up', 'measure it precisely', 'delay or obstruct it', 'celebrate it publicly'], answer: 2 },
  { id: 'v50', type: 'vocabulary', question: 'To "infer" a meaning means to:', options: ['state it directly', 'measure it precisely', 'deduce it from evidence', 'ignore it completely'], answer: 2 },
  { id: 'v51', type: 'vocabulary', question: 'To "jeopardize" something means to:', options: ['protect it carefully', 'put it at risk of harm', 'improve it significantly', 'delay it temporarily'], answer: 1 },
  { id: 'v52', type: 'vocabulary', question: 'Something "legitimate" is:', options: ['illegal and forbidden', 'conforming to laws or accepted standards', 'very complicated to understand', 'highly unusual'], answer: 1 },
  { id: 'v53', type: 'vocabulary', question: 'A "meager" amount is one that is:', options: ['very generous and plentiful', 'of the highest quality', 'lacking in quantity or quality', 'extremely expensive'], answer: 2 },
  { id: 'v54', type: 'vocabulary', question: 'A "negligible" difference is:', options: ['extremely important', 'so small as to be unimportant', 'very difficult to understand', 'widely discussed'], answer: 1 },
  { id: 'v55', type: 'vocabulary', question: 'An "objective" assessment is one that is:', options: ['strongly influenced by personal opinion', 'not influenced by personal feelings or bias', 'based only on tradition', 'difficult to understand'], answer: 1 },
  { id: 'v56', type: 'vocabulary', question: 'Something "perpetual" is:', options: ['happening once only', 'very recent and new', 'never-ending or continuous', 'occurring only occasionally'], answer: 2 },
  { id: 'v57', type: 'vocabulary', question: 'To "reinforce" an argument means to:', options: ['challenge or question it', 'ignore it completely', 'strengthen or support it', 'simplify it'], answer: 2 },
  { id: 'v58', type: 'vocabulary', question: 'A "remedy" for a problem is:', options: ['a cause of the problem', 'a solution or cure for it', 'an analysis of the problem', 'an increase in the problem'], answer: 1 },
  { id: 'v59', type: 'vocabulary', question: 'A "rigorous" approach is one that is:', options: ['extremely casual and relaxed', 'extremely thorough and careful', 'very quick and efficient', 'based entirely on opinions'], answer: 1 },
  { id: 'v60', type: 'vocabulary', question: 'To "speculate" about something means to:', options: ['prove it with certainty', 'measure it carefully', 'form theories without firm evidence', 'deny that it exists'], answer: 2 },
  { id: 'v61', type: 'vocabulary', question: 'The antonym of "trivial" is:', options: ['minor', 'significant', 'boring', 'simple'], answer: 1 },
  { id: 'v62', type: 'vocabulary', question: 'Something "unprecedented" has:', options: ['happened many times before', 'never happened or been done before', 'been thoroughly studied', 'been widely expected'], answer: 1 },
  { id: 'v63', type: 'vocabulary', question: 'To "validate" a result means to:', options: ['reject or dismiss it', 'prove or confirm its accuracy', 'ignore it completely', 'delay it indefinitely'], answer: 1 },
  { id: 'v64', type: 'vocabulary', question: 'A "wary" person is one who:', options: ['is completely fearless', 'trusts everyone easily', 'is cautious about possible dangers', 'acts without thinking'], answer: 2 },
  { id: 'v65', type: 'vocabulary', question: 'To "yield" results means to:', options: ['prevent results from occurring', 'produce or provide results', 'measure results carefully', 'ignore results'], answer: 1 },
  { id: 'v66', type: 'vocabulary', question: '"Zeal" for a cause refers to:', options: ['complete indifference', 'mild passing interest', 'great enthusiasm and energy', 'strong opposition'], answer: 2 },
  { id: 'v67', type: 'vocabulary', question: 'To "accumulate" wealth means to:', options: ['spend it quickly', 'lose it gradually', 'gather it over a period of time', 'share it equally'], answer: 2 },
  { id: 'v68', type: 'vocabulary', question: 'A "beneficial" outcome is one that:', options: ['causes harm', 'has no effect at all', 'results in good or advantage', 'is very expensive'], answer: 2 },
  { id: 'v69', type: 'vocabulary', question: 'A "comprehensive" study is one that:', options: ['focuses on one narrow area', 'covers all aspects thoroughly', 'is very brief and simple', 'is conducted in secret'], answer: 1 },
  { id: 'v70', type: 'vocabulary', question: 'To "deduce" a conclusion means to:', options: ['guess it randomly', 'arrive at it through logic and reasoning', 'ignore it', 'invent it without basis'], answer: 1 },
  { id: 'v71', type: 'vocabulary', question: 'Something "elusive" is:', options: ['very easy to find', 'difficult to find or achieve', 'extremely common', 'very well understood'], answer: 1 },
  { id: 'v72', type: 'vocabulary', question: 'To "facilitate" a process means to:', options: ['complicate or obstruct it', 'make it easier', 'ignore it', 'repeat it unnecessarily'], answer: 1 },
  { id: 'v73', type: 'vocabulary', question: 'A "hierarchy" is:', options: ['a system where everyone is equal', 'a system ranked from highest to lowest', 'a random collection of ideas', 'a temporary social structure'], answer: 1 },
  { id: 'v74', type: 'vocabulary', question: 'Something "imminent" is:', options: ['in the distant future', 'unlikely to ever happen', 'about to happen very soon', 'happening very slowly'], answer: 2 },
  { id: 'v75', type: 'vocabulary', question: 'To "quantify" something means to:', options: ['describe it in general terms', 'express it as a number or quantity', 'question its importance', 'hide it from view'], answer: 1 },
  { id: 'v76', type: 'vocabulary', question: 'A "resilient" community is one that:', options: ['easily collapses under pressure', 'avoids all challenges', 'recovers quickly from difficulties', 'never faces any problems'], answer: 2 },
  { id: 'v77', type: 'vocabulary', question: 'If two words are "synonymous", they:', options: ['have opposite meanings', 'have the same or very similar meanings', 'come from different languages', 'have no connection at all'], answer: 1 },
  { id: 'v78', type: 'vocabulary', question: 'To "undermine" confidence means to:', options: ['build it up steadily', 'measure it accurately', 'gradually weaken or damage it', 'publicly praise it'], answer: 2 },
  { id: 'v79', type: 'vocabulary', question: 'A "viable" solution is one that:', options: ['is impossible to implement', 'is capable of working successfully', 'causes more problems than it solves', 'has never been tried before'], answer: 1 },
  { id: 'v80', type: 'vocabulary', question: 'To "withstand" pressure means to:', options: ['collapse under it', 'avoid it entirely', 'remain undamaged or unaffected by it', 'measure it precisely'], answer: 2 },
  { id: 'v81', type: 'vocabulary', question: 'To "advocate" for a cause means to:', options: ['strongly oppose it', 'publicly support or recommend it', 'remain neutral about it', 'secretly undermine it'], answer: 1 },
  { id: 'v82', type: 'vocabulary', question: '"Bias" in reporting refers to:', options: ['complete accuracy and fairness', 'a prejudice that distorts judgment', 'a high level of detail', 'an official government viewpoint'], answer: 1 },
  { id: 'v83', type: 'vocabulary', question: 'A "conviction" is:', options: ['a passing thought', 'a firmly held belief', 'a minor preference', 'a temporary feeling'], answer: 1 },
  { id: 'v84', type: 'vocabulary', question: 'A "disparity" between two things is:', options: ['a close similarity', 'a great difference', 'a small disagreement', 'a shared quality'], answer: 1 },
  { id: 'v85', type: 'vocabulary', question: '"Erosion" of rights refers to:', options: ['a sudden removal of rights', 'a strengthening of rights', 'a gradual wearing away of rights', 'a formal recognition of rights'], answer: 2 },
  { id: 'v86', type: 'vocabulary', question: 'A "mandate" is:', options: ['an informal suggestion', 'a polite request', 'an official instruction or authority to act', 'a personal preference'], answer: 2 },
  { id: 'v87', type: 'vocabulary', question: 'A "novel" approach is one that is:', options: ['very old and traditional', 'new and original', 'widely known and familiar', 'borrowed from another culture'], answer: 1 },
  { id: 'v88', type: 'vocabulary', question: 'To "prioritise" tasks means to:', options: ['treat all tasks as equally important', 'rank them in order of importance', 'delay all of them', 'eliminate the least important ones immediately'], answer: 1 },
  { id: 'v89', type: 'vocabulary', question: 'A "sector" of the economy refers to:', options: ['a geographical region', 'a distinct part or division of the economy', 'a government policy document', 'a financial report'], answer: 1 },
  { id: 'v90', type: 'vocabulary', question: '"Autonomy" refers to:', options: ['dependence on others for decisions', 'freedom to make one\'s own decisions', 'strict obedience to rules', 'financial independence only'], answer: 1 },
  { id: 'v91', type: 'vocabulary', question: 'To "assert" something means to:', options: ['deny it firmly', 'question it carefully', 'state it confidently and forcefully', 'agree with it reluctantly'], answer: 2 },
  { id: 'v92', type: 'vocabulary', question: 'A "chronic" illness is one that is:', options: ['sudden and very brief', 'extremely painful only', 'lasting for a long time', 'easy to treat immediately'], answer: 2 },
  { id: 'v93', type: 'vocabulary', question: 'Something "derived" from a source:', options: ['has no connection to that source', 'is completely opposite to it', 'originated or came from it', 'replaced it entirely'], answer: 2 },
  { id: 'v94', type: 'vocabulary', question: '"Empirical" evidence is based on:', options: ['personal opinion and emotion', 'ancient tradition only', 'observation and experiment', 'theoretical models only'], answer: 2 },
  { id: 'v95', type: 'vocabulary', question: 'Choose the antonym for "accelerate":', options: ['increase', 'rush', 'decelerate', 'move forward'], answer: 2 },
  { id: 'v96', type: 'vocabulary', question: 'Something "integral" to a system is:', options: ['completely unnecessary', 'a small optional part', 'essential and fundamental to it', 'added later as an afterthought'], answer: 2 },
  { id: 'v97', type: 'vocabulary', question: 'To "modify" something means to:', options: ['destroy it completely', 'make partial changes to it', 'copy it exactly', 'ignore it completely'], answer: 1 },
  { id: 'v98', type: 'vocabulary', question: '"Rhetoric" refers to:', options: ['a branch of mathematics', 'the art of effective or persuasive speaking and writing', 'a form of physical exercise', 'scientific data and statistics'], answer: 1 },
  { id: 'v99', type: 'vocabulary', question: 'A "sustainable" practice can:', options: ['only be done once', 'be maintained long-term without harming resources', 'only benefit wealthy people', 'be done very quickly and cheaply'], answer: 1 },
  { id: 'v100', type: 'vocabulary', question: 'To "contradict" a statement means to:', options: ['agree with it strongly', 'support it with evidence', 'deny or oppose it directly', 'repeat it in different words'], answer: 2 },
];

// ─── Reading Bank (20 passages × 5 questions = 100 reading questions) ────────

const P1 = `Bangladesh has made remarkable progress in reducing poverty over the past two decades. Economic growth averaging 6–7% annually has lifted millions out of extreme poverty. The ready-made garments industry remains the backbone of exports, while remittances from overseas workers provide a vital second pillar. However, challenges remain — the country faces significant vulnerability to climate change and persistent income inequality, particularly between urban and rural areas.`;

const P2 = `Bangladesh's technology sector has emerged as one of the fastest-growing industries in the country. With over 650,000 IT professionals and a young, tech-savvy population, the country is positioning itself as a leading destination for IT outsourcing in South Asia. The government's "Digital Bangladesh" initiative, launched in 2009, has played a crucial role in expanding internet access and digital literacy. Software exports have grown at over 30% annually in recent years. However, the sector still faces challenges including inadequate infrastructure, power outages, and a shortage of highly specialised engineers.`;

const P3 = `Climate change poses one of the greatest threats to developing nations, despite these countries contributing relatively little to global greenhouse gas emissions. Rising sea levels threaten coastal communities, while increasingly frequent droughts and floods disrupt agricultural production. In South Asia, the melting of Himalayan glaciers is expected to cause severe water shortages in coming decades. International climate agreements have pledged financial support for adaptation measures in vulnerable nations, but the gap between promised and actual funding remains significant. Scientists argue that without immediate reductions in global emissions, the human and economic costs will be catastrophic.`;

const P4 = `Education is widely regarded as the most powerful tool for breaking the cycle of poverty. Countries that invest heavily in primary and secondary education consistently demonstrate higher rates of economic growth and social mobility. Girls' education in particular yields significant returns: research shows that each additional year of schooling increases a girl's future earnings by up to 10%. However, in many developing nations, quality education remains inaccessible due to inadequate infrastructure, teacher shortages, and the high opportunity cost of keeping children in school rather than contributing to family income. International organisations such as UNESCO argue that addressing these barriers requires not only increased funding but also policy reforms that make education relevant to local economic needs.`;

const P5 = `Antibiotic resistance is one of the most serious threats to global public health. When bacteria develop resistance to antibiotics, common infections that were once easily treatable can become life-threatening. The overuse and misuse of antibiotics — including taking them for viral infections and failing to complete prescribed courses — are the primary drivers of resistance. The World Health Organization has declared antibiotic resistance a global health emergency, warning that without urgent action, routine surgical procedures could become far more dangerous. Experts argue that reducing unnecessary prescriptions and investing in new drug research are both essential responses.`;

const P6 = `Psychologist Carol Dweck introduced the concept of the "growth mindset" — the belief that intelligence and abilities can be developed through dedication and hard work. This contrasts with a "fixed mindset", where people believe their qualities are innate and unchangeable. Research shows that students who adopt a growth mindset tend to embrace challenges, persist through setbacks, and ultimately achieve more. Schools around the world have begun incorporating growth mindset principles into their teaching, with encouraging results. Critics, however, argue that mindset alone is insufficient without also addressing wider social and economic inequalities.`;

const P7 = `The Industrial Revolution, which began in Britain in the mid-18th century, transformed human society more rapidly than any previous period in history. The shift from agricultural to manufacturing economies led to mass migration from rural areas to cities, dramatically changing patterns of work and family life. New technologies such as the steam engine and mechanical loom enabled mass production on an unprecedented scale. However, early industrialisation came at a heavy social cost: child labour was widespread, working conditions were often dangerous, and urban poverty increased significantly. The Industrial Revolution ultimately laid the foundations for the modern global economy.`;

const P8 = `Plastic pollution has become one of the most visible environmental crises of our time. Each year, approximately eight million tonnes of plastic enter the world's oceans, threatening marine wildlife and entering the food chain. Unlike organic materials, most plastics do not biodegrade but instead break down into tiny microplastics now found everywhere, from the deepest ocean trenches to the peaks of the Himalayas. While recycling programmes have expanded in many countries, less than 10% of all plastic ever produced has been recycled. Experts argue that reducing plastic production at the source, rather than relying on recycling alone, is the most effective strategy.`;

const P9 = `Smart cities use digital technology and data collection to improve urban services and quality of life for residents. Sensors embedded in infrastructure monitor traffic flow, energy consumption, and waste management in real time, allowing authorities to respond efficiently to problems. Singapore, Barcelona, and Amsterdam are frequently cited as leading examples of smart city development. However, the widespread use of surveillance technology raises significant concerns about privacy and data security. Critics also argue that the benefits of smart city technology may not be equally distributed, and that vulnerable communities are often left behind.`;

const P10 = `The Mediterranean diet, characterised by high consumption of vegetables, fruits, whole grains, legumes, nuts, and olive oil, has been widely praised for its health benefits. Numerous studies link this dietary pattern with reduced risk of heart disease, diabetes, and certain cancers. The diet includes moderate amounts of fish and poultry, and limits red meat and processed foods. UNESCO recognised the Mediterranean diet as an Intangible Cultural Heritage in 2013. Critics note that increasing globalisation and changing lifestyles have made it harder for people in Mediterranean countries to maintain traditional eating habits.`;

const P11 = `Regular physical activity is one of the most important factors in maintaining good health throughout life. The World Health Organization recommends that adults engage in at least 150 minutes of moderate-intensity aerobic exercise per week. Physical activity reduces the risk of cardiovascular disease, type 2 diabetes, and several types of cancer, while also improving mental health and cognitive function. Despite these well-documented benefits, the majority of adults in many countries fail to meet recommended activity levels, largely due to sedentary work and screen-based leisure. Public health campaigns and urban planning that encourages walking and cycling have shown promise in reversing this trend.`;

const P12 = `Social media platforms have fundamentally changed how people communicate, share information, and form communities. With over four billion users globally, platforms such as Facebook, Instagram, and TikTok have become central to modern social life. Research suggests that while social media enables people to maintain relationships across distances, excessive use has been linked to increased anxiety, depression, and feelings of inadequacy, particularly among teenagers. The spread of misinformation through social media has become a major concern for public health and democratic processes. Several governments have introduced or are considering regulations to address these harms.`;

const P13 = `Biodiversity — the variety of life on Earth — is declining at an alarming rate. Scientists estimate that the current rate of species extinction is up to 1,000 times higher than the natural background rate, leading some researchers to describe the present era as the sixth mass extinction. Habitat destruction, pollution, climate change, invasive species, and overexploitation of natural resources are the primary drivers. The loss of biodiversity threatens ecosystems that humans rely on for food, clean water, and climate regulation. International agreements such as the Convention on Biological Diversity aim to protect remaining biodiversity, but experts warn that current commitments are insufficient.`;

const P14 = `Space exploration has yielded extraordinary scientific discoveries and technological advances since the launch of Sputnik in 1957. The Apollo programme's moon landings, the Hubble Space Telescope, and Mars rovers have transformed our understanding of the universe. More recently, private companies such as SpaceX and Blue Origin have entered the space industry, significantly reducing the cost of launching satellites and spacecraft. Critics question whether vast resources devoted to space exploration would be better spent on pressing problems on Earth. Supporters counter that space technologies have generated practical benefits including GPS navigation, weather forecasting, and improved communication systems.`;

const P15 = `Artificial intelligence is rapidly transforming industries from healthcare and finance to transportation and education. Machine learning algorithms can now diagnose medical conditions with accuracy comparable to trained physicians, detect financial fraud in milliseconds, and navigate vehicles autonomously. These advances offer enormous potential benefits, but also raise serious concerns. Automation driven by AI is expected to displace millions of jobs in coming decades, disproportionately affecting workers in routine and manual roles. Ethical concerns surround facial recognition technology, algorithmic bias, and the concentration of AI capabilities in a small number of large technology companies.`;

const P16 = `International migration has reached historic levels, driven by conflict, economic inequality, climate change, and the search for better opportunities. The United Nations estimates that over 280 million people currently live outside their country of birth. While migration brings significant economic benefits to both sending and receiving countries through remittances and skills transfer, it also creates social and political tensions in host communities. Irregular migration across dangerous routes has cost tens of thousands of lives. Many experts call for safe and legal pathways for migration, and greater international cooperation to manage global mobility humanely.`;

const P17 = `The global transition to renewable energy, particularly solar and wind power, has accelerated dramatically over the past decade. The cost of solar electricity has fallen by over 90% since 2010, making it the cheapest source of electricity in history in many parts of the world. This rapid growth has been driven by government subsidies, technological innovation, and corporate sustainability commitments. However, the intermittent nature of solar and wind power — which depends on sunlight and weather — presents a significant challenge for grid reliability. Advances in battery storage technology are widely considered essential to achieving a fully renewable energy system.`;

const P18 = `Fresh water is one of Earth's most critical resources, yet it is increasingly scarce. Only 3% of the world's water is fresh, and much of that is locked in glaciers or underground. Growing populations, agricultural demand, and climate change are placing unprecedented pressure on freshwater supplies. The United Nations predicts that by 2025, two thirds of the world's population could face water shortages. Agriculture accounts for approximately 70% of global freshwater use, making irrigation efficiency a priority. Experts argue that conservation, improved infrastructure, and international cooperation on shared water resources are urgently needed.`;

const P19 = `The world's oceans cover over 70% of Earth's surface and support extraordinary biodiversity. They regulate global climate, absorb vast amounts of carbon dioxide, and provide food and livelihoods for billions of people. However, oceans face multiple threats including overfishing, plastic pollution, rising temperatures, and ocean acidification caused by increased CO2 absorption. Marine protected areas have been established to conserve critical habitats, but currently cover only about 8% of the world's oceans. Scientists and conservation groups are calling for protection of at least 30% of the ocean by 2030 to allow ecosystems to recover.`;

const P20 = `Cultural heritage encompasses the traditions, languages, monuments, and artefacts that communities inherit from past generations. UNESCO's World Heritage List currently includes over 1,100 sites of outstanding universal value. Heritage sites contribute significantly to tourism and local economies while fostering a sense of identity and belonging. However, heritage is increasingly threatened by urbanisation, conflict, climate change, and inadequate preservation funding. Digital technology offers new possibilities, including 3D scanning of monuments and virtual museum experiences. Experts stress that protecting intangible heritage — such as music, crafts, and oral traditions — is as important as conserving physical sites.`;

export const READING_BANK: Array<{ passage: string; questions: PlacementQuestion[] }> = [
  {
    passage: P1,
    questions: [
      { id: 'r1_1', type: 'reading', passage: P1, question: "Bangladesh's average annual economic growth has been approximately:", options: ['4–5%', '5–6%', '6–7%', '7–8%'], answer: 2 },
      { id: 'r1_2', type: 'reading', passage: P1, question: "The passage describes Bangladesh's poverty reduction as:", options: ['minimal', 'remarkable', 'nonexistent', 'disappointing'], answer: 1 },
      { id: 'r1_3', type: 'reading', passage: P1, question: 'Which sector does the passage call the "backbone of exports"?', options: ['agriculture', 'technology services', 'ready-made garments', 'tourism'], answer: 2 },
      { id: 'r1_4', type: 'reading', passage: P1, question: 'Which of the following is NOT mentioned as a challenge facing Bangladesh?', options: ['climate change vulnerability', 'income inequality', 'youth unemployment', 'urban-rural gap'], answer: 2 },
      { id: 'r1_5', type: 'reading', passage: P1, question: 'According to the passage, remittances serve as:', options: ['the primary source of national income', 'a vital second pillar alongside garment exports', 'a declining contributor to the economy', 'the main driver of poverty reduction'], answer: 1 },
    ],
  },
  {
    passage: P2,
    questions: [
      { id: 'r2_1', type: 'reading', passage: P2, question: 'The number of IT professionals in Bangladesh is approximately:', options: ['450,000', '550,000', '650,000', '750,000'], answer: 2 },
      { id: 'r2_2', type: 'reading', passage: P2, question: 'The "Digital Bangladesh" initiative was launched in:', options: ['2005', '2007', '2009', '2011'], answer: 2 },
      { id: 'r2_3', type: 'reading', passage: P2, question: "The passage describes Bangladesh's technology sector as:", options: ['stable but slow-growing', 'one of the fastest-growing industries', 'declining due to competition', 'heavily dependent on foreign investment'], answer: 1 },
      { id: 'r2_4', type: 'reading', passage: P2, question: 'Software exports from Bangladesh have been growing at approximately:', options: ['over 10% annually', 'over 20% annually', 'over 30% annually', 'over 40% annually'], answer: 2 },
      { id: 'r2_5', type: 'reading', passage: P2, question: "Which of the following is NOT mentioned as a challenge for Bangladesh's tech sector?", options: ['inadequate infrastructure', 'power outages', 'shortage of specialists', 'poor English proficiency'], answer: 3 },
    ],
  },
  {
    passage: P3,
    questions: [
      { id: 'r3_1', type: 'reading', passage: P3, question: 'Which group contributes relatively little to greenhouse gas emissions?', options: ['industrialised countries', 'island nations', 'developing nations', 'South Asian countries specifically'], answer: 2 },
      { id: 'r3_2', type: 'reading', passage: P3, question: 'What will likely cause water shortages in South Asia?', options: ['increased rainfall', 'overuse of groundwater', 'melting of Himalayan glaciers', 'rapid urbanisation'], answer: 2 },
      { id: 'r3_3', type: 'reading', passage: P3, question: 'International climate agreements have:', options: ['successfully delivered all promised funding', 'been rejected by developing nations', 'pledged financial support for adaptation measures', 'focused only on reducing emissions'], answer: 2 },
      { id: 'r3_4', type: 'reading', passage: P3, question: 'Which of the following is NOT mentioned as an effect of climate change?', options: ['rising sea levels', 'more frequent droughts', 'loss of biodiversity', 'disruption of agriculture'], answer: 2 },
      { id: 'r3_5', type: 'reading', passage: P3, question: 'The passage suggests the gap between promised and actual climate funding is:', options: ['smaller than scientists expected', 'significant and problematic', 'fully resolved', 'only affecting wealthy nations'], answer: 1 },
    ],
  },
  {
    passage: P4,
    questions: [
      { id: 'r4_1', type: 'reading', passage: P4, question: 'What does the passage identify as the most powerful tool for breaking the cycle of poverty?', options: ['microfinance', 'healthcare investment', 'education', 'infrastructure development'], answer: 2 },
      { id: 'r4_2', type: 'reading', passage: P4, question: "Each additional year of schooling can increase a girl's future earnings by:", options: ['up to 5%', 'up to 10%', 'up to 15%', 'up to 20%'], answer: 1 },
      { id: 'r4_3', type: 'reading', passage: P4, question: 'Which of the following is NOT mentioned as a barrier to education in developing nations?', options: ['inadequate infrastructure', 'teacher shortages', 'lack of student motivation', 'high opportunity cost'], answer: 2 },
      { id: 'r4_4', type: 'reading', passage: P4, question: 'According to UNESCO, what should accompany increased funding?', options: ['stricter school attendance laws', 'policy reforms relevant to local economic needs', 'foreign teachers and volunteers', 'reduced school hours'], answer: 1 },
      { id: 'r4_5', type: 'reading', passage: P4, question: 'Countries investing heavily in education show:', options: ['short-term gains only', 'reduced need for international aid', 'higher economic growth and social mobility', 'greater dependence on foreign investment'], answer: 2 },
    ],
  },
  {
    passage: P5,
    questions: [
      { id: 'r5_1', type: 'reading', passage: P5, question: 'The passage describes antibiotic resistance as:', options: ['one of the most serious threats to global public health', 'a minor inconvenience to healthcare', 'a problem only in developing countries', 'a challenge science has already solved'], answer: 0 },
      { id: 'r5_2', type: 'reading', passage: P5, question: 'What can happen when bacteria develop resistance?', options: ['all diseases disappear', 'common infections can become life-threatening', 'hospitals become overcrowded', 'patients recover faster'], answer: 1 },
      { id: 'r5_3', type: 'reading', passage: P5, question: 'Which is NOT mentioned as a cause of antibiotic resistance?', options: ['taking antibiotics for viral infections', 'failing to complete prescribed courses', 'contaminated water supplies', 'overuse of antibiotics'], answer: 2 },
      { id: 'r5_4', type: 'reading', passage: P5, question: 'How has the WHO described antibiotic resistance?', options: ['a global health emergency', 'a solved problem', 'a minor public health issue', 'a natural evolutionary process'], answer: 0 },
      { id: 'r5_5', type: 'reading', passage: P5, question: 'What does the passage suggest as a solution?', options: ['banning all antibiotics', 'increasing global prescriptions', 'reducing unnecessary prescriptions and investing in new drugs', 'using antibiotics preventively for all illnesses'], answer: 2 },
    ],
  },
  {
    passage: P6,
    questions: [
      { id: 'r6_1', type: 'reading', passage: P6, question: 'Who introduced the concept of the "growth mindset"?', options: ['Albert Bandura', 'Jean Piaget', 'Carol Dweck', 'Howard Gardner'], answer: 2 },
      { id: 'r6_2', type: 'reading', passage: P6, question: 'A "fixed mindset" holds that qualities are:', options: ['developed through hard work', 'innate and unchangeable', 'improved through coaching', 'influenced mainly by environment'], answer: 1 },
      { id: 'r6_3', type: 'reading', passage: P6, question: 'Students with a growth mindset tend to:', options: ['embrace challenges and persist through setbacks', 'avoid any form of competition', 'prefer easier tasks only', 'rely entirely on natural talent'], answer: 0 },
      { id: 'r6_4', type: 'reading', passage: P6, question: 'What do critics say about the growth mindset?', options: ['it has no scientific basis', 'it only works for adults', 'schools should ban it', 'mindset alone is insufficient without addressing inequalities'], answer: 3 },
      { id: 'r6_5', type: 'reading', passage: P6, question: 'The passage describes school results of growth mindset programmes as:', options: ['disappointing', 'encouraging', 'mixed and inconclusive', 'harmful to students'], answer: 1 },
    ],
  },
  {
    passage: P7,
    questions: [
      { id: 'r7_1', type: 'reading', passage: P7, question: 'Where did the Industrial Revolution begin?', options: ['France', 'Britain', 'Germany', 'the United States'], answer: 1 },
      { id: 'r7_2', type: 'reading', passage: P7, question: 'When did the Industrial Revolution begin?', options: ['mid-18th century', 'early 19th century', 'late 17th century', 'early 20th century'], answer: 0 },
      { id: 'r7_3', type: 'reading', passage: P7, question: 'Which technology is mentioned in the passage?', options: ['the printing press', 'the telegraph', 'the steam engine', 'the electric motor'], answer: 2 },
      { id: 'r7_4', type: 'reading', passage: P7, question: 'Which is NOT mentioned as a negative consequence of industrialisation?', options: ['widespread child labour', 'dangerous working conditions', 'increased urban poverty', 'environmental pollution'], answer: 3 },
      { id: 'r7_5', type: 'reading', passage: P7, question: 'The Industrial Revolution laid the foundations for:', options: ['democratic government', 'universal education', 'the modern global economy', 'space exploration'], answer: 2 },
    ],
  },
  {
    passage: P8,
    questions: [
      { id: 'r8_1', type: 'reading', passage: P8, question: 'How much plastic enters the oceans each year?', options: ['approximately two million tonnes', 'approximately eight million tonnes', 'approximately eighty million tonnes', 'approximately eight billion tonnes'], answer: 1 },
      { id: 'r8_2', type: 'reading', passage: P8, question: 'What do plastics break down into?', options: ['harmless water molecules', 'organic compost', 'microplastics', 'biodegradable compounds'], answer: 2 },
      { id: 'r8_3', type: 'reading', passage: P8, question: 'What percentage of all plastic produced has been recycled?', options: ['less than 10%', 'about 50%', 'more than 75%', 'exactly 25%'], answer: 0 },
      { id: 'r8_4', type: 'reading', passage: P8, question: 'Where are microplastics found?', options: ['only in coastal waters', 'mainly in developed countries', 'only in urban areas', 'everywhere from ocean trenches to mountain peaks'], answer: 3 },
      { id: 'r8_5', type: 'reading', passage: P8, question: 'What do experts consider the most effective strategy against plastic pollution?', options: ['expanding recycling programmes', 'reducing plastic production at the source', 'cleaning ocean surfaces only', 'banning all plastic immediately'], answer: 1 },
    ],
  },
  {
    passage: P9,
    questions: [
      { id: 'r9_1', type: 'reading', passage: P9, question: 'What do smart cities use to improve services?', options: ['digital technology and data collection', 'traditional infrastructure and manual labour', 'satellite navigation only', 'increased government spending only'], answer: 0 },
      { id: 'r9_2', type: 'reading', passage: P9, question: 'Which city is NOT mentioned as a smart city example?', options: ['Singapore', 'Barcelona', 'Amsterdam', 'Tokyo'], answer: 3 },
      { id: 'r9_3', type: 'reading', passage: P9, question: 'What do sensors monitor in real time?', options: ['only traffic flow', 'traffic flow, energy consumption, and waste management', 'weather patterns and earthquakes', 'criminal activity only'], answer: 1 },
      { id: 'r9_4', type: 'reading', passage: P9, question: 'What concern does the passage raise about surveillance technology?', options: ['the high cost of sensors', 'the risk of power outages', 'privacy and data security', 'the need for more engineers'], answer: 2 },
      { id: 'r9_5', type: 'reading', passage: P9, question: 'What do critics say about smart city benefits?', options: ['they may not be equally distributed', 'they are always shared fairly', 'they only benefit tourists', 'they cause more problems than they solve'], answer: 0 },
    ],
  },
  {
    passage: P10,
    questions: [
      { id: 'r10_1', type: 'reading', passage: P10, question: 'When did UNESCO recognise the Mediterranean diet as cultural heritage?', options: ['2003', '2008', '2013', '2018'], answer: 2 },
      { id: 'r10_2', type: 'reading', passage: P10, question: 'What does the Mediterranean diet limit?', options: ['vegetables and fruits', 'red meat and processed foods', 'fish and whole grains', 'legumes and nuts'], answer: 1 },
      { id: 'r10_3', type: 'reading', passage: P10, question: 'Which health risk is NOT mentioned as reduced by this diet?', options: ['heart disease', 'diabetes', 'certain cancers', 'osteoporosis'], answer: 3 },
      { id: 'r10_4', type: 'reading', passage: P10, question: 'What challenge does the passage identify?', options: ['finding affordable olive oil', 'growing enough crops locally', 'maintaining traditional eating habits due to globalisation', 'avoiding nut and legume allergies'], answer: 2 },
      { id: 'r10_5', type: 'reading', passage: P10, question: 'The Mediterranean diet is associated with:', options: ['increased risk of heart disease', 'reduced risk of heart disease, diabetes, and certain cancers', 'no measurable health benefits', 'benefits only for people in Mediterranean countries'], answer: 1 },
    ],
  },
  {
    passage: P11,
    questions: [
      { id: 'r11_1', type: 'reading', passage: P11, question: 'How many minutes of exercise per week does the WHO recommend for adults?', options: ['at least 60 minutes', 'at least 150 minutes', 'at least 300 minutes', 'at least 90 minutes'], answer: 1 },
      { id: 'r11_2', type: 'reading', passage: P11, question: 'Which benefit of exercise is NOT mentioned?', options: ['reduced cardiovascular disease risk', 'improved mental health', 'improved cognitive function', 'improved vision'], answer: 3 },
      { id: 'r11_3', type: 'reading', passage: P11, question: 'Why do many adults not meet activity guidelines?', options: ['lack of public sports facilities', 'high cost of gym memberships', 'sedentary work and screen-based leisure', 'extreme weather conditions'], answer: 2 },
      { id: 'r11_4', type: 'reading', passage: P11, question: 'What has shown promise in encouraging physical activity?', options: ['public health campaigns and urban planning for walking and cycling', 'compulsory workplace exercise', 'banning private cars', 'lowering the retirement age'], answer: 0 },
      { id: 'r11_5', type: 'reading', passage: P11, question: 'Physical activity is described as:', options: ['optional for people over 60', 'one of the most important factors in maintaining good health', 'only relevant to competitive athletes', 'mainly important for mental health'], answer: 1 },
    ],
  },
  {
    passage: P12,
    questions: [
      { id: 'r12_1', type: 'reading', passage: P12, question: 'How many people use social media globally?', options: ['over two billion', 'over three billion', 'over four billion', 'over five billion'], answer: 2 },
      { id: 'r12_2', type: 'reading', passage: P12, question: 'Which platform is NOT mentioned?', options: ['Facebook', 'Instagram', 'TikTok', 'Twitter'], answer: 3 },
      { id: 'r12_3', type: 'reading', passage: P12, question: 'What negative effects are linked to excessive social media use?', options: ['anxiety, depression, and feelings of inadequacy', 'poor physical coordination', 'hearing loss and eye damage', 'reduced academic interest only'], answer: 0 },
      { id: 'r12_4', type: 'reading', passage: P12, question: 'What concern does the passage raise beyond mental health?', options: ['the cost of internet access', 'the spread of misinformation', 'the decline in mobile phone use', 'the rise of online shopping'], answer: 1 },
      { id: 'r12_5', type: 'reading', passage: P12, question: 'How have some governments responded to social media harms?', options: ['by banning all platforms permanently', 'by subsidising social media companies', 'by introducing or considering regulations', 'by building more internet infrastructure'], answer: 2 },
    ],
  },
  {
    passage: P13,
    questions: [
      { id: 'r13_1', type: 'reading', passage: P13, question: 'How much faster is the current extinction rate compared to the natural rate?', options: ['up to 10 times', 'up to 100 times', 'up to 1,000 times', 'up to 10,000 times'], answer: 2 },
      { id: 'r13_2', type: 'reading', passage: P13, question: 'What do some researchers call the current era?', options: ['the sixth mass extinction', 'the fifth great dying', 'the age of extinction', 'the second biodiversity crisis'], answer: 0 },
      { id: 'r13_3', type: 'reading', passage: P13, question: 'Which is NOT mentioned as a driver of biodiversity loss?', options: ['habitat destruction', 'pollution', 'invasive species', 'acid rain'], answer: 3 },
      { id: 'r13_4', type: 'reading', passage: P13, question: 'What do humans depend on biodiversity for?', options: ['medicine and clothing only', 'food, clean water, and climate regulation', 'energy production and transport', 'tourism and recreation only'], answer: 1 },
      { id: 'r13_5', type: 'reading', passage: P13, question: 'What does the passage say about current international commitments to biodiversity?', options: ['they are fully adequate', 'they go too far in restricting industry', 'they are insufficient', 'they have already solved the problem'], answer: 2 },
    ],
  },
  {
    passage: P14,
    questions: [
      { id: 'r14_1', type: 'reading', passage: P14, question: 'When was Sputnik launched?', options: ['1947', '1951', '1957', '1963'], answer: 2 },
      { id: 'r14_2', type: 'reading', passage: P14, question: 'Which private company is mentioned in the passage?', options: ['SpaceX', 'Virgin Galactic', 'Boeing', 'Lockheed Martin'], answer: 0 },
      { id: 'r14_3', type: 'reading', passage: P14, question: 'What have private companies done to launch costs?', options: ['increased them dramatically', 'significantly reduced them', 'kept them stable', 'made space inaccessible'], answer: 1 },
      { id: 'r14_4', type: 'reading', passage: P14, question: 'What do critics argue about space exploration?', options: ['private companies should not be involved', 'the Apollo programme was a failure', 'resources could be better spent on Earth problems', 'space exploration should be accelerated further'], answer: 2 },
      { id: 'r14_5', type: 'reading', passage: P14, question: 'Which practical benefit of space technology is mentioned?', options: ['GPS navigation', 'undersea cable networks', 'nuclear power stations', 'railway systems'], answer: 0 },
    ],
  },
  {
    passage: P15,
    questions: [
      { id: 'r15_1', type: 'reading', passage: P15, question: 'Which industry is NOT mentioned as being transformed by AI?', options: ['healthcare', 'finance', 'transportation', 'agriculture'], answer: 3 },
      { id: 'r15_2', type: 'reading', passage: P15, question: 'What can machine learning diagnose with physician-level accuracy?', options: ['medical conditions', 'criminal intent', 'language errors', 'market trends only'], answer: 0 },
      { id: 'r15_3', type: 'reading', passage: P15, question: 'What effect is AI expected to have on employment?', options: ['create millions of new well-paid jobs', 'displace millions of jobs', 'have no significant effect', 'only affect highly skilled workers'], answer: 1 },
      { id: 'r15_4', type: 'reading', passage: P15, question: 'Who does automation disproportionately affect?', options: ['senior executives only', 'only technology workers', 'workers in routine and manual roles', 'all workers equally'], answer: 2 },
      { id: 'r15_5', type: 'reading', passage: P15, question: 'Which ethical concern is mentioned?', options: ['energy consumption of data centres', 'algorithmic bias', 'the cost of AI research', 'academic cheating using AI'], answer: 1 },
    ],
  },
  {
    passage: P16,
    questions: [
      { id: 'r16_1', type: 'reading', passage: P16, question: 'How many people live outside their country of birth?', options: ['over 28 million', 'over 280 million', 'over 2.8 billion', 'over 28 billion'], answer: 1 },
      { id: 'r16_2', type: 'reading', passage: P16, question: 'Which is NOT mentioned as a driver of migration?', options: ['conflict', 'economic inequality', 'climate change', 'political ambition'], answer: 3 },
      { id: 'r16_3', type: 'reading', passage: P16, question: 'What economic benefits does migration bring?', options: ['lower wages in host countries', 'reduced government spending', 'remittances and skills transfer', 'increased property prices'], answer: 2 },
      { id: 'r16_4', type: 'reading', passage: P16, question: 'What has irregular migration resulted in?', options: ['tens of thousands of deaths', 'significant economic growth only', 'rapid urbanisation', 'reduced political tensions'], answer: 0 },
      { id: 'r16_5', type: 'reading', passage: P16, question: 'What do many experts recommend for managing migration?', options: ['completely closed borders', 'safe legal pathways and international cooperation', 'paying migrants to return home', 'limiting migration to skilled workers only'], answer: 1 },
    ],
  },
  {
    passage: P17,
    questions: [
      { id: 'r17_1', type: 'reading', passage: P17, question: 'By how much has the cost of solar electricity fallen since 2010?', options: ['over 30%', 'over 60%', 'over 90%', 'over 99%'], answer: 2 },
      { id: 'r17_2', type: 'reading', passage: P17, question: 'What makes solar and wind power difficult to rely on entirely?', options: ['they are too expensive to install', 'they depend on sunlight and weather conditions', 'they require too much water', 'they produce toxic waste'], answer: 1 },
      { id: 'r17_3', type: 'reading', passage: P17, question: 'What is considered essential for a fully renewable energy system?', options: ['more nuclear power plants', 'reduced electricity consumption', 'advances in battery storage technology', 'cheaper fossil fuels'], answer: 2 },
      { id: 'r17_4', type: 'reading', passage: P17, question: 'Which is NOT mentioned as driving renewable energy growth?', options: ['government subsidies', 'technological innovation', 'corporate sustainability commitments', 'rising oil prices'], answer: 3 },
      { id: 'r17_5', type: 'reading', passage: P17, question: 'The passage describes solar electricity as:', options: ['the cheapest source of electricity in history in many parts of the world', 'still more expensive than fossil fuels', 'only suitable for tropical countries', 'not yet commercially viable'], answer: 0 },
    ],
  },
  {
    passage: P18,
    questions: [
      { id: 'r18_1', type: 'reading', passage: P18, question: 'What percentage of Earth\'s water is fresh?', options: ['3%', '13%', '30%', '70%'], answer: 0 },
      { id: 'r18_2', type: 'reading', passage: P18, question: 'By what year does the UN predict widespread water shortages?', options: ['2020', '2025', '2030', '2050'], answer: 1 },
      { id: 'r18_3', type: 'reading', passage: P18, question: 'What percentage of freshwater does agriculture use?', options: ['approximately 30%', 'approximately 50%', 'approximately 70%', 'approximately 90%'], answer: 2 },
      { id: 'r18_4', type: 'reading', passage: P18, question: 'Where is much of Earth\'s fresh water stored?', options: ['in rivers and lakes only', 'locked in glaciers or underground', 'in the atmosphere as vapour', 'in the world\'s seas'], answer: 1 },
      { id: 'r18_5', type: 'reading', passage: P18, question: 'Which is NOT mentioned as a solution to water scarcity?', options: ['conservation', 'improved infrastructure', 'international cooperation', 'seawater desalination'], answer: 3 },
    ],
  },
  {
    passage: P19,
    questions: [
      { id: 'r19_1', type: 'reading', passage: P19, question: 'What percentage of Earth\'s surface do oceans cover?', options: ['over 50%', 'over 60%', 'over 70%', 'over 90%'], answer: 2 },
      { id: 'r19_2', type: 'reading', passage: P19, question: 'What causes ocean acidification?', options: ['overfishing activities', 'increased absorption of CO2', 'plastic pollution', 'rising sea temperatures alone'], answer: 1 },
      { id: 'r19_3', type: 'reading', passage: P19, question: 'What percentage of the ocean do marine protected areas currently cover?', options: ['about 8%', 'about 18%', 'about 30%', 'about 50%'], answer: 0 },
      { id: 'r19_4', type: 'reading', passage: P19, question: 'What ocean protection target are scientists calling for by 2030?', options: ['at least 10%', 'at least 20%', 'at least 30%', 'at least 50%'], answer: 2 },
      { id: 'r19_5', type: 'reading', passage: P19, question: 'Which is NOT mentioned as a threat to oceans?', options: ['overfishing', 'plastic pollution', 'ocean acidification', 'deep-sea mining'], answer: 3 },
    ],
  },
  {
    passage: P20,
    questions: [
      { id: 'r20_1', type: 'reading', passage: P20, question: 'How many sites does UNESCO\'s World Heritage List include?', options: ['over 110', 'over 1,100', 'over 11,000', 'over 100'], answer: 1 },
      { id: 'r20_2', type: 'reading', passage: P20, question: 'What benefits do heritage sites provide beyond cultural value?', options: ['tourism and economic benefits', 'military security', 'agricultural land', 'mineral resources'], answer: 0 },
      { id: 'r20_3', type: 'reading', passage: P20, question: 'Which is NOT mentioned as a threat to heritage?', options: ['urbanisation', 'conflict', 'climate change', 'political censorship'], answer: 3 },
      { id: 'r20_4', type: 'reading', passage: P20, question: 'What does digital technology allow?', options: ['automatic rebuilding of destroyed sites', '3D scanning of monuments and virtual museum experiences', 'instant translation of ancient languages', 'preventing all physical damage'], answer: 1 },
      { id: 'r20_5', type: 'reading', passage: P20, question: 'What does the passage say about intangible heritage?', options: ['it is less important than physical sites', 'it is impossible to preserve digitally', 'it is as important to protect as physical sites', 'it only exists in developed countries'], answer: 2 },
    ],
  },
];

/** Returns a random set of 15 questions: 5 grammar, 5 vocab, 5 reading from one passage. */
export function sampleQuestions(): PlacementQuestion[] {
  const grammar = shuffle(GRAMMAR_BANK).slice(0, 5);
  const vocab = shuffle(VOCAB_BANK).slice(0, 5);
  const readingGroup = READING_BANK[Math.floor(Math.random() * READING_BANK.length)]!;
  return [...grammar, ...vocab, ...readingGroup.questions];
}

export function scorePlacement(
  answers: (number | null)[],
  questions: PlacementQuestion[],
): PlacementResult {
  const total = questions.length;
  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
  const level = getLevel(score);
  const { label, description } = LEVEL_META[level];
  return { score, total, level, label, description, recommendedCourses: getRecommendations(level) };
}

export function getLevel(score: number): CefrLevel {
  if (score <= 4) return 'A1-A2';
  if (score <= 8) return 'B1';
  if (score <= 11) return 'B2';
  return 'C1-C2';
}

const LEVEL_META: Record<CefrLevel, { label: string; description: string }> = {
  'A1-A2': { label: 'Beginner', description: 'You can handle basic everyday communication but need solid grammar and vocabulary foundations before diving into exam prep. Our Foundation courses are designed exactly for your level.' },
  B1: { label: 'Lower Intermediate', description: 'You have a working grasp of English and can communicate in familiar situations. A focused Foundation course will shore up your weaknesses and prepare you for exam-level tasks.' },
  B2: { label: 'Upper Intermediate', description: 'You are approaching exam-ready English. An Intermediate course targeting your specific exam will get you to Band 6.5–7.0 / TOEFL 80+ / PTE 65+ efficiently.' },
  'C1-C2': { label: 'Advanced', description: 'Your English is strong. An Advanced exam course focused on test strategy, sophisticated vocabulary, and high-band writing/speaking techniques is the right next step.' },
};

function getRecommendations(level: CefrLevel): RecommendedCourse[] {
  const tierMap: Record<CefrLevel, 'Foundation' | 'Intermediate' | 'Advanced'> = {
    'A1-A2': 'Foundation', B1: 'Foundation', B2: 'Intermediate', 'C1-C2': 'Advanced',
  };
  const tier = tierMap[level];
  const reasonMap: Record<'Foundation' | 'Intermediate' | 'Advanced', string> = {
    Foundation: 'Builds core grammar, vocabulary, and all four skills from the ground up.',
    Intermediate: 'Focuses on exam strategy and fluency at an upper-intermediate level.',
    Advanced: 'Targets the final push to high-band scores through advanced technique.',
  };
  return (['IELTS', 'TOEFL', 'PTE'] as const).map((exam) => ({
    exam, tier, href: `/courses/${exam.toLowerCase()}`, reason: reasonMap[tier],
  }));
}

export const LEVEL_COLORS: Record<CefrLevel, string> = {
  'A1-A2': 'bg-orange-100 text-orange-800 border-orange-200',
  B1: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  B2: 'bg-blue-100 text-blue-800 border-blue-200',
  'C1-C2': 'bg-green-100 text-green-800 border-green-200',
};
