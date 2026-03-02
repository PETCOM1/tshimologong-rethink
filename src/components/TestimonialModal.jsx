import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, X, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';

const testimonials = [
    {
        id: 'graduate',
        quote: 'Although I started as a skeptic, the XD framework provided the clarity and tools I needed to lead my team effectively.',
        name: 'Exceptional Engineering Graduate',
        role: 'Team Lead',
        highlights: ['Team Leadership', 'Framework Mastery', 'Delivery Excellence']
    },
    {
        id: 'emilia',
        quote: "XD filled me with the passion and skill that I didn't know I could offer.",
        name: 'Emilia Vanderwerf',
        role: 'Senior Developer',
        highlights: ['Skill Transformation', 'Passion Driven', 'Engineering Excellence']
    },
    {
        id: 'architect',
        quote: "The programme transformed our delivery pipeline. Technical debt is no longer a blocker but a managed asset.",
        name: 'Senior Lead Architect',
        role: 'Enterprise Architect',
        highlights: ['Pipeline Transformation', 'Tech Debt Management', 'System Scalability']
    },
    {
        id: 'partner',
        quote: "Real-world engineering at its finest. The bridge between theory and practice is perfectly built here.",
        name: 'Wits University Partner',
        role: 'Academic Liaison',
        highlights: ['Applied Theory', 'Industry Standards', 'Academic Rigour']
    },
    {
        id: 'fintech',
        quote: "I've gained more practical engineering knowledge in 9 months than in 4 years of previous study.",
        name: 'Software Engineer, FinTech',
        role: 'FinTech Specialist',
        highlights: ['Practical Knowledge', 'Accelerated Learning', 'Value Delivery']
    }
];

const TestimonialModal = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;

    const openModal = (t) => { setActive(t); setOpen(true); };
    const closeModal = () => { setOpen(false); };

    return (
        <section className="section" style={{ background: 'var(--navy-base)', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <div className="glass-pill" style={{ marginBottom: '16px' }}>REAL STORIES</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}>Impact Stories</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '16px auto 0' }}>
                        Hear from the engineers and leaders who have transformed their engineering capability.
                    </p>
                </motion.div>

                <div style={{ position: 'relative' }}>
                    <TestimonialCarousel
                        testimonials={testimonials}
                        onItemClick={openModal}
                    />
                </div>
            </div>

            <AnimatePresence>
                {open && active && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: 'center', padding: isMobile ? '0' : '20px' }}>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(7, 15, 28, 0.9)',
                                backdropFilter: 'blur(20px)',
                            }}
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.9, y: 30 }}
                            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                            exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                background: 'var(--navy-surface)',
                                border: isMobile ? 'none' : '1px solid var(--glass-border)',
                                borderTop: isMobile ? '1px solid var(--glass-border)' : '1px solid var(--glass-border)',
                                borderRadius: isMobile ? '32px 32px 0 0' : '32px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : 'minmax(300px, 1fr) 1.5fr',
                                height: isMobile ? '85vh' : 'min(700px, 90vh)',
                                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 20,
                                    transition: 'var(--transition-smooth)'
                                }}
                            >
                                <X size={18} />
                            </button>

                            {/* Left Side: Stats/Programme Info */}
                            <div style={{
                                padding: isMobile ? '40px 24px 24px' : '60px 40px',
                                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)',
                                borderRight: isMobile ? 'none' : '1px solid var(--glass-border)',
                                borderBottom: isMobile ? '1px solid var(--glass-border)' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '32px',
                                overflowY: 'auto'
                            }}>
                                <div>
                                    <div style={{ color: 'var(--mint-accent)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                        PROGRAMME SUCCESS
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Exceptional Impact</h3>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr', gap: isMobile ? '16px' : '24px' }}>
                                    {[
                                        { icon: Calendar, label: 'Intake', text: 'April 2025' },
                                        { icon: Award, label: 'Status', text: 'Certified' },
                                        { icon: BookOpen, label: 'Domain', text: 'Engineering' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <div style={{
                                                width: '32px', height: '32px', borderRadius: '8px',
                                                background: 'rgba(16, 185, 129, 0.1)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'var(--mint-accent)'
                                            }}>
                                                <item.icon size={16} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>{item.label}</div>
                                                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px' }}>CORE HIGHLIGHTS</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {active.highlights?.map(h => (
                                            <span key={h} style={{
                                                padding: '4px 10px',
                                                borderRadius: '6px',
                                                background: 'var(--glass-bg)',
                                                border: '1px solid var(--glass-border)',
                                                fontSize: '0.7rem',
                                                fontWeight: 500
                                            }}>{h}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Quote content */}
                            <div style={{ padding: isMobile ? '32px 24px 60px' : '60px', display: 'flex', flexDirection: 'column', position: 'relative', overflowY: 'auto' }}>
                                <div style={{ marginBottom: '24px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #10B981, #059669)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Quote size={20} color="#fff" />
                                    </div>
                                </div>

                                <blockquote style={{
                                    fontSize: isMobile ? '1.1rem' : '1.4rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-primary)',
                                    fontWeight: 500,
                                    fontStyle: 'italic',
                                    marginBottom: '32px',
                                }}>
                                    "{active.quote}"
                                </blockquote>

                                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '24px' }}>
                                    <div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{active.name}</div>
                                        <div style={{ color: 'var(--mint-accent)', fontWeight: 600, fontSize: '0.85rem' }}>{active.role}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Engineering Graduate</div>
                                    </div>

                                    <button className="btn-secondary" style={{ padding: '10px 16px', fontSize: '0.8rem', display: 'flex', gap: '8px', alignItems: 'center', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
                                        View Case Study <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TestimonialModal;
