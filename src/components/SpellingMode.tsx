import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    TextField,
    IconButton,
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
import { speak } from '../utils/speech';
import { HoneyJar } from './HoneyJar';
import VoiceSelector, { getSavedVoice } from './VoiceSelector';

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
    const [speed, setSpeed] = useState(1.0);
    const [voice, setVoice] = useState(getSavedVoice);
    const [showResults, setShowResults] = useState(false);
    const [missedItems, setMissedItems] = useState<string[]>([]);
    const [hasAttempted, setHasAttempted] = useState(false);
    const [showExitDialog, setShowExitDialog] = useState(false);

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
        if (feedback === 'neutral' && !showResults) {
            // Small delay to ensure synthesis is ready
            setTimeout(() => speak(currentWord.phrase, speed, voice), 300);
        }
    }, [index, currentWord, feedback, speed, voice, showResults]);

    const handleSubmit = () => {
        const isCorrect = input.toLowerCase().trim() === currentWord.phrase.toLowerCase().trim();
        setFeedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) {
            // 2 points for first try, 1 point for retry
            const points = hasAttempted ? 1 : 2;
            setScore((s) => s + points);
            onCorrect?.();
            // Automatically move to next word after a brief delay
            setTimeout(handleNext, 1200);
        } else {
            if (!hasAttempted) {
                setMissedItems(prev => [...prev, currentWord.phrase]);
            }
            setHasAttempted(true);
        }
    };



    const handleNext = () => {
        setIndex((prevIndex) => {
            if (prevIndex < exercise.spelling.length - 1) {
                setInput('');
                setFeedback('neutral');
                setHasAttempted(false);
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
        setSpeed((s) => (s === 1.0 ? 0.8 : s === 0.8 ? 1.3 : 1.0));
    };

    const speedLabel = speed === 1.0 ? '1.0x' : speed === 0.8 ? '0.8x' : '1.3x';

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
                    Review
                </Typography>
                <Card sx={{ p: 4, borderRadius: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h2" color="primary" fontWeight="bold">
                            {score} / {exercise.spelling.length * 2}
                        </Typography>
                        <Typography color="text.secondary">Points</Typography>
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
                                        <IconButton size="small" onClick={() => speak(item, speed, voice)}>
                                            <VolumeUp fontSize="small" />
                                        </IconButton>
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleBackClick} sx={{ mr: 1 }}>
                        <ArrowBack />
                    </IconButton>
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
                        <IconButton
                            onClick={() => speak(currentWord.phrase, speed, voice)}
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
                        label={`${score}/${exercise.spelling.length * 2}`}
                        variant="outlined"
                        sx={{ fontWeight: 'bold', fontSize: '0.85rem', height: 32 }}
                    />
                </Box>
            </Box>

            {/* Scoring Instruction */}
            <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mt: 1 }}>
                ⭐ 2 points first try • 1 point retry
            </Typography>


            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                style={{ display: 'flex', flexDirection: 'column' }}
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
                        multiline
                        minRows={2}
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
                            sx={{ py: 2, fontSize: '1.1rem' }}
                        >
                            Try Again
                        </Button>
                    )}
                </Card>
            </motion.div>



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
