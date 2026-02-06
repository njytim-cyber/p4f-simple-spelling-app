export interface VocabularyItem {
    id: string;
    word: string;
    meaning: string;
    example: string;
    level: string;
    wrong_answers?: string[];  // Optional curated distractors for MCQ
}

export const VOCABULARY: VocabularyItem[] = [
    // ── P4 (Age 10) ──────────────────────────────────────────────
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
        wrong_answers: ['beautifull', 'grateful', 'endeavour']
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
        wrong_answers: ['anser', 'ancient', 'amateur']
    },
    {
        id: 'v25',
        word: 'caught',
        meaning: 'past tense of catch',
        example: 'The goalkeeper caught the ball brilliantly during the match and saved our team from losing the important game.',
        level: 'p4',
        wrong_answers: ['cawt', 'height', 'weight']
    },
    {
        id: 'v27',
        word: 'enough',
        meaning: 'as much or as many as required',
        example: 'Do we have enough food for everyone at the party, or should we order more pizza and snacks?',
        level: 'p4',
        wrong_answers: ['enuff', 'through', 'thought']
    },
    {
        id: 'v159',
        word: 'minute',
        meaning: 'a period of sixty seconds',
        example: 'Wait here for a minute while I get my coat from the classroom upstairs.',
        level: 'p4',
        wrong_answers: ['minut', 'eighth', 'length']
    },
    {
        id: 'v200',
        word: 'separate',
        meaning: 'to cause to move or be apart',
        example: 'The teacher had to separate the two boys who kept talking during the lesson and moved them to different tables.',
        level: 'p4',
        wrong_answers: ['seperate', 'desperate', 'parliament']
    },
    {
        id: 'v201',
        word: 'different',
        meaning: 'not the same as another or each other',
        example: 'My sister and I have very different tastes in music, which is why we never agree on what to listen to.',
        level: 'p4',
        wrong_answers: ['diffrent', 'definite', 'receipt']
    },
    {
        id: 'v202',
        word: 'favourite',
        meaning: 'preferred before all others of the same kind',
        example: 'Chocolate ice cream has always been my favourite dessert because it is creamy and rich in flavour.',
        level: 'p4',
        wrong_answers: ['favorit', 'desperate', 'calendar']
    },
    {
        id: 'v203',
        word: 'knowledge',
        meaning: 'facts, information, and skills acquired through experience or education',
        example: 'Reading books is an excellent way to increase your knowledge about the world and discover new ideas.',
        level: 'p4',
        wrong_answers: ['knowlege', 'privilege', 'language']
    },
    {
        id: 'v204',
        word: 'February',
        meaning: 'the second month of the year',
        example: 'My birthday is in February and we usually celebrate with a special dinner at home with the whole family.',
        level: 'p4',
        wrong_answers: ['Febuary', 'Wednesday', 'library']
    },
    {
        id: 'v205',
        word: 'Wednesday',
        meaning: 'the day of the week before Thursday',
        example: 'We have swimming lessons every Wednesday afternoon at the local pool near our school.',
        level: 'p4',
        wrong_answers: ['Wensday', 'February', 'island']
    },
    {
        id: 'v206',
        word: 'library',
        meaning: 'a building or room containing a collection of books for reading or borrowing',
        example: 'I borrowed three interesting books from the library to read during the school holidays this summer.',
        level: 'p4',
        wrong_answers: ['libary', 'February', 'restaurant']
    },
    {
        id: 'v207',
        word: 'island',
        meaning: 'a piece of land surrounded by water',
        example: 'We took a small boat to visit the island and explored its sandy beaches and tropical forests all day.',
        level: 'p4',
        wrong_answers: ['iland', 'aisle', 'castle']
    },
    {
        id: 'v208',
        word: 'strength',
        meaning: 'the quality or state of being physically strong',
        example: 'The athlete showed incredible strength when she lifted the heavy weights above her head at the competition.',
        level: 'p4',
        wrong_answers: ['strenth', 'length', 'eighth']
    },
    {
        id: 'v209',
        word: 'surprise',
        meaning: 'an unexpected event or piece of news',
        example: 'We planned a big surprise party for our mother on her birthday and she did not suspect a thing.',
        level: 'p4',
        wrong_answers: ['suprise', 'exercise', 'promise']
    },
    {
        id: 'v210',
        word: 'foreign',
        meaning: 'relating to a country other than your own',
        example: 'Learning a foreign language is very useful when you travel to other countries during the holidays.',
        level: 'p4',
        wrong_answers: ['forein', 'certain', 'bargain']
    },
    {
        id: 'v211',
        word: 'although',
        meaning: 'in spite of the fact that',
        example: 'We decided to go to the park although it was raining lightly, and we brought our umbrellas just in case.',
        level: 'p4',
        wrong_answers: ['altho', 'through', 'thought']
    },
    // ── P5 (Age 11) ──────────────────────────────────────────────
    {
        id: 'v34',
        word: 'parliament',
        meaning: 'the highest law-making body in a country',
        example: 'The new law was debated in parliament by the politicians, and they voted on it last week finally.',
        level: 'p5',
        wrong_answers: ['parliment', 'equipment', 'apparent']
    },
    {
        id: 'v38',
        word: 'government',
        meaning: 'the group of people who govern a country or state',
        example: 'The government announced new education policies yesterday to help improve schools and provide better opportunities for young people.',
        level: 'p5',
        wrong_answers: ['goverment', 'environment', 'bargain']
    },
    {
        id: 'v39',
        word: 'recommend',
        meaning: 'to put forward with approval as being suitable',
        example: 'I would recommend this book to anyone who loves adventure and exciting stories about brave heroes.',
        level: 'p5',
        wrong_answers: ['recomend', 'recent', 'remember']
    },
    {
        id: 'v42',
        word: 'opportunity',
        meaning: 'a set of circumstances that makes it possible to do something',
        example: 'This is a wonderful opportunity to learn a new skill and make some lasting friendships at the same time.',
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
        wrong_answers: ['que', 'bruise', 'league']
    },
    {
        id: 'v59',
        word: 'yacht',
        meaning: 'a medium-sized sailing boat',
        example: 'They sailed their yacht across the Mediterranean Sea during the summer holidays and visited many beautiful islands.',
        level: 'p5',
        wrong_answers: ['yot', 'caught', 'island']
    },
    {
        id: 'v300',
        word: 'environment',
        meaning: 'the surroundings or conditions in which a person, animal, or plant lives',
        example: 'We should all do our part to protect the environment by recycling waste and reducing pollution wherever possible.',
        level: 'p5',
        wrong_answers: ['enviroment', 'equipment', 'parliament']
    },
    {
        id: 'v301',
        word: 'necessary',
        meaning: 'needed; required; essential',
        example: 'It is necessary to wear a seatbelt every time you travel in a car for your own safety.',
        level: 'p5',
        wrong_answers: ['neccessary', 'February', 'separate']
    },
    {
        id: 'v302',
        word: 'conscience',
        meaning: 'an inner feeling that tells you whether something is right or wrong',
        example: 'Her conscience would not let her keep the money she had found on the ground outside the shop.',
        level: 'p5',
        wrong_answers: ['concience', 'science', 'patience']
    },
    {
        id: 'v303',
        word: 'temperature',
        meaning: 'the degree of heat or cold measured on a scale',
        example: 'The temperature dropped below zero last night and all the puddles turned to ice by morning.',
        level: 'p5',
        wrong_answers: ['temprature', 'literature', 'furniture']
    },
    {
        id: 'v304',
        word: 'equipment',
        meaning: 'the tools or items needed for a particular purpose',
        example: 'The school bought new sports equipment including footballs, tennis rackets, and badminton nets for the students.',
        level: 'p5',
        wrong_answers: ['equiptment', 'parliament', 'government']
    },
    {
        id: 'v305',
        word: 'experience',
        meaning: 'practical contact with and observation of facts or events',
        example: 'Working at the animal shelter was a wonderful experience that taught me a lot about caring for pets.',
        level: 'p5',
        wrong_answers: ['experiance', 'existence', 'sentence']
    },
    {
        id: 'v306',
        word: 'accident',
        meaning: 'an unfortunate incident that happens unexpectedly',
        example: 'There was a minor accident on the main road this morning and the traffic was delayed for over an hour.',
        level: 'p5',
        wrong_answers: ['acident', 'ancient', 'innocent']
    },
    {
        id: 'v307',
        word: 'definite',
        meaning: 'clearly true or real; unambiguous',
        example: 'We need a definite answer by Friday so that we can book the tickets for the school trip.',
        level: 'p5',
        wrong_answers: ['definate', 'opposite', 'favourite']
    },
    {
        id: 'v308',
        word: 'guarantee',
        meaning: 'a formal promise that something will be done or will happen',
        example: 'The shop offered a two-year guarantee on the laptop, which meant they would repair it for free.',
        level: 'p5',
        wrong_answers: ['garantee', 'committee', 'technique']
    },
    {
        id: 'v309',
        word: 'recognise',
        meaning: 'to identify someone or something from previous encounters',
        example: 'I could barely recognise my cousin at the airport because he had grown so much taller since last year.',
        level: 'p5',
        wrong_answers: ['reconise', 'exercise', 'sacrifice']
    },
    {
        id: 'v310',
        word: 'shoulder',
        meaning: 'the upper joint of the human arm where it connects to the body',
        example: 'She carried the heavy bag over her shoulder as she walked home from the market along the busy road.',
        level: 'p5',
        wrong_answers: ['shulder', 'soldier', 'calendar']
    },
    {
        id: 'v311',
        word: 'stomach',
        meaning: 'the internal organ where food is digested',
        example: 'My stomach was rumbling loudly during the exam because I had forgotten to eat breakfast that morning.',
        level: 'p5',
        wrong_answers: ['stomack', 'headache', 'achieve']
    },
    {
        id: 'v312',
        word: 'medicine',
        meaning: 'a substance used to treat illness or injury',
        example: 'The doctor prescribed some medicine to help reduce the fever and make my sore throat feel better quickly.',
        level: 'p5',
        wrong_answers: ['medecine', 'determine', 'discipline']
    },
    {
        id: 'v313',
        word: 'calendar',
        meaning: 'a chart showing the days, weeks, and months of a year',
        example: 'I marked all the important dates on the calendar so that I would not forget any of them.',
        level: 'p5',
        wrong_answers: ['calender', 'familiar', 'similar']
    },
    // ── P6 (Age 12) ──────────────────────────────────────────────
    {
        id: 'v64',
        word: 'restaurant',
        meaning: 'a place where people pay to sit and eat meals',
        example: 'We went to an Italian restaurant for dinner last night and enjoyed delicious pasta and pizza with the family.',
        level: 'p6',
        wrong_answers: ['restarant', 'relevant', 'pleasant']
    },
    {
        id: 'v73',
        word: 'vehicle',
        meaning: 'a thing used for transporting people or goods',
        example: 'The vehicle broke down on the motorway, so we had to wait for the rescue service to come.',
        level: 'p6',
        wrong_answers: ['vehical', 'believe', 'bicycle']
    },
    {
        id: 'v81',
        word: 'frequently',
        meaning: 'regularly; many times',
        example: 'He frequently visits his grandmother on Saturdays to spend quality time with her and help around the house.',
        level: 'p6',
        wrong_answers: ['frequantly', 'government', 'medicine']
    },
    {
        id: 'v85',
        word: 'lightning',
        meaning: 'the occurrence of a natural electrical discharge',
        example: 'The lightning lit up the entire sky during the thunderstorm, and we could see everything for a moment clearly.',
        level: 'p6',
        wrong_answers: ['lightening', 'beginning', 'calendar']
    },
    {
        id: 'v87',
        word: 'privilege',
        meaning: 'a special right or advantage',
        example: 'It was a real privilege to meet the author of my favourite book at the signing event last weekend.',
        level: 'p6',
        wrong_answers: ['priviledge', 'promise', 'queue']
    },
    {
        id: 'v90',
        word: 'sincerely',
        meaning: 'in a genuine way',
        example: 'I sincerely apologise for the misunderstanding and any inconvenience or upset that I may have caused you today.',
        level: 'p6',
        wrong_answers: ['sincerly', 'different', 'interfere']
    },
    {
        id: 'v400',
        word: 'accommodate',
        meaning: 'to provide lodging or room for',
        example: 'The hotel can accommodate up to two hundred guests at a time, making it perfect for large conferences.',
        level: 'p6',
        wrong_answers: ['accomodate', 'communicate', 'appreciate']
    },
    {
        id: 'v401',
        word: 'embarrass',
        meaning: 'to cause someone to feel awkward or ashamed',
        example: 'Please do not embarrass me in front of my friends by telling them stories about when I was little.',
        level: 'p6',
        wrong_answers: ['embarass', 'harness', 'compass']
    },
    {
        id: 'v402',
        word: 'exaggerate',
        meaning: 'to represent something as larger or more important than it really is',
        example: 'My brother tends to exaggerate when he tells stories, making everything sound much more dramatic than it was.',
        level: 'p6',
        wrong_answers: ['exagerate', 'elaborate', 'celebrate']
    },
    {
        id: 'v403',
        word: 'independent',
        meaning: 'free from outside control; not depending on another',
        example: 'She became more independent after starting secondary school and began walking to school on her own every day.',
        level: 'p6',
        wrong_answers: ['independant', 'intelligent', 'confident']
    },
    {
        id: 'v404',
        word: 'pronunciation',
        meaning: 'the way in which a word is spoken',
        example: 'The teacher helped us practise the correct pronunciation of difficult words by repeating them slowly and clearly.',
        level: 'p6',
        wrong_answers: ['pronounciation', 'punctuation', 'population']
    },
    {
        id: 'v405',
        word: 'occurrence',
        meaning: 'an incident or event',
        example: 'Flooding is a common occurrence in low-lying areas during the monsoon season, causing damage to many homes.',
        level: 'p6',
        wrong_answers: ['occurence', 'reference', 'insurance']
    },
    {
        id: 'v406',
        word: 'controversy',
        meaning: 'a prolonged public disagreement or heated discussion',
        example: 'The decision to build a new shopping centre near the park caused great controversy among the local residents.',
        level: 'p6',
        wrong_answers: ['contraversy', 'discovery', 'recovery']
    },
    {
        id: 'v407',
        word: 'conscience',
        meaning: 'a person\'s moral sense of right and wrong',
        example: 'His guilty conscience kept him awake all night after he broke his mother\'s favourite vase by accident.',
        level: 'p6',
        wrong_answers: ['concience', 'conscious', 'patience']
    },
    {
        id: 'v408',
        word: 'thoroughly',
        meaning: 'in a complete and careful way',
        example: 'She thoroughly enjoyed the concert and said it was the best musical performance she had ever attended.',
        level: 'p6',
        wrong_answers: ['thorougly', 'although', 'borough']
    },
    {
        id: 'v409',
        word: 'maintenance',
        meaning: 'the process of keeping something in good condition',
        example: 'Regular maintenance of the school building helps to prevent problems and keeps everything in good working order.',
        level: 'p6',
        wrong_answers: ['maintainance', 'attendance', 'insurance']
    },
    {
        id: 'v410',
        word: 'curiosity',
        meaning: 'a strong desire to know or learn something',
        example: 'Her curiosity about the old house led her to explore every room and discover a hidden attic upstairs.',
        level: 'p6',
        wrong_answers: ['curiousity', 'electricity', 'community']
    },
    {
        id: 'v411',
        word: 'marvellous',
        meaning: 'causing great wonder; extraordinary',
        example: 'We had a marvellous time at the theme park and went on every single ride at least twice during the day.',
        level: 'p6',
        wrong_answers: ['marvelous', 'jealous', 'previous']
    },
    {
        id: 'v412',
        word: 'nuisance',
        meaning: 'a person or thing causing inconvenience or annoyance',
        example: 'The noisy roadworks outside our house were a real nuisance and made it difficult to concentrate on homework.',
        level: 'p6',
        wrong_answers: ['nusance', 'guidance', 'alliance']
    },
    {
        id: 'v413',
        word: 'sacrifice',
        meaning: 'an act of giving up something valued for the sake of something else',
        example: 'She made a great sacrifice by giving up her holiday to help her parents move to their new house.',
        level: 'p6',
        wrong_answers: ['sacrifise', 'practice', 'justice']
    },
    {
        id: 'v414',
        word: 'amateur',
        meaning: 'a person who does something for pleasure rather than for pay',
        example: 'He is an amateur photographer who takes beautiful pictures of wildlife in his spare time at weekends.',
        level: 'p6',
        wrong_answers: ['amature', 'creature', 'furniture']
    },
    {
        id: 'v415',
        word: 'category',
        meaning: 'a class or division of people or things with shared characteristics',
        example: 'The books in the library are sorted by category so that readers can easily find what they are looking for.',
        level: 'p6',
        wrong_answers: ['catagory', 'factory', 'history']
    },
    // ── SEC1 (Age 13) ────────────────────────────────────────────
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
        wrong_answers: ['akward', 'library', 'acquire']
    },
    {
        id: 'v101',
        word: 'bargain',
        meaning: 'a thing bought or offered for sale at a low price; a good deal',
        example: 'We got a real bargain at the sale and bought a television for half the original price yesterday.',
        level: 'sec1',
        wrong_answers: ['bargin', 'certain', 'foreign']
    },
    {
        id: 'v110',
        word: 'develop',
        meaning: 'to grow or cause to grow gradually',
        example: 'Children develop at different rates, and it is important not to compare them with others their age unnecessarily.',
        level: 'sec1',
        wrong_answers: ['develope', 'receive', 'dilemma']
    },
    {
        id: 'v500',
        word: 'catastrophe',
        meaning: 'an event causing great and often sudden damage or suffering',
        example: 'The earthquake was a terrible catastrophe that destroyed thousands of homes and left many people without shelter.',
        level: 'sec1',
        wrong_answers: ['catastrofe', 'atmosphere', 'adventure']
    },
    {
        id: 'v501',
        word: 'accommodate',
        meaning: 'to fit in with the needs or wishes of',
        example: 'The restaurant was happy to accommodate our large group by pushing several tables together for the celebration.',
        level: 'sec1',
        wrong_answers: ['acommodate', 'communicate', 'appreciate']
    },
    {
        id: 'v502',
        word: 'bureaucracy',
        meaning: 'a system of government with many complicated rules and processes',
        example: 'The slow bureaucracy made it difficult to get the building permit approved in time for the project deadline.',
        level: 'sec1',
        wrong_answers: ['beaurocracy', 'democracy', 'accuracy']
    },
    {
        id: 'v503',
        word: 'correspondence',
        meaning: 'letters sent or received; communication by exchanging letters',
        example: 'The company keeps all official correspondence filed neatly in folders so that nothing important gets lost or misplaced.',
        level: 'sec1',
        wrong_answers: ['correspondance', 'independence', 'confidence']
    },
    {
        id: 'v504',
        word: 'deteriorate',
        meaning: 'to become progressively worse',
        example: 'If the old building is not repaired soon, its condition will continue to deteriorate until it becomes unsafe.',
        level: 'sec1',
        wrong_answers: ['deteriate', 'elaborate', 'demonstrate']
    },
    {
        id: 'v505',
        word: 'entrepreneur',
        meaning: 'a person who sets up a business, taking on financial risks',
        example: 'The young entrepreneur started her own bakery business at the age of twenty and it became very successful.',
        level: 'sec1',
        wrong_answers: ['entrepeneur', 'volunteer', 'engineer']
    },
    {
        id: 'v506',
        word: 'fluorescent',
        meaning: 'giving off a bright light by absorbing radiation',
        example: 'The classroom has fluorescent lights on the ceiling that provide bright and even lighting for the students.',
        level: 'sec1',
        wrong_answers: ['flourescent', 'adolescent', 'magnificent']
    },
    {
        id: 'v507',
        word: 'harassment',
        meaning: 'aggressive pressure or intimidation',
        example: 'The school has a strict policy against any form of harassment to ensure all students feel safe and respected.',
        level: 'sec1',
        wrong_answers: ['harrassment', 'management', 'achievement']
    },
    {
        id: 'v508',
        word: 'immediately',
        meaning: 'without any delay; at once',
        example: 'The ambulance arrived almost immediately after the emergency call was made and the paramedics rushed to help.',
        level: 'sec1',
        wrong_answers: ['immediatly', 'fortunately', 'deliberately']
    },
    {
        id: 'v509',
        word: 'miniature',
        meaning: 'very small; much smaller than normal',
        example: 'She collects miniature houses and has built a detailed model village on the shelf in her bedroom.',
        level: 'sec1',
        wrong_answers: ['minature', 'signature', 'furniture']
    },
    {
        id: 'v510',
        word: 'occasionally',
        meaning: 'sometimes but not often',
        example: 'We occasionally go to the cinema on Friday evenings when there is a good film showing that we all want to see.',
        level: 'sec1',
        wrong_answers: ['occassionally', 'personally', 'originally']
    },
    {
        id: 'v511',
        word: 'perseverance',
        meaning: 'persistence in doing something despite difficulty',
        example: 'It was her perseverance and hard work that helped her pass the difficult exam after studying for months.',
        level: 'sec1',
        wrong_answers: ['perseverence', 'appearance', 'difference']
    },
    {
        id: 'v512',
        word: 'questionnaire',
        meaning: 'a set of printed or written questions used for gathering information',
        example: 'The students were asked to fill in a questionnaire about their reading habits and favourite types of books.',
        level: 'sec1',
        wrong_answers: ['questionaire', 'millionaire', 'furniture']
    },
    {
        id: 'v513',
        word: 'surveillance',
        meaning: 'close observation, especially of a suspected person',
        example: 'The security cameras provide surveillance of the entire car park to help prevent theft and vandalism overnight.',
        level: 'sec1',
        wrong_answers: ['surveilance', 'assurance', 'endurance']
    },
    {
        id: 'v514',
        word: 'thoroughly',
        meaning: 'in a detailed and careful way',
        example: 'Make sure you read the instructions thoroughly before starting the experiment so that you do not make any mistakes.',
        level: 'sec1',
        wrong_answers: ['thuroughly', 'roughly', 'although']
    },
    {
        id: 'v515',
        word: 'unanimous',
        meaning: 'fully in agreement; with everyone agreeing',
        example: 'The committee reached a unanimous decision to approve the new playground design for the primary school children.',
        level: 'sec1',
        wrong_answers: ['unanamous', 'anonymous', 'generous']
    },
    {
        id: 'v516',
        word: 'vacuum',
        meaning: 'a space entirely devoid of matter; a cleaning device',
        example: 'Please vacuum the living room carpet before our guests arrive this evening for the dinner party we are hosting.',
        level: 'sec1',
        wrong_answers: ['vacume', 'museum', 'medium']
    },
    {
        id: 'v517',
        word: 'prejudice',
        meaning: 'a preconceived opinion that is not based on reason or experience',
        example: 'We should judge people by their actions, not by prejudice based on their appearance or background.',
        level: 'sec1',
        wrong_answers: ['predjudice', 'practice', 'justice']
    },
    {
        id: 'v518',
        word: 'miscellaneous',
        meaning: 'consisting of members or elements of different kinds',
        example: 'The drawer was full of miscellaneous items such as old batteries, rubber bands, and various coins and keys.',
        level: 'sec1',
        wrong_answers: ['miscellanious', 'simultaneous', 'courteous']
    },
    {
        id: 'v519',
        word: 'acquisition',
        meaning: 'the act of gaining possession of something',
        example: 'The museum celebrated the acquisition of a rare painting that had been lost for over a hundred years.',
        level: 'sec1',
        wrong_answers: ['aquisition', 'competition', 'permission']
    },
    {
        id: 'v520',
        word: 'discipline',
        meaning: 'the practice of training people to obey rules',
        example: 'Good discipline in the classroom helps create a calm learning environment where all students can concentrate properly.',
        level: 'sec1',
        wrong_answers: ['dicipline', 'medicine', 'determine']
    }
];
