import { useState, useRef, useEffect, useMemo, memo, useCallback } from 'react';
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
    Tooltip,
} from '@mui/material';
import {
    Star,
    History as HistoryIcon,
    CheckCircle,
    RadioButtonUnchecked,
    Sync,
    EditCalendar,
    Spellcheck,
    AutoFixHigh,
    History,
    Info,
} from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType, EXERCISES } from '../data/exercises';
import { CHANGELOG } from '../data/version';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';
import { chunkText } from '../utils/speech'
import ExercisesDashboard from './ExercisesDashboard';
import RevisionDashboard from './RevisionDashboard';

interface DashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
    onStartRevision?: (sourceTypes?: ExerciseType[]) => void;
    revisionDueCount?: number;
}

const STORAGE_KEY_DATES = 'p4_exercises_dates';
const STORAGE_KEY_PRIVACY_SEEN = 'p4_privacy_message_seen';
const STORAGE_KEY_ACTIVE_TAB = 'p4_active_tab';

const Dashboard: React.FC<DashboardProps> = ({ onSelect, history, onStartRevision }) => {
    const [openSpellingList, setOpenSpellingList] = useState(false);
    const [openEditDates, setOpenEditDates] = useState(false);
    const [infoTab, setInfoTab] = useState(0);
    const [showPrivacyMessage, setShowPrivacyMessage] = useState(false);

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
            } catch {
                console.error("Failed to parse saved dates");
            }
        }
        return EXERCISES;
    });

    // Temp state for editing
    const [editDates, setEditDates] = useState<Record<string, string>>({});
    const [activeTab, setActiveTab] = useState<'spelling' | 'exercises' | 'revision' | 'about'>(() => {
        const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_TAB);
        // Handle legacy tab names for backward compatibility
        if (saved && ['editing', 'vocab', 'grammar'].includes(saved)) {
            return 'exercises';
        }
        if (saved && ['spelling', 'exercises', 'revision', 'about'].includes(saved)) {
            return saved as 'spelling' | 'exercises' | 'revision' | 'about';
        }
        return 'spelling';
    });

    // Revision sub-tab state
    const [revisionTab, setRevisionTab] = useState(0);

    // Show privacy message on first visit
    useEffect(() => {
        const hasSeenPrivacyMessage = localStorage.getItem(STORAGE_KEY_PRIVACY_SEEN);
        if (!hasSeenPrivacyMessage) {
            setShowPrivacyMessage(true);
            localStorage.setItem(STORAGE_KEY_PRIVACY_SEEN, 'true');
        }
    }, []);

    // Save active tab to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_ACTIVE_TAB, activeTab);
    }, [activeTab]);

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
        } catch {
            return '';
        }
    };

    // Helper to format "YYYY-MM-DD" -> "24 Jan" (or "24 Jan 2026" if needed) for display/storage
    const toDisplayFormat = (isoDate: string) => {
        if (!isoDate) return '';
        try {
            const date = new Date(isoDate);
            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        } catch {
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

    // Helper to normalize history records for display
    // Handles transition from 1-point system to 2-point tiered system
    // Simplified: removed async lazy loading which caused issues
    const getNormalizedRecord = useCallback((record: ScoreRecord) => {
        // Find reference exercise to get true item count
        const refEx = exercises.find(e => e.id === record.exerciseId);

        if (!refEx) return record; // Cannot normalize if ex not found

        const itemCount = record.type === 'spelling'
            ? (refEx?.spelling.length || 0)
            : record.type === 'dictation'
                ? chunkText(refEx?.dictation || '').length
                : record.total; // For vocab/grammar/editing, use total as-is

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
    }, [exercises]);


    // Memoize total XP calculation to prevent recalculation on every render
    const totalXP = useMemo(() => {
        return history.reduce((acc, curr) => {
            const norm = getNormalizedRecord(curr);
            return acc + (norm.score * 10);
        }, 0);
    }, [history, getNormalizedRecord]);

    const getTotalXP = () => totalXP;

    // Memoize best scores to avoid recalculation
    const bestScores = useMemo(() => {
        const scores = new Map<string, ScoreRecord>();
        history.forEach(record => {
            const key = `${record.exerciseId}-${record.type}`;
            const normalized = getNormalizedRecord(record);
            const existing = scores.get(key);
            if (!existing || normalized.score > existing.score) {
                scores.set(key, normalized);
            }
        });
        return scores;
    }, [history, getNormalizedRecord]);

    const getBestScore = (exerciseId: string, type: ExerciseType) => {
        const key = `${exerciseId}-${type}`;
        return bestScores.get(key) || null;
    };

    // Memoized StatusTarget component to prevent unnecessary re-renders
    const StatusTarget = memo(({ exId, type }: { exId: string, type: ExerciseType }) => {
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

        const handleClick = useCallback(() => {
            const ex = exercises.find(e => e.id === exId);
            if (ex) onSelect(ex, type);
        }, [exId, type]);

        return (
            <IconButton
                {...dataAttr}
                onClick={handleClick}
                sx={{
                    color: color,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.2)', bgcolor: 'rgba(0,0,0,0.04)' }
                }}
            >
                {icon}
            </IconButton>
        );
    });

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

    // Swipe Logic for Revision Tab
    const onRevisionTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && revisionTab === 0) setRevisionTab(1);
        if (isRightSwipe && revisionTab === 1) setRevisionTab(0);
    }

    return (
        <Box sx={{ pb: 10 }}> {/* Add padding to bottom for footer */}
            <Dialog
                open={showPrivacyMessage}
                onClose={() => setShowPrivacyMessage(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle sx={{ fontWeight: 'bold' }}>Privacy First</DialogTitle>
                <DialogContent>
                    <Typography>
                        We don't send your data to a server; it lives right here on your device. Just remember: if you clear your browser data, your progress goes with it!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setShowPrivacyMessage(false)}
                        variant="contained"
                        autoFocus
                    >
                        Got it
                    </Button>
                </DialogActions>
            </Dialog>
            <Container maxWidth="sm" sx={{ py: 4 }}>
                {/* Header Section */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={6}>
                    <Typography
                        variant="h4"
                        color="primary"
                        fontWeight="800"
                        sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '1.75rem', sm: '2.125rem' },
                            userSelect: 'none'
                        }}
                    >
                        {activeTab === 'spelling' ? 'Spelling Tests' : activeTab === 'exercises' ? 'Exercises 📝' : activeTab === 'revision' ? 'Revision 📚' : 'Hi! 👋'}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={2}>
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
                                userSelect: 'none',
                            }}
                        />
                    </Stack>
                </Stack>

                {/* Exercises Tab Content */}
                {activeTab === 'exercises' && (
                    <ExercisesDashboard onSelect={onSelect} history={history} />
                )}

                {/* Main List */}
                {activeTab === 'spelling' && (
                    <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #eee' }}>
                        {/* Column Header */}
                        <Box sx={{
                            py: 1.5,
                            px: 3,
                            bgcolor: '#fcfcfc',
                            borderBottom: '1px solid #eee',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            userSelect: 'none'
                        }}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Typography variant="subtitle2" fontWeight="bold" color="text.secondary" sx={{ width: 40 }}>
                                    #
                                </Typography>
                                <Stack direction="row" spacing={0.5} alignItems="center">
                                    <Typography variant="subtitle2" fontWeight="bold" color="text.secondary">
                                        Date
                                    </Typography>
                                    <Tooltip title="Edit Dates">
                                        <IconButton
                                            size="small"
                                            onClick={handleOpenEditDates}
                                            sx={{ color: 'text.secondary', p: 0.5, '&:hover': { color: 'primary.main' } }}
                                        >
                                            <EditCalendar sx={{ fontSize: '1rem' }} />
                                        </IconButton>
                                    </Tooltip>
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
                )}

                {activeTab === 'revision' && onStartRevision && (
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                            <Tabs value={revisionTab} onChange={(_, v) => setRevisionTab(v)} aria-label="revision tabs">
                                <Tab label="Targeted Practice" sx={{ fontWeight: 'bold', flex: 1 }} />
                                <Tab label="Activity History" sx={{ fontWeight: 'bold', flex: 1 }} />
                            </Tabs>
                        </Box>

                        <Box
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onRevisionTouchEnd}
                        >
                            {revisionTab === 0 && (
                                <RevisionDashboard
                                    history={history}
                                    onStartRevision={onStartRevision}
                                />
                            )}

                            {revisionTab === 1 && (
                                <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
                                    {history.length === 0 ? (
                                        <Box sx={{ textAlign: 'center', py: 6 }}>
                                            <HistoryIcon sx={{ fontSize: 60, color: 'action.disabled', mb: 2 }} />
                                            <Typography color="text.secondary">No activity yet. Go for it!</Typography>
                                        </Box>
                                    ) : (
                                        <Stack spacing={1}>
                                            {history.slice().reverse().map((record, i) => (
                                                <Paper key={i} elevation={0} sx={{ p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                                                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography variant="body2" fontWeight="bold">
                                                                {record.type === 'spelling' ? `📝 ${record.exerciseId}` :
                                                                 record.type === 'dictation' ? `🎤 ${record.exerciseId}` :
                                                                 record.type === 'editing' ? `✍️ Editing ${record.exerciseId}` :
                                                                 record.type === 'vocab' ? `📚 Vocabulary` :
                                                                 `📖 Grammar`}
                                                            </Typography>
                                                            <Typography variant="caption" color="text.secondary">
                                                                {record.date} at {record.time}
                                                            </Typography>
                                                        </Box>
                                                        <Chip
                                                            label={`${record.score}/${record.total}`}
                                                            size="small"
                                                            variant="outlined"
                                                            sx={{
                                                                borderColor: 'divider',
                                                                color: 'text.secondary',
                                                                fontWeight: 'normal'
                                                            }}
                                                        />
                                                    </Stack>
                                                </Paper>
                                            ))}
                                        </Stack>
                                    )}
                                </Box>
                            )}
                        </Box>
                    </Box>
                )}

                {/* About Tab Content */}
                {activeTab === 'about' && (
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                            <Tabs value={infoTab} onChange={(_, v) => setInfoTab(v)} aria-label="info tabs">
                                <Tab label="About" sx={{ fontWeight: 'bold', flex: 1 }} />
                                <Tab label="What's New" sx={{ fontWeight: 'bold', flex: 1 }} />
                            </Tabs>
                        </Box>

                        <Box
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {infoTab === 0 && (
                                <Box>
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
                                        Powering this lightweight experience is <strong>React</strong> and <strong>TypeScript</strong>, delivered via <strong>Cloudflare</strong>. The voice is generated by <strong>Google Cloud Neural2 TTS</strong>.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This application was developed in <strong>Google Antigravity</strong> using <strong>Claude Opus 4.5 (Thinking)</strong> and <strong>Gemini 3 Pro (High)</strong>.
                                    </Typography>
                                </Box>
                            )}

                            {infoTab === 1 && (
                                <Stack spacing={2}>
                                    {recentChanges.map((entry) => (
                                        <Box key={entry.version}>
                                            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee', borderRadius: 2 }}>
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
                                            </Paper>
                                        </Box>
                                    ))}
                                </Stack>
                            )}
                        </Box>
                    </Box>
                )}
            </Container>

            {/* Bottom Footer Navigation */}
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 0,
                    borderTop: '1px solid #efefef',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    pb: 'env(safe-area-inset-bottom)'
                }}
                elevation={0}
            >
                <Stack direction="row" sx={{ width: '100%', maxWidth: 'sm', py: 1 }} justifyContent="space-around">
                    <Button
                        onClick={() => setActiveTab('spelling')}
                        sx={{
                            flexDirection: 'column',
                            color: activeTab === 'spelling' ? 'primary.main' : 'text.disabled',
                            textTransform: 'none',
                            gap: 0.5,
                            flexGrow: 1,
                            '&:hover': { bgcolor: 'transparent' }
                        }}
                    >
                        <Spellcheck color={activeTab === 'spelling' ? 'primary' : 'disabled'} />
                        <Typography variant="caption" fontWeight={activeTab === 'spelling' ? 'bold' : 'normal'}>
                            Spelling
                        </Typography>
                    </Button>

                    <Button
                        onClick={() => setActiveTab('exercises')}
                        sx={{
                            flexDirection: 'column',
                            color: activeTab === 'exercises' ? 'primary.main' : 'text.disabled',
                            textTransform: 'none',
                            gap: 0.5,
                            flexGrow: 1,
                            '&:hover': { bgcolor: 'transparent' }
                        }}
                    >
                        <AutoFixHigh color={activeTab === 'exercises' ? 'primary' : 'disabled'} />
                        <Typography variant="caption" fontWeight={activeTab === 'exercises' ? 'bold' : 'normal'}>
                            Exercises
                        </Typography>
                    </Button>

                    <Button
                        onClick={() => setActiveTab('revision')}
                        sx={{
                            flexDirection: 'column',
                            color: activeTab === 'revision' ? 'primary.main' : 'text.disabled',
                            textTransform: 'none',
                            gap: 0.5,
                            flexGrow: 1,
                            '&:hover': { bgcolor: 'transparent' }
                        }}
                    >
                        <History color={activeTab === 'revision' ? 'primary' : 'disabled'} />
                        <Typography variant="caption" fontWeight={activeTab === 'revision' ? 'bold' : 'normal'}>
                            Revision
                        </Typography>
                    </Button>

                    <Button
                        onClick={() => setActiveTab('about')}
                        sx={{
                            flexDirection: 'column',
                            color: activeTab === 'about' ? 'primary.main' : 'text.disabled',
                            textTransform: 'none',
                            gap: 0.5,
                            flexGrow: 1,
                            '&:hover': { bgcolor: 'transparent' }
                        }}
                    >
                        <Info color={activeTab === 'about' ? 'primary' : 'disabled'} />
                        <Typography variant="caption" fontWeight={activeTab === 'about' ? 'bold' : 'normal'}>
                            About
                        </Typography>
                    </Button>
                </Stack>
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
        </Box>
    );
};

export default Dashboard;
