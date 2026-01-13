import { useState, useMemo } from 'react';
import {
    Container,
    Typography,
    Card,
    Button,
    TextField,
    IconButton,
    Fab,
    Stack,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import { ArrowBack, VolumeUp, CameraAlt } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '../data/exercises';
import { speak, chunkText } from '../utils/speech';

interface DictationModeProps {
    exercise: Exercise;
    onComplete: (score: number, total: number) => void;
    onBack: () => void;
}

const DictationMode: React.FC<DictationModeProps> = ({ exercise, onComplete, onBack }) => {
    const [mode, setMode] = useState<'type' | 'write'>('type');
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const chunks = useMemo(() => chunkText(exercise.dictation), [exercise.dictation]);
    const currentChunk = chunks[index];

    const handleNext = () => {
        if (index < chunks.length - 1) {
            setIndex((i) => i + 1);
            setInput('');
            setShowAnswer(false);
        } else {
            onComplete(100, 100); // Simple completion for dictation
        }
    };

    const ModeSwitch = () => (
        <Button
            onClick={() => setMode(mode === 'type' ? 'write' : 'type')}
            sx={{ mt: 2 }}
            fullWidth
            variant="text"
        >
            Switch to {mode === 'type' ? 'Handwriting' : 'Typing'} Mode
        </Button>
    )

    if (mode === 'write' && showAnswer) {
        return (
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Self Check
                </Typography>
                <Card sx={{ mb: 3, p: 3, bgcolor: '#e8f5e9', borderRadius: 4 }}>
                    <Typography variant="caption" color="text.secondary" fontWeight="bold">
                        CORRECT TEXT:
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>{currentChunk}</Typography>
                </Card>
                <Typography paragraph color="text.secondary">
                    Compare this with what you wrote in your notebook.
                </Typography>
                <Button variant="contained" fullWidth size="large" onClick={handleNext}>
                    I Checked It (Next Part)
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" alignItems="center" mb={2}>
                <IconButton onClick={onBack}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6" sx={{ ml: 1 }}>
                    Dictation (Part {index + 1}/{chunks.length})
                </Typography>
            </Stack>

            <Card sx={{ p: 4, mb: 3, textAlign: 'center', borderRadius: 6, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} elevation={0} variant="outlined">
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    Listen deeply...
                </Typography>
                <Box display="flex" justifyContent="center" my={2}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Fab color="secondary" onClick={() => speak(currentChunk)} size="large">
                            <VolumeUp />
                        </Fab>
                    </motion.div>
                </Box>
                <Typography variant="caption">Tap to play chunk</Typography>
            </Card>

            <AnimatePresence mode="wait">
                {mode === 'type' ? (
                    <motion.div
                        key="type"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Type what you hear..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
                            variant="filled"
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            onClick={() => setShowAnswer(true)}
                            disabled={!input}
                        >
                            Check Answer
                        </Button>
                        <ModeSwitch />
                    </motion.div>
                ) : (
                    <motion.div
                        key="write"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <Box
                            sx={{
                                border: '3px dashed #ccc',
                                borderRadius: 4,
                                p: 5,
                                textAlign: 'center',
                                mb: 3,
                                cursor: 'pointer',
                                bgcolor: 'background.paper'
                            }}
                            onClick={() => setShowAnswer(true)}
                            component={motion.div}
                            whileHover={{ scale: 1.02, borderColor: '#666' }}
                        >
                            <CameraAlt fontSize="large" color="action" />
                            <Typography variant="h6" mt={2}>Tap to "Scan" Notebook</Typography>
                            <Typography variant="caption" color="text.secondary">(Simulated)</Typography>
                        </Box>
                        <ModeSwitch />
                    </motion.div>
                )}
            </AnimatePresence>

            {showAnswer && mode === 'type' && (
                <Dialog open={true} onClose={() => { }} PaperProps={{ sx: { borderRadius: 4 } }}>
                    <DialogTitle fontWeight="bold">Check your work</DialogTitle>
                    <DialogContent>
                        <Typography variant="caption" color="success.main" fontWeight="bold">
                            CORRECT:
                        </Typography>
                        <Typography paragraph variant="body1" sx={{ bgcolor: '#e8f5e9', p: 1, borderRadius: 1 }}>{currentChunk}</Typography>

                        <Typography variant="caption" color="error" fontWeight="bold">
                            YOU TYPED:
                        </Typography>
                        <Typography variant="body1" sx={{ bgcolor: '#ffebee', p: 1, borderRadius: 1 }}>{input}</Typography>
                    </DialogContent>
                    <DialogActions sx={{ p: 2 }}>
                        <Button onClick={handleNext} variant="contained" fullWidth size="large">
                            Next Chunk
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Container>
    );
};

export default DictationMode;
