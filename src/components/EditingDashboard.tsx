import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { Exercise, ScoreRecord, ExerciseType } from '../data/exercises';
import { EDITING_EXERCISES } from '../data/editing-exercises';

interface EditingDashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
}

export default function EditingDashboard({ onSelect, history }: EditingDashboardProps) {
    const editingExerciseIds = Object.keys(EDITING_EXERCISES).sort();

    const completedExercises = new Set(
        history
            .filter(record => record.type === 'editing' && record.score === record.total)
            .map(record => record.exerciseId)
    );

    const totalExercises = editingExerciseIds.length;
    const completedCount = completedExercises.size;
    const progress = (completedCount / totalExercises) * 100;

    const nextExerciseId = editingExerciseIds.find(id => !completedExercises.has(id)) || editingExerciseIds[0];

    const handleStartNew = () => {
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

    return (
        <Paper
            elevation={0}
            onClick={handleStartNew}
            sx={{
                p: 3,
                borderRadius: 3,
                border: '2px solid',
                borderColor: 'primary.main',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(103, 80, 164, 0.3)',
                    '& .progress-text': {
                        color: 'white',
                    },
                    '& .exercise-title': {
                        color: 'white',
                    },
                    '& .MuiLinearProgress-root': {
                        bgcolor: 'rgba(255, 255, 255, 0.3)',
                    }
                }
            }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" className="progress-text">
                    Your Progress
                </Typography>
                <PlayArrow sx={{ fontSize: 28 }} className="progress-text" />
            </Stack>

            <Box sx={{ mb: 2 }}>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        height: 12,
                        borderRadius: 6,
                        bgcolor: '#f0f0f0',
                        '& .MuiLinearProgress-bar': {
                            borderRadius: 6,
                            bgcolor: 'success.main'
                        }
                    }}
                />
            </Box>

            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary" fontWeight="bold" className="progress-text">
                    {completedCount} of {totalExercises} exercises completed
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="primary.main" className="exercise-title">
                    {completedExercises.has(nextExerciseId)
                        ? `Retry ${nextExerciseId}`
                        : `Start ${nextExerciseId}`}
                </Typography>
            </Stack>
        </Paper>
    );
}
