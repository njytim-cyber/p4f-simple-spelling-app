import { useState, useEffect } from 'react';
import { Exercise, ExerciseType, ScoreRecord } from './data/exercises';
import Dashboard from './components/Dashboard';
import SpellingMode from './components/SpellingMode';
import DictationMode from './components/DictationMode';
import OnboardingOverlay from './components/OnboardingOverlay';
import Confetti from 'react-confetti';
import { Box } from '@mui/material';

// Simple persistence helpers
const STORAGE_KEY_HISTORY = 'p4_spelling_history';
const STORAGE_KEY_ONBOARDING = 'p4_onboarding_complete';

export default function App() {
    const [view, setView] = useState<'dashboard' | 'exercise'>('dashboard');
    const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
    const [activeType, setActiveType] = useState<ExerciseType>('spelling');

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
        setShowOnboarding(false);
    };

    const handleSelect = (ex: Exercise, type: ExerciseType) => {
        setActiveExercise(ex);
        setActiveType(type);
        setView('exercise');
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

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {showConfetti && <Confetti recycle={false} numberOfPieces={300} width={width} height={height} />}

            {view === 'dashboard' ? (
                <Dashboard onSelect={handleSelect} history={history} />
            ) : activeExercise ? (
                activeType === 'spelling' ? (
                    <SpellingMode
                        exercise={activeExercise}
                        onComplete={(score, total, missed) => handleComplete(score, total, 'spelling', missed)}
                        onCorrect={triggerConfetti}
                        onBack={() => setView('dashboard')}
                    />
                ) : (
                    <DictationMode
                        exercise={activeExercise}
                        onComplete={(score, total, missed) => handleComplete(score, total, 'dictation', missed)}
                        onCorrect={triggerConfetti}
                        onBack={() => setView('dashboard')}
                    />
                )
            ) : null}

            {/* Onboarding overlay - only shows on dashboard for first-time users */}
            {showOnboarding && view === 'dashboard' && (
                <OnboardingOverlay onComplete={handleOnboardingComplete} />
            )}
        </Box>
    );
}
