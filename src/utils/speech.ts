// Helper to replace punctuation with spoken words
const prepForSpeech = (text: string): string => {
    return text
        .replace(/\./g, ' full stop. ')
        .replace(/,/g, ' comma, ')
        .replace(/\?/g, ' question mark? ')
        .replace(/!/g, ' exclamation mark! ')
        .replace(/"/g, ' quote ');
};

export const speak = (text: string, rate: number = 0.85) => {
    window.speechSynthesis.cancel();
    // Speak the text with explicit punctuation
    const textToSpeak = prepForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-GB'; // British English preferred for SG context
    utterance.rate = rate;
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
