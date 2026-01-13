import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    TextField,
    LinearProgress,
    IconButton,
    Fab,
    Box,
} from '@mui/material';
import { ArrowBack, VolumeUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '../data/exercises';
import { speak } from '../utils/speech';

interface SpellingModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number) => void;
    onBack: () => void;
}

const SpellingMode: React.FC<SpellingModeProps> = ({ exercise, onComplete, onBack }) => {
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState<'neutral' | 'correct' | 'wrong'>('neutral');
    const [score, setScore] = useState(0);

    const currentWord = exercise.spelling[index];
    const progress = (index / exercise.spelling.length) * 100;

    useEffect(() => {
        if (feedback === 'neutral') {
            // Small delay to ensure synthesis is ready
            setTimeout(() => speak(currentWord.phrase), 300);
        }
    }, [index, currentWord, feedback]);

    const handleSubmit = () => {
        const isCorrect = input.toLowerCase().trim() === currentWord.phrase.toLowerCase().trim();
        setFeedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) {
            setScore((s) => s + 1);
            speak('Correct!');
        } else {
            speak(`Incorrect. The correct spelling is ${currentWord.phrase}`);
        }
    };

    const handleNext = () => {
        if (index < exercise.spelling.length - 1) {
            setIndex((i) => i + 1);
            setInput('');
            setFeedback('neutral');
        } else {
            onComplete(score + (feedback === 'correct' ? 1 : 0), exercise.spelling.length);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input) {
            if (feedback === 'neutral') handleSubmit();
            else handleNext();
        }
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton onClick={onBack} sx={{ mr: 1 }}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6" color="text.secondary">
                    Word {index + 1} of {exercise.spelling.length}
                </Typography>
            </Box>

            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ borderRadius: 5, height: 10, mb: 4, bgcolor: 'secondary.light', '& .MuiLinearProgress-bar': { borderRadius: 5 } }}
            />

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
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: 4,
                        borderRadius: 8,
                        position: 'relative',
                        overflow: 'visible'
                    }}
                    component={motion.div}
                    animate={feedback === 'wrong' ? { x: [-10, 10, -10, 10, 0] } : {}}
                >
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Fab color="primary" onClick={() => speak(currentWord.phrase)} size="large" sx={{ width: 80, height: 80 }}>
                                <VolumeUp fontSize="large" sx={{ fontSize: 40 }} />
                            </Fab>
                        </motion.div>
                        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', fontWeight: 500 }}>
                            Tap to listen
                        </Typography>
                    </Box>

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
                        sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 4, fontSize: '1.5rem', fontWeight: 'bold' } }}
                    />

                    <AnimatePresence>
                        {feedback === 'wrong' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <Box sx={{ bgcolor: '#ffebee', p: 2, borderRadius: 3, mb: 3, textAlign: 'center' }}>
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

                    {feedback === 'neutral' ? (
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
                    ) : (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleNext}
                            color={feedback === 'correct' ? 'success' : 'primary'}
                            fullWidth
                            component={motion.button}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            sx={{ py: 2, fontSize: '1.2rem' }}
                        >
                            {index === exercise.spelling.length - 1 ? 'Finish' : 'Next Word'}
                        </Button>
                    )}
                </Card>
            </motion.div>
        </Container>
    );
};

export default SpellingMode;
