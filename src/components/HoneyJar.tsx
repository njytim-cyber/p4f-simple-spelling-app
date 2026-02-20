import { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { encouragements } from '../data/encouragements';
import './HoneyJar.css';

interface HoneyJarProps {
    currentScore: number;
    totalPossible: number;
}

export const HoneyJar = ({ currentScore, totalPossible }: HoneyJarProps) => {
    const [isFull, setIsFull] = useState(false);

    const [message, setMessage] = useState<string | null>(null);
    const prevScoreRef = useRef(currentScore);

    // Calculate percentage (0 to 100)
    // Ensure we don't divide by zero and clamp to 100
    const percentage = totalPossible > 0
        ? Math.min(Math.round((currentScore / totalPossible) * 100), 100)
        : 0;

    // Trigger payoff state when 100%
    useEffect(() => {
        if (percentage >= 100) {
            setIsFull(true);
        } else {
            setIsFull(false);
        }
    }, [percentage]);

    // Handle encouragement messages
    useEffect(() => {
        if (currentScore > prevScoreRef.current) {
            let text = '';
            // If perfect score reached (and it's the end, implied by 100% or just hitting total)
            if (currentScore === totalPossible && totalPossible > 0) {
                text = "SIX-SEVEN! SIX-SEVEN!";
            } else {
                // Random encouragement
                const randomIndex = Math.floor(Math.random() * encouragements.length);
                text = encouragements[randomIndex];
            }

            setMessage(text);

            // Clear message after 3 seconds
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
        prevScoreRef.current = currentScore;
    }, [currentScore, totalPossible]);

    return (
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', width: 80, height: 140 }}>

            {/* --- THE PAYOFF: Text (Only shows at 100%) --- */}
            {isFull && (
                <div style={{
                    position: 'absolute',
                    top: -40,
                    zIndex: 50,
                    fontWeight: 900,
                    color: '#d97706', // amber-600
                    fontSize: '1.25rem',
                    letterSpacing: '0.05em',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }} className="animate-bounce">
                    SWEET!
                </div>
            )}

            {/* --- THE BEE (Floats on top of the liquid) --- */}
            <div
                className="absolute z-20 flex flex-col items-center"
                style={{
                    bottom: `${percentage}%`,
                    marginBottom: '-12px', // Sit on surface
                    transition: 'bottom 0.7s ease-out',
                    position: 'absolute',
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {/* The Bee Icon */}
                <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))', display: 'block' }} className={isFull ? 'animate-spin' : 'animate-pulse'}>
                    {isFull ? '👑' : ''}🐝
                </span>

                {/* Speech Bubble */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 10, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 20 }}
                            exit={{ opacity: 0, scale: 0.5, y: 5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                position: 'absolute',
                                right: '-10px', // Anchor to right side of bee container (plus 10px breathing room)
                                bottom: '100%',
                                marginBottom: '5px',
                                backgroundColor: 'white',
                                padding: '6px 10px',
                                borderRadius: '12px',
                                borderBottomRightRadius: '0px', // Tail on right
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                whiteSpace: 'nowrap',
                                zIndex: 100,
                            }}
                        >
                            <Typography variant="caption" fontWeight="bold" sx={{ color: '#d97706', fontSize: '0.75rem' }}>
                                {message}
                            </Typography>
                            {/* Triangle */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-4px',
                                right: '0px', // Tail aligned to right edge
                                width: '0',
                                height: '0',
                                borderRight: '0px solid transparent', // Flip triangle direction
                                borderLeft: '8px solid transparent',
                                borderTop: '6px solid white'
                            }} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* --- THE JAR CONTAINER --- */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                border: '4px solid #cbd5e1', // slate-300
                bgcolor: '#f8fafc', // slate-50
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                overflow: 'hidden',
                boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
            }}>

                {/* Glass Reflection (Static) */}
                <Box sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 8,
                    height: 60,
                    bgcolor: 'white',
                    opacity: 0.4,
                    borderRadius: 4,
                    zIndex: 10
                }} />

                {/* --- THE HONEY LIQUID --- */}
                <div
                    className={isFull ? 'honey-gradient' : 'honey-flat'}
                    style={{
                        height: `${percentage}%`,
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        transition: 'all 0.7s ease-out',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {/* Texture overlay */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        opacity: 0.3,
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 4px, rgba(255,255,255,0.15) 8px)',
                        mixBlendMode: 'overlay'
                    }}></div>

                    {/* Surface Line */}
                    <div className="honey-surface"></div>
                </div>

                {/* --- MARKER LINES --- */}
                <div style={{ position: 'absolute', top: '25%', width: '100%', borderTop: '1px solid #e2e8f0', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: '50%', width: '100%', borderTop: '1px solid #e2e8f0', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: '75%', width: '100%', borderTop: '1px solid #e2e8f0', opacity: 0.5 }} />

            </Box>

            {/* --- THE 100% OVERFLOW PUDDLE (Bottom) --- */}
            {isFull && (
                <div style={{
                    position: 'absolute',
                    bottom: -8,
                    width: 100,
                    height: 16,
                    backgroundColor: '#facc15',
                    borderRadius: '50%',
                    opacity: 0.8
                }} className="animate-ping" />
            )}
        </Box>
    );
};
