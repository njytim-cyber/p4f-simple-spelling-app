import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { CheckCircle, Celebration } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_VERSION, getLatestChangelog, isNewerVersion } from '../data/version';

const LAST_SEEN_VERSION_KEY = 'p4f-spelling-last-seen-version';

const UpdateSplash: React.FC = () => {
    const [open, setOpen] = useState(false);
    const changelog = getLatestChangelog();

    useEffect(() => {
        const lastSeenVersion = localStorage.getItem(LAST_SEEN_VERSION_KEY);

        // Show splash if:
        // 1. First time user (no stored version)
        // 2. App version is newer than last seen version
        if (!lastSeenVersion || isNewerVersion(APP_VERSION, lastSeenVersion)) {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem(LAST_SEEN_VERSION_KEY, APP_VERSION);
        setOpen(false);
    };

    if (!changelog) return null;

    return (
        <AnimatePresence>
            {open && (
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="sm"
                    fullWidth
                    PaperProps={{
                        component: motion.div,
                        initial: { scale: 0.8, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.8, opacity: 0 },
                        sx: {
                            borderRadius: 3,
                            overflow: 'hidden',
                        },
                    }}
                >
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            p: 3,
                            textAlign: 'center',
                        }}
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Celebration sx={{ fontSize: 48, color: 'white', mb: 1 }} />
                        </motion.div>
                        <DialogTitle
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.75rem',
                                p: 0,
                            }}
                        >
                            {changelog.title}
                        </DialogTitle>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                            <Chip
                                label={`v${changelog.version}`}
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            />
                            <Chip
                                label={changelog.date}
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                }}
                            />
                        </Box>
                    </Box>

                    <DialogContent sx={{ pt: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            What's New:
                        </Typography>
                        <List dense>
                            {changelog.changes.map((change, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <ListItem>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <CheckCircle color="success" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={change} />
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>
                    </DialogContent>

                    <DialogActions sx={{ p: 2, pt: 0 }}>
                        <Button
                            variant="contained"
                            onClick={handleClose}
                            fullWidth
                            size="large"
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                fontWeight: 'bold',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            }}
                        >
                            Let's Go!
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </AnimatePresence>
    );
};

export default UpdateSplash;
