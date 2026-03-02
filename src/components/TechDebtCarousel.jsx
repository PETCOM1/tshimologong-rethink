import React, { useState, useEffect, useRef } from 'react';
import {
    Link2, Anchor, PackageOpen, Wind, Clock, DoorOpen, Brain
} from 'lucide-react';

const ITEMS = [
    {
        num: '01',
        title: 'Gordian Knots',
        desc: 'Implementations with highly convoluted structures — like balls of spaghetti. Developers fear making changes because it is hard to change and easy to break things.',
        Icon: Link2
    },
    {
        num: '02',
        title: 'Barnacle Ware',
        desc: 'Core features that worked well, but too many one-off customer requests attached like barnacles. Soon there are more barnacles than boat.',
        Icon: Anchor
    },
    {
        num: '03',
        title: 'Glut',
        desc: 'The system is choked with too many low-value items — feature glut, application glut, data glut. All of it slows development and system performance.',
        Icon: PackageOpen
    },
    {
        num: '04',
        title: 'Environmental Drag',
        desc: 'Work feels like slogging through mud. Bad tools, byzantine processes, bad meetings — dozens of small annoyances accumulate into major drag on speed.',
        Icon: Wind
    },
    {
        num: '05',
        title: 'The World Moved On...',
        desc: 'Developers feel trapped in the past as better ways emerge around them. Out-of-date technology and outdated designs no longer match current approaches.',
        Icon: Clock
    },
    {
        num: '06',
        title: 'Trap Doors',
        desc: 'Progress derailed when a trap door opens. Missing foundations, incorrect dependencies, or late-discovered issues turn quick changes into long ordeals.',
        Icon: DoorOpen
    },
    {
        num: '07',
        title: 'Skill Debt',
        desc: 'Lack of expertise in critical areas slows everything down. New domains make veterans into novices. Expertise mismatches silently erode delivery capacity.',
        Icon: Brain
    }
];

const MINT = 'linear-gradient(135deg, #10B981, #059669)';

const TechDebtCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const indexRef = useRef(0);
    const n = ITEMS.length;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const cardWidth = isMobile ? Math.min(width - 40, 340) : 440;
    const xOffset = isMobile ? (cardWidth + 20) : 360;

    const goTo = (i) => {
        const next = ((i % n) + n) % n;
        indexRef.current = next;
        setCurrent(next);
    };

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => goTo(indexRef.current + 1), 3500);
        return () => clearInterval(id);
    }, [paused]);

    const getRelPos = (i) => {
        let rel = i - current;
        if (rel > n / 2) rel -= n;
        if (rel < -n / 2) rel += n;
        return rel;
    };

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ userSelect: 'none', width: '100%' }}
        >
            {/* 3D Stage */}
            <div style={{
                position: 'relative',
                height: isMobile ? '380px' : '420px',
                perspective: '1200px',
                overflow: 'hidden',
                marginBottom: '40px'
            }}>
                {ITEMS.map((item, i) => {
                    const rel = getRelPos(i);
                    const isActive = rel === 0;
                    if (Math.abs(rel) > 2) return null;

                    const x = rel * xOffset;
                    const z = isActive ? 0 : -180 - Math.abs(rel) * 80;
                    const scale = isActive ? 1 : 0.72 - Math.abs(rel) * 0.06;
                    const opacity = isActive ? 1 : 0.45 - Math.abs(rel) * 0.1;

                    return (
                        <div
                            key={i}
                            onClick={() => { setPaused(true); goTo(i); }}
                            style={{
                                position: 'absolute', top: '50%', left: '50%', width: `${cardWidth}px`,
                                transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                                opacity, zIndex: 10 - Math.abs(rel),
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: isActive ? 'default' : 'pointer',
                            }}
                        >
                            <div style={{
                                borderRadius: '28px',
                                border: isActive ? '1px solid var(--mint-accent)' : '1px solid var(--glass-border)',
                                background: 'var(--navy-surface)', overflow: 'hidden',
                                boxShadow: isActive ? '0 32px 80px rgba(0,0,0,0.3)' : '0 16px 40px rgba(0,0,0,0.1)',
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                                <div style={{ height: '5px', background: MINT }} />
                                <div style={{ padding: isMobile ? '32px' : '44px 48px 48px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                                        {/* Lucide icon in gradient tile */}
                                        <div style={{
                                            width: isMobile ? '56px' : '72px', height: isMobile ? '56px' : '72px', borderRadius: '18px',
                                            background: MINT, display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', flexShrink: 0
                                        }}>
                                            <item.Icon size={isMobile ? 24 : 32} color="#fff" strokeWidth={1.5} />
                                        </div>
                                        <span style={{
                                            fontSize: isMobile ? '3rem' : '4.5rem', fontWeight: 900, lineHeight: 1, opacity: 0.2,
                                            background: MINT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                                        }}>
                                            {item.num}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => { setPaused(true); goTo(current - 1); }} style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    border: '1px solid var(--glass-border)', background: 'var(--glass-bg)',
                    color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>←</button>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {ITEMS.map((_, i) => (
                        <button key={i} onClick={() => { setPaused(true); goTo(i); }} style={{
                            width: i === current ? '32px' : '8px', height: '8px', borderRadius: '100px',
                            background: i === current ? MINT : 'var(--glass-border)',
                            border: 'none', cursor: 'pointer', padding: 0,
                            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)'
                        }} />
                    ))}
                </div>

                <button onClick={() => { setPaused(true); goTo(current + 1); }} style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    border: '1px solid rgba(16,185,129,0.4)', background: 'rgba(16,185,129,0.08)',
                    color: '#10B981', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>→</button>
            </div>
        </div>
    );
};

export default TechDebtCarousel;
