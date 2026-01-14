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
    LinearProgress,
    Chip,
} from '@mui/material';
import { ArrowBack, VolumeUp, Star } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '../data/exercises';
import { speak, chunkText } from '../utils/speech';

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
    const [speed, setSpeed] = useState(0.85);
    const [showResults, setShowResults] = useState(false);
    const [missedChunks, setMissedChunks] = useState<string[]>([]);

    const chunks = useMemo(() => chunkText(exercise.dictation), [exercise.dictation]);
    const currentChunk = chunks[index];

    useEffect(() => {
        if (feedback === 'neutral' && !showResults) {
            const timer = setTimeout(() => speak(currentChunk, speed), 300);
            return () => clearTimeout(timer);
        }
    }, [index, currentChunk, feedback, speed, showResults]);

    const handleSubmit = () => {
        const isCorrect = input.toLowerCase().trim().replace(/[.,!?]$/, '') === currentChunk.toLowerCase().trim().replace(/[.,!?]$/, '');
        setFeedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) {
            setScore((s) => s + 1);
            onCorrect?.();
            // Automatically move to next chunk after a brief delay
            setTimeout(handleNext, 1200);
        } else {
            setMissedChunks(prev => [...prev, currentChunk]);
            speak(`Incorrect. The correct text is ${currentChunk}`, speed);
        }
    };



    const handleNext = () => {
        if (index < chunks.length - 1) {
            setIndex((i) => i + 1);
            setInput('');
            setFeedback('neutral');
        } else {
            setShowResults(true);
        }
    };

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
                    Dictation Review
                </Typography>
                <Card sx={{ p: 4, borderRadius: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h2" color="secondary" fontWeight="bold">
                            {score} / {chunks.length}
                        </Typography>
                        <Typography color="text.secondary">Correct Chunks</Typography>
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
                                            onClick={() => speak(chunk, speed)}
                                            variant="outlined"
                                        >
                                            Listen Again
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
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
                        onClick={() => onComplete(score, chunks.length, missedChunks)}
                    >
                        Finish Exercise
                    </Button>
                </Card>
            </Container>
        );
    }


    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input) {
            if (feedback === 'neutral') handleSubmit();
            else handleNext();
        }
    }

    const toggleSpeed = () => {
        setSpeed((s) => (s === 0.85 ? 0.6 : s === 0.6 ? 1.1 : 0.85));
    };

    const speedLabel = speed === 0.6 ? '0.6x' : speed === 1.1 ? '1.5x' : '1x';

    // Deleted ModeSwitch



    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 4, display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={onBack}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" sx={{ ml: 1 }}>
                        Dictation
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                        label={speedLabel}
                        onClick={toggleSpeed}
                        size="small"
                        sx={{
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            '&:hover': { bgcolor: 'primary.dark' },
                        }}
                    />
                    <IconButton onClick={() => speak(currentChunk, speed)} color="secondary" sx={{ mr: 1 }}>
                        <VolumeUp />
                    </IconButton>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${score} / ${chunks.length}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold' }}
                    />
                </Box>
            </Stack>


            <Box sx={{ position: 'relative', mb: 2 }}>
                <LinearProgress
                    variant="determinate"
                    value={((index + 1) / chunks.length) * 100}
                    sx={{ borderRadius: 5, height: 24, bgcolor: 'secondary.light' }}
                />
                <Typography
                    variant="caption"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    }}
                >
                    {index + 1} / {chunks.length}
                </Typography>
            </Box>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, textAlign: 'center', fontStyle: 'italic' }}
            >
                All punctuation marks will be read out to you except for capital letters, hyphens and apostrophes (').
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
                            <Typography color="error" fontWeight="bold">Correct:</Typography>
                            <Typography variant="body1">{currentChunk}</Typography>
                        </Box>
                    )}
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={feedback === 'neutral' ? handleSubmit : handleNext}
                        disabled={!input && feedback === 'neutral'}
                        color={feedback === 'correct' ? 'success' : 'primary'}
                    >
                        {feedback === 'neutral' ? 'Check Answer' : 'Next Chunk'}
                    </Button>
                </motion.div>
            </AnimatePresence>
        </Container>
    );
};



export default DictationMode;
