import React from 'react';

const TechDebtGrid = () => {
    const items = [
        {
            title: 'Gordian Knots',
            desc: 'Highly convoluted and complex structures, like balls of spaghetti. Hard to change and easy to break.',
            icon: '</>'
        },
        {
            title: 'Barnacle Ware',
            desc: 'Implementations starting with core features that work well, but accumulating specialized customer requests.',
            icon: '||'
        },
        {
            title: 'Glut',
            desc: 'Systems choked with too many low-value items. Slows development and system performance.',
            icon: '[<>]'
        },
        {
            title: 'Environmental Drag',
            desc: 'Cumbersome tools, byzantine process steps, and other small annoyances that create drag on speed.',
            icon: '*'
        },
        {
            title: 'The World Moved On...',
            desc: 'Developers feel trapped in the past using out-of-date technology or underlying designs that dont match.',
            icon: '->'
        },
        {
            title: 'Trap Doors',
            desc: 'Work that gets derailed suddenly. Changes that should have been quick end up taking a long time.',
            icon: '...'
        }
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {items.map((item, i) => (
                <div key={i} className="card" style={{ padding: '32px' }}>
                    <div style={{
                        color: 'var(--mint-green)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        marginBottom: '16px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-slate)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default TechDebtGrid;
