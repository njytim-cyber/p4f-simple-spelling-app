import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    TextField,
    LinearProgress,
    IconButton,
    Box,
    Chip,
} from '@mui/material';
import { ArrowBack, VolumeUp, Star } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '../data/exercises';
import { speak } from '../utils/speech';

interface SpellingModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onCorrect?: () => void;
    onBack: () => void;
}


const SpellingMode: React.FC<SpellingModeProps> = ({ exercise, onComplete, onBack, onCorrect }) => {
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState<'neutral' | 'correct' | 'wrong'>('neutral');
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(0.85);
    const [showResults, setShowResults] = useState(false);
    const [missedItems, setMissedItems] = useState<string[]>([]);

    const currentWord = exercise.spelling[index];
    const progress = (index / exercise.spelling.length) * 100;

    useEffect(() => {
        if (feedback === 'neutral' && !showResults) {
            // Small delay to ensure synthesis is ready
            setTimeout(() => speak(currentWord.phrase, speed), 300);
        }
    }, [index, currentWord, feedback, speed, showResults]);

    const handleSubmit = () => {
        const isCorrect = input.toLowerCase().trim() === currentWord.phrase.toLowerCase().trim();
        setFeedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) {
            setScore((s) => s + 1);
            onCorrect?.();
            // Automatically move to next word after a brief delay
            setTimeout(handleNext, 1200);
        } else {
            setMissedItems(prev => [...prev, currentWord.phrase]);
            // Visual feedback only for wrong answers as requested
        }
    };



    const handleNext = () => {
        setIndex((prevIndex) => {
            if (prevIndex < exercise.spelling.length - 1) {
                setInput('');
                setFeedback('neutral');
                return prevIndex + 1;
            } else {
                setShowResults(true);
                return prevIndex;
            }
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input && feedback === 'neutral') {
            handleSubmit();
        }
    }

    const toggleSpeed = () => {
        setSpeed((s) => (s === 0.85 ? 0.6 : s === 0.6 ? 1.1 : 0.85));
    };

    const speedLabel = speed === 0.6 ? '0.6x' : speed === 1.1 ? '1.5x' : '1x';

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
                    Review
                </Typography>
                <Card sx={{ p: 4, borderRadius: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h2" color="primary" fontWeight="bold">
                            {score} / {exercise.spelling.length}
                        </Typography>
                        <Typography color="text.secondary">Correct Words</Typography>
                    </Box>

                    {missedItems.length > 0 ? (
                        <>
                            <Typography variant="h6" gutterBottom color="error">
                                Words to Practice:
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missedItems.map((item, i) => (
                                    <Box key={i} sx={{ mb: 1, p: 1.5, bgcolor: '#f5f5f5', borderRadius: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography fontWeight="bold">{item}</Typography>
                                        <IconButton size="small" onClick={() => speak(item, speed)}>
                                            <VolumeUp fontSize="small" />
                                        </IconButton>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
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
                        sx={{ mt: 4, py: 2 }}
                        onClick={() => onComplete(score, exercise.spelling.length, missedItems)}
                    >
                        Return to Dashboard
                    </Button>
                </Card>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={onBack} sx={{ mr: 1 }}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" color="text.secondary">
                        Spelling
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
                    <IconButton onClick={() => speak(currentWord.phrase, speed)} color="primary">
                        <VolumeUp />
                    </IconButton>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${score} / ${exercise.spelling.length}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold' }}
                    />
                </Box>
            </Box>


            <Box sx={{ position: 'relative', mb: 4 }}>
                <LinearProgress
                    variant="determinate"
                    value={((index + 1) / exercise.spelling.length) * 100}
                    sx={{ borderRadius: 5, height: 24, bgcolor: 'secondary.light', '& .MuiLinearProgress-bar': { borderRadius: 5 } }}
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
                    {index + 1} / {exercise.spelling.length}
                </Typography>
            </Box>

            <motion.div
                key={index}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
            >
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: 4,
                        borderRadius: 2,
                        position: 'relative',
                        overflow: 'visible'
                    }}
                    component={motion.div}
                    animate={feedback === 'wrong' ? { x: [-10, 10, -10, 10, 0] } : {}}
                >
                    <TextField

                        fullWidth
                        variant="outlined"
                        placeholder="Type what you hear..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={feedback !== 'neutral'}
                        error={feedback === 'wrong'}
                        autoFocus
                        autoComplete="off"
                        sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 1, fontSize: '1.5rem', fontWeight: 'bold' } }}
                    />

                    <AnimatePresence>
                        {feedback === 'correct' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1, mb: 3, textAlign: 'center' }}>
                                    <Typography color="success.main" variant="h5" fontWeight="bold">
                                        Excellent! 🎉
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                        {feedback === 'wrong' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <Box sx={{ bgcolor: '#ffebee', p: 2, borderRadius: 1, mb: 3, textAlign: 'center' }}>
                                    <Typography color="error" fontWeight="bold">
                                        Correct answer:
                                    </Typography>
                                    <Typography variant="h5" color="error.dark">
                                        {currentWord.phrase}
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                    </AnimatePresence>



                    {feedback === 'neutral' && (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleSubmit}
                            disabled={!input}
                            fullWidth
                            sx={{ py: 2, fontSize: '1.2rem' }}
                        >
                            Check
                        </Button>
                    )}
                </Card>
            </motion.div>
        </Container>
    );
};

export default SpellingMode;
