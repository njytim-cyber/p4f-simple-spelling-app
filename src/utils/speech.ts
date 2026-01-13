export const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB'; // British English preferred for SG context
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
};

// Chunk dictation by max 5 words or punctuation
export const chunkText = (text: string): string[] => {
    const regex = /([^.!?]+[.!?]+)|([^.!?]+$)/g;
    const sentences = text.match(regex) || [];
    const chunks: string[] = [];

    sentences.forEach((sentence) => {
        const words = sentence.trim().split(' ');
        let currentChunk: string[] = [];

        words.forEach((word) => {
            currentChunk.push(word);
            if (currentChunk.length >= 5 || word.match(/[.!?]$/)) {
                chunks.push(currentChunk.join(' '));
                currentChunk = [];
            }
        });
        if (currentChunk.length > 0) chunks.push(currentChunk.join(' '));
    });
    return chunks;
};
