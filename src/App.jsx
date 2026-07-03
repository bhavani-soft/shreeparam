import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarblesExplorer from './components/MarblesExplorer';
import GranitesExplorer from './components/GranitesExplorer';
import AboutContact from './components/AboutContact';
import FloatingActions from './components/FloatingActions';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeTab, setActiveTab] = useState('exotic');
  const [productSlide, setProductSlide] = useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
    }
  }, [currentView]);

  const stats = [
    { value: '40', label: 'years of experience' },
    { value: '150+', label: 'products' },
    { value: '50,000', label: 'sq.ft of Gallery size' },
    { value: '20+', label: 'countries for material imports' }
  ];

  const tabsContent = {
    exotic: {
      bold: 'Where Nature’s Art Meets Luxury',
      text: 'The Exotic Range is a celebration of nature’s most dramatic and breathtaking patterns. Sourced from rare quarries across the globe, each slab in this collection is a one-of-a-kind masterpiece—marked by bold veins, vivid contrasts, and a rich color palette. Ideal for statement spaces, luxury interiors, and discerning clientele, these marbles transform walls, floors, and countertops into living works of art. When you want your space to stand out, the Exotic Range delivers unparalleled impact.',
      linkText: 'Explore Exotic Range',
      view: 'marbles'
    },
    timeless: {
      bold: 'Enduring Beauty. Everlasting Appeal.',
      text: 'The Timeless Range is rooted in classic elegance and versatility. Featuring universally loved patterns, subtle textures, and neutral tones, this collection embodies sophistication that never goes out of style. Whether for residential charm or commercial elegance, these marbles provide a refined foundation that complements a wide variety of design sensibilities. Reliable, graceful, and eternally stylish—this is marble the way it was meant to be.',
      linkText: 'Explore Timeless Range',
      view: 'marbles'
    },
    bianco: {
      bold: 'The Purity of White. The Power of Simplicity.',
      text: 'Clean, crisp, and effortlessly elegant—the Bianco Range celebrates the serene beauty of white marble. Perfect for modern minimalism or traditional grandeur, these stones are prized for their luminous quality and gentle veining. From kitchens to baths to facades, the Bianco collection enhances any space with a feeling of light, openness, and calm. When design calls for purity and precision, Bianco answers with poise.',
      linkText: 'Explore Bianco Range',
      view: 'marbles'
    }
  };

  const productSlides = [
    '/jet_black_granite.png',
    '/white_marble_granite.png'
  ];

  const processSteps = [
    {
      num: '1',
      title: 'Consultation',
      desc: 'Understand the client’s design vision, space, and preferences to recommend suitable marble types, finishes, and applications.'
    },
    {
      num: '2',
      title: 'Material Selection',
      desc: 'Curate from a premium collection—white Statuario, exotic onyx, warm beige, and more—based on usage (flooring, walls, countertops) and desired aesthetic.'
    },
    {
      num: '3',
      title: 'Preparation',
      desc: 'Clear and level the surface; ensure optimal substrate conditions for marble laying. Moisture and strength tests are conducted to preserve the longevity of the marble.'
    }
  ];

  const handleProductPrev = () => {
    setProductSlide((prev) => (prev === 0 ? productSlides.length - 1 : prev - 1));
  };

  const handleProductNext = () => {
    setProductSlide((prev) => (prev + 1) % productSlides.length);
  };

  const renderView = () => {
    switch (currentView) {
      case 'marbles':
        return <MarblesExplorer />;
      case 'granites':
        return <GranitesExplorer />;
      case 'contact':
        return <AboutContact />;
      default:
        return (
          <>
            <Hero setCurrentView={setCurrentView} />

            {/* Stats Section */}
            <section style={{ background: 'var(--color-bg)', padding: '60px 24px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div className="stats-grid" style={{ textAlign: 'center' }}>
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
              </div>
            </section>

            {/* About Us Section */}
            <section style={{ background: 'var(--color-bg)', padding: '100px 24px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div className="two-col-grid" style={{ alignItems: 'center' }}>
                  <div>
                    <span className="section-label">— About Us</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', marginTop: '16px', fontWeight: 300, lineHeight: 1.2 }}>
                      Built from <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400 }}>legacy</span>
                    </h2>
                    <div style={{ width: '40px', height: '1px', background: 'var(--color-accent)', margin: '20px 0' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.92rem', color: '#5a4a3a', lineHeight: 1.8, marginBottom: '24px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                      Shree Param Granites & Marbles stands for the legacy of fine craftsmanship, and the quality of the marble we import from around the world. While the brand is new, the people behind it are not – and that decades’ of experience is reflected in our products. Our tagline ‘Leading by Legacy’, is to honour the marble legend and to remind us that we grow under his nurturing.
                    </p>
                    <p style={{ fontSize: '0.92rem', color: '#5a4a3a', lineHeight: 1.8, marginBottom: '32px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                      Built on a tight-knit, strong foundation, the ethos of Shree Param is to bring forth the best quality marble to India, at a competitive price, with the trust that we will always maintain transparency and honesty with our customers.
                    </p>
                    <button onClick={() => setCurrentView('contact')} className="btn-gold" style={{ fontFamily: 'Jost, sans-serif' }}>
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Product Section */}
            <section style={{ background: 'var(--color-bg)', padding: '100px 24px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <span className="section-label">— Our Product</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', marginTop: '16px', fontWeight: 300, lineHeight: 1.2, marginBottom: '48px' }}>
                  Decades of expertise in quality <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400 }}>surfaces</span>
                </h2>

                <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>
                  {/* Slider Cards on Left */}
                  <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-bg-warm)' }}>
                    <div style={{ height: '360px', overflow: 'hidden' }}>
                      <img
                        src={productSlides[productSlide]}
                        alt={`Product slide ${productSlide + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    {/* Navigation */}
                    <div style={{ position: 'absolute', bottom: '16px', right: '16px', display: 'flex', gap: '8px' }}>
                      <button onClick={handleProductPrev} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0a0a0a', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <ChevronLeft size={16} />
                      </button>
                      <button onClick={handleProductNext} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0a0a0a', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Horizontal Tabs on Right */}
                  <div>
                    <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '24px', overflowX: 'auto' }}>
                      {Object.keys(tabsContent).map((tabKey) => (
                        <button
                          key={tabKey}
                          onClick={() => setActiveTab(tabKey)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            color: activeTab === tabKey ? 'var(--color-accent)' : '#8a7a6a',
                            fontFamily: 'Jost, sans-serif',
                            position: 'relative',
                            paddingBottom: '12px',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tabKey === 'exotic' ? 'Exotic Range' : tabKey === 'timeless' ? 'Timeless Range' : 'Bianco Range'}
                          {activeTab === tabKey && (
                            <div style={{ position: 'absolute', bottom: '-13px', left: 0, right: 0, height: '2px', background: 'var(--color-accent)' }} />
                          )}
                        </button>
                      ))}
                    </div>

                    <div style={{ minHeight: '220px' }}>
                      <p style={{ fontSize: '1.05rem', color: '#0a0a0a', fontWeight: 500, marginBottom: '16px', fontFamily: 'Cormorant Garamond, serif' }}>
                        {tabsContent[activeTab].bold}
                      </p>
                      <p style={{ fontSize: '0.88rem', color: '#5a4a3a', lineHeight: 1.7, marginBottom: '24px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                        {tabsContent[activeTab].text}
                      </p>
                      <button
                        onClick={() => setCurrentView(tabsContent[activeTab].view)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--color-accent)',
                          textDecoration: 'underline',
                          fontWeight: 500,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          fontFamily: 'Jost, sans-serif',
                          padding: 0
                        }}
                      >
                        {tabsContent[activeTab].linkText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Process Section */}
            <section style={{ background: 'var(--color-bg)', padding: '100px 24px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <span className="section-label">— Our Process</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif', color: '#0a0a0a', marginTop: '16px', fontWeight: 300, lineHeight: 1.2, marginBottom: '20px' }}>
                  From consultation to perfection, <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400 }}>every time</span>
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#5a4a3a', maxWidth: '640px', lineHeight: 1.8, marginBottom: '56px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  Our refined process ensures premium quality from expert consultation to flawless marble installation—guaranteeing elegance, durability, and satisfaction at every stage.
                </p>

                {/* Steps Horizontal Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '56px' }}>
                  {processSteps.map((step, idx) => (
                    <div key={idx} style={{ position: 'relative' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-bg-warm)', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                          {step.num}
                        </div>
                        <div style={{ height: '1px', flex: 1, background: 'var(--color-border)', display: idx === 2 ? 'none' : 'block' }} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', color: '#0a0a0a', fontWeight: 500, marginBottom: '10px', fontFamily: 'Cormorant Garamond, serif' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: '#5a4a3a', lineHeight: 1.6, fontWeight: 300, fontFamily: 'Jost, sans-serif' }}>{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button onClick={() => setCurrentView('contact')} className="btn-gold" style={{ fontFamily: 'Jost, sans-serif' }}>
                    Get in touch
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#ffffff' }}>
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main ref={pageRef} style={{ flexGrow: 1 }}>
        {renderView()}
      </main>

      {/* Footer in new Midnight color */}
      <footer style={{ background: '#162A2C', borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Footer Grid */}
          <div className="footer-grid" style={{ marginBottom: '48px' }}>

            {/* Logo + Intro */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/logo sp1.png" alt="Shree Param Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </div>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '16px', color: '#FEFCF6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Shree Param Granites
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#D6E0E2', lineHeight: 1.7, maxWidth: '300px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                Supplying ultimate luxury through handpicked Italian marbles and robust, stylish Indian & imported granites.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize: '10px', fontFamily: 'Syncopate, sans-serif', fontWeight: 600, color: '#FEFCF6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Navigation</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['home', 'marbles', 'granites', 'contact'].map((id) => (
                  <button key={id} onClick={() => { setCurrentView(id); window.scrollTo(0, 0); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#D6E0E2', textAlign: 'left', padding: 0, transition: 'color 0.3s', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                    onMouseEnter={(e) => (e.target.style.color = '#FEFCF6')} onMouseLeave={(e) => (e.target.style.color = '#D6E0E2')}>
                    {id === 'home' ? 'Home' : id === 'marbles' ? 'Imported Marbles' : id === 'granites' ? 'Premium Granites' : 'About & Contact'}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: '10px', fontFamily: 'Syncopate, sans-serif', fontWeight: 600, color: '#FEFCF6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Get In Touch</h4>
              <p style={{ fontSize: '13px', color: '#D6E0E2', lineHeight: 1.7, fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                <strong style={{ color: '#FEFCF6', fontWeight: 500 }}>Address:</strong> NH 65, near Patancheru Toll Plaza, Hyderabad, Telangana, 502319
              </p>
              <p style={{ fontSize: '13px', color: '#D6E0E2', marginTop: '10px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                <strong style={{ color: '#FEFCF6', fontWeight: 500 }}>Phone:</strong>{' '}
                <a href="tel:+919505877645" style={{ color: '#D6E0E2', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.target.style.color = '#FEFCF6')} onMouseLeave={(e) => (e.target.style.color = '#D6E0E2')}>+91 95058 77645</a>
              </p>
              <p style={{ fontSize: '13px', color: '#D6E0E2', marginTop: '10px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                <strong style={{ color: '#FEFCF6', fontWeight: 500 }}>WhatsApp:</strong>{' '}
                <a href="https://wa.me/919505877645" target="_blank" rel="noopener noreferrer" style={{ color: '#D6E0E2', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.target.style.color = '#FEFCF6')} onMouseLeave={(e) => (e.target.style.color = '#D6E0E2')}>+91 95058 77645</a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ paddingTop: '28px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', fontSize: '12px', color: '#686867', fontFamily: 'Jost, sans-serif' }}>
            <p>Copyright © {new Date().getFullYear()} Shree Param Granites - All Rights Reserved.</p>
            <p>Developed for Shree Param Granites.</p>
          </div>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
}
