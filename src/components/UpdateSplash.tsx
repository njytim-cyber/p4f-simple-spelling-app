import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Celebration from '@mui/icons-material/Celebration';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_VERSION, getLatestChangelog, isNewerVersion } from '../data/version';

export const LAST_SEEN_VERSION_KEY = 'p4f-spelling-last-seen-version';

const UpdateSplash: React.FC = () => {
    const [open, setOpen] = useState(false);
    const changelog = getLatestChangelog();

    useEffect(() => {
        const lastSeenVersion = localStorage.getItem(LAST_SEEN_VERSION_KEY);

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
