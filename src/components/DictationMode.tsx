import { useState, useMemo, useEffect, useRef } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
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
    Tooltip,
} from '@mui/material';
import { ArrowBack, VolumeUp, Star } from '@mui/icons-material';
import { Exercise } from '../data/exercises';
import { speak, chunkText } from '../utils/speech';
import { getSavedVoice } from '../utils/storage';
import { HoneyJar } from './HoneyJar';
import VoiceSelector from './VoiceSelector';
import ExerciseCard from './ExerciseCard';
import { playVictorySound } from '../utils/sounds';

interface DictationModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onCorrect?: () => void;
    onBack: () => void;
}

const DictationMode: React.FC<DictationModeProps> = ({ exercise, onComplete, onBack, onCorrect }) => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(1.0);
    const [voice, setVoice] = useState(getSavedVoice);
    const [showResults, setShowResults] = useState(false);
    const [missedChunks, setMissedChunks] = useState<string[]>([]);
    const [showExitDialog, setShowExitDialog] = useState(false);
    const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleBackClick = () => {
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

        const inputWords = normInput.split(/\s+/).filter(w => w);
        const correctWords = normCorrect.split(/\s+/).filter(w => w);

        const spellingErrors: string[] = [];
        const missingWords: string[] = [];
        const extraWords: string[] = [];
        const capsErrors: string[] = [];
        const punctErrors: string[] = [];

        let i = 0;
        let j = 0;
        const lookahead = 3;

        while (i < inputWords.length || j < correctWords.length) {
            const iW = inputWords[i] || '';
            const cW = correctWords[j] || '';
            const iWClean = iW.replace(/[.,!?;:"'()-]/g, '');
            const cWClean = cW.replace(/[.,!?;:"'()-]/g, '');

            if (iWClean.toLowerCase() === cWClean.toLowerCase()) {
                if (iWClean !== cWClean) capsErrors.push(iWClean);
                if (iW.toLowerCase() !== cW.toLowerCase()) punctErrors.push(iW);
                i++; j++;
                continue;
            }

            let foundInCorrect = -1;
            for (let k = 1; k <= lookahead && j + k < correctWords.length; k++) {
                const nextCW = correctWords[j + k].replace(/[.,!?;:"'()-]/g, '');
                if (iWClean.toLowerCase() === nextCW.toLowerCase()) {
                    foundInCorrect = k;
                    break;
                }
            }

            let foundInInput = -1;
            for (let k = 1; k <= lookahead && i + k < inputWords.length; k++) {
                const nextIW = inputWords[i + k].replace(/[.,!?;:"'()-]/g, '');
                if (nextIW.toLowerCase() === cWClean.toLowerCase()) {
                    foundInInput = k;
                    break;
                }
            }

            if (foundInCorrect !== -1 && (foundInInput === -1 || foundInCorrect <= foundInInput)) {
                for (let k = 0; k < foundInCorrect; k++) {
                    missingWords.push(correctWords[j + k]);
                }
                j += foundInCorrect;
            } else if (foundInInput !== -1) {
                for (let k = 0; k < foundInInput; k++) {
                    extraWords.push(inputWords[i + k]);
                }
                i += foundInInput;
            } else {
                if (i >= inputWords.length) { missingWords.push(cW); j++; }
                else if (j >= correctWords.length) { extraWords.push(iW); i++; }
                else { spellingErrors.push(iWClean); i++; j++; }
            }
        }

        if (missingWords.length > 0) errors.push(`🔍 Oops! Words missing: "${missingWords.join('", "')}".`);
        if (extraWords.length > 0) errors.push(`✨ Extra words found: "${extraWords.join('", "')}".`);
        if (spellingErrors.length > 0) errors.push(`📝 Check spelling: "${spellingErrors.join('", "')}".`);
        if (capsErrors.length > 0) errors.push(`🔤 Capitalization needed: "${capsErrors.join('", "')}".`);
        if (punctErrors.length > 0) errors.push(`✏️ Punctuation check: "${punctErrors.join('", "')}".`);

        return errors;
    };

    const chunks = useMemo(() => chunkText(exercise.dictation), [exercise.dictation]);
    const currentChunk = chunks[index];

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (!showResults) {
            timer = setTimeout(() => speak(currentChunk, speed, voice), 300);
        } else if (missedChunks.length === 0) {
            // Play victory sound on perfect score!
            playVictorySound();
        }
        return () => {
            clearTimeout(timer);
            if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
        };
    }, [index, currentChunk, speed, voice, showResults, missedChunks.length]);

    const normalizeText = (text: string): string => {
        return text
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201C\u201D]/g, '"')
            .replace(/[\u2013\u2014]/g, '-')
            .replace(/\u2026/g, '...')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const validateInput = (input: string) => {
        const normalizedInput = normalizeText(input);
        const normalizedChunk = normalizeText(currentChunk);
        const isCorrect = normalizedInput === normalizedChunk;

        if (isCorrect) {
            return { isCorrect: true };
        } else {
            const errors = detectErrors(input, currentChunk);
            const feedbackMessage = (
                <Stack spacing={0.5}>
                    {errors.map((e, i) => (
                        <Typography key={i} variant="body2" fontWeight="bold">
                            {e}
                        </Typography>
                    ))}
                </Stack>
            );
            return { isCorrect: false, feedbackMessage };
        }
    };

    const handleCorrect = (attempts: number) => {
        const points = attempts === 1 ? 2 : 1;
        setScore((s) => s + points);
        onCorrect?.();
        advanceTimeoutRef.current = setTimeout(handleNext, 1200);
    };

    const handleWrong = () => {
        if (!missedChunks.includes(currentChunk)) {
            setMissedChunks(prev => [...prev, currentChunk]);
        }
    };

    const handleNext = () => {
        setIndex((i) => {
            if (i < chunks.length - 1) return i + 1;
            setShowResults(true);
            return i;
        });
    };

    const toggleSpeed = () => {
        setSpeed((s) => (s === 1.0 ? 0.8 : s === 0.8 ? 1.3 : 1.0));
    };

    const speedLabel = speed === 1.0 ? '1.0x' : speed === 0.8 ? '0.8x' : '1.3x';

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column' }}>
                <Card sx={{ p: 4, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4, userSelect: 'none' }}>
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
                            <Typography variant="h6" gutterBottom color="error" sx={{ userSelect: 'none' }}>
                                Review Missed Chunks:
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missedChunks.map((chunk, i) => (
                                    <Box key={i} sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, userSelect: 'none' }}>
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
                        autoFocus
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
                <Box sx={{ display: 'flex', alignItems: 'center', userSelect: 'none' }}>
                    <Tooltip title="Go Back">
                        <IconButton onClick={handleBackClick}>
                            <ArrowBack />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" sx={{ ml: 1, lineHeight: 1 }}>
                        Dictation
                    </Typography>
                </Box>

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
                                onClick={() => speak(currentChunk, speed, voice)}
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
                        label={`${score}/${chunks.length * 2}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold', fontSize: '0.85rem', height: 32, userSelect: 'none' }}
                    />
                </Box>
            </Stack>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1, textAlign: 'center', fontStyle: 'italic', fontSize: '0.8rem', userSelect: 'none' }}
            >
                All punctuation marks will be read out to you except for capital letters, hyphens and apostrophes (').
            </Typography>

            <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mt: 1, userSelect: 'none' }}>
                ⭐ 2 points first try • 1 point retry
            </Typography>

            <ExerciseCard
                phrase={currentChunk}
                isDictation={true}
                onCorrect={handleCorrect}
                onWrong={handleWrong}
                autoFocus
                customValidator={validateInput}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, px: 1 }}>
                <HoneyJar currentScore={score} totalPossible={chunks.length * 2} />
            </Box>

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
