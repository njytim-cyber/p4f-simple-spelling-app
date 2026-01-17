export interface GrammarQuestion {
    rank: number;
    topic: string;
    question: string;
    correct_answer: string;
    wrong_answers: string[];
    explanation: string;
    reviewed?: boolean;
    notes?: string;
}

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = [
    {
        rank: 1,
        topic: "Proper Nouns",
        question: "My cousin moved to England last year and now lives in _____.",
        correct_answer: "London",
        wrong_answers: [
            "london",
            "City",
            "town"
        ],
        explanation: "Proper nouns referring to specific geographical locations typically require initial capitalization.",
        reviewed: true
    },
    {
        rank: 2,
        topic: "Common Nouns",
        question: "Please hand me the _____ that is sitting on the table right now.",
        correct_answer: "book",
        wrong_answers: [
            "Book",
            "Steven",
            "London"
        ],
        explanation: "Common nouns refer to general classes of objects and are not capitalized unless sentence-initial.",
        reviewed: true
    },
    {
        rank: 3,
        topic: "Personal Pronouns",
        question: "My friends and I made plans together, and _____ are going to the cinema tonight.",
        correct_answer: "They",
        wrong_answers: [
            "Them",
            "Their",
            "Theirs"
        ],
        explanation: "'They' is the nominative (subject) case pronoun required here, whereas 'Them' is accusative.",
        reviewed: true
    },
    {
        rank: 4,
        topic: "Concrete vs. Abstract Nouns",
        question: "He was filled with overwhelming _____ after the victory at the championship final last Saturday.",
        correct_answer: "happiness",
        wrong_answers: [
            "trophy",
            "medal",
            "stadium"
        ],
        explanation: "'Happiness' is an abstract noun denoting an emotional state, fitting the context of internal feeling.",
        reviewed: true
    },
    {
        rank: 5,
        topic: "Singular & Plural Morphology",
        question: "The farmer has three _____ in the barn near the old farmhouse.",
        correct_answer: "foxes",
        wrong_answers: [
            "foxs",
            "fox",
            "fox's"
        ],
        explanation: "Nouns ending in the sibilant /x/ require the morphological suffix -es for pluralization.",
        reviewed: true
    },
    {
        rank: 6,
        topic: "Irregular Plurals",
        question: "The dentist checked all of my _____ during the appointment this morning.",
        correct_answer: "teeth",
        wrong_answers: [
            "tooths",
            "teethes",
            "tooth"
        ],
        explanation: "'Tooth' undergoes vowel mutation to 'teeth' in the plural, an irregular morphological pattern.",
        reviewed: true
    },
    {
        rank: 7,
        topic: "Definite & Indefinite Articles",
        question: "During our school trip yesterday, she saw _____ elephant at the zoo for the very first time.",
        correct_answer: "an",
        wrong_answers: [
            "a",
            "one",
            "some"
        ],
        explanation: "The indefinite article 'an' is required before a noun beginning with a vowel sound.",
        reviewed: true
    },
    {
        rank: 8,
        topic: "Main Verbs (Action)",
        question: "Every day, the athletes _____ around the track during their morning practice.",
        correct_answer: "run",
        wrong_answers: [
            "runs",
            "runner",
            "running"
        ],
        explanation: "'Run' acts as the dynamic main verb agreeing with the plural subject 'athletes'.",
        reviewed: true,
        notes: "Added 'every morning' to clarify present tense context"
    },
    {
        rank: 9,
        topic: "Main Verbs (Stative)",
        question: "This freshly baked chocolate cake _____ absolutely delicious right now to me.",
        correct_answer: "tastes",
        wrong_answers: [
            "is tasting",
            "taste",
            "tasted"
        ],
        explanation: "Verbs of sense perception like 'taste' function statively to describe attributes in the present.",
        reviewed: true,
        notes: "Added 'right now' to clarify present tense context"
    },
    {
        rank: 10,
        topic: "Simple Present Tense",
        question: "The sun always _____ in the east every single morning without fail.",
        correct_answer: "rises",
        wrong_answers: [
            "rose",
            "rising",
            "rise"
        ],
        explanation: "The simple present is used for universal truths and scientific facts.",
        reviewed: true
    },
    {
        rank: 11,
        topic: "Simple Past Tense (Regular)",
        question: "Yesterday afternoon, we _____ to the park together with our friends.",
        correct_answer: "walked",
        wrong_answers: [
            "walk",
            "walking",
            "walks"
        ],
        explanation: "The suffix -ed marks the past tense for regular verbs.",
        reviewed: true
    },
    {
        rank: 12,
        topic: "Simple Past Tense (Irregular)",
        question: "I _____ a long and detailed letter to my friend last week.",
        correct_answer: "wrote",
        wrong_answers: [
            "writed",
            "write",
            "written"
        ],
        explanation: "'Write' is an irregular verb; the past tense form is 'wrote', not 'writed'.",
        reviewed: true
    },
    {
        rank: 13,
        topic: "Descriptive Adjectives",
        question: "The _____ dog barked loudly at the stranger who was approaching the house.",
        correct_answer: "angry",
        wrong_answers: [
            "angrily",
            "anger",
            "angries"
        ],
        explanation: "An attributive adjective is required to pre-modify the noun 'dog'.",
        reviewed: true,
        notes: "Added 'at the stranger' to provide more context"
    },
    {
        rank: 14,
        topic: "Coordinating Conjunctions (Basic)",
        question: "I like drinking coffee in the morning, _____ I don't like tea at all because it tastes bitter.",
        correct_answer: "but",
        wrong_answers: [
            "and",
            "or",
            "so"
        ],
        explanation: "'But' introduces a contrast between the two independent clauses.",
        reviewed: true
    },
    {
        rank: 15,
        topic: "Sentence Demarcation",
        question: "_____ went to the store yesterday afternoon to buy some groceries for dinner with the family tonight.",
        correct_answer: "She",
        wrong_answers: [
            "she",
            "SHE",
            "sHE"
        ],
        explanation: "Sentences must begin with a capital letter according to standard demarcation rules.",
        reviewed: true
    },
    {
        rank: 16,
        topic: "Question Formation",
        question: "_____ you like some water to drink, or would you prefer juice or lemonade instead this afternoon?",
        correct_answer: "Would",
        wrong_answers: [
            "Do",
            "Are",
            "Have"
        ],
        explanation: "'Would' is the modal auxiliary used here to form a polite offer/question.",
        reviewed: true
    },
    {
        rank: 17,
        topic: "Imperative Mood",
        question: "_____ quiet and listen carefully to the instructions that the teacher is giving us right now, please!",
        correct_answer: "Be",
        wrong_answers: [
            "You do",
            "Doing",
            "Does"
        ],
        explanation: "The imperative mood uses the base form of the verb without an explicit subject.",
        reviewed: true
    },
    {
        rank: 18,
        topic: "Possessive Determiners",
        question: "John was worried and upset yesterday because he lost _____ keys on the way home from school.",
        correct_answer: "his",
        wrong_answers: [
            "he",
            "him",
            "he's"
        ],
        explanation: "'His' is the masculine singular possessive determiner required to modify 'keys'.",
        reviewed: true
    },
    {
        rank: 19,
        topic: "Possessive Apostrophes",
        question: "I saw a dog playing in the park. This is the _____ collar.",
        correct_answer: "dog's",
        wrong_answers: [
            "dogs",
            "dogs'",
            "dog"
        ],
        explanation: "Singular possession is marked by 's attached to the noun.",
        reviewed: true,
        notes: "Added 'I saw a dog playing in the park' to clarify singular context and eliminate ambiguity with plural possessive"
    },
    {
        rank: 20,
        topic: "Demonstrative Pronouns",
        question: "_____ books over there on the shelf by the window belong to me and not to anyone else.",
        correct_answer: "Those",
        wrong_answers: [
            "These",
            "This",
            "That"
        ],
        explanation: "'Those' is the plural distal demonstrative pronoun.",
        reviewed: true
    },
    {
        rank: 21,
        topic: "Prepositions of Place",
        question: "The frightened cat is hiding _____ the sofa in the living room because it heard a loud noise.",
        correct_answer: "behind",
        wrong_answers: [
            "at",
            "to",
            "of"
        ],
        explanation: "'Behind' indicates spatial relationship/position relative to the sofa.",
        reviewed: true
    },
    {
        rank: 22,
        topic: "Prepositions of Time",
        question: "I wake up _____ 6 o'clock every single morning without an alarm.",
        correct_answer: "at",
        wrong_answers: [
            "on",
            "in",
            "to"
        ],
        explanation: "'At' is the specific preposition used for precise clock times.",
        reviewed: true
    },
    {
        rank: 23,
        topic: "Compound Nouns",
        question: "We need to buy some _____ from the shop because we have completely run out at home.",
        correct_answer: "toothpaste",
        wrong_answers: [
            "tooth paste",
            "teethpaste",
            "tooth-paste"
        ],
        explanation: "'Toothpaste' is a standard closed compound noun.",
        reviewed: true
    },
    {
        rank: 24,
        topic: "Exclamative Sentences",
        question: "_____ a wonderful surprise it was when everyone showed up at the party to celebrate my birthday!",
        correct_answer: "What",
        wrong_answers: [
            "How",
            "Which",
            "So"
        ],
        explanation: "'What' introduces exclamatives focused on noun phrases ('a surprise').",
        reviewed: true
    },
    {
        rank: 25,
        topic: "Suffixation (Comparative/Superlative)",
        question: "This is the _____ building in the entire city according to recent surveys.",
        correct_answer: "tallest",
        wrong_answers: [
            "taller",
            "tall",
            "most tall"
        ],
        explanation: "The superlative -est is required when comparing more than two entities.",
        reviewed: true
    },
    {
        rank: 26,
        topic: "Present Continuous Tense",
        question: "I _____ for the bus right now at the stop, and it should arrive in five minutes.",
        correct_answer: "am waiting",
        wrong_answers: [
            "wait",
            "waiting",
            "waited"
        ],
        explanation: "Auxiliary 'am' + participle 'waiting' forms the present continuous.",
        reviewed: true
    },
    {
        rank: 27,
        topic: "Past Continuous Tense",
        question: "Yesterday, it _____ raining heavily when we left the building for home.",
        correct_answer: "was",
        wrong_answers: [
            "is",
            "were",
            "been"
        ],
        explanation: "Past continuous requires the past singular auxiliary 'was' with the participle.",
        reviewed: true
    },
    {
        rank: 28,
        topic: "Future Simple (Will)",
        question: "I think it _____ snow tomorrow based on how cold the weather has been this week recently.",
        correct_answer: "will",
        wrong_answers: [
            "shall",
            "is",
            "going to"
        ],
        explanation: "'Will' is used for predictions based on opinion rather than present evidence.",
        reviewed: true
    },
    {
        rank: 29,
        topic: "Future (Going to)",
        question: "Look at those dark clouds gathering in the sky! It _____ rain very soon, so we should go inside.",
        correct_answer: "is going to",
        wrong_answers: [
            "will",
            "shall",
            "rains"
        ],
        explanation: "'Going to' is used for predictions based on present physical evidence.",
        reviewed: true
    },
    {
        rank: 30,
        topic: "Coordinating Conjunctions (FANBOYS)",
        question: "He was extremely tired from working all day, _____ he kept working late into the night to finish.",
        correct_answer: "yet",
        wrong_answers: [
            "so",
            "nor",
            "for"
        ],
        explanation: "'Yet' functions as a coordinating conjunction indicating contrast/concession.",
        reviewed: true
    },
    {
        rank: 31,
        topic: "Subordinating Conjunctions (Time/Place)",
        question: "Please close the door gently _____ you leave the room so that we can keep the heat inside.",
        correct_answer: "before",
        wrong_answers: [
            "where",
            "because",
            "so"
        ],
        explanation: "'Before' establishes the temporal sequence of the subordinate clause.",
        reviewed: true
    },
    {
        rank: 32,
        topic: "Subordinating Conjunctions (Causal)",
        question: "I stayed home from school yesterday _____ I was sick with a terrible cold and high fever.",
        correct_answer: "because",
        wrong_answers: [
            "although",
            "unless",
            "but"
        ],
        explanation: "'Because' introduces the subordinate causal clause.",
        reviewed: true
    },
    {
        rank: 33,
        topic: "Main Clause vs. Subordinate Clause",
        question: "Although it was cold and windy at the beach, _____ in the sea for hours yesterday afternoon.",
        correct_answer: "we went swimming",
        wrong_answers: [
            "because we went swimming",
            "swimming went we",
            "and we went swimming"
        ],
        explanation: "A main independent clause is required to complete the sentence started by a subordinate clause.",
        reviewed: true
    },
    {
        rank: 34,
        topic: "Expanded Noun Phrases",
        question: "The _____ sat on the fence and watched us as we walked past it this morning.",
        correct_answer: "big black cat with green eyes",
        wrong_answers: [
            "cat",
            "black cat",
            "big cat"
        ],
        explanation: "This option represents the most expanded noun phrase with multiple modifiers.",
        reviewed: true
    },
    {
        rank: 35,
        topic: "Adverbs of Manner",
        question: "He spoke _____ to the audience so that everyone in the large hall could understand his important message.",
        correct_answer: "clearly",
        wrong_answers: [
            "clear",
            "clearness",
            "cleared"
        ],
        explanation: "'Clearly' is the adverb of manner modifying the verb 'spoke'.",
        reviewed: true
    },
    {
        rank: 36,
        topic: "Adverbs of Frequency",
        question: "She _____ arrives on time for school every single day, which makes her teacher very happy indeed.",
        correct_answer: "always",
        wrong_answers: [
            "yesterday",
            "quick",
            "late"
        ],
        explanation: "'Always' denotes frequency and is positioned before the main verb.",
        reviewed: true
    },
    {
        rank: 37,
        topic: "Adverbs of Time & Place",
        question: "Let's go _____ to play in the garden because the weather is lovely and sunny this afternoon.",
        correct_answer: "outside",
        wrong_answers: [
            "careful",
            "loud",
            "happy"
        ],
        explanation: "'Outside' functions as an adverb of place.",
        reviewed: true
    },
    {
        rank: 38,
        topic: "Present Perfect Simple",
        question: "I _____ that movie already, so I don't want to watch it again at the cinema tonight.",
        correct_answer: "have seen",
        wrong_answers: [
            "saw",
            "see",
            "seen"
        ],
        explanation: "Present perfect (have + participle) indicates indefinite past action with present relevance.",
        reviewed: true
    },
    {
        rank: 39,
        topic: "Subject-Verb Agreement",
        question: "Right now, the entire collection of books on the shelf _____ very heavy.",
        correct_answer: "is",
        wrong_answers: [
            "are",
            "were",
            "have"
        ],
        explanation: "The subject 'collection' is singular, requiring the singular verb 'is'.",
        reviewed: true
    },
    {
        rank: 40,
        topic: "Direct Speech",
        question: "He looked at me with a puzzled expression on his face and asked, \"_____?\" in a curious tone.",
        correct_answer: "Where are you going",
        wrong_answers: [
            "where are you going",
            "Where you are going",
            "where you going"
        ],
        explanation: "Direct speech requires initial capitalization and standard interrogative syntax.",
        reviewed: true
    },
    {
        rank: 41,
        topic: "Reflexive Pronouns",
        question: "She made the beautiful dress _____ without any help from anyone else, which was truly impressive and skilful.",
        correct_answer: "herself",
        wrong_answers: [
            "she",
            "her",
            "hers"
        ],
        explanation: "Reflexive/emphatic usage emphasizing the subject as the agent.",
        reviewed: true
    },
    {
        rank: 42,
        topic: "Quantifiers",
        question: "There isn't _____ milk left in the fridge, so we'll need to buy some more from the shop.",
        correct_answer: "much",
        wrong_answers: [
            "many",
            "few",
            "a few"
        ],
        explanation: "'Much' is used with uncountable nouns like 'milk' in negative contexts.",
        reviewed: true
    },
    {
        rank: 43,
        topic: "Zero Conditional",
        question: "When you mix red and blue, you always _____ purple.",
        correct_answer: "get",
        wrong_answers: [
            "got",
            "will get",
            "would get"
        ],
        explanation: "Zero conditional uses present simple in the result clause for general facts.",
        reviewed: true
    },
    {
        rank: 44,
        topic: "First Conditional",
        question: "If he studies hard every day this week and pays attention in class, he _____ the exam easily.",
        correct_answer: "will pass",
        wrong_answers: [
            "pass",
            "would pass",
            "passes"
        ],
        explanation: "First conditional uses 'will' + base verb in the result clause.",
        reviewed: true
    },
    {
        rank: 45,
        topic: "Fronted Adverbials",
        question: "_____, the hero saved the day by rescuing everyone from the dangerous situation without thinking of himself.",
        correct_answer: "Bravely",
        wrong_answers: [
            "Brave",
            "Bravery",
            "Braved"
        ],
        explanation: "'Bravely' is an adverb of manner fronted for emphasis.",
        reviewed: true
    },
    {
        rank: 46,
        topic: "Plural Possessive Apostrophes",
        question: "At the swimming pool, the _____ changing room is always busy.",
        correct_answer: "ladies'",
        wrong_answers: [
            "lady's",
            "ladie's",
            "ladies"
        ],
        explanation: "Plural nouns ending in 's' take the apostrophe after the 's'.",
        reviewed: true,
        notes: "Added 'At the swimming pool' and 'always busy' to clarify plural context and eliminate ambiguity with singular possessive"
    },
    {
        rank: 47,
        topic: "Prefixation",
        question: "He was _____ to finish the difficult task on time because he didn't have enough help or resources.",
        correct_answer: "unable",
        wrong_answers: [
            "disable",
            "inable",
            "nonable"
        ],
        explanation: "The prefix un- is used with 'able' to form the negation.",
        reviewed: true
    },
    {
        rank: 48,
        topic: "Word Families",
        question: "The huge and terrifying _____ at the factory caused a lot of damage to nearby buildings yesterday afternoon.",
        correct_answer: "explosion",
        wrong_answers: [
            "explode",
            "explosive",
            "exploded"
        ],
        explanation: "The noun form 'explosion' is required as the subject.",
        reviewed: true
    },
    {
        rank: 49,
        topic: "Determiners (General)",
        question: "_____ car is parked outside in front of our house, blocking the driveway and causing a lot of inconvenience?",
        correct_answer: "Whose",
        wrong_answers: [
            "Who",
            "Who's",
            "Which's"
        ],
        explanation: "'Whose' is the interrogative determiner asking about possession.",
        reviewed: true
    },
    {
        rank: 50,
        topic: "Object Pronouns",
        question: "Please give _____ the book from the shelf so that I can read it during the lunch break.",
        correct_answer: "me",
        wrong_answers: [
            "I",
            "my",
            "mine"
        ],
        explanation: "'Me' is the objective case pronoun functioning as the indirect object.",
        reviewed: true
    },
    {
        rank: 51,
        topic: "Past Perfect Simple",
        question: "When I arrived at the station this morning, the train _____ already left, so I had to wait ages.",
        correct_answer: "had",
        wrong_answers: [
            "has",
            "have",
            "was"
        ],
        explanation: "Past perfect 'had left' indicates an action completed before another past action.",
        reviewed: true
    },
    {
        rank: 52,
        topic: "Present Perfect Continuous",
        question: "I _____ waiting here at the bus stop for two hours, and the bus still hasn't arrived yet.",
        correct_answer: "have been",
        wrong_answers: [
            "am",
            "was",
            "had been"
        ],
        explanation: "Focuses on the duration of an action starting in the past and continuing to present.",
        reviewed: true
    },
    {
        rank: 53,
        topic: "Passive Voice (Present/Past)",
        question: "The important letter _____ by the secretary yesterday morning and posted in the afternoon to the client.",
        correct_answer: "was written",
        wrong_answers: [
            "wrote",
            "is written",
            "writes"
        ],
        explanation: "Past passive requires 'was' + past participle 'written'.",
        reviewed: true
    },
    {
        rank: 54,
        topic: "Relative Clauses (Defining)",
        question: "The kind man _____ lives next door to us is a doctor who works at the hospital in town.",
        correct_answer: "who",
        wrong_answers: [
            "which",
            "whose",
            "whom"
        ],
        explanation: "'Who' is the relative pronoun for people in subject position.",
        reviewed: true
    },
    {
        rank: 55,
        topic: "Relative Clauses (Non-Defining)",
        question: "My older brother, _____ lives in Sydney with his family, is coming to visit us next month for Christmas.",
        correct_answer: "who",
        wrong_answers: [
            "that",
            "which",
            "whom"
        ],
        explanation: "'Who' introduces the non-essential clause; 'that' is not used in non-defining clauses.",
        reviewed: true
    },
    {
        rank: 56,
        topic: "Modal Verbs (Possibility/Ability)",
        question: "I _____ swim very well when I was five years old because I had lessons at the local pool.",
        correct_answer: "could",
        wrong_answers: [
            "can",
            "may",
            "should"
        ],
        explanation: "'Could' expresses past ability.",
        reviewed: true
    },
    {
        rank: 57,
        topic: "Modal Verbs (Obligation/Advice)",
        question: "You _____ always wear a seatbelt in a car for safety reasons.",
        correct_answer: "must",
        wrong_answers: [
            "might",
            "can",
            "may"
        ],
        explanation: "'Must' expresses strong obligation/legal requirement.",
        reviewed: true,
        notes: "Added 'in a car' to strengthen the legal requirement context"
    },
    {
        rank: 58,
        topic: "Second Conditional",
        question: "If I _____ rich, I would travel the world and visit every single country on the planet without hesitation.",
        correct_answer: "were",
        wrong_answers: [
            "am",
            "was",
            "be"
        ],
        explanation: "Subjunctive 'were' is standard in the if-clause of hypothetical conditionals.",
        reviewed: true
    },
    {
        rank: 59,
        topic: "Reported Speech (Backshifting)",
        question: "She said yesterday afternoon that she _____ too busy to come to visit.",
        correct_answer: "was",
        wrong_answers: [
            "is",
            "be",
            "been"
        ],
        explanation: "Tense backshift from present 'is' to past 'was' in reported speech.",
        reviewed: true
    },
    {
        rank: 60,
        topic: "Connective Adverbs",
        question: "It was raining heavily all morning; _____, we went out to play football in the park anyway this afternoon.",
        correct_answer: "however",
        wrong_answers: [
            "and",
            "but",
            "so"
        ],
        explanation: "'However' is a conjunctive adverb indicating contrast.",
        reviewed: true
    },
    {
        rank: 61,
        topic: "Parenthesis (Commas)",
        question: "The suspect, who was wearing a mask, fled the scene.",
        correct_answer: "commas around the parenthetical clause",
        wrong_answers: [
            "dashes",
            "semicolons",
            "colons"
        ],
        explanation: "Commas are commonly used to mark parenthetical information.",
        reviewed: true,
        notes: "Reformatted question to be clearer - asking which punctuation is used"
    },
    {
        rank: 62,
        topic: "Colons",
        question: "I need three things from the shop for breakfast tomorrow _____ eggs, milk, and bread for toast and cereal.",
        correct_answer: ":",
        wrong_answers: [
            ";",
            ",",
            "."
        ],
        explanation: "A colon introduces a list following an independent clause.",
        reviewed: true
    },
    {
        rank: 63,
        topic: "Semi-colons (Linking Clauses)",
        question: "I love reading books in my spare time _____ my brother prefers playing sports and games in the garden.",
        correct_answer: ";",
        wrong_answers: [
            ",",
            ":",
            "."
        ],
        explanation: "A semi-colon joins two closely related independent clauses without a conjunction.",
        reviewed: true
    },
    {
        rank: 64,
        topic: "Semi-colons (Complex Lists)",
        question: "We visited London, England; Paris, France; and Rome, Italy. Which punctuation separates the cities?",
        correct_answer: "semicolons",
        wrong_answers: [
            "commas only",
            "colons",
            "periods"
        ],
        explanation: "Semi-colons separate list items that contain internal commas.",
        reviewed: true,
        notes: "Reformatted to ask which punctuation is used"
    },
    {
        rank: 65,
        topic: "Hyphens",
        question: "He is a _____ writer who has published many bestselling novels and won awards for his work.",
        correct_answer: "well-known",
        wrong_answers: [
            "well known",
            "wellknown",
            "well_known"
        ],
        explanation: "Hyphens join compound adjectives modifying a noun.",
        reviewed: true
    },
    {
        rank: 66,
        topic: "Ellipsis",
        question: "To be or not to be _____ that is the question that Shakespeare's character Hamlet asked in the famous play.",
        correct_answer: "...",
        wrong_answers: [
            ".",
            ",",
            ";"
        ],
        explanation: "Ellipsis indicates a pause or omitted words.",
        reviewed: true
    },
    {
        rank: 67,
        topic: "Active vs. Passive Voice",
        question: "Active: The chef cooked the meal. Passive: The meal _____ by the chef.",
        correct_answer: "was cooked",
        wrong_answers: [
            "cooked",
            "is cooked",
            "cooks"
        ],
        explanation: "Transformation to passive requires 'be' auxiliary + past participle.",
        reviewed: true
    },
    {
        rank: 68,
        topic: "Subject-Verb Inversion",
        question: "Rarely _____ seen such incredible beauty in all of my life before.",
        correct_answer: "have I",
        wrong_answers: [
            "I have",
            "did I",
            "was I"
        ],
        explanation: "Negative adverbial 'Rarely' triggers subject-auxiliary inversion. 'Have' is required for the perfect aspect.",
        reviewed: true
    },
    {
        rank: 69,
        topic: "Prepositional Phrases as Adverbials",
        question: "_____ the morning, we drink coffee and eat breakfast together before leaving for school and work each day.",
        correct_answer: "In",
        wrong_answers: [
            "On",
            "At",
            "By"
        ],
        explanation: "'In the morning' functions as a temporal adverbial.",
        reviewed: true
    },
    {
        rank: 70,
        topic: "Verb Patterns (Gerund vs. Infinitive)",
        question: "He promised _____ me with my homework this evening after dinner because he knows I'm struggling with it.",
        correct_answer: "to help",
        wrong_answers: [
            "helping",
            "help",
            "helped"
        ],
        explanation: "'Promise' takes the to-infinitive pattern.",
        reviewed: true
    },
    {
        rank: 71,
        topic: "Tag Questions",
        question: "You're coming to the party with us tomorrow evening, _____? We would love to see you there with everyone.",
        correct_answer: "aren't you",
        wrong_answers: [
            "isn't it",
            "don't you",
            "won't you"
        ],
        explanation: "Tag aligns with the auxiliary 'are' and subject 'you', inverted and negated.",
        reviewed: true
    },
    {
        rank: 72,
        topic: "Cleft Sentences (It-clefts)",
        question: "_____ was John who called me on the telephone this morning, not Sarah as you might have thought.",
        correct_answer: "It",
        wrong_answers: [
            "There",
            "He",
            "This"
        ],
        explanation: "It-clefts follow the structure It + be + focus + relative clause.",
        reviewed: true
    },
    {
        rank: 73,
        topic: "Participle Phrases",
        question: "_____ by the loud noise of the fireworks, the dog ran away quickly and hid under the bed upstairs.",
        correct_answer: "Frightened",
        wrong_answers: [
            "Frighten",
            "Frightens",
            "To frighten"
        ],
        explanation: "Past participle phrase functioning as an adjective modifying 'the dog'.",
        reviewed: true
    },
    {
        rank: 74,
        topic: "Nominalisation",
        question: "The _____ of the big construction project took three months of hard work by all the dedicated team members.",
        correct_answer: "completion",
        wrong_answers: [
            "complete",
            "completed",
            "completing"
        ],
        explanation: "Nominalisation converts the verb 'complete' to the noun 'completion'.",
        reviewed: true
    },
    {
        rank: 75,
        topic: "Antonyms & Synonyms",
        question: "'Happy' is a synonym for 'joyful', while 'sad' is an _____.",
        correct_answer: "antonym",
        wrong_answers: [
            "homonym",
            "acronym",
            "synonym"
        ],
        explanation: "Antonyms are words with opposite meanings.",
        reviewed: true
    },
    {
        rank: 76,
        topic: "Third Conditional",
        question: "If I had known about the party earlier, I _____ gone with you and had a wonderful time together.",
        correct_answer: "would have",
        wrong_answers: [
            "will have",
            "would had",
            "had"
        ],
        explanation: "Third conditional requires 'would have' + past participle in the result clause.",
        reviewed: true
    },
    {
        rank: 77,
        topic: "Mixed Conditionals",
        question: "If I had studied harder in school, I _____ a better job now.",
        correct_answer: "would have",
        wrong_answers: [
            "would have had",
            "will have",
            "had"
        ],
        explanation: "Mixed conditional: Past condition (had studied) with present result (would have).",
        reviewed: true,
        notes: "Added 'in school' to clarify past context; answer is 'would have' for present result"
    },
    {
        rank: 78,
        topic: "Subjunctive Mood (Mandative)",
        question: "The strict teacher insists that every student _____ on time for lessons each day without any exceptions or excuses.",
        correct_answer: "be",
        wrong_answers: [
            "leaves",
            "left",
            "leaving"
        ],
        explanation: "Mandative subjunctive uses the base form 'leave' regardless of subject.",
        reviewed: true
    },
    {
        rank: 79,
        topic: "Subjunctive Mood (Formulaic)",
        question: "God _____ the King! This is the traditional phrase that people sing at ceremonies and important royal occasions.",
        correct_answer: "save",
        wrong_answers: [
            "saves",
            "saved",
            "saving"
        ],
        explanation: "Formulaic subjunctive uses the base form in set expressions.",
        reviewed: true
    },
    {
        rank: 80,
        topic: "Subjunctive Mood (Were)",
        question: "If I _____ you, I would apologize immediately for what happened and try to make things right again.",
        correct_answer: "were",
        wrong_answers: [
            "am",
            "was",
            "be"
        ],
        explanation: "'Were' is the subjunctive form used for counter-factual wishes.",
        reviewed: true
    },
    {
        rank: 81,
        topic: "Future Perfect",
        question: "By next year, I _____ graduated from university and started my new career in engineering or medicine hopefully.",
        correct_answer: "will have",
        wrong_answers: [
            "will",
            "have",
            "had"
        ],
        explanation: "Future perfect (will have + pp) describes completion before a future time.",
        reviewed: true
    },
    {
        rank: 82,
        topic: "Future Perfect Continuous",
        question: "By 5 PM this evening, I _____ working for 8 hours straight without a break, so I'll be exhausted.",
        correct_answer: "will have been",
        wrong_answers: [
            "will be",
            "have been",
            "am"
        ],
        explanation: "Emphasizes duration up to a future point.",
        reviewed: true
    },
    {
        rank: 83,
        topic: "Passive Voice (Complex/Impersonal)",
        question: "It _____ by many economic experts that the economy is improving steadily and will continue to grow this year.",
        correct_answer: "is believed",
        wrong_answers: [
            "believes",
            "believed",
            "is believing"
        ],
        explanation: "Impersonal passive structure 'It is + pp + that...'.",
        reviewed: true
    },
    {
        rank: 84,
        topic: "Causative Form",
        question: "I need to _____ my car repaired at the garage this week because it broke down yesterday on the motorway.",
        correct_answer: "get",
        wrong_answers: [
            "make",
            "do",
            "let"
        ],
        explanation: "Causative 'get/have object done' implies arranging for someone else to do the action.",
        reviewed: true
    },
    {
        rank: 85,
        topic: "Inversion (Negative Adverbials)",
        question: "I am truly shocked; never _____ I been so insulted!",
        correct_answer: "have",
        wrong_answers: [
            "had",
            "did",
            "was"
        ],
        explanation: "The present tense context ('am shocked') necessitates the Present Perfect 'have' rather than the Past Perfect 'had'.",
        reviewed: true
    },
    {
        rank: 86,
        topic: "Inversion (Conditional)",
        question: "_____ you need any help with your homework or have questions, please call me at any time this evening.",
        correct_answer: "Should",
        wrong_answers: [
            "If",
            "Unless",
            "When"
        ],
        explanation: "Inverted conditional 'Should you...' replaces 'If you should...'.",
        reviewed: true
    },
    {
        rank: 87,
        topic: "Verbless Clauses",
        question: "When _____, take one tablet with water three times a day after meals as directed by the doctor yesterday.",
        correct_answer: "necessary",
        wrong_answers: [
            "is necessary",
            "it necessary",
            "necessity"
        ],
        explanation: "Elliptical clause omitting 'it is'.",
        reviewed: true
    },
    {
        rank: 88,
        topic: "Absolute Phrases",
        question: "The weather _____ gradually throughout the day, we went for a long walk in the park this afternoon happily.",
        correct_answer: "improving",
        wrong_answers: [
            "improved",
            "improve",
            "was improving"
        ],
        explanation: "Noun + present participle construction modifying the main clause.",
        reviewed: true,
        notes: "Present participle 'improving' indicates ongoing improvement"
    },
    {
        rank: 89,
        topic: "Discourse Markers",
        question: "_____, I agree with your point about the importance of education, even though I had doubts at first earlier.",
        correct_answer: "Admittedly",
        wrong_answers: [
            "Admit",
            "Admitting",
            "Admitted"
        ],
        explanation: "Discourse markers orient the listener/reader to the speaker's stance.",
        reviewed: true
    },
    {
        rank: 90,
        topic: "Modals of Deduction (Past)",
        question: "He _____ missed the train this morning because he's not here yet; he's usually on time for work.",
        correct_answer: "must have",
        wrong_answers: [
            "should have",
            "can have",
            "will have"
        ],
        explanation: "'Must have' expresses logical deduction about a past event.",
        reviewed: true
    },
    {
        rank: 91,
        topic: "Reduced Relative Clauses",
        question: "The students _____ the difficult exam in the hall this morning looked tired and stressed throughout the whole test.",
        correct_answer: "taking",
        wrong_answers: [
            "taken",
            "took",
            "who taking"
        ],
        explanation: "Active relative clause 'who were taking' reduced to present participle 'taking'.",
        reviewed: true
    },
    {
        rank: 92,
        topic: "Dummy Subjects",
        question: "_____ is raining heavily outside right now, so we should take an umbrella if we go out this afternoon.",
        correct_answer: "It",
        wrong_answers: [
            "There",
            "This",
            "That"
        ],
        explanation: "'It' serves as the dummy subject for weather verbs.",
        reviewed: true
    },
    {
        rank: 93,
        topic: "Subordinate Clause Positioning",
        question: "_____ I was tired after a long day at school, I went to bed early without watching television.",
        correct_answer: "As",
        wrong_answers: [
            "So",
            "Therefore",
            "However"
        ],
        explanation: "Initial subordinate clause introduced by causal 'As'.",
        reviewed: true
    },
    // ========================================
    // EXPANSION: Additional questions for each topic to reach 500 total
    // ========================================
    // Proper Nouns (94-97)
    {
        rank: 94,
        topic: "Proper Nouns",
        question: "We visited _____ during our summer holiday last year and had a wonderful time exploring.",
        correct_answer: "Paris",
        wrong_answers: [
            "paris",
            "city",
            "country"
        ],
        explanation: "Proper nouns for specific places require capitalization.",
        reviewed: true
    },
    {
        rank: 95,
        topic: "Proper Nouns",
        question: "My best friend _____ moved to our street last month from a different town nearby.",
        correct_answer: "Sarah",
        wrong_answers: [
            "sarah",
            "girl",
            "person"
        ],
        explanation: "Personal names are proper nouns and must be capitalized.",
        reviewed: true
    },
    {
        rank: 96,
        topic: "Proper Nouns",
        question: "The family went to _____ for Christmas celebrations this December with all their relatives together.",
        correct_answer: "Scotland",
        wrong_answers: [
            "scotland",
            "north",
            "country"
        ],
        explanation: "Names of countries are proper nouns requiring initial capitals.",
        reviewed: true
    },
    {
        rank: 97,
        topic: "Proper Nouns",
        question: "Our class read a fascinating book about _____ in history lesson yesterday morning at school.",
        correct_answer: "Queen Victoria",
        wrong_answers: [
            "queen victoria",
            "the queen",
            "royalty"
        ],
        explanation: "Titles combined with names form proper nouns with capitals.",
        reviewed: true
    },
    // Common Nouns (98-101)
    {
        rank: 98,
        topic: "Common Nouns",
        question: "The children played with their favourite _____ in the garden after school today for several hours.",
        correct_answer: "toy",
        wrong_answers: [
            "Toy",
            "London",
            "Sarah"
        ],
        explanation: "Common nouns for general objects don't need capitalization unless sentence-initial.",
        reviewed: true
    },
    {
        rank: 99,
        topic: "Common Nouns",
        question: "She put the clean _____ away in the cupboard after washing them carefully this morning before breakfast.",
        correct_answer: "plates",
        wrong_answers: [
            "Plates",
            "Monday",
            "Thames"
        ],
        explanation: "Common nouns refer to general classes and use lowercase.",
        reviewed: true
    },
    {
        rank: 100,
        topic: "Common Nouns",
        question: "The friendly _____ wagged its tail happily when we came home from the shops this afternoon.",
        correct_answer: "dog",
        wrong_answers: [
            "Dog",
            "Rover",
            "Britain"
        ],
        explanation: "Animal types as common nouns use lowercase unless proper names.",
        reviewed: true
    },
    {
        rank: 101,
        topic: "Common Nouns",
        question: "Please pass me a _____ from the drawer so I can write this important letter.",
        correct_answer: "pen",
        wrong_answers: [
            "Pen",
            "Parker",
            "England"
        ],
        explanation: "Common nouns for everyday objects remain lowercase in standard contexts.",
        reviewed: true
    },
    // Personal Pronouns (102-105)
    {
        rank: 102,
        topic: "Personal Pronouns",
        question: "My sister and _____ walked to school together this morning in the bright sunshine very happily.",
        correct_answer: "I",
        wrong_answers: [
            "me",
            "myself",
            "mine"
        ],
        explanation: "Use 'I' as subject pronoun in compound subjects.",
        reviewed: true
    },
    {
        rank: 103,
        topic: "Personal Pronouns",
        question: "The teacher gave the homework sheets to my classmates and _____ before break time this morning.",
        correct_answer: "me",
        wrong_answers: [
            "I",
            "myself",
            "mine"
        ],
        explanation: "Use 'me' as object pronoun after preposition 'to'.",
        reviewed: true
    },
    {
        rank: 104,
        topic: "Personal Pronouns",
        question: "The football players celebrated their amazing win, and _____ were extremely happy after the difficult match.",
        correct_answer: "they",
        wrong_answers: [
            "them",
            "their",
            "theirs"
        ],
        explanation: "Use 'they' as subject pronoun for third-person plural.",
        reviewed: true
    },
    {
        rank: 105,
        topic: "Personal Pronouns",
        question: "_____ finished all the delicious chocolate cake by ourselves without leaving any for anyone else.",
        correct_answer: "We",
        wrong_answers: [
            "Us",
            "Our",
            "Ours"
        ],
        explanation: "Use 'We' as first-person plural subject pronoun.",
        reviewed: true
    },
    // Concrete vs. Abstract Nouns (106-109)
    {
        rank: 106,
        topic: "Concrete vs. Abstract Nouns",
        question: "The children felt great _____ when they received their exam results yesterday afternoon at school.",
        correct_answer: "pride",
        wrong_answers: [
            "medal",
            "certificate",
            "trophy"
        ],
        explanation: "'Pride' is an abstract noun representing an emotional state.",
        reviewed: true
    },
    {
        rank: 107,
        topic: "Concrete vs. Abstract Nouns",
        question: "Her _____ in solving difficult maths problems impressed everyone in the class during the test today.",
        correct_answer: "skill",
        wrong_answers: [
            "pencil",
            "paper",
            "desk"
        ],
        explanation: "'Skill' is an abstract noun denoting an ability rather than a physical object.",
        reviewed: true
    },
    {
        rank: 108,
        topic: "Concrete vs. Abstract Nouns",
        question: "The _____ of the old castle amazed all the tourists who visited it last summer.",
        correct_answer: "beauty",
        wrong_answers: [
            "tower",
            "stone",
            "wall"
        ],
        explanation: "'Beauty' is abstract, representing a quality rather than a tangible object.",
        reviewed: true
    },
    {
        rank: 109,
        topic: "Concrete vs. Abstract Nouns",
        question: "The _____ in the room was broken yesterday, so we couldn't see properly in the dark.",
        correct_answer: "lamp",
        wrong_answers: [
            "brightness",
            "darkness",
            "knowledge"
        ],
        explanation: "'Lamp' is a concrete noun you can physically touch and see.",
        reviewed: true
    },
    // Singular & Plural Morphology (110-113)
    {
        rank: 110,
        topic: "Singular & Plural Morphology",
        question: "The chef cooked two delicious _____ for the hungry customers at the restaurant last night.",
        correct_answer: "dishes",
        wrong_answers: [
            "dishs",
            "dish",
            "dish's"
        ],
        explanation: "Nouns ending in -sh require -es for plural formation.",
        reviewed: true
    },
    {
        rank: 111,
        topic: "Singular & Plural Morphology",
        question: "She has three _____ in her pencil case for drawing pictures in art class today.",
        correct_answer: "brushes",
        wrong_answers: [
            "brushs",
            "brush",
            "brush's"
        ],
        explanation: "Words ending in -sh add -es to form the plural.",
        reviewed: true
    },
    {
        rank: 112,
        topic: "Singular & Plural Morphology",
        question: "The gardener planted five _____ in the garden this morning before it started raining heavily outside.",
        correct_answer: "bushes",
        wrong_answers: [
            "bushs",
            "bush",
            "bush's"
        ],
        explanation: "The plural of 'bush' requires the -es suffix.",
        reviewed: true
    },
    {
        rank: 113,
        topic: "Singular & Plural Morphology",
        question: "My teacher gave us two _____ to complete for homework this evening after school today.",
        correct_answer: "quizzes",
        wrong_answers: [
            "quizs",
            "quiz",
            "quiz's"
        ],
        explanation: "Words ending in -z double the consonant and add -es for plurals.",
        reviewed: true
    },
    // Irregular Plurals (114-117)
    {
        rank: 114,
        topic: "Irregular Plurals",
        question: "The farmer kept all his _____ in the barn during the cold winter months last year.",
        correct_answer: "sheep",
        wrong_answers: [
            "sheeps",
            "sheepes",
            "sheep's"
        ],
        explanation: "'Sheep' has an identical singular and plural form (zero plural).",
        reviewed: true
    },
    {
        rank: 115,
        topic: "Irregular Plurals",
        question: "The _____ played happily in the park while their parents watched them carefully this afternoon.",
        correct_answer: "children",
        wrong_answers: [
            "childs",
            "childrens",
            "child"
        ],
        explanation: "'Child' has an irregular plural 'children' formed by mutation.",
        reviewed: true
    },
    {
        rank: 116,
        topic: "Irregular Plurals",
        question: "The scientist studied three different species of _____ in the forest last summer for research.",
        correct_answer: "mice",
        wrong_answers: [
            "mouses",
            "mices",
            "mouse"
        ],
        explanation: "'Mouse' undergoes vowel change to form the irregular plural 'mice'.",
        reviewed: true
    },
    {
        rank: 117,
        topic: "Irregular Plurals",
        question: "All the _____ in the team worked together to win the championship match yesterday evening.",
        correct_answer: "men",
        wrong_answers: [
            "mans",
            "mens",
            "man"
        ],
        explanation: "'Man' becomes 'men' through vowel mutation in the plural.",
        reviewed: true
    },
    // Definite & Indefinite Articles (118-121)
    {
        rank: 118,
        topic: "Definite & Indefinite Articles",
        question: "We need _____ umbrella because it looks like rain outside today according to the weather forecast.",
        correct_answer: "an",
        wrong_answers: [
            "a",
            "the",
            "one"
        ],
        explanation: "Use 'an' before words beginning with vowel sounds.",
        reviewed: true
    },
    {
        rank: 119,
        topic: "Definite & Indefinite Articles",
        question: "_____ sun is shining brightly in the clear blue sky this beautiful summer morning today.",
        correct_answer: "The",
        wrong_answers: [
            "A",
            "An",
            "Some"
        ],
        explanation: "Use 'the' for unique objects like the sun.",
        reviewed: true
    },
    {
        rank: 120,
        topic: "Definite & Indefinite Articles",
        question: "She wants to become _____ doctor when she grows up and finishes university in several years.",
        correct_answer: "a",
        wrong_answers: [
            "an",
            "the",
            "one"
        ],
        explanation: "Use 'a' before consonant sounds for non-specific singular nouns.",
        reviewed: true
    },
    {
        rank: 121,
        topic: "Definite & Indefinite Articles",
        question: "They saw _____ owl flying silently through the dark forest late last night near their campsite.",
        correct_answer: "an",
        wrong_answers: [
            "a",
            "the",
            "some"
        ],
        explanation: "'Owl' begins with a vowel sound, requiring 'an'.",
        reviewed: true
    },
    // Main Verbs (Action) (122-125)
    {
        rank: 122,
        topic: "Main Verbs (Action)",
        question: "The athletes _____ every single morning before school to prepare for the important competition next month.",
        correct_answer: "train",
        wrong_answers: [
            "trains",
            "training",
            "trained"
        ],
        explanation: "Plural subject 'athletes' requires the base form verb 'train' in present simple.",
        reviewed: true
    },
    {
        rank: 123,
        topic: "Main Verbs (Action)",
        question: "My little brother _____ his bicycle to the park every Saturday afternoon with his friends.",
        correct_answer: "rides",
        wrong_answers: [
            "ride",
            "riding",
            "rided"
        ],
        explanation: "Singular third-person subject requires -s ending on the verb.",
        reviewed: true
    },
    {
        rank: 124,
        topic: "Main Verbs (Action)",
        question: "The birds _____ south for the winter when the weather gets cold each year without fail.",
        correct_answer: "fly",
        wrong_answers: [
            "flies",
            "flying",
            "flied"
        ],
        explanation: "Plural subject 'birds' takes the base form of the action verb.",
        reviewed: true
    },
    {
        rank: 125,
        topic: "Main Verbs (Action)",
        question: "She _____ a beautiful picture of flowers in art class yesterday afternoon at school today.",
        correct_answer: "painted",
        wrong_answers: [
            "paints",
            "painting",
            "paint"
        ],
        explanation: "Past time marker 'yesterday' requires the past tense form.",
        reviewed: true
    },
    // Main Verbs (Stative) (126-129)
    {
        rank: 126,
        topic: "Main Verbs (Stative)",
        question: "This soup _____ absolutely delicious right now, just like my grandmother used to make it years ago.",
        correct_answer: "tastes",
        wrong_answers: [
            "is tasting",
            "taste",
            "tasted"
        ],
        explanation: "Stative verbs of perception like 'taste' use simple form, not continuous.",
        reviewed: true
    },
    {
        rank: 127,
        topic: "Main Verbs (Stative)",
        question: "I _____ that hard work is essential for success in school and in life generally speaking.",
        correct_answer: "believe",
        wrong_answers: [
            "am believing",
            "believes",
            "believed"
        ],
        explanation: "Mental state verbs like 'believe' are stative and use simple forms.",
        reviewed: true
    },
    {
        rank: 128,
        topic: "Main Verbs (Stative)",
        question: "The books on the shelf _____ to my older sister who studies at university in London.",
        correct_answer: "belong",
        wrong_answers: [
            "are belonging",
            "belongs",
            "belonged"
        ],
        explanation: "'Belong' is a stative verb indicating possession, not an action.",
        reviewed: true
    },
    {
        rank: 129,
        topic: "Main Verbs (Stative)",
        question: "My mother _____ three different languages fluently because she travelled a lot when she was younger.",
        correct_answer: "knows",
        wrong_answers: [
            "is knowing",
            "know",
            "knew"
        ],
        explanation: "'Know' is a stative verb of cognition using simple present.",
        reviewed: true
    },
    // Simple Present Tense (130-133)
    {
        rank: 130,
        topic: "Simple Present Tense",
        question: "Water _____ at 100 degrees Celsius under normal atmospheric pressure according to scientific principles we learned yesterday.",
        correct_answer: "boils",
        wrong_answers: [
            "boil",
            "boiling",
            "boiled"
        ],
        explanation: "Scientific facts use simple present tense with third-person singular -s.",
        reviewed: true
    },
    {
        rank: 131,
        topic: "Simple Present Tense",
        question: "My father _____ to work by train every single day from Monday to Friday without exception.",
        correct_answer: "goes",
        wrong_answers: [
            "go",
            "going",
            "went"
        ],
        explanation: "Habitual actions use simple present; third-person singular adds -es.",
        reviewed: true
    },
    {
        rank: 132,
        topic: "Simple Present Tense",
        question: "Cats usually _____ for many hours during the day and hunt at night when it's dark.",
        correct_answer: "sleep",
        wrong_answers: [
            "sleeps",
            "sleeping",
            "slept"
        ],
        explanation: "General truths use simple present; plural subject takes base form.",
        reviewed: true
    },
    {
        rank: 133,
        topic: "Simple Present Tense",
        question: "The Earth _____ around the Sun once every year in a predictable elliptical orbit pattern.",
        correct_answer: "revolves",
        wrong_answers: [
            "revolve",
            "revolving",
            "revolved"
        ],
        explanation: "Universal truths use simple present with third-person -s ending.",
        reviewed: true
    },
    // Simple Past Tense (Regular) (134-137)
    {
        rank: 134,
        topic: "Simple Past Tense (Regular)",
        question: "The children _____ all their vegetables at dinner last night before they could have dessert afterwards.",
        correct_answer: "finished",
        wrong_answers: [
            "finish",
            "finishing",
            "finishes"
        ],
        explanation: "Regular verbs form past tense by adding -ed to the base form.",
        reviewed: true
    },
    {
        rank: 135,
        topic: "Simple Past Tense (Regular)",
        question: "She _____ her grandmother on the telephone for an hour yesterday evening after school today.",
        correct_answer: "called",
        wrong_answers: [
            "call",
            "calling",
            "calls"
        ],
        explanation: "Past time reference requires -ed ending on regular verbs.",
        reviewed: true
    },
    {
        rank: 136,
        topic: "Simple Past Tense (Regular)",
        question: "We _____ the museum last Saturday and learned many fascinating things about ancient history and cultures.",
        correct_answer: "visited",
        wrong_answers: [
            "visit",
            "visiting",
            "visits"
        ],
        explanation: "The -ed suffix marks completed actions in the past.",
        reviewed: true
    },
    {
        rank: 137,
        topic: "Simple Past Tense (Regular)",
        question: "The dog _____ loudly when the postman knocked on the door this morning very early.",
        correct_answer: "barked",
        wrong_answers: [
            "bark",
            "barking",
            "barks"
        ],
        explanation: "Regular past tense adds -ed to describe completed past actions.",
        reviewed: true
    },
    // Simple Past Tense (Irregular) (138-141)
    {
        rank: 138,
        topic: "Simple Past Tense (Irregular)",
        question: "I _____ my homework on the kitchen table this morning before I left for school.",
        correct_answer: "forgot",
        wrong_answers: [
            "forgetted",
            "forget",
            "forgotten"
        ],
        explanation: "'Forget' is irregular; past tense is 'forgot', not 'forgetted'.",
        reviewed: true
    },
    {
        rank: 139,
        topic: "Simple Past Tense (Irregular)",
        question: "She _____ a beautiful song at the concert last night in front of hundreds of people.",
        correct_answer: "sang",
        wrong_answers: [
            "singed",
            "sing",
            "sung"
        ],
        explanation: "'Sing' has an irregular past form 'sang' through vowel change.",
        reviewed: true
    },
    {
        rank: 140,
        topic: "Simple Past Tense (Irregular)",
        question: "The glass _____ into many pieces when it fell off the table onto the hard floor.",
        correct_answer: "broke",
        wrong_answers: [
            "breaked",
            "break",
            "broken"
        ],
        explanation: "'Break' forms past tense irregularly as 'broke', not 'breaked'.",
        reviewed: true
    },
    {
        rank: 141,
        topic: "Simple Past Tense (Irregular)",
        question: "We _____ three hours to finish the difficult test at school yesterday afternoon in the classroom.",
        correct_answer: "took",
        wrong_answers: [
            "taked",
            "take",
            "taken"
        ],
        explanation: "'Take' has the irregular past form 'took'.",
        reviewed: true
    },
    // Descriptive Adjectives (142-145)
    {
        rank: 142,
        topic: "Descriptive Adjectives",
        question: "The _____ flowers in the garden smell wonderful on this beautiful spring morning today outside.",
        correct_answer: "colourful",
        wrong_answers: [
            "colourfully",
            "colour",
            "colours"
        ],
        explanation: "Adjectives modify nouns; the -ful suffix forms the adjective.",
        reviewed: true
    },
    {
        rank: 143,
        topic: "Descriptive Adjectives",
        question: "She wore a _____ dress to the party last Saturday night and looked absolutely stunning.",
        correct_answer: "beautiful",
        wrong_answers: [
            "beautifully",
            "beauty",
            "beautifies"
        ],
        explanation: "Attributive adjectives precede and describe nouns.",
        reviewed: true
    },
    {
        rank: 144,
        topic: "Descriptive Adjectives",
        question: "The _____ mountain peaks were covered with snow throughout the entire winter season last year.",
        correct_answer: "tall",
        wrong_answers: [
            "tallness",
            "taller",
            "tallest"
        ],
        explanation: "Base form adjective 'tall' modifies the noun without comparison.",
        reviewed: true
    },
    {
        rank: 145,
        topic: "Descriptive Adjectives",
        question: "He told us a _____ story about his adventures traveling around the world for many years.",
        correct_answer: "fascinating",
        wrong_answers: [
            "fascinate",
            "fascinated",
            "fascinatingly"
        ],
        explanation: "Present participle adjectives describe the quality of the noun.",
        reviewed: true
    },
    // Coordinating Conjunctions (Basic) (146-149)
    {
        rank: 146,
        topic: "Coordinating Conjunctions (Basic)",
        question: "I wanted to go swimming today, _____ the pool was closed for maintenance and repairs unfortunately.",
        correct_answer: "but",
        wrong_answers: [
            "and",
            "or",
            "so"
        ],
        explanation: "'But' introduces contrast between two independent clauses.",
        reviewed: true
    },
    {
        rank: 147,
        topic: "Coordinating Conjunctions (Basic)",
        question: "She studied hard for the test every night, _____ she passed with excellent marks yesterday morning.",
        correct_answer: "and",
        wrong_answers: [
            "but",
            "or",
            "yet"
        ],
        explanation: "'And' connects two related events in sequence.",
        reviewed: true
    },
    {
        rank: 148,
        topic: "Coordinating Conjunctions (Basic)",
        question: "Would you like tea _____ coffee to drink with your breakfast this morning at the table?",
        correct_answer: "or",
        wrong_answers: [
            "and",
            "but",
            "so"
        ],
        explanation: "'Or' presents alternative options in a question.",
        reviewed: true
    },
    {
        rank: 149,
        topic: "Coordinating Conjunctions (Basic)",
        question: "It was raining heavily outside, _____ we decided to stay inside and play board games together.",
        correct_answer: "so",
        wrong_answers: [
            "and",
            "but",
            "or"
        ],
        explanation: "'So' indicates cause and effect between clauses.",
        reviewed: true
    },
    // Sentence Demarcation (150-153)
    {
        rank: 150,
        topic: "Sentence Demarcation",
        question: "_____ dog barked loudly when the doorbell rang this morning while we were eating our breakfast.",
        correct_answer: "The",
        wrong_answers: [
            "the",
            "THE",
            "tHE"
        ],
        explanation: "Sentences must begin with a capital letter for proper demarcation.",
        reviewed: true
    },
    {
        rank: 151,
        topic: "Sentence Demarcation",
        question: "_____ children played happily in the garden all afternoon yesterday in the warm sunshine outside.",
        correct_answer: "The",
        wrong_answers: [
            "the",
            "THE",
            "tHe"
        ],
        explanation: "Initial capitalization is required for sentence demarcation.",
        reviewed: true
    },
    {
        rank: 152,
        topic: "Sentence Demarcation",
        question: "_____ went to the cinema last night to watch the new film everyone was talking about.",
        correct_answer: "We",
        wrong_answers: [
            "we",
            "WE",
            "wE"
        ],
        explanation: "Sentence-initial words require capitalization regardless of word class.",
        reviewed: true
    },
    {
        rank: 153,
        topic: "Sentence Demarcation",
        question: "What an amazing day it was when we visited the zoo last summer_____",
        correct_answer: "!",
        wrong_answers: [
            ".",
            ",",
            ";"
        ],
        explanation: "Exclamations require exclamation marks for proper sentence ending.",
        reviewed: true
    },
    // Question Formation (154-157)
    {
        rank: 154,
        topic: "Question Formation",
        question: "_____ time does the train leave for Manchester this evening from the station platform number three?",
        correct_answer: "What",
        wrong_answers: [
            "Which",
            "When",
            "How"
        ],
        explanation: "'What time' is the standard interrogative phrase for asking about specific times.",
        reviewed: true
    },
    {
        rank: 155,
        topic: "Question Formation",
        question: "_____ did you put my keys after you used them this morning before leaving the house?",
        correct_answer: "Where",
        wrong_answers: [
            "When",
            "Why",
            "How"
        ],
        explanation: "'Where' asks about location or place.",
        reviewed: true
    },
    {
        rank: 156,
        topic: "Question Formation",
        question: "_____ many students are in your class at school this year compared to last year's total?",
        correct_answer: "How",
        wrong_answers: [
            "What",
            "Which",
            "Where"
        ],
        explanation: "'How many' is used to ask about quantities with countable nouns.",
        reviewed: true
    },
    {
        rank: 157,
        topic: "Question Formation",
        question: "_____ book would you like to read first from this large collection on the shelf over there?",
        correct_answer: "Which",
        wrong_answers: [
            "What",
            "Who",
            "Where"
        ],
        explanation: "'Which' asks for a choice from a specific set of options.",
        reviewed: true
    },
    // Imperative Mood (158-161)
    {
        rank: 158,
        topic: "Imperative Mood",
        question: "_____ your coat on before you go outside because it's very cold and windy today.",
        correct_answer: "Put",
        wrong_answers: [
            "Puts",
            "Putting",
            "To put"
        ],
        explanation: "Imperatives use the base form of the verb without a subject.",
        reviewed: true
    },
    {
        rank: 159,
        topic: "Imperative Mood",
        question: "_____ careful when you cross the busy road on your way to school this morning please!",
        correct_answer: "Be",
        wrong_answers: [
            "Are",
            "Being",
            "Been"
        ],
        explanation: "The imperative form of 'be' is simply 'be'.",
        reviewed: true
    },
    {
        rank: 160,
        topic: "Imperative Mood",
        question: "_____ forget to bring your homework to school tomorrow morning for the teacher to check carefully.",
        correct_answer: "Don't",
        wrong_answers: [
            "Not",
            "Doesn't",
            "Didn't"
        ],
        explanation: "Negative imperatives use 'don't' plus base form.",
        reviewed: true
    },
    {
        rank: 161,
        topic: "Imperative Mood",
        question: "_____ me the salt from the kitchen cupboard over there please when you have a moment.",
        correct_answer: "Pass",
        wrong_answers: [
            "Passes",
            "Passing",
            "Passed"
        ],
        explanation: "Commands use the bare infinitive form of verbs.",
        reviewed: true
    },
    // Possessive Determiners (162-165)
    {
        rank: 162,
        topic: "Possessive Determiners",
        question: "The cat licked _____ paws clean after eating the delicious food from its bowl this morning.",
        correct_answer: "its",
        wrong_answers: [
            "it's",
            "his",
            "her"
        ],
        explanation: "'Its' (no apostrophe) is the possessive determiner for animals/things.",
        reviewed: true
    },
    {
        rank: 163,
        topic: "Possessive Determiners",
        question: "We love visiting _____ grandparents during the school holidays every summer and winter without fail.",
        correct_answer: "our",
        wrong_answers: [
            "us",
            "we",
            "ours"
        ],
        explanation: "'Our' is the first-person plural possessive determiner.",
        reviewed: true
    },
    {
        rank: 164,
        topic: "Possessive Determiners",
        question: "They forgot _____ umbrellas at home this morning, so they got wet in the rain.",
        correct_answer: "their",
        wrong_answers: [
            "there",
            "they're",
            "them"
        ],
        explanation: "'Their' shows possession by a third-person plural subject.",
        reviewed: true
    },
    {
        rank: 165,
        topic: "Possessive Determiners",
        question: "Sarah always keeps _____ room very tidy and organized unlike her messy younger brother next door.",
        correct_answer: "her",
        wrong_answers: [
            "she",
            "hers",
            "his"
        ],
        explanation: "'Her' is the feminine singular possessive determiner.",
        reviewed: true
    },
    // Possessive Apostrophes (166-169)
    {
        rank: 166,
        topic: "Possessive Apostrophes",
        question: "I found the _____ toys scattered all over the bedroom floor this morning when I woke up.",
        correct_answer: "children's",
        wrong_answers: [
            "childrens",
            "childrens'",
            "children"
        ],
        explanation: "Irregular plural 'children' forms possessive by adding 's'.",
        reviewed: true
    },
    {
        rank: 167,
        topic: "Possessive Apostrophes",
        question: "The _____ car was parked outside our house all night blocking the driveway completely yesterday evening.",
        correct_answer: "neighbour's",
        wrong_answers: [
            "neighbours",
            "neighbours'",
            "neighbour"
        ],
        explanation: "Singular possessive requires apostrophe before s.",
        reviewed: true
    },
    {
        rank: 168,
        topic: "Possessive Apostrophes",
        question: "All the _____ coats were hanging on the hooks in the classroom cloakroom this afternoon.",
        correct_answer: "pupils'",
        wrong_answers: [
            "pupils",
            "pupil's",
            "pupiles'"
        ],
        explanation: "Plural possessive places apostrophe after the s.",
        reviewed: true
    },
    {
        rank: 169,
        topic: "Possessive Apostrophes",
        question: "The _____ menu had many delicious choices for us to select from yesterday evening at dinner.",
        correct_answer: "restaurant's",
        wrong_answers: [
            "restaurants",
            "restaurants'",
            "restaurant"
        ],
        explanation: "Singular noun forms possessive with apostrophe s.",
        reviewed: true
    },
    // Demonstrative Pronouns (170-173)
    {
        rank: 170,
        topic: "Demonstrative Pronouns",
        question: "_____ flowers right here in my hand smell absolutely beautiful and fresh this morning today.",
        correct_answer: "These",
        wrong_answers: [
            "Those",
            "This",
            "That"
        ],
        explanation: "'These' is the plural proximal demonstrative for nearby objects.",
        reviewed: true
    },
    {
        rank: 171,
        topic: "Demonstrative Pronouns",
        question: "Can you see _____ bird flying high up in the sky above us right now?",
        correct_answer: "that",
        wrong_answers: [
            "this",
            "these",
            "those"
        ],
        explanation: "'That' is singular distal demonstrative for distant objects.",
        reviewed: true
    },
    {
        rank: 172,
        topic: "Demonstrative Pronouns",
        question: "_____ cake on the table over there looks delicious and I want to eat it now.",
        correct_answer: "That",
        wrong_answers: [
            "This",
            "These",
            "Those"
        ],
        explanation: "Singular distant object requires 'that'.",
        reviewed: true
    },
    {
        rank: 173,
        topic: "Demonstrative Pronouns",
        question: "_____ is my favourite book of all time because it has an amazing story inside.",
        correct_answer: "This",
        wrong_answers: [
            "That",
            "These",
            "Those"
        ],
        explanation: "'This' refers to something close or immediate.",
        reviewed: true
    },
    // Prepositions of Place (174-177)
    {
        rank: 174,
        topic: "Prepositions of Place",
        question: "The picture is hanging _____ the wall in the living room above the comfortable sofa near the window.",
        correct_answer: "on",
        wrong_answers: [
            "in",
            "at",
            "to"
        ],
        explanation: "'On' indicates surface contact with vertical surfaces like walls.",
        reviewed: true
    },
    {
        rank: 175,
        topic: "Prepositions of Place",
        question: "She put the books _____ the shelf in her bedroom so they would be organized neatly.",
        correct_answer: "on",
        wrong_answers: [
            "in",
            "at",
            "under"
        ],
        explanation: "'On' shows position upon a horizontal surface.",
        reviewed: true
    },
    {
        rank: 176,
        topic: "Prepositions of Place",
        question: "The mouse ran _____ the table when it saw the cat approaching from across the room.",
        correct_answer: "under",
        wrong_answers: [
            "on",
            "above",
            "at"
        ],
        explanation: "'Under' indicates position below something with no contact.",
        reviewed: true
    },
    {
        rank: 177,
        topic: "Prepositions of Place",
        question: "We met our friends _____ the park entrance this afternoon to play football together happily.",
        correct_answer: "at",
        wrong_answers: [
            "in",
            "on",
            "to"
        ],
        explanation: "'At' specifies a precise point or location for meeting.",
        reviewed: true
    },
    // Prepositions of Time (178-181)
    {
        rank: 178,
        topic: "Prepositions of Time",
        question: "My birthday is _____ the fifteenth of July every single year without exception always and forever.",
        correct_answer: "on",
        wrong_answers: [
            "in",
            "at",
            "to"
        ],
        explanation: "'On' is used with specific dates.",
        reviewed: true
    },
    {
        rank: 179,
        topic: "Prepositions of Time",
        question: "School starts _____ September and finishes in July at the end of the academic year each time.",
        correct_answer: "in",
        wrong_answers: [
            "on",
            "at",
            "to"
        ],
        explanation: "'In' is used with months, years, and seasons.",
        reviewed: true
    },
    {
        rank: 180,
        topic: "Prepositions of Time",
        question: "The shop closes _____ six o'clock every evening during the week from Monday to Friday regularly.",
        correct_answer: "at",
        wrong_answers: [
            "in",
            "on",
            "to"
        ],
        explanation: "'At' is used with specific times on the clock.",
        reviewed: true
    },
    {
        rank: 181,
        topic: "Prepositions of Time",
        question: "We always have a big family meal _____ Christmas Day with all our relatives gathered together happily.",
        correct_answer: "on",
        wrong_answers: [
            "in",
            "at",
            "to"
        ],
        explanation: "'On' is used with specific holidays and dates.",
        reviewed: true
    },
    // Compound Nouns (182-185)
    {
        rank: 182,
        topic: "Compound Nouns",
        question: "I need to pack my _____ for the holiday trip to Spain next week with the family.",
        correct_answer: "suitcase",
        wrong_answers: [
            "suit case",
            "suit-case",
            "suitcases"
        ],
        explanation: "'Suitcase' is a closed compound noun written as one word.",
        reviewed: true
    },
    {
        rank: 183,
        topic: "Compound Nouns",
        question: "She set the _____ for three o'clock to wake up early for school tomorrow morning without fail.",
        correct_answer: "alarm clock",
        wrong_answers: [
            "alarmclock",
            "alarm-clock",
            "alarum clock"
        ],
        explanation: "'Alarm clock' is an open compound written as two words.",
        reviewed: true
    },
    {
        rank: 184,
        topic: "Compound Nouns",
        question: "My _____ lives in Australia and sends us lovely letters every month during the year regularly.",
        correct_answer: "mother-in-law",
        wrong_answers: [
            "mother in law",
            "motherinlaw",
            "mothers-in-law"
        ],
        explanation: "'Mother-in-law' is a hyphenated compound noun.",
        reviewed: true
    },
    {
        rank: 185,
        topic: "Compound Nouns",
        question: "The _____ flew overhead making loud noises while we were having our picnic in the park yesterday.",
        correct_answer: "aeroplane",
        wrong_answers: [
            "aero plane",
            "aero-plane",
            "air plane"
        ],
        explanation: "'Aeroplane' (UK spelling) is a closed compound noun.",
        reviewed: true
    },
    // Exclamative Sentences (186-189)
    {
        rank: 186,
        topic: "Exclamative Sentences",
        question: "_____ beautiful the sunset looks this evening with all those amazing colours in the sky!",
        correct_answer: "How",
        wrong_answers: [
            "What",
            "Which",
            "So"
        ],
        explanation: "'How' introduces exclamatives focused on adjectives or adverbs.",
        reviewed: true
    },
    {
        rank: 187,
        topic: "Exclamative Sentences",
        question: "_____ a terrible storm that was last night with all the thunder and lightning everywhere!",
        correct_answer: "What",
        wrong_answers: [
            "How",
            "Which",
            "Very"
        ],
        explanation: "'What' introduces exclamatives with noun phrases ('a storm').",
        reviewed: true
    },
    {
        rank: 188,
        topic: "Exclamative Sentences",
        question: "_____ lovely flowers these are that you brought me from the garden this morning for my birthday!",
        correct_answer: "What",
        wrong_answers: [
            "How",
            "Which",
            "So"
        ],
        explanation: "'What' is used before noun phrases in exclamations.",
        reviewed: true
    },
    {
        rank: 189,
        topic: "Exclamative Sentences",
        question: "_____ quickly the time has passed since we started school this morning at nine o'clock sharp!",
        correct_answer: "How",
        wrong_answers: [
            "What",
            "Which",
            "Very"
        ],
        explanation: "'How' modifies adverbs like 'quickly' in exclamations.",
        reviewed: true
    },
    // Suffixation (Comparative/Superlative) (190-193)
    {
        rank: 190,
        topic: "Suffixation (Comparative/Superlative)",
        question: "My brother is _____ than me by exactly five centimetres according to the measurement we did yesterday.",
        correct_answer: "taller",
        wrong_answers: [
            "tallest",
            "tall",
            "more tall"
        ],
        explanation: "Comparative -er compares two entities.",
        reviewed: true
    },
    {
        rank: 191,
        topic: "Suffixation (Comparative/Superlative)",
        question: "This exercise is the _____ one we have done all year in maths class at school recently.",
        correct_answer: "hardest",
        wrong_answers: [
            "harder",
            "hard",
            "most hard"
        ],
        explanation: "Superlative -est indicates the extreme among three or more.",
        reviewed: true
    },
    {
        rank: 192,
        topic: "Suffixation (Comparative/Superlative)",
        question: "Sarah runs _____ than anyone else in our class during PE lessons every week without exception.",
        correct_answer: "faster",
        wrong_answers: [
            "fastest",
            "fast",
            "more fast"
        ],
        explanation: "One-syllable adjectives form comparatives with -er.",
        reviewed: true
    },
    {
        rank: 193,
        topic: "Suffixation (Comparative/Superlative)",
        question: "That was the _____ film I have ever seen in my entire life at the cinema yesterday evening!",
        correct_answer: "funniest",
        wrong_answers: [
            "funnier",
            "funny",
            "most funny"
        ],
        explanation: "Short adjectives form superlatives with -est.",
        reviewed: true
    },
    // Present Continuous Tense (194-197)
    {
        rank: 194,
        topic: "Present Continuous Tense",
        question: "The children _____ in the garden right now while their mother prepares lunch in the kitchen inside.",
        correct_answer: "are playing",
        wrong_answers: [
            "play",
            "played",
            "plays"
        ],
        explanation: "Present continuous shows action happening now with be + -ing.",
        reviewed: true
    },
    {
        rank: 195,
        topic: "Present Continuous Tense",
        question: "She _____ a letter to her friend at this very moment sitting at her desk near the window.",
        correct_answer: "is writing",
        wrong_answers: [
            "writes",
            "wrote",
            "write"
        ],
        explanation: "Singular subject needs 'is' plus present participle for ongoing action.",
        reviewed: true
    },
    {
        rank: 196,
        topic: "Present Continuous Tense",
        question: "I _____ my homework right now, so please don't disturb me for the next hour or so.",
        correct_answer: "am doing",
        wrong_answers: [
            "do",
            "did",
            "does"
        ],
        explanation: "First person singular uses 'am' plus -ing for current activity.",
        reviewed: true
    },
    {
        rank: 197,
        topic: "Present Continuous Tense",
        question: "Look! The birds _____ in formation across the beautiful clear blue sky above us right this moment.",
        correct_answer: "are flying",
        wrong_answers: [
            "fly",
            "flew",
            "flies"
        ],
        explanation: "Plural subject takes 'are' plus participle for action in progress.",
        reviewed: true
    },
    // Past Continuous Tense (198-201)
    {
        rank: 198,
        topic: "Past Continuous Tense",
        question: "They _____ television when I called them on the telephone last night at eight o'clock exactly.",
        correct_answer: "were watching",
        wrong_answers: [
            "watched",
            "watch",
            "are watching"
        ],
        explanation: "Past continuous uses 'were' plus -ing for ongoing past action.",
        reviewed: true
    },
    {
        rank: 199,
        topic: "Past Continuous Tense",
        question: "She _____ in the rain when I saw her walking home from school yesterday afternoon sadly.",
        correct_answer: "was walking",
        wrong_answers: [
            "walked",
            "walks",
            "is walking"
        ],
        explanation: "Singular past continuous requires 'was' plus present participle.",
        reviewed: true
    },
    {
        rank: 200,
        topic: "Past Continuous Tense",
        question: "We _____ dinner together when the power suddenly went out in the house last Tuesday evening.",
        correct_answer: "were eating",
        wrong_answers: [
            "ate",
            "eat",
            "are eating"
        ],
        explanation: "Plural subject uses 'were' plus -ing for interrupted past action.",
        reviewed: true
    },
    {
        rank: 201,
        topic: "Past Continuous Tense",
        question: "The dog _____ loudly all night long, so nobody in the house could sleep properly at all.",
        correct_answer: "was barking",
        wrong_answers: [
            "barked",
            "barks",
            "is barking"
        ],
        explanation: "Past ongoing action uses 'was' with -ing for singular subjects.",
        reviewed: true
    },
    // Future Simple (Will) (202-205)
    {
        rank: 202,
        topic: "Future Simple (Will)",
        question: "I think the weather _____ better tomorrow according to what the forecast said on television this morning.",
        correct_answer: "will be",
        wrong_answers: [
            "is",
            "was",
            "shall be"
        ],
        explanation: "'Will' expresses predictions about the future.",
        reviewed: true
    },
    {
        rank: 203,
        topic: "Future Simple (Will)",
        question: "She _____ ten years old next month on her birthday which we are planning to celebrate together.",
        correct_answer: "will be",
        wrong_answers: [
            "is",
            "was",
            "has been"
        ],
        explanation: "'Will be' indicates future state or condition.",
        reviewed: true
    },
    {
        rank: 204,
        topic: "Future Simple (Will)",
        question: "We _____ you back as soon as possible after we receive your important message later today.",
        correct_answer: "will call",
        wrong_answers: [
            "call",
            "called",
            "are calling"
        ],
        explanation: "'Will' plus base verb forms simple future tense.",
        reviewed: true
    },
    {
        rank: 205,
        topic: "Future Simple (Will)",
        question: "The train _____ at platform five in approximately ten minutes from now according to the timetable display.",
        correct_answer: "will arrive",
        wrong_answers: [
            "arrives",
            "arrived",
            "is arriving"
        ],
        explanation: "'Will' indicates future events and scheduled actions.",
        reviewed: true
    },
    // Future (Going to) (206-209)
    {
        rank: 206,
        topic: "Future (Going to)",
        question: "Look at those dark storm clouds in the sky! It _____ pour with rain any minute now.",
        correct_answer: "is going to",
        wrong_answers: [
            "will",
            "shall",
            "goes to"
        ],
        explanation: "'Going to' shows prediction based on present evidence.",
        reviewed: true
    },
    {
        rank: 207,
        topic: "Future (Going to)",
        question: "We _____ visit our grandparents next weekend because we already made plans with them days ago.",
        correct_answer: "are going to",
        wrong_answers: [
            "will",
            "shall",
            "go to"
        ],
        explanation: "'Going to' expresses prior intentions and plans.",
        reviewed: true
    },
    {
        rank: 208,
        topic: "Future (Going to)",
        question: "She _____ study medicine at university after she finishes school in two years' time from now.",
        correct_answer: "is going to",
        wrong_answers: [
            "will",
            "shall",
            "goes to"
        ],
        explanation: "'Going to' indicates definite plans and intentions.",
        reviewed: true
    },
    {
        rank: 209,
        topic: "Future (Going to)",
        question: "Be careful! You _____ drop that heavy box if you're not more careful with it right now!",
        correct_answer: "are going to",
        wrong_answers: [
            "will",
            "shall",
            "go to"
        ],
        explanation: "'Going to' predicts imminent events based on current situation.",
        reviewed: true
    },
    // Coordinating Conjunctions (FANBOYS) (210-213)
    {
        rank: 210,
        topic: "Coordinating Conjunctions (FANBOYS)",
        question: "I didn't go to the party last night, _____ did my sister stay home either surprisingly enough.",
        correct_answer: "nor",
        wrong_answers: [
            "or",
            "and",
            "but"
        ],
        explanation: "'Nor' is used after negative statements to add another negative.",
        reviewed: true
    },
    {
        rank: 211,
        topic: "Coordinating Conjunctions (FANBOYS)",
        question: "We must leave now, _____ we will miss the last bus home from town this evening without doubt.",
        correct_answer: "or",
        wrong_answers: [
            "and",
            "but",
            "so"
        ],
        explanation: "'Or' indicates an alternative consequence or choice.",
        reviewed: true
    },
    {
        rank: 212,
        topic: "Coordinating Conjunctions (FANBOYS)",
        question: "She was feeling ill today, _____ she decided to stay home from school and rest in bed.",
        correct_answer: "so",
        wrong_answers: [
            "for",
            "yet",
            "but"
        ],
        explanation: "'So' shows result or consequence of the first clause.",
        reviewed: true
    },
    {
        rank: 213,
        topic: "Coordinating Conjunctions (FANBOYS)",
        question: "He bought the expensive computer, _____ he had been saving his pocket money for months to afford it.",
        correct_answer: "for",
        wrong_answers: [
            "so",
            "or",
            "nor"
        ],
        explanation: "'For' means 'because' and introduces the reason.",
        reviewed: true
    },
    // Subordinating Conjunctions (Time/Place) (214-217)
    {
        rank: 214,
        topic: "Subordinating Conjunctions (Time/Place)",
        question: "Please wait here _____ I return from the shop with the groceries we need for dinner tonight.",
        correct_answer: "until",
        wrong_answers: [
            "because",
            "although",
            "if"
        ],
        explanation: "'Until' introduces a time subordinate clause indicating duration.",
        reviewed: true
    },
    {
        rank: 215,
        topic: "Subordinating Conjunctions (Time/Place)",
        question: "_____ the bell rang loudly, all the children rushed outside to play in the sunny playground happily.",
        correct_answer: "When",
        wrong_answers: [
            "Because",
            "Although",
            "If"
        ],
        explanation: "'When' introduces temporal subordinate clauses.",
        reviewed: true
    },
    {
        rank: 216,
        topic: "Subordinating Conjunctions (Time/Place)",
        question: "You can sit _____ you like in the classroom as long as you work quietly and don't disturb others.",
        correct_answer: "wherever",
        wrong_answers: [
            "whenever",
            "because",
            "although"
        ],
        explanation: "'Wherever' introduces place subordinate clauses meaning 'any place'.",
        reviewed: true
    },
    {
        rank: 217,
        topic: "Subordinating Conjunctions (Time/Place)",
        question: "We'll start the picnic _____ everyone arrives at the park with all their food and drinks ready.",
        correct_answer: "after",
        wrong_answers: [
            "because",
            "although",
            "unless"
        ],
        explanation: "'After' establishes temporal sequence in subordinate clauses.",
        reviewed: true
    },
    // Subordinating Conjunctions (Causal) (218-221)
    {
        rank: 218,
        topic: "Subordinating Conjunctions (Causal)",
        question: "_____ it was snowing heavily outside, the school remained open and lessons continued as normal throughout the day.",
        correct_answer: "Although",
        wrong_answers: [
            "Because",
            "When",
            "Before"
        ],
        explanation: "'Although' introduces concessive clauses showing contrast.",
        reviewed: true
    },
    {
        rank: 219,
        topic: "Subordinating Conjunctions (Causal)",
        question: "She scored full marks on the test _____ she had studied very hard every single evening for weeks.",
        correct_answer: "because",
        wrong_answers: [
            "although",
            "unless",
            "when"
        ],
        explanation: "'Because' introduces causal subordinate clauses giving reasons.",
        reviewed: true
    },
    {
        rank: 220,
        topic: "Subordinating Conjunctions (Causal)",
        question: "We won't go to the beach tomorrow _____ the weather improves significantly from how it is today.",
        correct_answer: "unless",
        wrong_answers: [
            "because",
            "although",
            "when"
        ],
        explanation: "'Unless' means 'if not' and introduces conditional exceptions.",
        reviewed: true
    },
    {
        rank: 221,
        topic: "Subordinating Conjunctions (Causal)",
        question: "_____ he felt nervous about the exam, he managed to complete it successfully in the time allowed.",
        correct_answer: "Although",
        wrong_answers: [
            "Because",
            "If",
            "When"
        ],
        explanation: "'Although' introduces concession despite an opposing circumstance.",
        reviewed: true
    },
    // Main Clause vs. Subordinate Clause (222-225)
    {
        rank: 222,
        topic: "Main Clause vs. Subordinate Clause",
        question: "The children played outside all day long _____ the weather was perfect and sunny for hours.",
        correct_answer: "because",
        wrong_answers: [
            "and",
            "but",
            "so"
        ],
        explanation: "Subordinate clause introduced by 'because' gives reason for main clause.",
        reviewed: true
    },
    {
        rank: 223,
        topic: "Main Clause vs. Subordinate Clause",
        question: "The match was cancelled _____ it was raining too heavily for safe play on the muddy pitch.",
        correct_answer: "because",
        wrong_answers: [
            "and",
            "but",
            "or"
        ],
        explanation: "Subordinating conjunction 'because' introduces dependent clause explaining the reason.",
        reviewed: true
    },
    {
        rank: 224,
        topic: "Main Clause vs. Subordinate Clause",
        question: "_____ we arrived at the cinema late, we missed the beginning of the film unfortunately last night.",
        correct_answer: "Because",
        wrong_answers: [
            "And",
            "But",
            "Or"
        ],
        explanation: "Subordinate clause can come first, followed by main clause with comma.",
        reviewed: true
    },
    {
        rank: 225,
        topic: "Main Clause vs. Subordinate Clause",
        question: "She enjoys reading books _____ she finds them relaxing and educational at the same time always.",
        correct_answer: "because",
        wrong_answers: [
            "and",
            "but",
            "or"
        ],
        explanation: "'Because' creates a dependent clause explaining the main clause action.",
        reviewed: true
    },
    // Expanded Noun Phrases (226-229)
    {
        rank: 226,
        topic: "Expanded Noun Phrases",
        question: "The _____ jumped over the fence and ran away quickly across the field into the distance.",
        correct_answer: "big brown dog with a wagging tail",
        wrong_answers: [
            "dog",
            "brown dog",
            "big dog"
        ],
        explanation: "Maximum expansion includes multiple modifiers and prepositional phrase.",
        reviewed: true
    },
    {
        rank: 227,
        topic: "Expanded Noun Phrases",
        question: "She wore a _____ to the wedding celebration yesterday afternoon in the beautiful church nearby.",
        correct_answer: "long elegant silk dress",
        wrong_answers: [
            "dress",
            "silk dress",
            "long dress"
        ],
        explanation: "Expanded noun phrases stack multiple adjectives before the noun.",
        reviewed: true
    },
    {
        rank: 228,
        topic: "Expanded Noun Phrases",
        question: "The _____ stood majestically on top of the tall hill overlooking the entire peaceful valley below.",
        correct_answer: "ancient stone castle with high towers",
        wrong_answers: [
            "castle",
            "stone castle",
            "ancient castle"
        ],
        explanation: "Full expansion includes adjectives, material noun, and prepositional phrase.",
        reviewed: true
    },
    {
        rank: 229,
        topic: "Expanded Noun Phrases",
        question: "We bought a _____ from the shop on the corner of our street this morning before breakfast.",
        correct_answer: "delicious chocolate cake with cream",
        wrong_answers: [
            "cake",
            "chocolate cake",
            "delicious cake"
        ],
        explanation: "Maximum noun phrase expansion uses all available modification slots.",
        reviewed: true
    },
    // Adverbs of Manner (230-233)
    {
        rank: 230,
        topic: "Adverbs of Manner",
        question: "She danced _____ across the stage during the performance last night at the theatre in town.",
        correct_answer: "gracefully",
        wrong_answers: [
            "graceful",
            "grace",
            "graced"
        ],
        explanation: "Adverbs of manner modify verbs and typically end in -ly.",
        reviewed: true
    },
    {
        rank: 231,
        topic: "Adverbs of Manner",
        question: "The children whispered _____ in the library so as not to disturb the other people reading books quietly.",
        correct_answer: "softly",
        wrong_answers: [
            "soft",
            "softness",
            "soften"
        ],
        explanation: "'Softly' describes how the action of whispering was performed.",
        reviewed: true
    },
    {
        rank: 232,
        topic: "Adverbs of Manner",
        question: "He completed the difficult puzzle _____ even though it had many challenging pieces to fit together perfectly.",
        correct_answer: "quickly",
        wrong_answers: [
            "quick",
            "quickness",
            "quicker"
        ],
        explanation: "Manner adverbs tell us how an action is performed.",
        reviewed: true
    },
    {
        rank: 233,
        topic: "Adverbs of Manner",
        question: "The old car moved _____ up the steep hill because the engine was very weak and old.",
        correct_answer: "slowly",
        wrong_answers: [
            "slow",
            "slowness",
            "slower"
        ],
        explanation: "'-ly' suffix forms adverbs describing the manner of movement.",
        reviewed: true
    },
    // Adverbs of Frequency (234-237)
    {
        rank: 234,
        topic: "Adverbs of Frequency",
        question: "I _____ brush my teeth twice a day without fail - once in the morning and once before bed.",
        correct_answer: "always",
        wrong_answers: [
            "never",
            "tomorrow",
            "quickly"
        ],
        explanation: "'Always' indicates 100% frequency and comes before main verbs.",
        reviewed: true
    },
    {
        rank: 235,
        topic: "Adverbs of Frequency",
        question: "She _____ goes swimming at weekends because she loves being in the water very much indeed.",
        correct_answer: "often",
        wrong_answers: [
            "yesterday",
            "slowly",
            "there"
        ],
        explanation: "'Often' shows high frequency and precedes the main verb.",
        reviewed: true
    },
    {
        rank: 236,
        topic: "Adverbs of Frequency",
        question: "We _____ eat fast food at home because my mother prefers cooking healthy meals for the family.",
        correct_answer: "rarely",
        wrong_answers: [
            "quickly",
            "tomorrow",
            "here"
        ],
        explanation: "'Rarely' indicates low frequency of occurrence.",
        reviewed: true
    },
    {
        rank: 237,
        topic: "Adverbs of Frequency",
        question: "They _____ visit museums during holidays because they find them boring and prefer outdoor activities instead always.",
        correct_answer: "never",
        wrong_answers: [
            "always",
            "yesterday",
            "happily"
        ],
        explanation: "'Never' means 0% frequency - no occurrences at all.",
        reviewed: true
    },
    // Adverbs of Time & Place (238-241)
    {
        rank: 238,
        topic: "Adverbs of Time & Place",
        question: "We went to the park _____ and had a wonderful picnic with all our friends together.",
        correct_answer: "yesterday",
        wrong_answers: [
            "quickly",
            "always",
            "happily"
        ],
        explanation: "'Yesterday' is an adverb of time indicating when something happened.",
        reviewed: true
    },
    {
        rank: 239,
        topic: "Adverbs of Time & Place",
        question: "Put your shoes _____ by the door so you can find them easily tomorrow morning for school.",
        correct_answer: "there",
        wrong_answers: [
            "soon",
            "often",
            "quickly"
        ],
        explanation: "'There' is an adverb of place showing location.",
        reviewed: true
    },
    {
        rank: 240,
        topic: "Adverbs of Time & Place",
        question: "The postman will arrive _____ with the important package we have been waiting for all week.",
        correct_answer: "soon",
        wrong_answers: [
            "here",
            "quickly",
            "always"
        ],
        explanation: "'Soon' indicates near future time.",
        reviewed: true
    },
    {
        rank: 241,
        topic: "Adverbs of Time & Place",
        question: "Come _____ and sit down next to me on this comfortable sofa in the living room please.",
        correct_answer: "here",
        wrong_answers: [
            "now",
            "often",
            "slowly"
        ],
        explanation: "'Here' specifies the place or location for the action.",
        reviewed: true
    },
    // Present Perfect Simple (242-245)
    {
        rank: 242,
        topic: "Present Perfect Simple",
        question: "They _____ in this house for ten years and still love living here very much indeed.",
        correct_answer: "have lived",
        wrong_answers: [
            "lived",
            "live",
            "living"
        ],
        explanation: "Present perfect shows action starting in past continuing to present.",
        reviewed: true
    },
    {
        rank: 243,
        topic: "Present Perfect Simple",
        question: "She _____ her homework yet, so she can't watch television until it's completely finished properly.",
        correct_answer: "hasn't done",
        wrong_answers: [
            "didn't do",
            "doesn't do",
            "isn't doing"
        ],
        explanation: "Present perfect negative with 'yet' shows incomplete action.",
        reviewed: true
    },
    {
        rank: 244,
        topic: "Present Perfect Simple",
        question: "I _____ to Paris three times in my life and would love to go again someday soon.",
        correct_answer: "have been",
        wrong_answers: [
            "went",
            "go",
            "am going"
        ],
        explanation: "Present perfect counts experiences in unspecified past time.",
        reviewed: true
    },
    {
        rank: 245,
        topic: "Present Perfect Simple",
        question: "He _____ just finished his lunch and is now ready to play football with his friends outside.",
        correct_answer: "has",
        wrong_answers: [
            "have",
            "had",
            "is"
        ],
        explanation: "Present perfect with 'just' indicates very recent completion.",
        reviewed: true
    },
    // Subject-Verb Agreement (246-249)
    {
        rank: 246,
        topic: "Subject-Verb Agreement",
        question: "Each of the students _____ responsible for completing their own homework assignment by tomorrow morning without fail.",
        correct_answer: "is",
        wrong_answers: [
            "are",
            "were",
            "be"
        ],
        explanation: "'Each' is singular and requires singular verb 'is'.",
        reviewed: true
    },
    {
        rank: 247,
        topic: "Subject-Verb Agreement",
        question: "The team of players _____ very hard every day to prepare for the important championship match next week.",
        correct_answer: "trains",
        wrong_answers: [
            "train",
            "training",
            "trained"
        ],
        explanation: "Collective noun 'team' treated as singular unit takes singular verb.",
        reviewed: true
    },
    {
        rank: 248,
        topic: "Subject-Verb Agreement",
        question: "Neither the teacher nor the students _____ the answer to that extremely difficult question on the test today.",
        correct_answer: "know",
        wrong_answers: [
            "knows",
            "knowing",
            "knew"
        ],
        explanation: "With 'neither...nor', verb agrees with the nearest subject (students).",
        reviewed: true
    },
    {
        rank: 249,
        topic: "Subject-Verb Agreement",
        question: "Everyone in the class _____ excited about the school trip to the museum next Friday afternoon together.",
        correct_answer: "is",
        wrong_answers: [
            "are",
            "were",
            "be"
        ],
        explanation: "Indefinite pronoun 'everyone' is always singular.",
        reviewed: true
    },
    // Direct Speech (250-253)
    {
        rank: 250,
        topic: "Direct Speech",
        question: "\"_____ you help me with this heavy box?\" she asked politely when she saw me walking past her.",
        correct_answer: "Can",
        wrong_answers: [
            "can",
            "Are",
            "Do"
        ],
        explanation: "Direct speech requires capital letter at the start of quoted words.",
        reviewed: true
    },
    {
        rank: 251,
        topic: "Direct Speech",
        question: "He said, \"I _____ finish my work before dinner tonight,\" and then continued typing on the computer.",
        correct_answer: "must",
        wrong_answers: [
            "musts",
            "musting",
            "musted"
        ],
        explanation: "Modal verbs in direct speech remain unchanged.",
        reviewed: true
    },
    {
        rank: 252,
        topic: "Direct Speech",
        question: "\"Don't forget your lunch!\" Mum called out loudly as I left for school this morning in a hurry.",
        correct_answer: "!",
        wrong_answers: [
            ".",
            "?",
            ","
        ],
        explanation: "Exclamations in direct speech end with exclamation marks.",
        reviewed: true
    },
    {
        rank: 253,
        topic: "Direct Speech",
        question: "\"Where are you going?\" asked Dad when he saw me putting on my coat at the front door.",
        correct_answer: "?",
        wrong_answers: [
            ".",
            "!",
            ","
        ],
        explanation: "Questions in direct speech require question marks inside quotation marks.",
        reviewed: true
    },
    // Reflexive Pronouns (254-257)
    {
        rank: 254,
        topic: "Reflexive Pronouns",
        question: "The children organized the party _____ without any help from their parents at all last Saturday.",
        correct_answer: "themselves",
        wrong_answers: [
            "them",
            "their",
            "they"
        ],
        explanation: "Plural reflexive pronoun 'themselves' emphasizes the doers of the action.",
        reviewed: true
    },
    {
        rank: 255,
        topic: "Reflexive Pronouns",
        question: "He taught _____ to play the guitar by watching videos online every day for many months patiently.",
        correct_answer: "himself",
        wrong_answers: [
            "him",
            "his",
            "he"
        ],
        explanation: "Reflexive pronoun shows subject and object are the same person.",
        reviewed: true
    },
    {
        rank: 256,
        topic: "Reflexive Pronouns",
        question: "I accidentally cut _____ while preparing dinner with the sharp knife in the kitchen this evening unfortunately.",
        correct_answer: "myself",
        wrong_answers: [
            "me",
            "my",
            "mine"
        ],
        explanation: "First-person reflexive 'myself' indicates the action affects the subject.",
        reviewed: true
    },
    {
        rank: 257,
        topic: "Reflexive Pronouns",
        question: "You should be proud of _____ for winning the race yesterday after training so hard for weeks.",
        correct_answer: "yourself",
        wrong_answers: [
            "you",
            "your",
            "yours"
        ],
        explanation: "Second-person reflexive emphasizes personal achievement.",
        reviewed: true
    },
    // Quantifiers (258-261)
    {
        rank: 258,
        topic: "Quantifiers",
        question: "There are _____ apples left in the basket, so we need to buy more from the shop soon.",
        correct_answer: "few",
        wrong_answers: [
            "little",
            "much",
            "less"
        ],
        explanation: "'Few' is used with countable plural nouns like 'apples'.",
        reviewed: true
    },
    {
        rank: 259,
        topic: "Quantifiers",
        question: "We don't have _____ time left before the exam starts, so we must hurry up right now.",
        correct_answer: "much",
        wrong_answers: [
            "many",
            "few",
            "a few"
        ],
        explanation: "'Much' is used with uncountable nouns like 'time' in negative contexts.",
        reviewed: true
    },
    {
        rank: 260,
        topic: "Quantifiers",
        question: "There were _____ people at the concert last night because the weather was terrible and stormy all evening.",
        correct_answer: "few",
        wrong_answers: [
            "little",
            "much",
            "less"
        ],
        explanation: "'Few' with countable nouns indicates a small number.",
        reviewed: true
    },
    {
        rank: 261,
        topic: "Quantifiers",
        question: "She has _____ friends at her new school already even though she only started there last month.",
        correct_answer: "many",
        wrong_answers: [
            "much",
            "little",
            "less"
        ],
        explanation: "'Many' quantifies countable plural nouns in affirmative sentences.",
        reviewed: true
    },
    // Zero Conditional (262-265)
    {
        rank: 262,
        topic: "Zero Conditional",
        question: "If you heat ice to above zero degrees Celsius, it always _____ into liquid water every single time.",
        correct_answer: "melts",
        wrong_answers: [
            "melted",
            "will melt",
            "would melt"
        ],
        explanation: "Zero conditional uses present simple in both clauses for scientific facts.",
        reviewed: true
    },
    {
        rank: 263,
        topic: "Zero Conditional",
        question: "When plants don't get enough water regularly, they _____ and eventually die if not watered soon enough.",
        correct_answer: "wilt",
        wrong_answers: [
            "wilted",
            "will wilt",
            "would wilt"
        ],
        explanation: "General truths use present simple tense in result clause.",
        reviewed: true
    },
    {
        rank: 264,
        topic: "Zero Conditional",
        question: "If you _____ one to three, you always get four as the answer in mathematics every time.",
        correct_answer: "add",
        wrong_answers: [
            "added",
            "will add",
            "would add"
        ],
        explanation: "Mathematical facts use present simple in the condition clause.",
        reviewed: true
    },
    {
        rank: 265,
        topic: "Zero Conditional",
        question: "When the sun _____ down in the evening, it gets dark outside gradually and stars appear above.",
        correct_answer: "goes",
        wrong_answers: [
            "went",
            "will go",
            "would go"
        ],
        explanation: "Natural phenomena use present simple to express regular occurrences.",
        reviewed: true
    },
    // First Conditional (266-269)
    {
        rank: 266,
        topic: "First Conditional",
        question: "If it _____ tomorrow, we will have to cancel the outdoor picnic we planned for the afternoon.",
        correct_answer: "rains",
        wrong_answers: [
            "rained",
            "will rain",
            "would rain"
        ],
        explanation: "First conditional uses present simple in if-clause for real future possibility.",
        reviewed: true
    },
    {
        rank: 267,
        topic: "First Conditional",
        question: "You _____ the bus if you don't leave now immediately and hurry to the bus stop quickly.",
        correct_answer: "will miss",
        wrong_answers: [
            "miss",
            "missed",
            "would miss"
        ],
        explanation: "Main clause of first conditional uses 'will' plus base verb.",
        reviewed: true
    },
    {
        rank: 268,
        topic: "First Conditional",
        question: "If she _____ hard enough tonight, she will definitely pass the test tomorrow morning at school successfully.",
        correct_answer: "studies",
        wrong_answers: [
            "studied",
            "will study",
            "would study"
        ],
        explanation: "Present simple in if-clause describes likely future condition.",
        reviewed: true
    },
    {
        rank: 269,
        topic: "First Conditional",
        question: "We _____ go to the beach this weekend if the weather forecast is good and sunny all day.",
        correct_answer: "will",
        wrong_answers: [
            "would",
            "can",
            "could"
        ],
        explanation: "'Will' in main clause shows likely future result.",
        reviewed: true
    },
    // Fronted Adverbials (270-273)
    {
        rank: 270,
        topic: "Fronted Adverbials",
        question: "_____, she completed all her homework assignments before watching television in the evening after dinner today.",
        correct_answer: "Quickly",
        wrong_answers: [
            "Quick",
            "Quickness",
            "Quicker"
        ],
        explanation: "Fronted adverbials of manner use -ly form at sentence start.",
        reviewed: true
    },
    {
        rank: 271,
        topic: "Fronted Adverbials",
        question: "_____ the storm, the power went out throughout the entire neighbourhood for several hours last night.",
        correct_answer: "During",
        wrong_answers: [
            "Quick",
            "Slow",
            "Happy"
        ],
        explanation: "Fronted prepositional phrase acts as adverbial of time.",
        reviewed: true
    },
    {
        rank: 272,
        topic: "Fronted Adverbials",
        question: "_____ his fear of heights, he climbed to the top of the mountain successfully and enjoyed the view.",
        correct_answer: "Despite",
        wrong_answers: [
            "Because",
            "Quickly",
            "Slowly"
        ],
        explanation: "Fronted concessive adverbial introduces contrasting information.",
        reviewed: true
    },
    {
        rank: 273,
        topic: "Fronted Adverbials",
        question: "_____ the morning mist cleared, we could finally see the beautiful valley below us spread out magnificently.",
        correct_answer: "After",
        wrong_answers: [
            "Quick",
            "Slow",
            "Happy"
        ],
        explanation: "Temporal fronted adverbial shows when the main action occurred.",
        reviewed: true
    },
    // Plural Possessive Apostrophes (274-277)
    {
        rank: 274,
        topic: "Plural Possessive Apostrophes",
        question: "The _____ coats were all hanging neatly on hooks in the school cloakroom this cold winter morning.",
        correct_answer: "teachers'",
        wrong_answers: [
            "teacher's",
            "teachers",
            "teacheres'"
        ],
        explanation: "Plural noun ending in s adds only apostrophe for possession.",
        reviewed: true
    },
    {
        rank: 275,
        topic: "Plural Possessive Apostrophes",
        question: "All the _____ bedrooms were upstairs on the second floor of the large family house near town.",
        correct_answer: "boys'",
        wrong_answers: [
            "boy's",
            "boys",
            "boyes'"
        ],
        explanation: "Regular plural possessive places apostrophe after final s.",
        reviewed: true
    },
    {
        rank: 276,
        topic: "Plural Possessive Apostrophes",
        question: "The _____ opinions were divided about which film to watch at the cinema together on Saturday evening.",
        correct_answer: "girls'",
        wrong_answers: [
            "girl's",
            "girls",
            "girles'"
        ],
        explanation: "Plural ending in s forms possessive with apostrophe only.",
        reviewed: true
    },
    {
        rank: 277,
        topic: "Plural Possessive Apostrophes",
        question: "Both _____ engines stopped working at the same time during the flight, causing great alarm and panic.",
        correct_answer: "planes'",
        wrong_answers: [
            "plane's",
            "planes",
            "planees'"
        ],
        explanation: "Multiple planes require plural possessive with apostrophe after s.",
        reviewed: true
    },
    // Prefixation (278-281)
    {
        rank: 278,
        topic: "Prefixation",
        question: "She was very _____ with her test results because she had hoped for much better marks than these.",
        correct_answer: "unhappy",
        wrong_answers: [
            "dishappy",
            "inhappy",
            "nonhappy"
        ],
        explanation: "Prefix 'un-' forms negative adjectives.",
        reviewed: true
    },
    {
        rank: 279,
        topic: "Prefixation",
        question: "It is _____ to predict exactly what will happen in the future many years from now with certainty.",
        correct_answer: "impossible",
        wrong_answers: [
            "unpossible",
            "dispossible",
            "nonpossible"
        ],
        explanation: "'Im-' prefix negates adjectives beginning with 'p'.",
        reviewed: true
    },
    {
        rank: 280,
        topic: "Prefixation",
        question: "He _____ the instructions by not following them carefully, which caused many problems for everyone involved unfortunately.",
        correct_answer: "misunderstood",
        wrong_answers: [
            "ununderstood",
            "disunderstood",
            "inunderstood"
        ],
        explanation: "Prefix 'mis-' means wrongly or badly.",
        reviewed: true
    },
    {
        rank: 281,
        topic: "Prefixation",
        question: "The story seemed completely _____ because nothing like that could ever happen in real life at all.",
        correct_answer: "unbelievable",
        wrong_answers: [
            "disbelievable",
            "imbelievable",
            "nonbelievable"
        ],
        explanation: "'Un-' is the standard negative prefix for '-able' adjectives.",
        reviewed: true
    },
    // Word Families (282-285)
    {
        rank: 282,
        topic: "Word Families",
        question: "The doctor gave me some _____ to help with my headache that had been bothering me all day.",
        correct_answer: "medicine",
        wrong_answers: [
            "medical",
            "medicate",
            "medically"
        ],
        explanation: "Noun form 'medicine' is required as the object.",
        reviewed: true
    },
    {
        rank: 283,
        topic: "Word Families",
        question: "Her _____ to become a professional singer was finally realised when she got the recording contract yesterday.",
        correct_answer: "ambition",
        wrong_answers: [
            "ambitious",
            "ambitiously",
            "ambitioning"
        ],
        explanation: "Abstract noun 'ambition' names the goal or aspiration.",
        reviewed: true
    },
    {
        rank: 284,
        topic: "Word Families",
        question: "The scientist made an important _____ that could change the world of medicine forever in amazing ways.",
        correct_answer: "discovery",
        wrong_answers: [
            "discover",
            "discovered",
            "discovering"
        ],
        explanation: "Noun form 'discovery' is needed as the object of 'made'.",
        reviewed: true
    },
    {
        rank: 285,
        topic: "Word Families",
        question: "We need to _____ our efforts if we want to finish this project on time by the deadline.",
        correct_answer: "increase",
        wrong_answers: [
            "increasing",
            "increased",
            "increases"
        ],
        explanation: "Base verb form follows 'need to' in the infinitive.",
        reviewed: true
    },
    // Determiners (General) (286-289)
    {
        rank: 286,
        topic: "Determiners (General)",
        question: "I need _____ help with my homework because this question is too difficult for me to solve alone.",
        correct_answer: "some",
        wrong_answers: [
            "any",
            "much",
            "few"
        ],
        explanation: "'Some' is used in affirmative requests and statements.",
        reviewed: true
    },
    {
        rank: 287,
        topic: "Determiners (General)",
        question: "Have you got _____ money to lend me until tomorrow when I get my pocket money from Dad?",
        correct_answer: "any",
        wrong_answers: [
            "some",
            "every",
            "each"
        ],
        explanation: "'Any' is typically used in questions and negative contexts.",
        reviewed: true
    },
    {
        rank: 288,
        topic: "Determiners (General)",
        question: "_____ child in the class received a certificate for their excellent work throughout the entire year proudly.",
        correct_answer: "Every",
        wrong_answers: [
            "All",
            "Much",
            "Few"
        ],
        explanation: "'Every' means each one individually and takes singular verb.",
        reviewed: true
    },
    {
        rank: 289,
        topic: "Determiners (General)",
        question: "There weren't _____ people at the meeting yesterday evening because of the terrible weather conditions outside.",
        correct_answer: "many",
        wrong_answers: [
            "much",
            "some",
            "every"
        ],
        explanation: "'Many' quantifies countable nouns in negative sentences.",
        reviewed: true
    },
    // Object Pronouns (290-293)
    {
        rank: 290,
        topic: "Object Pronouns",
        question: "The teacher asked _____ to stay behind after class to discuss our homework assignments from last week.",
        correct_answer: "us",
        wrong_answers: [
            "we",
            "our",
            "ours"
        ],
        explanation: "'Us' is the object pronoun for first-person plural.",
        reviewed: true
    },
    {
        rank: 291,
        topic: "Object Pronouns",
        question: "I saw _____ at the shopping centre yesterday afternoon buying clothes for the party next weekend together.",
        correct_answer: "them",
        wrong_answers: [
            "they",
            "their",
            "theirs"
        ],
        explanation: "'Them' is the object form of third-person plural pronoun.",
        reviewed: true
    },
    {
        rank: 292,
        topic: "Object Pronouns",
        question: "Can you help _____ carry these heavy bags to the car parked outside in the car park please?",
        correct_answer: "her",
        wrong_answers: [
            "she",
            "hers",
            "herself"
        ],
        explanation: "'Her' functions as the object pronoun for feminine singular.",
        reviewed: true
    },
    {
        rank: 293,
        topic: "Object Pronouns",
        question: "The dog followed _____ all the way home from the park this afternoon wagging its tail happily.",
        correct_answer: "him",
        wrong_answers: [
            "he",
            "his",
            "himself"
        ],
        explanation: "'Him' is the masculine singular object pronoun.",
        reviewed: true
    },
    // Past Perfect Simple (294-297)
    {
        rank: 294,
        topic: "Past Perfect Simple",
        question: "She _____ already eaten breakfast when I arrived at her house this morning at eight o'clock sharp.",
        correct_answer: "had",
        wrong_answers: [
            "has",
            "have",
            "was"
        ],
        explanation: "Past perfect shows action completed before another past action.",
        reviewed: true
    },
    {
        rank: 295,
        topic: "Past Perfect Simple",
        question: "By the time we reached the cinema yesterday, the film _____ already started ten minutes earlier unfortunately.",
        correct_answer: "had",
        wrong_answers: [
            "has",
            "have",
            "was"
        ],
        explanation: "'Had' plus past participle forms past perfect tense.",
        reviewed: true
    },
    {
        rank: 296,
        topic: "Past Perfect Simple",
        question: "They _____ never seen snow before they visited Scotland last winter during the Christmas holiday break.",
        correct_answer: "had",
        wrong_answers: [
            "have",
            "has",
            "were"
        ],
        explanation: "Past perfect indicates experience before a past time reference.",
        reviewed: true
    },
    {
        rank: 297,
        topic: "Past Perfect Simple",
        question: "I _____ finished my homework before dinner, so I could relax and watch television afterwards happily.",
        correct_answer: "had",
        wrong_answers: [
            "have",
            "has",
            "was"
        ],
        explanation: "Past perfect establishes sequence of past events.",
        reviewed: true
    },
    // Present Perfect Continuous (298-301)
    {
        rank: 298,
        topic: "Present Perfect Continuous",
        question: "She _____ waiting for the bus for over thirty minutes when it finally arrived at the stop.",
        correct_answer: "has been",
        wrong_answers: [
            "had been",
            "is",
            "was"
        ],
        explanation: "Present perfect continuous emphasizes duration up to now.",
        reviewed: true
    },
    {
        rank: 299,
        topic: "Present Perfect Continuous",
        question: "They _____ working on this project since Monday and are nearly finished with it all now finally.",
        correct_answer: "have been",
        wrong_answers: [
            "had been",
            "are",
            "were"
        ],
        explanation: "Plural subject uses 'have been' plus -ing for ongoing duration.",
        reviewed: true
    },
    {
        rank: 300,
        topic: "Present Perfect Continuous",
        question: "How long _____ you been studying French at school before you visited Paris last summer on holiday?",
        correct_answer: "had",
        wrong_answers: [
            "have",
            "has",
            "were"
        ],
        explanation: "Past perfect continuous asks about duration before past time.",
        reviewed: true
    },
    // Passive Voice (Present/Past) (301-304)
    {
        rank: 301,
        topic: "Passive Voice (Present/Past)",
        question: "The beautiful new library _____ built last year by the local council near the town centre square.",
        correct_answer: "was",
        wrong_answers: [
            "is",
            "were",
            "been"
        ],
        explanation: "Past passive requires 'was/were' plus past participle.",
        reviewed: true
    },
    {
        rank: 302,
        topic: "Passive Voice (Present/Past)",
        question: "Fresh bread _____ baked every single morning at the bakery on the corner of our street daily.",
        correct_answer: "is",
        wrong_answers: [
            "was",
            "are",
            "been"
        ],
        explanation: "Present passive with singular subject uses 'is' plus past participle.",
        reviewed: true
    },
    {
        rank: 303,
        topic: "Passive Voice (Present/Past)",
        question: "The letters _____ delivered to our house every day except Sunday by the friendly local postman cheerfully.",
        correct_answer: "are",
        wrong_answers: [
            "is",
            "was",
            "been"
        ],
        explanation: "Present passive with plural subject uses 'are' plus past participle.",
        reviewed: true
    },
    {
        rank: 304,
        topic: "Passive Voice (Present/Past)",
        question: "The winning goal _____ scored in the final minute of the match by our team's best striker yesterday.",
        correct_answer: "was",
        wrong_answers: [
            "is",
            "were",
            "been"
        ],
        explanation: "Singular past passive uses 'was' plus past participle.",
        reviewed: true
    },
    // Relative Clauses (Defining) (305-308)
    {
        rank: 305,
        topic: "Relative Clauses (Defining)",
        question: "The girl _____ lives next door to us plays the piano beautifully every afternoon after school finishes.",
        correct_answer: "who",
        wrong_answers: [
            "which",
            "where",
            "whose"
        ],
        explanation: "'Who' introduces defining relative clauses about people as subjects.",
        reviewed: true
    },
    {
        rank: 306,
        topic: "Relative Clauses (Defining)",
        question: "This is the book _____ I borrowed from the school library last week to read for my homework project.",
        correct_answer: "that",
        wrong_answers: [
            "who",
            "where",
            "what"
        ],
        explanation: "'That' introduces defining clauses about things as objects.",
        reviewed: true
    },
    {
        rank: 307,
        topic: "Relative Clauses (Defining)",
        question: "The park _____ we play football every weekend has brand new goalposts and a smooth grass pitch now.",
        correct_answer: "where",
        wrong_answers: [
            "which",
            "who",
            "when"
        ],
        explanation: "'Where' introduces defining clauses about places.",
        reviewed: true
    },
    {
        rank: 308,
        topic: "Relative Clauses (Defining)",
        question: "The student _____ bag was left behind after class went to the office to collect it this afternoon.",
        correct_answer: "whose",
        wrong_answers: [
            "who",
            "which",
            "that"
        ],
        explanation: "'Whose' shows possession in relative clauses.",
        reviewed: true
    },
    // Relative Clauses (Non-Defining) (309-312)
    {
        rank: 309,
        topic: "Relative Clauses (Non-Defining)",
        question: "My uncle, _____ lives in Australia, sent me a lovely birthday card and present through the post yesterday.",
        correct_answer: "who",
        wrong_answers: [
            "which",
            "that",
            "he"
        ],
        explanation: "Non-defining clauses about people use 'who' with commas.",
        reviewed: true
    },
    {
        rank: 310,
        topic: "Relative Clauses (Non-Defining)",
        question: "The school trip, _____ takes place next month, will visit the natural history museum in London all day.",
        correct_answer: "which",
        wrong_answers: [
            "that",
            "who",
            "it"
        ],
        explanation: "Non-defining clauses about things use 'which', never 'that'.",
        reviewed: true
    },
    {
        rank: 311,
        topic: "Relative Clauses (Non-Defining)",
        question: "London, _____ is the capital of England, has many famous landmarks like Big Ben and Tower Bridge to visit.",
        correct_answer: "which",
        wrong_answers: [
            "that",
            "where",
            "it"
        ],
        explanation: "Non-defining clauses adding extra information use 'which'.",
        reviewed: true
    },
    {
        rank: 312,
        topic: "Relative Clauses (Non-Defining)",
        question: "Shakespeare, _____ plays are studied worldwide, was born in Stratford-upon-Avon many centuries ago in England.",
        correct_answer: "whose",
        wrong_answers: [
            "who",
            "which",
            "his"
        ],
        explanation: "'Whose' shows possession in non-defining clauses.",
        reviewed: true
    },
    // Modal Verbs (Possibility/Ability) (313-316)
    {
        rank: 313,
        topic: "Modal Verbs (Possibility/Ability)",
        question: "She _____ speak three different languages fluently because she lived abroad for many years with her family previously.",
        correct_answer: "can",
        wrong_answers: [
            "cans",
            "could",
            "may"
        ],
        explanation: "'Can' expresses present ability.",
        reviewed: true
    },
    {
        rank: 314,
        topic: "Modal Verbs (Possibility/Ability)",
        question: "It _____ rain later this afternoon according to the weather forecast, so take your umbrella with you please.",
        correct_answer: "might",
        wrong_answers: [
            "mights",
            "must",
            "will"
        ],
        explanation: "'Might' expresses possibility or uncertainty.",
        reviewed: true
    },
    {
        rank: 315,
        topic: "Modal Verbs (Possibility/Ability)",
        question: "When I was younger, I _____ swim really fast and won several medals at swimming competitions around the country.",
        correct_answer: "could",
        wrong_answers: [
            "can",
            "may",
            "might"
        ],
        explanation: "'Could' expresses past ability.",
        reviewed: true
    },
    {
        rank: 316,
        topic: "Modal Verbs (Possibility/Ability)",
        question: "You _____ borrow my bicycle if you need to get to school quickly this morning before the bell rings.",
        correct_answer: "may",
        wrong_answers: [
            "mays",
            "must",
            "will"
        ],
        explanation: "'May' expresses permission or possibility.",
        reviewed: true
    },
    // Modal Verbs (Obligation/Advice) (317-320)
    {
        rank: 317,
        topic: "Modal Verbs (Obligation/Advice)",
        question: "You _____ wear your school uniform every day during term time according to the rules in the handbook clearly.",
        correct_answer: "must",
        wrong_answers: [
            "musts",
            "should",
            "can"
        ],
        explanation: "'Must' expresses strong obligation or necessity.",
        reviewed: true
    },
    {
        rank: 318,
        topic: "Modal Verbs (Obligation/Advice)",
        question: "We _____ eat more vegetables to stay healthy and strong according to our doctor's advice last week definitely.",
        correct_answer: "should",
        wrong_answers: [
            "shoulds",
            "must",
            "can"
        ],
        explanation: "'Should' gives advice or recommendations.",
        reviewed: true
    },
    {
        rank: 319,
        topic: "Modal Verbs (Obligation/Advice)",
        question: "Children _____ not play with matches because they are very dangerous and could cause a serious fire quickly.",
        correct_answer: "must",
        wrong_answers: [
            "should",
            "can",
            "may"
        ],
        explanation: "'Must not' expresses prohibition.",
        reviewed: true
    },
    {
        rank: 320,
        topic: "Modal Verbs (Obligation/Advice)",
        question: "You _____ try the chocolate cake at this bakery because it tastes absolutely delicious and everyone loves it.",
        correct_answer: "should",
        wrong_answers: [
            "must",
            "can",
            "may"
        ],
        explanation: "'Should' makes a strong suggestion or recommendation.",
        reviewed: true
    },
    // Second Conditional (321-324)
    {
        rank: 321,
        topic: "Second Conditional",
        question: "If I _____ a million pounds, I would buy a big house by the seaside with a lovely garden.",
        correct_answer: "had",
        wrong_answers: [
            "have",
            "has",
            "will have"
        ],
        explanation: "Second conditional uses past simple in the if-clause.",
        reviewed: true
    },
    {
        rank: 322,
        topic: "Second Conditional",
        question: "She _____ travel the world if she had enough money saved up in her bank account right now.",
        correct_answer: "would",
        wrong_answers: [
            "will",
            "can",
            "could"
        ],
        explanation: "Second conditional uses 'would' in the main clause.",
        reviewed: true
    },
    {
        rank: 323,
        topic: "Second Conditional",
        question: "If we _____ more time available this weekend, we could visit the museum and see the new exhibition together.",
        correct_answer: "had",
        wrong_answers: [
            "have",
            "will have",
            "would have"
        ],
        explanation: "Past simple in if-clause expresses hypothetical present situations.",
        reviewed: true
    },
    {
        rank: 324,
        topic: "Second Conditional",
        question: "What would you do if you _____ invisible for a whole day and nobody could see you anywhere?",
        correct_answer: "were",
        wrong_answers: [
            "are",
            "was",
            "will be"
        ],
        explanation: "'Were' is used for all persons in second conditional with 'be'.",
        reviewed: true
    },
    // Reported Speech (Backshifting) (325-328)
    {
        rank: 325,
        topic: "Reported Speech (Backshifting)",
        question: "She said that she _____ hungry and wanted to eat something for lunch straight away without waiting.",
        correct_answer: "was",
        wrong_answers: [
            "is",
            "were",
            "had been"
        ],
        explanation: "Present simple 'is' shifts to past simple 'was' in reported speech.",
        reviewed: true
    },
    {
        rank: 326,
        topic: "Reported Speech (Backshifting)",
        question: "Tom told me that he _____ to the cinema the previous night with his friends from school together.",
        correct_answer: "had gone",
        wrong_answers: [
            "went",
            "goes",
            "has gone"
        ],
        explanation: "Past simple shifts to past perfect in reported speech.",
        reviewed: true
    },
    {
        rank: 327,
        topic: "Reported Speech (Backshifting)",
        question: "The teacher announced that we _____ have a test the following week on everything we had learned recently.",
        correct_answer: "would",
        wrong_answers: [
            "will",
            "can",
            "should"
        ],
        explanation: "'Will' shifts to 'would' in reported speech.",
        reviewed: true
    },
    {
        rank: 328,
        topic: "Reported Speech (Backshifting)",
        question: "My sister said she _____ finish her homework before dinner time that evening without any help from anyone.",
        correct_answer: "would",
        wrong_answers: [
            "will",
            "can",
            "could"
        ],
        explanation: "Future intentions shift from 'will' to 'would'.",
        reviewed: true
    },
    // Connective Adverbs (329-332)
    {
        rank: 329,
        topic: "Connective Adverbs",
        question: "I studied really hard for my maths exam last week; _____, I got an excellent grade and my parents were proud.",
        correct_answer: "therefore",
        wrong_answers: [
            "however",
            "although",
            "because"
        ],
        explanation: "'Therefore' shows result or consequence after a semicolon.",
        reviewed: true
    },
    {
        rank: 330,
        topic: "Connective Adverbs",
        question: "The weather was terrible with heavy rain all morning; _____, we still went to the park for our picnic anyway.",
        correct_answer: "however",
        wrong_answers: [
            "therefore",
            "because",
            "so"
        ],
        explanation: "'However' introduces contrast after semicolon.",
        reviewed: true
    },
    {
        rank: 331,
        topic: "Connective Adverbs",
        question: "First, we need to gather all the ingredients from the cupboard; _____, we can start mixing them together carefully.",
        correct_answer: "then",
        wrong_answers: [
            "however",
            "therefore",
            "although"
        ],
        explanation: "'Then' shows sequence or next step after semicolon.",
        reviewed: true
    },
    {
        rank: 332,
        topic: "Connective Adverbs",
        question: "She loves reading adventure books; _____, her brother prefers reading about science and space exploration instead completely.",
        correct_answer: "meanwhile",
        wrong_answers: [
            "therefore",
            "because",
            "so"
        ],
        explanation: "'Meanwhile' shows simultaneous contrast.",
        reviewed: true
    },
    // Parenthesis (Commas) (333-336)
    {
        rank: 333,
        topic: "Parenthesis (Commas)",
        question: "My best friend, _____ is incredibly kind and helpful, always shares her lunch with me every single day.",
        correct_answer: "who",
        wrong_answers: [
            "that",
            "which",
            "she"
        ],
        explanation: "Parenthetical clauses about people use 'who' between commas.",
        reviewed: true
    },
    {
        rank: 334,
        topic: "Parenthesis (Commas)",
        question: "The concert, _____ lasted three hours, was absolutely amazing and everyone enjoyed it thoroughly without exception.",
        correct_answer: "which",
        wrong_answers: [
            "that",
            "who",
            "it"
        ],
        explanation: "Parenthetical information about things uses 'which'.",
        reviewed: true
    },
    {
        rank: 335,
        topic: "Parenthesis (Commas)",
        question: "London, _____ capital of England, attracts millions of tourists from around the world every single year consistently.",
        correct_answer: "the",
        wrong_answers: [
            "a",
            "which",
            "that"
        ],
        explanation: "Parenthetical apposition uses commas without relative pronouns.",
        reviewed: true
    },
    {
        rank: 336,
        topic: "Parenthesis (Commas)",
        question: "Mr Smith, _____ teaches mathematics at our school, won an award for being an excellent teacher last month.",
        correct_answer: "who",
        wrong_answers: [
            "that",
            "which",
            "he"
        ],
        explanation: "Additional information about people requires 'who' with commas.",
        reviewed: true
    },
    // Colons (337-340)
    {
        rank: 337,
        topic: "Colons",
        question: "You will need the following items for the school trip_____ packed lunch, water bottle, sun hat, and comfortable shoes.",
        correct_answer: ":",
        wrong_answers: [
            ";",
            ",",
            "-"
        ],
        explanation: "Colons introduce lists after complete introductory statements.",
        reviewed: true
    },
    {
        rank: 338,
        topic: "Colons",
        question: "The weather forecast is clear_____ heavy rain is expected throughout the entire day tomorrow without stopping at all.",
        correct_answer: ":",
        wrong_answers: [
            ";",
            ",",
            "-"
        ],
        explanation: "Colons introduce explanations or elaborations.",
        reviewed: true
    },
    {
        rank: 339,
        topic: "Colons",
        question: "Remember this important rule_____ always check your work carefully before handing it to the teacher for marking completely.",
        correct_answer: ":",
        wrong_answers: [
            ";",
            ",",
            "."
        ],
        explanation: "Colons introduce important statements or rules.",
        reviewed: true
    },
    {
        rank: 340,
        topic: "Colons",
        question: "She had one main goal_____ to become the best swimmer in her school and win the championship this summer.",
        correct_answer: ":",
        wrong_answers: [
            ";",
            ",",
            "-"
        ],
        explanation: "Colons introduce explanatory information about preceding statement.",
        reviewed: true
    },
    // Semi-colons (Linking Clauses) (341-344)
    {
        rank: 341,
        topic: "Semi-colons (Linking Clauses)",
        question: "The rain stopped suddenly_____ the sun came out brightly and we could finally go outside to play happily.",
        correct_answer: ";",
        wrong_answers: [
            ":",
            ",",
            "."
        ],
        explanation: "Semi-colons link closely related independent clauses.",
        reviewed: true
    },
    {
        rank: 342,
        topic: "Semi-colons (Linking Clauses)",
        question: "I wanted to watch television after dinner_____ my brother wanted to play video games instead on the computer together.",
        correct_answer: ";",
        wrong_answers: [
            ":",
            ",",
            "-"
        ],
        explanation: "Semi-colons separate balanced independent clauses showing contrast.",
        reviewed: true
    },
    {
        rank: 343,
        topic: "Semi-colons (Linking Clauses)",
        question: "She practised piano every single day for hours_____ her dedication eventually paid off when she won first prize.",
        correct_answer: ";",
        wrong_answers: [
            ":",
            ",",
            "."
        ],
        explanation: "Semi-colons link cause and effect between independent clauses.",
        reviewed: true
    },
    {
        rank: 344,
        topic: "Semi-colons (Linking Clauses)",
        question: "The library closes at five o'clock today_____ make sure you return all your borrowed books before that time please.",
        correct_answer: ";",
        wrong_answers: [
            ":",
            ",",
            "."
        ],
        explanation: "Semi-colons separate related independent clauses.",
        reviewed: true
    },
    // Semi-colons (Complex Lists) (345-348)
    {
        rank: 345,
        topic: "Semi-colons (Complex Lists)",
        question: "We visited Paris, France_____ Rome, Italy_____ and Berlin, Germany during our exciting summer holiday trip around Europe this year.",
        correct_answer: "; ;",
        wrong_answers: [
            ", ,",
            ": :",
            ". ."
        ],
        explanation: "Semi-colons separate complex list items containing commas.",
        reviewed: true
    },
    {
        rank: 346,
        topic: "Semi-colons (Complex Lists)",
        question: "The school club meets on Monday, which is after assembly_____ Wednesday, during lunch break_____ and Friday afternoon after lessons finish.",
        correct_answer: "; ;",
        wrong_answers: [
            ", ,",
            ": :",
            "- -"
        ],
        explanation: "Semi-colons separate items when internal punctuation exists.",
        reviewed: true
    },
    {
        rank: 347,
        topic: "Semi-colons (Complex Lists)",
        question: "I need to pack my blue shirt, the one with stripes_____ my warm jumper, which Grandma knitted_____ and comfortable trainers for sports.",
        correct_answer: "; ;",
        wrong_answers: [
            ", ,",
            ": :",
            ". ."
        ],
        explanation: "Complex items with descriptions require semi-colons.",
        reviewed: true
    },
    {
        rank: 348,
        topic: "Semi-colons (Complex Lists)",
        question: "The winners were Sarah, from Year Six_____ Tom, who is new this year_____ and Ahmed, the captain of the team.",
        correct_answer: "; ;",
        wrong_answers: [
            ", ,",
            ": :",
            "- -"
        ],
        explanation: "Semi-colons clarify complex list structure.",
        reviewed: true
    },
    // Hyphens (349-350)
    {
        rank: 349,
        topic: "Hyphens",
        question: "My _____ old sister started secondary school last September and absolutely loves going there every day now.",
        correct_answer: "ten-year-old",
        wrong_answers: [
            "ten year old",
            "ten years old",
            "tenyearold"
        ],
        explanation: "Compound adjectives before nouns require hyphens.",
        reviewed: true
    },
    {
        rank: 350,
        topic: "Hyphens",
        question: "We need to _____ organize the books on the shelf because they are all mixed up terribly at the moment.",
        correct_answer: "re-organize",
        wrong_answers: [
            "reorganize",
            "re organize",
            "reOrganize"
        ],
        explanation: "Hyphens separate prefixes when avoiding confusion (UK English can use re-organise).",
        reviewed: true
    },
    // Ellipsis (351-354)
    {
        rank: 351,
        topic: "Ellipsis",
        question: "I love reading mystery stories___ my brother prefers adventure books about pirates and treasure instead every time we visit the library.",
        correct_answer: ";",
        wrong_answers: [
            "...",
            ":",
            ","
        ],
        explanation: "Semi-colon links independent clauses; ellipsis shows omission.",
        reviewed: true
    },
    {
        rank: 352,
        topic: "Ellipsis",
        question: "\"I'm not sure if I can come to the party___\" she said quietly, looking uncertain and disappointed clearly.",
        correct_answer: "...",
        wrong_answers: [
            ".",
            "!",
            ","
        ],
        explanation: "Ellipsis shows trailing off or unfinished thought in speech.",
        reviewed: true
    },
    {
        rank: 353,
        topic: "Ellipsis",
        question: "The door creaked open slowly___ and something moved in the darkness inside the old abandoned house on the hill.",
        correct_answer: "...",
        wrong_answers: [
            ".",
            ",",
            ";"
        ],
        explanation: "Ellipsis creates suspense or pause in narrative writing.",
        reviewed: true
    },
    {
        rank: 354,
        topic: "Ellipsis",
        question: "He looked around nervously, wondering if anyone was watching him___ then he quickly ran away down the empty street.",
        correct_answer: "...",
        wrong_answers: [
            ".",
            ",",
            ";"
        ],
        explanation: "Ellipsis indicates hesitation or dramatic pause.",
        reviewed: true
    },
    // Active vs. Passive Voice (355-358)
    {
        rank: 355,
        topic: "Active vs. Passive Voice",
        question: "The chef _____ a delicious three-course meal for all the dinner guests at the restaurant last night beautifully.",
        correct_answer: "prepared",
        wrong_answers: [
            "was prepared",
            "is prepared",
            "prepared by"
        ],
        explanation: "Active voice shows the subject performing the action.",
        reviewed: true
    },
    {
        rank: 356,
        topic: "Active vs. Passive Voice",
        question: "The ancient castle _____ by thousands of tourists from all around the world every single year without fail.",
        correct_answer: "is visited",
        wrong_answers: [
            "visits",
            "visited",
            "visiting"
        ],
        explanation: "Passive voice emphasizes the receiver of the action.",
        reviewed: true
    },
    {
        rank: 357,
        topic: "Active vs. Passive Voice",
        question: "Shakespeare _____ many famous plays like Romeo and Juliet and Hamlet during the Elizabethan era in England long ago.",
        correct_answer: "wrote",
        wrong_answers: [
            "was written",
            "were written",
            "written by"
        ],
        explanation: "Active voice emphasizes the doer of the action.",
        reviewed: true
    },
    {
        rank: 358,
        topic: "Active vs. Passive Voice",
        question: "The winning goal _____ by the team captain in the final minute of the championship match yesterday afternoon.",
        correct_answer: "was scored",
        wrong_answers: [
            "scored",
            "scores",
            "scoring"
        ],
        explanation: "Passive voice focuses on the action rather than the actor.",
        reviewed: true
    },
    // Subject-Verb Inversion (359-362)
    {
        rank: 359,
        topic: "Subject-Verb Inversion",
        question: "Never _____ I seen such a beautiful sunset as the one we witnessed last night at the beach together.",
        correct_answer: "have",
        wrong_answers: [
            "I have",
            "did I",
            "has"
        ],
        explanation: "Negative adverbs at sentence start trigger subject-verb inversion.",
        reviewed: true
    },
    {
        rank: 360,
        topic: "Subject-Verb Inversion",
        question: "Rarely _____ we get snow in this part of the country during winter, so it's very special when it happens.",
        correct_answer: "do",
        wrong_answers: [
            "we do",
            "are",
            "we are"
        ],
        explanation: "Inversion with negative frequency adverbs uses auxiliary verbs.",
        reviewed: true
    },
    {
        rank: 361,
        topic: "Subject-Verb Inversion",
        question: "Not only _____ she win the race, but she also broke the school record for the fastest time ever.",
        correct_answer: "did",
        wrong_answers: [
            "she did",
            "was",
            "she was"
        ],
        explanation: "'Not only' triggers inversion with auxiliary verb.",
        reviewed: true
    },
    {
        rank: 362,
        topic: "Subject-Verb Inversion",
        question: "Only then _____ I realize how much effort my parents had put into planning my surprise birthday party carefully.",
        correct_answer: "did",
        wrong_answers: [
            "I did",
            "I realized",
            "realized"
        ],
        explanation: "'Only + time expression' requires subject-verb inversion.",
        reviewed: true
    },
    // Prepositional Phrases as Adverbials (363-366)
    {
        rank: 363,
        topic: "Prepositional Phrases as Adverbials",
        question: "The children played happily _____ the warm sunshine all afternoon long without stopping for a single break at all.",
        correct_answer: "in",
        wrong_answers: [
            "on",
            "at",
            "by"
        ],
        explanation: "Prepositional phrases modify verbs to show circumstances.",
        reviewed: true
    },
    {
        rank: 364,
        topic: "Prepositional Phrases as Adverbials",
        question: "_____ great difficulty, we managed to finish the challenging puzzle before dinner time yesterday evening successfully.",
        correct_answer: "With",
        wrong_answers: [
            "In",
            "On",
            "By"
        ],
        explanation: "'With + noun' creates adverbial phrase showing manner.",
        reviewed: true
    },
    {
        rank: 365,
        topic: "Prepositional Phrases as Adverbials",
        question: "The cat slept peacefully _____ the warm radiator in the living room for several hours this cold winter afternoon.",
        correct_answer: "beside",
        wrong_answers: [
            "with",
            "at",
            "in"
        ],
        explanation: "Prepositional phrases can show location of action.",
        reviewed: true
    },
    {
        rank: 366,
        topic: "Prepositional Phrases as Adverbials",
        question: "She finished her homework _____ ten minutes, which was incredibly fast and impressed her teacher greatly at school.",
        correct_answer: "in",
        wrong_answers: [
            "on",
            "at",
            "for"
        ],
        explanation: "'In' with time periods shows duration taken to complete action.",
        reviewed: true
    },
    // Verb Patterns (Gerund vs. Infinitive) (367-370)
    {
        rank: 367,
        topic: "Verb Patterns (Gerund vs. Infinitive)",
        question: "I enjoy _____ books about adventure and mystery stories in my free time every single day after school finishes.",
        correct_answer: "reading",
        wrong_answers: [
            "to read",
            "read",
            "reads"
        ],
        explanation: "'Enjoy' is followed by gerund (-ing form).",
        reviewed: true
    },
    {
        rank: 368,
        topic: "Verb Patterns (Gerund vs. Infinitive)",
        question: "She decided _____ the piano after watching a wonderful concert at the town hall last weekend with her family.",
        correct_answer: "to learn",
        wrong_answers: [
            "learning",
            "learn",
            "learns"
        ],
        explanation: "'Decide' is followed by infinitive (to + verb).",
        reviewed: true
    },
    {
        rank: 369,
        topic: "Verb Patterns (Gerund vs. Infinitive)",
        question: "They finished _____ their homework just before dinner time and then went outside to play football with their friends.",
        correct_answer: "doing",
        wrong_answers: [
            "to do",
            "do",
            "done"
        ],
        explanation: "'Finish' requires gerund, not infinitive.",
        reviewed: true
    },
    {
        rank: 370,
        topic: "Verb Patterns (Gerund vs. Infinitive)",
        question: "We hope _____ to France for our summer holiday next year if we save enough money in our bank account.",
        correct_answer: "to go",
        wrong_answers: [
            "going",
            "go",
            "goes"
        ],
        explanation: "'Hope' takes infinitive form.",
        reviewed: true
    },
    // Tag Questions (371-374)
    {
        rank: 371,
        topic: "Tag Questions",
        question: "You're coming to the party tonight, _____? Everyone else will be there from our class at school for sure.",
        correct_answer: "aren't you",
        wrong_answers: [
            "are you",
            "isn't it",
            "don't you"
        ],
        explanation: "Positive statement takes negative tag with same auxiliary.",
        reviewed: true
    },
    {
        rank: 372,
        topic: "Tag Questions",
        question: "She doesn't like chocolate ice cream very much, _____? That's quite unusual because most people absolutely love it.",
        correct_answer: "does she",
        wrong_answers: [
            "doesn't she",
            "isn't she",
            "is she"
        ],
        explanation: "Negative statement takes positive tag question.",
        reviewed: true
    },
    {
        rank: 373,
        topic: "Tag Questions",
        question: "They went to the cinema last night to watch the new film, _____? I heard it was absolutely brilliant.",
        correct_answer: "didn't they",
        wrong_answers: [
            "did they",
            "haven't they",
            "weren't they"
        ],
        explanation: "Past simple positive takes negative tag with 'did'.",
        reviewed: true
    },
    {
        rank: 374,
        topic: "Tag Questions",
        question: "We can start eating now because everyone has arrived at the table, _____? I'm absolutely starving right now.",
        correct_answer: "can't we",
        wrong_answers: [
            "can we",
            "don't we",
            "aren't we"
        ],
        explanation: "Modal verb tags use same modal in opposite polarity.",
        reviewed: true
    },
    // Cleft Sentences (It-clefts) (375-378)
    {
        rank: 375,
        topic: "Cleft Sentences (It-clefts)",
        question: "_____ was my sister who won first prize in the art competition at school yesterday, not me at all.",
        correct_answer: "It",
        wrong_answers: [
            "There",
            "This",
            "That"
        ],
        explanation: "It-clefts use 'it' to emphasize specific information.",
        reviewed: true
    },
    {
        rank: 376,
        topic: "Cleft Sentences (It-clefts)",
        question: "It was the blue car _____ caused the accident on the motorway this morning, according to the police officers.",
        correct_answer: "that",
        wrong_answers: [
            "which",
            "who",
            "what"
        ],
        explanation: "'That' introduces the relative clause in it-clefts.",
        reviewed: true
    },
    {
        rank: 377,
        topic: "Cleft Sentences (It-clefts)",
        question: "It was in Paris _____ we met for the very first time many years ago during our summer holiday trip.",
        correct_answer: "that",
        wrong_answers: [
            "where",
            "which",
            "when"
        ],
        explanation: "It-clefts use 'that' even when emphasizing place.",
        reviewed: true
    },
    {
        rank: 378,
        topic: "Cleft Sentences (It-clefts)",
        question: "_____ wasn't until midnight that the party finally ended and everyone went home tired but happy together.",
        correct_answer: "It",
        wrong_answers: [
            "There",
            "This",
            "That"
        ],
        explanation: "It-cleft with 'not until' emphasizes time delay.",
        reviewed: true
    },
    // Participle Phrases (379-382)
    {
        rank: 379,
        topic: "Participle Phrases",
        question: "_____ by the terrible news, she sat down quietly and didn't say a single word to anyone for hours.",
        correct_answer: "Shocked",
        wrong_answers: [
            "Shocking",
            "Shock",
            "To shock"
        ],
        explanation: "Past participles describe feelings or states of being affected.",
        reviewed: true
    },
    {
        rank: 380,
        topic: "Participle Phrases",
        question: "The story was absolutely _____, keeping all the children on the edge of their seats throughout the entire performance.",
        correct_answer: "exciting",
        wrong_answers: [
            "excited",
            "excite",
            "to excite"
        ],
        explanation: "Present participles describe things causing feelings.",
        reviewed: true
    },
    {
        rank: 381,
        topic: "Participle Phrases",
        question: "_____ quickly down the street, Tom tried to catch the bus before it left the stop without him completely.",
        correct_answer: "Running",
        wrong_answers: [
            "Run",
            "Ran",
            "To run"
        ],
        explanation: "Present participle phrases show simultaneous actions.",
        reviewed: true
    },
    {
        rank: 382,
        topic: "Participle Phrases",
        question: "_____ in 1850, this historic building is one of the oldest structures in the entire city and very important.",
        correct_answer: "Built",
        wrong_answers: [
            "Building",
            "Build",
            "To build"
        ],
        explanation: "Past participle phrases modify nouns showing completed passive actions.",
        reviewed: true
    },
    // Nominalisation (383-386)
    {
        rank: 383,
        topic: "Nominalisation",
        question: "The _____ of the new library will take approximately two years to complete according to the council's official plans.",
        correct_answer: "construction",
        wrong_answers: [
            "construct",
            "constructing",
            "constructed"
        ],
        explanation: "Nominalisation turns verbs into nouns using suffixes.",
        reviewed: true
    },
    {
        rank: 384,
        topic: "Nominalisation",
        question: "Her _____ to become a doctor was influenced greatly by her parents who both work in hospitals every day.",
        correct_answer: "decision",
        wrong_answers: [
            "decide",
            "deciding",
            "decided"
        ],
        explanation: "Abstract nouns derived from verbs create formal tone.",
        reviewed: true
    },
    {
        rank: 385,
        topic: "Nominalisation",
        question: "The _____ of the homework assignment was clearly explained by our teacher at the start of the lesson today.",
        correct_answer: "importance",
        wrong_answers: [
            "important",
            "importantly",
            "import"
        ],
        explanation: "Adjectives become abstract nouns through suffixation.",
        reviewed: true
    },
    {
        rank: 386,
        topic: "Nominalisation",
        question: "There was great _____ among the pupils when the headteacher announced an extra day of holiday for everyone.",
        correct_answer: "excitement",
        wrong_answers: [
            "exciting",
            "excited",
            "excite"
        ],
        explanation: "Converting verbs to nouns makes writing more formal and concise.",
        reviewed: true
    },
    // Antonyms & Synonyms (387-390)
    {
        rank: 387,
        topic: "Antonyms & Synonyms",
        question: "The room was absolutely _____, not bright at all, because all the curtains were closed tightly shut today.",
        correct_answer: "dark",
        wrong_answers: [
            "light",
            "dim",
            "shadowy"
        ],
        explanation: "'Dark' is the direct antonym of 'bright'.",
        reviewed: true
    },
    {
        rank: 388,
        topic: "Antonyms & Synonyms",
        question: "She felt _____ after winning the race, which is the opposite of how she felt before the competition started.",
        correct_answer: "happy",
        wrong_answers: [
            "sad",
            "joyful",
            "cheerful"
        ],
        explanation: "Understanding antonyms helps convey contrasting emotions.",
        reviewed: true
    },
    {
        rank: 389,
        topic: "Antonyms & Synonyms",
        question: "The enormous elephant was the complete opposite of the _____ mouse hiding in the corner of the barn quietly.",
        correct_answer: "tiny",
        wrong_answers: [
            "huge",
            "large",
            "massive"
        ],
        explanation: "'Tiny' contrasts with 'enormous' in size description.",
        reviewed: true
    },
    {
        rank: 390,
        topic: "Antonyms & Synonyms",
        question: "The teacher asked us to find a _____ for the word 'difficult', so I chose 'challenging' from my vocabulary list.",
        correct_answer: "synonym",
        wrong_answers: [
            "antonym",
            "homonym",
            "opposite"
        ],
        explanation: "Synonyms are words with similar meanings.",
        reviewed: true
    },
    // Third Conditional (391-394)
    {
        rank: 391,
        topic: "Third Conditional",
        question: "If I _____ harder for the test, I would have got a much better grade than I actually received yesterday.",
        correct_answer: "had studied",
        wrong_answers: [
            "studied",
            "have studied",
            "would study"
        ],
        explanation: "Third conditional uses past perfect in if-clause for unreal past.",
        reviewed: true
    },
    {
        rank: 392,
        topic: "Third Conditional",
        question: "She _____ have caught the train if she had left home ten minutes earlier this morning without delay.",
        correct_answer: "would",
        wrong_answers: [
            "will",
            "can",
            "could"
        ],
        explanation: "Third conditional main clause uses 'would have' + past participle.",
        reviewed: true
    },
    {
        rank: 393,
        topic: "Third Conditional",
        question: "If they _____ the weather forecast carefully, they wouldn't have gone sailing in the terrible storm yesterday afternoon.",
        correct_answer: "had checked",
        wrong_answers: [
            "checked",
            "have checked",
            "would check"
        ],
        explanation: "Past perfect in if-clause expresses regret about past.",
        reviewed: true
    },
    {
        rank: 394,
        topic: "Third Conditional",
        question: "We would have arrived on time if the car _____ broken down on the motorway during our journey.",
        correct_answer: "hadn't",
        wrong_answers: [
            "hasn't",
            "didn't",
            "wouldn't"
        ],
        explanation: "Negative third conditional uses 'hadn't' + past participle.",
        reviewed: true
    },
    // Mixed Conditionals (395-398)
    {
        rank: 395,
        topic: "Mixed Conditionals",
        question: "If I _____ born in France, I would speak French fluently right now without any difficulty at all.",
        correct_answer: "had been",
        wrong_answers: [
            "was",
            "were",
            "have been"
        ],
        explanation: "Mixed conditional: past perfect condition, present result.",
        reviewed: true
    },
    {
        rank: 396,
        topic: "Mixed Conditionals",
        question: "She _____ be so tired now if she hadn't stayed up late last night watching television until midnight.",
        correct_answer: "wouldn't",
        wrong_answers: [
            "won't",
            "isn't",
            "wasn't"
        ],
        explanation: "Past action affects present state in mixed conditionals.",
        reviewed: true
    },
    {
        rank: 397,
        topic: "Mixed Conditionals",
        question: "If he _____ more careful with money when he was younger, he would have more savings in the bank today.",
        correct_answer: "had been",
        wrong_answers: [
            "was",
            "were",
            "is"
        ],
        explanation: "Past perfect shows past condition with present consequence.",
        reviewed: true
    },
    {
        rank: 398,
        topic: "Mixed Conditionals",
        question: "I would have helped you yesterday if I _____ so busy with my own work right now and today.",
        correct_answer: "weren't",
        wrong_answers: [
            "hadn't been",
            "wasn't",
            "am not"
        ],
        explanation: "Present condition can explain past result in mixed conditionals.",
        reviewed: true
    },
    // Subjunctive Mood (Mandative) (399-400)
    {
        rank: 399,
        topic: "Subjunctive Mood (Mandative)",
        question: "The teacher insisted that every student _____ the homework on time without any excuses or extensions at all.",
        correct_answer: "submit",
        wrong_answers: [
            "submits",
            "submitted",
            "submitting"
        ],
        explanation: "Mandative subjunctive uses base form after verbs of demand.",
        reviewed: true
    },
    {
        rank: 400,
        topic: "Subjunctive Mood (Mandative)",
        question: "It is essential that he _____ to the meeting tomorrow morning to discuss the important plans for next term.",
        correct_answer: "come",
        wrong_answers: [
            "comes",
            "came",
            "coming"
        ],
        explanation: "Subjunctive with 'essential' uses base form, not third-person -s.",
        reviewed: true
    },
    // Subjunctive Mood (Formulaic) (401-404)
    {
        rank: 401,
        topic: "Subjunctive Mood (Formulaic)",
        question: "_____ be it from me to criticize your excellent work, but I think we could improve this small section slightly.",
        correct_answer: "Far",
        wrong_answers: [
            "Long",
            "Never",
            "Not"
        ],
        explanation: "'Far be it' is a formulaic subjunctive expression.",
        reviewed: true
    },
    {
        rank: 402,
        topic: "Subjunctive Mood (Formulaic)",
        question: "Long _____ the Queen! Everyone in the crowd shouted loudly and waved their flags enthusiastically during the celebration parade.",
        correct_answer: "live",
        wrong_answers: [
            "lives",
            "lived",
            "living"
        ],
        explanation: "Formulaic subjunctive in traditional expressions uses base form.",
        reviewed: true
    },
    {
        rank: 403,
        topic: "Subjunctive Mood (Formulaic)",
        question: "_____ save the King! The national anthem was sung proudly by everyone gathered at the special ceremony today.",
        correct_answer: "God",
        wrong_answers: [
            "May",
            "Please",
            "We"
        ],
        explanation: "'God save' uses subjunctive in fixed formulaic expression.",
        reviewed: true
    },
    {
        rank: 404,
        topic: "Subjunctive Mood (Formulaic)",
        question: "Come what _____, we will finish this project on time no matter how difficult it becomes in the future.",
        correct_answer: "may",
        wrong_answers: [
            "might",
            "will",
            "can"
        ],
        explanation: "'Come what may' is fixed subjunctive phrase meaning 'whatever happens'.",
        reviewed: true
    },
    // Subjunctive Mood (Were) (405-408)
    {
        rank: 405,
        topic: "Subjunctive Mood (Were)",
        question: "If I _____ you, I would apologize immediately for the mistake and try to make things better straight away.",
        correct_answer: "were",
        wrong_answers: [
            "was",
            "am",
            "be"
        ],
        explanation: "'Were' is used for all persons in hypothetical subjunctive.",
        reviewed: true
    },
    {
        rank: 406,
        topic: "Subjunctive Mood (Were)",
        question: "She acts as if she _____ the boss of everyone, but actually she has no authority at all here.",
        correct_answer: "were",
        wrong_answers: [
            "was",
            "is",
            "be"
        ],
        explanation: "'As if' clauses use 'were' for hypothetical situations.",
        reviewed: true
    },
    {
        rank: 407,
        topic: "Subjunctive Mood (Were)",
        question: "I wish I _____ taller so I could reach the top shelf in the library without needing help.",
        correct_answer: "were",
        wrong_answers: [
            "was",
            "am",
            "be"
        ],
        explanation: "'I wish' with present unreal uses 'were' for all persons.",
        reviewed: true
    },
    {
        rank: 408,
        topic: "Subjunctive Mood (Were)",
        question: "He talks as though he _____ an expert on the subject, but he only read one book about it.",
        correct_answer: "were",
        wrong_answers: [
            "was",
            "is",
            "be"
        ],
        explanation: "'As though' takes subjunctive 'were' for unreal comparisons.",
        reviewed: true
    },
    // Future Perfect (409-412)
    {
        rank: 409,
        topic: "Future Perfect",
        question: "By next summer, we _____ living in this house for exactly ten years since we first moved here together.",
        correct_answer: "will have been",
        wrong_answers: [
            "will be",
            "have been",
            "are"
        ],
        explanation: "Future perfect shows completion before future time point.",
        reviewed: true
    },
    {
        rank: 410,
        topic: "Future Perfect",
        question: "She _____ all her homework by the time her favourite television programme starts this evening at seven o'clock.",
        correct_answer: "will have finished",
        wrong_answers: [
            "will finish",
            "has finished",
            "finishes"
        ],
        explanation: "'Will have' + past participle shows future completion.",
        reviewed: true
    },
    {
        rank: 411,
        topic: "Future Perfect",
        question: "By the end of this month, I _____ three books for my English class reading assignment at school.",
        correct_answer: "will have read",
        wrong_answers: [
            "will read",
            "have read",
            "read"
        ],
        explanation: "Future perfect describes action completed before deadline.",
        reviewed: true
    },
    {
        rank: 412,
        topic: "Future Perfect",
        question: "They _____ for London by the time we arrive at their house tomorrow morning to visit them for tea.",
        correct_answer: "will have left",
        wrong_answers: [
            "will leave",
            "have left",
            "leave"
        ],
        explanation: "Future perfect shows one future action before another.",
        reviewed: true
    },
    // Future Perfect Continuous (413-416)
    {
        rank: 413,
        topic: "Future Perfect Continuous",
        question: "By December, she _____ piano lessons for five years without missing a single week at all ever.",
        correct_answer: "will have been taking",
        wrong_answers: [
            "will be taking",
            "has been taking",
            "will take"
        ],
        explanation: "Future perfect continuous shows duration up to future point.",
        reviewed: true
    },
    {
        rank: 414,
        topic: "Future Perfect Continuous",
        question: "Next week, we _____ this project for three months, so we should be nearly finished with everything soon.",
        correct_answer: "will have been working on",
        wrong_answers: [
            "will work on",
            "have been working on",
            "work on"
        ],
        explanation: "Emphasizes ongoing duration leading to future moment.",
        reviewed: true
    },
    {
        rank: 415,
        topic: "Future Perfect Continuous",
        question: "By midnight tonight, I _____ for twelve hours straight without any break at all, which is exhausting.",
        correct_answer: "will have been studying",
        wrong_answers: [
            "will be studying",
            "have been studying",
            "will study"
        ],
        explanation: "Shows continuous action duration up to specific future time.",
        reviewed: true
    },
    {
        rank: 416,
        topic: "Future Perfect Continuous",
        question: "In June, they _____ in that house for twenty years, which is an incredibly long time indeed.",
        correct_answer: "will have been living",
        wrong_answers: [
            "will be living",
            "have been living",
            "will live"
        ],
        explanation: "Future perfect continuous emphasizes ongoing state duration.",
        reviewed: true
    },
    // Passive Voice (Complex/Impersonal) (417-420)
    {
        rank: 417,
        topic: "Passive Voice (Complex/Impersonal)",
        question: "It _____ believed that the ancient castle was built over five hundred years ago by a powerful king.",
        correct_answer: "is",
        wrong_answers: [
            "was",
            "has",
            "been"
        ],
        explanation: "Impersonal passive uses 'it is' + past participle + 'that'.",
        reviewed: true
    },
    {
        rank: 418,
        topic: "Passive Voice (Complex/Impersonal)",
        question: "It _____ reported that several people saw mysterious lights in the sky above the town last night clearly.",
        correct_answer: "was",
        wrong_answers: [
            "is",
            "has",
            "been"
        ],
        explanation: "Impersonal passive reports information without stating source.",
        reviewed: true
    },
    {
        rank: 419,
        topic: "Passive Voice (Complex/Impersonal)",
        question: "The painting is thought _____ been created by a famous artist during the Renaissance period in Italy long ago.",
        correct_answer: "to have",
        wrong_answers: [
            "to be",
            "to has",
            "having"
        ],
        explanation: "Complex passive uses 'to have been' for past reference.",
        reviewed: true
    },
    {
        rank: 420,
        topic: "Passive Voice (Complex/Impersonal)",
        question: "It is understood _____ the meeting will take place next Tuesday afternoon in the main school hall definitely.",
        correct_answer: "that",
        wrong_answers: [
            "what",
            "which",
            "if"
        ],
        explanation: "Impersonal passive introduces 'that' clause for reported facts.",
        reviewed: true
    },
    // Causative Form (421-424)
    {
        rank: 421,
        topic: "Causative Form",
        question: "We're going to _____ our house painted next month by professional decorators from the local company nearby.",
        correct_answer: "have",
        wrong_answers: [
            "get",
            "make",
            "let"
        ],
        explanation: "'Have something done' shows arranging service by someone else.",
        reviewed: true
    },
    {
        rank: 422,
        topic: "Causative Form",
        question: "She _____ her hair cut short yesterday at the new hairdresser's salon on the high street in town.",
        correct_answer: "had",
        wrong_answers: [
            "made",
            "let",
            "got"
        ],
        explanation: "Causative 'had' shows arranging action performed by another.",
        reviewed: true
    },
    {
        rank: 423,
        topic: "Causative Form",
        question: "I need to _____ my bicycle repaired before I can ride it to school tomorrow morning safely and properly.",
        correct_answer: "get",
        wrong_answers: [
            "make",
            "let",
            "do"
        ],
        explanation: "'Get something done' indicates arranging a service.",
        reviewed: true
    },
    {
        rank: 424,
        topic: "Causative Form",
        question: "They're having their car _____ at the garage this afternoon because it broke down last week completely.",
        correct_answer: "serviced",
        wrong_answers: [
            "service",
            "servicing",
            "services"
        ],
        explanation: "Causative uses past participle after 'have/get something'.",
        reviewed: true
    },
    // Inversion (Negative Adverbials) (425-428)
    {
        rank: 425,
        topic: "Inversion (Negative Adverbials)",
        question: "Seldom _____ I seen such a magnificent sunset as the one we witnessed at the beach yesterday evening.",
        correct_answer: "have",
        wrong_answers: [
            "I have",
            "did I",
            "do I"
        ],
        explanation: "Negative adverb 'seldom' triggers subject-auxiliary inversion.",
        reviewed: true
    },
    {
        rank: 426,
        topic: "Inversion (Negative Adverbials)",
        question: "Hardly _____ she arrived home when the telephone started ringing loudly in the hallway by the door.",
        correct_answer: "had",
        wrong_answers: [
            "she had",
            "did she",
            "has she"
        ],
        explanation: "'Hardly' with past perfect requires inversion.",
        reviewed: true
    },
    {
        rank: 427,
        topic: "Inversion (Negative Adverbials)",
        question: "Under no circumstances _____ you leave the classroom without permission from the teacher first before going anywhere.",
        correct_answer: "should",
        wrong_answers: [
            "you should",
            "you must",
            "must you"
        ],
        explanation: "Emphatic negative phrase causes modal inversion.",
        reviewed: true
    },
    {
        rank: 428,
        topic: "Inversion (Negative Adverbials)",
        question: "Scarcely _____ the concert begun when the fire alarm went off loudly and everyone had to evacuate quickly.",
        correct_answer: "had",
        wrong_answers: [
            "has",
            "did",
            "was"
        ],
        explanation: "'Scarcely' triggers inversion with past perfect.",
        reviewed: true
    },
    // Inversion (Conditional) (429-432)
    {
        rank: 429,
        topic: "Inversion (Conditional)",
        question: "_____ I known about the problem earlier, I would have helped you solve it immediately without any delay.",
        correct_answer: "Had",
        wrong_answers: [
            "If I had",
            "Have",
            "Did"
        ],
        explanation: "Formal conditional inverts 'had' instead of using 'if'.",
        reviewed: true
    },
    {
        rank: 430,
        topic: "Inversion (Conditional)",
        question: "_____ she to arrive late, please tell her to wait in the reception area until I'm ready.",
        correct_answer: "Were",
        wrong_answers: [
            "If she were",
            "Was",
            "Should she"
        ],
        explanation: "Inverted 'were' replaces 'if' in formal conditionals.",
        reviewed: true
    },
    {
        rank: 431,
        topic: "Inversion (Conditional)",
        question: "_____ you need any assistance with the homework, please don't hesitate to ask me for help any time.",
        correct_answer: "Should",
        wrong_answers: [
            "If you should",
            "Would",
            "Could"
        ],
        explanation: "Inverted 'should' creates formal conditional without 'if'.",
        reviewed: true
    },
    {
        rank: 432,
        topic: "Inversion (Conditional)",
        question: "_____ the weather improve tomorrow, we could go for a lovely picnic in the park by the river.",
        correct_answer: "Should",
        wrong_answers: [
            "If should",
            "Would",
            "Could"
        ],
        explanation: "Conditional inversion with 'should' expresses possibility.",
        reviewed: true
    },
    // Verbless Clauses (433-436)
    {
        rank: 433,
        topic: "Verbless Clauses",
        question: "_____ happy with her exam results, Sarah celebrated by going out for ice cream with all her friends.",
        correct_answer: "Very",
        wrong_answers: [
            "Being very",
            "She was very",
            "Was very"
        ],
        explanation: "Verbless clauses omit 'being' for conciseness in writing.",
        reviewed: true
    },
    {
        rank: 434,
        topic: "Verbless Clauses",
        question: "Although _____ to the party, he decided not to go because he was feeling unwell and tired.",
        correct_answer: "invited",
        wrong_answers: [
            "he was invited",
            "being invited",
            "inviting"
        ],
        explanation: "Verbless subordinate clause omits subject and auxiliary.",
        reviewed: true
    },
    {
        rank: 435,
        topic: "Verbless Clauses",
        question: "When _____, always check your work carefully before submitting it to the teacher for marking and grading.",
        correct_answer: "finished",
        wrong_answers: [
            "you are finished",
            "finishing",
            "you finish"
        ],
        explanation: "Temporal verbless clause is more concise than full clause.",
        reviewed: true
    },
    {
        rank: 436,
        topic: "Verbless Clauses",
        question: "While _____ difficult at first, the puzzle became easier the more time we spent working on it.",
        correct_answer: "seemingly",
        wrong_answers: [
            "it was seemingly",
            "being seemingly",
            "it seemed"
        ],
        explanation: "Verbless concessive clause creates formal, concise style.",
        reviewed: true
    },
    // Absolute Phrases (437-440)
    {
        rank: 437,
        topic: "Absolute Phrases",
        question: "The weather _____ terrible, we decided to cancel the outdoor sports day and stay inside the school hall.",
        correct_answer: "being",
        wrong_answers: [
            "was",
            "is",
            "been"
        ],
        explanation: "Absolute phrase uses 'being' to modify entire sentence.",
        reviewed: true
    },
    {
        rank: 438,
        topic: "Absolute Phrases",
        question: "Our work _____, we packed up our books and left the classroom happily to enjoy the lunch break.",
        correct_answer: "finished",
        wrong_answers: [
            "finishing",
            "was finished",
            "finishes"
        ],
        explanation: "Past participle in absolute phrase shows completed state.",
        reviewed: true
    },
    {
        rank: 439,
        topic: "Absolute Phrases",
        question: "The sun _____ brightly, we spent the entire afternoon playing in the park near our house together.",
        correct_answer: "shining",
        wrong_answers: [
            "shone",
            "was shining",
            "shines"
        ],
        explanation: "Present participle in absolute phrase shows simultaneous action.",
        reviewed: true
    },
    {
        rank: 440,
        topic: "Absolute Phrases",
        question: "All things _____, I think we did remarkably well in the competition despite having very little practice time.",
        correct_answer: "considered",
        wrong_answers: [
            "considering",
            "being considered",
            "consider"
        ],
        explanation: "'All things considered' is fixed absolute phrase meaning 'overall'.",
        reviewed: true
    },
    // Discourse Markers (441-444)
    {
        rank: 441,
        topic: "Discourse Markers",
        question: "_____, I think we should start with the easier questions and save the difficult ones for later.",
        correct_answer: "Firstly",
        wrong_answers: [
            "However",
            "Therefore",
            "Meanwhile"
        ],
        explanation: "Discourse markers organize ideas and show sequence.",
        reviewed: true
    },
    {
        rank: 442,
        topic: "Discourse Markers",
        question: "The experiment failed; _____, we learned valuable lessons from our mistakes that will help us next time.",
        correct_answer: "nevertheless",
        wrong_answers: [
            "therefore",
            "furthermore",
            "thus"
        ],
        explanation: "'Nevertheless' shows contrast despite previous statement.",
        reviewed: true
    },
    {
        rank: 443,
        topic: "Discourse Markers",
        question: "She studied hard for the test. _____, she also made sure to get plenty of sleep the night before.",
        correct_answer: "Moreover",
        wrong_answers: [
            "However",
            "Therefore",
            "Otherwise"
        ],
        explanation: "'Moreover' adds supporting information to previous point.",
        reviewed: true
    },
    {
        rank: 444,
        topic: "Discourse Markers",
        question: "_____, climate change is one of the most serious problems facing our world today without any doubt.",
        correct_answer: "Undoubtedly",
        wrong_answers: [
            "However",
            "Therefore",
            "Meanwhile"
        ],
        explanation: "Discourse markers can emphasize certainty of statement.",
        reviewed: true
    },
    // Modals of Deduction (Past) (445-448)
    {
        rank: 445,
        topic: "Modals of Deduction (Past)",
        question: "She _____ have left early because her coat is missing from the hook in the hallway by the door.",
        correct_answer: "must",
        wrong_answers: [
            "might",
            "can",
            "should"
        ],
        explanation: "'Must have' + past participle shows strong logical deduction.",
        reviewed: true
    },
    {
        rank: 446,
        topic: "Modals of Deduction (Past)",
        question: "They _____ have gone to the cinema last night, but I'm not completely certain about it at all.",
        correct_answer: "might",
        wrong_answers: [
            "must",
            "will",
            "can"
        ],
        explanation: "'Might have' expresses uncertain deduction about past.",
        reviewed: true
    },
    {
        rank: 447,
        topic: "Modals of Deduction (Past)",
        question: "He _____ have been at school yesterday because I saw his empty desk during the morning lessons.",
        correct_answer: "can't",
        wrong_answers: [
            "must",
            "might",
            "should"
        ],
        explanation: "'Can't have' shows impossible or negative deduction.",
        reviewed: true
    },
    {
        rank: 448,
        topic: "Modals of Deduction (Past)",
        question: "You _____ have seen Sarah at the party because she was definitely there all evening long with everyone.",
        correct_answer: "must",
        wrong_answers: [
            "might",
            "can't",
            "may"
        ],
        explanation: "'Must have' expresses certain logical conclusion about past.",
        reviewed: true
    },
    // Reduced Relative Clauses (449-450)
    {
        rank: 449,
        topic: "Reduced Relative Clauses",
        question: "The girl _____ the piano is my cousin who visits us every summer during the school holidays.",
        correct_answer: "playing",
        wrong_answers: [
            "who playing",
            "plays",
            "played"
        ],
        explanation: "Reduced relative clause omits 'who is' before present participle.",
        reviewed: true
    },
    {
        rank: 450,
        topic: "Reduced Relative Clauses",
        question: "The book _____ on the table belongs to my teacher, so please don't touch it at all.",
        correct_answer: "lying",
        wrong_answers: [
            "which lying",
            "lies",
            "lied"
        ],
        explanation: "Active participle reduces 'which is lying' to just 'lying'.",
        reviewed: true
    },
    // Reduced Relative Clauses (451-452)
    {
        rank: 451,
        topic: "Reduced Relative Clauses",
        question: "The message _____ on the board is for all students in Year Six about the upcoming school trip.",
        correct_answer: "written",
        wrong_answers: [
            "which written",
            "writes",
            "writing"
        ],
        explanation: "Past participle reduces 'which is written' for passive meaning.",
        reviewed: true
    },
    {
        rank: 452,
        topic: "Reduced Relative Clauses",
        question: "Anyone _____ in joining the chess club should sign up at the office before Friday this week.",
        correct_answer: "interested",
        wrong_answers: [
            "who interested",
            "interests",
            "interesting"
        ],
        explanation: "Reduced clause omits 'who is' before past participle adjective.",
        reviewed: true
    },
    // Dummy Subjects (453-456)
    {
        rank: 453,
        topic: "Dummy Subjects",
        question: "_____ is raining heavily outside, so we should take our umbrellas with us to school this morning definitely.",
        correct_answer: "It",
        wrong_answers: [
            "There",
            "This",
            "That"
        ],
        explanation: "Dummy 'it' used for weather, time, and distance.",
        reviewed: true
    },
    {
        rank: 454,
        topic: "Dummy Subjects",
        question: "_____ are three books missing from the library shelf, and we need to find them before tomorrow morning.",
        correct_answer: "There",
        wrong_answers: [
            "It",
            "They",
            "These"
        ],
        explanation: "Dummy 'there' introduces existence or presence.",
        reviewed: true
    },
    {
        rank: 455,
        topic: "Dummy Subjects",
        question: "_____ seems that the concert has been cancelled due to the terrible weather forecast for this evening unfortunately.",
        correct_answer: "It",
        wrong_answers: [
            "There",
            "This",
            "That"
        ],
        explanation: "'It seems that' uses dummy subject for impersonal statements.",
        reviewed: true
    },
    {
        rank: 456,
        topic: "Dummy Subjects",
        question: "_____ was a loud noise coming from the classroom upstairs, so the teacher went to investigate immediately.",
        correct_answer: "There",
        wrong_answers: [
            "It",
            "This",
            "That"
        ],
        explanation: "'There was' introduces new information about existence.",
        reviewed: true
    },
    // Subordinate Clause Positioning (457-460)
    {
        rank: 457,
        topic: "Subordinate Clause Positioning",
        question: "_____ the rain stopped, we went outside to play football in the park near our house together.",
        correct_answer: "When",
        wrong_answers: [
            "Then",
            "After that",
            "Next"
        ],
        explanation: "Subordinate clause can come before main clause with comma.",
        reviewed: true
    },
    {
        rank: 458,
        topic: "Subordinate Clause Positioning",
        question: "We will go swimming tomorrow _____ the weather is nice and sunny with clear blue skies.",
        correct_answer: "if",
        wrong_answers: [
            "then",
            "so",
            "and"
        ],
        explanation: "Subordinate clause after main clause needs no comma.",
        reviewed: true
    },
    {
        rank: 459,
        topic: "Subordinate Clause Positioning",
        question: "_____ I was walking home from school, I saw my friend waiting at the bus stop by himself.",
        correct_answer: "While",
        wrong_answers: [
            "During",
            "Then",
            "Next"
        ],
        explanation: "Temporal subordinate clause fronted for emphasis needs comma.",
        reviewed: true
    },
    {
        rank: 460,
        topic: "Subordinate Clause Positioning",
        question: "She started crying _____ she heard the sad news about her pet hamster from her parents this morning.",
        correct_answer: "when",
        wrong_answers: [
            "then",
            "next",
            "after that"
        ],
        explanation: "Subordinate clause following main clause integrates without comma.",
        reviewed: true
    },
    // Additional questions for broader coverage (461-500)
    // Proper Nouns (461)
    {
        rank: 461,
        topic: "Proper Nouns",
        question: "We're going to visit _____ next Easter to see the famous pyramids and the River Nile together as a family.",
        correct_answer: "Egypt",
        wrong_answers: [
            "egypt",
            "desert",
            "country"
        ],
        explanation: "Country names are proper nouns requiring capitalization.",
        reviewed: true
    },
    // Common Nouns (462)
    {
        rank: 462,
        topic: "Common Nouns",
        question: "The _____ barked loudly when the postman delivered letters to our house this morning as usual every day.",
        correct_answer: "dog",
        wrong_answers: [
            "Dog",
            "Rover",
            "Animal"
        ],
        explanation: "General animal types are common nouns using lowercase.",
        reviewed: true
    },
    // Personal Pronouns (463)
    {
        rank: 463,
        topic: "Personal Pronouns",
        question: "Between you and _____, I think the surprise party is going to be absolutely wonderful and everyone will love it.",
        correct_answer: "me",
        wrong_answers: [
            "I",
            "myself",
            "mine"
        ],
        explanation: "After prepositions, use object pronoun 'me'.",
        reviewed: true
    },
    // Concrete vs. Abstract Nouns (464)
    {
        rank: 464,
        topic: "Concrete vs. Abstract Nouns",
        question: "Her _____ to help others is admirable and inspires everyone in our class to be kinder and more thoughtful.",
        correct_answer: "willingness",
        wrong_answers: [
            "hand",
            "voice",
            "smile"
        ],
        explanation: "Abstract nouns name qualities and cannot be physically touched.",
        reviewed: true
    },
    // Singular & Plural Morphology (465)
    {
        rank: 465,
        topic: "Singular & Plural Morphology",
        question: "The farmer has many _____ grazing peacefully in the green field behind his old barn this sunny afternoon.",
        correct_answer: "sheep",
        wrong_answers: [
            "sheeps",
            "sheepes",
            "sheep's"
        ],
        explanation: "Some nouns have identical singular and plural forms.",
        reviewed: true
    },
    // Irregular Plurals (466)
    {
        rank: 466,
        topic: "Irregular Plurals",
        question: "The _____ swam gracefully in the pond, making beautiful ripples on the water's surface this peaceful morning.",
        correct_answer: "geese",
        wrong_answers: [
            "gooses",
            "goose",
            "geeses"
        ],
        explanation: "Goose has irregular plural 'geese'.",
        reviewed: true
    },
    // Definite & Indefinite Articles (467)
    {
        rank: 467,
        topic: "Definite & Indefinite Articles",
        question: "I need _____ eraser because I made a mistake in my maths homework and need to correct it quickly.",
        correct_answer: "an",
        wrong_answers: [
            "a",
            "the",
            "some"
        ],
        explanation: "'An' precedes words starting with vowel sounds.",
        reviewed: true
    },
    // Main Verbs (Action) (468)
    {
        rank: 468,
        topic: "Main Verbs (Action)",
        question: "The athlete _____ over the high hurdles effortlessly during the championship race at the Olympic stadium yesterday afternoon.",
        correct_answer: "jumped",
        wrong_answers: [
            "seemed",
            "appeared",
            "looked"
        ],
        explanation: "Action verbs describe physical movements and activities.",
        reviewed: true
    },
    // Main Verbs (Stative) (469)
    {
        rank: 469,
        topic: "Main Verbs (Stative)",
        question: "This delicious chocolate cake _____ absolutely amazing and I want another piece right now please for dessert.",
        correct_answer: "tastes",
        wrong_answers: [
            "is tasting",
            "tasted",
            "taste"
        ],
        explanation: "Stative verbs describe states, not actions, and rarely use continuous.",
        reviewed: true
    },
    // Simple Present Tense (470)
    {
        rank: 470,
        topic: "Simple Present Tense",
        question: "My grandmother _____ us every Sunday afternoon for tea and brings homemade biscuits that taste wonderful always.",
        correct_answer: "visits",
        wrong_answers: [
            "visit",
            "visited",
            "visiting"
        ],
        explanation: "Simple present with third person singular adds -s.",
        reviewed: true
    },
    // Simple Past Tense (Regular) (471)
    {
        rank: 471,
        topic: "Simple Past Tense (Regular)",
        question: "We _____ our grandparents in the countryside last weekend and had a lovely time together with the whole family.",
        correct_answer: "visited",
        wrong_answers: [
            "visit",
            "visits",
            "visiting"
        ],
        explanation: "Regular past tense formed by adding -ed to base verb.",
        reviewed: true
    },
    // Simple Past Tense (Irregular) (472)
    {
        rank: 472,
        topic: "Simple Past Tense (Irregular)",
        question: "The champion athlete _____ the race in record time and everyone cheered loudly for her amazing achievement yesterday.",
        correct_answer: "won",
        wrong_answers: [
            "winned",
            "wined",
            "wins"
        ],
        explanation: "Win has irregular past form 'won'.",
        reviewed: true
    },
    // Descriptive Adjectives (473)
    {
        rank: 473,
        topic: "Descriptive Adjectives",
        question: "The _____ mountain peaks were covered in white snow that sparkled beautifully in the bright winter sunshine today.",
        correct_answer: "tall",
        wrong_answers: [
            "quickly",
            "slowly",
            "loudly"
        ],
        explanation: "Adjectives modify nouns, not verbs.",
        reviewed: true
    },
    // Coordinating Conjunctions (Basic) (474)
    {
        rank: 474,
        topic: "Coordinating Conjunctions (Basic)",
        question: "I wanted to play outside in the garden, _____ my mother said I had to finish my homework first.",
        correct_answer: "but",
        wrong_answers: [
            "because",
            "although",
            "when"
        ],
        explanation: "'But' shows contrast between two independent clauses.",
        reviewed: true
    },
    // Sentence Demarcation (475)
    {
        rank: 475,
        topic: "Sentence Demarcation",
        question: "How wonderful the fireworks display was tonight_____ I've never seen anything so spectacular and beautiful in my whole life before!",
        correct_answer: "!",
        wrong_answers: [
            ".",
            "?",
            ","
        ],
        explanation: "Exclamatory sentences end with exclamation marks.",
        reviewed: true
    },
    // Question Formation (476)
    {
        rank: 476,
        topic: "Question Formation",
        question: "_____ old are you now compared to when I last saw you at your birthday party celebration?",
        correct_answer: "How",
        wrong_answers: [
            "What",
            "Which",
            "When"
        ],
        explanation: "'How old' is the standard question form for age.",
        reviewed: true
    },
    // Imperative Mood (477)
    {
        rank: 477,
        topic: "Imperative Mood",
        question: "_____ quietly in the library so you don't disturb the other students who are reading and studying hard.",
        correct_answer: "Work",
        wrong_answers: [
            "Working",
            "Works",
            "Worked"
        ],
        explanation: "Imperatives use base verb form for commands.",
        reviewed: true
    },
    // Possessive Determiners (478)
    {
        rank: 478,
        topic: "Possessive Determiners",
        question: "The bird built _____ nest high up in the tall tree branches where it would be safe from predators.",
        correct_answer: "its",
        wrong_answers: [
            "it's",
            "his",
            "their"
        ],
        explanation: "'Its' without apostrophe shows possession for animals/things.",
        reviewed: true
    },
    // Possessive Apostrophes (479)
    {
        rank: 479,
        topic: "Possessive Apostrophes",
        question: "The _____ toys were scattered everywhere across the playroom floor after they finished playing this afternoon together.",
        correct_answer: "babies'",
        wrong_answers: [
            "baby's",
            "babies",
            "babys'"
        ],
        explanation: "Plural possessive: add apostrophe after existing plural -s.",
        reviewed: true
    },
    // Demonstrative Pronouns (480)
    {
        rank: 480,
        topic: "Demonstrative Pronouns",
        question: "_____ shoes over there by the door belong to my sister who left them when she visited yesterday.",
        correct_answer: "Those",
        wrong_answers: [
            "This",
            "That",
            "These"
        ],
        explanation: "'Those' refers to plural items at a distance.",
        reviewed: true
    },
    // Prepositions of Place (481)
    {
        rank: 481,
        topic: "Prepositions of Place",
        question: "The cat is hiding _____ the large sofa in the living room because it's scared of the vacuum cleaner.",
        correct_answer: "under",
        wrong_answers: [
            "on",
            "at",
            "in"
        ],
        explanation: "'Under' shows position beneath something.",
        reviewed: true
    },
    // Prepositions of Time (482)
    {
        rank: 482,
        topic: "Prepositions of Time",
        question: "The school holidays begin _____ the end of July and continue throughout the entire month of August every year.",
        correct_answer: "at",
        wrong_answers: [
            "in",
            "on",
            "by"
        ],
        explanation: "'At' used with specific time points like 'the end'.",
        reviewed: true
    },
    // Compound Nouns (483)
    {
        rank: 483,
        topic: "Compound Nouns",
        question: "I left my _____ at home this morning, so I couldn't clean my teeth after lunch at school.",
        correct_answer: "toothbrush",
        wrong_answers: [
            "tooth brush",
            "teeth-brush",
            "tooth-brush"
        ],
        explanation: "Compound noun 'toothbrush' written as one word.",
        reviewed: true
    },
    // Exclamative Sentences (484)
    {
        rank: 484,
        topic: "Exclamative Sentences",
        question: "_____ beautiful the sunset looks over the ocean this evening with all those amazing colours in the sky!",
        correct_answer: "How",
        wrong_answers: [
            "What",
            "So",
            "Very"
        ],
        explanation: "'How' begins exclamations with adjectives.",
        reviewed: true
    },
    // Suffixation (Comparative/Superlative) (485)
    {
        rank: 485,
        topic: "Suffixation (Comparative/Superlative)",
        question: "This is the _____ book I have ever read in my entire life and I highly recommend it.",
        correct_answer: "best",
        wrong_answers: [
            "goodest",
            "better",
            "most good"
        ],
        explanation: "'Best' is irregular superlative of 'good'.",
        reviewed: true
    },
    // Present Continuous Tense (486)
    {
        rank: 486,
        topic: "Present Continuous Tense",
        question: "Shh! The baby _____ peacefully in the cot upstairs, so please don't make any loud noise at all.",
        correct_answer: "is sleeping",
        wrong_answers: [
            "sleeps",
            "slept",
            "sleep"
        ],
        explanation: "Present continuous for actions happening right now.",
        reviewed: true
    },
    // Past Continuous Tense (487)
    {
        rank: 487,
        topic: "Past Continuous Tense",
        question: "What _____ you doing at eight o'clock last night when I tried to telephone you at home?",
        correct_answer: "were",
        wrong_answers: [
            "was",
            "are",
            "did"
        ],
        explanation: "Past continuous with plural 'you' uses 'were'.",
        reviewed: true
    },
    // Future Simple (Will) (488)
    {
        rank: 488,
        topic: "Future Simple (Will)",
        question: "I promise I _____ help you with your homework assignment after dinner tonight when I have some free time.",
        correct_answer: "will",
        wrong_answers: [
            "am",
            "going to",
            "shall"
        ],
        explanation: "'Will' expresses promises and spontaneous decisions.",
        reviewed: true
    },
    // Future (Going to) (489)
    {
        rank: 489,
        topic: "Future (Going to)",
        question: "Look at those dark storm clouds in the sky! It _____ rain very heavily soon, so we should go inside.",
        correct_answer: "is going to",
        wrong_answers: [
            "will",
            "shall",
            "is"
        ],
        explanation: "'Going to' for predictions based on present evidence.",
        reviewed: true
    },
    // Coordinating Conjunctions (FANBOYS) (490)
    {
        rank: 490,
        topic: "Coordinating Conjunctions (FANBOYS)",
        question: "Hurry up, _____ we'll miss the start of the film at the cinema this evening with our friends!",
        correct_answer: "or",
        wrong_answers: [
            "and",
            "but",
            "so"
        ],
        explanation: "'Or' shows alternative consequence or choice.",
        reviewed: true
    },
    // Subordinating Conjunctions (Time/Place) (491)
    {
        rank: 491,
        topic: "Subordinating Conjunctions (Time/Place)",
        question: "_____ we arrived at the station, the train had already departed and we had to wait for the next one.",
        correct_answer: "When",
        wrong_answers: [
            "During",
            "While",
            "As soon"
        ],
        explanation: "'When' introduces time subordinate clause.",
        reviewed: true
    },
    // Subordinating Conjunctions (Causal) (492)
    {
        rank: 492,
        topic: "Subordinating Conjunctions (Causal)",
        question: "She was late to school this morning _____ her alarm clock didn't ring at the usual time.",
        correct_answer: "because",
        wrong_answers: [
            "so",
            "and",
            "but"
        ],
        explanation: "'Because' introduces reason or cause.",
        reviewed: true
    },
    // Main Clause vs. Subordinate Clause (493)
    {
        rank: 493,
        topic: "Main Clause vs. Subordinate Clause",
        question: "Although it was raining heavily outside all morning, we _____ went to the park for our picnic anyway.",
        correct_answer: "still",
        wrong_answers: [
            "but",
            "however",
            "yet"
        ],
        explanation: "Main clause can stand alone; 'still' emphasizes contrast.",
        reviewed: true
    },
    // Expanded Noun Phrases (494)
    {
        rank: 494,
        topic: "Expanded Noun Phrases",
        question: "The _____ old castle stood majestically on top of the hill overlooking the beautiful valley below it.",
        correct_answer: "ancient stone",
        wrong_answers: [
            "anciently stoned",
            "ancient and stone",
            "anciently stone"
        ],
        explanation: "Multiple adjectives before noun create expanded noun phrase.",
        reviewed: true
    },
    // Adverbs of Manner (495)
    {
        rank: 495,
        topic: "Adverbs of Manner",
        question: "The ballerina danced _____ across the stage, captivating the entire audience with her beautiful elegant movements tonight.",
        correct_answer: "gracefully",
        wrong_answers: [
            "graceful",
            "grace",
            "gracing"
        ],
        explanation: "Adverbs of manner describe how actions are performed.",
        reviewed: true
    },
    // Adverbs of Frequency (496)
    {
        rank: 496,
        topic: "Adverbs of Frequency",
        question: "We _____ go swimming on Saturday mornings because it's our favourite activity and we love it very much.",
        correct_answer: "always",
        wrong_answers: [
            "every",
            "all",
            "constant"
        ],
        explanation: "'Always' shows 100% frequency.",
        reviewed: true
    },
    // Adverbs of Time & Place (497)
    {
        rank: 497,
        topic: "Adverbs of Time & Place",
        question: "I looked _____ for my missing pencil case but couldn't find it anywhere at all in the classroom.",
        correct_answer: "everywhere",
        wrong_answers: [
            "always",
            "often",
            "quickly"
        ],
        explanation: "'Everywhere' is adverb of place showing location.",
        reviewed: true
    },
    // Present Perfect Simple (498)
    {
        rank: 498,
        topic: "Present Perfect Simple",
        question: "We _____ lived in this house since I was born ten years ago and we love it here.",
        correct_answer: "have",
        wrong_answers: [
            "has",
            "had",
            "are"
        ],
        explanation: "Present perfect with 'since' shows duration from past to present.",
        reviewed: true
    },
    // Subject-Verb Agreement (499)
    {
        rank: 499,
        topic: "Subject-Verb Agreement",
        question: "Neither the teacher nor the students _____ aware of the surprise inspection that was happening today at school.",
        correct_answer: "were",
        wrong_answers: [
            "was",
            "is",
            "are"
        ],
        explanation: "'Neither...nor' agrees with nearest subject (plural 'students').",
        reviewed: true
    },
    // Direct Speech (500)
    {
        rank: 500,
        topic: "Direct Speech",
        question: "\"Please remember to bring your permission slips tomorrow,\" _____ the teacher to the whole class this afternoon.",
        correct_answer: "said",
        wrong_answers: [
            "told",
            "asked",
            "spoke"
        ],
        explanation: "'Said' introduces direct speech to a group.",
        reviewed: true
    }
];
