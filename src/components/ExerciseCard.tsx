import React, { useState, useRef, useEffect } from 'react';
import { Card, TextField, Button, Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { getEncouragement } from '../utils/spacedRepetition';
import { playCorrectSound } from '../utils/sounds';

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

    // Reset state when phrase changes
    useEffect(() => {
        setInput('');
        setFeedback('neutral');
        setFeedbackMessage('');
        setAttempts(0);
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
                    }}
                    component={motion.div}
                    animate={feedback === 'wrong' ? { x: [-10, 10, -10, 10, 0] } : {}}
                >
                    <TextField
                        fullWidth
                        multiline={isDictation}
                        minRows={isDictation ? 2 : 1}
                        variant="outlined"
                        placeholder={isDictation ? "Type what you hear..." : "Type the word..."}
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
                                opacity: feedback !== 'neutral' ? 0.5 : 1,
                                bgcolor: feedback !== 'neutral' ? '#f5f5f5' : 'transparent',
                                cursor: feedback !== 'neutral' ? 'not-allowed' : 'text',
                            },
                            '& input': {
                                caretColor: feedback !== 'neutral' ? 'transparent' : 'auto'
                            },
                            '& .Mui-disabled': {
                                WebkitTextFillColor: feedback === 'wrong' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.38)',
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
