import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import logoTshimologong from '../assets/Tshimologong_Logo.png';

const HeroVisual = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const [currentPartner, setCurrentPartner] = useState(0);
    const partners = [
        {
            name: 'Tshimologong',
            logo: logoTshimologong,
        },
        {
            name: 'Exceptional Difference',
            logo: 'https://exceptionaldifference.com/wp-content/uploads/2024/08/XD-Logo-Stacked.png',
        },
        {
            name: 'Wits University',
            logo: 'https://www.wits.ac.za/media/wits-university/news-and-events/images/logos-and-icons/Wits-Colloquial-colour-stack-600x300-600x300.png',
        }
    ];

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setCurrentPartner((prev) => (prev + 1) % partners.length);
        }, 3000);

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX - innerWidth / 2) / 25;
            const y = (e.clientY - innerHeight / 2) / 25;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(logoInterval);
        };
    }, [mouseX, mouseY, partners.length]);

    // Parallax layers
    const layer1X = useTransform(springX, (val) => val * 1.5);
    const layer1Y = useTransform(springY, (val) => val * 1.5);

    const layer2X = useTransform(springX, (val) => val * -0.8);
    const layer2Y = useTransform(springY, (val) => val * -0.8);

    const layer3X = useTransform(springX, (val) => val * 0.4);
    const layer3Y = useTransform(springY, (val) => val * 0.4);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            overflow: 'visible'
        }}>
            {/* ── Background Glow ── */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, var(--mint-glow) 0%, transparent 70%)',
                    zIndex: 0,
                    x: layer3X,
                    y: layer3Y,
                    opacity: 0.4
                }}
            />

            {/* ── Layer 2: Smaller Drift Spheres ── */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--mint-accent)',
                    borderRadius: '30px',
                    zIndex: 1,
                    x: layer2X,
                    y: layer2Y,
                    top: '20%',
                    left: '10%',
                    rotate: 15
                }}
                animate={{
                    y: [0, -20, 0],
                    rotate: [15, 25, 15]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(59, 130, 246, 0.2)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    borderRadius: '50%',
                    zIndex: 1,
                    x: layer2X,
                    y: layer2Y,
                    bottom: '20%',
                    right: '15%'
                }}
                animate={{
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* ── Layer 1: Central Hero Shape ── */}
            <motion.div
                style={{
                    position: 'relative',
                    width: '260px',
                    height: '260px',
                    zIndex: 3,
                    x: layer1X,
                    y: layer1Y,
                }}
            >
                {/* The main "Mastery Sphere" */}
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '40px'
                    }}
                    whileHover={{ scale: 1.05, borderColor: 'var(--mint-accent)' }}
                >
                    {/* Interior Pulse */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0.3 }}
                        animate={{ scale: 1.2, opacity: 0.1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: 'var(--mint-accent)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }}
                    />

                    {/* Partner Logos Cycling */}
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentPartner}
                            src={partners[currentPartner].logo}
                            alt={partners[currentPartner].name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                filter: 'var(--hero-logo-filter)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </AnimatePresence>
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 120, 240].map((angle, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '40px',
                            height: '40px',
                            background: 'var(--mint-accent)',
                            borderRadius: '10px',
                            boxShadow: '0 0 20px var(--mint-glow)',
                            zIndex: 4
                        }}
                        animate={{
                            rotate: angle + 360,
                            x: [Math.cos(angle * Math.PI / 180) * 150, Math.cos((angle + 180) * Math.PI / 180) * 150, Math.cos(angle * Math.PI / 180) * 150],
                            y: [Math.sin(angle * Math.PI / 180) * 150, Math.sin((angle + 180) * Math.PI / 180) * 150, Math.sin(angle * Math.PI / 180) * 150],
                        }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </motion.div>

            {/* ── Reactive Particles ── */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        background: 'var(--mint-accent)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px var(--mint-glow)',
                        zIndex: 2,
                    }}
                    animate={{
                        x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default HeroVisual;
