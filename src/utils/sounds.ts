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

// Play a low, gentle "bonk" for wrong answers
export const playWrongSound = () => {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        // Low frequency for error
        osc.type = 'triangle';
        const time = ctx.currentTime;

        // Pitch drop
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(80, time + 0.2);

        // Quick attack, slow decay
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.2, time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

        osc.start(time);
        osc.stop(time + 0.2);

    } catch (e) {
        console.warn('Audio play failed', e);
    }
};

// Play a bright "pop" for hitting 100% or finishing
export const playPopSound = () => {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'sine';
        const time = ctx.currentTime;

        // High frequency pop
        osc.frequency.setValueAtTime(800, time);
        osc.frequency.exponentialRampToValueAtTime(1200, time + 0.1);

        // Extremely short envelope
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

        osc.start(time);
        osc.stop(time + 0.1);

    } catch (e) {
        console.warn('Audio play failed', e);
    }
};
