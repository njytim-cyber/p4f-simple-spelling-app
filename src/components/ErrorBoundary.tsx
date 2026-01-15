import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Container, Card } from '@mui/material';
import { Refresh } from '@mui/icons-material';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
                        <Typography variant="h4" gutterBottom color="error" fontWeight="bold">
                            Oops!
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary">
                            Something went wrong. Don't worry, your progress is safe.
                        </Typography>

                        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                startIcon={<Refresh />}
                                onClick={this.handleReset}
                            >
                                Reload App
                            </Button>
                        </Box>
                    </Card>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
