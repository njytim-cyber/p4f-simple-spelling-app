// Shared animation variants and transitions for framer-motion
import type { Variants } from 'framer-motion';

// Standard page transition for view switching (App.tsx)
export const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
};

export const pageTransition = {
    duration: 0.25,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// Results screen staggered entrance
export const resultsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

export const resultsItemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    },
};

export const scorePopVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
};
