import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const phone = '+919505877645';
  const waUrl = `https://wa.me/919505877645?text=${encodeURIComponent('Hello Shree Param Granites, I visited your website and would like to inquire about your granites and marbles.')}`;

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div
        className="mobile-only"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: '#ffffff',
          borderTop: '1px solid var(--color-border)',
          padding: '10px 16px',
          gap: '10px',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <a
          href={`tel:${phone}`}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '14px',
            borderRadius: '4px',
            background: '#f8f6f1',
            border: '1.5px solid var(--color-border)',
            color: '#0a0a0a',
            fontWeight: 500,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: 'Jost, sans-serif',
          }}
        >
          <Phone size={16} style={{ color: 'var(--color-accent)' }} />
          Call Us
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '14px',
            borderRadius: '4px',
            background: 'var(--color-accent)',
            color: '#ffffff',
            fontWeight: 500,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: 'Jost, sans-serif',
          }}
        >
          <MessageSquare size={16} />
          WhatsApp
        </a>
      </div>

      {/* Desktop Floating Buttons */}
      <div
        className="desktop-only"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 40,
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <a
          href={`tel:${phone}`}
          title="Call Shree Param Granites"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1.5px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-accent)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <Phone size={20} />
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Chat"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 6px 20px rgba(94,108,91,0.3)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <MessageSquare size={20} />
        </a>
      </div>
    </>
  );
}
