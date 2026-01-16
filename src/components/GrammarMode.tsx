import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    IconButton,
    Box,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Stack,
    Paper,
} from '@mui/material';
import { ArrowBack, Star, CheckCircle, Cancel } from '@mui/icons-material';
import { GRAMMAR_QUESTIONS, GrammarQuestion } from '../data/grammar-exercises';
import { playVictorySound } from '../utils/sounds';

interface GrammarModeProps {
    questionCount?: number;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onCorrect?: () => void;
    onBack: () => void;
}

interface MCQQuestion {
    item: GrammarQuestion;
    options: string[];
    correctAnswer: string;
}

const GrammarMode: React.FC<GrammarModeProps> = ({
    questionCount = 15,
    onComplete,
    onBack,
    onCorrect
}) => {
    const [questions, setQuestions] = useState<MCQQuestion[]>([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [missedItems, setMissedItems] = useState<string[]>([]);
    const [showExitDialog, setShowExitDialog] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [attempts, setAttempts] = useState(0);
    const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);

    // Generate questions on mount
    useEffect(() => {
        const shuffled = [...GRAMMAR_QUESTIONS].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(questionCount, GRAMMAR_QUESTIONS.length));

        const generatedQuestions: MCQQuestion[] = selected.map(item => {
            // Combine correct answer with wrong answers and shuffle
            const options = [item.correct_answer, ...item.wrong_answers].sort(() => Math.random() - 0.5);

            return {
                item,
                options,
                correctAnswer: item.correct_answer
            };
        });

        setQuestions(generatedQuestions);
    }, [questionCount]);

    const currentQuestion = questions[index];

    const handleBackClick = () => {
        if (index > 0 || score > 0) {
            setShowExitDialog(true);
        } else {
            onBack();
        }
    };

    const handleAnswerClick = (answer: string) => {
        if (hasAnsweredCorrectly) return; // Prevent multiple answers after correct

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.correctAnswer;
        setIsCorrect(correct);
        setAttempts(prev => prev + 1);

        if (correct) {
            // 2 points for first try, 1 point for retry
            const points = attempts === 0 ? 2 : 1;
            setScore(s => s + points);
            setHasAnsweredCorrectly(true);
            onCorrect?.();

            // Auto-advance after 1.5 seconds
            setTimeout(() => {
                handleNext();
            }, 1500);
        } else {
            // Track missed item on first wrong attempt
            if (attempts === 0 && !missedItems.includes(currentQuestion.item.topic)) {
                setMissedItems(prev => [...prev, currentQuestion.item.topic]);
            }

            // Reset selected answer after showing feedback
            setTimeout(() => {
                setSelectedAnswer(null);
                setIsCorrect(null);
            }, 1000);
        }
    };

    const handleNext = () => {
        setIndex(prevIndex => {
            if (prevIndex < questions.length - 1) {
                // Reset state for next question
                setSelectedAnswer(null);
                setIsCorrect(null);
                setAttempts(0);
                setHasAnsweredCorrectly(false);
                return prevIndex + 1;
            } else {
                setShowResults(true);
                return prevIndex;
            }
        });
    };

    useEffect(() => {
        if (showResults && missedItems.length === 0) {
            playVictorySound();
        }
    }, [showResults, missedItems.length]);

    if (questions.length === 0) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography>Loading questions...</Typography>
            </Container>
        );
    }

    if (showResults) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center" sx={{ userSelect: 'none' }}>
                    Review
                </Typography>
                <Card sx={{ p: 4, borderRadius: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 4, userSelect: 'none' }}>
                        <Typography variant="h2" color="primary" fontWeight="bold">
                            {score} / {questions.length * 2}
                        </Typography>
                        <Typography color="text.secondary">Points</Typography>
                        <Chip
                            icon={<Star sx={{ color: '#FFD700 !important' }} />}
                            label={`+${score * 10} XP`}
                            sx={{
                                bgcolor: 'primary.main',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                mt: 2,
                                px: 2,
                                py: 2.5,
                            }}
                        />
                    </Box>

                    {missedItems.length > 0 ? (
                        <>
                            <Typography variant="h6" gutterBottom color="error" sx={{ userSelect: 'none' }}>
                                Topics to Review:
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missedItems.map((topic, i) => {
                                    const questionItem = questions.find(q => q.item.topic === topic);
                                    return (
                                        <Box key={i} sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, userSelect: 'none' }}>
                                            <Typography fontWeight="bold" variant="h6" color="primary">{topic}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                                {questionItem?.item.question}
                                            </Typography>
                                            <Typography variant="body2" color="success.main" sx={{ mt: 1, fontWeight: 'bold' }}>
                                                Answer: {questionItem?.item.correct_answer}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
                                                {questionItem?.item.explanation}
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 4 }}>
                            <Typography variant="h5" color="success.main" fontWeight="bold" gutterBottom>
                                Perfect Score!
                            </Typography>
                            <Typography color="text.secondary">You got everything correct.</Typography>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        autoFocus
                        sx={{ mt: 4, py: 2 }}
                        onClick={() => onComplete(score, questions.length * 2, missedItems)}
                    >
                        Finish
                    </Button>
                </Card>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <IconButton onClick={handleBackClick}>
                    <ArrowBack />
                </IconButton>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="body2" color="text.secondary" fontWeight="bold" sx={{ userSelect: 'none' }}>
                        Question {index + 1} / {questions.length}
                    </Typography>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={score}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    />
                </Stack>
            </Box>

            {/* Question Card */}
            <Card sx={{ p: 4, borderRadius: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="overline" color="text.secondary" sx={{ userSelect: 'none' }}>
                        {currentQuestion.item.topic}
                    </Typography>
                    <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1, mb: 2, userSelect: 'none', lineHeight: 1.4 }}>
                        {currentQuestion.item.question}
                    </Typography>
                </Box>

                {/* Options */}
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    {currentQuestion.options.map((option, idx) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrectOption = option === currentQuestion.correctAnswer;
                        const showCorrect = hasAnsweredCorrectly && isCorrectOption;
                        const showWrong = isSelected && isCorrect === false;

                        return (
                            <Paper
                                key={idx}
                                elevation={isSelected ? 3 : 1}
                                onClick={() => handleAnswerClick(option)}
                                sx={{
                                    p: 2.5,
                                    cursor: hasAnsweredCorrectly ? 'default' : 'pointer',
                                    transition: 'all 0.2s',
                                    border: '2px solid',
                                    borderColor: showCorrect
                                        ? 'success.main'
                                        : showWrong
                                        ? 'error.main'
                                        : 'transparent',
                                    bgcolor: showCorrect
                                        ? 'success.light'
                                        : showWrong
                                        ? 'error.light'
                                        : 'background.paper',
                                    '&:hover': {
                                        bgcolor: hasAnsweredCorrectly ? undefined : 'action.hover',
                                        transform: hasAnsweredCorrectly ? undefined : 'scale(1.02)',
                                    },
                                    opacity: hasAnsweredCorrectly && !isCorrectOption ? 0.5 : 1,
                                }}
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    {showCorrect && <CheckCircle color="success" />}
                                    {showWrong && <Cancel color="error" />}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            flexGrow: 1,
                                            fontWeight: isSelected ? 'bold' : 'normal'
                                        }}
                                    >
                                        {option}
                                    </Typography>
                                </Stack>
                            </Paper>
                        );
                    })}
                </Stack>

                {/* Explanation shown after answering (correct or after retry) */}
                {hasAnsweredCorrectly && (
                    <Box sx={{ mt: 3, p: 2, bgcolor: '#e8f5e9', borderRadius: 2, borderLeft: '4px solid #4caf50' }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold" display="block">
                            EXPLANATION:
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {currentQuestion.item.explanation}
                        </Typography>
                    </Box>
                )}

                {/* Hint after first wrong attempt */}
                {attempts > 0 && !hasAnsweredCorrectly && (
                    <Box sx={{ mt: 3, p: 2, bgcolor: '#fff9e6', borderRadius: 2, borderLeft: '4px solid #ffa726' }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold" display="block">
                            HINT:
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            Try again! Think about the grammar rule for this situation.
                        </Typography>
                    </Box>
                )}
            </Card>

            {/* Exit Confirmation Dialog */}
            <Dialog open={showExitDialog} onClose={() => setShowExitDialog(false)}>
                <DialogTitle>Exit Grammar Quiz?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your progress will be lost. Are you sure you want to go back?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowExitDialog(false)}>Continue Quiz</Button>
                    <Button onClick={onBack} color="error">Exit</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default GrammarMode;
