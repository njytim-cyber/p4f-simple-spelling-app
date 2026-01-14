// Version follows Semantic Versioning (semver): MAJOR.MINOR.PATCH
// - MAJOR: Breaking changes
// - MINOR: New features (backwards compatible)
// - PATCH: Bug fixes (backwards compatible)

export const APP_VERSION = '1.3.3';

export interface ChangelogEntry {
    version: string;
    date: string;
    title: string;
    changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
    {
        version: '1.3.3',
        date: '14 Jan 2026',
        title: '📊 Scoring Update',
        changes: [
            'Fixed score totals in history',
            'Updated legacy scores to new 2-point scale',
        ],
    },
    {
        version: '1.3.2',
        date: '14 Jan 2026',
        title: '🗓️ 2026 Schedule',
        changes: [
            'Updated all default dates to 2026',
        ],
    },
    {
        version: '1.3.1',
        date: '14 Jan 2026',
        title: '🗓️ Date Fixes',
        changes: [
            'Fixed date editor showing wrong dates',
            'Updated default schedule',
        ],
    },
    {
        version: '1.3.0',
        date: '14 Jan 2026',
        title: '🗓️ Editable Dates',
        changes: [
            'Added "Edit Spelling Dates" feature to dashboard',
            'Dates are saved locally on your device',
            'Added "Info" button for version history',
        ],
    },
    {
        version: '1.2.2',
        date: '14 Jan 2026',
        title: '✨ Better Formatting Checks',
        changes: [
            'Can now detect BOTH capitalization and punctuation errors on the same word',
            'Added version number to dashboard',
        ],
    },
    {
        version: '1.2.1',
        date: '14 Jan 2026',
        title: '🎯 Pinpoint Feedback',
        changes: [
            'Feedback now points out exactly WHICH words are wrong',
            'Lists specific spelling and capitalization errors',
            'Highlights punctuation issues near specific words',
        ],
    },
    {
        version: '1.2.0',
        date: '14 Jan 2026',
        title: '🧠 Smart Dictation Feedback',
        changes: [
            'Smarts feedback tells you WHY you were wrong (spelling, caps, or punctuation)',
            'Handles multiple errors simultaneously',
            'Improved text normalization (curly quotes, dashes, spaces)',
        ],
    },
    {
        version: '1.1.1',
        date: '14 Jan 2026',
        title: '📝 Stricter Dictation',
        changes: [
            'Dictation now checks capitalization',
            'Dictation now checks punctuation',
            'Removed spoken feedback on wrong answers',
        ],
    },
    {
        version: '1.1.0',
        date: '14 Jan 2026',
        title: '🎯 Try Again & Scoring',
        changes: [
            'Added Try Again button when you spell incorrectly',
            'New scoring: 2 pts first try, 1 pt retry',
            'Score display now shows points earned vs max possible',
        ],
    },
    {
        version: '1.0.0',
        date: '14 Jan 2026',
        title: '🎉 First Major Release',
        changes: [
            'Fixed speed toggle now properly changes playback speed',
            'Added version tracking with update notifications',
            'Improved speed labels (Slow, Normal, Fast)',
        ],
    },
];

// Get the latest changelog entry
export const getLatestChangelog = (): ChangelogEntry | undefined => {
    return CHANGELOG[0];
};

// Compare versions (returns true if v1 > v2)
export const isNewerVersion = (v1: string, v2: string): boolean => {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
        if (parts1[i] > parts2[i]) return true;
        if (parts1[i] < parts2[i]) return false;
    }
    return false;
};
