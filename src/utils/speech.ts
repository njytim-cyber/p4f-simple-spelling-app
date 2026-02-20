// Helper to replace punctuation with spoken words
const prepForSpeech = (text: string): string => {
    return text
        .replace(/\./g, ' full stop. ')
        .replace(/,/g, ' comma, ')
        .replace(/\?/g, ' question mark? ')
        .replace(/!/g, ' exclamation mark! ')
        .replace(/"/g, ' quote ');
};

let currentAudio: HTMLAudioElement | null = null;

const playAudioContent = (base64Audio: string, rate: number = 1) => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);
    currentAudio = audio;
    audio.playbackRate = rate;
    audio.play().catch(() => { /* user interaction required */ });
};

export interface VoiceOption {
    id: string;
    label: string;
    gender: 'Male' | 'Female';
    lang: 'US' | 'GB';
}

export const AVAILABLE_VOICES: VoiceOption[] = [
    { id: 'en-US-Neural2-F', label: 'US Female (Professional)', gender: 'Female', lang: 'US' },
    { id: 'en-US-Neural2-D', label: 'US Male (Deep)', gender: 'Male', lang: 'US' },
    { id: 'en-US-Neural2-J', label: 'US Male (Smooth)', gender: 'Male', lang: 'US' },
    { id: 'en-US-Neural2-C', label: 'US Female (Clear)', gender: 'Female', lang: 'US' },
    { id: 'en-US-Neural2-H', label: 'US Female (Soft)', gender: 'Female', lang: 'US' },
    { id: 'en-GB-Neural2-F', label: 'UK Female (RP)', gender: 'Female', lang: 'GB' },
    { id: 'en-GB-Neural2-B', label: 'UK Male (Standard)', gender: 'Male', lang: 'GB' },
    { id: 'en-GB-Neural2-D', label: 'UK Male (Deep)', gender: 'Male', lang: 'GB' },
    { id: 'en-GB-Neural2-N', label: 'UK Female (Standard)', gender: 'Female', lang: 'GB' },
];

export const speak = async (text: string, rate: number = 0.85, voiceId?: string) => {
    window.speechSynthesis.cancel();
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    const textToSpeak = prepForSpeech(text);

    // Use preferred voice or default to first US Female
    const targetVoice = voiceId || AVAILABLE_VOICES[0].id;

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: textToSpeak,
                speakingRate: rate,
                languageCode: targetVoice.split('-').slice(0, 2).join('-'),
                name: targetVoice
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            if (data.audioContent) {
                playAudioContent(data.audioContent, 1.0);
                return;
            }
        }
    } catch {
        // TTS API unavailable, fall back to browser voice
    }

    // FALLBACK: Browser Speech Synthesis
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    let voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
        await new Promise(r => setTimeout(r, 50));
        voices = window.speechSynthesis.getVoices();
    }

    // Adjust rate for fallback
    const adjustedRate = rate < 1.0 ? rate * 0.75 : rate;

    // Map Cloud voice IDs to approximate browser voices
    const isGB = targetVoice.includes('GB');
    const isMale = ['D', 'J', 'B'].some(v => targetVoice.endsWith(v));
    const locale = isGB ? 'en-GB' : 'en-US';

    const matchedVoice = voices.find(v =>
        v.lang === locale &&
        (isMale ? v.name.includes('Male') : v.name.includes('Female'))
    ) || voices.find(v =>
        (v.lang === locale && v.name.includes('Google')) ||
        (v.lang === locale && v.name.includes('Natural')) ||
        v.lang === locale
    );

    if (matchedVoice) utterance.voice = matchedVoice;
    utterance.lang = locale;
    utterance.rate = adjustedRate;
    window.speechSynthesis.speak(utterance);
};

// Chunk dictation by punctuation marks (., !, ?, ,)
export const chunkText = (text: string): string[] => {
    const chunks = text.split(/(?<=[.,!?])\s+/);
    return chunks.map(c => c.trim()).filter(c => c.length > 0);
};
