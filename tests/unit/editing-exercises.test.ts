import { describe, it, expect } from 'vitest';
import { EDITING_EXERCISES_DATA } from '../../src/data/editing-exercises';

describe('Editing Exercises Validation', () => {
    // Regular expression to find all {wrong|correct} pairs
    const errorPattern = /\{([^|]+)\|([^}]+)\}/g;

    EDITING_EXERCISES_DATA.forEach((exercise) => {
        describe(`Exercise: ${exercise.id} - ${exercise.title}`, () => {
            it('should have exactly 10 spelling errors', () => {
                const matches = [...exercise.passage.matchAll(errorPattern)];
                expect(matches.length).toBe(10);
            });

            it('should not have identical wrong/correct pairs', () => {
                const matches = [...exercise.passage.matchAll(errorPattern)];

                matches.forEach((match, index) => {
                    const wrongWord = match[1].trim();
                    const correctWord = match[2].trim();

                    expect(wrongWord).not.toBe(correctWord,
                        `Error #${index + 1}: "${wrongWord}" and "${correctWord}" are identical. ` +
                        `This is a content error - the wrong word should be different from the correct word.`
                    );
                });
            });

            it('should have non-empty wrong and correct words', () => {
                const matches = [...exercise.passage.matchAll(errorPattern)];

                matches.forEach((match, index) => {
                    const wrongWord = match[1].trim();
                    const correctWord = match[2].trim();

                    expect(wrongWord.length).toBeGreaterThan(0,
                        `Error #${index + 1}: Wrong word is empty`
                    );
                    expect(correctWord.length).toBeGreaterThan(0,
                        `Error #${index + 1}: Correct word is empty`
                    );
                });
            });

            it('should have 4 paragraphs (separated by blank lines)', () => {
                // Count paragraphs by splitting on double newlines
                const paragraphs = exercise.passage
                    .split('\n\n')
                    .map(p => p.trim())
                    .filter(p => p.length > 0);

                expect(paragraphs.length).toBe(4);
            });

            it('should have valid level', () => {
                expect(['p4', 'p5', 'p6', 'sec1', 'sec2']).toContain(exercise.level);
            });

            it('should have valid style', () => {
                expect([
                    'story', 'news', 'business', 'advertisement',
                    'email', 'literary', 'instruction', 'blog'
                ]).toContain(exercise.style);
            });
        });
    });

    it('should have at least 15 total exercises', () => {
        expect(EDITING_EXERCISES_DATA.length).toBeGreaterThanOrEqual(15);
    });

    it('should cover all levels', () => {
        const levels = new Set(EDITING_EXERCISES_DATA.map(ex => ex.level));
        expect(levels).toContain('p4');
        expect(levels).toContain('p5');
        expect(levels).toContain('p6');
        expect(levels).toContain('sec1');
        expect(levels).toContain('sec2');
    });
});
