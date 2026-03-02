import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, GraduationCap, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import Navigation from './components/Navigation';
import Typewriter from './components/Typewriter';
import TechDebtCarousel from './components/TechDebtCarousel';
import DeliveryPartners from './components/DeliveryPartners';
import TestimonialModal from './components/TestimonialModal';
import FundingSection from './components/FundingSection';
import HeroVisual from './components/HeroVisual';
import { fadeUp, cardPop, stagger, slideLeft, slideRight, viewport } from './animations';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const courseMeta = [
    { label: 'Duration', value: '9 Months' },
    { label: 'Effort', value: '4-6 Weekly hours' },
    { label: 'Study Hours', value: '113.5 Notional' },
    { label: 'Investment', value: 'R 80 000' },
    { label: 'Next Intake', value: '1 April 2025' }
  ];

  return (
    <div className="app-root">
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* ── 1. Hero ── */}
      <section id="hero" className="section" style={{ paddingTop: 'clamp(120px, 15vh, 180px)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(40px, 5vw, 60px)', alignItems: 'center' }}>

            <motion.div variants={stagger(0.12)} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="glass-pill" style={{ marginBottom: '24px' }}>
                EXCEPTIONAL ENGINEERING PROGRAMME
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
                Is your business struggling with <br />
                <span style={{ color: 'var(--mint-accent)' }}>
                  <Typewriter phrases={['technical debt?', 'legacy software?', 'delivery speed?']} delay={100} pause={2500} />
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '48px', maxWidth: '600px', lineHeight: 1.75 }}>
                Navigating the challenges of legacy systems doesn't have to feel like slogging through mud.
                The Exceptional Engineering programme specialises in transforming technical debt into technical wealth.
                Our proven methodologies bridge the gap between theory and your organisation's reality.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a
                  href="https://calendly.com/munya-hflr"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon"
                  style={{ textDecoration: 'none' }}
                >
                  Schedule a Call <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'middle' }} />
                </a>
                <button className="btn-secondary">See the Exceptional Difference</button>
              </motion.div>
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" animate="show" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Delivery Partners ── */}
      <DeliveryPartners />

      {/* ── 3. Technical Debt ── */}
      <section id="debt" className="section">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} style={{ marginBottom: '80px', maxWidth: '800px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>The 7 Types of Technical Debt Slowing Your Speed to Value</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Understanding the different forms of technical debt is the first step toward overcoming them.
              Identify which of these are hampering your organisation's growth.
            </p>
          </motion.div>
          <TechDebtCarousel />
        </div>
      </section>

      {/* ── 4. Transform Your Engineering Journey ── */}
      <section id="transform" className="section" style={{ background: 'var(--navy-surface)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Transform Your Engineering Journey</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem' }}>
              Whether you're an individual looking to advance your career or a company aiming to build world-class engineering teams,
              our programme provides the tools and expertise you need to succeed.
            </p>
          </motion.div>

          <div className="transform-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport} className="glass" style={{ padding: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--mint-accent)' }}>For Companies</h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                {[
                  'Reduce technical debt and accelerate development cycles by up to 30%.',
                  'Access B-BBEE and SDL funding options to maximise your training investment.',
                  'Build and retain high-performing engineering teams through continuous professional development.',
                  'Dramatically reduce rework and improve first-time-right delivery.',
                  'Create a culture of engineering excellence that attracts and keeps top talent.',
                  'Transform your engineering capability into a competitive advantage.'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '14px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} color="var(--mint-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-neon">Schedule a Call →</button>
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={viewport} className="glass" style={{ padding: '60px', border: '1px solid var(--mint-accent)' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>For Individuals</h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                {[
                  'Earn an approved certificate from Wits University, a globally recognised institution.',
                  'Master engineering excellence principles used by top technology companies worldwide.',
                  'Join an elite network of exceptional engineers and technology leaders.',
                  'Learn from world-class instructors with decades of industry experience.',
                  'Accelerate your career growth and increase your value in the technology market.',
                  'Develop expertise in managing technical debt and delivering high-value software.'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '14px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} color="var(--mint-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-secondary" style={{ width: '100%', borderColor: 'var(--mint-accent)' }}>
                Become an Exceptional Engineer →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Programme Details ── */}
      <section className="section">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Programme Details</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Everything you need to know about the programme structure.</p>
          </motion.div>
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport}
            className="responsive-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}
          >
            {courseMeta.map(m => (
              <motion.div variants={cardPop} key={m.label} className="glass" style={{ padding: '36px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--mint-accent)', marginBottom: '12px', letterSpacing: '0.12em', fontWeight: 600 }}>
                  {m.label.toUpperCase()}
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{m.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. Certification ── */}
      <section className="section" style={{ background: 'var(--navy-surface)' }}>
        <div className="container">
          <div className="transform-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport}>
              <div className="glass-pill" style={{ marginBottom: '24px' }}>WITS UNIVERSITY ACCREDITED</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Earn a Globally Recognised Certificate</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                Upon successful completion of the programme, participants earn an approved certificate from the
                University of the Witwatersrand — one of Africa's leading research universities and a globally respected institution.
              </p>
              <button className="btn-neon">Download Supporting Documents</button>
            </motion.div>
            <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={viewport} className="glass" style={{ padding: '60px', textAlign: 'center' }}>
              <div style={{ marginBottom: '24px' }}>
                <GraduationCap size={64} color="var(--mint-accent)" strokeWidth={1.2} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>University of the Witwatersrand</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Approved Certificate upon completion</p>
              <p style={{ color: 'var(--mint-accent)', fontWeight: 700 }}>113.5 Notional study hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. Funding ── */}
      <div id="funding"><FundingSection /></div>

      {/* ── 8. Expert Profiles ── */}
      <section id="experts" className="section">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem' }}>Led by Industry Experts</h2>
          </motion.div>
          <motion.div variants={stagger(0.15)} initial="hidden" whileInView="show" viewport={viewport}
            className="transform-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}
          >
            {[
              {
                name: 'Alan Willett',
                photo: 'https://assets.softr-files.com/applications/c3c67eec-2dd0-4e4e-b361-358b1332483d/assets/dc06721c-7c83-4c4e-9137-41b11fa2ea0c.jpeg',
                bio: 'Alan Willett is an author, consultant, and speaker with over 25 years of experience in the software industry. He has worked with companies ranging from tiny startups to Fortune 500 giants including HP, Oracle, Microsoft, and NASA. He is the author of several books, including "Leading the Unleadable."'
              },
              {
                name: 'Julia Mullaney',
                photo: 'https://assets.softr-files.com/applications/c3c67eec-2dd0-4e4e-b361-358b1332483d/assets/fbcfcd74-ab07-40b4-b897-ba1953588915.jpeg',
                bio: 'Julia Mullaney is an engineering excellence consultant with a focus on commitment-based management and quality engineering. Co-founder of Exceptional Difference, former IBM veteran with extensive experience in leading complex engineering transformations.'
              }
            ].map(expert => (
              <motion.div variants={cardPop} key={expert.name} className="glass responsive-stack" style={{ padding: 'clamp(30px, 5vw, 60px)', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', flexShrink: 0, overflow: 'hidden', border: '3px solid var(--mint-accent)', boxShadow: '0 0 24px var(--mint-glow)' }}>
                  <img src={expert.photo} alt={expert.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'var(--mint-accent)';
                      e.target.parentElement.style.display = 'flex';
                      e.target.parentElement.style.alignItems = 'center';
                      e.target.parentElement.style.justifyContent = 'center';
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{expert.name}</h3>
                  <div className="glass-pill" style={{ marginBottom: '16px' }}>LEAD INSTRUCTOR</div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{expert.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Client Testimonial ── */}
      <TestimonialModal />

      {/* ── 9. Footer ── */}
      <footer className="section" style={{ background: 'var(--navy-base)', borderTop: '1px solid var(--glass-border)', padding: 'clamp(40px, 8vw, 80px) 0 40px' }}>
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px', gap: '40px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '16px' }}>EXCEPTIONAL</div>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.6 }}>
                Transforming technical debt into technical wealth through proven engineering excellence methodologies.
              </p>
            </div>
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <h4 style={{ marginBottom: '20px', color: 'var(--mint-accent)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>PARTNERS</h4>
                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
                  <li><a href="https://tshimologong.joburg/" style={{ color: 'var(--text-muted)' }}>Tshimologong</a></li>
                  <li><a href="https://exceptionaldifference.com/" style={{ color: 'var(--text-muted)' }}>Exceptional Difference</a></li>
                  <li><a href="https://www.wits.ac.za/" style={{ color: 'var(--text-muted)' }}>Wits University</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '20px', color: 'var(--mint-accent)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>RESOURCES</h4>
                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
                  <li>Schedule a Call</li>
                  <li>Download Documents</li>
                  <li>Wits University</li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '40px', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center' }}>
            &copy; 2026 EXCEPTIONAL ENGINEERING. IN PARTNERSHIP WITH TSHIMOLOGONG &amp; UNIVERSITY OF THE WITWATERSRAND.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
