import { useState, useRef } from 'react';
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
    Tabs,
    Tab,
} from '@mui/material';
import {
    Star,
    History as HistoryIcon,
    CheckCircle,
    RadioButtonUnchecked,
    Sync,
    EditCalendar,
} from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType, EXERCISES } from '../data/exercises';
import { CHANGELOG } from '../data/version';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';
import { chunkText } from '../utils/speech';

interface DashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
}

const STORAGE_KEY_DATES = 'p4_exercises_dates';

const Dashboard: React.FC<DashboardProps> = ({ onSelect, history }) => {
    const [openHistory, setOpenHistory] = useState(false);
    const [openSpellingList, setOpenSpellingList] = useState(false);
    const [openChangelog, setOpenChangelog] = useState(false);
    const [openEditDates, setOpenEditDates] = useState(false);
    const [infoTab, setInfoTab] = useState(0);

    // Initialize exercises from storage or default
    const [exercises, setExercises] = useState<Exercise[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY_DATES);
        if (saved) {
            try {
                const textDates = JSON.parse(saved) as Record<string, string>;
                // Merge saved dates into default exercises
                return EXERCISES.map(ex => ({
                    ...ex,
                    date: textDates[ex.id] || ex.date
                }));
            } catch (e) {
                console.error("Failed to parse saved dates", e);
            }
        }
        return EXERCISES;
    });

    // Temp state for editing
    const [editDates, setEditDates] = useState<Record<string, string>>({});

    // Helper to format "24 Jan" or "24 Jan 2026" -> "YYYY-MM-DD" for input
    const toInputFormat = (dateStr: string) => {
        if (!dateStr) return '';
        try {
            // Check if year is already present (digits at end)
            const hasYear = /\d{4}$/.test(dateStr.trim());
            const fullDateStr = hasYear ? dateStr : `${dateStr} ${new Date().getFullYear()}`;

            const date = new Date(fullDateStr);
            if (isNaN(date.getTime())) return '';

            // Adjust for local timezone offset to prevent date shifting
            // or just use ISO string split if time is 00:00:00 local
            const offset = date.getTimezoneOffset() * 60000;
            const localDate = new Date(date.getTime() - offset);
            return localDate.toISOString().split('T')[0];
        } catch (e) {
            return '';
        }
    };

    // Helper to format "YYYY-MM-DD" -> "24 Jan" (or "24 Jan 2026" if needed) for display/storage
    const toDisplayFormat = (isoDate: string) => {
        if (!isoDate) return '';
        try {
            const date = new Date(isoDate);
            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        } catch (e) {
            return isoDate;
        }
    };

    const handleOpenEditDates = () => {
        const currentDates: Record<string, string> = {};
        // Store as YYYY-MM-DD in the edit state for easy binding to input
        exercises.forEach(ex => {
            currentDates[ex.id] = toInputFormat(ex.date);
        });
        setEditDates(currentDates);
        setOpenEditDates(true);
    };

    const handleSaveDates = () => {
        const newExercises = exercises.map(ex => ({
            ...ex,
            // Convert back to "24 Jan" format when saving
            date: editDates[ex.id] ? toDisplayFormat(editDates[ex.id]) : ex.date
        }));
        setExercises(newExercises);

        const dateMap: Record<string, string> = {};
        newExercises.forEach(ex => dateMap[ex.id] = ex.date);
        localStorage.setItem(STORAGE_KEY_DATES, JSON.stringify(dateMap));

        setOpenEditDates(false);
    };



    // ... (existing imports)

    // Helper to normalize history records for display
    // Handles transition from 1-point system to 2-point tiered system
    const getNormalizedRecord = (record: ScoreRecord) => {
        // Find reference exercise to get true item count
        const refEx = exercises.find(e => e.id === record.exerciseId);
        if (!refEx) return record; // Cannot normalize if ex not found

        const itemCount = record.type === 'spelling'
            ? refEx.spelling.length
            : chunkText(refEx.dictation).length;

        const isToday = record.date === new Date().toLocaleDateString();

        // CASE 1: Obvious Bug (Score > Total)
        // Happens when score used new logic (2pts) but total used old logic (1x)
        if (record.score > record.total) {
            return {
                ...record,
                total: record.total * 2
            };
        }

        // CASE 2: Potential Identity Crisis (Total == Item Count)
        // Could be Legacy (1pt max) OR Bugged New (2pt max, wrongly saved total)
        if (record.total === itemCount) {
            if (!isToday) {
                // Legacy Record (Old logic)
                // Normalize to new scale (x2) so 5/5 becomes 10/10
                return {
                    ...record,
                    score: record.score * 2,
                    total: record.total * 2
                };
            } else {
                // Bugged New Record (likely from today's session before fix)
                // Score is already 2-point based (e.g. 2 for 1 correct), Total is 1x
                // Fix total only: 2/5 -> 2/10
                return {
                    ...record,
                    total: record.total * 2
                };
            }
        }

        return record;
    };


    const getTotalXP = () => history.reduce((acc, curr) => {
        const norm = getNormalizedRecord(curr);
        // If we want XP to be consistent, we might calculate based on norm score?
        // But let's stick to saved score * 10 for simplicity unless huge disparity
        // Actually, if legacy 5/5 -> 50XP. New 10/10 -> 100XP.
        // Users might prefer the boost. Let's use normalized score for XP!
        return acc + (norm.score * 10);
    }, 0);

    const getBestScore = (exerciseId: string, type: ExerciseType) => {
        const attempts = history
            .filter(h => h.exerciseId === exerciseId && h.type === type)
            .map(getNormalizedRecord);

        if (attempts.length === 0) return null;
        return attempts.reduce((max, curr) => (curr.score > max.score ? curr : max), attempts[0]);
    };

    // ... inside the render ...
    // Update the history list mapping:
    // ...


    const StatusTarget = ({ exId, type }: { exId: string, type: ExerciseType }) => {
        const best = getBestScore(exId, type);

        let icon = <RadioButtonUnchecked />;
        let color = 'text.disabled';

        if (best) {
            if (best.score === best.total) {
                icon = <CheckCircle />;
                color = 'success.main';
            } else {
                icon = <Sync />;
                color = 'secondary.main';
            }
        }

        // Add data attribute for first exercise only (for onboarding)
        const isFirstExercise = exId === EXERCISES[0]?.id;
        const dataAttr = isFirstExercise ? { 'data-onboarding': type } : {};

        return (
            <IconButton
                {...dataAttr}
                onClick={() => onSelect(exercises.find(e => e.id === exId)!, type)}
                sx={{
                    color: color,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.2)', bgcolor: 'rgba(0,0,0,0.04)' }
                }}
            >
                {icon}
            </IconButton>
        );
    };

    // Filter changelog for v1.2.0 and above
    const recentChanges = CHANGELOG.filter(entry => {
        const [major, minor] = entry.version.split('.').map(Number);
        return major > 1 || (major === 1 && minor >= 2);
    });

    // Swipe Logic for Info Dialog
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    }

    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    }

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && infoTab === 0) setInfoTab(1);
        if (isRightSwipe && infoTab === 1) setInfoTab(0);
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Header */}
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={6}>
                <Typography
                    variant="h4"
                    color="primary"
                    fontWeight="800"
                    sx={{
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '1.75rem', sm: '2.125rem' }
                    }}
                >
                    Hi! 👋
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0}
                        sx={{ bgcolor: '#f5f5f5', borderRadius: 5, px: 0.5, py: 0.5 }}
                    >
                        <IconButton
                            title="Version History"
                            onClick={() => setOpenChangelog(true)}
                            sx={{ fontSize: '1.2rem' }}
                        >
                            ℹ️
                        </IconButton>
                        <IconButton
                            data-onboarding="spelling-list"
                            title="Spelling Lists"
                            onClick={() => setOpenSpellingList(true)}
                            sx={{ fontSize: '1.2rem' }}
                        >
                            📑
                        </IconButton>
                        <IconButton
                            data-onboarding="activity-log"
                            title="Activity Log"
                            onClick={() => setOpenHistory(true)}
                            sx={{ fontSize: '1.2rem' }}
                        >
                            📈
                        </IconButton>
                    </Stack>

                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${getTotalXP()}`}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            height: 32,
                            px: 1,
                            borderRadius: 4,
                        }}
                    />
                </Stack>
            </Stack>

            {/* List Section */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, opacity: 0.7 }}>
                Ready to ace your spelling today?
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 1 }}>
                Privacy First: We don't send your data to a server; it lives right here on your device. Just remember: if you clear your browser data, your progress goes with it!
            </Typography>



            <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #eee' }}>
                {/* Column Header */}
                <Box sx={{
                    py: 1.5,
                    px: 3,
                    bgcolor: '#fcfcfc',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="subtitle2" fontWeight="bold" color="text.secondary" sx={{ width: 40 }}>
                            #
                        </Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                            <Typography variant="subtitle2" fontWeight="bold" color="text.secondary">
                                Date
                            </Typography>
                            <IconButton
                                size="small"
                                onClick={handleOpenEditDates}
                                sx={{ color: 'text.secondary', p: 0.5, '&:hover': { color: 'primary.main' } }}
                                title="Edit Dates"
                            >
                                <EditCalendar sx={{ fontSize: '1rem' }} />
                            </IconButton>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ width: 60, textAlign: 'center' }}>
                            Spelling
                        </Typography>
                        <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ width: 60, textAlign: 'center' }}>
                            Dictation
                        </Typography>
                    </Stack>
                </Box>

                <List disablePadding>
                    {exercises.map((ex, index) => (
                        <Box key={ex.id}>
                            <ListItem
                                sx={{
                                    py: 1.0,
                                    px: 3,
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
                                <Stack direction="row" spacing={2} alignItems="baseline">
                                    <Typography variant="subtitle2" fontWeight="bold" color="text.secondary" sx={{ width: 40 }}>
                                        {ex.title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" fontWeight="bold">
                                        {ex.date}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Box sx={{ width: 60, display: 'flex', justifyContent: 'center' }}>
                                        <StatusTarget exId={ex.id} type="spelling" />
                                    </Box>
                                    <Box sx={{ width: 60, display: 'flex', justifyContent: 'center' }}>
                                        <StatusTarget exId={ex.id} type="dictation" />
                                    </Box>
                                </Stack>
                            </ListItem>
                            {index < exercises.length - 1 && <Divider />}
                        </Box>
                    ))}
                </List>
            </Paper>

            {/* Edit Dates Dialog */}
            <Dialog open={openEditDates} onClose={() => setOpenEditDates(false)} fullWidth maxWidth="xs">
                <DialogTitle sx={{ fontWeight: '800' }}>Edit Dates</DialogTitle>
                <DialogContent dividers>
                    <Stack spacing={2} sx={{ pt: 1 }}>
                        {exercises.map((ex) => (
                            <TextField
                                key={ex.id}
                                label={`Date for ${ex.title}`}
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={editDates[ex.id] || ''}
                                onChange={(e) => setEditDates(prev => ({ ...prev, [ex.id]: e.target.value }))}
                                size="small"
                                fullWidth
                            />
                        ))}
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setOpenEditDates(false)} color="inherit">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveDates} variant="contained" sx={{ borderRadius: 2 }}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

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
                            {[...history].reverse().map((rawRecord, i) => {
                                const record = getNormalizedRecord(rawRecord);
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

            {/* Info / About Dialog */}
            <Dialog
                open={openChangelog}
                onClose={() => setOpenChangelog(false)}
                fullWidth
                maxWidth="sm"
                scroll="paper"
            >
                <DialogTitle sx={{ fontWeight: '800', pb: 0 }}>
                    About this App
                </DialogTitle>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tabs value={infoTab} onChange={(_, v) => setInfoTab(v)} aria-label="info tabs">
                        <Tab label="About" sx={{ fontWeight: 'bold' }} />
                        <Tab label="What's New" sx={{ fontWeight: 'bold' }} />
                    </Tabs>
                </Box>

                <DialogContent dividers sx={{ p: 0 }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {infoTab === 0 && (
                        <Box sx={{ p: 3 }}>
                            <Typography variant="h6" color="primary" gutterBottom fontWeight="bold">
                                Why we built this
                            </Typography>
                            <Typography variant="body2" paragraph color="text.secondary">
                                We created this to help our kids take charge of their learning. It provides a calm, focused way to master spelling without the stress.
                            </Typography>

                            <Typography variant="h6" color="primary" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
                                Privacy First
                            </Typography>
                            <Typography variant="body2" paragraph color="text.secondary">
                                This application is "Local-First." That means your scores, progress, and settings are stored locally on this specific device. We don't have a database, and we don't track you. If you clear your browser data, you get a fresh start.
                            </Typography>

                            <Typography variant="h6" color="primary" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
                                Under the Hood
                            </Typography>
                            <Typography variant="body2" paragraph color="text.secondary">
                                Powering this lightweight experience is <strong>React</strong> and <strong>TypeScript</strong>, delivered via <strong>Cloudflare</strong>. The voice is generated by <strong>Google Cloud Neural2 TTS</strong> (en-US-Neural2-F).
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This application was developed in <strong>Google Antigravity</strong> using <strong>Claude Opus 4.5 (Thinking)</strong> and <strong>Gemini 3 Pro (High)</strong>.
                            </Typography>
                        </Box>
                    )}

                    {infoTab === 1 && (
                        <List disablePadding>
                            {recentChanges.map((entry, i) => (
                                <Box key={entry.version}>
                                    <ListItem sx={{ px: 3, flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
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
                    )}
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
