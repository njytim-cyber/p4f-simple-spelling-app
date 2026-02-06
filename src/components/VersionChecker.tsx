import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Refresh from '@mui/icons-material/Refresh';
import { APP_VERSION, isNewerVersion } from '../data/version';

const VERSION_CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes

const VersionChecker: React.FC = () => {
    const [updateAvailable, setUpdateAvailable] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const checkForUpdates = async () => {
            try {
                const response = await fetch(`/version.json?t=${Date.now()}`, {
                    signal: controller.signal,
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.version && isNewerVersion(data.version, APP_VERSION)) {
                        setUpdateAvailable(true);
                    }
                }
            } catch { /* ignored - version check is non-critical */ }
        };

        checkForUpdates();

        const interval = setInterval(checkForUpdates, VERSION_CHECK_INTERVAL);

        return () => {
            controller.abort();
            clearInterval(interval);
        };
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
