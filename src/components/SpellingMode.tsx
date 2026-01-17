import { useState, useEffect, useRef } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    IconButton,
    Box,
    Chip,
    ButtonBase,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Tooltip,
} from '@mui/material';
import { ArrowBack, VolumeUp, Star } from '@mui/icons-material';
import { Exercise } from '../data/exercises';
import { speak } from '../utils/speech';
import { getSavedVoice } from '../utils/storage';
import { HoneyJar } from './HoneyJar';
import VoiceSelector from './VoiceSelector';
import ExerciseCard from './ExerciseCard';
import { playVictorySound } from '../utils/sounds';

interface SpellingModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onCorrect?: () => void;
    onBack: () => void;
}


const SpellingMode: React.FC<SpellingModeProps> = ({ exercise, onComplete, onBack, onCorrect }) => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(1.0);
    const [voice, setVoice] = useState(getSavedVoice);
    const [showResults, setShowResults] = useState(false);
    const [missedItems, setMissedItems] = useState<string[]>([]);
    const [showExitDialog, setShowExitDialog] = useState(false);
    const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentWord = exercise.spelling[index];

    const handleBackClick = () => {
        // If user has made progress (moved past first word OR has a score), warn them
        if (index > 0 || score > 0) {
            setShowExitDialog(true);
        } else {
            onBack();
        }
    };

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (!showResults) {
            // Small delay to ensure synthesis is ready
            timer = setTimeout(() => speak(currentWord.phrase, speed, voice), 300);
        } else if (missedItems.length === 0) {
            // Play victory sound on perfect score!
            playVictorySound();
        }
        return () => {
            clearTimeout(timer);
            if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
        };
    }, [index, currentWord, speed, voice, showResults, missedItems.length]);

    const handleCorrect = (attempts: number) => {
        // 2 points for first try, 1 point for retry
        const points = attempts === 1 ? 2 : 1;
        setScore((s) => s + points);
        onCorrect?.();

        // Automatically move to next word after a brief delay
        advanceTimeoutRef.current = setTimeout(handleNext, 1200);
    };

    const handleWrong = () => {
        // Track missed item if not already tracked
        if (!missedItems.includes(currentWord.phrase)) {
            setMissedItems(prev => [...prev, currentWord.phrase]);
        }
    };

    const handleNext = () => {
        setIndex((prevIndex) => {
            if (prevIndex < exercise.spelling.length - 1) {
                return prevIndex + 1;
            } else {
                setShowResults(true);
                return prevIndex;
            }
        });
    };

    const toggleSpeed = () => {
        setSpeed((s) => (s === 1.0 ? 0.8 : s === 0.8 ? 1.3 : 1.0));
    };

    const speedLabel = speed === 1.0 ? '1.0x' : speed === 0.8 ? '0.8x' : '1.3x';

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center" sx={{ userSelect: 'none' }}>
                    Review
                </Typography>
                <Card sx={{ p: 4, borderRadius: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4, userSelect: 'none' }}>
                        <Typography variant="h2" color="primary" fontWeight="bold">
                            {score} / {exercise.spelling.length * 2}
                        </Typography>
                        <Typography color="text.secondary">Points</Typography>
                    </Box>

                    {missedItems.length > 0 ? (
                        <>
                            <Typography variant="h6" gutterBottom color="error" sx={{ userSelect: 'none' }}>
                                Words to Practice:
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missedItems.map((item, i) => (
                                    <Box key={i} sx={{ mb: 1, p: 1.5, bgcolor: '#f5f5f5', borderRadius: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}>
                                        <Typography fontWeight="bold">{item}</Typography>
                                        <Tooltip title="Listen Again">
                                            <IconButton size="small" onClick={() => speak(item, speed, voice)}>
                                                <VolumeUp fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 4 }}>
                            <Typography variant="h5" color="success.main" fontWeight="bold" gutterBottom>
                                Perfect Score! 🏆
                            </Typography>
                            <Typography color="text.secondary">You got everything correct.</Typography>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        autoFocus
                        sx={{ mt: 4, py: 2 }}
                        onClick={() => onComplete(score, exercise.spelling.length * 2, missedItems)}
                    >
                        Return to Dashboard
                    </Button>
                </Card>
            </Container>
        );
    }



    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', userSelect: 'none' }}>
                    <Tooltip title="Go Back">
                        <IconButton onClick={handleBackClick} sx={{ mr: 1 }}>
                            <ArrowBack />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1 }}>
                        Spelling
                    </Typography>
                </Box>

                {/* Center Controls */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    {/* Unified Media Pill */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: '#f5f5f5',
                        borderRadius: 3,
                        px: 0.5,
                        py: 0.5,
                    }}>
                        <Tooltip title="Play Sound">
                            <IconButton
                                onClick={() => speak(currentWord.phrase, speed, voice)}
                                size="small"
                                sx={{ color: 'text.secondary', p: 0.75 }}
                            >
                                <VolumeUp sx={{ fontSize: '1.25rem' }} />
                            </IconButton>
                        </Tooltip>
                        <Box sx={{ width: '1px', height: '18px', bgcolor: 'divider', mx: 0.5 }} />
                        <Tooltip title="Change Speed" arrow enterDelay={100} enterNextDelay={100}>
                            <ButtonBase
                                onClick={toggleSpeed}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    px: 1,
                                    fontWeight: 'bold',
                                    fontSize: '0.85rem',
                                    lineHeight: 1,
                                    color: 'text.secondary',
                                    height: 32,
                                    borderRadius: 1.5,
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                                }}
                            >
                                {speedLabel}
                            </ButtonBase>
                        </Tooltip>
                        <Box sx={{ width: '1px', height: '18px', bgcolor: 'divider', mx: 0.5 }} />
                        <VoiceSelector currentVoiceId={voice} onVoiceSelect={setVoice} />
                    </Box>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important', fontSize: '1.1rem' }} />}
                        label={`${score}/${exercise.spelling.length * 2}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold', fontSize: '0.85rem', height: 32, userSelect: 'none' }}
                    />
                </Box>
            </Box>

            {/* Scoring Instruction */}
            <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mt: 1, userSelect: 'none' }}>
                ⭐ 2 points first try • 1 point retry
            </Typography>


            {/* Main Card managed by ExerciseCard */}
            <ExerciseCard
                phrase={currentWord.phrase}
                onCorrect={handleCorrect}
                onWrong={handleWrong}
                autoFocus
            />

            {/* Honey Jar In Flow */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, px: 1 }}>
                <HoneyJar currentScore={score} totalPossible={exercise.spelling.length * 2} />
            </Box>

            {/* Exit Confirmation Dialog */}
            <Dialog
                open={showExitDialog}
                onClose={() => setShowExitDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Stop Practicing?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You're doing great! If you leave now, you'll lose your current progress.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowExitDialog(false)} autoFocus>
                        Keep Going
                    </Button>
                    <Button onClick={onBack} color="error">
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default SpellingMode;
