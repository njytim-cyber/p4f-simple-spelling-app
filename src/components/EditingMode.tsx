import { useState, useMemo, useEffect } from 'react';
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Container,
    Stack,
    LinearProgress,
    IconButton,
    Card,
} from '@mui/material';
import {
    ArrowBack,
} from '@mui/icons-material';
import { Exercise } from '../data/exercises';
import Confetti from 'react-confetti';
import { playVictorySound } from '../utils/sounds';

interface EditingModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number, missedItems: string[]) => void;
    onBack: () => void;
}

interface Segment {
    type: 'text' | 'error';
    content: string;
    answer?: string;
    id?: number;
}

// Helper to interact with browser window size for confetti
function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}

export default function EditingMode({ exercise, onComplete, onBack }: EditingModeProps) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [attemptCount, setAttemptCount] = useState<Record<number, number>>({});
    const [showConfetti, setShowConfetti] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const { width, height } = useWindowSize();

    // Parse the markup: "text {wrong|right} text"
    const segments = useMemo(() => {
        if (!exercise.editing) return [];

        const parts: Segment[] = [];
        const regex = /\{([^|]+)\|([^}]+)\}/g;
        let lastIndex = 0;
        let match;
        let errorCount = 0;

        while ((match = regex.exec(exercise.editing)) !== null) {
            // Add text before the match
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: exercise.editing.substring(lastIndex, match.index)
                });
            }

            // Add the error segment
            parts.push({
                type: 'error',
                content: match[1], // wrong word
                answer: match[2],  // correct word
                id: errorCount++
            });

            lastIndex = regex.lastIndex;
        }

        // Add remaining text
        if (lastIndex < exercise.editing.length) {
            parts.push({
                type: 'text',
                content: exercise.editing.substring(lastIndex)
            });
        }

        return parts;
    }, [exercise.editing]);

    const errorSegments = segments.filter(s => s.type === 'error');
    const totalQuestions = errorSegments.length;
    const totalPossible = totalQuestions * 2;

    const handleCheck = () => {
        // Calculate score with 2-point system
        let score = 0;
        const missed: string[] = [];
        const newAttemptCount = { ...attemptCount };

        errorSegments.forEach(seg => {
            const userAnswer = (answers[seg.id!] || '').trim().toLowerCase();
            const correctAnswer = (seg.answer || '').trim().toLowerCase();

            if (userAnswer === correctAnswer) {
                // Track attempts for this question
                const attempts = (attemptCount[seg.id!] || 0) + 1;
                newAttemptCount[seg.id!] = attempts;

                // 2 points for first try, 1 point for retry
                const points = attempts === 1 ? 2 : 1;
                score += points;
            } else {
                // Track failed attempt
                newAttemptCount[seg.id!] = (attemptCount[seg.id!] || 0) + 1;
                missed.push(`${seg.answer} (not ${seg.content})`);
            }
        });

        setAttemptCount(newAttemptCount);

        // Show confetti if perfect score
        if (missed.length === 0) {
            setShowConfetti(true);
        }

        // Show results immediately
        setShowResults(true);
    };

    // Calculate progress
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / totalQuestions) * 100;

    // Calculate final score and missed items for results
    const calculateResults = () => {
        let score = 0;
        const missed: string[] = [];
        errorSegments.forEach(seg => {
            const userAnswer = (answers[seg.id!] || '').trim().toLowerCase();
            const correctAnswer = (seg.answer || '').trim().toLowerCase();
            if (userAnswer === correctAnswer) {
                const attempts = attemptCount[seg.id!] || 1;
                const points = attempts === 1 ? 2 : 1;
                score += points;
            } else {
                missed.push(`${seg.answer}`);
            }
        });
        return { score, missed };
    };

    // Play victory sound on results screen with perfect score
    useEffect(() => {
        if (showResults) {
            const { missed } = calculateResults();
            if (missed.length === 0) {
                playVictorySound();
            }
        }
    }, [showResults]);

    // Results screen
    if (showResults) {
        const { score, missed } = calculateResults();
        return (
            <Container
                maxWidth="sm"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    pt: { xs: 2, sm: 4 },
                    pb: { xs: 2, sm: 4 },
                    px: { xs: 1, sm: 2 }
                }}
            >
                {showConfetti && <Confetti width={width} height={height} recycle={false} />}
                <Typography
                    variant="h4"
                    gutterBottom
                    fontWeight="bold"
                    textAlign="center"
                    sx={{
                        userSelect: 'none',
                        fontSize: { xs: '1.5rem', sm: '2.125rem' }
                    }}
                >
                    Review
                </Typography>
                <Card
                    sx={{
                        p: { xs: 2, sm: 3, md: 4 },
                        borderRadius: { xs: 2, sm: 3 },
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 }, userSelect: 'none' }}>
                        <Typography
                            variant="h2"
                            color="primary"
                            fontWeight="bold"
                            sx={{ fontSize: { xs: '2.5rem', sm: '3.75rem' } }}
                        >
                            {score} / {totalPossible}
                        </Typography>
                        <Typography
                            color="text.secondary"
                            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                        >
                            Points
                        </Typography>
                    </Box>

                    {missed.length > 0 ? (
                        <>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="error"
                                sx={{
                                    userSelect: 'none',
                                    fontSize: { xs: '1rem', sm: '1.25rem' }
                                }}
                            >
                                Corrections to Review:
                            </Typography>
                            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                                {missed.map((item, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            mb: 1,
                                            p: { xs: 1, sm: 1.5 },
                                            bgcolor: '#f5f5f5',
                                            borderRadius: 1,
                                            userSelect: 'none'
                                        }}
                                    >
                                        <Typography
                                            fontWeight="bold"
                                            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                py: { xs: 3, sm: 4 }
                            }}
                        >
                            <Typography
                                variant="h5"
                                color="success.main"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                            >
                                Perfect Score! 🏆
                            </Typography>
                            <Typography
                                color="text.secondary"
                                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                            >
                                You found all the corrections.
                            </Typography>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        autoFocus
                        sx={{
                            mt: { xs: 2, sm: 4 },
                            py: { xs: 1.5, sm: 2 },
                            fontSize: { xs: '0.875rem', sm: '1rem' }
                        }}
                        onClick={() => onComplete(score, totalPossible, missed)}
                    >
                        Return to Dashboard
                    </Button>
                </Card>
            </Container>
        );
    }

    return (
        <Container
            maxWidth="md"
            sx={{
                py: { xs: 1, sm: 2 },
                px: { xs: 1, sm: 2 },
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {showConfetti && <Confetti width={width} height={height} recycle={false} />}

            {/* Header */}
            <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }} sx={{ mb: { xs: 1, sm: 2 } }}>
                <IconButton onClick={onBack} size="small">
                    <ArrowBack />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        Editing
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{ height: { xs: 4, sm: 6 }, borderRadius: 3, mt: 0.5 }}
                    />
                </Box>
            </Stack>

            {/* Content Card */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 1.5, sm: 2, md: 3 },
                    flexGrow: 1,
                    overflowY: 'auto',
                    borderRadius: { xs: 2, sm: 3 },
                    border: '1px solid #eee',
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: { xs: 2, sm: 2.1, md: 2.2 },
                    fontFamily: '"Gentium Book Plus", serif',
                }}
            >
                <Typography component="div" sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
                    {segments.map((seg, i) => {
                        if (seg.type === 'text') {
                            // Preserve newlines
                            return seg.content.split('\n').map((line, lineIdx, arr) => (
                                <span key={`${i}-${lineIdx}`}>
                                    {line}
                                    {lineIdx < arr.length - 1 && <br />}
                                    {lineIdx < arr.length - 1 && <br />}
                                </span>
                            ));
                        } else {
                            return (
                                <Box
                                    component="span"
                                    key={i}
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'baseline',
                                        flexWrap: 'wrap',
                                        mx: { xs: 0.25, sm: 0.5 },
                                        position: 'relative',
                                        verticalAlign: 'baseline',
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            position: 'relative',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 2,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                bgcolor: 'error.main',
                                            }
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            fontWeight="bold"
                                            color="error.main"
                                            sx={{ fontSize: 'inherit' }}
                                        >
                                            {seg.content}
                                        </Typography>
                                    </Box>

                                    {/* Input Field - Responsive */}
                                    <Box
                                        component="span"
                                        sx={{
                                            ml: { xs: 0.5, sm: 1 },
                                            display: 'inline-block',
                                        }}
                                    >
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            value={answers[seg.id!] || ''}
                                            onChange={(e) => setAnswers(prev => ({ ...prev, [seg.id!]: e.target.value }))}
                                            placeholder="..."
                                            sx={{
                                                width: {
                                                    xs: Math.min(100, Math.max(80, (seg.answer?.length || 5) * 12)) + 'px',
                                                    sm: Math.min(140, Math.max(100, (seg.answer?.length || 5) * 14)) + 'px',
                                                    md: Math.max(120, (seg.answer?.length || 5) * 16 + 40) + 'px'
                                                },
                                                '& .MuiInputBase-root': {
                                                    height: { xs: '1.75rem', sm: '2rem' },
                                                    fontSize: { xs: '0.875rem', sm: '1rem' },
                                                },
                                                '& input': {
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    padding: { xs: '4px 8px', sm: '6px 12px' }
                                                }
                                            }}
                                        />
                                    </Box>
                                </Box>
                            );
                        }
                    })}
                </Typography>
            </Paper>

            {/* Actions */}
            <Paper
                elevation={4}
                sx={{
                    mt: { xs: 1, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: 2, sm: 3 }
                }}
            >
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                        variant="contained"
                        size={window.innerWidth < 600 ? 'medium' : 'large'}
                        disabled={answeredCount === 0}
                        onClick={handleCheck}
                        sx={{
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1, sm: 1.5 },
                            borderRadius: 2,
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        Check
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}
