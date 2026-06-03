export default function Showcase() {
  return (
    <section className="showcase-section section-showcase" id="showcase">
      <div className="showcase-inner">
        <div className="showcase-header reveal">
          <div className="section-label">Premium Showcase</div>
          <h2 className="section-title">Verfügbare<br />Flaschenformen.</h2>
          <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-muted)', marginTop: 16, letterSpacing: '0.04em' }}>
            Beide Formate sind vollständig individualisierbar — mit Ihrem Logo, Ihren Farben, Ihrer Marke.
          </p>
        </div>

        <div className="showcase-stage reveal">
          {/* 0.25l Flasche */}
          <div className="showcase-bottle">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 26, height: 17, background: 'linear-gradient(180deg,rgba(255,255,255,0.95),var(--ice-3))', borderRadius: '5px 5px 2px 2px', border: '1px solid rgba(255,255,255,0.7)' }} />
              <div style={{ width: 58, height: 185, background: 'linear-gradient(160deg,rgba(255,255,255,0.97) 0%,var(--ice-2) 50%,var(--ice-4) 100%)', borderRadius: '22px 22px 18px 18px', border: '1px solid rgba(255,255,255,0.82)', boxShadow: '0 24px 70px rgba(159,182,207,0.4),inset -8px 0 18px rgba(159,182,207,0.2),inset 4px 0 10px rgba(255,255,255,0.7)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '18%', width: '16%', height: '100%', background: 'linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.05))', borderRadius: 4 }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(180deg,rgba(220,232,245,0.35),rgba(183,202,224,0.25))', borderRadius: '0 0 18px 18px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 72, height: 60, background: 'var(--white)', borderRadius: 6, boxShadow: '0 2px 10px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '8px 6px' }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.42rem', letterSpacing: '0.14em', fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase' }}>LABEL</div>
                  <div style={{ width: '80%', height: 1, background: 'var(--ice-3)' }} />
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.3rem', letterSpacing: '0.12em', color: 'var(--ice-5)' }}>DROP</div>
                </div>
              </div>
              <div style={{ width: 48, height: 8, background: 'var(--ice-3)', borderRadius: '0 0 12px 12px', opacity: 0.45 }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.6rem', fontWeight: 200, color: 'var(--ink)', letterSpacing: '0.05em', lineHeight: 1 }}>0,25 l</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ice-5)', marginTop: 6 }}>Verfügbar</div>
            </div>
          </div>

          {/* 0.5l Flasche */}
          <div className="showcase-bottle">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 32, height: 22, background: 'linear-gradient(180deg,rgba(255,255,255,0.95),var(--ice-3))', borderRadius: '7px 7px 3px 3px', border: '1px solid rgba(255,255,255,0.7)' }} />
              <div style={{ width: 74, height: 240, background: 'linear-gradient(160deg,rgba(255,255,255,0.97) 0%,var(--ice-2) 50%,var(--ice-4) 100%)', borderRadius: '22px 22px 18px 18px', border: '1px solid rgba(255,255,255,0.85)', boxShadow: '0 32px 90px rgba(159,182,207,0.45),inset -10px 0 24px rgba(159,182,207,0.22),inset 5px 0 14px rgba(255,255,255,0.75)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '18%', width: '16%', height: '100%', background: 'linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.05))', borderRadius: 4 }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(180deg,rgba(220,232,245,0.35),rgba(183,202,224,0.25))', borderRadius: '0 0 18px 18px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 90, height: 76, background: 'var(--white)', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '10px 8px' }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.52rem', letterSpacing: '0.14em', fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase' }}>LABEL</div>
                  <div style={{ width: '80%', height: 1, background: 'var(--ice-3)' }} />
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.36rem', letterSpacing: '0.12em', color: 'var(--ice-5)' }}>DROP</div>
                </div>
              </div>
              <div style={{ width: 60, height: 10, background: 'var(--ice-3)', borderRadius: '0 0 18px 18px', opacity: 0.45 }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.6rem', fontWeight: 200, color: 'var(--ink)', letterSpacing: '0.05em', lineHeight: 1 }}>0,5 l</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ice-5)', marginTop: 6 }}>Verfügbar</div>
            </div>
          </div>
        </div>

        <p className="showcase-caption reveal">Beide Flaschenformen sind verfügbar · 100 % individuell gebrandert · Direkte Lieferung</p>
      </div>
    </section>
  );
}
