import { useState, useEffect, useRef } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    IconButton,
    Box,
    Chip,
    Stack,
    Tooltip,
} from '@mui/material';
import { ArrowBack, VolumeUp, AutoAwesome, Star } from '@mui/icons-material';
import { speak } from '../utils/speech';
import { HoneyJar } from './HoneyJar';
import VoiceSelector, { getSavedVoice } from './VoiceSelector';
import ExerciseCard from './ExerciseCard';
import { playVictorySound } from '../utils/sounds';
import {
    RevisionItem,
    calculateNextReview,
    saveRevisionData,
    getEncouragement,
} from '../utils/spacedRepetition';

interface RevisionModeProps {
    items: RevisionItem[];
    allRevisionData: RevisionItem[];
    onComplete: (score: number, total: number) => void;
    onBack: () => void;
}

const RevisionMode: React.FC<RevisionModeProps> = ({
    items,
    allRevisionData,
    onComplete,
    onBack
}) => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(1.0);
    const [voice, setVoice] = useState(getSavedVoice);
    const [showResults, setShowResults] = useState(false);
    const [updatedData, setUpdatedData] = useState<RevisionItem[]>(allRevisionData);
    const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentItem = items[index];
    const totalPossible = items.length * 2;

    // Play audio when moving to new item
    useEffect(() => {
        if (!showResults && currentItem) {
            const timer = setTimeout(() => speak(currentItem.phrase, speed, voice), 300);
            return () => {
                clearTimeout(timer);
                if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
            };
        }
    }, [index, currentItem, speed, voice, showResults]);

    // Handle victory sound
    useEffect(() => {
        if (showResults && score === totalPossible) {
            playVictorySound();
        }
    }, [showResults, score, totalPossible]);

    const handleCorrect = (attempts: number) => {
        // Scoring: 2 points for first try (attempts=1), 1 point otherwise
        const points = attempts === 1 ? 2 : 1;
        setScore(s => s + points);

        // Update spaced repetition data (Success)
        const updated = calculateNextReview(currentItem, true);
        updateRevisionItem(updated);

        // Auto-advance
        advanceTimeoutRef.current = setTimeout(handleNext, 1500);
    };

    const handleWrong = () => {
        // Update spaced repetition data (Reset/fail)
        // We do this immediately on mistake to ensure the schedule is reset even if they eventually get it right
        const updated = calculateNextReview(currentItem, false);
        updateRevisionItem(updated);
    };

    const updateRevisionItem = (updated: RevisionItem) => {
        const newData = updatedData.map(item =>
            item.id === updated.id ? updated : item
        );
        setUpdatedData(newData);
        saveRevisionData(newData);
    };

    const handleNext = () => {
        if (index < items.length - 1) {
            setIndex(i => i + 1);
        } else {
            setShowResults(true);
        }
    };

    const toggleSpeed = () => {
        setSpeed(s => (s === 1.0 ? 0.8 : s === 0.8 ? 1.3 : 1.0));
    };

    const speedLabel = speed === 1.0 ? '1.0x' : speed === 0.8 ? '0.8x' : '1.3x';

    // Empty state - no items to review
    if (items.length === 0) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Card sx={{ p: 4, borderRadius: 2, textAlign: 'center', maxWidth: 400 }}>
                    <AutoAwesome sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                    <Typography variant="h5" fontWeight="bold" gutterBottom color="success.main">
                        {getEncouragement('empty')}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                        You don't have any items to revise right now. Keep practicing and any mistakes will appear here for review!
                    </Typography>
                    <Button variant="contained" onClick={onBack} fullWidth sx={{ py: 1.5 }}>
                        Back to Dashboard
                    </Button>
                </Card>
            </Container>
        );
    }

    // Results screen
    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column' }}>
                <Card sx={{ p: 4, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4, userSelect: 'none' }}>
                        <AutoAwesome sx={{ fontSize: 50, color: 'secondary.main', mb: 2 }} />
                        <Typography variant="h4" gutterBottom fontWeight="bold">
                            {getEncouragement('sessionComplete')}
                        </Typography>
                        <Typography variant="h2" color="secondary" fontWeight="bold">
                            {score} / {totalPossible}
                        </Typography>
                        <Typography color="text.secondary">Points</Typography>
                    </Box>

                    <Box sx={{ bgcolor: '#f0f7ff', p: 3, borderRadius: 2, mb: 4, userSelect: 'none' }}>
                        <Typography variant="body1" color="text.secondary" textAlign="center">
                            <strong>Spaced Repetition Active.</strong><br />
                            Success! The items you got right are scheduled for a future challenge. Let’s focus on the others until they are locked in.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ py: 2 }}
                        onClick={() => onComplete(score, totalPossible)}
                        autoFocus
                    >
                        Finish Revision
                    </Button>
                </Card>
            </Container>
        );
    }

    // Main revision UI
    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', userSelect: 'none' }}>
                    <Tooltip title="Go Back">
                        <IconButton onClick={onBack} sx={{ mr: 1 }}>
                            <ArrowBack />
                        </IconButton>
                    </Tooltip>
                    <Stack>
                        <Typography variant="h6" sx={{ lineHeight: 1 }}>
                            Revision
                        </Typography>

                    </Stack>
                </Box>

                {/* Controls */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
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
                                onClick={() => speak(currentItem.phrase, speed, voice)}
                                size="small"
                                sx={{ color: 'text.secondary', p: 0.75 }}
                            >
                                <VolumeUp sx={{ fontSize: '1.25rem' }} />
                            </IconButton>
                        </Tooltip>
                        <Box sx={{ width: '1px', height: '18px', bgcolor: 'divider', mx: 0.5 }} />
                        <Tooltip title="Change Speed">
                            <Box
                                component="button"
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
                                    border: 'none',
                                    bgcolor: 'transparent',
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                                }}
                            >
                                {speedLabel}
                            </Box>
                        </Tooltip>
                        <Box sx={{ width: '1px', height: '18px', bgcolor: 'divider', mx: 0.5 }} />
                        <VoiceSelector currentVoiceId={voice} onVoiceSelect={setVoice} />
                    </Box>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important', fontSize: '1.1rem' }} />}
                        label={`${score}/${totalPossible}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold', fontSize: '0.85rem', height: 32, userSelect: 'none' }}
                    />
                </Box>
            </Box>

            {/* Source indicator */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Chip
                    label={currentItem.sourceType === 'spelling' ? '🔤 Spelling' : '📝 Dictation'}
                    size="small"
                    variant="outlined"
                    sx={{
                        fontWeight: 'bold',
                        bgcolor: currentItem.sourceType === 'spelling' ? '#e3f2fd' : '#fff3e0',
                        borderColor: currentItem.sourceType === 'spelling' ? '#2196f3' : '#ff9800'
                    }}
                />
            </Box>

            {/* Scoring Instruction */}
            <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mb: 2, userSelect: 'none' }}>
                ⭐ 2 points first try • 1 point retry
            </Typography>

            {/* Main Card managed by ExerciseCard */}
            <ExerciseCard
                phrase={currentItem.phrase}
                isDictation={currentItem.sourceType === 'dictation'}
                onCorrect={handleCorrect}
                onWrong={handleWrong}
                autoFocus
            />

            {/* Honey Jar */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, px: 1 }}>
                <HoneyJar currentScore={score} totalPossible={totalPossible} />
            </Box>
        </Container>
    );
};

export default RevisionMode;
