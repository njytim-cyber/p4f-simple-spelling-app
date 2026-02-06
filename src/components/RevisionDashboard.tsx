import { useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Spellcheck from '@mui/icons-material/Spellcheck';
import AutoFixHigh from '@mui/icons-material/AutoFixHigh';
import MenuBook from '@mui/icons-material/MenuBook';
import { ScoreRecord, ExerciseType } from '../data/exercises';
import {
    getMissedItemsFromHistory,
    mergeWithSavedData,
    getItemsDueForReview,
    loadRevisionData,
} from '../utils/spacedRepetition';

interface RevisionDashboardProps {
    history: ScoreRecord[];
    onStartRevision: (sourceTypes: ExerciseType[]) => void;
}

interface RevisionSection {
    title: string;
    icon: JSX.Element;
    sourceTypes: ExerciseType[];
    color: string;
}

export default function RevisionDashboard({ history, onStartRevision }: RevisionDashboardProps) {
    const revisionStats = useMemo(() => {
        const historyItems = getMissedItemsFromHistory(history);
        const savedData = loadRevisionData();
        const merged = mergeWithSavedData(historyItems, savedData);
        const dueItems = getItemsDueForReview(merged);

        const stats = {
            spelling: 0,
            editing: 0,
            grammar: 0,
        };

        for (const item of dueItems) {
            switch (item.sourceType) {
                case 'spelling':
                case 'dictation':
                    stats.spelling++;
                    break;
                case 'editing':
                    stats.editing++;
                    break;
                case 'grammar':
                    stats.grammar++;
                    break;
            }
        }

        return stats;
    }, [history]);

    const sections: RevisionSection[] = [
        {
            title: 'Spelling & Dictation',
            icon: <Spellcheck />,
            sourceTypes: ['spelling', 'dictation'],
            color: '#1976d2',
        },
        {
            title: 'Editing',
            icon: <AutoFixHigh />,
            sourceTypes: ['editing'],
            color: '#ed6c02',
        },
        {
            title: 'Grammar',
            icon: <MenuBook />,
            sourceTypes: ['grammar'],
            color: '#2e7d32',
        },
    ];

    return (
        <Container maxWidth="sm" sx={{ py: 2 }}>
            <Stack spacing={2}>
                {sections.map((section) => {
                    const count = section.sourceTypes.reduce((sum, type) =>
                        sum + (revisionStats[type as keyof typeof revisionStats] || 0), 0
                    );
                    const hasItems = count > 0;

                    return (
                        <Paper
                            key={section.title}
                            elevation={hasItems ? 2 : 0}
                            onClick={() => hasItems && onStartRevision(section.sourceTypes)}
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                borderLeft: hasItems ? `3px solid ${section.color}` : 'none',
                                cursor: hasItems ? 'pointer' : 'default',
                                opacity: hasItems ? 1 : 0.5,
                                transition: 'all 0.2s',
                                '&:hover': hasItems ? {
                                    transform: 'translateX(4px)',
                                    boxShadow: 2,
                                } : {},
                            }}
                        >
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 36,
                                        height: 36,
                                        borderRadius: 1.5,
                                        bgcolor: hasItems ? `${section.color}20` : 'action.hover',
                                        color: hasItems ? section.color : 'text.disabled',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    {section.icon}
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                                        {section.title}
                                    </Typography>
                                </Box>
                                {hasItems ? (
                                    <Chip
                                        size="small"
                                        label={count}
                                        sx={{
                                            bgcolor: section.color,
                                            color: 'white',
                                            fontWeight: 'bold',
                                            minWidth: 32,
                                        }}
                                    />
                                ) : (
                                    <Chip
                                        size="small"
                                        label="—"
                                        variant="outlined"
                                        sx={{ opacity: 0.4, minWidth: 32 }}
                                    />
                                )}
                            </Stack>
                        </Paper>
                    );
                })}
            </Stack>
        </Container>
    );
}
