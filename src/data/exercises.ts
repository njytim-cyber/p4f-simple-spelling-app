export type ExerciseType = 'spelling' | 'dictation';

export interface SpellingItem {
    id: string;
    phrase: string;
}

export interface Exercise {
    id: string;
    title: string;
    date: string;
    spelling: SpellingItem[];
    dictation: string;
}

export interface ScoreRecord {
    exerciseId: string;
    type: ExerciseType;
    score: number;
    total: number;
    date: string;
    time: string;
    missedItems?: string[];
}

export const EXERCISES: Exercise[] = [
    {
        id: '1.1',
        title: '1.1',
        date: '23 Jan 2026',
        spelling: [
            { id: 's1', phrase: 'peered curiously' },
            { id: 's2', phrase: 'nodded his head' },
            { id: 's3', phrase: 'scooped up' },
            { id: 's4', phrase: 'beamed with pride' },
            { id: 's5', phrase: 'mumbled under his breath' },
        ],
        dictation: `Suddenly, I tripped over a branch. I fell and injured my knee. The dog fell on Tom. Poor Tom had a lot of paw prints on his face. He moaned in pain. I tried to stand up but I could not. Tom gently pushed the dog to the ground and slowly stood up. "How are we going to carry the dog out of the canal?" I asked Tom. Tom stared at me and the dog helplessly.`,
    },
    {
        id: '1.2',
        title: '1.2',
        date: '30 Jan 2026',
        spelling: [
            { id: 's1', phrase: 'elated' },
            { id: 's2', phrase: 'eagerly agreed' },
            { id: 's3', phrase: 'could not contain my excitement' },
            { id: 's4', phrase: 'thanked profusely' },
            { id: 's5', phrase: 'punched the air in delight' },
        ],
        dictation: `Just as we were singing Sally's birthday song, Muffin stood up and circled the cake, sniffing at it without stopping. Before I could say or do anything, Muffin pounced on the cake, squashing it flat. The icing flew everywhere, on the guests' clothes and hair. The singing stopped abruptly. "Muffin! Bad boy! Come here now!" I hollered angrily. I was surprised when my friends said, "Calm down, Alexis. Muffin just thought the cake was a toy. We will find a solution to this."`,
    },
    {
        id: '1.3',
        title: '1.3',
        date: '06 Feb 2026',
        spelling: [
            { id: 's1', phrase: 'face lit up' },
            { id: 's2', phrase: 'a delectable breakfast spread' },
            { id: 's3', phrase: 'no one was in sight' },
            { id: 's4', phrase: 'squealed in delight' },
            { id: 's5', phrase: 'grinning from ear to ear' },
        ],
        dictation: `While Jane was walking to school, she bumped into her friends, Mary, John and Suzy. To her dismay, they seemed to have forgotten that it was her birthday. She tried to drop subtle hints about her birthday, but they just replied that they had plans for the day. "Don't you think you are forgetting something important today?" Jane hinted, trying her best not to show her disappointment.`,
    },
    {
        id: '1.4',
        title: '1.4',
        date: '13 Feb 2026',
        spelling: [
            { id: 's1', phrase: 'froze on the spot' },
            { id: 's2', phrase: 'caught red-handed' },
            { id: 's3', phrase: 'heard a commotion' },
            { id: 's4', phrase: 'snaking queues' },
            { id: 's5', phrase: 'face grimaced in pain' },
        ],
        dictation: `Tom, a friend of Mary, was dashing through the canteen. He was so eager to go to the playground and run in the fields that he did not take notice of his surroundings. Suddenly, just as Mary was turning around with a bowl of steaming noodle soup in her hands to find a seat, Tom collided with her. There was a loud crash followed by an ear-piercing shriek. Mary's steaming soup had scalded her. Unable to take the unbearable pain, she started bawling her eyes out.`,
    },
    {
        id: '2.1',
        title: '2.1',
        date: '27 Mar 2026',
        spelling: [
            { id: 's1', phrase: 'canteen teeming with students' },
            { id: 's2', phrase: 'smell of fried food wafted in the air' },
            { id: 's3', phrase: 'throbbing in pain' },
            { id: 's4', phrase: 'growling stomach' },
            { id: 's5', phrase: 'reprimanded for their misdeed' },
        ],
        dictation: `Many people keep animals as pets for company. Pets are fun to spend time with, but taking care of them is hard work. Pets need care and attention to keep them healthy, happy and safe. Feed your pets good food and provide a clean environment for them. Most pets need regular exercise to stay fit. When the pet falls sick, take it to a vet. It is important to find out all about an animal before deciding whether it is suitable for you and your family.`,
    },
    {
        id: '2.2',
        title: '2.2',
        date: '10 Apr 2026',
        spelling: [
            { id: 's1', phrase: 'glittery silver wallet' },
            { id: 's2', phrase: 'glistened in the sun' },
            { id: 's3', phrase: 'caught his attention' },
            { id: 's4', phrase: 'looked around suspiciously' },
            { id: 's5', phrase: 'scurried away' },
        ],
        dictation: `Sue swiftly picked up the wallet and quickly got away from the scene. As Sue walked along the pavement, she was preoccupied with the plan of hiding the wallet. She did not see a boy running towards her and collided with him. She dropped the wallet and shrieked in horror. "That's my wallet!" the boy yelled.`,
    },
    {
        id: '2.3',
        title: '2.3',
        date: '17 Apr 2026',
        spelling: [
            { id: 's1', phrase: 'tended to the injury' },
            { id: 's2', phrase: 'apologised profusely' },
            { id: 's3', phrase: 'grabbed swiftly' },
            { id: 's4', phrase: 'caught a whiff of' },
            { id: 's5', phrase: 'favourite barbecue chicken wings' },
        ],
        dictation: `Visit Sungei Buloh Wetland Reserve to spot wild crocodiles, monitor lizards and birds, and explore mangrove forests! This kid-friendly nature park is a great place for family outings. There is a free shuttle bus service that operates on Saturdays, Sundays and public holidays. It is an easy day trip that can be completed in as little as an hour or stretched out to a few hours if you choose to walk the longer trails. Visit the reserve to find out all about this beautiful slice of wildlife in Singapore!`,
    },
    {
        id: '2.4',
        title: '2.4',
        date: '24 Apr 2026',
        spelling: [
            { id: 's1', phrase: 'slowly inched towards' },
            { id: 's2', phrase: 'oblivious of' },
            { id: 's3', phrase: 'haggled over the price' },
            { id: 's4', phrase: 'contemplating' },
            { id: 's5', phrase: 'curiosity was piqued' },
        ],
        dictation: `Annoyed that I had talked back, the bully flew into a rage. He held me by the collar, raised his fist and punched me in the stomach. The impact had me doubled up in pain as I staggered a few steps back. Refused to be intimidated, I stared straight into his eyes and yelled, "Stop this!" Taken aback by my shout, the bully froze and I made my escape. I managed to fend off more attacks from the bully with my courage.`,
    },
    {
        id: '2.X',
        title: '2.X',
        date: '',
        spelling: [
            { id: 's1', phrase: 'beautiful' },
            { id: 's2', phrase: 'restaurant' },
            { id: 's3', phrase: 'immediately' },
            { id: 's4', phrase: 'abruptly' },
            { id: 's5', phrase: 'rummaged' },
            { id: 's6', phrase: 'unkempt' },
            { id: 's7', phrase: 'disappointed' },
            { id: 's8', phrase: 'exhausted' },
            { id: 's9', phrase: 'jewellery' },
            { id: 's10', phrase: 'souvenir' },
            { id: 's11', phrase: 'receive' },
            { id: 's12', phrase: 'invincible' },
            { id: 's13', phrase: 'relief' },
            { id: 's14', phrase: 'dismissal' },
            { id: 's15', phrase: 'embarrass' },
            { id: 's16', phrase: 'mischief' },
            { id: 's17', phrase: 'believe' },
            { id: 's18', phrase: 'interested' },
            { id: 's19', phrase: 'calendar' },
            { id: 's20', phrase: 'hygiene' },
            { id: 's21', phrase: 'successful' },
            { id: 's22', phrase: 'curiosity' },
            { id: 's23', phrase: 'environment' },
            { id: 's24', phrase: 'achieve' },
            { id: 's25', phrase: 'neighbour' },
            { id: 's26', phrase: 'government' },
            { id: 's27', phrase: 'announcement' },
            { id: 's28', phrase: 'beginning' },
            { id: 's29', phrase: 'enough' },
            { id: 's30', phrase: 'definitely' },
        ],
        dictation: ``,
    },
];
