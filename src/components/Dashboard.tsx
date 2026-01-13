import {
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Stack,
    Box,
    Grid,
} from '@mui/material';
import {
    School,
    Mic,
    Star,
    EmojiEvents,
    LocalFireDepartment,
} from '@mui/icons-material';
import { Exercise, ScoreRecord, ExerciseType, EXERCISES } from '../data/exercises';
import { motion } from 'framer-motion';

interface DashboardProps {
    onSelect: (ex: Exercise, type: ExerciseType) => void;
    history: ScoreRecord[];
    streak: number;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelect, history, streak }) => {
    const getTotalXP = () => history.reduce((acc, curr) => acc + (curr.score * 10), 0);

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <Typography variant="h4" color="primary" component={motion.h4} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        Hi, Samuel! 👋
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Ready to ace your spelling today?
                    </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                    <Chip
                        icon={<LocalFireDepartment sx={{ color: '#FF5722 !important' }} />}
                        label={`${streak} Day Streak`}
                        sx={{
                            bgcolor: '#FFCCBC',
                            color: '#BF360C',
                            fontWeight: 'bold',
                            px: 1,
                        }}
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                    />
                    <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label={`${getTotalXP()} XP`}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                            px: 1,
                        }}
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                    />
                </Stack>
            </Stack>

            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmojiEvents color="action" /> Upcoming Tests
            </Typography>

            <Grid container spacing={3}>
                {EXERCISES.map((ex, index) => (
                    <Grid item xs={12} sm={6} key={ex.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Stack direction="row" justifyContent="space-between" mb={2}>
                                        <Typography variant="h6" component="div">
                                            {ex.title}
                                        </Typography>
                                        <Chip label={ex.date} size="small" variant="outlined" color="primary" />
                                    </Stack>

                                    <Stack direction="row" spacing={2} mt="auto">
                                        <Button
                                            variant="contained"
                                            onClick={() => onSelect(ex, 'spelling')}
                                            startIcon={<School />}
                                            fullWidth
                                            sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
                                        >
                                            Spelling
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={() => onSelect(ex, 'dictation')}
                                            startIcon={<Mic />}
                                            fullWidth
                                        >
                                            Dictation
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;
