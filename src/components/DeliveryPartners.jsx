import React from 'react';
import logo from '../assets/Tshimologong_Logo.png';

const DeliveryPartners = () => {
    const partners = [
        {
            name: 'Tshimologong',
            logo: logo,
            isImage: true,
            filter: 'brightness(0) invert(1)',
            link: 'https://tshimologong.joburg/'
        },
        {
            name: 'Exceptional Difference',
            logo: 'https://exceptionaldifference.com/wp-content/uploads/2024/08/XD-Logo-Stacked.png',
            isImage: true,
            filter: 'brightness(0) invert(1)',
            link: 'https://exceptionaldifference.com/'
        },
        {
            name: 'University of the Witwatersrand',
            logo: 'https://www.wits.ac.za/media/wits-university/news-and-events/images/logos-and-icons/Wits-Colloquial-colour-stack-600x300-600x300.png',
            isImage: true,
            filter: 'brightness(0) invert(1)',
            link: 'https://www.wits.ac.za/'
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--navy-base)', padding: 'clamp(60px, 10vw, 100px) 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '24px', fontWeight: 700 }}>Exceptional Engineering Experience Delivery Partners</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '1000px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                        Wits Incubator ta Tshimologong and Exceptional Difference present an exclusive engineering programme designed for technology leaders and practitioners. This unique collaboration focuses on mastering the essential X-Factors of engineering excellence: Commitment, Quality, Value, and Culture. Delivered in partnership with the University of the Witwatersrand, which provides an approved certificate upon completion, the programme empowers both individuals and organisations to achieve engineering excellence.
                    </p>
                </div>

                <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'center' }}>
                    {partners.map((p, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ height: 'clamp(80px, 10vw, 120px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {p.isImage ? (
                                    <img src={p.logo} alt={p.name} className="logo-themed" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain', filter: p.filter || 'none' }} />
                                ) : (
                                    p.icon
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600 }}>{p.name}</h3>
                            <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'var(--mint-accent)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Read more <span style={{ fontSize: '1.2rem' }}>→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeliveryPartners;
