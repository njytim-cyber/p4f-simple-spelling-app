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
        id: 'v7',
        word: 'favourite',
        meaning: 'preferred before all others of the same kind',
        example: 'Chocolate ice cream is my favourite dessert because I love the rich taste and smooth creamy texture.',
        level: 'p4',
        wrong_answers: ['preferred', 'chosen', 'beloved']
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
        id: 'v18',
        word: 'bicycle',
        meaning: 'a vehicle with two wheels that you pedal',
        example: 'I learnt to ride a bicycle when I was six years old, and now I cycle everywhere with confidence.',
        level: 'p4',
        wrong_answers: ['scooter', 'tricycle', 'vehicle']
    },
    {
        id: 'v19',
        word: 'surprise',
        meaning: 'an unexpected or astonishing event',
        example: 'The party was a complete surprise for Mum, and she was so happy when everyone shouted out congratulations.',
        level: 'p4',
        wrong_answers: ['shock', 'mystery', 'secret']
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
        id: 'v26',
        word: 'through',
        meaning: 'moving in one side and out of the other',
        example: 'We walked through the long dark tunnel carefully, holding hands to feel safer in the darkness together.',
        level: 'p4',
        wrong_answers: ['across', 'along', 'within']
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
        id: 'v30',
        word: 'brought',
        meaning: 'past tense of bring',
        example: 'She brought sandwiches for lunch to share with her friends during the picnic in the park today.',
        level: 'p4',
        wrong_answers: ['carried', 'fetched', 'delivered']
    },
    {
        id: 'v32',
        word: 'embarrassment',
        meaning: 'a feeling of self-consciousness, shame, or awkwardness',
        example: 'She blushed with embarrassment when she tripped over the bag and fell in front of all her classmates.',
        level: 'p5',
        wrong_answers: ['shame', 'awkwardness', 'discomfort']
    },
    {
        id: 'v34',
        word: 'parliament',
        meaning: 'the highest legislature, consisting of the sovereign, the House of Lords, and the House of Commons',
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
        id: 'v40',
        word: 'occurred',
        meaning: 'happened; took place',
        example: 'The accident occurred at the junction this morning during rush hour when two cars collided head-on with each other.',
        level: 'p5',
        wrong_answers: ['happened', 'arose', 'transpired']
    },
    {
        id: 'v41',
        word: 'possession',
        meaning: 'the state of having or owning something',
        example: 'The book is in my possession now, so I can return it to the library tomorrow morning.',
        level: 'p5',
        wrong_answers: ['ownership', 'custody', 'control']
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
        id: 'v52',
        word: 'bruise',
        meaning: 'an injury appearing as a discoloured area on the skin',
        example: 'I got a bruise on my knee from falling off my bike.',
        level: 'p5',
        wrong_answers: ['injury', 'wound', 'mark']
    },
    {
        id: 'v53',
        word: 'eighth',
        meaning: 'constituting number eight in a sequence',
        example: 'This is my eighth year at this school, and I have really enjoyed every moment of my time here.',
        level: 'p5',
        wrong_answers: ['seventh', 'ninth', 'final']
    },
    {
        id: 'v54',
        word: 'height',
        meaning: 'the measurement from base to top',
        example: 'What is the height of the tallest mountain in the world, and how difficult is it to climb?',
        level: 'p5',
        wrong_answers: ['altitude', 'elevation', 'stature']
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
        id: 'v63',
        word: 'yacht',
        meaning: 'a medium-sized sailing boat',
        example: 'The wealthy family owned a luxury yacht and went sailing every weekend during the summer months in style.',
        level: 'p6',
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
        id: 'v66',
        word: 'sufficient',
        meaning: 'enough; adequate',
        example: 'Do we have sufficient time to finish the project before the deadline, or should we ask for an extension?',
        level: 'p6',
        wrong_answers: ['adequate', 'enough', 'ample']
    },
    {
        id: 'v67',
        word: 'conscience',
        meaning: 'an inner feeling or voice viewed as acting as a guide',
        example: 'Her conscience told her to confess the truth about what happened, even though she was afraid of getting into trouble.',
        level: 'p6',
        wrong_answers: ['morals', 'principles', 'ethics']
    },
    {
        id: 'v71',
        word: 'hindrance',
        meaning: 'a thing that provides resistance or delay',
        example: 'The bad weather was a hindrance to our plans for the outdoor picnic, so we stayed indoors instead.',
        level: 'p6',
        wrong_answers: ['obstacle', 'barrier', 'impediment']
    },
    {
        id: 'v72',
        word: 'thorough',
        meaning: 'complete with regard to every detail',
        example: 'The police conducted a thorough investigation into the crime and questioned everyone who was at the scene yesterday.',
        level: 'p6',
        wrong_answers: ['complete', 'detailed', 'comprehensive']
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
        id: 'v75',
        word: 'conscience',
        meaning: 'moral sense of right and wrong',
        example: 'His conscience bothered him about the lie he told, and he felt guilty for days until he confessed.',
        level: 'p6',
        wrong_answers: ['morals', 'principles', 'ethics']
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
        id: 'v84',
        word: 'leisure',
        meaning: 'free time',
        example: 'What do you like to do in your leisure time when you finish school and have completed all homework?',
        level: 'p6',
        wrong_answers: ['spare', 'free', 'recreational']
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
        id: 'v86',
        word: 'parliament',
        meaning: 'the supreme legislative body',
        example: 'The bill was passed in parliament yesterday after a long debate by members about the new policy proposals.',
        level: 'p6',
        wrong_answers: ['argument', 'equipment', 'apparent']
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
        id: 'v88',
        word: 'profession',
        meaning: 'a paid occupation requiring training',
        example: 'Teaching is a noble profession that requires dedication, patience, and a love of helping children learn new things.',
        level: 'p6',
        wrong_answers: ['occupation', 'career', 'vocation']
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
        id: 'v91',
        word: 'maintenance',
        meaning: 'the process of maintaining or preserving something',
        example: 'Regular maintenance is required to keep the car running smoothly.',
        level: 'sec1',
        wrong_answers: ['upkeep', 'servicing', 'repairs']
    },
    {
        id: 'v92',
        word: 'privilege',
        meaning: 'a special right, advantage, or immunity',
        example: 'Education is a right, not a privilege, and every child should have access to quality learning opportunities.',
        level: 'sec1',
        wrong_answers: ['privileg', 'promise', 'calendar']
    },
    {
        id: 'v93',
        word: 'accessible',
        meaning: 'able to be reached or entered',
        example: 'The building is accessible to wheelchair users with ramps and lifts installed throughout all the different floors.',
        level: 'sec1',
        wrong_answers: ['available', 'reachable', 'usable']
    },
    {
        id: 'v96',
        word: 'aggression',
        meaning: 'hostile or violent behaviour',
        example: 'The dog showed no signs of aggression towards us and seemed very friendly and gentle with everyone nearby.',
        level: 'sec1',
        wrong_answers: ['hostility', 'violence', 'anger']
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
        meaning: 'an agreement between two parties',
        example: 'We got a real bargain at the sale and bought a television for half the original price yesterday.',
        level: 'sec1',
        wrong_answers: ['certain', 'foreign', 'perhaps']
    },
    {
        id: 'v102',
        word: 'cemetery',
        meaning: 'a burial ground',
        example: 'The old cemetery was overgrown with weeds and had many headstones dating back hundreds of years to ancient times.',
        level: 'sec1',
        wrong_answers: ['graveyard', 'burial', 'memorial']
    },
    {
        id: 'v103',
        word: 'committee',
        meaning: 'a group appointed for a specific function',
        example: 'The committee will meet next Tuesday to discuss the plans for the school fair and make final decisions.',
        level: 'sec1',
        wrong_answers: ['council', 'board', 'panel']
    },
    {
        id: 'v110',
        word: 'develop',
        meaning: 'to grow or cause to grow gradually',
        example: 'Children develop at different rates, and it is important not to compare them with others their age unnecessarily.',
        level: 'sec1',
        wrong_answers: ['deceive', 'receive', 'dilemma']
    },
    {
        id: 'v137',
        word: 'correspondence',
        meaning: 'communication by exchanging letters',
        example: 'She kept up a regular correspondence with her pen pal.',
        level: 'sec2',
        wrong_answers: ['communication', 'letters', 'exchange']
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
        id: 'v206',
        word: 'library',
        meaning: 'a building or room containing collections of books for people to read or borrow',
        example: 'We visit the school library every Wednesday afternoon to borrow new books and read quietly for an hour.',
        level: 'p4',
        wrong_answers: ['bookshop', 'collection', 'archive']
    },
    {
        id: 'v207',
        word: 'February',
        meaning: 'the second month of the year',
        example: 'My birthday is in February, which is the shortest month of the year with only twenty-eight days.',
        level: 'p4',
        wrong_answers: ['January', 'December', 'November']
    },
    {
        id: 'v208',
        word: 'Wednesday',
        meaning: 'the day of the week between Tuesday and Thursday',
        example: 'We have our music lesson every Wednesday morning right after assembly in the school hall.',
        level: 'p4',
        wrong_answers: ['Thursday', 'Tuesday', 'weekend']
    },
    {
        id: 'v209',
        word: 'environment',
        meaning: 'the surroundings or conditions in which a person, animal, or plant lives',
        example: 'We must protect the environment by recycling rubbish and planting more trees in our neighbourhood parks.',
        level: 'p4',
        wrong_answers: ['surroundings', 'habitat', 'ecosystem']
    },
    {
        id: 'v210',
        word: 'temperature',
        meaning: 'the degree of heat present in a substance or object',
        example: 'The nurse checked my temperature with a thermometer when I felt unwell and had a high fever.',
        level: 'p4',
        wrong_answers: ['warmth', 'heat', 'climate']
    },
    {
        id: 'v211',
        word: 'conscience',
        meaning: 'an inner feeling about whether your actions are right or wrong',
        example: 'My conscience told me to return the wallet I found instead of keeping the money for myself.',
        level: 'p4',
        wrong_answers: ['morals', 'ethics', 'principles']
    },
    {
        id: 'v212',
        word: 'government',
        meaning: 'the group of people who control and make decisions for a country',
        example: 'The government announced new rules to help protect endangered animals in wildlife reserves across the country.',
        level: 'p4',
        wrong_answers: ['authority', 'council', 'parliament']
    },
    {
        id: 'v213',
        word: 'parliament',
        meaning: 'the group of people who make laws in some countries',
        example: 'Members of parliament debate important issues and vote on new laws to improve our society every week.',
        level: 'p4',
        wrong_answers: ['government', 'assembly', 'congress']
    },
    {
        id: 'v214',
        word: 'guarantee',
        meaning: 'a formal promise that something will happen or be done',
        example: 'The shop gave us a guarantee that they would repair or replace the broken toy within thirty days.',
        level: 'p4',
        wrong_answers: ['promise', 'assurance', 'warranty']
    },
    {
        id: 'v215',
        word: 'lightning',
        meaning: 'a bright flash of light in the sky during a thunderstorm',
        example: 'We saw bright lightning flash across the dark sky followed immediately by loud rumbling thunder during the storm.',
        level: 'p4',
        wrong_answers: ['thunder', 'spark', 'flash']
    },
    {
        id: 'v216',
        word: 'privilege',
        meaning: 'a special right or advantage that only some people have',
        example: 'It is a privilege to represent our school in the national swimming championship competition next month.',
        level: 'p4',
        wrong_answers: ['honour', 'benefit', 'advantage']
    },
    {
        id: 'v217',
        word: 'queue',
        meaning: 'a line of people waiting for something',
        example: 'We stood patiently in a long queue outside the cinema waiting to buy tickets for the new film.',
        level: 'p4',
        wrong_answers: ['line', 'row', 'file']
    },
    {
        id: 'v218',
        word: 'scissors',
        meaning: 'a tool with two blades for cutting paper or cloth',
        example: 'Please use the sharp scissors carefully when cutting out the colourful shapes from the construction paper.',
        level: 'p4',
        wrong_answers: ['shears', 'cutters', 'blades']
    },
    {
        id: 'v219',
        word: 'vegetable',
        meaning: 'a plant or part of a plant used as food',
        example: 'My favourite vegetable is broccoli because it tastes delicious when steamed with a little bit of butter.',
        level: 'p4',
        wrong_answers: ['produce', 'greens', 'crop']
    },
    {
        id: 'v220',
        word: 'vacuum',
        meaning: 'to clean using a machine that sucks up dirt and dust',
        example: 'I helped my mother vacuum the living room carpet to remove all the crumbs after our family dinner.',
        level: 'p4',
        wrong_answers: ['clean', 'sweep', 'hoover']
    },
    {
        id: 'v222',
        word: 'definitely',
        meaning: 'without doubt; certainly',
        example: 'I will definitely finish my homework before dinner because I want to watch my favourite television programme tonight.',
        level: 'p4',
        wrong_answers: ['certainly', 'absolutely', 'surely']
    },
    {
        id: 'v225',
        word: 'maintenance',
        meaning: 'the process of keeping something in good condition',
        example: 'Regular maintenance of our bicycles helps keep them working properly and prevents them from breaking down suddenly.',
        level: 'p4',
        wrong_answers: ['repair', 'upkeep', 'service']
    },
    {
        id: 'v226',
        word: 'appreciate',
        meaning: 'to recognise the value or significance of something',
        example: 'I really appreciate all the hard work my parents do to provide our family with everything we need.',
        level: 'p4',
        wrong_answers: ['value', 'treasure', 'cherish']
    },
    {
        id: 'v227',
        word: 'accommodate',
        meaning: 'to provide lodging or sufficient space for someone',
        example: 'The large hotel can accommodate up to five hundred guests during the busy summer holiday season every year.',
        level: 'p4',
        wrong_answers: ['house', 'shelter', 'lodge']
    },
    {
        id: 'v228',
        word: 'recommend',
        meaning: 'to suggest that something is good or suitable',
        example: 'I would recommend this exciting adventure book to anyone who enjoys reading stories about pirates and buried treasure.',
        level: 'p4',
        wrong_answers: ['suggest', 'propose', 'advise']
    },
    {
        id: 'v229',
        word: 'embarrass',
        meaning: 'to make someone feel awkward or ashamed',
        example: 'My little sister tried to embarrass me by showing my baby photos to all my friends at the party.',
        level: 'p4',
        wrong_answers: ['shame', 'humiliate', 'mortify']
    },
    {
        id: 'v231',
        word: 'journey',
        meaning: 'an act of travelling from one place to another',
        example: 'Our family took a long journey by train across the country to visit my grandparents for the holidays.',
        level: 'p4',
        wrong_answers: ['trip', 'voyage', 'expedition']
    },
    {
        id: 'v235',
        word: 'muscle',
        meaning: 'a band of tissue in the body that can contract to produce movement',
        example: 'After running in the race, my leg muscle felt sore and tired from all the hard exercise.',
        level: 'p4',
        wrong_answers: ['tissue', 'fibre', 'tendon']
    },
    {
        id: 'v236',
        word: 'ocean',
        meaning: 'a very large expanse of sea',
        example: 'The Pacific Ocean is the largest and deepest body of water on Earth, covering nearly half the planet.',
        level: 'p4',
        wrong_answers: ['sea', 'waters', 'marine']
    },
    {
        id: 'v237',
        word: 'neighbour',
        meaning: 'a person living next door to or near another',
        example: 'Our friendly neighbour brought us fresh vegetables from her garden and helped water our plants while we were away.',
        level: 'p4',
        wrong_answers: ['resident', 'local', 'community']
    },
    {
        id: 'v238',
        word: 'disease',
        meaning: 'a disorder of structure or function in an organism',
        example: 'Washing your hands regularly helps prevent the spread of disease and keeps you healthy during flu season.',
        level: 'p4',
        wrong_answers: ['illness', 'sickness', 'infection']
    },
    {
        id: 'v239',
        word: 'creature',
        meaning: 'an animal or person',
        example: 'We discovered a strange creature with eight legs hiding under the rock near the riverbank this morning.',
        level: 'p4',
        wrong_answers: ['animal', 'beast', 'organism']
    },
    {
        id: 'v240',
        word: 'treasure',
        meaning: 'very valuable objects, especially gold, silver, or jewels',
        example: 'The pirates buried their stolen treasure deep underground on a remote desert island many years ago.',
        level: 'p4',
        wrong_answers: ['riches', 'wealth', 'valuables']
    },
    {
        id: 'v241',
        word: 'measure',
        meaning: 'to find the size, amount, or degree of something',
        example: 'We used a ruler to measure the length of the table accurately before buying a new tablecloth.',
        level: 'p4',
        wrong_answers: ['calculate', 'assess', 'gauge']
    },
    {
        id: 'v242',
        word: 'pleasure',
        meaning: 'a feeling of happy satisfaction and enjoyment',
        example: 'Reading adventure stories before bedtime gives me great pleasure and helps me relax after a busy day.',
        level: 'p4',
        wrong_answers: ['joy', 'delight', 'satisfaction']
    },
    {
        id: 'v243',
        word: 'leisure',
        meaning: 'free time when one is not working or occupied',
        example: 'During my leisure time at the weekend, I enjoy playing football with friends in the park nearby.',
        level: 'p4',
        wrong_answers: ['relaxation', 'recreation', 'downtime']
    },
    {
        id: 'v244',
        word: 'bruise',
        meaning: 'an injury appearing as a purple or black mark on the skin',
        example: 'I got a painful bruise on my knee when I fell off my bicycle while racing downhill yesterday.',
        level: 'p4',
        wrong_answers: ['injury', 'mark', 'wound']
    },
    {
        id: 'v245',
        word: 'fierce',
        meaning: 'having a violent or aggressive nature',
        example: 'The fierce lion roared loudly to protect its cubs from danger in the African grasslands during hunting season.',
        level: 'p4',
        wrong_answers: ['savage', 'ferocious', 'aggressive']
    },
    {
        id: 'v246',
        word: 'pierce',
        meaning: 'to make a hole in something with a sharp object',
        example: 'Be careful not to pierce your finger with the sharp needle when sewing the fabric together carefully.',
        level: 'p4',
        wrong_answers: ['puncture', 'penetrate', 'stab']
    },
    {
        id: 'v249',
        word: 'perceive',
        meaning: 'to become aware of something through the senses',
        example: 'I could perceive a faint smell of freshly baked cookies coming from the kitchen downstairs this morning.',
        level: 'p4',
        wrong_answers: ['notice', 'detect', 'sense']
    },
    {
        id: 'v250',
        word: 'ceiling',
        meaning: 'the upper interior surface of a room',
        example: 'The artist painted beautiful stars and clouds on the bedroom ceiling so we could look up at them.',
        level: 'p4',
        wrong_answers: ['roof', 'overhead', 'canopy']
    },
    {
        id: 'v251',
        word: 'foreign',
        meaning: 'belonging to or coming from a country other than your own',
        example: 'Learning a foreign language like French or Spanish opens doors to understanding different cultures and making international friends.',
        level: 'p4',
        wrong_answers: ['overseas', 'international', 'exotic']
    },
    {
        id: 'v252',
        word: 'calendar',
        meaning: 'a chart showing the days, weeks, and months of the year',
        example: 'I marked my birthday on the calendar with a big red circle so I could count down the days.',
        level: 'p4',
        wrong_answers: ['schedule', 'planner', 'diary']
    },
    {
        id: 'v253',
        word: 'familiar',
        meaning: 'well known from long or close association',
        example: 'The old bookshop looked familiar because I had visited it many times with my grandfather when I was younger.',
        level: 'p4',
        wrong_answers: ['recognisable', 'known', 'accustomed']
    },
    {
        id: 'v254',
        word: 'peculiar',
        meaning: 'strange or odd; unusual',
        example: 'The peculiar sound coming from the attic made us curious, so we decided to investigate what was causing it.',
        level: 'p4',
        wrong_answers: ['strange', 'odd', 'unusual']
    },
    {
        id: 'v256',
        word: 'particular',
        meaning: 'used to single out an individual member or thing',
        example: 'I am looking for one particular book about dinosaurs that has amazing illustrations and fascinating facts about prehistoric creatures.',
        level: 'p4',
        wrong_answers: ['specific', 'certain', 'precise']
    },
    {
        id: 'v257',
        word: 'popular',
        meaning: 'liked or admired by many people',
        example: 'Football is the most popular sport at our school, with almost everyone playing it during lunch breaks.',
        level: 'p4',
        wrong_answers: ['favourite', 'beloved', 'preferred']
    },
    {
        id: 'v258',
        word: 'regular',
        meaning: 'happening or doing something often',
        example: 'Regular exercise and healthy eating habits are essential for maintaining good physical fitness and overall wellbeing throughout your life.',
        level: 'p4',
        wrong_answers: ['frequent', 'routine', 'consistent']
    },
    {
        id: 'v259',
        word: 'circular',
        meaning: 'having the form of a circle; round',
        example: 'We sat around a large circular table during the meeting so everyone could see each other clearly.',
        level: 'p4',
        wrong_answers: ['round', 'curved', 'spherical']
    },
    {
        id: 'v261',
        word: 'exercise',
        meaning: 'activity requiring physical effort to sustain or improve health',
        example: 'We do exercise every morning before school to stay fit, healthy, and energised throughout the entire day.',
        level: 'p4',
        wrong_answers: ['workout', 'training', 'activity']
    },
    {
        id: 'v262',
        word: 'acquire',
        meaning: 'to buy or obtain something for oneself',
        example: 'It takes many years of practice to acquire the skills needed to play the piano at a professional level.',
        level: 'p4',
        wrong_answers: ['obtain', 'gain', 'secure']
    },
    {
        id: 'v265',
        word: 'inspire',
        meaning: 'to fill someone with the urge to do something',
        example: 'My favourite teacher can inspire students to work hard and believe in themselves even when challenges seem difficult.',
        level: 'p4',
        wrong_answers: ['motivate', 'encourage', 'stimulate']
    },
    {
        id: 'v266',
        word: 'explore',
        meaning: 'to travel through an area to learn about it',
        example: 'During our nature walk, we decided to explore the dense forest path and discovered a hidden waterfall.',
        level: 'p4',
        wrong_answers: ['investigate', 'discover', 'search']
    },
    {
        id: 'v271',
        word: 'sincere',
        meaning: 'free from pretence or deceit; genuine',
        example: 'My friend gave me a sincere apology for accidentally breaking my toy, and I could tell she truly felt sorry.',
        level: 'p4',
        wrong_answers: ['genuine', 'honest', 'truthful']
    },
    {
        id: 'v272',
        word: 'severe',
        meaning: 'very great; intense',
        example: 'The severe storm last night brought heavy rain, strong winds, and loud thunder that kept everyone awake for hours.',
        level: 'p4',
        wrong_answers: ['intense', 'harsh', 'extreme']
    },
    {
        id: 'v273',
        word: 'interfere',
        meaning: 'to prevent something from continuing or being carried out properly',
        example: 'Please do not interfere with my homework by making noise, as I need complete silence to concentrate properly.',
        level: 'p4',
        wrong_answers: ['disturb', 'interrupt', 'hinder']
    },
    {
        id: 'v274',
        word: 'prefer',
        meaning: 'to like one thing better than another',
        example: 'I prefer reading adventure books to watching television because I enjoy using my imagination to picture the exciting scenes.',
        level: 'p4',
        wrong_answers: ['favour', 'choose', 'select']
    },
    {
        id: 'v276',
        word: 'deliver',
        meaning: 'to bring and hand over something to someone',
        example: 'The postman will deliver the special birthday package to our house early tomorrow morning before we leave for school.',
        level: 'p4',
        wrong_answers: ['bring', 'transport', 'carry']
    },
    {
        id: 'v277',
        word: 'consider',
        meaning: 'to think carefully about something',
        example: 'We must consider all the advantages and disadvantages before making an important decision about which secondary school to attend.',
        level: 'p4',
        wrong_answers: ['contemplate', 'ponder', 'reflect']
    },
    {
        id: 'v281',
        word: 'shiver',
        meaning: 'to shake slightly because of cold or fear',
        example: 'I began to shiver uncontrollably in the freezing winter wind because I forgot to wear my warm coat.',
        level: 'p4',
        wrong_answers: ['tremble', 'quiver', 'shake']
    },
    {
        id: 'v283',
        word: 'slither',
        meaning: 'to move smoothly over a surface with a twisting motion',
        example: 'We watched the long green snake slither silently through the tall grass near the pond in search of food.',
        level: 'p4',
        wrong_answers: ['slide', 'glide', 'creep']
    },
    {
        id: 'v284',
        word: 'gather',
        meaning: 'to come together or bring together',
        example: 'All the students will gather in the school hall for the special assembly about road safety tomorrow morning.',
        level: 'p4',
        wrong_answers: ['collect', 'assemble', 'congregate']
    },
    {
        id: 'v285',
        word: 'whether',
        meaning: 'expressing a doubt or choice between alternatives',
        example: 'I cannot decide whether to join the football team or the swimming club because I enjoy both sports equally.',
        level: 'p4',
        wrong_answers: ['if', 'either', 'whichever']
    },
    {
        id: 'v287',
        word: 'altogether',
        meaning: 'completely; totally',
        example: 'The suggestion was altogether ridiculous, and nobody could believe someone would actually propose such a silly impractical idea.',
        level: 'p4',
        wrong_answers: ['completely', 'entirely', 'totally']
    },
    {
        id: 'v288',
        word: 'weather',
        meaning: 'the state of the atmosphere at a particular time and place',
        example: 'The weather forecast predicts heavy rain and strong winds tomorrow, so we should bring umbrellas and wear waterproof jackets.',
        level: 'p4',
        wrong_answers: ['climate', 'conditions', 'elements']
    },
    {
        id: 'v291',
        word: 'comfortable',
        meaning: 'providing physical ease and relaxation',
        example: 'The soft cushions on the sofa made it very comfortable to sit and read my favourite book all afternoon.',
        level: 'p4',
        wrong_answers: ['cosy', 'pleasant', 'relaxing']
    },
    {
        id: 'v297',
        word: 'responsible',
        meaning: 'having a duty to deal with something',
        example: 'As class monitor, I am responsible for collecting homework assignments and keeping our classroom tidy and well organised.',
        level: 'p4',
        wrong_answers: ['accountable', 'liable', 'answerable']
    },
    {
        id: 'v298',
        word: 'sensible',
        meaning: 'chosen in accordance with wisdom or prudence',
        example: 'It is sensible to wear a helmet when riding a bicycle to protect your head from injury in accidents.',
        level: 'p4',
        wrong_answers: ['wise', 'prudent', 'reasonable']
    },
    {
        id: 'v299',
        word: 'visible',
        meaning: 'able to be seen',
        example: 'The bright stars became visible in the clear night sky after the clouds finally drifted away completely.',
        level: 'p4',
        wrong_answers: ['apparent', 'noticeable', 'observable']
    },
    {
        id: 'v300',
        word: 'invisible',
        meaning: 'unable to be seen',
        example: 'Air is invisible to our eyes, but we know it exists because we can feel the wind blowing.',
        level: 'p4',
        wrong_answers: ['unseen', 'hidden', 'concealed']
    },
    {
        id: 'v301',
        word: 'flexible',
        meaning: 'capable of bending easily without breaking',
        example: 'Gymnasts must be very flexible to perform difficult moves that require bending and twisting their bodies in unusual ways.',
        level: 'p4',
        wrong_answers: ['bendable', 'pliable', 'supple']
    },
    {
        id: 'v305',
        word: 'curious',
        meaning: 'eager to know or learn something',
        example: 'The curious kitten investigated every corner of the house, sniffing and pawing at everything it could find around.',
        level: 'p4',
        wrong_answers: ['inquisitive', 'interested', 'questioning']
    },
    {
        id: 'v307',
        word: 'generous',
        meaning: 'showing a readiness to give more than is expected',
        example: 'My generous aunt always brings wonderful presents when she visits and shares her sweets with everyone in the family.',
        level: 'p4',
        wrong_answers: ['kind', 'charitable', 'giving']
    },
    {
        id: 'v308',
        word: 'nervous',
        meaning: 'easily agitated or anxious',
        example: 'I felt nervous before my piano performance because hundreds of people would be watching me play on the big stage.',
        level: 'p4',
        wrong_answers: ['anxious', 'worried', 'apprehensive']
    },
    {
        id: 'v309',
        word: 'obvious',
        meaning: 'easily perceived or understood; clear',
        example: 'It was obvious from the dark clouds and rumbling thunder that a heavy rainstorm was approaching our area very soon.',
        level: 'p4',
        wrong_answers: ['clear', 'apparent', 'evident']
    },
    {
        id: 'v311',
        word: 'serious',
        meaning: 'demanding careful consideration or attention',
        example: 'The doctor looked serious when explaining the importance of taking all the medicine exactly as prescribed for recovery.',
        level: 'p4',
        wrong_answers: ['grave', 'solemn', 'earnest']
    },
    {
        id: 'v313',
        word: 'anxious',
        meaning: 'experiencing worry or nervousness',
        example: 'I felt anxious about the upcoming mathematics test because I had not revised all the topics thoroughly enough.',
        level: 'p4',
        wrong_answers: ['worried', 'nervous', 'concerned']
    },
    {
        id: 'v314',
        word: 'precious',
        meaning: 'of great value; not to be wasted',
        example: 'The precious diamond necklace belonged to my great-grandmother and has been carefully passed down through our family for generations.',
        level: 'p4',
        wrong_answers: ['valuable', 'treasured', 'priceless']
    },
    {
        id: 'v315',
        word: 'vicious',
        meaning: 'deliberately cruel or violent',
        example: 'The vicious dog barked aggressively and showed its sharp teeth, frightening everyone who walked past the tall metal gate.',
        level: 'p4',
        wrong_answers: ['fierce', 'savage', 'brutal']
    },
    {
        id: 'v316',
        word: 'delicious',
        meaning: 'highly pleasant to the taste',
        example: 'The delicious chocolate cake my grandmother baked was moist, rich, and topped with creamy frosting and fresh strawberries.',
        level: 'p4',
        wrong_answers: ['tasty', 'flavourful', 'scrumptious']
    },
    {
        id: 'v317',
        word: 'suspicious',
        meaning: 'having the belief that something is wrong',
        example: 'The detective became suspicious when he noticed the witness changing important details in her story about the mysterious incident.',
        level: 'p4',
        wrong_answers: ['doubtful', 'wary', 'distrustful']
    },
    {
        id: 'v320',
        word: 'grateful',
        meaning: 'feeling or showing appreciation for something',
        example: 'I am grateful to my teachers for helping me understand difficult subjects and always being patient with my questions.',
        level: 'p4',
        wrong_answers: ['thankful', 'appreciative', 'obliged']
    },
    {
        id: 'v321',
        word: 'daughter',
        meaning: 'the female child of a parent',
        example: 'My aunt was proud when her clever daughter graduated from university with top honours in medicine last summer.',
        level: 'p4',
        wrong_answers: ['child', 'offspring', 'girl']
    },
    {
        id: 'v322',
        word: 'biscuit',
        meaning: 'a small baked unleavened cake, typically crisp and sweet',
        example: 'Grandmother baked delicious chocolate chip biscuits that were crispy on the outside and soft in the middle.',
        level: 'p4',
        wrong_answers: ['cookie', 'cracker', 'wafer']
    },
    {
        id: 'v323',
        word: 'bicycle',
        meaning: 'a vehicle with two wheels that you ride by pushing pedals',
        example: 'I ride my red bicycle to school every morning because it is faster than walking and good exercise.',
        level: 'p4',
        wrong_answers: ['bike', 'cycle', 'vehicle']
    },
    {
        id: 'v324',
        word: 'cupboard',
        meaning: 'a piece of furniture with doors and shelves for storage',
        example: 'Please put the clean plates and cups away carefully in the kitchen cupboard on the top shelf.',
        level: 'p4',
        wrong_answers: ['cabinet', 'closet', 'wardrobe']
    },
    {
        id: 'v326',
        word: 'shoulder',
        meaning: 'the joint between the upper arm and the main part of the body',
        example: 'I hurt my shoulder playing rugby when another player tackled me hard during the important match yesterday afternoon.',
        level: 'p4',
        wrong_answers: ['joint', 'arm', 'limb']
    },
    {
        id: 'v327',
        word: 'laughter',
        meaning: 'sounds and movements expressing amusement',
        example: 'The comedy show filled the theatre with joyful laughter as everyone enjoyed the hilarious jokes and funny performances.',
        level: 'p4',
        wrong_answers: ['giggling', 'chuckling', 'merriment']
    },
    {
        id: 'v328',
        word: 'daughter',
        meaning: 'a female child in relation to her parents',
        example: 'The proud father watched his daughter perform brilliantly in the school play as the leading character on stage.',
        level: 'p4',
        wrong_answers: ['child', 'girl', 'offspring']
    },
    {
        id: 'v329',
        word: 'through',
        meaning: 'moving in one side and out of the other side',
        example: 'We walked through the dense forest following a narrow winding path until we reached the beautiful clearing with wildflowers.',
        level: 'p4',
        wrong_answers: ['across', 'via', 'throughout']
    },
    {
        id: 'v330',
        word: 'thorough',
        meaning: 'complete with attention to every detail',
        example: 'The detective conducted a thorough investigation, examining every piece of evidence carefully before drawing any important conclusions about the case.',
        level: 'p4',
        wrong_answers: ['complete', 'comprehensive', 'detailed']
    },
    {
        id: 'v331',
        word: 'although',
        meaning: 'in spite of the fact that; even though',
        example: 'Although it was raining heavily outside, we still went to the park because we had promised to meet friends.',
        level: 'p4',
        wrong_answers: ['though', 'despite', 'whereas']
    },
    {
        id: 'v332',
        word: 'enough',
        meaning: 'as much or as many as required',
        example: 'Make sure you drink enough water throughout the day, especially when exercising or playing sports in hot weather.',
        level: 'p4',
        wrong_answers: ['sufficient', 'adequate', 'plenty']
    },
    {
        id: 'v333',
        word: 'tough',
        meaning: 'strong enough to withstand difficult conditions',
        example: 'The tough leather boots kept my feet dry and protected during our long hiking expedition through muddy mountain trails.',
        level: 'p4',
        wrong_answers: ['strong', 'durable', 'sturdy']
    },
    {
        id: 'v334',
        word: 'cough',
        meaning: 'to expel air from the lungs with a sudden sharp sound',
        example: 'I started to cough badly when dust from the old books tickled my throat in the library attic.',
        level: 'p4',
        wrong_answers: ['choke', 'splutter', 'wheeze']
    },
    {
        id: 'v335',
        word: 'dough',
        meaning: 'a thick mixture of flour and liquid for baking',
        example: 'We kneaded the soft dough carefully before shaping it into round balls to make fresh homemade bread rolls.',
        level: 'p4',
        wrong_answers: ['batter', 'mixture', 'paste']
    },
    {
        id: 'v336',
        word: 'height',
        meaning: 'the measurement of something from base to top',
        example: 'The nurse measured my height against the wall chart and recorded that I had grown five centimetres taller.',
        level: 'p4',
        wrong_answers: ['stature', 'altitude', 'elevation']
    },
    {
        id: 'v338',
        word: 'freight',
        meaning: 'goods transported by truck, train, ship, or aircraft',
        example: 'The large freight train carried heavy cargo including coal, timber, and manufactured goods across the entire country overnight.',
        level: 'p4',
        wrong_answers: ['cargo', 'goods', 'shipment']
    },
    {
        id: 'v339',
        word: 'neighbour',
        meaning: 'a person living near or next to another',
        example: 'Our kind neighbour helped carry the heavy shopping bags up the stairs when my grandmother returned from the supermarket.',
        level: 'p4',
        wrong_answers: ['resident', 'local', 'dweller']
    },
    {
        id: 'v340',
        word: 'eight',
        meaning: 'the number equivalent to the product of two and four',
        example: 'There are eight players on each side during a competitive swimming relay race at our regional sports championship.',
        level: 'p4',
        wrong_answers: ['number', 'figure', 'digit']
    },
    {
        id: 'v342',
        word: 'brought',
        meaning: 'past tense of bring; to carry or convey',
        example: 'My friend brought her pet hamster to school for show and tell, and everyone thought it was absolutely adorable.',
        level: 'p4',
        wrong_answers: ['carried', 'fetched', 'delivered']
    },
    {
        id: 'v343',
        word: 'taught',
        meaning: 'past tense of teach; to give instruction',
        example: 'My grandfather taught me how to play chess when I was young, and now I play in competitions regularly.',
        level: 'p4',
        wrong_answers: ['instructed', 'educated', 'trained']
    },
    {
        id: 'v344',
        word: 'caught',
        meaning: 'past tense of catch; to capture or seize',
        example: 'The goalkeeper caught the ball brilliantly in mid-air, preventing the opposing team from scoring a crucial winning goal.',
        level: 'p4',
        wrong_answers: ['grabbed', 'seized', 'captured']
    },
    {
        id: 'v345',
        word: 'yacht',
        meaning: 'a medium-sized sailing boat used for racing or pleasure',
        example: 'We sailed on a beautiful white yacht across the calm blue ocean, enjoying the sunshine and gentle sea breeze.',
        level: 'p4',
        wrong_answers: ['boat', 'vessel', 'sailboat']
    },
    {
        id: 'v346',
        word: 'straight',
        meaning: 'extending in one direction without a curve or bend',
        example: 'Draw a straight line from one corner of the page to the opposite corner using a ruler carefully.',
        level: 'p4',
        wrong_answers: ['direct', 'linear', 'unbent']
    },
    {
        id: 'v347',
        word: 'against',
        meaning: 'in opposition to',
        example: 'Our football team played against the champions in an exciting match that went into extra time with penalties.',
        level: 'p4',
        wrong_answers: ['opposing', 'versus', 'contrary']
    },
    {
        id: 'v348',
        word: 'toward',
        meaning: 'in the direction of',
        example: 'The excited children ran toward the ice cream van when they heard its cheerful music playing down the street.',
        level: 'p4',
        wrong_answers: ['towards', 'approaching', 'near']
    },
    {
        id: 'v349',
        word: 'awkward',
        meaning: 'causing difficulty; hard to do or deal with',
        example: 'I felt awkward carrying the large awkwardly shaped package through the crowded shopping centre during the busy afternoon rush.',
        level: 'p4',
        wrong_answers: ['clumsy', 'ungainly', 'uncomfortable']
    },
    {
        id: 'v350',
        word: 'forward',
        meaning: 'toward the front or in the direction one is facing',
        example: 'The brave knight stepped forward confidently to accept the challenge from the mysterious stranger in shining silver armour.',
        level: 'p4',
        wrong_answers: ['ahead', 'onward', 'advancing']
    },
    {
        id: 'v352',
        word: 'business',
        meaning: 'a commercial activity or trade',
        example: 'My father runs a successful business selling fresh flowers and plants to customers from his shop in town.',
        level: 'p4',
        wrong_answers: ['company', 'enterprise', 'trade']
    },
    {
        id: 'v353',
        word: 'address',
        meaning: 'the details of where someone lives or works',
        example: 'Please write your full address clearly on the envelope including the house number, street name, and postal code.',
        level: 'p4',
        wrong_answers: ['location', 'residence', 'dwelling']
    },
    {
        id: 'v354',
        word: 'success',
        meaning: 'the accomplishment of an aim or purpose',
        example: 'After months of hard training and practice, winning the competition was a wonderful success for our dedicated team.',
        level: 'p4',
        wrong_answers: ['achievement', 'triumph', 'victory']
    },
    {
        id: 'v355',
        word: 'access',
        meaning: 'the means or opportunity to approach or enter a place',
        example: 'Only teachers and staff members have access to the supply cupboard where important school materials are kept securely.',
        level: 'p4',
        wrong_answers: ['entry', 'admission', 'approach']
    },
    {
        id: 'v356',
        word: 'process',
        meaning: 'a series of actions to achieve a particular end',
        example: 'The process of making bread involves mixing ingredients, kneading dough, letting it rise, and finally baking in a hot oven.',
        level: 'p4',
        wrong_answers: ['procedure', 'method', 'system']
    },
    {
        id: 'v357',
        word: 'harass',
        meaning: 'to subject to aggressive pressure or intimidation',
        example: 'It is wrong to harass or bully other students at school, and kind behaviour should always be encouraged.',
        level: 'p4',
        wrong_answers: ['bully', 'intimidate', 'pester']
    },
    {
        id: 'v358',
        word: 'embarrass',
        meaning: 'to cause to feel self-conscious or ashamed',
        example: 'Please do not embarrass me by telling embarrassing stories about when I was a baby to all my friends.',
        level: 'p4',
        wrong_answers: ['shame', 'humiliate', 'mortify']
    },
    {
        id: 'v359',
        word: 'commission',
        meaning: 'an instruction or command to make something',
        example: 'The museum decided to commission a famous artist to create a special sculpture for the grand entrance hall.',
        level: 'p4',
        wrong_answers: ['assignment', 'task', 'order']
    },
    {
        id: 'v360',
        word: 'profession',
        meaning: 'a paid occupation requiring special training',
        example: 'Teaching is a noble profession that requires patience, knowledge, dedication, and a genuine love for helping children learn new things.',
        level: 'p4',
        wrong_answers: ['occupation', 'career', 'vocation']
    },
    {
        id: 'v361',
        word: 'session',
        meaning: 'a meeting for discussion or activity',
        example: 'We attended a training session at the sports centre to learn new swimming techniques from an experienced Olympic coach.',
        level: 'p4',
        wrong_answers: ['meeting', 'gathering', 'class']
    },
    {
        id: 'v362',
        word: 'permission',
        meaning: 'consent or authorisation to do something',
        example: 'You must ask permission from the teacher before leaving the classroom during lessons for any reason at all.',
        level: 'p4',
        wrong_answers: ['consent', 'approval', 'authorisation']
    },
    {
        id: 'v364',
        word: 'impression',
        meaning: 'an idea or opinion about something',
        example: 'My first impression of the new school was very positive because everyone seemed friendly, welcoming, and helpful to newcomers.',
        level: 'p4',
        wrong_answers: ['opinion', 'feeling', 'sense']
    },
    {
        id: 'v366',
        word: 'concession',
        meaning: 'a thing that is granted, especially in response to demands',
        example: 'As a special concession, the teacher allowed us extra time to complete the difficult science project over the weekend.',
        level: 'p4',
        wrong_answers: ['allowance', 'privilege', 'exception']
    },
    {
        id: 'v368',
        word: 'aggression',
        meaning: 'hostile or violent behaviour',
        example: 'The referee penalised the player for unnecessary aggression during the match when he pushed an opponent roughly to the ground.',
        level: 'p4',
        wrong_answers: ['hostility', 'violence', 'antagonism']
    },
    {
        id: 'v369',
        word: 'expansion',
        meaning: 'the action of becoming larger',
        example: 'The expansion of the school meant building new classrooms, a bigger library, and modern science laboratories for all students.',
        level: 'p4',
        wrong_answers: ['growth', 'enlargement', 'increase']
    },
    {
        id: 'v370',
        word: 'conclusion',
        meaning: 'the end or finish of something',
        example: 'At the conclusion of the exciting story, the hero finally defeated the villain and saved the kingdom from destruction.',
        level: 'p4',
        wrong_answers: ['end', 'finish', 'finale']
    },
    {
        id: 'v371',
        word: 'confusion',
        meaning: 'the state of being bewildered or unclear',
        example: 'There was much confusion at the station when the train times changed suddenly without any prior warning or announcement.',
        level: 'p4',
        wrong_answers: ['bewilderment', 'perplexity', 'uncertainty']
    },
    {
        id: 'v372',
        word: 'decision',
        meaning: 'a conclusion reached after consideration',
        example: 'Making the decision about which musical instrument to learn was difficult because I liked both piano and violin equally.',
        level: 'p4',
        wrong_answers: ['choice', 'resolution', 'determination']
    },
    {
        id: 'v373',
        word: 'revision',
        meaning: 'the action of revising or reviewing something',
        example: 'I spent several hours doing revision for my mathematics examination by practising problems and reviewing important formulas carefully.',
        level: 'p4',
        wrong_answers: ['review', 'study', 'preparation']
    },
    {
        id: 'v374',
        word: 'division',
        meaning: 'the action of separating something into parts',
        example: 'In mathematics class, we learned about division and how to split numbers equally into smaller groups or portions.',
        level: 'p4',
        wrong_answers: ['separation', 'partition', 'splitting']
    },
    {
        id: 'v375',
        word: 'television',
        meaning: 'a system for transmitting visual images and sound',
        example: 'We gathered around the television to watch the exciting football match between our favourite teams on Saturday evening.',
        level: 'p4',
        wrong_answers: ['screen', 'broadcast', 'programme']
    },
    {
        id: 'v376',
        word: 'provision',
        meaning: 'the action of providing something',
        example: 'The provision of free school lunches helps ensure that all children receive nutritious meals regardless of family circumstances.',
        level: 'p4',
        wrong_answers: ['supply', 'delivery', 'furnishing']
    },
    {
        id: 'v377',
        word: 'occasion',
        meaning: 'a particular event or time',
        example: 'On this special occasion of graduating from primary school, we celebrated our achievements with a wonderful formal ceremony.',
        level: 'p4',
        wrong_answers: ['event', 'time', 'moment']
    },
    {
        id: 'v378',
        word: 'vision',
        meaning: 'the ability to see',
        example: 'Regular eye tests are important to check your vision and ensure you can see clearly when reading or looking far.',
        level: 'p4',
        wrong_answers: ['sight', 'eyesight', 'perception']
    },
    {
        id: 'v379',
        word: 'collision',
        meaning: 'an instance of one thing striking another',
        example: 'The collision between the two cars at the busy intersection caused significant damage to both vehicles and blocked traffic.',
        level: 'p4',
        wrong_answers: ['crash', 'impact', 'smash']
    },
    {
        id: 'v380',
        word: 'illusion',
        meaning: 'a false perception or belief',
        example: 'The magician created an amazing illusion that made it seem like he was floating in mid-air above the stage.',
        level: 'p4',
        wrong_answers: ['trick', 'deception', 'mirage']
    },
    {
        id: 'v381',
        word: 'accompany',
        meaning: 'to go somewhere with someone',
        example: 'My older brother will accompany me to the dentist appointment tomorrow because I feel nervous about going there alone.',
        level: 'p4',
        wrong_answers: ['escort', 'attend', 'follow']
    },
    {
        id: 'v383',
        word: 'accordance',
        meaning: 'in agreement or harmony with',
        example: 'All students must follow the school rules in accordance with the guidelines written in the official student handbook.',
        level: 'p4',
        wrong_answers: ['agreement', 'conformity', 'compliance']
    },
    {
        id: 'v384',
        word: 'accumulate',
        meaning: 'to gather or collect over time',
        example: 'Dust and dirt can accumulate quickly on shelves and furniture if you do not clean them regularly every week.',
        level: 'p4',
        wrong_answers: ['collect', 'gather', 'amass']
    },
    {
        id: 'v386',
        word: 'interrupt',
        meaning: 'to stop the continuous progress of something',
        example: 'Please do not interrupt when someone else is speaking during class discussions, as it is rude and disrespectful behaviour.',
        level: 'p4',
        wrong_answers: ['disturb', 'disrupt', 'interfere']
    },
    {
        id: 'v387',
        word: 'correspond',
        meaning: 'to have a close similarity or be equivalent to',
        example: 'The numbers on the diagram correspond exactly to the detailed explanations provided in the textbook on the next page.',
        level: 'p4',
        wrong_answers: ['match', 'align', 'agree']
    },
    {
        id: 'v388',
        word: 'interrupt',
        meaning: 'to break the continuity of something',
        example: 'The loud fire alarm will interrupt our lesson temporarily, so everyone must leave the building quickly and calmly.',
        level: 'p4',
        wrong_answers: ['halt', 'pause', 'suspend']
    },
    {
        id: 'v390',
        word: 'occur',
        meaning: 'to happen or take place',
        example: 'Solar eclipses occur when the moon passes between the Earth and the sun, blocking sunlight temporarily from view.',
        level: 'p4',
        wrong_answers: ['happen', 'transpire', 'take place']
    },
    {
        id: 'v391',
        word: 'apparent',
        meaning: 'clearly visible or understood; obvious',
        example: 'It became apparent from the dark clouds gathering overhead that a thunderstorm was approaching our area very rapidly.',
        level: 'p4',
        wrong_answers: ['obvious', 'evident', 'clear']
    },
    {
        id: 'v392',
        word: 'appearance',
        meaning: 'the way that someone or something looks',
        example: 'Despite his rough appearance with torn clothes and messy hair, the stranger turned out to be incredibly kind and helpful.',
        level: 'p4',
        wrong_answers: ['look', 'aspect', 'demeanour']
    },
    {
        id: 'v393',
        word: 'appreciate',
        meaning: 'to understand the worth or importance of something',
        example: 'As you grow older, you will appreciate the sacrifices your parents made to provide opportunities for your better future.',
        level: 'p4',
        wrong_answers: ['value', 'recognise', 'understand']
    },
    {
        id: 'v394',
        word: 'approach',
        meaning: 'to come near or nearer to something',
        example: 'The train began to slow down as it started to approach the busy station platform where passengers were waiting.',
        level: 'p4',
        wrong_answers: ['near', 'advance', 'draw near']
    },
    {
        id: 'v395',
        word: 'appropriate',
        meaning: 'suitable or proper in the circumstances',
        example: 'Wearing appropriate clothing like warm coats and waterproof boots is essential when hiking in cold, wet mountain conditions.',
        level: 'p4',
        wrong_answers: ['suitable', 'proper', 'fitting']
    },
    {
        id: 'v396',
        word: 'approximate',
        meaning: 'close to the actual but not exact',
        example: 'The approximate distance from our house to the school is about two kilometres, give or take a few metres.',
        level: 'p4',
        wrong_answers: ['estimated', 'rough', 'near']
    },
    {
        id: 'v397',
        word: 'artificial',
        meaning: 'made by humans rather than occurring naturally',
        example: 'The museum displayed artificial flowers made from colourful plastic and silk that looked almost exactly like real ones.',
        level: 'p4',
        wrong_answers: ['synthetic', 'man-made', 'fake']
    },
    {
        id: 'v398',
        word: 'athletic',
        meaning: 'physically strong, fit, and active',
        example: 'The athletic student excelled at multiple sports including swimming, running, football, and gymnastics competitions throughout the year.',
        level: 'p4',
        wrong_answers: ['sporty', 'fit', 'active']
    },
    {
        id: 'v399',
        word: 'attached',
        meaning: 'joined or fastened to something',
        example: 'Please make sure the name label is firmly attached to your school bag so it does not fall off.',
        level: 'p4',
        wrong_answers: ['fastened', 'connected', 'fixed']
    },
    {
        id: 'v401',
        word: 'attendance',
        meaning: 'the action of being present at a place',
        example: 'Regular school attendance is important for academic success, so students should try to attend classes every single day possible.',
        level: 'p4',
        wrong_answers: ['presence', 'participation', 'turnout']
    },
    {
        id: 'v402',
        word: 'attention',
        meaning: 'the act of concentrating on something',
        example: 'Please pay close attention during the safety demonstration because these instructions could save your life in an emergency situation.',
        level: 'p4',
        wrong_answers: ['focus', 'concentration', 'heed']
    },
    {
        id: 'v403',
        word: 'attitude',
        meaning: 'a settled way of thinking or feeling',
        example: 'Having a positive attitude towards learning helps students overcome challenges and achieve better results in their academic work consistently.',
        level: 'p4',
        wrong_answers: ['mindset', 'outlook', 'perspective']
    },
    {
        id: 'v404',
        word: 'audience',
        meaning: 'the assembled spectators or listeners',
        example: 'The talented performer received enthusiastic applause from the large audience after delivering an outstanding and memorable musical performance on stage.',
        level: 'p4',
        wrong_answers: ['spectators', 'viewers', 'crowd']
    },
    {
        id: 'v405',
        word: 'authority',
        meaning: 'the power to give orders or make decisions',
        example: 'Teachers have the authority to enforce classroom rules and ensure all students behave properly and respectfully during lessons every day.',
        level: 'p4',
        wrong_answers: ['power', 'control', 'command']
    },
    {
        id: 'v406',
        word: 'autumn',
        meaning: 'the season between summer and winter',
        example: 'During autumn, the leaves on deciduous trees change colour from green to beautiful shades of red, orange, and golden yellow.',
        level: 'p4',
        wrong_answers: ['fall', 'season', 'harvest']
    },
    {
        id: 'v407',
        word: 'available',
        meaning: 'able to be used or obtained',
        example: 'The library has many interesting books available for students to borrow during lunch breaks and after school finishes daily.',
        level: 'p4',
        wrong_answers: ['accessible', 'obtainable', 'ready']
    },
    {
        id: 'v408',
        word: 'average',
        meaning: 'a typical amount or level',
        example: 'The average temperature in summer is usually much warmer than in winter, often reaching over twenty-five degrees Celsius daily.',
        level: 'p4',
        wrong_answers: ['typical', 'normal', 'mean']
    },
    {
        id: 'v409',
        word: 'awkward',
        meaning: 'difficult to use or handle',
        example: 'The large awkward suitcase was difficult to carry up the narrow stairs because of its unusual shape and heavy weight.',
        level: 'p4',
        wrong_answers: ['clumsy', 'unwieldy', 'cumbersome']
    },
    {
        id: 'v410',
        word: 'balance',
        meaning: 'to keep steady without falling',
        example: 'The tightrope walker had to balance carefully on the thin wire high above the ground while the crowd watched nervously.',
        level: 'p4',
        wrong_answers: ['steady', 'stabilise', 'poise']
    },
    {
        id: 'v411',
        word: 'bargain',
        meaning: 'something bought for less than the usual price',
        example: 'I found a real bargain at the shop when I bought this expensive coat for half the original price.',
        level: 'p4',
        wrong_answers: ['deal', 'discount', 'offer']
    },
    {
        id: 'v412',
        word: 'barrier',
        meaning: 'something that blocks the way',
        example: 'A tall metal barrier prevented spectators from running onto the football pitch during the important championship match yesterday afternoon.',
        level: 'p4',
        wrong_answers: ['obstacle', 'fence', 'blockade']
    },
    {
        id: 'v413',
        word: 'battery',
        meaning: 'a container for storing electrical energy',
        example: 'The toy stopped working when the battery ran out of power, so we replaced it with fresh new ones.',
        level: 'p4',
        wrong_answers: ['cell', 'power', 'charge']
    },
    {
        id: 'v414',
        word: 'beneath',
        meaning: 'in a lower position; under something',
        example: 'The frightened cat hid beneath the bed when it heard the loud thunderstorm rumbling outside the bedroom window.',
        level: 'p4',
        wrong_answers: ['under', 'below', 'underneath']
    },
    {
        id: 'v415',
        word: 'benefit',
        meaning: 'an advantage or profit gained from something',
        example: 'Regular exercise has many health benefits including stronger muscles, better stamina, and improved mental wellbeing for people of all ages.',
        level: 'p4',
        wrong_answers: ['advantage', 'gain', 'profit']
    },
    {
        id: 'v416',
        word: 'between',
        meaning: 'in the space separating two things',
        example: 'The small village is located between two large cities, making it convenient for travelling to either place by train.',
        level: 'p4',
        wrong_answers: ['amid', 'among', 'within']
    },
    {
        id: 'v418',
        word: 'breathe',
        meaning: 'to take air into the lungs and expel it',
        example: 'After running the long race, I had to stop and breathe deeply to catch my breath and recover.',
        level: 'p4',
        wrong_answers: ['inhale', 'respire', 'exhale']
    },
    {
        id: 'v421',
        word: 'burden',
        meaning: 'a heavy load or responsibility',
        example: 'Carrying all those heavy shopping bags up the steep hill was quite a burden for my tired grandmother yesterday.',
        level: 'p4',
        wrong_answers: ['load', 'weight', 'responsibility']
    },
    {
        id: 'v422',
        word: 'bury',
        meaning: 'to put something in the ground and cover it',
        example: 'The dog likes to bury bones in the garden and dig them up later when it wants a treat.',
        level: 'p4',
        wrong_answers: ['inter', 'hide', 'conceal']
    },
    {
        id: 'v423',
        word: 'campaign',
        meaning: 'an organised course of action to achieve a goal',
        example: 'The school launched an environmental campaign to encourage students to recycle more rubbish and reduce plastic waste significantly every day.',
        level: 'p4',
        wrong_answers: ['drive', 'initiative', 'movement']
    },
    {
        id: 'v424',
        word: 'cancel',
        meaning: 'to decide that something will not happen',
        example: 'We had to cancel the outdoor sports day because of the terrible weather forecast predicting heavy rain all afternoon.',
        level: 'p4',
        wrong_answers: ['call off', 'abandon', 'postpone']
    },
    {
        id: 'v425',
        word: 'capable',
        meaning: 'having the ability to do something',
        example: 'With proper training and practice, everyone is capable of learning to swim well and enjoying water activities safely throughout life.',
        level: 'p4',
        wrong_answers: ['able', 'competent', 'qualified']
    },
    {
        id: 'v426',
        word: 'capacity',
        meaning: 'the maximum amount that something can contain',
        example: 'The large water tank has a capacity of one thousand litres, which is enough to supply our house for weeks.',
        level: 'p4',
        wrong_answers: ['volume', 'size', 'limit']
    },
    {
        id: 'v427',
        word: 'capital',
        meaning: 'the most important city of a country',
        example: 'London is the capital of England and contains important government buildings, famous museums, and historical monuments visited by millions annually.',
        level: 'p4',
        wrong_answers: ['city', 'metropolis', 'centre']
    },
    {
        id: 'v429',
        word: 'career',
        meaning: 'an occupation undertaken for a long period',
        example: 'My dream career is to become a marine biologist studying fascinating ocean creatures and protecting endangered species in the wild.',
        level: 'p4',
        wrong_answers: ['profession', 'occupation', 'job']
    },
    {
        id: 'v432',
        word: 'catalogue',
        meaning: 'a complete list of items',
        example: 'The library catalogue lists all available books alphabetically by author and subject to help people find what they need quickly.',
        level: 'p4',
        wrong_answers: ['list', 'directory', 'index']
    },
    {
        id: 'v434',
        word: 'category',
        meaning: 'a class or division of things',
        example: 'The books in the library are organised into different categories such as fiction, science, history, and biography for easy browsing.',
        level: 'p4',
        wrong_answers: ['class', 'group', 'type']
    },
    {
        id: 'v436',
        word: 'century',
        meaning: 'a period of one hundred years',
        example: 'The ancient castle was built over five centuries ago and still stands proudly on the hilltop overlooking the valley.',
        level: 'p4',
        wrong_answers: ['era', 'age', 'period']
    },
    {
        id: 'v437',
        word: 'ceremony',
        meaning: 'a formal event held on important occasions',
        example: 'The graduation ceremony was a memorable occasion with speeches, music, and the presentation of certificates to successful students proudly.',
        level: 'p4',
        wrong_answers: ['ritual', 'function', 'celebration']
    },
    {
        id: 'v439',
        word: 'certificate',
        meaning: 'an official document proving something',
        example: 'After completing the swimming course successfully, each student received a certificate recognising their achievement and hard work over many weeks.',
        level: 'p4',
        wrong_answers: ['document', 'diploma', 'award']
    },
    {
        id: 'v440',
        word: 'challenge',
        meaning: 'a difficult task that tests ability',
        example: 'Learning to play the violin is a real challenge, but with daily practice and patience anyone can improve significantly.',
        level: 'p4',
        wrong_answers: ['test', 'trial', 'obstacle']
    },
    {
        id: 'v441',
        word: 'champion',
        meaning: 'a person who has defeated all opponents',
        example: 'Our school team worked incredibly hard all season and finally became regional champion by winning the final match brilliantly.',
        level: 'p4',
        wrong_answers: ['winner', 'victor', 'titleholder']
    },
    {
        id: 'v442',
        word: 'character',
        meaning: 'a person in a story or play',
        example: 'The main character in my favourite book is a brave young girl who goes on amazing adventures around the world.',
        level: 'p4',
        wrong_answers: ['personality', 'role', 'figure']
    },
    {
        id: 'v444',
        word: 'chocolate',
        meaning: 'a sweet brown food made from cacao beans',
        example: 'My favourite treat is creamy milk chocolate, especially when it is combined with crunchy hazelnuts and sweet caramel filling.',
        level: 'p4',
        wrong_answers: ['sweet', 'candy', 'confection']
    },
    {
        id: 'v445',
        word: 'choice',
        meaning: 'an act of choosing between alternatives',
        example: 'You have a choice between joining the drama club or the science club, but you must decide quickly today.',
        level: 'p4',
        wrong_answers: ['selection', 'option', 'decision']
    },
    {
        id: 'v446',
        word: 'chorus',
        meaning: 'a part of a song repeated after each verse',
        example: 'Everyone joined in singing the catchy chorus of the popular song, clapping hands and dancing enthusiastically to the music.',
        level: 'p4',
        wrong_answers: ['refrain', 'verse', 'melody']
    },
    {
        id: 'v447',
        word: 'circle',
        meaning: 'a round plane figure',
        example: 'We sat in a large circle on the floor during story time so everyone could see the teacher clearly.',
        level: 'p4',
        wrong_answers: ['ring', 'loop', 'disc']
    },
    {
        id: 'v448',
        word: 'circumstances',
        meaning: 'the conditions that affect a situation',
        example: 'Under the difficult circumstances, the brave firefighters did everything possible to rescue people from the burning building safely yesterday evening.',
        level: 'p4',
        wrong_answers: ['conditions', 'situation', 'factors']
    },
    {
        id: 'v449',
        word: 'civilisation',
        meaning: 'an advanced stage of human social development',
        example: 'The ancient Egyptian civilisation built magnificent pyramids and developed sophisticated writing systems thousands of years ago that still fascinate historians today.',
        level: 'p4',
        wrong_answers: ['culture', 'society', 'community']
    },
    {
        id: 'v450',
        word: 'climate',
        meaning: 'the general weather conditions in an area',
        example: 'The tropical climate near the equator is hot and humid all year round with frequent afternoon rain showers almost daily.',
        level: 'p4',
        wrong_answers: ['weather', 'temperature', 'conditions']
    },
    {
        id: 'v451',
        word: 'climb',
        meaning: 'to go up something using hands and feet',
        example: 'It took us three hours to climb to the top of the steep mountain, but the spectacular view made it worthwhile.',
        level: 'p4',
        wrong_answers: ['ascend', 'scale', 'mount']
    },
    {
        id: 'v452',
        word: 'clothes',
        meaning: 'items worn to cover the body',
        example: 'Remember to pack warm clothes including thick jumpers and waterproof jackets for our camping trip in the cold mountains.',
        level: 'p4',
        wrong_answers: ['clothing', 'garments', 'attire']
    },
    {
        id: 'v453',
        word: 'collect',
        meaning: 'to gather things together',
        example: 'I collect interesting stamps from different countries around the world and keep them carefully in a special album at home.',
        level: 'p4',
        wrong_answers: ['gather', 'accumulate', 'amass']
    },
    {
        id: 'v454',
        word: 'column',
        meaning: 'a vertical pillar supporting a structure',
        example: 'The ancient Greek temple had tall marble columns supporting the heavy roof and creating an impressive entrance for visitors approaching.',
        level: 'p4',
        wrong_answers: ['pillar', 'post', 'support']
    },
    {
        id: 'v455',
        word: 'comment',
        meaning: 'a remark expressing an opinion',
        example: 'The teacher wrote helpful comments on my essay explaining how I could improve my writing and develop ideas more thoroughly.',
        level: 'p4',
        wrong_answers: ['remark', 'observation', 'note']
    },
    {
        id: 'v456',
        word: 'commercial',
        meaning: 'relating to buying and selling',
        example: 'The busy commercial district contains many shops, offices, banks, and restaurants where people work and do business every weekday.',
        level: 'p4',
        wrong_answers: ['business', 'trade', 'economic']
    },
    {
        id: 'v457',
        word: 'committee',
        meaning: 'a group appointed for a specific function',
        example: 'The school committee meets regularly to discuss important decisions about rules, events, and improvements for all students and teachers.',
        level: 'p4',
        wrong_answers: ['board', 'council', 'panel']
    },
    {
        id: 'v458',
        word: 'communicate',
        meaning: 'to share information with others',
        example: 'Modern technology makes it easy to communicate with friends and family living in distant countries using video calls instantly.',
        level: 'p4',
        wrong_answers: ['converse', 'connect', 'correspond']
    },
    {
        id: 'v459',
        word: 'community',
        meaning: 'a group of people living in the same area',
        example: 'Our local community organised a charity event to raise money for the new playground and sports facilities in the park.',
        level: 'p4',
        wrong_answers: ['neighbourhood', 'society', 'population']
    },
    {
        id: 'v460',
        word: 'compare',
        meaning: 'to estimate the similarity between things',
        example: 'The teacher asked us to compare the two different stories and identify similarities and differences in themes and characters carefully.',
        level: 'p4',
        wrong_answers: ['contrast', 'examine', 'evaluate']
    },
    {
        id: 'v461',
        word: 'compete',
        meaning: 'to strive against others',
        example: 'Athletes from around the world will compete in the Olympic Games, trying to win medals for their countries proudly.',
        level: 'p4',
        wrong_answers: ['contend', 'rival', 'challenge']
    },
    {
        id: 'v462',
        word: 'complain',
        meaning: 'to express dissatisfaction',
        example: 'Some students complain about having too much homework, but regular practice actually helps improve understanding and academic performance significantly.',
        level: 'p4',
        wrong_answers: ['grumble', 'protest', 'object']
    },
    {
        id: 'v463',
        word: 'complete',
        meaning: 'having all necessary parts; finished',
        example: 'Please complete all the questions on the worksheet before handing it in to the teacher at the end of class.',
        level: 'p4',
        wrong_answers: ['finish', 'conclude', 'finalise']
    },
    {
        id: 'v464',
        word: 'completely',
        meaning: 'totally; in every way',
        example: 'I was completely exhausted after running the marathon and needed several days to recover my strength and energy levels fully.',
        level: 'p4',
        wrong_answers: ['totally', 'entirely', 'absolutely']
    },
    {
        id: 'v465',
        word: 'complex',
        meaning: 'consisting of many interconnected parts',
        example: 'The human brain is an incredibly complex organ with billions of neurons working together to control thoughts, memories, and movements.',
        level: 'p4',
        wrong_answers: ['complicated', 'intricate', 'sophisticated']
    },
    {
        id: 'v466',
        word: 'compliment',
        meaning: 'a polite expression of praise',
        example: 'My teacher gave me a nice compliment about my excellent presentation, saying I spoke clearly and confidently throughout.',
        level: 'p4',
        wrong_answers: ['praise', 'commendation', 'tribute']
    },
    {
        id: 'v467',
        word: 'compose',
        meaning: 'to create music or writing',
        example: 'The talented musician can compose beautiful melodies using only a piano and his incredible imagination and years of training.',
        level: 'p4',
        wrong_answers: ['create', 'write', 'author']
    },
    {
        id: 'v469',
        word: 'concentrate',
        meaning: 'to focus attention on something',
        example: 'I find it difficult to concentrate on homework when there is loud music playing or people talking nearby constantly.',
        level: 'p4',
        wrong_answers: ['focus', 'attend', 'apply']
    },
    {
        id: 'v472',
        word: 'concrete',
        meaning: 'a building material made from cement and aggregate',
        example: 'The construction workers poured wet concrete to create a solid foundation for the new building that would last decades.',
        level: 'p4',
        wrong_answers: ['cement', 'material', 'pavement']
    },
    {
        id: 'v473',
        word: 'condemn',
        meaning: 'to express strong disapproval',
        example: 'People around the world condemn acts of violence and cruelty, believing everyone deserves to be treated with respect and kindness.',
        level: 'p4',
        wrong_answers: ['criticise', 'denounce', 'blame']
    },
    {
        id: 'v474',
        word: 'condition',
        meaning: 'the state something is in',
        example: 'The old bicycle is still in excellent condition despite being over twenty years old because it was maintained carefully regularly.',
        level: 'p4',
        wrong_answers: ['state', 'situation', 'status']
    },
    {
        id: 'v475',
        word: 'conduct',
        meaning: 'to organise and carry out an activity',
        example: 'Scientists conduct careful experiments in laboratories to test theories and discover new information about how the world works amazingly.',
        level: 'p4',
        wrong_answers: ['carry out', 'perform', 'execute']
    },
    {
        id: 'v476',
        word: 'conference',
        meaning: 'a formal meeting for discussion',
        example: 'Teachers attended an educational conference to learn about new teaching methods and share ideas with colleagues from different schools nationwide.',
        level: 'p4',
        wrong_answers: ['meeting', 'convention', 'summit']
    },
    {
        id: 'v479',
        word: 'congratulate',
        meaning: 'to express pleasure at success',
        example: 'I want to congratulate you on winning first prize in the art competition with your beautiful and creative painting.',
        level: 'p4',
        wrong_answers: ['praise', 'commend', 'applaud']
    },
    {
        id: 'v481',
        word: 'conquer',
        meaning: 'to overcome and take control',
        example: 'The brave knight sought to conquer his fears and face the fierce dragon guarding the treasure in the dark cave.',
        level: 'p4',
        wrong_answers: ['defeat', 'overcome', 'vanquish']
    },
    {
        id: 'v483',
        word: 'consequence',
        meaning: 'a result of an action',
        example: 'Not studying for the examination has serious consequences, including poor grades and disappointment from parents and teachers who care.',
        level: 'p4',
        wrong_answers: ['result', 'outcome', 'effect']
    },
    {
        id: 'v484',
        word: 'conservation',
        meaning: 'the protection of natural resources',
        example: 'Wildlife conservation efforts help protect endangered species and preserve natural habitats for future generations to appreciate and enjoy responsibly.',
        level: 'p4',
        wrong_answers: ['preservation', 'protection', 'safeguarding']
    },
    {
        id: 'v485',
        word: 'considerable',
        meaning: 'notably large in size or amount',
        example: 'We spent a considerable amount of time planning the school trip, making sure every detail was perfect for students.',
        level: 'p4',
        wrong_answers: ['substantial', 'significant', 'extensive']
    },
    {
        id: 'v486',
        word: 'consistent',
        meaning: 'acting in the same way over time',
        example: 'Consistent practice and dedication are essential for improving any skill, whether in sports, music, or academic subjects throughout life.',
        level: 'p4',
        wrong_answers: ['steady', 'constant', 'regular']
    },
    {
        id: 'v488',
        word: 'contain',
        meaning: 'to have something inside',
        example: 'This mysterious box may contain valuable treasures or important documents hidden away many years ago by previous owners carefully.',
        level: 'p4',
        wrong_answers: ['hold', 'include', 'comprise']
    },
    {
        id: 'v491',
        word: 'control',
        meaning: 'to have power over something',
        example: 'The pilot must control the aircraft carefully during takeoff and landing to ensure passenger safety throughout the entire journey.',
        level: 'p4',
        wrong_answers: ['manage', 'command', 'direct']
    },
    {
        id: 'v492',
        word: 'convenience',
        meaning: 'the state of being easy to use',
        example: 'The convenience of online shopping means you can buy items from home without travelling to crowded stores in bad weather.',
        level: 'p4',
        wrong_answers: ['ease', 'comfort', 'facility']
    },
    {
        id: 'v493',
        word: 'conversation',
        meaning: 'an informal talk between people',
        example: 'We had an interesting conversation about our favourite books and discovered we both enjoyed reading mystery stories and adventures.',
        level: 'p4',
        wrong_answers: ['discussion', 'chat', 'dialogue']
    },
    {
        id: 'v494',
        word: 'convince',
        meaning: 'to persuade someone to believe something',
        example: 'I tried to convince my parents to let me have a pet dog by promising to feed it daily.',
        level: 'p4',
        wrong_answers: ['persuade', 'influence', 'sway']
    },
    {
        id: 'v495',
        word: 'cooperate',
        meaning: 'to work together towards a common goal',
        example: 'Team members must cooperate effectively and communicate clearly to complete the challenging group project successfully within the deadline given.',
        level: 'p4',
        wrong_answers: ['collaborate', 'work together', 'unite']
    },
    {
        id: 'v497',
        word: 'corridor',
        meaning: 'a long passage in a building',
        example: 'Students must walk quietly along the school corridor during lessons so they do not disturb classes in progress behind doors.',
        level: 'p4',
        wrong_answers: ['hallway', 'passage', 'walkway']
    },
    {
        id: 'v498',
        word: 'courage',
        meaning: 'the ability to face danger despite fear',
        example: 'It takes great courage to stand up against bullying and defend those who cannot protect themselves from harm effectively.',
        level: 'p4',
        wrong_answers: ['bravery', 'valour', 'boldness']
    },
    {
        id: 'v499',
        word: 'deteriorating',
        meaning: 'becoming progressively worse in condition or quality',
        example: 'The patient\'s health was deteriorating rapidly despite the doctors\' best efforts to treat the serious illness.',
        level: 'p4',
        wrong_answers: ['depreciating', 'disintegrating', 'dissipating']
    },
    {
        id: 'v500',
        word: 'profusely',
        meaning: 'in large amounts; abundantly',
        example: 'The proud grandfather praised him profusely for winning first prize in the difficult mathematics competition at school.',
        level: 'p4',
        wrong_answers: ['modestly', 'unanimously', 'consecutively']
    },
    {
        id: 'v501',
        word: 'dampened',
        meaning: 'to make something less strong or enthusiastic',
        example: 'Leo\'s confidence to clinch the championship was dampened when he saw how skilled his opponent was in the game.',
        level: 'p4',
        wrong_answers: ['inflated', 'elevated', 'boosted']
    },
    {
        id: 'v502',
        word: 'Moreover',
        meaning: 'used to introduce additional information',
        example: 'The weather was terrible with heavy rain and strong winds all day. Moreover, we forgot to bring our umbrellas.',
        level: 'p4',
        wrong_answers: ['Therefore', 'Meanwhile', 'Regardless']
    },
    {
        id: 'v503',
        word: 'displaced',
        meaning: 'forced to leave one\'s home or country',
        example: 'Hundreds of residents in the area were displaced when they lost their homes to the terrible fire that spread quickly.',
        level: 'p4',
        wrong_answers: ['evicted', 'expelled', 'retreated']
    },
    {
        id: 'v504',
        word: 'exploit',
        meaning: 'to use something unfairly for one\'s own advantage',
        example: 'It is wrong for strangers to exploit vulnerable children by taking advantage of them online for personal gain.',
        level: 'p4',
        wrong_answers: ['misuse', 'swindle', 'deceive']
    },
    {
        id: 'v505',
        word: 'susceptible',
        meaning: 'likely to be influenced or harmed by something',
        example: 'Young children are especially susceptible to screen addiction because their self-control is not fully developed yet always.',
        level: 'p4',
        wrong_answers: ['averse', 'exposed', 'responsive']
    },
    {
        id: 'v506',
        word: 'evaporate',
        meaning: 'to turn from liquid into vapour',
        example: 'On hot summer days, water from puddles will evaporate quickly into the air when heated by the bright sun.',
        level: 'p4',
        wrong_answers: ['condense', 'freeze', 'solidify']
    },
    {
        id: 'v507',
        word: 'sincerely',
        meaning: 'in a genuine and honest way',
        example: 'After accidentally breaking my friend\'s toy, I apologised sincerely and promised to replace it with a new one.',
        level: 'p4',
        wrong_answers: ['briefly', 'loudly', 'repeatedly']
    },
    {
        id: 'v508',
        word: 'migrate',
        meaning: 'to move from one place to another, especially seasonally',
        example: 'Every winter, thousands of birds migrate south to warmer countries and return when the weather becomes warm again.',
        level: 'p4',
        wrong_answers: ['emigrate', 'immigrate', 'relocate']
    }
];
