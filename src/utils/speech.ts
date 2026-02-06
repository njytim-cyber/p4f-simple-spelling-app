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
        currentAudio.src = '';
        currentAudio = null;
    }
    const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);
    audio.playbackRate = rate;
    currentAudio = audio;
    audio.play();
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
    const textToSpeak = prepForSpeech(text);

    // Use preferred voice or default to first US Female
    const targetVoice = voiceId || AVAILABLE_VOICES[0].id;

    try {
        // Create a timeout controller for the fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout

        // Try requesting high-quality audio from our backend
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
                // Backend now handles the speed natively
                playAudioContent(data.audioContent, 1.0);
                return;
            }
        }
    } catch {
        // Only log warning if it's not a standard 404 (which is expected on dev server)
        // or an abort error (timeout)
        console.warn('TTS API check skipped/failed, falling back to browser voice');
    }

    // FALLBACK: Browser Speech Synthesis
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Try to get voices. Chrome often returns empty on first call.
    let voices = window.speechSynthesis.getVoices();

    // If empty, try one more time (simple wait) or just continue and let browser pick default
    if (voices.length === 0) {
        // We don't want to block too long, but a tiny wait often helps
        await new Promise(r => setTimeout(r, 50));
        voices = window.speechSynthesis.getVoices();
    }

    // Try to select an American female voice, prioritizing "Natural" or "Google" variants
    const americanVoice = voices.find(v =>
        (v.lang === 'en-US' && v.name.includes('Google')) ||
        (v.lang === 'en-US' && v.name.includes('Natural')) ||
        (v.lang === 'en-US' && v.name.includes('Online')) ||
        (v.lang === 'en-US' && v.name.includes('Female')) ||
        v.lang === 'en-US'
    );

    if (americanVoice) {
        utterance.voice = americanVoice;
    }
    utterance.lang = 'en-US'; // Fallback locale

    // Adjust rate for fallback: make slow speeds noticeably slower
    // 0.8 -> 0.6, which is usually distinct from 1.0
    const adjustedRate = rate < 1.0 ? rate * 0.75 : rate;

    // Map Cloud IDs to approximate browser voices if possible
    // (This is best-effort as browser voices vary wildly)
    const isGB = targetVoice.includes('GB');
    const isMale = ['D', 'J', 'B'].some(v => targetVoice.endsWith(v));

    if (americanVoice && !isGB) {
        utterance.voice = americanVoice;
    } else {
        // Try to find a matching browser voice locale
        const locale = isGB ? 'en-GB' : 'en-US';
        const browserVoice = voices.find(v =>
            v.lang === locale &&
            (isMale ? v.name.includes('Male') : v.name.includes('Female'))
        );
        if (browserVoice) utterance.voice = browserVoice;
    }

    utterance.rate = adjustedRate;
    window.speechSynthesis.speak(utterance);
};

// Chunk dictation by punctuation marks (., !, ?, ,)
// Removes the arbitrary 5-word limit
export const chunkText = (text: string): string[] => {
    // Split after any weight-bearing punctuation (., !, ?, ,)
    // using a positive lookbehind to keep the punctuation with the preceding text
    const chunks = text.split(/(?<=[.,!?])\s+/);
    return chunks.map(c => c.trim()).filter(c => c.length > 0);
};
