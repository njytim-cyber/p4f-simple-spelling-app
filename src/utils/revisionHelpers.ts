import { ScoreRecord } from '../data/exercises';

/**
 * Get editing exercises that need revision based on score history
 * @param history Array of score records
 * @returns Object with revision count and first revision exercise ID
 */
export function getEditingRevisionData(history: ScoreRecord[]): {
    revisionCount: number;
    firstRevisionId: string | undefined;
} {
    const revisionExercises = history
        .filter(record => record.type === 'editing' && record.score < record.total)
        .map(record => record.exerciseId)
        .filter((id, index, self) => self.indexOf(id) === index); // unique

    return {
        revisionCount: revisionExercises.length,
        firstRevisionId: revisionExercises[0],
    };
}
