import React, { useState, useEffect, useRef } from 'react';
import { granitesData, granitesCategories } from '../data/granitesData';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { gsap } from 'gsap';

export default function GranitesExplorer() {
  const [activeTab, setActiveTab] = useState('all');
  const gridRef = useRef(null);

  const filtered = activeTab === 'all' ? granitesData : granitesData.filter((item) => item.category === activeTab);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, { opacity: 0, y: 28 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' });
    }
  }, [activeTab]);

  return (
    <section style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">— Everlasting Durability</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', marginTop: '12px', fontWeight: 300 }}>
            Premium Granites Collection
          </h2>
          <div style={{ width: '50px', height: '1px', background: 'var(--color-accent)', margin: '16px auto 0' }} />
          <p style={{ fontSize: '0.92rem', color: '#5a4a3a', maxWidth: '580px', margin: '16px auto 0', lineHeight: 1.7, fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            Hyper-durable Indian and exotic imported granites, cut and polished to absolute perfection.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
          {[{ id: 'all', name: 'All Granites' }, ...granitesCategories].map((cat) => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '10px 24px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s',
                fontFamily: 'Jost, sans-serif',
                border: activeTab === cat.id ? '1.5px solid var(--color-accent)' : '1.5px solid #e8e2d8',
                background: activeTab === cat.id ? 'var(--color-accent)' : 'transparent',
                color: activeTab === cat.id ? '#ffffff' : '#5a4a3a',
              }}
            >{cat.name}</button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="granite-grid">
          {filtered.map((stone) => (
            <div key={stone.id} className="glass-panel"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s', border: '1px solid var(--color-border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(94,108,91,0.12)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.06)'; }}>

              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img src={stone.image} alt={stone.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')} onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <span style={{ position: 'absolute', top: '16px', left: '16px', padding: '4px 10px', borderRadius: '2px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-accent)', fontWeight: 600, fontFamily: 'Syncopate, sans-serif' }}>
                  {stone.category === 'indian' ? 'Indian' : 'Imported'}
                </span>
                <span style={{ position: 'absolute', bottom: '16px', left: '16px', fontSize: '13px', color: '#0a0a0a', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }} />
                  {stone.origin.split(',')[0]}
                </span>
              </div>

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#0a0a0a', fontWeight: 600, marginBottom: '10px', fontFamily: 'Cormorant Garamond, serif' }}>{stone.name}</h3>
                <p className="line-clamp-3" style={{ fontSize: '0.88rem', color: '#5a4a3a', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{stone.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', marginBottom: '20px', padding: '16px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', fontFamily: 'Jost, sans-serif' }}>
                  <div>
                    <span style={{ display: 'block', color: '#8a7a6a', textTransform: 'uppercase', fontSize: '9px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '1px' }}>Thickness</span>
                    <span style={{ color: '#0a0a0a', fontWeight: 500 }}>{stone.thickness}</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', color: '#8a7a6a', textTransform: 'uppercase', fontSize: '9px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '1px' }}>Finishing</span>
                    <span style={{ color: '#0a0a0a', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>{stone.finishing}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#8a7a6a', display: 'block', marginBottom: '8px', fontWeight: 600, fontFamily: 'Syncopate, sans-serif', letterSpacing: '1px' }}>Best For</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {stone.applications.slice(0, 3).map((app, i) => (
                      <span key={i} style={{ padding: '4px 10px', borderRadius: '4px', background: 'var(--color-bg-warm)', fontSize: '11px', color: 'var(--color-body)', border: '1px solid var(--color-border)', fontFamily: 'Jost, sans-serif' }}>{app}</span>
                    ))}
                    {stone.applications.length > 3 && <span style={{ padding: '4px 10px', borderRadius: '4px', background: 'var(--color-bg-warm)', fontSize: '11px', color: 'var(--color-accent)', border: '1px solid var(--color-border)', fontFamily: 'Jost, sans-serif' }}>+{stone.applications.length - 3}</span>}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                  <a href={`https://wa.me/919505877645?text=${encodeURIComponent(`Hi, I'm interested in ${stone.name} granite. Please share pricing.`)}`} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px', borderRadius: '4px', background: '#0a0a0a', color: '#ffffff', fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s', cursor: 'pointer', fontFamily: 'Jost, sans-serif' }}>
                    <MessageSquare size={13} /> WhatsApp
                  </a>
                  <a href="tel:+919505877645" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', borderRadius: '4px', border: '1px solid var(--color-border)', color: '#5a4a3a', transition: 'all 0.3s', cursor: 'pointer' }}>
                    <PhoneCall size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
