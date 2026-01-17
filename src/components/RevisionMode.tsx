import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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
import { ArrowBack, VolumeUp, AutoAwesome, Star, CheckCircle, Cancel } from '@mui/icons-material';
import { speak } from '../utils/speech';
import { getSavedVoice } from '../utils/storage';
import { HoneyJar } from './HoneyJar';
import VoiceSelector from './VoiceSelector';
import ExerciseCard from './ExerciseCard';
import { playVictorySound } from '../utils/sounds';
import {
    RevisionItem,
    calculateNextReview,
    saveRevisionData,
    getEncouragement,
    getItemsDueForReview,
    getPriorityItems,
} from '../utils/spacedRepetition';
import { VOCABULARY, VocabularyItem } from '../data/vocabulary';
import { GRAMMAR_QUESTIONS, GrammarQuestion } from '../data/grammar-exercises';
import { shuffleArray } from '../hooks/useShuffleArray';

interface RevisionModeProps {
    items: RevisionItem[];
    allRevisionData: RevisionItem[];
    onComplete: (score: number, total: number) => void;
    onBack: () => void;
}

// Create O(1) lookup maps once (memoized outside component)
const VOCAB_MAP = new Map<string, VocabularyItem>(
    VOCABULARY.map(v => [v.word.toLowerCase(), v])
);

const GRAMMAR_MAP = new Map<string, GrammarQuestion>(
    GRAMMAR_QUESTIONS.map(q => [q.topic.toLowerCase(), q])
);

const RevisionMode: React.FC<RevisionModeProps> = ({
    items,
    allRevisionData,
    onComplete,
    onBack
}) => {
    const [currentBatch, setCurrentBatch] = useState<RevisionItem[]>(items);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(1.0);
    const [voice, setVoice] = useState(getSavedVoice);
    const [showResults, setShowResults] = useState(false);
    const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const allRevisionDataRef = useRef<RevisionItem[]>(allRevisionData);

    // MCQ state
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [mcqAttempts, setMcqAttempts] = useState(0);
    const [mcqChecked, setMcqChecked] = useState(false);

    const currentItem = currentBatch[index];
    const totalPossible = currentBatch.length * 2;

    // Calculate remaining items (excluding current batch)
    const remainingItems = useMemo(() => {
        const currentBatchIds = new Set(currentBatch.map(item => `${item.sourceType}:${item.phrase}`));
        const stillDue = getItemsDueForReview(allRevisionDataRef.current).filter(
            item => !currentBatchIds.has(`${item.sourceType}:${item.phrase}`)
        );
        return stillDue.length;
    }, [currentBatch]);

    // Memoized O(1) lookups - only recalculate when currentItem changes
    const vocabItem = useMemo(() => {
        if (!currentItem || currentItem.sourceType !== 'vocab') return undefined;
        return VOCAB_MAP.get(currentItem.phrase.toLowerCase());
    }, [currentItem]);

    const grammarItem = useMemo(() => {
        if (!currentItem || currentItem.sourceType !== 'grammar') return undefined;
        return GRAMMAR_MAP.get(currentItem.phrase.toLowerCase());
    }, [currentItem]);

    // Memoized shuffled options - only recalculate when question changes
    const shuffledOptions = useMemo(() => {
        if (!vocabItem && !grammarItem) return [];

        if (grammarItem) {
            const correctAnswer = grammarItem.correct_answer;
            const wrongAnswers = grammarItem.wrong_answers;
            return shuffleArray([correctAnswer, ...wrongAnswers]);
        }

        if (vocabItem) {
            const correctAnswer = vocabItem.word;
            const wrongAnswers = vocabItem.wrong_answers && vocabItem.wrong_answers.length === 3
                ? vocabItem.wrong_answers  // Use curated distractors
                : shuffleArray(  // Fallback to random if no curated distractors
                    Array.from(VOCAB_MAP.values())
                        .filter(v => v.word !== vocabItem.word)
                )
                    .slice(0, 3)
                    .map(v => v.word);
            return shuffleArray([correctAnswer, ...wrongAnswers]);
        }

        return [];
    }, [vocabItem, grammarItem]);

    // Cleanup timeouts on unmount
    useEffect(() => {
        return () => {
            if (advanceTimeoutRef.current) {
                clearTimeout(advanceTimeoutRef.current);
            }
        };
    }, []);

    // Play audio when moving to new item (only for spelling/dictation/editing)
    useEffect(() => {
        if (!showResults && currentItem && ['spelling', 'dictation', 'editing'].includes(currentItem.sourceType)) {
            const timer = setTimeout(() => speak(currentItem.phrase, speed, voice), 300);
            return () => clearTimeout(timer);
        }
    }, [index, currentItem, speed, voice, showResults]);

    // Reset MCQ state when moving to new question
    useEffect(() => {
        setSelectedAnswer(null);
        setMcqAttempts(0);
        setMcqChecked(false);
    }, [index]);

    // Handle victory sound - only depends on showResults and score
    useEffect(() => {
        if (showResults && score === totalPossible) {
            playVictorySound();
        }
    }, [showResults, score, totalPossible]);

    // Memoized handlers to prevent race conditions
    const updateRevisionItem = useCallback((updated: RevisionItem) => {
        const newData = allRevisionDataRef.current.map((item: RevisionItem) =>
            item.id === updated.id ? updated : item
        );
        allRevisionDataRef.current = newData;
        saveRevisionData(newData);
    }, []);

    const handleNext = useCallback(() => {
        if (advanceTimeoutRef.current) {
            clearTimeout(advanceTimeoutRef.current);
            advanceTimeoutRef.current = null;
        }

        if (index < currentBatch.length - 1) {
            setIndex(i => i + 1);
        } else {
            setShowResults(true);
        }
    }, [index, currentBatch.length]);

    const handleContinue = useCallback(() => {
        // Get next batch of items
        const currentBatchIds = new Set(currentBatch.map(item => `${item.sourceType}:${item.phrase}`));
        const stillDue = getItemsDueForReview(allRevisionDataRef.current).filter(
            item => !currentBatchIds.has(`${item.sourceType}:${item.phrase}`)
        );
        const nextBatch = getPriorityItems(stillDue, 10);

        // Reset state for new batch
        setCurrentBatch(nextBatch);
        setIndex(0);
        setScore(0);
        setShowResults(false);
        setSelectedAnswer(null);
        setMcqAttempts(0);
        setMcqChecked(false);
    }, [currentBatch]);

    const handleCorrect = useCallback((attempts: number) => {
        // Scoring: 2 points for first try (attempts=1), 1 point otherwise
        const points = attempts === 1 ? 2 : 1;
        setScore(s => s + points);

        // Capture currentItem in closure to prevent race condition
        const itemToUpdate = currentItem;
        const updated = calculateNextReview(itemToUpdate, true);
        updateRevisionItem(updated);

        // Auto-advance
        if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
        advanceTimeoutRef.current = setTimeout(handleNext, 1500);
    }, [currentItem, updateRevisionItem, handleNext]);

    const handleWrong = useCallback(() => {
        // Update spaced repetition data (Reset/fail)
        const itemToUpdate = currentItem;
        const updated = calculateNextReview(itemToUpdate, false);
        updateRevisionItem(updated);
    }, [currentItem, updateRevisionItem]);

    const handleMcqCheck = useCallback(() => {
        if (!selectedAnswer || mcqChecked || (!vocabItem && !grammarItem)) return;

        const correctAnswer = vocabItem ? vocabItem.word : grammarItem?.correct_answer || '';
        const isCorrect = selectedAnswer === correctAnswer;

        setMcqChecked(true);
        setMcqAttempts(a => a + 1);

        if (isCorrect) {
            // Correct answer
            const attempts = mcqAttempts + 1;
            const points = attempts === 1 ? 2 : 1;
            setScore(s => s + points);

            // Capture currentItem in closure
            const itemToUpdate = currentItem;
            const updated = calculateNextReview(itemToUpdate, true);
            updateRevisionItem(updated);

            // Auto-advance
            if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
            advanceTimeoutRef.current = setTimeout(handleNext, 1500);
        } else {
            // Wrong answer - update spaced repetition but allow retry
            if (mcqAttempts === 0) {
                const itemToUpdate = currentItem;
                const updated = calculateNextReview(itemToUpdate, false);
                updateRevisionItem(updated);
            }
            // Reset for retry
            setTimeout(() => {
                setSelectedAnswer(null);
                setMcqChecked(false);
            }, 1500);
        }
    }, [selectedAnswer, mcqChecked, vocabItem, grammarItem, mcqAttempts, currentItem, updateRevisionItem, handleNext]);

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
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Completed {currentBatch.length} question{currentBatch.length !== 1 ? 's' : ''}
                        </Typography>
                        <Typography variant="h2" color="secondary" fontWeight="bold">
                            {score} / {totalPossible}
                        </Typography>
                        <Typography color="text.secondary">Points</Typography>
                    </Box>

                    <Box sx={{ bgcolor: '#f0f7ff', p: 3, borderRadius: 2, mb: 3, userSelect: 'none' }}>
                        <Typography variant="body1" color="text.secondary" textAlign="center">
                            <strong>Spaced Repetition Active.</strong><br />
                            Success! The items you got right are scheduled for a future challenge. Let's focus on the others until they are locked in.
                        </Typography>
                    </Box>

                    {remainingItems > 0 && (
                        <Box sx={{ bgcolor: '#fff3e0', p: 2, borderRadius: 2, mb: 3, textAlign: 'center', userSelect: 'none' }}>
                            <Typography variant="body2" color="text.secondary">
                                <strong>{remainingItems}</strong> more item{remainingItems !== 1 ? 's' : ''} waiting for review
                            </Typography>
                        </Box>
                    )}

                    <Stack spacing={2}>
                        {remainingItems > 0 && (
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{ py: 2 }}
                                onClick={handleContinue}
                                autoFocus
                            >
                                Continue Revision ({Math.min(remainingItems, 10)} more)
                            </Button>
                        )}
                        <Button
                            variant={remainingItems > 0 ? "outlined" : "contained"}
                            size="large"
                            fullWidth
                            sx={{ py: 2 }}
                            onClick={() => onComplete(score, totalPossible)}
                            autoFocus={remainingItems === 0}
                        >
                            Finish Revision
                        </Button>
                    </Stack>
                </Card>
            </Container>
        );
    }

    // Safety check for currentItem
    if (!currentItem) {
        return null;
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
                        <Typography variant="caption" color="text.secondary">
                            Question {index + 1} of {currentBatch.length}
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
                    label={
                        currentItem.sourceType === 'spelling' ? '🔤 Spelling' :
                        currentItem.sourceType === 'dictation' ? '📝 Dictation' :
                        currentItem.sourceType === 'editing' ? '✍️ Editing' :
                        currentItem.sourceType === 'vocab' ? '📚 Vocabulary' :
                        '📖 Grammar'
                    }
                    size="small"
                    variant="outlined"
                    sx={{
                        fontWeight: 'bold',
                        bgcolor:
                            currentItem.sourceType === 'spelling' ? '#e3f2fd' :
                            currentItem.sourceType === 'dictation' ? '#fff3e0' :
                            currentItem.sourceType === 'editing' ? '#ffebee' :
                            currentItem.sourceType === 'vocab' ? '#f3e5f5' :
                            '#e8f5e9',
                        borderColor:
                            currentItem.sourceType === 'spelling' ? '#2196f3' :
                            currentItem.sourceType === 'dictation' ? '#ff9800' :
                            currentItem.sourceType === 'editing' ? '#f44336' :
                            currentItem.sourceType === 'vocab' ? '#9c27b0' :
                            '#4caf50'
                    }}
                />
            </Box>

            {/* Scoring Instruction */}
            <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mb: 2, userSelect: 'none' }}>
                ⭐ 2 points first try • 1 point retry
            </Typography>

            {/* Main Card - Conditional rendering based on question type */}
            {(vocabItem || grammarItem) ? (
                // MCQ Card for Vocabulary and Grammar
                <Card sx={{ p: 3, borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                        {vocabItem ? vocabItem.example : grammarItem?.question || 'Question not found'}
                    </Typography>

                    <Stack spacing={1.5} sx={{ mt: 3 }}>
                        {shuffledOptions.map((option, idx) => {
                            const correctAnswer = vocabItem ? vocabItem.word : grammarItem?.correct_answer || '';
                            const isCorrect = option === correctAnswer;
                            const isSelected = option === selectedAnswer;
                            const showFeedback = mcqChecked && isSelected;

                            return (
                                <Button
                                    key={idx}
                                    variant={isSelected ? 'contained' : 'outlined'}
                                    onClick={() => !mcqChecked && setSelectedAnswer(option)}
                                    disabled={mcqChecked}
                                    fullWidth
                                    sx={{
                                        py: 2,
                                        justifyContent: 'flex-start',
                                        textAlign: 'left',
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        bgcolor: showFeedback
                                            ? isCorrect
                                                ? 'success.light'
                                                : 'error.light'
                                            : isSelected
                                                ? 'primary.main'
                                                : 'transparent',
                                        color: showFeedback
                                            ? isCorrect
                                                ? 'success.contrastText'
                                                : 'error.contrastText'
                                            : isSelected
                                                ? 'white'
                                                : 'text.primary',
                                        '&:hover': mcqChecked ? {} : {
                                            bgcolor: isSelected ? 'primary.dark' : 'action.hover',
                                        },
                                    }}
                                    startIcon={
                                        showFeedback ? (
                                            isCorrect ? <CheckCircle /> : <Cancel />
                                        ) : null
                                    }
                                >
                                    {option}
                                </Button>
                            );
                        })}
                    </Stack>

                    {selectedAnswer && !mcqChecked && (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleMcqCheck}
                                sx={{ px: 3, py: 1, fontWeight: 'bold' }}
                            >
                                Check
                            </Button>
                        </Box>
                    )}

                    {mcqChecked && grammarItem && selectedAnswer === grammarItem.correct_answer && (
                        <Box sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 2 }}>
                            <Typography variant="body2" color="info.contrastText">
                                <strong>💡 Explanation:</strong> {grammarItem.explanation}
                            </Typography>
                        </Box>
                    )}
                </Card>
            ) : (
                // Text Input Card for Spelling, Dictation, and Editing
                <ExerciseCard
                    phrase={currentItem.phrase}
                    isDictation={currentItem.sourceType === 'dictation'}
                    onCorrect={handleCorrect}
                    onWrong={handleWrong}
                    autoFocus
                />
            )}

            {/* Honey Jar */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, px: 1 }}>
                <HoneyJar currentScore={score} totalPossible={totalPossible} />
            </Box>
        </Container>
    );
};

export default RevisionMode;
