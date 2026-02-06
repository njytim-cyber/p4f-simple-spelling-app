export interface VocabularyItem {
    id: string;
    word: string;
    meaning: string;
    example: string;
    level: string;
    wrong_answers?: string[];  // Optional curated distractors for MCQ
}

export const VOCABULARY: VocabularyItem[] = [
    {
        id: 'v3',
        word: 'rhythm',
        meaning: 'a strong, regular, repeated pattern of movement or sound',
        example: 'We danced happily to the rhythm of the music at the party last night with all our friends.',
        level: 'p4',
        wrong_answers: ['earth', 'caught', 'eighth']
    },
    {
        id: 'v4',
        word: 'mischievous',
        meaning: 'causing or showing a fondness for causing trouble in a playful way',
        example: 'The mischievous puppy chewed on the slipper and made a mess all over the living room carpet.',
        level: 'p4',
        wrong_answers: ['mischeivous', 'promise', 'develop']
    },
    {
        id: 'v8',
        word: 'disappear',
        meaning: 'to cease to be visible',
        example: 'The magician made the rabbit disappear completely during the amazing trick, and everyone in the audience gasped.',
        level: 'p4',
        wrong_answers: ['disapear', 'disappoint', 'lightning']
    },
    {
        id: 'v9',
        word: 'immediately',
        meaning: 'at once; instantly',
        example: 'The teacher asked us to sit down immediately and be quiet so that the lesson could begin.',
        level: 'p4',
        wrong_answers: ['imediately', 'frequently', 'catastrophe']
    },
    {
        id: 'v10',
        word: 'beginning',
        meaning: 'the point in time or space at which something begins',
        example: 'At the beginning of the story, the hero was just a child.',
        level: 'p4',
        wrong_answers: ['begining', 'lightning', 'definite']
    },
    {
        id: 'v11',
        word: 'beautiful',
        meaning: 'pleasing the senses or mind aesthetically',
        example: 'The sunset was absolutely beautiful with amazing colours of orange, pink, and purple across the sky last evening.',
        level: 'p4',
        wrong_answers: ['grateful', 'endeavour', 'leisure']
    },
    {
        id: 'v13',
        word: 'business',
        meaning: 'a commercial activity or enterprise',
        example: 'My uncle runs a successful business selling computers and electronic equipment to customers all over the country.',
        level: 'p4',
        wrong_answers: ['busines', 'possess', 'believe']
    },
    {
        id: 'v22',
        word: 'describe',
        meaning: 'to give an account in words of someone or something',
        example: 'Can you describe what the thief looked like to the police officer so they can find him quickly?',
        level: 'p4',
        wrong_answers: ['describ', 'deceive', 'decide']
    },
    {
        id: 'v23',
        word: 'answer',
        meaning: 'something said or written in response to a question',
        example: 'I knew the answer to every question on the test.',
        level: 'p4',
        wrong_answers: ['ancient', 'amateur', 'awkward']
    },
    {
        id: 'v25',
        word: 'caught',
        meaning: 'past tense of catch',
        example: 'The goalkeeper caught the ball brilliantly during the match and saved our team from losing the important game.',
        level: 'p4',
        wrong_answers: ['height', 'weight', 'thought']
    },
    {
        id: 'v27',
        word: 'enough',
        meaning: 'as much or as many as required',
        example: 'Do we have enough food for everyone at the party, or should we order more pizza and snacks?',
        level: 'p4',
        wrong_answers: ['enoff', 'through', 'thought']
    },
    {
        id: 'v159',
        word: 'minute',
        meaning: 'a period of sixty seconds',
        example: 'Wait here for a minute while I get my coat.',
        level: 'p4',
        wrong_answers: ['minut', 'eighth', 'length']
    },
    {
        id: 'v34',
        word: 'parliament',
        meaning: 'the highest law-making body in a country',
        example: 'The new law was debated in parliament by the politicians, and they voted on it last week finally.',
        level: 'p5',
        wrong_answers: ['argument', 'equipment', 'apparent']
    },
    {
        id: 'v38',
        word: 'government',
        meaning: 'the group of people who govern a country or state',
        example: 'The government announced new education policies yesterday to help improve schools and provide better opportunities for young people.',
        level: 'p5',
        wrong_answers: ['environment', 'leisure', 'bargain']
    },
    {
        id: 'v39',
        word: 'recommend',
        meaning: 'to put forward with approval as being suitable',
        example: 'I would recommend this book to anyone who loves adventure.',
        level: 'p5',
        wrong_answers: ['recomend', 'recent', 'remember']
    },
    {
        id: 'v42',
        word: 'opportunity',
        meaning: 'a set of circumstances that makes it possible to do something',
        example: 'This is a wonderful opportunity to learn a new skill.',
        level: 'p5',
        wrong_answers: ['oportunity', 'community', 'opposite']
    },
    {
        id: 'v44',
        word: 'especially',
        meaning: 'to a great extent; very much',
        example: 'I love all fruits, especially mangoes, which are my favourite because they are sweet and juicy in summer.',
        level: 'p5',
        wrong_answers: ['especialy', 'special', 'although']
    },
    {
        id: 'v49',
        word: 'community',
        meaning: 'a group of people living in the same place',
        example: 'Our school serves the local community by providing education and hosting events for families in the neighbourhood.',
        level: 'p5',
        wrong_answers: ['comunity', 'committee', 'curiosity']
    },
    {
        id: 'v50',
        word: 'century',
        meaning: 'a period of one hundred years',
        example: 'We are living in the twenty-first century, which started in the year 2001 and will end in 2100.',
        level: 'p5',
        wrong_answers: ['sentury', 'cemetery', 'leisure']
    },
    {
        id: 'v56',
        word: 'persuade',
        meaning: 'to cause someone to do something through reasoning',
        example: 'I tried to persuade him to come to the party with us, but he said he was too tired.',
        level: 'p5',
        wrong_answers: ['persuad', 'pressure', 'leisure']
    },
    {
        id: 'v57',
        word: 'physical',
        meaning: 'relating to the body',
        example: 'Swimming is good physical exercise that helps to keep your body fit, healthy, and strong all year round.',
        level: 'p5',
        wrong_answers: ['fysical', 'possible', 'special']
    },
    {
        id: 'v58',
        word: 'queue',
        meaning: 'a line of people or vehicles waiting their turn',
        example: 'There was a long queue at the ticket office, so we had to wait for ages to buy tickets.',
        level: 'p5',
        wrong_answers: ['build', 'bruise', 'minute']
    },
    {
        id: 'v59',
        word: 'yacht',
        meaning: 'a medium-sized sailing boat',
        example: 'They sailed their yacht across the Mediterranean Sea during the summer holidays and visited many beautiful islands.',
        level: 'p5',
        wrong_answers: ['caught', 'young', 'early']
    },
    {
        id: 'v64',
        word: 'restaurant',
        meaning: 'a place where people pay to sit and eat meals',
        example: 'We went to an Italian restaurant for dinner last night and enjoyed delicious pasta and pizza with the family.',
        level: 'p6',
        wrong_answers: ['relevant', 'circle', 'caught']
    },
    {
        id: 'v73',
        word: 'vehicle',
        meaning: 'a thing used for transporting people or goods',
        example: 'The vehicle broke down on the motorway, so we had to wait for the rescue service to come.',
        level: 'p6',
        wrong_answers: ['vehicl', 'believe', 'bicycle']
    },
    {
        id: 'v81',
        word: 'frequently',
        meaning: 'regularly; many times',
        example: 'He frequently visits his grandmother on Saturdays to spend quality time with her and help around the house.',
        level: 'p6',
        wrong_answers: ['recent', 'government', 'medicine']
    },
    {
        id: 'v85',
        word: 'lightning',
        meaning: 'the occurrence of a natural electrical discharge',
        example: 'The lightning lit up the entire sky during the thunderstorm, and we could see everything for a moment clearly.',
        level: 'p6',
        wrong_answers: ['beginning', 'eighth', 'calendar']
    },
    {
        id: 'v87',
        word: 'privilege',
        meaning: 'a special right or advantage',
        example: 'Education is a privilege, not everyone has access to it.',
        level: 'p6',
        wrong_answers: ['privileg', 'promise', 'queue']
    },
    {
        id: 'v90',
        word: 'sincerely',
        meaning: 'in a genuine way',
        example: 'I sincerely apologise for the misunderstanding and any inconvenience or upset that I may have caused you today.',
        level: 'p6',
        wrong_answers: ['sinserely', 'different', 'interfere']
    },
    {
        id: 'v97',
        word: 'apparent',
        meaning: 'clearly visible or understood',
        example: 'It was apparent that she had been crying because her eyes were red and swollen from all the tears.',
        level: 'sec1',
        wrong_answers: ['aparent', 'argument', 'accident']
    },
    {
        id: 'v100',
        word: 'awkward',
        meaning: 'causing difficulty; hard to do or deal with',
        example: 'There was an awkward silence after the announcement, and nobody knew what to say to break the tension.',
        level: 'sec1',
        wrong_answers: ['answer', 'library', 'acquire']
    },
    {
        id: 'v101',
        word: 'bargain',
        meaning: 'a thing bought or offered for sale at a low price; a good deal',
        example: 'We got a real bargain at the sale and bought a television for half the original price yesterday.',
        level: 'sec1',
        wrong_answers: ['certain', 'foreign', 'perhaps']
    },
    {
        id: 'v110',
        word: 'develop',
        meaning: 'to grow or cause to grow gradually',
        example: 'Children develop at different rates, and it is important not to compare them with others their age unnecessarily.',
        level: 'sec1',
        wrong_answers: ['deceive', 'receive', 'dilemma']
    }
];
