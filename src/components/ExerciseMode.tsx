import { useState, useEffect, useCallback } from 'react';
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
    LinearProgress,
    CircularProgress,
} from '@mui/material';
import { ArrowBack, Star, CheckCircle, Cancel } from '@mui/icons-material';
import type { VocabularyItem } from '../data/vocabulary';
import type { GrammarQuestion } from '../data/grammar-exercises';
import { loadVocabulary, loadGrammarQuestions } from '../data/loaders';
import { playVictorySound } from '../utils/sounds';

type QuizType = 'vocab' | 'grammar';

interface BaseQuestion {
    options: string[];
    correctAnswer: string;
}

interface VocabQuestionData extends BaseQuestion {
    type: 'vocab';
    item: VocabularyItem;
    sentenceWithBlank: string;
}

interface GrammarQuestionData extends BaseQuestion {
    type: 'grammar';
    item: GrammarQuestion;
}

type QuestionData = VocabQuestionData | GrammarQuestionData;

interface ExerciseModeProps {
    quizType: QuizType;
    questionCount?: number;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onCorrect?: () => void;
    onBack: () => void;
}

const ExerciseMode: React.FC<ExerciseModeProps> = ({
    quizType,
    questionCount = 10,
    onComplete,
    onBack,
    onCorrect
}) => {
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [missedItems, setMissedItems] = useState<string[]>([]);
    const [showExitDialog, setShowExitDialog] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [attempts, setAttempts] = useState(0);
    const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [dataLoaded, setDataLoaded] = useState<{vocab?: VocabularyItem[], grammar?: GrammarQuestion[]}>({});

    // Calculate remaining questions
    const totalAvailable = quizType === 'vocab'
        ? (dataLoaded.vocab?.filter(v => v.level === 'p4' && !v.meaning.includes('commonly misspelled') && v.meaning.length > 10).length || 0)
        : (dataLoaded.grammar?.length || 0);
    const remainingQuestions = totalAvailable - usedQuestionIds.size;

    // Generate questions functions - defined before useEffect to avoid hoisting issues
    const generateVocabQuestions = useCallback((vocabulary: VocabularyItem[]) => {
        // Filter for good quality vocabulary (exclude generic meanings and already used)
        const levelVocab = vocabulary.filter(v =>
            v.level === 'p4' &&
            !v.meaning.includes('commonly misspelled') &&
            v.meaning.length > 10 && // Ensure meaningful definitions
            !usedQuestionIds.has(v.id) // Exclude already used questions
        );

        const shuffled = [...levelVocab].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(questionCount, levelVocab.length));

        const generatedQuestions: VocabQuestionData[] = selected.map(item => {
            // Create sentence with blank by replacing the word (case-insensitive)
            const wordRegex = new RegExp(`\\b${item.word}\\b`, 'gi');
            const sentenceWithBlank = item.example.replace(wordRegex, '_____');

            // Use curated distractors if available, otherwise generate random ones
            let distractors: string[];
            if (item.wrong_answers && item.wrong_answers.length === 3) {
                // Use curated distractors
                distractors = item.wrong_answers;
            } else {
                // Fallback: Get 3 similar-length distractors from same level
                const targetLength = item.word.length;
                const otherWords = vocabulary.filter(v =>
                    v.id !== item.id &&
                    v.level === 'p4' &&
                    !v.meaning.includes('commonly misspelled') &&
                    Math.abs(v.word.length - targetLength) <= 3 // Similar length
                );

                const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5);
                distractors = shuffledOthers.slice(0, 3).map(v => v.word);
            }

            // Combine correct answer with distractors and shuffle
            const options = [item.word, ...distractors].sort(() => Math.random() - 0.5);

            return {
                type: 'vocab',
                item,
                options,
                correctAnswer: item.word,
                sentenceWithBlank
            };
        });

        // Track used questions
        setUsedQuestionIds(prev => {
            const newSet = new Set(prev);
            selected.forEach(item => newSet.add(item.id));
            return newSet;
        });

        setQuestions(generatedQuestions);
    }, [usedQuestionIds, questionCount]);

    const generateGrammarQuestions = useCallback((grammarQuestions: GrammarQuestion[]) => {
        // Exclude already used questions
        const availableQuestions = grammarQuestions.filter(q => !usedQuestionIds.has(q.topic));
        const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(questionCount, availableQuestions.length));

        const generatedQuestions: GrammarQuestionData[] = selected.map(item => {
            // Combine correct answer with wrong answers and shuffle
            const options = [item.correct_answer, ...item.wrong_answers].sort(() => Math.random() - 0.5);

            return {
                type: 'grammar',
                item,
                options,
                correctAnswer: item.correct_answer
            };
        });

        // Track used questions
        setUsedQuestionIds(prev => {
            const newSet = new Set(prev);
            selected.forEach(item => newSet.add(item.topic));
            return newSet;
        });

        setQuestions(generatedQuestions);
    }, [usedQuestionIds, questionCount]);

    // Load data and generate questions on mount
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                if (quizType === 'vocab') {
                    const vocab = await loadVocabulary();
                    setDataLoaded({ vocab });
                    generateVocabQuestions(vocab);
                } else {
                    const grammar = await loadGrammarQuestions();
                    setDataLoaded({ grammar });
                    generateGrammarQuestions(grammar);
                }
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, [quizType, questionCount, generateVocabQuestions, generateGrammarQuestions]);

    const currentQuestion = questions[index];

    const handleBackClick = () => {
        if (index > 0 || score > 0) {
            setShowExitDialog(true);
        } else {
            onBack();
        }
    };

    const handleContinue = () => {
        // Reset state for new batch
        setIndex(0);
        setScore(0);
        setShowResults(false);
        setMissedItems([]);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setAttempts(0);
        setHasAnsweredCorrectly(false);

        // Generate new batch of questions (will use usedQuestionIds to avoid repeats)
        if (quizType === 'vocab' && dataLoaded.vocab) {
            generateVocabQuestions(dataLoaded.vocab);
        } else if (quizType === 'grammar' && dataLoaded.grammar) {
            generateGrammarQuestions(dataLoaded.grammar);
        }
    };

    const handleAnswerClick = (answer: string) => {
        if (hasAnsweredCorrectly) return; // Prevent multiple answers after correct

        setSelectedAnswer(answer);
        const correct = quizType === 'vocab'
            ? answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()
            : answer === currentQuestion.correctAnswer;
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
            if (attempts === 0) {
                const missedKey = quizType === 'vocab'
                    ? (currentQuestion as VocabQuestionData).item.word
                    : (currentQuestion as GrammarQuestionData).item.topic;
                if (!missedItems.includes(missedKey)) {
                    setMissedItems(prev => [...prev, missedKey]);
                }
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

    if (isLoading || questions.length === 0) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <CircularProgress />
                <Typography color="text.secondary">Loading {quizType === 'vocab' ? 'vocabulary' : 'grammar'} questions...</Typography>
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
                    <Box sx={{ textAlign: 'center', mb: 3, userSelect: 'none' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Completed {questions.length} question{questions.length !== 1 ? 's' : ''}
                        </Typography>
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

                    {remainingQuestions > 0 && (
                        <Box sx={{ bgcolor: '#fff3e0', p: 2, borderRadius: 2, mb: 3, textAlign: 'center', userSelect: 'none' }}>
                            <Typography variant="body2" color="text.secondary">
                                <strong>{remainingQuestions}</strong> more question{remainingQuestions !== 1 ? 's' : ''} available
                            </Typography>
                        </Box>
                    )}

                    {missedItems.length > 0 ? (
                        <>
                            <Typography variant="h6" gutterBottom color="error" sx={{ userSelect: 'none' }}>
                                {quizType === 'vocab' ? 'Words to Review:' : 'Topics to Review:'}
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missedItems.map((key, i) => {
                                    if (quizType === 'vocab') {
                                        const vocabItem = dataLoaded.vocab?.find(v => v.word === key);
                                        return (
                                            <Box key={i} sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, userSelect: 'none' }}>
                                                <Typography fontWeight="bold" variant="h6" color="primary">{key}</Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                                    {vocabItem?.meaning}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
                                                    "{vocabItem?.example}"
                                                </Typography>
                                            </Box>
                                        );
                                    } else {
                                        const questionItem = (questions as GrammarQuestionData[]).find(q => q.item.topic === key);
                                        return (
                                            <Box key={i} sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, userSelect: 'none' }}>
                                                <Typography fontWeight="bold" variant="h6" color="primary">{key}</Typography>
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
                                    }
                                })}
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

                    <Stack spacing={2} sx={{ mt: 4 }}>
                        {remainingQuestions > 0 && (
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{ py: 2 }}
                                onClick={handleContinue}
                                autoFocus
                            >
                                Continue ({Math.min(remainingQuestions, questionCount)} more)
                            </Button>
                        )}
                        <Button
                            variant={remainingQuestions > 0 ? "outlined" : "contained"}
                            size="large"
                            fullWidth
                            sx={{ py: 2 }}
                            onClick={() => onComplete(score, questions.length * 2, missedItems)}
                            autoFocus={remainingQuestions === 0}
                        >
                            Finish
                        </Button>
                    </Stack>
                </Card>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 4, pb: 4 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton onClick={handleBackClick}>
                        <ArrowBack />
                    </IconButton>
                    <Stack>
                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, lineHeight: 1 }}>
                            {quizType === 'vocab' ? 'Vocab' : 'Grammar'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Question {index + 1} of {questions.length}
                        </Typography>
                    </Stack>
                </Box>
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

            {/* Progress Bar */}
            <LinearProgress
                variant="determinate"
                value={((index + 1) / questions.length) * 100}
                sx={{
                    height: { xs: 4, sm: 6 },
                    borderRadius: 3,
                    mb: 3,
                    bgcolor: '#f0f0f0',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        bgcolor: 'primary.main'
                    }
                }}
            />

            {/* Question Card */}
            <Card sx={{ p: 4, borderRadius: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 4 }}>
                    {quizType === 'vocab' ? (
                        <>
                            <Typography variant="overline" color="text.secondary" sx={{ userSelect: 'none' }}>
                                Fill in the blank
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    mb: 3,
                                    userSelect: 'none',
                                    lineHeight: 1.8,
                                    fontSize: '1.2rem',
                                    fontStyle: 'italic',
                                    '& em': {
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        color: 'primary.main',
                                        fontSize: '1.3rem',
                                        px: 1
                                    }
                                }}
                            >
                                {(currentQuestion as VocabQuestionData).sentenceWithBlank.split('_____').map((part, i, arr) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && <em>_____</em>}
                                    </span>
                                ))}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="overline" color="text.secondary" sx={{ userSelect: 'none' }}>
                                {(currentQuestion as GrammarQuestionData).item.topic}
                            </Typography>
                            <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1, mb: 2, userSelect: 'none', lineHeight: 1.4 }}>
                                {(currentQuestion as GrammarQuestionData).item.question}
                            </Typography>
                        </>
                    )}
                </Box>

                {/* Options */}
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    {currentQuestion.options.map((option, idx) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrectOption = quizType === 'vocab'
                            ? option.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()
                            : option === currentQuestion.correctAnswer;
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

                {/* Grammar-specific: Explanation shown after answering (correct or after retry) */}
                {quizType === 'grammar' && hasAnsweredCorrectly && (
                    <Box sx={{ mt: 3, p: 2, bgcolor: '#e8f5e9', borderRadius: 2, borderLeft: '4px solid #4caf50' }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold" display="block">
                            EXPLANATION:
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {(currentQuestion as GrammarQuestionData).item.explanation}
                        </Typography>
                    </Box>
                )}
            </Card>

            {/* Exit Confirmation Dialog */}
            <Dialog open={showExitDialog} onClose={() => setShowExitDialog(false)}>
                <DialogTitle>Exit {quizType === 'vocab' ? 'Vocab' : 'Grammar'} Quiz?</DialogTitle>
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

export default ExerciseMode;
