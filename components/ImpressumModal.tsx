'use client';

import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(13,27,42,0.55)', backdropFilter: 'blur(6px)', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: 'var(--white)', borderRadius: 24, maxWidth: 640, width: '100%', maxHeight: '88vh', overflowY: 'auto', padding: '52px 48px', position: 'relative', boxShadow: '0 32px 80px rgba(13,27,42,0.2)' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 20, right: 20, background: 'var(--ice-1)', border: 'none', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', color: 'var(--ink-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          onMouseOver={(e) => ((e.target as HTMLElement).style.background = 'var(--ice-2)')}
          onMouseOut={(e) => ((e.target as HTMLElement).style.background = 'var(--ice-1)')}
        >✕</button>

        <div style={{ fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 12 }}>Rechtliches</div>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 200, color: 'var(--ink)', marginBottom: 36, letterSpacing: '0.02em' }}>Impressum</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Angaben gemäß § 5 TMG</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.8 }}>Labeldrop<br />Inhaber: Mehdi Kazem<br />Werner-Heisenberg-Straße 2<br />63263 Neu-Isenburg</p>
          </div>
          <div style={{ height: 1, background: 'var(--ice-2)' }} />
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Rechtsform</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.8 }}>Einzelunternehmen</p>
          </div>
          <div style={{ height: 1, background: 'var(--ice-2)' }} />
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Kontakt</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.8 }}>
              E-Mail: <a href="mailto:info@labeldrop.de" style={{ color: 'var(--ice-5)', textDecoration: 'none' }}>info@labeldrop.de</a>
            </p>
          </div>
          <div style={{ height: 1, background: 'var(--ice-2)' }} />
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Umsatzsteuer-ID</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.8 }}>Folgt</p>
          </div>
          <div style={{ height: 1, background: 'var(--ice-2)' }} />
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Handelsregisternummer</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.8 }}>Folgt</p>
          </div>
          <div style={{ height: 1, background: 'var(--ice-2)' }} />
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.8 }}>Mehdi Kazem<br />Werner-Heisenberg-Straße 2<br />63263 Neu-Isenburg</p>
          </div>
          <div style={{ height: 1, background: 'var(--ice-2)' }} />
          <div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ice-5)', marginBottom: 8 }}>Haftungshinweis</div>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.8 }}>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
