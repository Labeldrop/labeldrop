'use client';

import { useEffect } from 'react';
import LogoSVG from './LogoSVG';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) {
        nav.style.background = 'rgba(255,255,255,0.94)';
        nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.1)';
      } else {
        nav.style.background = 'rgba(255,255,255,0.82)';
        nav.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id="nav">
      <a className="nav-logo" href="#home" aria-label="Labeldrop" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
        <LogoSVG />
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.22em', color: '#1D65AD', marginLeft: '10px' }}>
          LABELDROP
        </span>
      </a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>Über uns</a></li>
        <li><a href="#why" onClick={(e) => { e.preventDefault(); scrollTo('why'); }}>Vorteile</a></li>
        <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Prozess</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Kontakt</a></li>
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>Anfrage stellen</button>
    </nav>
  );
}
