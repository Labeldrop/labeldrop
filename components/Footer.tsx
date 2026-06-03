'use client';

import { useState } from 'react';
import ImpressumModal from './ImpressumModal';

const impressumBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.45)',
  textDecoration: 'none',
  fontFamily: "'Outfit', sans-serif",
  transition: 'color 0.3s',
};

const impressumLegalBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.3)',
  fontFamily: "'Outfit', sans-serif",
  transition: 'color 0.3s',
};

export default function Footer() {
  const [impressumOpen, setImpressumOpen] = useState(false);

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">LABELDROP</div>
            <div className="footer-tagline">&bdquo;Ihre Identität. Auf jeder Flasche.&ldquo;</div>
            <div className="footer-socials">
              <a className="social-btn" href="https://www.instagram.com/labeldrop.de?igsh=MWI3d2dhbzhtamphYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a className="social-btn" href="#" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a className="social-btn" href="mailto:info@labeldrop.de" title="E-Mail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">Über uns</a></li>
              <li><a href="#why">Vorteile</a></li>
              <li><a href="#audience">Zielgruppen</a></li>
              <li><a href="#process">Prozess</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <button style={impressumBtnStyle} onClick={() => setImpressumOpen(true)}
                  onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'white')}
                  onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                >Impressum</button>
              </li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">AGB</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <div className="footer-contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:info@labeldrop.de" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.3s' }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'white')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
              >info@labeldrop.de</a>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">◎</span>
              <span className="contact-text">Deutschland</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 LabelDrop. Alle Rechte vorbehalten.</span>
          <div className="footer-legal">
            <button style={impressumLegalBtnStyle} onClick={() => setImpressumOpen(true)}
              onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
              onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.3)')}
            >Impressum</button>
            <a href="#">Datenschutz</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>

      <ImpressumModal open={impressumOpen} onClose={() => setImpressumOpen(false)} />
    </>
  );
}
