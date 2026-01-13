import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#6750A4', light: '#EADDFF', dark: '#21005D' },
        secondary: { main: '#625B71', light: '#E8DEF8' },
        background: { default: '#FFFBFE', paper: '#F3EDF7' },
        error: { main: '#B3261E' },
        success: { main: '#2e7d32' },
    },
    shape: { borderRadius: 24 },
    typography: {
        fontFamily: '"Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: { fontWeight: 700 },
        h6: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600, borderRadius: 20 },
    },
    components: {
        MuiCard: { styleOverrides: { root: { boxShadow: '0px 4px 8px 3px rgba(0,0,0,0.05)' } } },
        MuiButton: { styleOverrides: { root: { borderRadius: 100 } } },
    },
});

export default theme;
