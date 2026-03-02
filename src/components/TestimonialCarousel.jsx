import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const MINT = 'linear-gradient(135deg, #10B981, #059669)';

const TestimonialCarousel = ({ testimonials, onItemClick }) => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const indexRef = useRef(0);
    const n = testimonials.length;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const cardWidth = isMobile ? Math.min(width - 40, 360) : 500;
    const xOffset = isMobile ? (cardWidth + 20) : 400;

    const goTo = (i) => {
        const next = ((i % n) + n) % n;
        indexRef.current = next;
        setCurrent(next);
    };

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => goTo(indexRef.current + 1), 5000);
        return () => clearInterval(id);
    }, [paused, n]);

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
            style={{ userSelect: 'none', width: '100%', position: 'relative' }}
        >
            {/* 3D Stage */}
            <div style={{ position: 'relative', height: isMobile ? '360px' : '380px', perspective: '1200px', overflow: 'hidden', marginBottom: '20px' }}>
                {testimonials.map((t, i) => {
                    const rel = getRelPos(i);
                    const isActive = rel === 0;
                    if (n > 3 && Math.abs(rel) > 2) return null;

                    const x = rel * xOffset;
                    const z = isActive ? 0 : -200 - Math.abs(rel) * 100;
                    const scale = isActive ? 1 : 0.8;
                    const opacity = isActive ? 1 : 0.4;

                    return (
                        <div
                            key={i}
                            onClick={() => {
                                if (isActive) {
                                    onItemClick(t);
                                } else {
                                    goTo(i);
                                }
                            }}
                            style={{
                                position: 'absolute', top: '50%', left: '50%', width: `${cardWidth}px`,
                                transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                                opacity, zIndex: 10 - Math.abs(rel),
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                            }}
                        >
                            <div className="glass" style={{
                                padding: isMobile ? '30px' : '40px',
                                textAlign: 'left',
                                background: 'var(--navy-surface)',
                                border: isActive ? '1px solid var(--mint-accent)' : '1px solid var(--glass-border)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                boxShadow: isActive ? '0 32px 80px rgba(0,0,0,0.3)' : '0 16px 40px rgba(0,0,0,0.1)',
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{
                                        width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px', borderRadius: '12px',
                                        background: MINT, display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Quote size={isMobile ? 20 : 24} color="#fff" />
                                    </div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--mint-accent)', fontWeight: 600, letterSpacing: '0.1em' }}>
                                        TESTIMONIAL
                                    </div>
                                </div>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: isMobile ? '1rem' : '1.1rem',
                                    lineHeight: 1.6,
                                    fontStyle: 'italic',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    minHeight: isMobile ? '4.8rem' : '5.2rem'
                                }}>
                                    "{t.quote}"
                                </p>

                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px', marginTop: '10px' }}>
                                    <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                                        {t.name}
                                    </div>
                                    <div style={{ color: 'var(--mint-accent)', fontSize: '0.8rem' }}>
                                        Exceptional Engineering Graduate
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
                <button onClick={() => { setPaused(true); goTo(current - 1); }} style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '1px solid var(--glass-border)', background: 'var(--glass-bg)',
                    color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'var(--transition-smooth)'
                }}>←</button>

                <div style={{ display: 'flex', gap: '10px' }}>
                    {testimonials.map((_, i) => (
                        <button key={i} onClick={() => { setPaused(true); goTo(i); }} style={{
                            width: i === current ? '24px' : '8px', height: '8px', borderRadius: '100px',
                            background: i === current ? 'var(--mint-accent)' : 'var(--glass-border)',
                            border: 'none', cursor: 'pointer', padding: 0,
                            transition: 'all 0.4s'
                        }} />
                    ))}
                </div>

                <button onClick={() => { setPaused(true); goTo(current + 1); }} style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '1px solid var(--mint-accent)', background: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--mint-accent)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'var(--transition-smooth)'
                }}>→</button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
