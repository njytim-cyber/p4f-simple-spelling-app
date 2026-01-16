/**
 * Data loaders for code splitting
 * These enable lazy loading of large data files to reduce initial bundle size
 */

import type { VocabularyItem } from './vocabulary';
import type { GrammarQuestion } from './grammar-exercises';

/**
 * Lazy load vocabulary data
 * Returns a promise that resolves to the VOCABULARY array
 */
export async function loadVocabulary(): Promise<VocabularyItem[]> {
    const module = await import('./vocabulary');
    return module.VOCABULARY;
}

/**
 * Lazy load grammar questions
 * Returns a promise that resolves to the GRAMMAR_QUESTIONS array
 */
export async function loadGrammarQuestions(): Promise<GrammarQuestion[]> {
    const module = await import('./grammar-exercises');
    return module.GRAMMAR_QUESTIONS;
}

/**
 * Lazy load editing exercises
 * Returns a promise that resolves to the EDITING_EXERCISES record (mapping id to passage)
 */
export async function loadEditingExercises(): Promise<Record<string, string>> {
    const module = await import('./editing-exercises');
    return module.EDITING_EXERCISES;
}
