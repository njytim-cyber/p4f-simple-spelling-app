import { Box, Paper, Stack, Typography, LinearProgress } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType } from '../data/exercises';
import { EDITING_EXERCISES } from '../data/editing-exercises';

interface ExercisesDashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
}

export default function ExercisesDashboard({ onSelect, history }: ExercisesDashboardProps) {
    // Get all editing exercise IDs
    const editingExerciseIds = Object.keys(EDITING_EXERCISES).sort();

    // Calculate completed exercises from history
    const completedEditingExercises = new Set(
        history
            .filter(record => record.type === 'editing' && record.score === record.total)
            .map(record => record.exerciseId)
    );

    // Calculate overall exercise stats
    // const vocabAttempts = history.filter(r => r.type === 'vocab').length;
    const grammarAttempts = history.filter(r => r.type === 'grammar').length;
    const editingCompleted = completedEditingExercises.size;
    const totalEditingExercises = editingExerciseIds.length;

    // Target sessions for vocab and grammar
    // const TARGET_VOCAB_SESSIONS = 50;
    const TARGET_GRAMMAR_SESSIONS = 50;

    // Overall progress calculation (simple: sum of all activities)
    const totalActivities = grammarAttempts + editingCompleted;
    const possibleActivities = totalEditingExercises + TARGET_GRAMMAR_SESSIONS;
    const overallProgress = Math.min((totalActivities / possibleActivities) * 100, 100);

    // Dynamic motivational messages based on progress
    const getMotivationalMessage = () => {
        const messages = {
            starter: [
                "Let's get started!",
                "Ready to learn?",
                "Time to practice!",
                "You've got this!",
                "Let's do this!"
            ],
            progress: [
                "Keep it up!",
                "You're doing great!",
                "Nice progress!",
                "Keep going!",
                "Well done so far!"
            ],
            advanced: [
                "Amazing work!",
                "You're on fire!",
                "Fantastic progress!",
                "Outstanding effort!",
                "Keep shining!"
            ],
            expert: [
                "You're a star!",
                "Incredible work!",
                "Exceptional skills!",
                "You're crushing it!",
                "Phenomenal progress!"
            ]
        };

        let category: keyof typeof messages;
        if (totalActivities === 0) category = 'starter';
        else if (totalActivities < 15) category = 'progress';
        else if (totalActivities < 40) category = 'advanced';
        else category = 'expert';

        const options = messages[category];
        // Use total activities as seed for consistent message during session
        const index = totalActivities % options.length;
        return options[index];
    };

    // Find next editing exercise
    const nextExerciseId = editingExerciseIds.find(id => !completedEditingExercises.has(id)) || editingExerciseIds[0];

    const handleStartEditing = () => {
        const exercise: Exercise = {
            id: nextExerciseId,
            title: nextExerciseId,
            date: '',
            spelling: [],
            dictation: '',
            editing: EDITING_EXERCISES[nextExerciseId]
        };
        onSelect(exercise, 'editing');
    };

    // const handleStartVocab = () => {
    //     onSelect({
    //         id: 'vocab-p4',
    //         title: 'Vocabulary Quiz',
    //         date: '',
    //         spelling: [],
    //         dictation: '',
    //     }, 'vocab');
    // };

    const handleStartGrammar = () => {
        onSelect({
            id: 'grammar-quiz',
            title: 'Grammar Quiz',
            date: '',
            spelling: [],
            dictation: '',
        }, 'grammar');
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: { xs: 2, md: 3 },
                bgcolor: '#f8f9fa',
                border: '1px solid #e0e0e0'
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: { xs: 1.5, md: 2 } }}>
                <TrendingUp sx={{ color: 'primary.main', fontSize: { xs: 24, md: 28 } }} />
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                    {getMotivationalMessage()}
                </Typography>
            </Stack>

            <Box sx={{ mb: { xs: 1.5, md: 2 } }}>
                <LinearProgress
                    variant="determinate"
                    value={overallProgress}
                    sx={{
                        height: { xs: 8, md: 10 },
                        borderRadius: 5,
                        bgcolor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            bgcolor: 'primary.main'
                        }
                    }}
                />
            </Box>

            <Stack
                direction="row"
                spacing={{ xs: 2, sm: 3 }}
                justifyContent="space-around"
            >
                <Box
                    onClick={handleStartEditing}
                    sx={{
                        flex: 1,
                        textAlign: 'center',
                        cursor: 'pointer',
                        p: { xs: 1.5, md: 2 },
                        borderRadius: { xs: 1.5, md: 2 },
                        border: '2px solid',
                        borderColor: 'rgba(103, 80, 164, 0.2)',
                        bgcolor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(103, 80, 164, 0.04)',
                            boxShadow: '0 4px 12px rgba(103, 80, 164, 0.2)',
                            transform: { md: 'translateY(-2px)' }
                        },
                        '&:active': {
                            transform: 'translateY(0px)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="primary"
                        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                    >
                        {editingCompleted}/{totalEditingExercises}
                    </Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' } }}
                    >
                        Editing
                    </Typography>
                </Box>
                {/* Vocab card temporarily hidden - needs better questions */}
                {/* <Box
                    onClick={handleStartVocab}
                    sx={{
                        flex: 1,
                        textAlign: 'center',
                        cursor: 'pointer',
                        p: { xs: 1.5, md: 2 },
                        borderRadius: { xs: 1.5, md: 2 },
                        border: '2px solid',
                        borderColor: 'rgba(103, 80, 164, 0.2)',
                        bgcolor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(103, 80, 164, 0.04)',
                            boxShadow: '0 4px 12px rgba(103, 80, 164, 0.2)',
                            transform: { md: 'translateY(-2px)' }
                        },
                        '&:active': {
                            transform: 'translateY(0px)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="primary"
                        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                    >
                        {vocabAttempts}/{TARGET_VOCAB_SESSIONS}
                    </Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' } }}
                    >
                        Vocab
                    </Typography>
                </Box> */}
                <Box
                    onClick={handleStartGrammar}
                    sx={{
                        flex: 1,
                        textAlign: 'center',
                        cursor: 'pointer',
                        p: { xs: 1.5, md: 2 },
                        borderRadius: { xs: 1.5, md: 2 },
                        border: '2px solid',
                        borderColor: 'rgba(103, 80, 164, 0.2)',
                        bgcolor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(103, 80, 164, 0.04)',
                            boxShadow: '0 4px 12px rgba(103, 80, 164, 0.2)',
                            transform: { md: 'translateY(-2px)' }
                        },
                        '&:active': {
                            transform: 'translateY(0px)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="primary"
                        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                    >
                        {grammarAttempts}/{TARGET_GRAMMAR_SESSIONS}
                    </Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' } }}
                    >
                        Grammar
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}
