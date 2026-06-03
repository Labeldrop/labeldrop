'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;
    const colors = ['#7a9cbf', '#8aafd4', '#6b8fae', '#9FB6CF', '#5c7d9e'];
    const count = 12;
    const drops: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      const size = 10 + Math.random() * 18;
      const h = size * 1.55;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = 0.45 + Math.random() * 0.35;
      const duration = 4 + Math.random() * 7;
      const delay = Math.random() * 8;
      const left = Math.random() * 100;
      drop.style.cssText = `left:${left}%;top:0;animation-duration:${duration}s;animation-delay:${delay}s;`;
      drop.innerHTML = `<svg width="${size}" height="${h}" viewBox="0 0 40 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2 C20 2 3 24 3 38 C3 50 10.5 59 20 59 C29.5 59 37 50 37 38 C37 24 20 2 20 2 Z"
          fill="${color}" stroke="${color}" stroke-width="1.5" opacity="${opacity}"/>
      </svg>`;
      hero.appendChild(drop);
      drops.push(drop);
    }
    return () => drops.forEach((d) => d.remove());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section-hero" id="home">
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />

      <p className="hero-eyebrow">Premium Branding · Individuell gefertigt</p>
      <span className="hero-slogan-line1">
        <span style={{ fontFamily: "'Playfair Display', serif" }}>Ihre Identität.</span>
      </span>
      <span className="hero-slogan-line2">Auf jeder Flasche.</span>
      <p className="hero-sub">
        LabelDrop verwandelt jede Flasche Wasser in ein hochwertiges Markenprodukt. Ob bei Meetings, Events, Messen oder als Kundengeschenk – Ihr Logo, Ihr Design, Ihr Eindruck.
        <br />
        <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.03em' }}>Marketing, das getrunken wird.</span>
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Jetzt anfragen</a>
        <a href="#about" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>Mehr erfahren</a>
      </div>

      <div className="hero-visual">
        <div className="bottle-stage">
          <div className="bottle-wrap side-left">
            <div className="bottle">
              <div className="bottle-cap" style={{ width: 26, height: 17, background: 'linear-gradient(180deg,rgba(255,255,255,0.85),var(--ice-3))', borderRadius: '5px 5px 2px 2px' }} />
              <div className="bottle-body" style={{ width: 58, height: 185, opacity: 0.65 }}>
                <div className="bottle-liquid" />
                <div className="bottle-label" style={{ width: 44, height: 64 }}>
                  <div className="label-logo">CORP</div>
                  <div className="label-line" />
                  <div className="label-dot" style={{ background: 'var(--ice-3)' }} />
                </div>
              </div>
              <div className="bottle-base" style={{ width: 48 }} />
            </div>
          </div>

          <div className="bottle-wrap center-bottle">
            <div className="bottle">
              <div className="bottle-cap" />
              <div className="bottle-body" style={{ background: 'linear-gradient(155deg,rgba(255,255,255,0.98) 0%,var(--ice-2) 50%,var(--ice-4) 100%)' }}>
                <div className="bottle-liquid" />
                <div className="bottle-label">
                  <div className="label-logo">LABEL</div>
                  <div className="label-line" />
                  <div className="label-sub">DROP</div>
                  <div className="label-dot" style={{ background: 'var(--ice-4)' }} />
                </div>
              </div>
              <div className="bottle-base" />
            </div>
          </div>

          <div className="bottle-wrap side-right">
            <div className="bottle">
              <div className="bottle-cap" style={{ width: 26, height: 17, background: 'linear-gradient(180deg,var(--ice-2),var(--ice-4))', borderRadius: '5px 5px 2px 2px' }} />
              <div className="bottle-body" style={{ width: 58, height: 185, opacity: 0.65, background: 'linear-gradient(155deg,var(--ice-1),var(--ice-3),var(--ice-5))' }}>
                <div className="bottle-liquid" />
                <div className="bottle-label" style={{ width: 44, height: 64 }}>
                  <div className="label-logo">BRAND</div>
                  <div className="label-line" />
                  <div className="label-dot" style={{ background: 'var(--ice-5)' }} />
                </div>
              </div>
              <div className="bottle-base" style={{ width: 48 }} />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-text">Entdecken</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
