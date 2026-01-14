import { useState, useEffect } from 'react';
import { Snackbar, Button, Alert } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { APP_VERSION, isNewerVersion } from '../data/version';

const VERSION_CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes

const VersionChecker: React.FC = () => {
    const [updateAvailable, setUpdateAvailable] = useState(false);

    useEffect(() => {
        const checkForUpdates = async () => {
            try {
                // Add cache-busting query param to avoid cached responses
                const response = await fetch(`/version.json?t=${Date.now()}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.version && isNewerVersion(data.version, APP_VERSION)) {
                        setUpdateAvailable(true);
                    }
                }
            } catch (e) {
                // Silently fail - don't bother user if version check fails
                console.debug('Version check failed:', e);
            }
        };

        // Check immediately on mount
        checkForUpdates();

        // Then check periodically
        const interval = setInterval(checkForUpdates, VERSION_CHECK_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <Snackbar
            open={updateAvailable}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                severity="info"
                icon={<Refresh />}
                action={
                    <Button
                        color="inherit"
                        size="small"
                        onClick={handleRefresh}
                        sx={{ fontWeight: 'bold' }}
                    >
                        Refresh Now
                    </Button>
                }
                sx={{
                    alignItems: 'center',
                    '& .MuiAlert-message': { py: 0 },
                }}
            >
                A new version is available!
            </Alert>
        </Snackbar>
    );
};

export default VersionChecker;
