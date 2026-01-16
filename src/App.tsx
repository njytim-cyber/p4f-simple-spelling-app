import { useState, useEffect, Suspense, lazy, useMemo } from 'react';
import { Exercise, ExerciseType, ScoreRecord } from './data/exercises';
import Dashboard from './components/Dashboard';
// Lazy load exercise modes for code splitting
const SpellingMode = lazy(() => import('./components/SpellingMode'));
const DictationMode = lazy(() => import('./components/DictationMode'));
const RevisionMode = lazy(() => import('./components/RevisionMode'));
const EditingMode = lazy(() => import('./components/EditingMode'));
const VocabMode = lazy(() => import('./components/VocabMode'));
const GrammarMode = lazy(() => import('./components/GrammarMode'));
import OnboardingOverlay from './components/OnboardingOverlay';
import ErrorBoundary from './components/ErrorBoundary';

import UpdateSplash, { LAST_SEEN_VERSION_KEY } from './components/UpdateSplash';
import VersionChecker from './components/VersionChecker';
import { APP_VERSION } from './data/version';
import Confetti from 'react-confetti';
import { Box, CircularProgress } from '@mui/material';
import {
    RevisionItem,
    getMissedItemsFromHistory,
    mergeWithSavedData,
    getPriorityItems,
    getItemsDueForReview,
    loadRevisionData,
} from './utils/spacedRepetition';

// Simple persistence helpers
const STORAGE_KEY_HISTORY = 'p4_spelling_history';
const STORAGE_KEY_ONBOARDING = 'p4_onboarding_complete';

export default function App() {
    const [view, setView] = useState<'dashboard' | 'exercise' | 'revision'>('dashboard');
    const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
    const [activeType, setActiveType] = useState<ExerciseType>('spelling');
    const [revisionItems, setRevisionItems] = useState<RevisionItem[]>([]);
    const [allRevisionData, setAllRevisionData] = useState<RevisionItem[]>([]);
    const [revisionRefreshCounter, setRevisionRefreshCounter] = useState(0);

    const [history, setHistory] = useState<ScoreRecord[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
        return saved ? JSON.parse(saved) : [];
    });

    const [showOnboarding, setShowOnboarding] = useState(() => {
        return localStorage.getItem(STORAGE_KEY_ONBOARDING) !== 'true';
    });

    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWinSize();

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    }, [history]);

    const handleOnboardingComplete = () => {
        localStorage.setItem(STORAGE_KEY_ONBOARDING, 'true');
        // Mark current version as seen so we don't show "What's New" to a brand new user
        localStorage.setItem(LAST_SEEN_VERSION_KEY, APP_VERSION);
        setShowOnboarding(false);
    };

    const handleSelect = (ex: Exercise, type: ExerciseType) => {
        setActiveExercise(ex);
        setActiveType(type);
        setView('exercise');
    };

    const handleStartRevision = () => {
        // Build revision data from history
        const historyItems = getMissedItemsFromHistory(history);
        const savedData = loadRevisionData();
        const merged = mergeWithSavedData(historyItems, savedData);
        const priorityItems = getPriorityItems(merged, 10);

        setAllRevisionData(merged);
        setRevisionItems(priorityItems);
        setView('revision');
    };

    const triggerConfetti = () => {
        setShowConfetti(false);
        setTimeout(() => setShowConfetti(true), 10);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const handleComplete = (score: number, total: number, type: ExerciseType, missedItems?: string[]) => {
        if (activeExercise) {
            setHistory([...history, {
                exerciseId: activeExercise.id,
                type,
                score,
                total,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                missedItems
            }]);

            setView('dashboard');
        }
    };

    const handleRevisionComplete = () => {
        setRevisionRefreshCounter(c => c + 1);
        setView('dashboard');
    };

    // Minimal window size hook
    function useWinSize() {
        const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
        useEffect(() => {
            const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return size;
    }

    // Calculate items due for revision (memoized to prevent render thrashing)
    const revisionDueCount = useMemo(() => {
        const historyItems = getMissedItemsFromHistory(history);
        const savedData = loadRevisionData();
        const merged = mergeWithSavedData(historyItems, savedData);
        // Show TOTAL items due on the dashboard, not just the session limit
        return getItemsDueForReview(merged).length;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, revisionRefreshCounter]);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {showConfetti && <Confetti recycle={false} numberOfPieces={300} width={width} height={height} />}

            <ErrorBoundary>
                <Suspense fallback={
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress />
                    </Box>
                }>
                    {view === 'dashboard' ? (
                        <Dashboard
                            onSelect={handleSelect}
                            history={history}
                            onStartRevision={handleStartRevision}
                            revisionDueCount={revisionDueCount}
                        />
                    ) : view === 'revision' ? (
                        <RevisionMode
                            items={revisionItems}
                            allRevisionData={allRevisionData}
                            onComplete={handleRevisionComplete}
                            onBack={() => {
                                setRevisionRefreshCounter(c => c + 1);
                                setView('dashboard');
                            }}
                        />
                    ) : activeExercise ? (
                        activeType === 'spelling' ? (
                            <SpellingMode
                                exercise={activeExercise}
                                onComplete={(score, total, missed) => handleComplete(score, total, 'spelling', missed)}
                                onCorrect={triggerConfetti}
                                onBack={() => setView('dashboard')}
                            />
                        ) : activeType === 'dictation' ? (
                            <DictationMode
                                exercise={activeExercise}
                                onComplete={(score, total, missed) => handleComplete(score, total, 'dictation', missed)}
                                onCorrect={triggerConfetti}
                                onBack={() => setView('dashboard')}
                            />
                        ) : activeType === 'editing' ? (
                            <EditingMode
                                exercise={activeExercise}
                                onComplete={(score, total, missed) => handleComplete(score, total, 'editing', missed)}
                                onBack={() => setView('dashboard')}
                            />
                        ) : activeType === 'vocab' ? (
                            <VocabMode
                                onComplete={(score, total, missed) => handleComplete(score, total, 'vocab', missed)}
                                onCorrect={triggerConfetti}
                                onBack={() => setView('dashboard')}
                            />
                        ) : (
                            <GrammarMode
                                questionCount={15}
                                onComplete={(score, total, missed) => handleComplete(score, total, 'grammar', missed)}
                                onCorrect={triggerConfetti}
                                onBack={() => setView('dashboard')}
                            />
                        )
                    ) : null}
                </Suspense>
            </ErrorBoundary>

            {/* Onboarding overlay - only shows on dashboard for first-time users */}
            {showOnboarding && view === 'dashboard' && (
                <OnboardingOverlay onComplete={handleOnboardingComplete} />
            )}

            {/* Version update splash - shows when app is updated (surpressed during onboarding) */}
            {!showOnboarding && <UpdateSplash />}

            {/* Background version checker - prompts refresh when new version deployed */}
            <VersionChecker />
        </Box>
    );
}
