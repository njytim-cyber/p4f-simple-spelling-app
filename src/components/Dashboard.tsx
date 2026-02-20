import { useState, useMemo, useRef } from 'react';
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
    Grid,
    Tabs,
    Tab,
    Tooltip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import {
    Star,
    History as HistoryIcon,
    CheckCircle,
    RadioButtonUnchecked,
    Sync,
    AutoAwesome,
    ExpandMore,
} from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType, EXERCISES } from '../data/exercises';
import { CHANGELOG } from '../data/version';
import { motion } from 'framer-motion';

import { chunkText } from '../utils/speech';

interface DashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
    onStartRevision?: () => void;
    revisionDueCount?: number;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelect, history, onStartRevision, revisionDueCount = 0 }) => {
    const [openHistory, setOpenHistory] = useState(false);
    const [openSpellingList, setOpenSpellingList] = useState(false);
    const [openChangelog, setOpenChangelog] = useState(false);
    const [infoTab, setInfoTab] = useState(0);
    const [spellingListTerm, setSpellingListTerm] = useState(-1); // -1 = last term by default
    const exercises = EXERCISES;

    // Group exercises by term (e.g. "1.1" -> "Term 1", "2.X" -> "Term 2")
    const termGroups = useMemo(() => {
        const groups = new Map<string, Exercise[]>();
        for (const ex of exercises) {
            const termNum = ex.id.split('.')[0];
            const label = `Term ${termNum}`;
            const group = groups.get(label) ?? [];
            group.push(ex);
            groups.set(label, group);
        }
        return Array.from(groups.entries());
    }, [exercises]);

    // Track which accordions are expanded — last term open by default
    const [expandedTerms, setExpandedTerms] = useState<Set<string>>(() => {
        const lastLabel = `Term ${exercises[exercises.length - 1]?.id.split('.')[0]}`;
        return new Set([lastLabel]);
    });

    const toggleTerm = (label: string) => {
        setExpandedTerms(prev => {
            const next = new Set(prev);
            if (next.has(label)) next.delete(label);
            else next.add(label);
            return next;
        });
    };

    // Normalize legacy scoring records (1-point system -> 2-point tiered system)
    const getNormalizedRecord = (record: ScoreRecord) => {
        const refEx = exercises.find(e => e.id === record.exerciseId);
        if (!refEx) return record;

        const itemCount = record.type === 'spelling'
            ? refEx.spelling.length
            : chunkText(refEx.dictation).length;

        const isToday = record.date === new Date().toLocaleDateString();

        if (record.score > record.total) {
            return { ...record, total: record.total * 2 };
        }

        if (record.total === itemCount) {
            return isToday
                ? { ...record, total: record.total * 2 }
                : { ...record, score: record.score * 2, total: record.total * 2 };
        }

        return record;
    };

    // Memoize expensive score lookups — only recalculate when history changes
    const { totalXP, bestScores } = useMemo(() => {
        let xp = 0;
        const bests = new Map<string, ScoreRecord>();

        for (const record of history) {
            const norm = getNormalizedRecord(record);
            xp += norm.score * 10;

            const key = `${record.exerciseId}-${record.type}`;
            const current = bests.get(key);
            if (!current || norm.score > getNormalizedRecord(current).score) {
                bests.set(key, record);
            }
        }

        return { totalXP: xp, bestScores: bests };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    const StatusTarget = ({ exId, type }: { exId: string, type: ExerciseType }) => {
        const bestRaw = bestScores.get(`${exId}-${type}`);
        const best = bestRaw ? getNormalizedRecord(bestRaw) : null;

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

        // Add data attribute for first exercise in the last (expanded) term group
        const lastGroup = termGroups[termGroups.length - 1];
        const isOnboardingTarget = lastGroup && exId === lastGroup[1][0]?.id;
        const dataAttr = isOnboardingTarget ? { 'data-onboarding': type } : {};

        return (
            <IconButton
                {...dataAttr}
                onClick={() => {
                    const ex = exercises.find(e => e.id === exId);
                    if (ex) onSelect(ex, type);
                }}
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
        <Container maxWidth="sm" sx={{ py: 4 }}>
            {/* Header */}
            {/* Header */}
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
                    Hi! 👋
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0}
                        sx={{ bgcolor: '#f5f5f5', borderRadius: 5, px: 0.5, py: 0.5, userSelect: 'none' }}
                    >
                        <Tooltip title="About" arrow enterDelay={100} enterNextDelay={100}>
                            <IconButton
                                onClick={() => setOpenChangelog(true)}
                                sx={{ fontSize: '1.4rem', opacity: 0.85, '&:hover': { opacity: 1 } }}
                            >
                                ℹ️
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Spelling Lists" arrow enterDelay={100} enterNextDelay={100}>
                            <IconButton
                                data-onboarding="spelling-list"
                                onClick={() => setOpenSpellingList(true)}
                                sx={{ fontSize: '1.4rem', opacity: 0.85, '&:hover': { opacity: 1 } }}
                            >
                                📑
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Activity Log" arrow enterDelay={100} enterNextDelay={100}>
                            <IconButton
                                data-onboarding="activity-log"
                                onClick={() => setOpenHistory(true)}
                                sx={{ fontSize: '1.4rem', opacity: 0.85, '&:hover': { opacity: 1 } }}
                            >
                                📈
                            </IconButton>
                        </Tooltip>
                    </Stack>

                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${totalXP}`}
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

            {/* List Section */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, opacity: 0.7, userSelect: 'none' }}>
                Ready to ace your spelling today?
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 2, userSelect: 'none' }}>
                Privacy First: We don't send your data to a server; it lives right here on your device. Just remember: if you clear your browser data, your progress goes with it!
            </Typography>

            {/* Revision Button */}
            {onStartRevision && (
                <Button
                    data-onboarding="revision"
                    variant="outlined"
                    startIcon={<AutoAwesome />}
                    onClick={onStartRevision}
                    disabled={revisionDueCount === 0}
                    fullWidth
                    sx={{
                        mb: 3,
                        py: 1.5,
                        borderRadius: 2,
                        borderWidth: 2,
                        fontWeight: 'bold',
                        borderColor: revisionDueCount > 0 ? 'secondary.main' : 'divider',
                        color: revisionDueCount > 0 ? 'secondary.main' : 'text.disabled',
                        '&:hover': {
                            borderWidth: 2,
                            bgcolor: 'secondary.light',
                            borderColor: 'secondary.main',
                        }
                    }}
                >
                    {revisionDueCount > 0
                        ? `Revision Time! (${revisionDueCount} item${revisionDueCount !== 1 ? 's' : ''} to practice)`
                        : 'Revision (No items due)'}
                </Button>
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {termGroups.map(([termLabel, termExercises]) => {
                    const isExpanded = expandedTerms.has(termLabel);
                    const hasDictation = termExercises.some(e => e.dictation);
                    // Standard column width for better clicking areas and visual "tightness" relief
                    const colWidth = 80;

                    return (
                        <Accordion
                            key={termLabel}
                            expanded={isExpanded}
                            onChange={() => toggleTerm(termLabel)}
                            disableGutters
                            sx={{
                                borderRadius: '12px !important',
                                border: '1px solid #eee',
                                boxShadow: 'none',
                                '&:before': { display: 'none' },
                                overflow: 'hidden',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                sx={{
                                    bgcolor: '#fcfcfc',
                                    px: 2.5,
                                    minHeight: 52,
                                    '& .MuiAccordionSummary-content': {
                                        my: 1.5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        // Spacing between labels and the expand icon
                                        mr: 2,
                                    },
                                    userSelect: 'none',
                                }}
                            >
                                <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ flexGrow: 1 }}>
                                    {termLabel}
                                </Typography>
                                {isExpanded && (
                                    <Stack direction="row" sx={{ flexShrink: 0 }}>
                                        <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ width: colWidth, textAlign: 'center' }}>
                                            Spelling
                                        </Typography>
                                        {hasDictation && (
                                            <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ width: colWidth, textAlign: 'center' }}>
                                                Dictation
                                            </Typography>
                                        )}
                                    </Stack>
                                )}
                            </AccordionSummary>
                            <AccordionDetails sx={{ p: 0 }}>
                                <List disablePadding>
                                    {termExercises.map((ex, index) => (
                                        <Box key={ex.id}>
                                            <ListItem
                                                sx={{
                                                    py: 1.5,
                                                    px: 2.5,
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
                                                <Typography variant="subtitle2" fontWeight="bold" color="text.secondary">
                                                    {ex.title}
                                                </Typography>
                                                {/* 
                                                Match the header alignment:
                                                Header content has mr: 2 (16px) gap to expand icon.
                                                Expand icon SVG is 24px wide.
                                                Total offset = 24 + 16 = 40px = mr: 5
                                            */}
                                                <Stack direction="row" sx={{ mr: 5 }}>
                                                    <Box sx={{ width: colWidth, display: 'flex', justifyContent: 'center' }}>
                                                        <StatusTarget exId={ex.id} type="spelling" />
                                                    </Box>
                                                    {hasDictation && (
                                                        <Box sx={{ width: colWidth, display: 'flex', justifyContent: 'center' }}>
                                                            {ex.dictation && <StatusTarget exId={ex.id} type="dictation" />}
                                                        </Box>
                                                    )}
                                                </Stack>
                                            </ListItem>
                                            {index < termExercises.length - 1 && <Divider />}
                                        </Box>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Box>

            {/* Spelling List Dialog */}
            <Dialog open={openSpellingList} onClose={() => setOpenSpellingList(false)} fullWidth maxWidth="md">
                <DialogTitle sx={{ fontWeight: '800', pb: 0 }}>Master Spelling List</DialogTitle>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tabs
                        value={spellingListTerm === -1 ? termGroups.length - 1 : spellingListTerm}
                        onChange={(_, v) => setSpellingListTerm(v)}
                        aria-label="term tabs"
                    >
                        {termGroups.map(([label], i) => (
                            <Tab key={label} label={label} value={i} sx={{ fontWeight: 'bold' }} />
                        ))}
                    </Tabs>
                </Box>
                <DialogContent dividers>
                    {(() => {
                        const activeIndex = spellingListTerm === -1 ? termGroups.length - 1 : spellingListTerm;
                        const filteredExercises = termGroups[activeIndex]?.[1] ?? [];
                        return (
                            <List disablePadding>
                                {filteredExercises.map((ex, i) => (
                                    <Box key={ex.id} sx={{ mb: i < filteredExercises.length - 1 ? 4 : 0 }}>
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
                                            {ex.dictation && (
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                                        Dictation Text
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontStyle: 'italic', bgcolor: '#f9f9f9', p: 1.5, borderRadius: 1 }}>
                                                        "{ex.dictation}"
                                                    </Typography>
                                                </Grid>
                                            )}
                                        </Grid>
                                        {i < filteredExercises.length - 1 && <Divider sx={{ mt: 3 }} />}
                                    </Box>
                                ))}
                            </List>
                        );
                    })()}
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
                                Powering this lightweight experience is <strong>React</strong> and <strong>TypeScript</strong>, delivered via <strong>Cloudflare</strong>. The voice is generated by <strong>Google Cloud Neural2 TTS</strong>.
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
