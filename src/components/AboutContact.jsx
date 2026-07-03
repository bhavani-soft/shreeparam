import React from 'react';
import { MapPin, Phone, Clock, Send, ShieldCheck, Star } from 'lucide-react';

export default function AboutContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Shree Param Granites! We will reach out shortly.');
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--color-bg)',
    border: '1.5px solid var(--color-border)',
    borderRadius: '4px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#0a0a0a',
    outline: 'none',
    transition: 'border-color 0.3s, background-color 0.3s',
    fontFamily: 'Jost, sans-serif',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#8a7a6a',
    fontWeight: 500,
    marginBottom: '6px',
    fontFamily: 'Syncopate, sans-serif'
  };

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '200+', label: 'Products Collection' },
    { value: '45,000', label: 'Sq.ft Showroom Size' },
    { value: '12+', label: 'Sourcing Countries' },
  ];

  return (
    <section style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">— Our Story & Address</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', marginTop: '12px', fontWeight: 300 }}>
            About & Contact Us
          </h2>
          <div style={{ width: '50px', height: '1px', background: 'var(--color-accent)', margin: '16px auto 0' }} />
        </div>

        {/* SwamyMarmo Style Stats Grid */}
        <div className="stats-grid" style={{ marginBottom: '60px', paddingBottom: '40px', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <span style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', fontWeight: 300, display: 'block', lineHeight: 1.1 }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '11px', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'Jost, sans-serif', fontWeight: 400, marginTop: '8px', display: 'block' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* About + Form */}
        <div className="two-col-grid" style={{ marginBottom: '60px' }}>

          {/* About Text */}
          <div>
            <span style={{ fontSize: '11px', fontFamily: 'Syncopate, sans-serif', letterSpacing: '2px', color: 'var(--color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Built From Legacy
            </span>
            <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#0a0a0a', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, marginBottom: '24px', lineHeight: 1.25 }}>
              Leading Supplier of Premium <span style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400 }}>Granites & Marbles</span>
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#5a4a3a', lineHeight: 1.8, marginBottom: '20px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              Welcome to Shree Param Granites & Marbles. Located near Hyderabad (Patancheru area), we are a premier destination for high-end natural stones. Architects, builders, and homeowners trust us for premium materials.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#5a4a3a', lineHeight: 1.8, marginBottom: '32px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              We specialize in importing Italian white marbles, Turkish beige series, Spanish black marbles, and top-tier Indian granites. Our products undergo rigorous inspections for structural durability and finishing.
            </p>
            <div className="about-values-grid">
              <div style={{ display: 'flex', gap: '14px' }}>
                <ShieldCheck size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', marginBottom: '4px', fontFamily: 'Jost, sans-serif' }}>Quality Assured</h4>
                  <p style={{ fontSize: '12px', color: '#5a4a3a', lineHeight: 1.6, fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Strict quality grading on all stone blocks.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <Star size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a', marginBottom: '4px', fontFamily: 'Jost, sans-serif' }}>Handpicked Selection</h4>
                  <p style={{ fontSize: '12px', color: '#5a4a3a', lineHeight: 1.6, fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Exclusive color shades and unique vein patterns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="glass-panel" style={{ padding: '36px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0a0a0a', fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border)' }}>
              Send a Direct Inquiry
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Your Name</label>
                <input type="text" required style={inputStyle} placeholder="Enter your name"
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'var(--color-bg-warm)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.backgroundColor = 'var(--color-bg)'; }} />
              </div>
              <div className="form-two-col">
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" required style={inputStyle} placeholder="+91 99999 99999"
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'var(--color-bg-warm)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.backgroundColor = 'var(--color-bg)'; }} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" style={inputStyle} placeholder="name@email.com"
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'var(--color-bg-warm)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.backgroundColor = 'var(--color-bg)'; }} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea rows={4} required style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your requirements..."
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'var(--color-bg-warm)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.backgroundColor = 'var(--color-bg)'; }} />
              </div>
              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '4px', fontFamily: 'Jost, sans-serif' }}>
                <Send size={15} /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map + Contact Cards */}
        <div className="map-contact-grid">
          {/* Map */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', minHeight: '380px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <iframe
              title="Shree Param Granites Location"
              src="https://maps.google.com/maps?q=17.585365,78.097645&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '28px', display: 'flex', gap: '16px', border: '1px solid var(--color-border)' }}>
              <MapPin size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontFamily: 'Syncopate, sans-serif' }}>Showroom Address</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.6, fontFamily: 'Jost, sans-serif' }}>
                  Shree Param Granites & Marbles,<br />
                  NH 65, near Patancheru Toll Plaza,<br />
                  Hyderabad, Telangana, 502319
                </p>
                <a href="https://www.google.com/maps/place/Shree+Param+Granites/@17.585365,78.0950701,830m" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', marginTop: '10px', display: 'inline-block', fontFamily: 'Jost, sans-serif', letterSpacing: '1px' }}>
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '28px', display: 'flex', gap: '16px', border: '1px solid var(--color-border)' }}>
              <Phone size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontFamily: 'Syncopate, sans-serif' }}>Phone & Inquiries</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.8, fontFamily: 'Jost, sans-serif' }}>
                  Sales: <a href="tel:+919505877645" style={{ color: '#0a0a0a', fontWeight: 500 }}>+91 95058 77645</a>
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '28px', display: 'flex', gap: '16px', border: '1px solid var(--color-border)' }}>
              <Clock size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontFamily: 'Syncopate, sans-serif' }}>Business Hours</h4>
                <p style={{ fontSize: '13px', color: '#5a4a3a', lineHeight: 1.8, fontFamily: 'Jost, sans-serif' }}>
                  Mon - Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
