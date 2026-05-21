// PersonaLingo-inspired IELTS Speaking topic bank.
// Part 1: personal/everyday questions (examiner asks for 4–5 min)
// Part 2: cue cards (1 min prep + 2 min long turn)
// Part 3: abstract discussion linked to Part 2 theme

export type SpeakingPart = 1 | 2 | 3;

export type Part1Topic = {
  id: string;
  part: 1;
  topic: string;
  topicBn: string;
  category: string;
  questions: string[];
  questionsBn: string[];
  bandTip: string;
  bandTipBn: string;
  vocabulary: string[];
};

export type Part2Topic = {
  id: string;
  part: 2;
  topic: string;
  topicBn: string;
  category: string;
  cueCard: {
    describe: string;
    describeBn: string;
    points: string[];
    pointsBn: string[];
    followUp: string;
    followUpBn: string;
  };
  bandTip: string;
  bandTipBn: string;
  vocabulary: string[];
};

export type Part3Topic = {
  id: string;
  part: 3;
  topic: string;
  topicBn: string;
  linkedToId: string; // links to a Part 2 topic
  category: string;
  questions: string[];
  questionsBn: string[];
  bandTip: string;
  bandTipBn: string;
};

export type SpeakingTopic = Part1Topic | Part2Topic | Part3Topic;

// ── PART 1 TOPICS ─────────────────────────────────────────────────────────

export const PART1_TOPICS: Part1Topic[] = [
  {
    id: 'p1-hometown',
    part: 1,
    topic: 'Hometown',
    topicBn: 'নিজের শহর',
    category: 'Personal',
    questions: [
      'Where are you from originally?',
      'What do you like most about your hometown?',
      'Has your hometown changed much since you were a child?',
      'Would you prefer to live in a city or a rural area? Why?',
      'What would you say is the biggest problem facing your hometown?',
    ],
    questionsBn: [
      'আপনি মূলত কোথা থেকে এসেছেন?',
      'আপনার শহরে আপনি কী সবচেয়ে বেশি পছন্দ করেন?',
      'শৈশব থেকে আপনার শহর কি অনেক বদলে গেছে?',
      'আপনি কি শহরে নাকি গ্রামাঞ্চলে বাস করতে পছন্দ করবেন? কেন?',
      'আপনার মতে আপনার শহরের সবচেয়ে বড় সমস্যা কী?',
    ],
    bandTip: "Don't just say 'I like the food.' Say WHY and add a comparison: 'I love the street food in Old Dhaka — the biryani there has a flavour you won't find anywhere else.'",
    bandTipBn: "শুধু 'I like the food' বলবেন না। কেন তা বলুন এবং তুলনা যোগ করুন: 'I love the street food in Old Dhaka — the biryani there has a flavour you won't find anywhere else.'",
    vocabulary: ['vibrant', 'congested', 'infrastructure', 'nostalgic', 'cosmopolitan', 'outskirts', 'diverse'],
  },
  {
    id: 'p1-family',
    part: 1,
    topic: 'Family',
    topicBn: 'পরিবার',
    category: 'Personal',
    questions: [
      'Can you tell me about your family?',
      'Do you prefer spending time with family or friends? Why?',
      'Are families in your country changing? In what way?',
      'What do you think is the most important quality in a family member?',
      'Did your family have a big influence on your career choice?',
    ],
    questionsBn: [
      'আপনার পরিবার সম্পর্কে বলুন?',
      'আপনি কি পরিবারের সাথে নাকি বন্ধুদের সাথে সময় কাটাতে পছন্দ করেন? কেন?',
      'আপনার দেশে পরিবার কি পরিবর্তন হচ্ছে? কীভাবে?',
      'পরিবারের সদস্যদের মধ্যে সবচেয়ে গুরুত্বপূর্ণ গুণ কী বলে আপনি মনে করেন?',
      'আপনার পরিবার কি আপনার ক্যারিয়ার পছন্দে বড় প্রভাব ফেলেছিল?',
    ],
    bandTip: "Use contrast to show range: 'While my parents are quite traditional, I'd say I'm more open-minded about careers.' Contrasting structures signal Band 7.",
    bandTipBn: "বিপরীতকে দেখাতে বৈপরীত্য ব্যবহার করুন: 'While my parents are quite traditional, I'd say I'm more open-minded about careers.' বিপরীত কাঠামো Band 7 নির্দেশ করে।",
    vocabulary: ['nuclear family', 'extended family', 'upbringing', 'bond', 'supportive', 'generation gap', 'values'],
  },
  {
    id: 'p1-work-study',
    part: 1,
    topic: 'Work / Study',
    topicBn: 'কাজ / পড়াশোনা',
    category: 'Personal',
    questions: [
      'Are you currently working or studying?',
      'What subject are you studying / what is your job?',
      'What do you enjoy most about your studies or work?',
      'Is there anything you would change about your current course or job?',
      'Where do you see yourself professionally in five years?',
    ],
    questionsBn: [
      'আপনি কি এখন কাজ করছেন নাকি পড়াশোনা করছেন?',
      'আপনি কোন বিষয় পড়ছেন / আপনার কাজ কী?',
      'আপনার পড়াশোনা বা কাজে আপনি কী সবচেয়ে বেশি উপভোগ করেন?',
      'আপনার বর্তমান কোর্স বা চাকরিতে কি এমন কিছু আছে যা আপনি পরিবর্তন করবেন?',
      'পাঁচ বছরে পেশাগতভাবে আপনি নিজেকে কোথায় দেখেন?',
    ],
    bandTip: "Add specific details and reasons. Don't say 'I study business.' Say 'I'm in my second year of a business degree, specialising in marketing — I'm particularly interested in digital strategy.'",
    bandTipBn: "নির্দিষ্ট বিবরণ ও কারণ যোগ করুন। শুধু 'I study business' বলবেন না। বলুন 'I'm in my second year of a business degree, specialising in marketing — I'm particularly interested in digital strategy.'",
    vocabulary: ['specialise', 'pursue', 'rewarding', 'challenging', 'deadline', 'collaborate', 'aspirations'],
  },
  {
    id: 'p1-hobbies',
    part: 1,
    topic: 'Hobbies & Free Time',
    topicBn: 'শখ ও অবসর সময়',
    category: 'Leisure',
    questions: [
      'What do you like to do in your free time?',
      'Have your hobbies changed since you were younger?',
      'Do you think hobbies are important? Why?',
      'Is there a hobby you have always wanted to take up?',
      'Do you prefer outdoor or indoor activities?',
    ],
    questionsBn: [
      'অবসর সময়ে আপনি কী করতে পছন্দ করেন?',
      'ছোটবেলা থেকে কি আপনার শখ পরিবর্তন হয়েছে?',
      'আপনি কি মনে করেন শখ গুরুত্বপূর্ণ? কেন?',
      'এমন কোনো শখ আছে কি যা আপনি সবসময় শুরু করতে চেয়েছেন?',
      'আপনি কি বাইরের নাকি ভেতরের কার্যকলাপ পছন্দ করেন?',
    ],
    bandTip: "Use phrases like 'I've been into X for as long as I can remember' or 'I only picked it up recently, but I'm completely hooked.' These idiomatic phrases boost fluency marks.",
    bandTipBn: "'I've been into X for as long as I can remember' বা 'I only picked it up recently, but I'm completely hooked' এর মতো বাগধারা ব্যবহার করুন। এই ধরনের বাগধারা প্রবাহমানতার নম্বর বাড়ায়।",
    vocabulary: ['passionate about', 'unwind', 'therapeutic', 'pastime', 'immerse', 'compelling', 'relaxing'],
  },
  {
    id: 'p1-food',
    part: 1,
    topic: 'Food',
    topicBn: 'খাদ্য',
    category: 'Lifestyle',
    questions: [
      'What kind of food do you most enjoy eating?',
      'Do you prefer home-cooked food or eating at restaurants?',
      'Are eating habits in your country changing? How?',
      'Can you cook? Do you enjoy it?',
      'Is food an important part of cultural celebrations in your country?',
    ],
    questionsBn: [
      'আপনি কোন ধরনের খাবার খেতে সবচেয়ে বেশি পছন্দ করেন?',
      'আপনি কি ঘরে রান্না করা খাবার নাকি রেস্তোরাঁয় খেতে পছন্দ করেন?',
      'আপনার দেশে খাদ্যাভ্যাস কি পরিবর্তন হচ্ছে? কীভাবে?',
      'আপনি কি রান্না করতে পারেন? উপভোগ করেন কি?',
      'আপনার দেশে সাংস্কৃতিক উৎসবে কি খাবার গুরুত্বপূর্ণ ভূমিকা পালন করে?',
    ],
    bandTip: "Use sensory language: 'It has a rich, earthy flavour' or 'the aroma reminds me of my grandmother's kitchen.' Descriptive detail signals advanced vocabulary.",
    bandTipBn: "ইন্দ্রিয়গত ভাষা ব্যবহার করুন: 'It has a rich, earthy flavour' বা 'the aroma reminds me of my grandmother's kitchen.' বিবরণমূলক বিবরণ উন্নত শব্দভাণ্ডার নির্দেশ করে।",
    vocabulary: ['cuisine', 'aromatic', 'nutritious', 'indulge', 'staple', 'delicacy', 'flavoursome'],
  },
  {
    id: 'p1-technology',
    part: 1,
    topic: 'Technology',
    topicBn: 'প্রযুক্তি',
    category: 'Modern Life',
    questions: [
      'How often do you use your smartphone?',
      'What technology could you not live without?',
      'Do you think technology makes life easier or more complicated?',
      'How has technology changed the way people communicate?',
      'Are there any negative effects of technology that worry you?',
    ],
    questionsBn: [
      'আপনি কতবার স্মার্টফোন ব্যবহার করেন?',
      'কোন প্রযুক্তি ছাড়া আপনি বাঁচতে পারতেন না?',
      'আপনি কি মনে করেন প্রযুক্তি জীবনকে সহজ নাকি আরও জটিল করে তোলে?',
      'প্রযুক্তি মানুষের যোগাযোগের পদ্ধতি কীভাবে পরিবর্তন করেছে?',
      'প্রযুক্তির এমন কোনো নেতিবাচক প্রভাব আছে কি যা আপনাকে উদ্বিগ্ন করে?',
    ],
    bandTip: "Show two sides: 'On one hand, I find it incredibly useful for staying connected. On the other, the constant notifications do make it hard to focus.' Balance signals mature thinking.",
    bandTipBn: "'On one hand, I find it incredibly useful for staying connected. On the other, the constant notifications do make it hard to focus.' উভয় দিক দেখান। ভারসাম্য পরিপক্ক চিন্তার ইঙ্গিত দেয়।",
    vocabulary: ['indispensable', 'distraction', 'connectivity', 'innovative', 'privacy concerns', 'automate', 'overreliant'],
  },
  {
    id: 'p1-travel',
    part: 1,
    topic: 'Travel',
    topicBn: 'ভ্রমণ',
    category: 'Leisure',
    questions: [
      'Do you enjoy travelling?',
      'Where have you travelled to that left a lasting impression?',
      'Do you prefer travelling alone or with others?',
      'What kind of holiday do you prefer — beach, city, or countryside?',
      'How has travel changed in recent years?',
    ],
    questionsBn: [
      'আপনি কি ভ্রমণ উপভোগ করেন?',
      'কোথায় ভ্রমণ করেছেন যা আপনার উপর স্থায়ী প্রভাব ফেলেছে?',
      'আপনি কি একা নাকি অন্যদের সাথে ভ্রমণ করতে পছন্দ করেন?',
      'আপনি কোন ছুটি পছন্দ করেন — সমুদ্র সৈকত, শহর নাকি গ্রামাঞ্চল?',
      'সম্প্রতি বছরে ভ্রমণ কীভাবে পরিবর্তন হয়েছে?',
    ],
    bandTip: "Mention specific places with details: 'When I visited Cox's Bazar, what struck me most was the sheer scale of the beach — it stretches for over 120 kilometres.' Specific data impresses examiners.",
    bandTipBn: "নির্দিষ্ট স্থান বিবরণ সহ উল্লেখ করুন: 'When I visited Cox's Bazar, what struck me most was the sheer scale of the beach — it stretches for over 120 kilometres.' নির্দিষ্ট তথ্য পরীক্ষকদের মুগ্ধ করে।",
    vocabulary: ['adventure', 'broaden horizons', 'immerse', 'itinerary', 'off the beaten track', 'cultural exchange', 'wanderlust'],
  },
  {
    id: 'p1-environment',
    part: 1,
    topic: 'Environment',
    topicBn: 'পরিবেশ',
    category: 'Society',
    questions: [
      'Are you concerned about the environment?',
      'What do you personally do to help the environment?',
      'Do you think individuals or governments have more responsibility for protecting the environment?',
      'Has the environment in your area changed in your lifetime?',
      'Do you think future generations will live in a better or worse environment?',
    ],
    questionsBn: [
      'আপনি কি পরিবেশ নিয়ে উদ্বিগ্ন?',
      'পরিবেশ সাহায্যে আপনি ব্যক্তিগতভাবে কী করেন?',
      'আপনি কি মনে করেন ব্যক্তি নাকি সরকারের পরিবেশ রক্ষায় বেশি দায়িত্ব আছে?',
      'আপনার জীবনকালে আপনার এলাকার পরিবেশ কি পরিবর্তিত হয়েছে?',
      'আপনি কি মনে করেন ভবিষ্যৎ প্রজন্ম ভালো না খারাপ পরিবেশে বাস করবে?',
    ],
    bandTip: "Don't just say 'I recycle.' Add cause and effect: 'I try to use public transport because I'm aware that individual car use is one of the leading causes of urban air pollution.'",
    bandTipBn: "শুধু 'I recycle' বলবেন না। কারণ ও প্রভাব যোগ করুন: 'I try to use public transport because I'm aware that individual car use is one of the leading causes of urban air pollution.'",
    vocabulary: ['climate change', 'carbon footprint', 'renewable', 'deforestation', 'biodiversity', 'emission', 'sustainable'],
  },
  {
    id: 'p1-health',
    part: 1,
    topic: 'Health & Fitness',
    topicBn: 'স্বাস্থ্য ও সুস্থতা',
    category: 'Lifestyle',
    questions: [
      'What do you do to keep healthy?',
      'How important is sport in your daily life?',
      'Have your attitudes to health changed as you have got older?',
      'Do you think people today are healthier than previous generations?',
      'What do you think is the biggest threat to public health today?',
    ],
    questionsBn: [
      'সুস্থ থাকতে আপনি কী করেন?',
      'আপনার দৈনন্দিন জীবনে খেলাধুলা কতটা গুরুত্বপূর্ণ?',
      'বয়সের সাথে কি স্বাস্থ্য সম্পর্কে আপনার দৃষ্টিভঙ্গি পরিবর্তন হয়েছে?',
      'আপনি কি মনে করেন আজকের মানুষ আগের প্রজন্মের চেয়ে বেশি সুস্থ?',
      'আজকের সময়ে জনস্বাস্থ্যের সবচেয়ে বড় হুমকি কী বলে আপনি মনে করেন?',
    ],
    bandTip: "Use hedging language to sound natural: 'I'd like to think I'm fairly health-conscious, though I must admit I don't always manage to get enough sleep.' Modesty sounds authentic.",
    bandTipBn: "স্বাভাবিক শোনাতে হেজিং ভাষা ব্যবহার করুন: 'I'd like to think I'm fairly health-conscious, though I must admit I don't always manage to get enough sleep.' বিনয়ী হওয়া খাঁটি শোনায়।",
    vocabulary: ['well-being', 'sedentary', 'cardiovascular', 'immune system', 'mental health', 'nutritious', 'resilience'],
  },
  {
    id: 'p1-education',
    part: 1,
    topic: 'Education',
    topicBn: 'শিক্ষা',
    category: 'Society',
    questions: [
      'What subjects did you enjoy most at school?',
      'Do you think the education system in your country is effective?',
      'How important is it for children to learn a second language?',
      'Do you prefer studying alone or with others?',
      'What is your opinion on online learning?',
    ],
    questionsBn: [
      'স্কুলে আপনি কোন বিষয়গুলো সবচেয়ে বেশি উপভোগ করতেন?',
      'আপনি কি মনে করেন আপনার দেশের শিক্ষা ব্যবস্থা কার্যকর?',
      'শিশুদের জন্য দ্বিতীয় ভাষা শেখা কতটা গুরুত্বপূর্ণ?',
      'আপনি কি একা নাকি অন্যদের সাথে পড়তে পছন্দ করেন?',
      'অনলাইন শিক্ষা সম্পর্কে আপনার মতামত কী?',
    ],
    bandTip: "Add a 'but' or 'however' to avoid sounding one-sided: 'I think online learning is incredibly flexible. However, I do think it lacks the social interaction that makes face-to-face learning so effective.'",
    bandTipBn: "একপাক্ষিক না শোনাতে 'but' বা 'however' যোগ করুন: 'I think online learning is incredibly flexible. However, I do think it lacks the social interaction that makes face-to-face learning so effective.'",
    vocabulary: ['curriculum', 'discipline', 'critical thinking', 'academia', 'extracurricular', 'peer learning', 'rote learning'],
  },
  {
    id: 'p1-music',
    part: 1,
    topic: 'Music',
    topicBn: 'সংগীত',
    category: 'Arts & Culture',
    questions: [
      'What kind of music do you enjoy listening to?',
      'Do you play a musical instrument?',
      'Has your taste in music changed over the years?',
      'Do you think music is important in education?',
      'Can you concentrate better with or without music?',
    ],
    questionsBn: [
      'আপনি কোন ধরনের সংগীত শুনতে উপভোগ করেন?',
      'আপনি কি কোনো বাদ্যযন্ত্র বাজান?',
      'বছরের পর বছর কি আপনার সংগীতের রুচি পরিবর্তন হয়েছে?',
      'আপনি কি মনে করেন শিক্ষায় সংগীত গুরুত্বপূর্ণ?',
      'সংগীত সহ নাকি ছাড়া আপনি ভালো মনোযোগ দিতে পারেন?',
    ],
    bandTip: "Describe how music makes you feel: 'There is something about classical music that I find deeply calming — it slows my thoughts down in a way that nothing else does.'",
    bandTipBn: "সংগীত আপনাকে কেমন অনুভব করায় তা বর্ণনা করুন: 'There is something about classical music that I find deeply calming — it slows my thoughts down in a way that nothing else does.'",
    vocabulary: ['genre', 'lyrics', 'melody', 'rhythm', 'soothing', 'uplifting', 'therapeutic'],
  },
  {
    id: 'p1-reading',
    part: 1,
    topic: 'Reading',
    topicBn: 'পড়া',
    category: 'Leisure',
    questions: [
      'Do you enjoy reading?',
      'What types of books do you prefer?',
      'Do you read more or less than you did as a child?',
      'Do you prefer reading physical books or digital content?',
      'How has the internet changed the way we read?',
    ],
    questionsBn: [
      'আপনি কি পড়া উপভোগ করেন?',
      'আপনি কোন ধরনের বই পছন্দ করেন?',
      'শৈশবে তুলনায় আপনি এখন বেশি নাকি কম পড়েন?',
      'আপনি কি শারীরিক বই নাকি ডিজিটাল বিষয়বস্তু পড়তে পছন্দ করেন?',
      'ইন্টারনেট কীভাবে আমাদের পড়ার পদ্ধতি পরিবর্তন করেছে?',
    ],
    bandTip: "Name a specific book and explain why it resonated: 'I recently finished Atomic Habits by James Clear — I found his argument about the power of small, consistent changes genuinely eye-opening.'",
    bandTipBn: "একটি নির্দিষ্ট বই নাম বলুন এবং কেন এটি প্রভাব ফেলেছিল তা ব্যাখ্যা করুন: 'I recently finished Atomic Habits by James Clear — I found his argument about the power of small, consistent changes genuinely eye-opening.'",
    vocabulary: ['fiction', 'non-fiction', 'engrossing', 'thought-provoking', 'narrative', 'immerse', 'bestseller'],
  },
];

// ── PART 2 TOPICS ─────────────────────────────────────────────────────────

export const PART2_TOPICS: Part2Topic[] = [
  {
    id: 'p2-person-admire',
    part: 2,
    topic: 'A person you admire',
    topicBn: 'এমন একজন ব্যক্তি যাকে আপনি সম্মান করেন',
    category: 'People',
    cueCard: {
      describe: 'Describe a person you admire.',
      describeBn: 'এমন একজন ব্যক্তির বর্ণনা দিন যাকে আপনি সম্মান করেন।',
      points: [
        'Who this person is and how you know them',
        'What they have achieved',
        'What qualities you admire in them',
        'And explain why you find them inspiring',
      ],
      pointsBn: [
        'এই ব্যক্তি কে এবং আপনি কীভাবে তাকে চেনেন',
        'তারা কী অর্জন করেছেন',
        'তাদের মধ্যে আপনি কোন গুণগুলো সম্মান করেন',
        'এবং ব্যাখ্যা করুন কেন আপনি তাদের অনুপ্রেরণামূলক মনে করেন',
      ],
      followUp: 'Do you think role models are important for young people?',
      followUpBn: 'আপনি কি মনে করেন তরুণদের জন্য রোল মডেল গুরুত্বপূর্ণ?',
    },
    bandTip: "Structure your 2 minutes: 30 seconds intro → 60 seconds main qualities + example → 30 seconds why inspiring. Using the four cue points as a scaffold is not cheating — it's strategy.",
    bandTipBn: "আপনার ২ মিনিট কাঠামোবদ্ধ করুন: ৩০ সেকেন্ড পরিচয় → ৬০ সেকেন্ড মূল গুণ + উদাহরণ → ৩০ সেকেন্ড কেন অনুপ্রেরণামূলক। চারটি কার্ড পয়েন্ট কাঠামো হিসেবে ব্যবহার করা প্রতারণা নয় — এটি কৌশল।",
    vocabulary: ['resilient', 'dedicated', 'compassionate', 'influential', 'pioneering', 'integrity', 'selfless'],
  },
  {
    id: 'p2-memorable-journey',
    part: 2,
    topic: 'A memorable journey',
    topicBn: 'একটি স্মরণীয় যাত্রা',
    category: 'Experience',
    cueCard: {
      describe: 'Describe a memorable journey you have made.',
      describeBn: 'আপনার করা একটি স্মরণীয় যাত্রার বর্ণনা দিন।',
      points: [
        'Where you went and when',
        'How you travelled there',
        'What made the journey memorable',
        'And explain how you felt during and after the journey',
      ],
      pointsBn: [
        'কোথায় গিয়েছিলেন এবং কখন',
        'কীভাবে সেখানে গিয়েছিলেন',
        'কী এই যাত্রাটিকে স্মরণীয় করেছিল',
        'এবং ব্যাখ্যা করুন যাত্রার সময় এবং পরে আপনি কেমন অনুভব করেছিলেন',
      ],
      followUp: 'Do you think travelling broadens a person\'s perspective?',
      followUpBn: 'আপনি কি মনে করেন ভ্রমণ একজন ব্যক্তির দৃষ্টিভঙ্গি বিস্তৃত করে?',
    },
    bandTip: "Use narrative tenses correctly: 'I had been planning the trip for months, so when the day finally arrived, I was buzzing with excitement.' Past perfect + past continuous shows grammatical range.",
    bandTipBn: "ন্যারেটিভ কাল সঠিকভাবে ব্যবহার করুন: 'I had been planning the trip for months, so when the day finally arrived, I was buzzing with excitement.' Past perfect + past continuous ব্যাকরণগত পরিসর দেখায়।",
    vocabulary: ['exhilarating', 'breathtaking', 'adventurous', 'spontaneous', 'vivid memories', 'horizon', 'in awe'],
  },
  {
    id: 'p2-useful-technology',
    part: 2,
    topic: 'A technology you find useful',
    topicBn: 'একটি প্রযুক্তি যা আপনি উপকারী মনে করেন',
    category: 'Technology',
    cueCard: {
      describe: 'Describe a piece of technology that you find very useful.',
      describeBn: 'এমন একটি প্রযুক্তির বর্ণনা দিন যা আপনি অত্যন্ত উপকারী মনে করেন।',
      points: [
        'What the technology is',
        'How you use it',
        'How it has changed your daily life',
        'And explain why it is so important to you',
      ],
      pointsBn: [
        'প্রযুক্তিটি কী',
        'আপনি কীভাবে এটি ব্যবহার করেন',
        'এটি আপনার দৈনন্দিন জীবন কীভাবে পরিবর্তন করেছে',
        'এবং ব্যাখ্যা করুন কেন এটি আপনার কাছে এত গুরুত্বপূর্ণ',
      ],
      followUp: 'Have you ever had problems with this technology?',
      followUpBn: 'এই প্রযুক্তি নিয়ে আপনার কি কখনো সমস্যা হয়েছে?',
    },
    bandTip: "Avoid the obvious answer (smartphone). Impress with specificity: a translation app, an AI writing tool, a fitness tracker. Unusual choices give more to talk about.",
    bandTipBn: "সুস্পষ্ট উত্তর (স্মার্টফোন) এড়িয়ে চলুন। নির্দিষ্টতায় প্রভাবিত করুন: একটি অনুবাদ অ্যাপ, একটি AI লেখার সরঞ্জাম, একটি ফিটনেস ট্র্যাকার। অস্বাভাবিক পছন্দ বলার মতো আরও বিষয় দেয়।",
    vocabulary: ['innovation', 'streamline', 'integrated', 'app ecosystem', 'seamless', 'functionality', 'transformative'],
  },
  {
    id: 'p2-skill-learn',
    part: 2,
    topic: 'A skill you would like to learn',
    topicBn: 'এমন একটি দক্ষতা যা আপনি শিখতে চান',
    category: 'Personal Development',
    cueCard: {
      describe: 'Describe a skill you would like to learn in the future.',
      describeBn: 'ভবিষ্যতে আপনি যে দক্ষতা শিখতে চান তার বর্ণনা দিন।',
      points: [
        'What the skill is',
        'Why you want to learn it',
        'How you would go about learning it',
        'And explain what difference it would make to your life',
      ],
      pointsBn: [
        'দক্ষতাটি কী',
        'আপনি কেন এটি শিখতে চান',
        'আপনি কীভাবে এটি শিখবেন',
        'এবং ব্যাখ্যা করুন এটি আপনার জীবনে কী পার্থক্য আনবে',
      ],
      followUp: 'Do you think it is ever too late to learn a new skill?',
      followUpBn: 'আপনি কি মনে করেন নতুন দক্ষতা শেখার জন্য কি কখনো বয়স হয়ে যায়?',
    },
    bandTip: "Use conditionals to show range: 'If I were able to speak Mandarin fluently, I think it would open doors in terms of business opportunities that are simply not available otherwise.'",
    bandTipBn: "পরিসর দেখাতে conditionals ব্যবহার করুন: 'If I were able to speak Mandarin fluently, I think it would open doors in terms of business opportunities that are simply not available otherwise.'",
    vocabulary: ['proficiency', 'dedicated practice', 'master', 'versatile', 'career prospects', 'discipline', 'commitment'],
  },
  {
    id: 'p2-change-local',
    part: 2,
    topic: 'A change that improved your area',
    topicBn: 'এমন একটি পরিবর্তন যা আপনার এলাকার উন্নতি করেছে',
    category: 'Community',
    cueCard: {
      describe: 'Describe a change that has improved your local area.',
      describeBn: 'এমন একটি পরিবর্তনের বর্ণনা দিন যা আপনার স্থানীয় এলাকার উন্নতি করেছে।',
      points: [
        'What the change was',
        'When it happened',
        'How it has benefited people in the area',
        'And explain whether you think more changes are needed',
      ],
      pointsBn: [
        'পরিবর্তনটি কী ছিল',
        'কখন এটি ঘটেছিল',
        'এটি এলাকার মানুষদের কীভাবে উপকৃত করেছে',
        'এবং ব্যাখ্যা করুন আপনি মনে করেন কি আরও পরিবর্তন দরকার',
      ],
      followUp: 'Who is responsible for improving local areas — the government or residents?',
      followUpBn: 'স্থানীয় এলাকার উন্নতির জন্য কে দায়ী — সরকার নাকি বাসিন্দারা?',
    },
    bandTip: "Use before/after structure: 'Before the metro line opened, my commute took over two hours. Now it takes forty minutes — it has genuinely transformed daily life for thousands of people.'",
    bandTipBn: "আগে/পরে কাঠামো ব্যবহার করুন: 'Before the metro line opened, my commute took over two hours. Now it takes forty minutes — it has genuinely transformed daily life for thousands of people.'",
    vocabulary: ['infrastructure', 'revitalise', 'quality of life', 'residents', 'commute', 'accessibility', 'urban renewal'],
  },
  {
    id: 'p2-book-impact',
    part: 2,
    topic: 'A book that had an impact on you',
    topicBn: 'এমন একটি বই যা আপনার উপর প্রভাব ফেলেছিল',
    category: 'Arts & Culture',
    cueCard: {
      describe: 'Describe a book that had a significant impact on you.',
      describeBn: 'এমন একটি বইয়ের বর্ণনা দিন যা আপনার উপর গুরুত্বপূর্ণ প্রভাব ফেলেছিল।',
      points: [
        'What the book is about',
        'When and why you read it',
        'What impact it had on you',
        'And explain whether you would recommend it to others',
      ],
      pointsBn: [
        'বইটি কী নিয়ে',
        'আপনি কখন এবং কেন এটি পড়েছিলেন',
        'এটি আপনার উপর কী প্রভাব ফেলেছিল',
        'এবং ব্যাখ্যা করুন আপনি কি অন্যদের এটি সুপারিশ করবেন',
      ],
      followUp: 'Do you think reading books is becoming less popular? Why?',
      followUpBn: 'আপনি কি মনে করেন বই পড়া কম জনপ্রিয় হয়ে যাচ্ছে? কেন?',
    },
    bandTip: "Go beyond the plot — explain the emotional response: 'What struck me most was not the story itself but the author\'s ability to make me question assumptions I had never even examined.'",
    bandTipBn: "গল্পের বাইরে যান — আবেগিক প্রতিক্রিয়া ব্যাখ্যা করুন: 'What struck me most was not the story itself but the author's ability to make me question assumptions I had never even examined.'",
    vocabulary: ['thought-provoking', 'perspective-shifting', 'profound', 'gripping', 'narrative arc', 'author\'s voice', 'resonate'],
  },
  {
    id: 'p2-achievement',
    part: 2,
    topic: 'An achievement you are proud of',
    topicBn: 'এমন একটি অর্জন যার জন্য আপনি গর্বিত',
    category: 'Personal',
    cueCard: {
      describe: 'Describe an achievement you are particularly proud of.',
      describeBn: 'এমন একটি অর্জনের বর্ণনা দিন যার জন্য আপনি বিশেষভাবে গর্বিত।',
      points: [
        'What the achievement was',
        'How you managed to achieve it',
        'What challenges you faced along the way',
        'And explain why this achievement is so meaningful to you',
      ],
      pointsBn: [
        'অর্জনটি কী ছিল',
        'আপনি কীভাবে এটি অর্জন করতে সক্ষম হয়েছিলেন',
        'পথে আপনি কোন চ্যালেঞ্জ মোকাবেলা করেছিলেন',
        'এবং ব্যাখ্যা করুন কেন এই অর্জনটি আপনার কাছে এত অর্থবহ',
      ],
      followUp: 'Is it more important to achieve things alone or with a team?',
      followUpBn: 'একা নাকি দলগতভাবে জিনিস অর্জন করা বেশি গুরুত্বপূর্ণ?',
    },
    bandTip: "Don't be too modest. Use intensifiers: 'Completing that marathon was, without doubt, the single most physically demanding thing I have ever done — but also the most rewarding.'",
    bandTipBn: "অতিরিক্ত বিনয়ী হবেন না। Intensifiers ব্যবহার করুন: 'Completing that marathon was, without doubt, the single most physically demanding thing I have ever done — but also the most rewarding.'",
    vocabulary: ['perseverance', 'milestone', 'overcome', 'gratifying', 'discipline', 'setback', 'determination'],
  },
  {
    id: 'p2-helped-someone',
    part: 2,
    topic: 'A time you helped someone',
    topicBn: 'এমন একটি সময় যখন আপনি কাউকে সাহায্য করেছিলেন',
    category: 'Experience',
    cueCard: {
      describe: 'Describe a time when you helped someone.',
      describeBn: 'এমন একটি সময়ের বর্ণনা দিন যখন আপনি কাউকে সাহায্য করেছিলেন।',
      points: [
        'Who you helped and what the situation was',
        'How you helped them',
        'What difficulties you encountered',
        'And explain how you felt about helping them',
      ],
      pointsBn: [
        'আপনি কাকে সাহায্য করেছিলেন এবং পরিস্থিতি কী ছিল',
        'আপনি কীভাবে তাদের সাহায্য করেছিলেন',
        'কোন অসুবিধার সম্মুখীন হয়েছিলেন',
        'এবং ব্যাখ্যা করুন তাদের সাহায্য করার বিষয়ে আপনি কেমন অনুভব করেছিলেন',
      ],
      followUp: 'Do you think people today are less willing to help strangers than in the past?',
      followUpBn: 'আপনি কি মনে করেন আজকের মানুষ অতীতের চেয়ে অপরিচিতদের সাহায্য করতে কম আগ্রহী?',
    },
    bandTip: "Show emotional nuance: 'I was nervous at first because I wasn't sure I was qualified to help, but I could see they were in genuine distress, so I pushed past that hesitation.'",
    bandTipBn: "আবেগিক সূক্ষ্মতা দেখান: 'I was nervous at first because I wasn't sure I was qualified to help, but I could see they were in genuine distress, so I pushed past that hesitation.'",
    vocabulary: ['empathy', 'altruistic', 'compassionate', 'initiative', 'reassure', 'resourceful', 'grateful'],
  },
];

// ── PART 3 TOPICS ─────────────────────────────────────────────────────────

export const PART3_TOPICS: Part3Topic[] = [
  {
    id: 'p3-role-models',
    part: 3,
    topic: 'Role Models & Society',
    topicBn: 'রোল মডেল ও সমাজ',
    linkedToId: 'p2-person-admire',
    category: 'Society',
    questions: [
      'What qualities make a good role model for young people today?',
      'Do you think social media has changed the kind of people young people look up to?',
      'Should celebrities be expected to act as role models? Why / Why not?',
      'How important are teachers as role models compared to parents?',
      'Is the concept of a "hero" still relevant in modern society?',
    ],
    questionsBn: [
      'আজকের তরুণদের জন্য কোন গুণগুলো একজন ভালো রোল মডেল তৈরি করে?',
      'আপনি কি মনে করেন সোশ্যাল মিডিয়া তরুণরা কার দিকে তাকায় তা পরিবর্তন করেছে?',
      'সেলিব্রিটিদের কি রোল মডেল হিসেবে কাজ করার প্রত্যাশা রাখা উচিত? কেন / কেন নয়?',
      'বাবা-মায়ের তুলনায় শিক্ষকরা রোল মডেল হিসেবে কতটা গুরুত্বপূর্ণ?',
      'আধুনিক সমাজে "বীর" ধারণাটি কি এখনও প্রাসঙ্গিক?',
    ],
    bandTip: "Part 3 rewards extended reasoning. Use: 'That\'s an interesting question. I suppose... On balance, I would say... though I can see the counter-argument that...' Never give one-sentence answers.",
    bandTipBn: "Part 3 বর্ধিত যুক্তিকে পুরস্কৃত করে। ব্যবহার করুন: 'That\'s an interesting question. I suppose... On balance, I would say... though I can see the counter-argument that...' কখনো এক-বাক্যের উত্তর দেবেন না।",
  },
  {
    id: 'p3-technology-society',
    part: 3,
    topic: 'Technology & Society',
    topicBn: 'প্রযুক্তি ও সমাজ',
    linkedToId: 'p2-useful-technology',
    category: 'Technology',
    questions: [
      'How has technology changed the way people work in the last twenty years?',
      'Do you think technology is creating a more unequal society? Why?',
      'What are the risks of societies becoming too dependent on technology?',
      'Should governments regulate the internet? What are the arguments for and against?',
      'Do you think AI will replace human workers in most jobs? What are the implications?',
    ],
    questionsBn: [
      'গত বিশ বছরে প্রযুক্তি মানুষের কাজের পদ্ধতি কীভাবে পরিবর্তন করেছে?',
      'আপনি কি মনে করেন প্রযুক্তি আরও অসমান সমাজ তৈরি করছে? কেন?',
      'সমাজ প্রযুক্তির উপর অতিরিক্ত নির্ভরশীল হলে কী ঝুঁকি আছে?',
      'সরকারের কি ইন্টারনেট নিয়ন্ত্রণ করা উচিত? পক্ষে ও বিপক্ষে যুক্তি কী?',
      'আপনি কি মনে করেন AI বেশিরভাগ কাজে মানব শ্রমিকদের প্রতিস্থাপন করবে? এর প্রভাব কী?',
    ],
    bandTip: "Use hedging with evidence: 'There is growing evidence to suggest that automation is already displacing lower-skilled workers, and while some economists argue this creates new jobs, I'm not entirely convinced the transition is smooth or fair.'",
    bandTipBn: "প্রমাণ সহ হেজিং ব্যবহার করুন: 'There is growing evidence to suggest that automation is already displacing lower-skilled workers, and while some economists argue this creates new jobs, I'm not entirely convinced the transition is smooth or fair.'",
  },
  {
    id: 'p3-travel-globalisation',
    part: 3,
    topic: 'Travel & Globalisation',
    topicBn: 'ভ্রমণ ও বিশ্বায়ন',
    linkedToId: 'p2-memorable-journey',
    category: 'Society',
    questions: [
      'How has increased travel affected national cultures?',
      'Is mass tourism a good or bad thing for local communities?',
      'Should wealthier countries be responsible for making travel more accessible to poorer nations?',
      'Do you think virtual travel experiences could ever replace real travel?',
      'What are the environmental costs of modern international travel?',
    ],
    questionsBn: [
      'বর্ধিত ভ্রমণ জাতীয় সংস্কৃতিকে কীভাবে প্রভাবিত করেছে?',
      'গণ পর্যটন কি স্থানীয় সম্প্রদায়ের জন্য ভালো না খারাপ?',
      'ধনী দেশগুলোর কি দরিদ্র দেশগুলোর জন্য ভ্রমণ আরও সহজলভ্য করার দায়িত্ব নেওয়া উচিত?',
      'আপনি কি মনে করেন ভার্চুয়াল ভ্রমণ অভিজ্ঞতা কি কখনো বাস্তব ভ্রমণ প্রতিস্থাপন করতে পারে?',
      'আধুনিক আন্তর্জাতিক ভ্রমণের পরিবেশগত খরচ কী?',
    ],
    bandTip: "Show awareness of complexity: 'This is a nuanced issue. On one hand, tourism generates vital income for developing economies. On the other, the environmental and cultural costs can be severe, particularly in fragile ecosystems.'",
    bandTipBn: "জটিলতা সম্পর্কে সচেতনতা দেখান: 'This is a nuanced issue. On one hand, tourism generates vital income for developing economies. On the other, the environmental and cultural costs can be severe, particularly in fragile ecosystems.'",
  },
  {
    id: 'p3-education-future',
    part: 3,
    topic: 'Education & Future Skills',
    topicBn: 'শিক্ষা ও ভবিষ্যৎ দক্ষতা',
    linkedToId: 'p2-skill-learn',
    category: 'Education',
    questions: [
      'How do you think education systems will change in the next fifty years?',
      'Should schools focus more on practical skills or academic knowledge?',
      'Is a university degree still worth the investment today?',
      'What role should governments play in funding education?',
      'How can schools better prepare students for a rapidly changing job market?',
    ],
    questionsBn: [
      'আগামী পঞ্চাশ বছরে শিক্ষা ব্যবস্থা কীভাবে পরিবর্তন হবে বলে আপনি মনে করেন?',
      'স্কুলগুলোর কি ব্যবহারিক দক্ষতায় বেশি মনোযোগ দেওয়া উচিত নাকি একাডেমিক জ্ঞানে?',
      'আজকের দিনে কি বিশ্ববিদ্যালয়ের ডিগ্রি এখনও বিনিয়োগের মূল্য আছে?',
      'শিক্ষায় অর্থায়নে সরকারের কী ভূমিকা পালন করা উচিত?',
      'দ্রুত পরিবর্তনশীল চাকরির বাজারের জন্য স্কুলগুলো কীভাবে শিক্ষার্থীদের আরও ভালোভাবে প্রস্তুত করতে পারে?',
    ],
    bandTip: "Use the phrase 'it depends on' to show nuanced thinking: 'Whether a degree is worth the investment depends largely on the field. For medicine or law, absolutely. For entrepreneurship, perhaps less so.'",
    bandTipBn: "'it depends on' বাক্যাংশ ব্যবহার করুন সূক্ষ্ম চিন্তা দেখাতে: 'Whether a degree is worth the investment depends largely on the field. For medicine or law, absolutely. For entrepreneurship, perhaps less so.'",
  },
  {
    id: 'p3-community-change',
    part: 3,
    topic: 'Urban Development & Community',
    topicBn: 'নগর উন্নয়ন ও সম্প্রদায়',
    linkedToId: 'p2-change-local',
    category: 'Community',
    questions: [
      'Who should have more say in local development — governments, developers, or residents?',
      'How do you think cities will need to change to deal with population growth?',
      'Is the rapid growth of cities like Dhaka sustainable in the long term?',
      'How does urban planning affect the quality of life for ordinary citizens?',
      'What do you think is the biggest challenge for cities in developing countries?',
    ],
    questionsBn: [
      'স্থানীয় উন্নয়নে কার বেশি মতামত থাকা উচিত — সরকার, ডেভেলপার নাকি বাসিন্দারা?',
      'জনসংখ্যা বৃদ্ধি মোকাবেলায় শহরগুলোকে কীভাবে পরিবর্তন করতে হবে বলে আপনি মনে করেন?',
      'ঢাকার মতো শহরের দ্রুত বৃদ্ধি কি দীর্ঘমেয়াদে টেকসই?',
      'নগর পরিকল্পনা সাধারণ নাগরিকদের জীবনমান কীভাবে প্রভাবিত করে?',
      'উন্নয়নশীল দেশের শহরগুলোর সবচেয়ে বড় চ্যালেঞ্জ কী বলে আপনি মনে করেন?',
    ],
    bandTip: "Reference local context: Bangladeshi students who mention Dhaka's specific challenges (flooding, traffic, informal housing) with concrete facts score higher than those giving generic answers.",
    bandTipBn: "স্থানীয় প্রসঙ্গ উল্লেখ করুন: বাংলাদেশী শিক্ষার্থীরা যারা ঢাকার নির্দিষ্ট চ্যালেঞ্জ (বন্যা, যানজট, অনানুষ্ঠানিক আবাসন) নির্দিষ্ট তথ্য সহ উল্লেখ করেন তারা সাধারণ উত্তর দেওয়াদের চেয়ে বেশি স্কোর করেন।",
  },
  {
    id: 'p3-reading-media',
    part: 3,
    topic: 'Reading, Media & Information',
    topicBn: 'পড়া, মিডিয়া ও তথ্য',
    linkedToId: 'p2-book-impact',
    category: 'Culture',
    questions: [
      'How has the internet changed the way people access information?',
      'Do you think people today are more or less well-informed than in the past?',
      'Should social media companies be responsible for preventing the spread of misinformation?',
      'Is long-form reading becoming a lost skill? What are the consequences?',
      'How do you think journalism will change in the next decade?',
    ],
    questionsBn: [
      'ইন্টারনেট মানুষের তথ্য অ্যাক্সেসের পদ্ধতি কীভাবে পরিবর্তন করেছে?',
      'আপনি কি মনে করেন আজকের মানুষ অতীতের চেয়ে বেশি না কম সচেতন?',
      'সোশ্যাল মিডিয়া কোম্পানিগুলোর কি ভুল তথ্য ছড়িয়ে পড়া রোধের দায়িত্ব নেওয়া উচিত?',
      'দীর্ঘ-ফর্ম পড়া কি একটি হারিয়ে যাওয়া দক্ষতা হয়ে যাচ্ছে? পরিণতি কী?',
      'আগামী দশকে সাংবাদিকতা কীভাবে পরিবর্তন হবে বলে আপনি মনে করেন?',
    ],
    bandTip: "Quote a statistic or named source even if approximate: 'I read somewhere that the average attention span has dropped significantly since the rise of social media — though I\'d want to verify that claim before stating it as fact.'",
    bandTipBn: "একটি পরিসংখ্যান বা নামযুক্ত উৎস উল্লেখ করুন এমনকি আনুমানিক হলেও: 'I read somewhere that the average attention span has dropped significantly since the rise of social media — though I'd want to verify that claim before stating it as fact.'",
  },
  {
    id: 'p3-personal-achievement',
    part: 3,
    topic: 'Success & Ambition',
    topicBn: 'সাফল্য ও উচ্চাকাঙ্ক্ষা',
    linkedToId: 'p2-achievement',
    category: 'Personal Development',
    questions: [
      'How does your society define success?',
      'Is ambition always a positive quality? Can it have negative consequences?',
      'Do you think success is more the result of hard work or natural talent?',
      'Has the definition of success changed in your country in recent decades?',
      'Are competitive education systems healthy or harmful for young people?',
    ],
    questionsBn: [
      'আপনার সমাজ সাফল্যকে কীভাবে সংজ্ঞায়িত করে?',
      'উচ্চাকাঙ্ক্ষা কি সবসময় ইতিবাচক গুণ? এর কি নেতিবাচক পরিণতি হতে পারে?',
      'আপনি কি মনে করেন সাফল্য কঠোর পরিশ্রম নাকি প্রাকৃতিক প্রতিভার ফলাফল?',
      'সাম্প্রতিক দশকগুলোতে আপনার দেশে সাফল্যের সংজ্ঞা কি পরিবর্তিত হয়েছে?',
      'প্রতিযোগিতামূলক শিক্ষা ব্যবস্থা তরুণদের জন্য স্বাস্থ্যকর নাকি ক্ষতিকর?',
    ],
    bandTip: "Show cultural awareness: 'In Bangladesh, success has traditionally been equated with securing a government job or professional degree. But I think that is beginning to shift among younger generations towards entrepreneurship and creative fields.'",
    bandTipBn: "সাংস্কৃতিক সচেতনতা দেখান: 'In Bangladesh, success has traditionally been equated with securing a government job or professional degree. But I think that is beginning to shift among younger generations towards entrepreneurship and creative fields.'",
  },
  {
    id: 'p3-helping-altruism',
    part: 3,
    topic: 'Altruism & Social Responsibility',
    topicBn: 'পরার্থপরতা ও সামাজিক দায়িত্ব',
    linkedToId: 'p2-helped-someone',
    category: 'Society',
    questions: [
      'Do you think people are naturally generous or does society make them so?',
      'Is it the government\'s responsibility to look after vulnerable members of society, or individuals?',
      'How do you think volunteering affects communities?',
      'Are people in richer countries more or less generous than those in poorer countries?',
      'Do you think social media has made people more aware of others\' problems or simply more passive?',
    ],
    questionsBn: [
      'আপনি কি মনে করেন মানুষ স্বাভাবিকভাবেই উদার নাকি সমাজ তাদের তেমন করে তোলে?',
      'সমাজের দুর্বল সদস্যদের দেখাশোনা করা কি সরকারের নাকি ব্যক্তিদের দায়িত্ব?',
      'স্বেচ্ছাসেবিতা সম্প্রদায়কে কীভাবে প্রভাবিত করে বলে আপনি মনে করেন?',
      'ধনী দেশের মানুষ কি দরিদ্র দেশের মানুষের চেয়ে বেশি উদার নাকি কম?',
      'আপনি কি মনে করেন সোশ্যাল মিডিয়া মানুষকে অন্যদের সমস্যা সম্পর্কে আরও সচেতন করেছে নাকি শুধু আরও নিষ্ক্রিয়?',
    ],
    bandTip: "Challenge the question to show critical thinking: 'I think the framing of this question assumes generosity is binary, but in reality, generosity often depends on proximity — we are more likely to help people we can see.'",
    bandTipBn: "সমালোচনামূলক চিন্তা দেখাতে প্রশ্নকে চ্যালেঞ্জ করুন: 'I think the framing of this question assumes generosity is binary, but in reality, generosity often depends on proximity — we are more likely to help people we can see.'",
  },
];

export const ALL_SPEAKING_TOPICS: SpeakingTopic[] = [
  ...PART1_TOPICS,
  ...PART2_TOPICS,
  ...PART3_TOPICS,
];
