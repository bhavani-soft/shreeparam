import React, { useState, useEffect, useRef } from 'react';
import { marblesData, marblesCategories } from '../data/marblesData';
import { ChevronLeft, ChevronRight, Maximize2, X, MessageSquare, PhoneCall } from 'lucide-react';
import { gsap } from 'gsap';

export default function MarblesExplorer() {
  const [activeCategory, setActiveCategory] = useState('white');
  const [activeProduct, setActiveProduct] = useState(null);
  const [lightbox, setLightbox] = useState(false);
  const showcaseRef = useRef(null);

  const categoryProducts = marblesData.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (categoryProducts.length > 0) setActiveProduct(categoryProducts[0]);
  }, [activeCategory]);

  useEffect(() => {
    if (showcaseRef.current) {
      gsap.fromTo(showcaseRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
    }
  }, [activeProduct]);

  if (!activeProduct) return null;

  const handlePrev = () => {
    const i = categoryProducts.findIndex((p) => p.id === activeProduct.id);
    setActiveProduct(categoryProducts[i === 0 ? categoryProducts.length - 1 : i - 1]);
  };
  const handleNext = () => {
    const i = categoryProducts.findIndex((p) => p.id === activeProduct.id);
    setActiveProduct(categoryProducts[i === categoryProducts.length - 1 ? 0 : i + 1]);
  };

  const catName = marblesCategories.find((c) => c.id === activeCategory)?.name;

  return (
    <section style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">— Imported Luxury</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', marginTop: '12px', fontWeight: 300 }}>
            Imported Marble Collection
          </h2>
          <div style={{ width: '50px', height: '1px', background: 'var(--color-accent)', margin: '16px auto 0' }} />
          <p style={{ fontSize: '0.92rem', color: '#5a4a3a', maxWidth: '580px', margin: '16px auto 0', lineHeight: 1.7, fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            Hand-selected premium marble blocks imported from Italy, Spain, Turkey, Greece, and beyond.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {marblesCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 24px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s',
                fontFamily: 'Jost, sans-serif',
                border: activeCategory === cat.id ? '1.5px solid var(--color-accent)' : '1.5px solid var(--color-border)',
                background: activeCategory === cat.id ? 'var(--color-accent)' : 'transparent',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--color-body)',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#5a4a3a', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'Jost, sans-serif' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span>Marbles</span><span>/</span><span style={{ color: 'var(--color-accent)' }}>{catName}</span><span>/</span><span style={{ color: '#0a0a0a', fontWeight: 500 }}>{activeProduct.name}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
            <button onClick={handlePrev} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5a4a3a', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'Jost, sans-serif' }}><ChevronLeft size={14} /> Prev</button>
            <button onClick={handleNext} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5a4a3a', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'Jost, sans-serif' }}>Next <ChevronRight size={14} /></button>
          </div>
        </div>

        {/* Showcase Grid */}
        <div ref={showcaseRef} className="glass-panel" style={{ padding: '32px', marginBottom: '48px', border: '1px solid var(--color-border)' }}>
          <div className="showcase-grid">
            <div
              onClick={() => setLightbox(true)}
              style={{ position: 'relative', cursor: 'zoom-in', background: 'var(--color-bg-warm)', minHeight: '340px', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s', minHeight: '340px' }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', bottom: '16px', right: '16px', padding: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: '1px solid var(--color-border)', color: 'var(--color-accent)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <Maximize2 size={14} />
              </div>
            </div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ padding: '3px 12px', borderRadius: '2px', background: 'var(--color-bg-warm)', border: '1px solid var(--color-border)', color: 'var(--color-accent)', fontSize: '9px', fontWeight: 600, fontFamily: 'Syncopate, sans-serif', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Premium</span>
                  <span style={{ fontSize: '11px', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>{activeProduct.origin}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0a0a0a', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border)', lineHeight: 1.2 }}>
                  {activeProduct.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#5a4a3a', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  {activeProduct.description}
                </p>

                {/* Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px', padding: '20px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '9px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '1.5px', color: '#8a7a6a', marginBottom: '6px' }}>Origin</span>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', fontFamily: 'Jost, sans-serif' }}>{activeProduct.origin}</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '9px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '1.5px', color: '#8a7a6a', marginBottom: '6px' }}>Thickness</span>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', fontFamily: 'Jost, sans-serif' }}>{activeProduct.thickness}</span>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <span style={{ display: 'block', fontSize: '9px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '1.5px', color: '#8a7a6a', marginBottom: '6px' }}>Finishing</span>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', fontFamily: 'Jost, sans-serif' }}>{activeProduct.finishing}</span>
                  </div>
                </div>

                {/* Applications */}
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ display: 'block', fontSize: '9px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '1.5px', color: '#8a7a6a', marginBottom: '10px' }}>Applications</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeProduct.applications.map((app, i) => (
                      <span key={i} style={{ padding: '5px 14px', borderRadius: '4px', background: 'var(--color-bg-warm)', border: '1px solid var(--color-border)', fontSize: '11px', color: 'var(--color-body)', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>{app}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href={`https://wa.me/919505877645?text=${encodeURIComponent(`Hello, I'm interested in ${activeProduct.name} marble. Please share pricing.`)}`} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ flex: 1, minWidth: '150px', justifyContent: 'center' }}>
                  <MessageSquare size={15} /> WhatsApp Quote
                </a>
                <a href="tel:+919505877645" className="btn-outline" style={{ flex: 1, minWidth: '130px', justifyContent: 'center' }}>
                  <PhoneCall size={15} /> Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div>
          <h4 style={{ fontSize: '10px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '2px', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '20px' }}>▸ Select Marble variant</h4>
          <div className="thumb-grid">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveProduct(product)}
                style={{
                  cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', border: activeProduct.id === product.id ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                  background: 'var(--color-bg)', transition: 'all 0.3s', transform: activeProduct.id === product.id ? 'scale(0.97)' : 'scale(1)',
                  boxShadow: activeProduct.id === product.id ? '0 6px 16px rgba(94,108,91,0.15)' : 'none'
                }}
              >
                <div style={{ width: '100%', height: '110px', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')} onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} />
                </div>
                <div style={{ padding: '10px', textAlign: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: activeProduct.id === product.id ? 'var(--color-accent)' : '#0a0a0a', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Jost, sans-serif' }}>{product.name}</span>
                  <span style={{ fontSize: '10px', color: '#8a7a6a', fontFamily: 'Jost, sans-serif' }}>{product.origin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(false)} style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(8px)', padding: '20px' }}>
          <button onClick={() => setLightbox(false)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--color-bg-warm)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0a0a0a', zIndex: 101, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}><X size={18} /></button>
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} style={{ position: 'absolute', left: '20px', background: 'var(--color-bg-warm)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0a0a0a', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}><ChevronLeft size={22} /></button>
          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', maxWidth: '900px' }}>
            <img src={activeProduct.image} alt={activeProduct.name} style={{ maxWidth: '100%', maxHeight: '72vh', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }} />
            <h4 style={{ color: '#0a0a0a', marginTop: '20px', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>{activeProduct.name}</h4>
            <p style={{ color: 'var(--color-accent)', fontSize: '11px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '2px', textTransform: 'uppercase' }}>{activeProduct.origin}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); handleNext(); }} style={{ position: 'absolute', right: '20px', background: 'var(--color-bg-warm)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0a0a0a', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}><ChevronRight size={22} /></button>
        </div>
      )}
    </section>
  );
}
