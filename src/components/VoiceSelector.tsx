import { useState } from 'react';
import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Box,
    Tooltip
} from '@mui/material';
import { RecordVoiceOver, Check } from '@mui/icons-material';
import { AVAILABLE_VOICES } from '../utils/speech';
import { saveVoice } from '../utils/storage';

interface VoiceSelectorProps {
    currentVoiceId: string;
    onVoiceSelect: (voiceId: string) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ currentVoiceId, onVoiceSelect }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (voiceId: string) => {
        saveVoice(voiceId);
        onVoiceSelect(voiceId);
        handleClose();
    };

    const usVoices = AVAILABLE_VOICES.filter(v => v.lang === 'US');
    const gbVoices = AVAILABLE_VOICES.filter(v => v.lang === 'GB');

    const renderVoiceList = (voices: typeof AVAILABLE_VOICES) =>
        voices.map((voice) => (
            <MenuItem
                key={voice.id}
                onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(voice.id);
                }}
                selected={voice.id === currentVoiceId}
            >
                <ListItemIcon>
                    {voice.id === currentVoiceId && <Check fontSize="small" />}
                </ListItemIcon>
                <ListItemText>{voice.label}</ListItemText>
            </MenuItem>
        ));

    return (
        <>
            <Tooltip title="Select Voice">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{
                        color: 'text.secondary',
                        p: 0.75,
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                    }}
                >
                    <RecordVoiceOver sx={{ fontSize: '1.25rem' }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="voice-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'auto',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        maxWidth: 'calc(100vw - 32px)',
                        maxHeight: 400
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary">US English</Typography>
                </Box>
                {renderVoiceList(usVoices)}

                <Divider />

                <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary">UK English</Typography>
                </Box>
                {renderVoiceList(gbVoices)}
            </Menu>
        </>
    );
};

export default VoiceSelector;
