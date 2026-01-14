import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    Stack,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingStep {
    target: string; // CSS selector or data attribute
    title: string;
    description: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

const ONBOARDING_STEPS: OnboardingStep[] = [
    {
        target: '[data-onboarding="spelling"]',
        title: 'Spelling Practice 📝',
        description: 'Tap here to practice spelling phrases. Listen to each phrase and type it correctly!',
        position: 'bottom',
    },
    {
        target: '[data-onboarding="dictation"]',
        title: 'Dictation Mode 🎧',
        description: 'Tap here for dictation practice. You\'ll hear longer passages and write them out chunk by chunk.',
        position: 'bottom',
    },
    {
        target: '[data-onboarding="activity-log"]',
        title: 'Activity Log 📈',
        description: 'Check your progress here! See your scores, completed exercises, and words to review.',
        position: 'bottom',
    },
    {
        target: '[data-onboarding="spelling-list"]',
        title: 'Spelling Lists 📑',
        description: 'Preview all spelling phrases and dictation texts here before you start practicing.',
        position: 'bottom',
    },
];

interface OnboardingOverlayProps {
    onComplete: () => void;
}

const OnboardingOverlay: React.FC<OnboardingOverlayProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const currentStep = ONBOARDING_STEPS[step];

    useEffect(() => {
        const updateTargetPosition = () => {
            const target = document.querySelector(currentStep.target);
            if (target) {
                setTargetRect(target.getBoundingClientRect());
            }
        };

        updateTargetPosition();
        window.addEventListener('resize', updateTargetPosition);
        window.addEventListener('scroll', updateTargetPosition);

        return () => {
            window.removeEventListener('resize', updateTargetPosition);
            window.removeEventListener('scroll', updateTargetPosition);
        };
    }, [step, currentStep.target]);

    const handleNext = () => {
        if (step < ONBOARDING_STEPS.length - 1) {
            setStep(step + 1);
        } else {
            onComplete();
        }
    };

    const handleSkip = () => {
        onComplete();
    };

    const getTooltipPosition = () => {
        if (!targetRect) return { top: '50%', left: '50%' };

        const padding = 16;
        const tooltipWidth = 300;
        const tooltipHeight = 150;

        switch (currentStep.position) {
            case 'bottom':
                return {
                    top: targetRect.bottom + padding,
                    left: Math.max(padding, Math.min(
                        targetRect.left + targetRect.width / 2 - tooltipWidth / 2,
                        window.innerWidth - tooltipWidth - padding
                    )),
                };
            case 'top':
                return {
                    top: targetRect.top - tooltipHeight - padding,
                    left: Math.max(padding, Math.min(
                        targetRect.left + targetRect.width / 2 - tooltipWidth / 2,
                        window.innerWidth - tooltipWidth - padding
                    )),
                };
            default:
                return {
                    top: targetRect.bottom + padding,
                    left: targetRect.left,
                };
        }
    };

    const tooltipPos = getTooltipPosition();

    return (
        <AnimatePresence>
            <Box
                ref={overlayRef}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9999,
                    pointerEvents: 'auto',
                }}
            >
                {/* Dark overlay with spotlight cutout */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                        transition: 'clip-path 0.3s ease-in-out',
                        clipPath: targetRect
                            ? `polygon(
                                0% 0%, 
                                0% 100%, 
                                ${targetRect.left - 8}px 100%, 
                                ${targetRect.left - 8}px ${targetRect.top - 8}px, 
                                ${targetRect.right + 8}px ${targetRect.top - 8}px, 
                                ${targetRect.right + 8}px ${targetRect.bottom + 8}px, 
                                ${targetRect.left - 8}px ${targetRect.bottom + 8}px, 
                                ${targetRect.left - 8}px 100%, 
                                100% 100%, 
                                100% 0%
                            )`
                            : 'none',
                    }}
                />

                {/* Spotlight ring */}
                {targetRect && (
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        sx={{
                            position: 'absolute',
                            top: targetRect.top - 8,
                            left: targetRect.left - 8,
                            width: targetRect.width + 16,
                            height: targetRect.height + 16,
                            border: '3px solid',
                            borderColor: 'primary.main',
                            borderRadius: 2,
                            boxShadow: '0 0 20px rgba(103, 80, 164, 0.5)',
                            pointerEvents: 'none',
                        }}
                    />
                )}

                {/* Tooltip */}
                <Paper
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    key={step}
                    elevation={8}
                    sx={{
                        position: 'absolute',
                        top: tooltipPos.top,
                        left: tooltipPos.left,
                        width: 300,
                        p: 3,
                        borderRadius: 3,
                        zIndex: 10000,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {currentStep.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {currentStep.description}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Button
                            size="small"
                            onClick={handleSkip}
                            sx={{ color: 'text.secondary' }}
                        >
                            Skip Tour
                        </Button>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="caption" color="text.secondary">
                                {step + 1} / {ONBOARDING_STEPS.length}
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleNext}
                            >
                                {step === ONBOARDING_STEPS.length - 1 ? 'Done!' : 'Next'}
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </AnimatePresence>
    );
};

export default OnboardingOverlay;
