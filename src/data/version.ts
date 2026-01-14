// Version follows Semantic Versioning (semver): MAJOR.MINOR.PATCH
// - MAJOR: Breaking changes
// - MINOR: New features (backwards compatible)
// - PATCH: Bug fixes (backwards compatible)

export const APP_VERSION = '1.1.0';

export interface ChangelogEntry {
    version: string;
    date: string;
    title: string;
    changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
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
