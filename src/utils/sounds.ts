/**
 * Simple sound effects using Web Audio API
 * No external assets required = lightweight + instant
 */

// Global context to re-use (initialized on first interaction usually, but here we create on demand or lazily)
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
    }
    return audioCtx;
};

// Play a pleasant, unobtrusive chime for correct answers
export const playCorrectSound = () => {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        // Gentle sine wave - A5 note (880 Hz) for a pleasant, clear tone
        osc.type = 'sine';
        osc.frequency.value = 880; // A5

        const time = ctx.currentTime;

        // Short, gentle envelope - quick and unobtrusive
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.15, time + 0.02); // Gentle volume
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.4); // Quick fade

        osc.start(time);
        osc.stop(time + 0.4);

    } catch (e) {
        console.warn('Audio play failed', e);
    }
};

// Play a "fanfare" arpeggio for perfect scores
export const playVictorySound = () => {
    // Sound effects disabled
};
