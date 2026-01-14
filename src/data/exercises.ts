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
        date: '30 Jan',
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
        date: '6 Feb',
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
        date: '13 Feb',
        spelling: [
            { id: 's1', phrase: 'froze on the spot' },
            { id: 's2', phrase: 'caught red-handed' },
            { id: 's3', phrase: 'heard a commotion' },
            { id: 's4', phrase: 'snaking queues' },
            { id: 's5', phrase: 'face grimaced in pain' },
        ],
        dictation: `Tom, a friend of Mary, was dashing through the canteen. He was so eager to go to the playground and run in the fields that he did not take notice of his surroundings. Suddenly, just as Mary was turning around with a bowl of steaming noodle soup in her hands to find a seat, Tom collided with her. There was a loud crash followed by an ear-piercing shriek. Mary's steaming soup had scalded her. Unable to take the unbearable pain, she started bawling her eyes out.`,
    },
];
