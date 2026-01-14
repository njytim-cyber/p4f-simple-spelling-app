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

export const speak = async (text: string, rate: number = 0.85) => {
    window.speechSynthesis.cancel();
    const textToSpeak = prepForSpeech(text);

    try {
        // Try requesting high-quality audio from our backend
        const response = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: textToSpeak, speakingRate: rate }),
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

    utterance.rate = adjustedRate;
    console.log(`Fallback Speech: "${textToSpeak}" | Requested: ${rate} | Effective: ${adjustedRate}`);
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
