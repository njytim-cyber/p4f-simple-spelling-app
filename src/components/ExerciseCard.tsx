import React, { useState, useRef, useEffect } from 'react';
import { Card, TextField, Button, Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { getEncouragement } from '../utils/spacedRepetition';
import { playCorrectSound, playWrongSound } from '../utils/sounds';

interface ExerciseCardProps {
    phrase: string;
    isDictation?: boolean;
    onCorrect: (attempts: number) => void; // Parent handles score/progression
    onWrong: () => void; // Parent might track mistakes
    autoFocus?: boolean;
    customValidator?: (input: string) => { isCorrect: boolean; feedbackMessage?: string | React.ReactNode };
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
    phrase,
    isDictation = false,
    onCorrect,
    onWrong,
    autoFocus = true,
    customValidator,
}) => {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState<'neutral' | 'correct' | 'wrong'>('neutral');
    const [feedbackMessage, setFeedbackMessage] = useState<string | React.ReactNode>('');
    const [attempts, setAttempts] = useState(0); // Track attempts for this specific card instance
    const [placeholderText, setPlaceholderText] = useState('');

    const wholesomePlaceholders = [
        "You've got this! ✨",
        "Take your time, you're doing great! 💛",
        "Believe in yourself! 🌟",
        "I know you can do it! 🚀",
        "Type the word here... 🐝",
        "Can't wait to see your answer! 🌻",
        "You're a spelling superstar! ⭐",
        "Deep breath, you'll nail it! 🎯"
    ];

    // Reset state when phrase changes
    useEffect(() => {
        setInput('');
        setFeedback('neutral');
        setFeedbackMessage('');
        setAttempts(0);

        // Pick a random wholesome placeholder
        const randomPlaceholder = wholesomePlaceholders[Math.floor(Math.random() * wholesomePlaceholders.length)];
        setPlaceholderText(randomPlaceholder);

        let focusTimer: ReturnType<typeof setTimeout> | undefined;
        if (autoFocus) {
            focusTimer = setTimeout(() => inputRef.current?.focus(), 50);
        }
        return () => { if (focusTimer) clearTimeout(focusTimer); };
    }, [phrase, autoFocus]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        let isCorrect = false;
        let message: string | React.ReactNode = '';

        if (customValidator) {
            const result = customValidator(input);
            isCorrect = result.isCorrect;
            message = result.feedbackMessage;
        } else {
            const normalizedInput = input.trim().toLowerCase();
            const normalizedPhrase = phrase.trim().toLowerCase();
            isCorrect = normalizedInput === normalizedPhrase;
        }

        if (isCorrect) {
            setFeedback('correct');
            setFeedbackMessage(customValidator && message ? message : getEncouragement('correct'));
            playCorrectSound();
            // Notify parent after a short delay or immediately?
            // Usually parent auto-advances. 
            // We'll call onCorrect immediately, parent triggers transition.
            onCorrect(attempts + 1);
        } else {
            setFeedback('wrong');
            setFeedbackMessage(customValidator && message ? message : getEncouragement('incorrect'));
            setAttempts(prev => prev + 1);
            playWrongSound();
            onWrong();
        }
    };

    const handleRetry = () => {
        setInput('');
        setFeedback('neutral');
        setFeedbackMessage('');
        // Small timeout to ensure disabled state is removed before focusing
        setTimeout(() => inputRef.current?.focus(), 10);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent newline
            if (feedback === 'neutral' && input.trim()) {
                handleSubmit();
            } else if (feedback === 'wrong') {
                handleRetry();
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={phrase} // Re-animate on new phrase
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            >
                <Card
                    sx={{
                        p: 4,
                        borderRadius: 2,
                        position: 'relative',
                        boxShadow: feedback === 'correct' ? '0 0 20px rgba(76, 175, 80, 0.4)' : '0 4px 6px rgba(0,0,0,0.1)',
                        borderColor: feedback === 'correct' ? 'success.main' : 'transparent',
                        borderWidth: 2,
                        borderStyle: 'solid',
                        transition: 'all 0.3s ease-in-out'
                    }}
                    component={motion.div}
                    animate={
                        feedback === 'wrong'
                            ? { x: [-10, 10, -10, 10, 0] }
                            : feedback === 'correct'
                                ? { scale: [1, 1.02, 1] }
                                : {}
                    }
                    transition={
                        feedback === 'correct' ? { type: 'spring', stiffness: 300, damping: 15 } : { duration: 0.4 }
                    }
                >
                    <TextField
                        fullWidth
                        multiline={isDictation}
                        minRows={isDictation ? 2 : 1}
                        variant="outlined"
                        placeholder={placeholderText || "Type here..."}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        inputRef={inputRef}
                        disabled={feedback !== 'neutral'}
                        error={feedback === 'wrong'}
                        autoFocus={autoFocus}
                        autoComplete="off"
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1,
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                opacity: feedback !== 'neutral' && feedback !== 'correct' ? 0.6 : 1,
                                bgcolor: feedback === 'correct' ? 'rgba(76, 175, 80, 0.05)' : feedback === 'wrong' ? '#fff3e0' : 'transparent',
                                cursor: feedback !== 'neutral' ? 'not-allowed' : 'text',
                                '& fieldset': {
                                    borderColor: feedback === 'correct' ? 'success.main' : undefined,
                                }
                            },
                            '& input': {
                                caretColor: feedback !== 'neutral' ? 'transparent' : 'auto',
                                color: feedback === 'correct' ? 'success.main' : undefined
                            },
                            '& .Mui-disabled': {
                                WebkitTextFillColor: feedback === 'wrong' ? 'rgba(0, 0, 0, 0.5)' : feedback === 'correct' ? '#2e7d32' : 'rgba(0, 0, 0, 0.38)',
                            }
                        }}
                    />

                    {/* Feedback Section */}
                    <AnimatePresence>
                        {feedback === 'correct' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1, mb: 3, textAlign: 'center' }}>
                                    <Typography color="success.main" variant="h5" fontWeight="bold">
                                        {feedbackMessage}
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
                                <Box sx={{ bgcolor: '#fff3e0', p: 2, borderRadius: 1, mb: 3, textAlign: 'center' }}>
                                    <Box sx={{ color: 'warning.dark', fontWeight: 'bold', mb: 1 }}>
                                        {feedbackMessage}
                                    </Box>
                                    <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
                                        The correct answer is:
                                    </Typography>
                                    <Typography variant="h6" color="primary" fontWeight="bold">
                                        {phrase}
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Buttons */}
                    {feedback === 'neutral' && (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleSubmit}
                            disabled={!input.trim()}
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
                            onClick={handleRetry}
                            fullWidth
                            autoFocus
                            sx={{ py: 2, fontSize: '1.1rem' }}
                        >
                            Try Again
                        </Button>
                    )}

                </Card>
            </motion.div>
        </AnimatePresence>
    );
};

export default ExerciseCard;
