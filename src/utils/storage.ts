import { AVAILABLE_VOICES } from './speech';

const STORAGE_KEY_VOICE = 'p4_voice_preference';

/**
 * Get the saved voice preference from localStorage
 * @returns The saved voice ID or the default voice
 */
export function getSavedVoice(): string {
    return localStorage.getItem(STORAGE_KEY_VOICE) || AVAILABLE_VOICES[0].id;
}

/**
 * Save the voice preference to localStorage
 * @param voiceId The voice ID to save
 */
export function saveVoice(voiceId: string): void {
    localStorage.setItem(STORAGE_KEY_VOICE, voiceId);
}
