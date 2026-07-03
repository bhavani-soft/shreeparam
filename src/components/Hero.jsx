import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero({ setCurrentView }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: '/slide1.webp',
      tagline: 'Stylish Surfaces',
      title: (
        <>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#ffffff', fontWeight: 400 }}>Stylish,</span> Durable Surfaces for Every Room.
        </>
      ),
      description: 'Elevate your business with expert advice! Join us for a tailored consultation session. Limited spots available. RSVP now to secure yours!'
    },
    {
      image: '/slide2.webp',
      tagline: 'Natural Surfaces',
      title: (
        <>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#ffffff', fontWeight: 400 }}>Each</span> slab tells a story of timeless grace
        </>
      ),
      description: 'Elevate your business with expert advice! Join us for a tailored consultation session. Limited spots available. RSVP now to secure yours!'
    },
    {
      image: '/slide3.webp',
      tagline: 'Elegant Surfaces',
      title: (
        <>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#ffffff', fontWeight: 400 }}>Curated</span> marble. Unmatched beauty
        </>
      ),
      description: 'Elevate your business with expert advice! Join us for a tailored consultation session. Limited spots available. RSVP now to secure yours!'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', background: '#000000' }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === activeSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === activeSlide ? 1 : 0
          }}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.tagline}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: index === activeSlide ? 'scale(1.05)' : 'scale(1)', transition: 'transform 5s ease' }}
          />
          {/* Multiply / Dark Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.45)' }} />
        </div>
      ))}

      {/* Content Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }}>
          <div style={{ maxWidth: '720px' }}>
            {/* Tagline */}
            <span style={{ display: 'block', fontFamily: 'Syncopate, sans-serif', fontSize: '11px', color: '#ffffff', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
              {slides[activeSlide].tagline}
            </span>
            {/* Main Title */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)', fontFamily: 'Cormorant Garamond, serif', color: '#ffffff', lineHeight: 1.15, marginBottom: '24px', fontWeight: 300 }}>
              {slides[activeSlide].title}
            </h1>
            {/* Description */}
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '600px', margin: '0 0 40px', lineHeight: 1.7, fontWeight: 300, fontFamily: 'Jost, sans-serif' }}>
              {slides[activeSlide].description}
            </p>
            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start' }}>
              <button onClick={() => setCurrentView('marbles')} className="btn-gold" style={{ background: '#ffffff', color: '#0a0a0a', border: '2px solid #ffffff', fontFamily: 'Jost, sans-serif' }}>
                Explore Collection
              </button>
              <button onClick={() => setCurrentView('contact')} className="btn-outline" style={{ borderColor: 'rgba(255, 255, 255, 0.5)', color: '#ffffff', fontFamily: 'Jost, sans-serif' }}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Nav Controls */}
      <div style={{ position: 'absolute', bottom: '40px', left: '0', right: '0', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
        <button onClick={handlePrev} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.6}>
          <ArrowLeft size={24} />
        </button>
        {/* Dots */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveSlide(i)}
              style={{
                width: i === activeSlide ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === activeSlide ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
        <button onClick={handleNext} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.6}>
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
