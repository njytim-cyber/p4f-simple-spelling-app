import { useState, useMemo, useEffect } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    TextField,
    IconButton,
    Stack,
    Box,
    Chip,
    ButtonBase,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';
import { ArrowBack, VolumeUp, Star } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '../data/exercises';
import { speak, chunkText } from '../utils/speech';
import { HoneyJar } from './HoneyJar';
import VoiceSelector, { getSavedVoice } from './VoiceSelector';

interface DictationModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onCorrect?: () => void;
    onBack: () => void;
}

const DictationMode: React.FC<DictationModeProps> = ({ exercise, onComplete, onBack, onCorrect }) => {
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState<'neutral' | 'correct' | 'wrong'>('neutral');
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(1.0);
    const [voice, setVoice] = useState(getSavedVoice);
    const [showResults, setShowResults] = useState(false);
    const [missedChunks, setMissedChunks] = useState<string[]>([]);
    const [hasAttempted, setHasAttempted] = useState(false);
    const [errorHint, setErrorHint] = useState<string[]>([]);
    const [showExitDialog, setShowExitDialog] = useState(false);

    const handleBackClick = () => {
        // If user has made progress (moved past first chunk OR has a score), warn them
        if (index > 0 || score > 0) {
            setShowExitDialog(true);
        } else {
            onBack();
        }
    };




    // Detect what types of errors the user made
    const detectErrors = (userInput: string, correct: string): string[] => {
        const errors: string[] = [];
        const normInput = normalizeText(userInput);
        const normCorrect = normalizeText(correct);

        // Split into words for word-by-word comparison
        const inputWords = normInput.split(/\s+/).filter(w => w);
        const correctWords = normCorrect.split(/\s+/).filter(w => w);

        let spellingErrors: string[] = [];
        let missingWords: string[] = [];
        let extraWords: string[] = [];
        let capsErrors: string[] = [];
        let punctErrors: string[] = [];

        let i = 0; // input pointer
        let j = 0; // correct pointer

        const lookahead = 3; // How far to scan for shifted words

        while (i < inputWords.length || j < correctWords.length) {
            const iW = inputWords[i] || '';
            const cW = correctWords[j] || '';
            const iWClean = iW.replace(/[.,!?;:"'()-]/g, '');
            const cWClean = cW.replace(/[.,!?;:"'()-]/g, '');

            // 1. Exact Match (Clean)
            if (iWClean.toLowerCase() === cWClean.toLowerCase()) {
                // Check Caps
                if (iWClean !== cWClean) {
                    capsErrors.push(iWClean);
                }
                // Check Punctuation (on raw word)
                if (iW.toLowerCase() !== cW.toLowerCase()) {
                    punctErrors.push(iW);
                }
                i++;
                j++;
                continue;
            }

            // 2. Mismatch - Try to classify (Missing vs Extra vs Substitution)

            // Check if current input word matches a future correct word (Deletion/Missing in input)
            let foundInCorrect = -1;
            for (let k = 1; k <= lookahead && j + k < correctWords.length; k++) {
                const nextCW = correctWords[j + k].replace(/[.,!?;:"'()-]/g, '');
                if (iWClean.toLowerCase() === nextCW.toLowerCase()) {
                    foundInCorrect = k;
                    break;
                }
            }

            // Check if current correct word matches a future input word (Insertion/Extra in input)
            let foundInInput = -1;
            for (let k = 1; k <= lookahead && i + k < inputWords.length; k++) {
                const nextIW = inputWords[i + k].replace(/[.,!?;:"'()-]/g, '');
                if (nextIW.toLowerCase() === cWClean.toLowerCase()) {
                    foundInInput = k;
                    break;
                }
            }

            if (foundInCorrect !== -1 && (foundInInput === -1 || foundInCorrect <= foundInInput)) {
                // We found the input word later in the correct string.
                // It implies the words skipped in 'correct' are MISSING.
                for (let k = 0; k < foundInCorrect; k++) {
                    missingWords.push(correctWords[j + k]);
                }
                j += foundInCorrect;
                // Don't advance i, we'll match it next loop
            } else if (foundInInput !== -1) {
                // We found the correct word later in the input string.
                // It implies the words skipped in 'input' are EXTRA.
                for (let k = 0; k < foundInInput; k++) {
                    extraWords.push(inputWords[i + k]);
                }
                i += foundInInput;
                // Don't advance j, we'll match it next loop
            } else {
                // Substitution / Typo
                // If we are at the end of one list, assume the rest are missing/extra
                if (i >= inputWords.length) {
                    missingWords.push(cW);
                    j++;
                } else if (j >= correctWords.length) {
                    extraWords.push(iW);
                    i++;
                } else {
                    // Actual substitution
                    spellingErrors.push(iWClean);
                    i++;
                    j++;
                }
            }
        }

        if (missingWords.length > 0) {
            errors.push(`⚠️ Missing words: ${missingWords.join(', ')}`);
        }
        if (extraWords.length > 0) {
            errors.push(`⚠️ Extra words: ${extraWords.join(', ')}`);
        }
        if (spellingErrors.length > 0) {
            errors.push(`⚠️ Check spelling: ${spellingErrors.join(', ')}`);
        }
        if (capsErrors.length > 0) {
            errors.push(`⚠️ Check capitalization: ${capsErrors.join(', ')}`);
        }
        if (punctErrors.length > 0) {
            errors.push(`⚠️ Check punctuation near: ${punctErrors.join(', ')}`);
        }

        return errors;
    };

    const chunks = useMemo(() => chunkText(exercise.dictation), [exercise.dictation]);
    const currentChunk = chunks[index];

    useEffect(() => {
        if (feedback === 'neutral' && !showResults) {
            const timer = setTimeout(() => speak(currentChunk, speed, voice), 300);
            return () => clearTimeout(timer);
        }
    }, [index, currentChunk, feedback, speed, voice, showResults]);

    // Normalize text for comparison (quotes, dashes, spaces)
    const normalizeText = (text: string): string => {
        return text
            .replace(/[\u2018\u2019]/g, "'")    // curly single quotes to straight
            .replace(/[\u201C\u201D]/g, '"')    // curly double quotes to straight
            .replace(/[\u2013\u2014]/g, '-')    // en-dash/em-dash to hyphen
            .replace(/\u2026/g, '...')          // ellipsis character to three dots
            .replace(/\s+/g, ' ')               // multiple spaces to single space
            .trim();
    };

    const handleSubmit = () => {
        const normalizedInput = normalizeText(input);
        const normalizedChunk = normalizeText(currentChunk);
        const isCorrect = normalizedInput === normalizedChunk;
        setFeedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) {
            // 2 points for first try, 1 point for retry
            const points = hasAttempted ? 1 : 2;
            setScore((s) => s + points);
            onCorrect?.();
            // Automatically move to next chunk after a brief delay
            setTimeout(handleNext, 1200);
        } else {
            if (!hasAttempted) {
                setMissedChunks(prev => [...prev, currentChunk]);
            }
            setHasAttempted(true);
            setErrorHint(detectErrors(input, currentChunk));
        }
    };

    const handleNext = () => {
        if (index < chunks.length - 1) {
            setIndex((i) => i + 1);
            setInput('');
            setFeedback('neutral');
            setHasAttempted(false);
            setErrorHint([]);
        } else {
            setShowResults(true);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input) {
            // For multiline input, Enter usually creates a newline.
            // We'll require CTRL+Enter or button click, or just allow button click.
            // But user might expect Enter to submit if they are done.
            // Preventing default here to submit if user presses Enter without Shift
            if (!e.shiftKey) {
                e.preventDefault();
                if (feedback === 'neutral') handleSubmit();
                else handleNext();
            }
        }
    }

    const toggleSpeed = () => {
        setSpeed((s) => (s === 1.0 ? 0.8 : s === 0.8 ? 1.3 : 1.0));
    };

    const speedLabel = speed === 1.0 ? '1.0x' : speed === 0.8 ? '0.8x' : '1.3x';

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column' }}>

                <Card sx={{ p: 4, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
                            Dictation Review
                        </Typography>
                        <Typography variant="h2" color="secondary" fontWeight="bold">
                            {score} / {chunks.length * 2}
                        </Typography>
                        <Typography color="text.secondary">Points</Typography>
                    </Box>

                    {missedChunks.length > 0 ? (
                        <>
                            <Typography variant="h6" gutterBottom color="error">
                                Review Missed Chunks:
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missedChunks.map((chunk, i) => (
                                    <Box key={i} sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                        <Typography variant="body1" sx={{ mb: 1 }}>{chunk}</Typography>
                                        <Button
                                            size="small"
                                            startIcon={<VolumeUp />}
                                            onClick={() => speak(chunk, speed, voice)}
                                            variant="outlined"
                                        >
                                            Listen Again
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 4 }}>
                            <Typography variant="h5" color="success.main" fontWeight="bold" gutterBottom>
                                Flawless Dictation! 🎯
                            </Typography>
                            <Typography color="text.secondary">You captured every word perfectly.</Typography>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ mt: 4, py: 2 }}
                        onClick={() => onComplete(score, chunks.length * 2, missedChunks)}
                    >
                        Finish Exercise
                    </Button>
                </Card>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleBackClick}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" sx={{ ml: 1, lineHeight: 1 }}>
                        Dictation
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
                        <IconButton
                            onClick={() => speak(currentChunk, speed, voice)}
                            size="small"
                            sx={{ color: 'text.secondary', p: 0.75 }}
                        >
                            <VolumeUp sx={{ fontSize: '1.25rem' }} />
                        </IconButton>
                        <Box sx={{ width: '1px', height: '18px', bgcolor: 'divider', mx: 0.5 }} />
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
                        <Box sx={{ width: '1px', height: '18px', bgcolor: 'divider', mx: 0.5 }} />
                        <VoiceSelector currentVoiceId={voice} onVoiceSelect={setVoice} />
                    </Box>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important', fontSize: '1.1rem' }} />}
                        label={`${score}/${chunks.length * 2}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold', fontSize: '0.85rem', height: 32 }}
                    />
                </Box>
            </Stack>



            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1, textAlign: 'center', fontStyle: 'italic', fontSize: '0.8rem' }}
            >
                All punctuation marks will be read out to you except for capital letters, hyphens and apostrophes (').
            </Typography>

            {/* Scoring Instruction */}
            <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mt: 1 }}>
                ⭐ 2 points first try • 1 point retry
            </Typography>



            <AnimatePresence mode="wait">
                <motion.div
                    key="type"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Type what you hear..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={feedback !== 'neutral'}
                        error={feedback === 'wrong'}
                        sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                        variant="filled"
                        autoFocus
                    />
                    {feedback === 'correct' && (
                        <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1, mb: 3, textAlign: 'center' }}>
                            <Typography color="success.main" variant="h6" fontWeight="bold">
                                Great Job! 🌟
                            </Typography>
                        </Box>
                    )}
                    {feedback === 'wrong' && (
                        <Box sx={{ bgcolor: '#ffebee', p: 2, borderRadius: 1, mb: 3, textAlign: 'center' }}>
                            {errorHint.length > 0 && errorHint.map((hint, i) => (
                                <Typography key={i} color="warning.main" fontWeight="bold" sx={{ mb: 0.5 }}>
                                    {hint}
                                </Typography>
                            ))}
                            <Typography color="error" fontWeight="bold" sx={{ mt: 1 }}>Correct:</Typography>
                            <Typography variant="body1">{currentChunk}</Typography>
                        </Box>
                    )}
                    {feedback === 'neutral' && (
                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            onClick={handleSubmit}
                            disabled={!input}
                        >
                            Check Answer
                        </Button>
                    )}

                    {feedback === 'wrong' && (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                                setInput('');
                                setFeedback('neutral');
                                setHasAttempted(true);
                            }}
                            fullWidth
                            sx={{ py: 1.5 }}
                        >
                            Try Again
                        </Button>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Honey Jar In Flow */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, px: 1 }}>
                <HoneyJar currentScore={score} totalPossible={chunks.length * 2} />
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

export default DictationMode;
