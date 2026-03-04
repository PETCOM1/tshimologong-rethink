import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import logoTshimologong from '../assets/Tshimologong_Logo.png';

/* ─── Pre-computed particle data (stable across renders) ─── */
const PARTICLES = [
    { id: 0, size: 4, x1: -180, y1: -120, x2: 160, y2: 80, dur: 8, delay: 0 },
    { id: 1, size: 3, x1: 140, y1: -160, x2: -100, y2: 140, dur: 10, delay: 1 },
    { id: 2, size: 5, x1: -80, y1: 180, x2: 200, y2: -80, dur: 9, delay: 2 },
    { id: 3, size: 3, x1: 200, y1: 100, x2: -160, y2: -100, dur: 11, delay: 0.5 },
    { id: 4, size: 4, x1: -200, y1: 60, x2: 120, y2: -180, dur: 7, delay: 3 },
    { id: 5, size: 3, x1: 80, y1: 200, x2: -200, y2: 60, dur: 12, delay: 1.5 },
    { id: 6, size: 5, x1: -120, y1: -200, x2: 180, y2: 120, dur: 9, delay: 2.5 },
    { id: 7, size: 3, x1: 160, y1: -60, x2: -80, y2: 200, dur: 10, delay: 0.8 },
];

const ORBIT_RINGS = [
    { radius: 155, size: 12, dur: 12, delay: 0, color: 'var(--mint-accent)', shape: '50%' },
    { radius: 175, size: 8, dur: 18, delay: -4, color: 'rgba(59,130,246,0.9)', shape: '4px' },
    { radius: 165, size: 10, dur: 22, delay: -8, color: 'rgba(255,200,100,0.85)', shape: '50%' },
];

const HeroVisual = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const [currentPartner, setCurrentPartner] = useState(0);

    const partners = [
        { name: 'Tshimologong', logo: logoTshimologong },
        { name: 'Exceptional Difference', logo: 'https://exceptionaldifference.com/wp-content/uploads/2024/08/XD-Logo-Stacked.png' },
        {
            name: 'Wits University',
            logo: null,
            isCustom: true,
            component: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: '0 12px', gap: '6px' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 900, fontFamily: 'Georgia, serif', color: 'var(--text-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.1 }}>WITS</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, fontFamily: 'var(--font-main)', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center' }}>UNIVERSITY</span>
                    <div style={{ width: '40px', height: '2px', background: 'var(--mint-accent)', borderRadius: '2px', marginTop: '4px' }} />
                </div>
            )
        },
    ];

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setCurrentPartner((prev) => (prev + 1) % partners.length);
        }, 3500);

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set((e.clientX - innerWidth / 2) / 28);
            mouseY.set((e.clientY - innerHeight / 2) / 28);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(logoInterval);
        };
    }, [mouseX, mouseY, partners.length]);

    const layer1X = useTransform(springX, v => v * 1.2);
    const layer1Y = useTransform(springY, v => v * 1.2);
    const layer2X = useTransform(springX, v => v * -0.7);
    const layer2Y = useTransform(springY, v => v * -0.7);
    const layer3X = useTransform(springX, v => v * 0.4);
    const layer3Y = useTransform(springY, v => v * 0.4);

    return (
        <div style={{ position: 'relative', width: '100%', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px', overflow: 'visible' }}>

            {/* ── Ambient background glows ── */}
            <motion.div style={{ position: 'absolute', width: '380px', height: '380px', background: 'radial-gradient(circle, var(--mint-glow) 0%, transparent 65%)', zIndex: 0, x: layer3X, y: layer3Y }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div style={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)', zIndex: 0, x: layer2X, y: layer2Y, top: '10%', right: '8%' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />

            {/* ── Floating accent cards ── */}
            <motion.div
                style={{ position: 'absolute', width: '90px', height: '90px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', border: '1px solid var(--mint-accent)', borderRadius: '24px', zIndex: 1, x: layer2X, y: layer2Y, top: '12%', left: '8%' }}
                animate={{ y: [0, -18, 0], rotate: [12, 22, 12], boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 20px rgba(16,185,129,0.4)', '0 0 0px rgba(16,185,129,0)'] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--mint-accent)" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
            </motion.div>

            <motion.div
                style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(59,130,246,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(59,130,246,0.35)', borderRadius: '50%', zIndex: 1, x: layer2X, y: layer2Y, bottom: '18%', right: '10%' }}
                animate={{ y: [0, 28, 0], scale: [1, 1.1, 1], boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 18px rgba(59,130,246,0.4)', '0 0 0px rgba(59,130,246,0)'] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                style={{ position: 'absolute', width: '42px', height: '42px', background: 'rgba(255,200,80,0.1)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,200,80,0.3)', borderRadius: '10px', zIndex: 1, bottom: '25%', left: '14%' }}
                animate={{ y: [0, -24, 0], rotate: [0, 45, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* ── Central hero sphere ── */}
            <motion.div style={{ position: 'relative', width: '270px', height: '270px', zIndex: 3, x: layer1X, y: layer1Y }}>

                {/* Breathing outer ring */}
                <motion.div
                    style={{ position: 'absolute', inset: '-16px', borderRadius: '50%', border: '1px solid rgba(16,185,129,0.25)', zIndex: 0 }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    style={{ position: 'absolute', inset: '-32px', borderRadius: '50%', border: '1px solid rgba(16,185,129,0.1)', zIndex: 0 }}
                    animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                />

                {/* Sphere shell */}
                <motion.div
                    style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.35), inset 0 0 30px rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden', padding: '40px' }}
                    whileHover={{ scale: 1.04, borderColor: 'var(--mint-accent)', boxShadow: '0 30px 70px rgba(0,0,0,0.4), 0 0 40px rgba(16,185,129,0.2), inset 0 0 30px rgba(255,255,255,0.08)' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                    {/* Interior colour pulse */}
                    <motion.div
                        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.25, 0.08, 0.25] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', width: '100%', height: '100%', background: 'var(--mint-accent)', borderRadius: '50%', filter: 'blur(45px)' }}
                    />

                    {/* Logo cycling — smooth fade + gentle scale */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPartner}
                            initial={{ opacity: 0, scale: 0.88, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: -10 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', maxHeight: '100%', position: 'relative', zIndex: 1 }}
                        >
                            {partners[currentPartner].isCustom
                                ? partners[currentPartner].component
                                : <img
                                    src={partners[currentPartner].logo}
                                    alt={partners[currentPartner].name}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'var(--hero-logo-filter)' }}
                                />
                            }
                        </motion.div>
                    </AnimatePresence>

                    {/* Partner name label */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`label-${currentPartner}`}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 0.5, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.15 }}
                            style={{ position: 'absolute', bottom: '14px', left: 0, right: 0, textAlign: 'center', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-primary)', fontFamily: 'var(--font-main)' }}
                        >
                            {partners[currentPartner].name}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Orbiting dots — rotate the arm, translate outward */}
                {ORBIT_RINGS.map((ring, i) => (
                    <motion.div
                        key={i}
                        style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0, zIndex: 4 }}
                        animate={{ rotate: [ring.startAngle, ring.startAngle + 360] }}
                        transition={{ duration: ring.dur, repeat: Infinity, ease: 'linear' }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: `${ring.radius}px`,
                            top: `-${ring.size / 2}px`,
                            width: `${ring.size}px`,
                            height: `${ring.size}px`,
                            background: ring.color,
                            borderRadius: ring.shape,
                            boxShadow: `0 0 10px ${ring.color}, 0 0 20px ${ring.color}55`,
                        }} />
                    </motion.div>
                ))}

                {/* Dashed orbit path (decorative) */}
                <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2, pointerEvents: 'none' }} width="360" height="360" viewBox="0 0 360 360">
                    <circle cx="180" cy="180" r="155" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                    <circle cx="180" cy="180" r="175" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" strokeDasharray="3 12" />
                </svg>

            </motion.div>

            {/* ── Scattered particles ── */}
            {PARTICLES.map((p) => (
                <motion.div
                    key={p.id}
                    style={{ position: 'absolute', width: `${p.size}px`, height: `${p.size}px`, background: 'var(--mint-accent)', borderRadius: '50%', boxShadow: '0 0 8px var(--mint-glow)', zIndex: 2 }}
                    animate={{ x: [p.x1, p.x2, p.x1], y: [p.y1, p.y2, p.y1], opacity: [0, 0.7, 0] }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}

            {/* ── Progress dots (partner indicator) ── */}
            <div style={{ position: 'absolute', bottom: '-20px', display: 'flex', gap: '8px', zIndex: 5 }}>
                {partners.map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ width: i === currentPartner ? '20px' : '6px', opacity: i === currentPartner ? 1 : 0.35, background: i === currentPartner ? 'var(--mint-accent)' : 'var(--text-muted)' }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        style={{ height: '6px', borderRadius: '3px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroVisual;
