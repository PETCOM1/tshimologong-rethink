import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Tshimologong_Logo.png';

const Navigation = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Scroll Spy Logic
        const sections = ['hero', 'debt', 'transform', 'funding', 'experts'];
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'Technical Debt', href: '#debt', id: 'debt' },
        { name: 'Programme', href: '#transform', id: 'transform' },
        { name: 'Funding', href: '#funding', id: 'funding' },
        { name: 'Experts', href: '#experts', id: 'experts' },
    ];

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <nav style={{
            position: 'fixed',
            top: isScrolled ? '20px' : '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isScrolled ? 'calc(100% - 40px)' : '100%',
            maxWidth: '1200px',
            zIndex: 1000,
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: isScrolled ? '10px 20px' : '24px 40px',
            backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
            backdropFilter: isScrolled ? 'var(--glass-blur)' : 'none',
            border: isScrolled ? '1px solid var(--glass-border)' : 'none',
            borderRadius: isScrolled ? '40px' : '0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="#hero" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <motion.img
                        src={logo}
                        alt="Tshimologong Logo"
                        className="logo-themed"
                        animate={{ height: isScrolled ? '28px' : '40px' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                </a>
            </div>

            {/* Desktop Links with Fluid Active Pill */}
            <div className="mobile-hide" style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                background: isScrolled ? 'rgba(255,255,255,0.03)' : 'transparent',
                padding: '4px',
                borderRadius: '30px',
                border: isScrolled ? '1px solid var(--glass-border)' : 'none'
            }}>
                {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: isActive ? 'var(--mint-accent)' : (isScrolled || theme === 'light' ? 'var(--text-primary)' : 'rgba(255,255,255,0.7)'),
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                padding: '8px 16px',
                                position: 'relative',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            <span style={{ position: 'relative', zIndex: 1 }}>{link.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="activePill"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--mint-accent)',
                                        borderRadius: '20px',
                                        zIndex: 0
                                    }}
                                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                        </a>
                    );
                })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://calendly.com/munya-hflr"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-neon mobile-hide"
                        style={{ padding: '8px 24px', fontSize: '0.85rem', borderRadius: '30px', textDecoration: 'none' }}
                    >
                        Enquire Now
                    </motion.a>

                    {/* Hamburger Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="mobile-only"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                        }}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(10px)',
                                zIndex: -1
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                marginTop: '16px',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'var(--glass-blur)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '32px',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                zIndex: 999,
                                boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
                            }}
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    style={{
                                        color: activeSection === link.id ? 'var(--mint-accent)' : 'var(--text-primary)',
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        padding: '16px 20px',
                                        borderRadius: '16px',
                                        background: activeSection === link.id ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.03)',
                                        border: activeSection === link.id ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="https://calendly.com/munya-hflr"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-neon"
                                style={{ width: '100%', justifyContent: 'center', marginTop: '20px', borderRadius: '16px', padding: '18px', textDecoration: 'none' }}
                            >
                                Enquire Now
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
