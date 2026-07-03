import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'marbles', label: 'Marbles' },
    { id: 'granites', label: 'Granites' },
    { id: 'contact', label: 'Contact' },
  ];

  const navigate = (id) => {
    setCurrentView(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        background: (scrolled || currentView !== 'home') ? 'rgba(254, 252, 246, 0.96)' : 'transparent',
        backdropFilter: (scrolled || currentView !== 'home') ? 'blur(12px)' : 'none',
        borderBottom: (scrolled || currentView !== 'home') ? '1px solid var(--color-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div onClick={() => navigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo sp1.png" alt="Shree Param Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: (scrolled || currentView !== 'home') ? 'none' : 'brightness(0) invert(1)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '20px', color: (scrolled || currentView !== 'home') ? '#0a0a0a' : '#ffffff', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: '1.1' }}>
              Shree Param
            </span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: (scrolled || currentView !== 'home') ? 'var(--color-accent)' : 'rgba(255,255,255,0.85)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 400, marginTop: '2px' }}>
              Granites & Marbles
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-only" style={{ alignItems: 'center', gap: '36px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '13px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif',
                color: currentView === item.id ? 'var(--color-accent)' : ((scrolled || currentView !== 'home') ? 'var(--color-body)' : 'rgba(255,255,255,0.85)'),
                transition: 'color 0.3s', padding: '4px 0',
                borderBottom: currentView === item.id ? '2px solid var(--color-accent)' : '2px solid transparent',
              }}
              onMouseEnter={(e) => { if (currentView !== item.id) e.target.style.color = (scrolled || currentView !== 'home') ? 'var(--color-heading)' : '#ffffff'; }}
              onMouseLeave={(e) => { if (currentView !== item.id) e.target.style.color = (scrolled || currentView !== 'home') ? 'var(--color-body)' : 'rgba(255,255,255,0.85)'; }}
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+919505877645"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px',
              border: (scrolled || currentView !== 'home') ? '1.5px solid var(--color-accent)' : '1.5px solid #ffffff', borderRadius: '4px', color: (scrolled || currentView !== 'home') ? 'var(--color-accent)' : '#ffffff',
              fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase',
              fontFamily: 'Jost, sans-serif', transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.target.style.background = (scrolled || currentView !== 'home') ? 'var(--color-accent)' : '#ffffff'; e.target.style.color = (scrolled || currentView !== 'home') ? '#ffffff' : '#000000'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = (scrolled || currentView !== 'home') ? 'var(--color-accent)' : '#ffffff'; }}
          >
            <Phone size={13} /> Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-only"
          style={{ background: 'none', border: 'none', color: (scrolled || currentView !== 'home') ? '#0a0a0a' : '#ffffff', cursor: 'pointer', padding: '4px' }}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="mobile-only"
            style={{ display: 'flex', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', padding: '20px', flexDirection: 'column', gap: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => navigate(item.id)}
                style={{ background: currentView === item.id ? 'var(--color-bg-warm)' : 'none', border: 'none', cursor: 'pointer', padding: '12px 16px', borderRadius: '8px', color: currentView === item.id ? 'var(--color-accent)' : 'var(--color-body)', fontSize: '14px', fontWeight: currentView === item.id ? 600 : 400, textTransform: 'uppercase', letterSpacing: '1.5px', textAlign: 'left', width: '100%', fontFamily: 'Jost, sans-serif' }}>
                {item.label}
              </button>
            ))}
          <a href="tel:+919505877645"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '8px', background: '#0a0a0a', color: '#fff', fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '8px', fontFamily: 'Jost, sans-serif' }}>
            <Phone size={16} /> Call Us Now
          </a>
        </div>
      )}
    </header>
  );
}
