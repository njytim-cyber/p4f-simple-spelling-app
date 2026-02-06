import { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

    const percentage = totalPossible > 0
        ? Math.min(Math.round((currentScore / totalPossible) * 100), 100)
        : 0;

    useEffect(() => {
        setIsFull(percentage >= 100);
    }, [percentage]);

    useEffect(() => {
        if (currentScore > prevScoreRef.current) {
            let text = '';
            if (currentScore === totalPossible && totalPossible > 0) {
                text = "SIX-SEVEN! SIX-SEVEN!";
            } else {
                const randomIndex = Math.floor(Math.random() * encouragements.length);
                text = encouragements[randomIndex];
            }

            setMessage(text);

            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
        prevScoreRef.current = currentScore;
    }, [currentScore, totalPossible]);

    return (
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', width: 80, height: 140 }}>

            {isFull && (
                <div style={{
                    position: 'absolute',
                    top: -40,
                    zIndex: 50,
                    fontWeight: 900,
                    color: '#d97706',
                    fontSize: '1.25rem',
                    letterSpacing: '0.05em',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }} className="animate-bounce">
                    SWEET!
                </div>
            )}

            <div
                style={{
                    bottom: `${percentage}%`,
                    marginBottom: '-12px',
                    transition: 'bottom 0.7s ease-out',
                    position: 'absolute',
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))', display: 'block' }} className={isFull ? 'animate-spin' : 'animate-pulse'}>
                    {isFull ? '👑' : ''}🐝
                </span>

                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 10, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 20 }}
                            exit={{ opacity: 0, scale: 0.5, y: 5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                position: 'absolute',
                                right: '-10px',
                                bottom: '100%',
                                marginBottom: '5px',
                                backgroundColor: 'white',
                                padding: '6px 10px',
                                borderRadius: '12px',
                                borderBottomRightRadius: '0px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                whiteSpace: 'nowrap',
                                zIndex: 100,
                            }}
                        >
                            <Typography variant="caption" fontWeight="bold" sx={{ color: '#d97706', fontSize: '0.75rem' }}>
                                {message}
                            </Typography>
                            <div style={{
                                position: 'absolute',
                                bottom: '-4px',
                                right: '0px',
                                width: '0',
                                height: '0',
                                borderRight: '0px solid transparent',
                                borderLeft: '8px solid transparent',
                                borderTop: '6px solid white'
                            }} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                border: '4px solid #cbd5e1',
                bgcolor: '#f8fafc',
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                overflow: 'hidden',
                boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
            }}>

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
                    <div style={{
                        width: '100%',
                        height: '100%',
                        opacity: 0.3,
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                        mixBlendMode: 'overlay'
                    }}></div>

                    <div className="honey-surface"></div>
                </div>

                <div style={{ position: 'absolute', top: '25%', width: '100%', borderTop: '1px solid #e2e8f0', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: '50%', width: '100%', borderTop: '1px solid #e2e8f0', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: '75%', width: '100%', borderTop: '1px solid #e2e8f0', opacity: 0.5 }} />

            </Box>

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
