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
} from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType, EXERCISES } from '../data/exercises';
import { APP_VERSION, CHANGELOG } from '../data/version';
import { motion } from 'framer-motion';

interface DashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
}

const Dashboard: React.FC<DashboardProps> = ({ onSelect, history }) => {
    const [openHistory, setOpenHistory] = useState(false);
    const [openSpellingList, setOpenSpellingList] = useState(false);
    const [openChangelog, setOpenChangelog] = useState(false);
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

        // Add data attribute for first exercise only (for onboarding)
        const isFirstExercise = exId === EXERCISES[0]?.id;
        const dataAttr = isFirstExercise ? { 'data-onboarding': type } : {};

        return (
            <Chip
                {...dataAttr}
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

    // Filter changelog for v1.2.0 and above
    // Simple check: we assume versions are 'x.y.z'
    // We want >= 1.2
    const recentChanges = CHANGELOG.filter(entry => {
        const [major, minor] = entry.version.split('.').map(Number);
        return major > 1 || (major === 1 && minor >= 2);
    });

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={6}>
                <Box>
                    <Typography variant="h4" color="primary" fontWeight="800">
                        Hi! 👋
                    </Typography>
                    <Typography variant="caption" color="text.secondary" fontWeight="bold">
                        v{APP_VERSION}
                    </Typography>
                </Box>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <IconButton
                        title="Version History"
                        onClick={() => setOpenChangelog(true)}
                        sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' }, fontSize: '1.2rem' }}
                    >
                        ℹ️
                    </IconButton>
                    <IconButton
                        data-onboarding="spelling-list"
                        title="Spelling Lists"
                        onClick={() => setOpenSpellingList(true)}
                        sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' }, fontSize: '1.2rem' }}
                    >
                        📑
                    </IconButton>
                    <IconButton
                        data-onboarding="activity-log"
                        title="Activity Log"
                        onClick={() => setOpenHistory(true)}
                        sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' }, fontSize: '1.2rem' }}
                    >
                        📈
                    </IconButton>
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${getTotalXP()}`}
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
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, opacity: 0.7 }}>
                Ready to ace your spelling today?
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 3 }}>
                This is a lightweight application. Progress is stored locally on your device.
            </Typography>

            {/* ... Rest of key components (Paper, Dialogs) ... */}
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
                                        {ex.date}
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
                <DialogTitle sx={{ fontWeight: '800' }}>Master Spelling List</DialogTitle>
                <DialogContent dividers>
                    <List disablePadding>
                        {EXERCISES.map((ex, i) => (
                            <Box key={ex.id} sx={{ mb: i < EXERCISES.length - 1 ? 4 : 0 }}>
                                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    {ex.title}
                                </Typography>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={5}>
                                        <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                            Spelling Phrases
                                        </Typography>
                                        <List dense>
                                            {ex.spelling.map((item) => (
                                                <ListItem key={item.id} sx={{ px: 0, py: 0.5 }}>
                                                    <Typography variant="body2">• {item.phrase}</Typography>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                            Dictation Text
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontStyle: 'italic', bgcolor: '#f9f9f9', p: 1.5, borderRadius: 1 }}>
                                            "{ex.dictation}"
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {i < EXERCISES.length - 1 && <Divider sx={{ mt: 3 }} />}
                            </Box>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setOpenSpellingList(false)} fullWidth variant="contained" sx={{ borderRadius: 2, py: 1.5 }}>
                        Got it
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

            {/* Changelog Dialog */}
            <Dialog open={openChangelog} onClose={() => setOpenChangelog(false)} fullWidth maxWidth="sm">
                <DialogTitle sx={{ fontWeight: '800' }}>What's New</DialogTitle>
                <DialogContent dividers>
                    <List disablePadding>
                        {recentChanges.map((entry, i) => (
                            <Box key={entry.version}>
                                <ListItem sx={{ px: 0, flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                                    <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center" mb={1}>
                                        <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                            v{entry.version}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {entry.date}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
                                        {entry.title}
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {entry.changes.map((change, idx) => (
                                            <li key={idx}>
                                                <Typography variant="body2" color="text.secondary">
                                                    {change}
                                                </Typography>
                                            </li>
                                        ))}
                                    </Box>
                                </ListItem>
                                {i < recentChanges.length - 1 && <Divider />}
                            </Box>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setOpenChangelog(false)} fullWidth variant="contained" sx={{ borderRadius: 2, py: 1.5 }}>
                        Cool!
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Dashboard;
