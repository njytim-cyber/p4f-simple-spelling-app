import { AVAILABLE_VOICES } from './speech';

const STORAGE_KEY_VOICE = 'p4_voice_preference';

export const getSavedVoice = (): string => {
    return localStorage.getItem(STORAGE_KEY_VOICE) || AVAILABLE_VOICES[0].id;
};

export const saveVoice = (voiceId: string): void => {
    localStorage.setItem(STORAGE_KEY_VOICE, voiceId);
};
