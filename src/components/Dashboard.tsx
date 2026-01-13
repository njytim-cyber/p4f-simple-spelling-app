import { useState } from 'react';
import {
    Container,
    Typography,
    Button,
    Chip,
    Stack,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    List,
    ListItem,
    Divider,
    Paper,
    Grid,
} from '@mui/material';
import {
    Star,
    History as HistoryIcon,
    CheckCircle,
    RadioButtonUnchecked,
    Sync,
    ArrowBack,
} from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType, EXERCISES } from '../data/exercises';
import { motion } from 'framer-motion';

interface DashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
}

const Dashboard: React.FC<DashboardProps> = ({ onSelect, history }) => {
    const [openHistory, setOpenHistory] = useState(false);
    const [openSpellingList, setOpenSpellingList] = useState(false);
    const [currentReferenceIndex, setCurrentReferenceIndex] = useState(0);
    const getTotalXP = () => history.reduce((acc, curr) => acc + (curr.score * 10), 0);

    const getBestScore = (exerciseId: string, type: ExerciseType) => {
        const attempts = history.filter(h => h.exerciseId === exerciseId && h.type === type);
        if (attempts.length === 0) return null;
        return attempts.reduce((max, curr) => (curr.score > max.score ? curr : max), attempts[0]);
    };

    const StatusPill = ({ exId, type, label }: { exId: string, type: ExerciseType, label: string }) => {
        const best = getBestScore(exId, type);

        let textColor = 'text.secondary';
        let bgColor = '#f5f5f5';

        if (best) {
            if (best.score === best.total) {
                textColor = 'white';
                bgColor = 'success.main';
            } else {
                textColor = 'white';
                bgColor = 'secondary.main';
            }
        }

        return (
            <Chip
                label={label}
                icon={best ? (best.score === best.total ? <CheckCircle sx={{ color: 'white !important' }} /> : <Sync sx={{ color: 'white !important' }} />) : <RadioButtonUnchecked />}
                onClick={() => onSelect(EXERCISES.find(e => e.id === exId)!, type)}
                sx={{
                    fontWeight: 'bold',
                    bgcolor: bgColor,
                    color: textColor,
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.9 },
                    '& .MuiChip-icon': { color: best ? 'white' : 'inherit' }
                }}
            />
        );
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={6}>
                <Box>
                    <Typography variant="h4" color="primary" fontWeight="800" component={motion.h4} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        Hello! 👋
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Ready to ace your spelling today?
                    </Typography>
                </Box>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <IconButton
                        title="Spelling Lists"
                        onClick={() => setOpenSpellingList(true)}
                        sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' }, fontSize: '1.2rem' }}
                    >
                        📑
                    </IconButton>
                    <IconButton
                        title="Activity Log"
                        onClick={() => setOpenHistory(true)}
                        sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' }, fontSize: '1.2rem' }}
                    >
                        📈
                    </IconButton>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${getTotalXP()} XP`}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            py: 2.5,
                            px: 1,
                            borderRadius: 2,
                        }}
                    />
                </Stack>
            </Stack>

            {/* List Section */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3, opacity: 0.7 }}>
                UPCOMING TESTS
            </Typography>

            <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #eee' }}>
                <List disablePadding>
                    {EXERCISES.map((ex, index) => (
                        <Box key={ex.id}>
                            <ListItem
                                sx={{
                                    py: 3,
                                    px: 4,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '&:hover': { bgcolor: '#fafafa' },
                                }}
                                component={motion.div}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        {ex.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Due {ex.date}
                                    </Typography>
                                </Box>
                                <Stack direction="row" spacing={1}>
                                    <StatusPill exId={ex.id} type="spelling" label="Spelling" />
                                    <StatusPill exId={ex.id} type="dictation" label="Dictation" />
                                </Stack>
                            </ListItem>
                            {index < EXERCISES.length - 1 && <Divider />}
                        </Box>
                    ))}
                </List>
            </Paper>

            {/* Spelling List Dialog */}
            <Dialog open={openSpellingList} onClose={() => setOpenSpellingList(false)} fullWidth maxWidth="md">
                <DialogTitle sx={{ fontWeight: '800', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Master Spelling List
                    <Typography variant="caption" color="text.secondary">
                        Week {currentReferenceIndex + 1} of {EXERCISES.length}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers sx={{ minHeight: 400, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton
                            onClick={() => setCurrentReferenceIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentReferenceIndex === 0}
                            sx={{ mr: 2 }}
                        >
                            <ArrowBack />
                        </IconButton>

                        <motion.div
                            key={currentReferenceIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            style={{ flexGrow: 1 }}
                        >
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                                    {EXERCISES[currentReferenceIndex].title}
                                </Typography>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Paper elevation={0} sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, height: '100%' }}>
                                            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold', display: 'block', mb: 2 }}>
                                                Spelling Phrases
                                            </Typography>
                                            <List dense>
                                                {EXERCISES[currentReferenceIndex].spelling.map((item) => (
                                                    <ListItem key={item.id} sx={{ px: 0, py: 1 }}>
                                                        <Typography variant="body1" fontWeight="500">• {item.phrase}</Typography>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper elevation={0} sx={{ p: 2, bgcolor: '#fff3e0', borderRadius: 2, height: '100%' }}>
                                            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold', display: 'block', mb: 2 }}>
                                                Dictation Text
                                            </Typography>
                                            <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic' }}>
                                                "{EXERCISES[currentReferenceIndex].dictation}"
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </motion.div>

                        <IconButton
                            onClick={() => setCurrentReferenceIndex(prev => Math.min(EXERCISES.length - 1, prev + 1))}
                            disabled={currentReferenceIndex === EXERCISES.length - 1}
                            sx={{ ml: 2, transform: 'rotate(180deg)' }}
                        >
                            <ArrowBack />
                        </IconButton>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
                    <Button onClick={() => setOpenSpellingList(false)} variant="contained" sx={{ borderRadius: 2, py: 1, px: 4 }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* History Dialog */}
            <Dialog open={openHistory} onClose={() => setOpenHistory(false)} fullWidth maxWidth="sm">
                <DialogTitle sx={{ fontWeight: '800' }}>Activity history</DialogTitle>
                <DialogContent dividers>
                    {history.length === 0 ? (
                        <Box sx={{ textAlign: 'center', py: 6 }}>
                            <HistoryIcon sx={{ fontSize: 60, color: 'action.disabled', mb: 2 }} />
                            <Typography color="text.secondary">No activity yet. Go for it!</Typography>
                        </Box>
                    ) : (
                        <List disablePadding>
                            {[...history].reverse().map((record, i) => {
                                const exercise = EXERCISES.find(e => e.id === record.exerciseId);
                                const isPerfect = record.score === record.total;
                                return (
                                    <Box key={i}>
                                        <ListItem sx={{ py: 2, px: 0 }}>
                                            <Stack width="100%">
                                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                    <Box>
                                                        <Typography fontWeight="bold">{exercise?.title}</Typography>
                                                        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                                                            {record.type} • {record.date} at {record.time}
                                                        </Typography>
                                                    </Box>
                                                    <Chip
                                                        label={`${record.score}/${record.total}`}
                                                        color={isPerfect ? 'success' : 'default'}
                                                        variant={isPerfect ? 'filled' : 'outlined'}
                                                        size="small"
                                                        sx={{ fontWeight: 'bold' }}
                                                    />
                                                </Stack>
                                                {!isPerfect && record.missedItems && record.missedItems.length > 0 && (
                                                    <Box sx={{ mt: 1, p: 1, bgcolor: '#fff5f5', borderRadius: 1, borderLeft: '3px solid', borderColor: 'error.main' }}>
                                                        <Typography variant="caption" color="error.main" fontWeight="bold" display="block" mb={0.5}>
                                                            MISSED ITEMS:
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                                                            {record.missedItems.join(', ')}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Stack>
                                        </ListItem>
                                        {i < history.length - 1 && <Divider />}
                                    </Box>
                                );
                            })}
                        </List>
                    )}
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setOpenHistory(false)} fullWidth variant="contained" sx={{ borderRadius: 2, py: 1.5 }}>
                        Finish
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Dashboard;
