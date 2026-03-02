import { motion } from 'framer-motion';

// Fade up — for section headings and text blocks
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

// Fade in — for subtle entry
export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Stagger container — wraps cards/children
export const stagger = (delayChildren = 0.1) => ({
    hidden: {},
    show: { transition: { staggerChildren: delayChildren } }
});

// Card pop — subtle scale + fade
export const cardPop = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    show: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

// Slide in from left
export const slideLeft = {
    hidden: { opacity: 0, x: -48 },
    show: {
        opacity: 1, x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

// Slide in from right
export const slideRight = {
    hidden: { opacity: 0, x: 48 },
    show: {
        opacity: 1, x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

// Viewport trigger settings
export const viewport = { once: true, amount: 0.2 };

// Convenience wrapper: any child becomes scroll-triggered
export const Reveal = ({ children, variants = fadeUp, delay = 0, className, style }) => (
    <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={delay ? { delay } : undefined}
        className={className}
        style={style}
    >
        {children}
    </motion.div>
);
