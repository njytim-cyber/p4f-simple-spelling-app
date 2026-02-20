import { useRef, useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                text = "SWEET SUCCESS!";
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

    // Spring configuration for the liquid fill
    const fillSpring = { type: "spring", stiffness: 60, damping: 12 };

    return (
        <Box sx={{ position: 'relative', width: 96, height: 160, mt: 4, mb: 1, flexShrink: 0 }}>
            {/* Absolute container prevents layout shifts from animated children */}
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', width: '100%', height: '100%' }}>

                {/* Confetti Explosion on 100% */}
                {isFull && (
                    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }}>
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={false}
                            numberOfPieces={isMobile ? 150 : 300}
                            gravity={0.15}
                            colors={['#f59e0b', '#fbbf24', '#fcd34d', '#ffffff']}
                        />
                    </Box>
                )}

                {/* --- THE PAYOFF: Text --- */}
                <AnimatePresence>
                    {isFull && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.3, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: -60,
                                zIndex: 60,
                                fontWeight: 900,
                                color: '#b45309', // darker amber
                                fontSize: '1.5rem',
                                letterSpacing: '0.05em',
                                textShadow: '0 4px 12px rgba(245, 158, 11, 0.4), 0 1px 2px rgba(0,0,0,0.1)'
                            }}
                        >
                            SWEET!
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- THE BEE --- */}
                <motion.div
                    animate={
                        isFull
                            ? {
                                y: [0, -60, -80, -40, 0], // Big loop
                                x: [0, 40, -40, 20, 0],
                                rotate: [0, 90, 180, 270, 360],
                                scale: [1, 1.2, 1],
                            }
                            : message
                                ? { y: -20, rotate: -10 } // Simple wiggle translation
                                : { y: [0, -8, 0], rotate: [-2, 2, -2] } // Idle hover
                    }
                    transition={
                        isFull
                            ? { duration: 2, ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1] }
                            : message
                                ? { duration: 0.3, type: "spring", stiffness: 300, damping: 12 }
                                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }
                    style={{
                        position: 'absolute',
                        zIndex: 50,
                        bottom: `calc(${percentage}% + 10px)`, // calculate exactly instead of margin
                        width: 50,
                        height: 50,
                        pointerEvents: 'none' // Ensures animation doesn't intercept clicks
                    }}
                >
                    {/* Crown transition */}
                    <AnimatePresence>
                        {isFull && (
                            <motion.span
                                initial={{ opacity: 0, y: 10, scale: 0 }}
                                animate={{ opacity: 1, y: -2, scale: 1, rotate: 10 }}
                                transition={{ delay: 1.8, type: "spring" }} // Appears after loop
                                style={{ position: 'absolute', top: -16, fontSize: '1.2rem', left: -4 }}
                            >
                                👑
                            </motion.span>
                        )}
                    </AnimatePresence>

                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.3))',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: 'translateY(4px)' // minor adjustment for visual center
                    }}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                            {/* Shadow under the bee */}
                            <ellipse cx="50" cy="85" rx="20" ry="4" fill="rgba(0,0,0,0.15)" />

                            {/* Stinger */}
                            <path d="M78 55 L90 55 L78 62 Z" fill="#333333" />

                            {/* Back Wing (flapping) */}
                            <motion.ellipse
                                cx="45" cy="35" rx="15" ry="25"
                                fill="url(#wingGradient)"
                                opacity="0.8"
                                style={{ originX: '50%', originY: '100%' }}
                                animate={{ rotate: [-15, 25, -15], scaleY: [1, 0.8, 1] }}
                                transition={{ duration: 0.15, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* Bee Body (Stripes are just a pattern, or just layered shapes) */}
                            <rect x="30" y="40" width="50" height="35" rx="17.5" fill="#facc15" />
                            {/* Stripes */}
                            <path d="M45 40 h10 v35 h-10 Z" fill="#333333" />
                            <path d="M65 40 h10 v35 h-10 Z" fill="#333333" />

                            {/* Front Wing (flapping) */}
                            <motion.ellipse
                                cx="35" cy="40" rx="15" ry="25"
                                fill="url(#wingGradient)"
                                opacity="0.9"
                                style={{ originX: '50%', originY: '100%' }}
                                animate={{ rotate: [10, -30, 10], scaleY: [1, 0.7, 1] }}
                                transition={{ duration: 0.15, repeat: Infinity, ease: 'easeInOut', delay: 0.05 }}
                            />

                            {/* Head */}
                            <circle cx="30" cy="57.5" r="16" fill="#facc15" />

                            {/* Eyes */}
                            <circle cx="24" cy="54" r="3" fill="#333333" />
                            <circle cx="34" cy="54" r="3" fill="#333333" />

                            {/* Cheeks */}
                            <circle cx="20" cy="58" r="2.5" fill="#f87171" opacity="0.6" />
                            <circle cx="38" cy="58" r="2.5" fill="#f87171" opacity="0.6" />

                            {/* Happy Mouth */}
                            <path d="M26 62 Q 29 66 32 62" stroke="#333333" strokeWidth="2" strokeLinecap="round" fill="none" />

                            {/* Antennae */}
                            <path d="M25 43 Q 20 35 15 35" stroke="#333333" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <circle cx="15" cy="35" r="2" fill="#333333" />
                            <path d="M35 43 Q 40 35 45 35" stroke="#333333" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <circle cx="45" cy="35" r="2" fill="#333333" />

                            {/* Definitions */}
                            <defs>
                                <linearGradient id="wingGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#bae6fd" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Box>

                    {/* Speech Bubble */}
                    <AnimatePresence>
                        {message && !isFull && (
                            <motion.div
                                key={message} // Re-animate on new message
                                initial={{ opacity: 0, scale: 0.5, y: 10, x: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 20 }}
                                exit={{ opacity: 0, scale: 0.5, y: 5 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 } as any}
                                style={{
                                    position: 'absolute',
                                    left: '100%',
                                    bottom: '80%', // Anchored mid-high right of the bee
                                    marginLeft: '10px',
                                    backgroundColor: 'white',
                                    padding: '8px 12px',
                                    borderRadius: '16px',
                                    borderBottomLeftRadius: '0px', // Right-side tail
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 -2px 0 rgba(0,0,0,0.05)',
                                    whiteSpace: 'nowrap',
                                    zIndex: 100,
                                }}
                            >
                                <Typography variant="caption" fontWeight="bold" sx={{ color: '#d97706', fontSize: '0.8rem' }}>
                                    {message}
                                </Typography>
                                {/* Triangle */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-5px',
                                    left: '0px',
                                    width: '0',
                                    height: '0',
                                    borderLeft: '0px solid transparent', // Left-sided tail
                                    borderRight: '10px solid transparent',
                                    borderTop: '8px solid white'
                                }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* --- THE JAR CONTAINER --- */}
                <Box className="honey-jar-container" sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(248, 250, 252, 0.7)', // translucent slate-50
                    backdropFilter: 'blur(4px)',
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    border: '6px solid rgba(203, 213, 225, 0.4)', // thicker, slightly transparent rim
                    overflow: 'hidden',
                    zIndex: 10
                }}>

                    {/* Thick glass rim top highlight */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
                        zIndex: 20
                    }} />

                    {/* Curved Glass Reflection (Left) */}
                    <Box className="glass-reflection" sx={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '15%',
                        height: '80%',
                        borderRadius: '50%',
                        transform: 'rotate(-5deg)',
                        zIndex: 20
                    }} />

                    {/* --- THE HONEY LIQUID --- */}
                    <motion.div
                        className={isFull ? 'honey-gradient' : 'honey-flat'}
                        initial={{ height: '0%' }}
                        animate={{ height: `${percentage}%` }}
                        transition={fillSpring as any}
                        style={{
                            width: '100%',
                            position: 'absolute',
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Texture overlay */}
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            opacity: 0.25,
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 8px)',
                            mixBlendMode: 'overlay',
                            position: 'absolute'
                        }} />

                        {/* 3D Surface Interface */}
                        <Box className="honey-surface" />
                    </motion.div>

                    {/* --- MARKER LINES (Engraved Glass look) --- */}
                    {[25, 50, 75].map(pos => (
                        <Box key={pos} sx={{
                            position: 'absolute',
                            bottom: `${pos}%`,
                            width: '40%',
                            left: '30%',
                            height: 2,
                            bgcolor: 'rgba(255,255,255,0.4)',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            borderRadius: 1,
                            zIndex: 5
                        }} />
                    ))}
                </Box>

                {/* --- JAR SHADOW (Bottom) --- */}
                <Box sx={{
                    position: 'absolute',
                    bottom: -12,
                    width: '80%',
                    height: 12,
                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)',
                    zIndex: 5
                }} />
            </Box>
        </Box>
    );
};

