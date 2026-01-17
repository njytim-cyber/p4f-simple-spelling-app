import { ScoreRecord } from '../data/exercises';

// Revision item that tracks spaced repetition data
export interface RevisionItem {
    id: string;              // Unique identifier
    phrase: string;          // The text to practice
    sourceType: 'spelling' | 'dictation' | 'editing' | 'vocab' | 'grammar';  // Where it came from
    errorCount: number;      // How many times this was missed
    correctStreak: number;   // Consecutive correct answers
    lastReviewedDate: string | null;  // ISO date string
    nextReviewDate: string;  // ISO date string - when to review next
    interval: number;        // Current interval in days
}

// Storage key for revision data
export const STORAGE_KEY_REVISION = 'p4_revision_data';

// Get today's date as ISO string (YYYY-MM-DD)
export const getTodayISO = (): string => {
    return new Date().toISOString().split('T')[0];
};

// Parse ISO date string to Date object
const parseDate = (isoDate: string): Date => {
    return new Date(isoDate + 'T00:00:00');
};

// Calculate next review date based on SM-2 inspired algorithm
export const calculateNextReview = (
    item: RevisionItem,
    wasCorrect: boolean
): RevisionItem => {
    const today = getTodayISO();

    if (wasCorrect) {
        // Increase interval based on correct streak
        const newStreak = item.correctStreak + 1;
        let newInterval: number;

        switch (newStreak) {
            case 1: newInterval = 1; break;   // First correct: review tomorrow
            case 2: newInterval = 3; break;   // Second correct: 3 days
            case 3: newInterval = 7; break;   // Third correct: 1 week
            case 4: newInterval = 14; break;  // Fourth correct: 2 weeks
            default: newInterval = 30; break; // After that: monthly
        }

        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + newInterval);

        return {
            ...item,
            correctStreak: newStreak,
            lastReviewedDate: today,
            nextReviewDate: nextDate.toISOString().split('T')[0],
            interval: newInterval
        };
    } else {
        // Reset on incorrect - review tomorrow
        return {
            ...item,
            errorCount: item.errorCount + 1,
            correctStreak: 0,
            lastReviewedDate: today,
            nextReviewDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            interval: 1
        };
    }
};

// Extract unique missed items from history
export const getMissedItemsFromHistory = (history: ScoreRecord[]): Map<string, RevisionItem> => {
    const itemMap = new Map<string, RevisionItem>();
    const today = getTodayISO();

    history.forEach(record => {
        if (record.missedItems && record.missedItems.length > 0) {
            record.missedItems.forEach(phrase => {
                const id = `${record.type}-${phrase.toLowerCase().trim()}`;

                if (itemMap.has(id)) {
                    // Increment error count for existing item
                    const existing = itemMap.get(id);
                    if (existing) {
                        itemMap.set(id, {
                            ...existing,
                            errorCount: existing.errorCount + 1
                        });
                    }
                } else {
                    // Create new revision item
                    itemMap.set(id, {
                        id,
                        phrase: phrase.trim(),
                        sourceType: record.type,
                        errorCount: 1,
                        correctStreak: 0,
                        lastReviewedDate: null,
                        nextReviewDate: today, // Due immediately
                        interval: 1
                    });
                }
            });
        }
    });

    return itemMap;
};

// Merge history items with saved revision data
export const mergeWithSavedData = (
    historyItems: Map<string, RevisionItem>,
    savedItems: RevisionItem[]
): RevisionItem[] => {
    const savedMap = new Map(savedItems.map(item => [item.id, item]));

    // Add any new items from history that aren't in saved data
    historyItems.forEach((item, id) => {
        if (!savedMap.has(id)) {
            savedMap.set(id, item);
        } else {
            // Update error count if it increased
            const saved = savedMap.get(id);
            if (saved && item.errorCount > saved.errorCount) {
                // optimizing: If error count increased, it means a NEW mistake occurred.
                // We must reset the spaced repetition progress for this item.
                savedMap.set(id, {
                    ...saved,
                    errorCount: item.errorCount,
                    correctStreak: 0,
                    interval: 1,
                    nextReviewDate: getTodayISO() // Make it due immediately
                });
            }
        }
    });

    return Array.from(savedMap.values());
};

// Get items that are due for review (today or overdue)
export const getItemsDueForReview = (items: RevisionItem[]): RevisionItem[] => {
    const today = parseDate(getTodayISO());

    return items.filter(item => {
        const dueDate = parseDate(item.nextReviewDate);
        return dueDate <= today;
    });
};

// Get priority-sorted items for revision session
export const getPriorityItems = (items: RevisionItem[], maxItems: number = 10): RevisionItem[] => {
    const dueItems = getItemsDueForReview(items);

    // Sort by priority:
    // 1. Most overdue first
    // 2. Higher error count
    // 3. Lower correct streak (needs more practice)
    return dueItems
        .sort((a, b) => {
            const today = getTodayISO();
            const aOverdue = parseDate(today).getTime() - parseDate(a.nextReviewDate).getTime();
            const bOverdue = parseDate(today).getTime() - parseDate(b.nextReviewDate).getTime();

            // Most overdue first
            if (aOverdue !== bOverdue) return bOverdue - aOverdue;

            // Higher error count
            if (a.errorCount !== b.errorCount) return b.errorCount - a.errorCount;

            // Lower streak (needs more practice)
            return a.correctStreak - b.correctStreak;
        })
        .slice(0, maxItems);
};

// Load revision data from localStorage
export const loadRevisionData = (): RevisionItem[] => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY_REVISION);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

// Save revision data to localStorage
export const saveRevisionData = (items: RevisionItem[]): void => {
    localStorage.setItem(STORAGE_KEY_REVISION, JSON.stringify(items));
};

// Encouraging messages for revision mode
export const revisionEncouragements = {
    correct: [
        "You remembered! 🌟",
        "Memory power! 🧠",
        "Getting stronger! 💪",
        "That's sticking! ✨",
        "Brilliant recall! 🎯",
        "You've got this! 🚀",
        "Practice pays off! 🏆",
        "Sharp memory! 🔥",
        "Well remembered! 👏",
        "Keep it up! 🌈"
    ],
    incorrect: [
        "Let's try again! 🌱",
        "Almost there! 💫",
        "Keep practicing! 📚",
        "You'll get it! 🌻",
        "Learning in progress! 🎓",
        "Every try counts! ⭐",
        "One step closer! 🚶",
        "Don't give up! 💖",
        "Practice makes perfect! 🎨",
        "You're improving! 📈"
    ],
    empty: [
        "All caught up! 🎉",
        "Nothing to review! 🌟",
        "You're on top of it! 🏆",
        "Great job staying current! 👏"
    ],
    sessionComplete: [
        "Amazing revision session! 🌟",
        "Knowledge Boost Complete! 🚀",
        "Practice complete! 🎯",
        "Well done revising! 🏆"
    ]
};

// Get random encouragement
export const getEncouragement = (type: keyof typeof revisionEncouragements): string => {
    const messages = revisionEncouragements[type];
    return messages[Math.floor(Math.random() * messages.length)];
};
