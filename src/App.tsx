import { useState, useEffect } from 'react';
import { Exercise, ExerciseType, ScoreRecord } from './data/exercises';
import Dashboard from './components/Dashboard';
import SpellingMode from './components/SpellingMode';
import DictationMode from './components/DictationMode';
import Confetti from 'react-confetti';
// import { useWindowSize } from 'react-use'; // Removing unused import
import { Box } from '@mui/material';

// Simple persistence helpers
const STORAGE_KEY_HISTORY = 'p4_spelling_history';
const STORAGE_KEY_STREAK = 'p4_spelling_streak';
const STORAGE_KEY_LAST_PLAYED = 'p4_spelling_last_played';

export default function App() {
    const [view, setView] = useState<'dashboard' | 'exercise'>('dashboard');
    const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
    const [activeType, setActiveType] = useState<ExerciseType>('spelling');

    const [history, setHistory] = useState<ScoreRecord[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
        return saved ? JSON.parse(saved) : [];
    });

    const [streak, setStreak] = useState<number>(() => {
        const saved = localStorage.getItem(STORAGE_KEY_STREAK);
        return saved ? parseInt(saved, 10) : 0;
    });

    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWinSize();

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    }, [history]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_STREAK, streak.toString());
    }, [streak]);

    const handleSelect = (ex: Exercise, type: ExerciseType) => {
        setActiveExercise(ex);
        setActiveType(type);
        setView('exercise');
    };

    const updateStreak = () => {
        const lastPlayed = localStorage.getItem(STORAGE_KEY_LAST_PLAYED);
        const today = new Date().toDateString();

        if (lastPlayed !== today) {
            // If played yesterday, increment. If before yesterday, reset to 1. If never, 1.
            // Simplified: Just increment if different day for now for fun factor.
            // Ideally: check if yesterday.
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastPlayed === yesterday.toDateString()) {
                setStreak(s => s + 1);
            } else {
                // If missed a day, reset. Or if first time.
                // Check if it's the same day (handled above), if not, and not yesterday -> reset
                // But let's be kind for "fun": if it's a new day, increment. If > 1 day gap, maybe reset?
                // Let's simple increment for now to encourage ANY play.
                // Actually, let's just increment if it's a new day.
                setStreak(s => s + 1);
            }
            localStorage.setItem(STORAGE_KEY_LAST_PLAYED, today);
        }
    }

    const handleComplete = (score: number, total: number) => {
        if (activeExercise) {
            setHistory([...history, {
                exerciseId: activeExercise.id,
                score,
                total,
                date: new Date().toLocaleDateString()
            }]);

            updateStreak();

            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
            setView('dashboard');
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {showConfetti && <Confetti recycle={false} numberOfPieces={500} width={width} height={height} />}

            {view === 'dashboard' ? (
                <Dashboard onSelect={handleSelect} history={history} streak={streak} />
            ) : activeExercise ? (
                activeType === 'spelling' ? (
                    <SpellingMode
                        exercise={activeExercise}
                        onComplete={handleComplete}
                        onBack={() => setView('dashboard')}
                    />
                ) : (
                    <DictationMode
                        exercise={activeExercise}
                        onComplete={handleComplete}
                        onBack={() => setView('dashboard')}
                    />
                )
            ) : null}
        </Box>
    );
}

// Minimal window size hook to avoid extra dependency if possible, or just use window.
function useWinSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}
