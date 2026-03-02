import React from 'react';
import {
    Briefcase, CreditCard, Building2, BarChart3, TrendingUp
} from 'lucide-react';

const iconTile = (Icon) => (
    <div style={{
        width: '52px', height: '52px', borderRadius: '14px',
        background: 'linear-gradient(135deg,#10B981,#059669)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px', flexShrink: 0
    }}>
        <Icon size={24} color="#fff" strokeWidth={1.8} />
    </div>
);

const Bullet = ({ items }) => (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '12px' }}>
        {items.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                <span style={{ color: 'var(--mint-accent)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                <span>{b}</span>
            </li>
        ))}
    </ul>
);

const GroupLabel = ({ label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg,#10B981,#059669)' }} />
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--mint-accent)', textTransform: 'uppercase' }}>
            {label}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
    </div>
);

const FundingSection = () => (
    <section className="section">
        <div className="container">

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                <div className="glass-pill" style={{ marginBottom: '20px' }}>FUNDING OPTIONS</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', marginBottom: '20px' }}>How to Fund Your Training</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
                    Discover multiple funding options available to South African companies for implementing the Exceptional Engineering course.
                </p>
            </div>

            {/* ── For Individuals ── */}
            <GroupLabel label="For Individuals" />
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '56px' }}>

                <div className="glass" style={{ padding: 'clamp(24px, 5vw, 44px)' }}>
                    {iconTile(Briefcase)}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Seek Employer Assistance</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '14px' }}>
                        By improving your skills and industry knowledge, you'll have an influence on the success of your organization.
                        Why wouldn't you ask your boss to help you fund your studies if it's going to have an impact on the way you do business?
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '14px' }}>
                        Here is a guide to show you how to request financial assistance from your employer.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                        If you are a Learning &amp; Development (L&amp;D) manager, or involved in training and upskilling for an organization,
                        you can request information regarding our corporate offering on our GetSmarter for business page.
                    </p>
                </div>

                <div className="glass" style={{ padding: 'clamp(24px, 5vw, 44px)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    {iconTile(CreditCard)}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Payment Options</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                        You can pay your course fees before the course starts, or you may opt for a split payment plan on courses that are
                        nine weeks and shorter. For courses 10 weeks and longer, there is a three-part payment plan available. To find out
                        more about payment options please visit our Payment and Financing page, or contact an Enrollment Adviser, to find
                        out which option you qualify for.
                    </p>
                </div>
            </div>

            {/* ── For Companies ── */}
            <GroupLabel label="For Companies" />
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>

                <div className="glass" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
                    {iconTile(Building2)}
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                        Skills Development Levy (SDL)
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        Utilise your company's Skills Development Levy contributions to fund employee training:
                    </p>
                    <Bullet items={[
                        'Claim back up to 20% of your SDL contributions through SETA grants',
                        'Access Mandatory and Discretionary grants for accredited training programmes',
                        'Benefit from tax incentives whilst investing in your workforce development',
                        'Align training with your Workplace Skills Plan (WSP) and Annual Training Report (ATR)'
                    ]} />
                </div>

                <div className="glass" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
                    {iconTile(BarChart3)}
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                        B-BBEE Skills Development
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        Improve your B-BBEE scorecard whilst investing in training:
                    </p>
                    <Bullet items={[
                        'Earn up to 20 points on your B-BBEE scorecard through skills development initiatives',
                        'Meet skills development targets for black employees',
                        'Invest in training that qualifies for both B-BBEE points and SDL claims',
                        'Support employment equity goals through targeted skills development programmes'
                    ]} />
                </div>

                <div className="glass" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
                    {iconTile(TrendingUp)}
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                        Leadership &amp; Development Budget
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        Leverage your HR and L&amp;D budget strategically:
                    </p>
                    <Bullet items={[
                        'Allocate training budget to critical skills development needs',
                        'Align training investments with organisational development goals',
                        'Create structured development paths for future leaders',
                        'Measure ROI through improved productivity and employee retention'
                    ]} />
                </div>

            </div>
        </div>
    </section>
);

export default FundingSection;
