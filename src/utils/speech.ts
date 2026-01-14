// Helper to replace punctuation with spoken words
const prepForSpeech = (text: string): string => {
    return text
        .replace(/\./g, ' full stop. ')
        .replace(/,/g, ' comma, ')
        .replace(/\?/g, ' question mark? ')
        .replace(/!/g, ' exclamation mark! ')
        .replace(/"/g, ' quote ');
};

const playAudioContent = (base64Audio: string, rate: number = 1) => {
    const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);
    audio.playbackRate = rate;
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
        // Try requesting high-quality audio from our backend
        const response = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: textToSpeak,
                speakingRate: rate,
                languageCode: targetVoice.split('-').slice(0, 2).join('-'), // en-US or en-GB
                name: targetVoice
            }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.audioContent) {
                // Backend now handles the speed natively
                playAudioContent(data.audioContent, 1.0);
                return;
            }
        }
    } catch (e) {
        console.warn('TTS API failed, falling back to browser voice:', e);
    }

    // FALLBACK: Browser Speech Synthesis
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Try to select an American female voice, prioritizing "Natural" or "Google" variants
    const voices = window.speechSynthesis.getVoices();
    const americanVoice = voices.find(v =>
        (v.lang === 'en-US' && v.name.includes('Google')) || // Prioritize Google US English
        (v.lang === 'en-US' && v.name.includes('Natural')) || // Prioritize "Natural" voices (Edge)
        (v.lang === 'en-US' && v.name.includes('Online')) ||  // Prioritize "Online" voices
        (v.lang === 'en-US' && v.name.includes('Female')) ||
        v.lang === 'en-US'
    );

    if (americanVoice) {
        utterance.voice = americanVoice;
    }
    utterance.lang = 'en-US'; // Fallback

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
    console.log(`Fallback Speech: "${textToSpeak}" | Voice: ${targetVoice} | Rate: ${adjustedRate}`);
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
