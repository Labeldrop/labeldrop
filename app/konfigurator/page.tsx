'use client';

import { useState, useRef } from 'react';

const etikett_farben = [
  { name: 'Weiß',       bg: '#FFFFFF', text: '#1D65AD' },
  { name: 'Navy',       bg: '#1D2B4F', text: '#FFFFFF' },
  { name: 'Schwarz',    bg: '#111111', text: '#FFFFFF' },
  { name: 'Gold',       bg: '#C9A84C', text: '#111111' },
  { name: 'Dunkelgrün', bg: '#1E4D2B', text: '#FFFFFF' },
  { name: 'Bordeaux',   bg: '#6B1C2E', text: '#FFFFFF' },
  { name: 'Hellblau',   bg: '#EEF4FA', text: '#1D65AD' },
  { name: 'Anthrazit',  bg: '#3A3A3A', text: '#FFFFFF' },
];

const deckel_farben = [
  { name: 'Blau',       color: '#1D65AD' },
  { name: 'Schwarz',    color: '#111111' },
  { name: 'Weiß',       color: '#EEEEEE' },
  { name: 'Silber',     color: '#A8A8A8' },
  { name: 'Rot',        color: '#C0392B' },
  { name: 'Grün',       color: '#1E8449' },
  { name: 'Gold',       color: '#C9A84C' },
  { name: 'Navy',       color: '#1D2B4F' },
];

export default function Konfigurator() {
  const [etikettIdx, setEtikettIdx] = useState(0);
  const [deckelIdx, setDeckelIdx] = useState(0);
  const [logo, setLogo] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const etikett = etikett_farben[etikettIdx];
  const deckel = deckel_farben[deckelIdx];

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  }

  function handleTouchEnd(e: React.TouchEvent, type: 'etikett' | 'deckel') {
    if (touchStartX === null || touchStartY === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 40) return;
    if (type === 'etikett') {
      setEtikettIdx((i) => (dx < 0 ? (i + 1) % etikett_farben.length : (i - 1 + etikett_farben.length) % etikett_farben.length));
    } else {
      setDeckelIdx((i) => (dx < 0 ? (i + 1) % deckel_farben.length : (i - 1 + deckel_farben.length) % deckel_farben.length));
    }
    setTouchStartX(null);
    setTouchStartY(null);
  }

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setLogo(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div style={{ minHeight: '100dvh', background: '#F4F8FC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', fontFamily: 'Outfit, sans-serif' }}>

      {/* Titel */}
      <div style={{ marginBottom: 8, fontSize: 13, letterSpacing: '0.15em', color: '#9FB6CF', textTransform: 'uppercase' }}>Labeldrop Konfigurator</div>
      <div style={{ marginBottom: 32, fontSize: 22, fontWeight: 300, color: '#1D65AD' }}>Gestalte deine Flasche</div>

      {/* Flasche */}
      <div style={{ position: 'relative', width: 220, height: 380, userSelect: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => handleTouchEnd(e, 'etikett')}
      >
        {/* Deckel Overlay (oben) */}
        <div style={{
          position: 'absolute', top: '3%', left: '50%', transform: 'translateX(-50%)',
          width: 52, height: 46, borderRadius: '10px 10px 5px 5px',
          background: deckel.color,
          opacity: 0.7,
          zIndex: 2,
          transition: 'background 0.4s ease',
          mixBlendMode: 'color',
        }} />

        {/* Flasche Bild */}
        <img src="/flasche.png" alt="Flasche" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} />

        {/* Etikett Overlay */}
        <div style={{
          position: 'absolute',
          top: '58%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '62%', height: '28%',
          background: etikett.bg,
          borderRadius: 6,
          zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 8,
          transition: 'background 0.4s ease',
          padding: '8px 12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        }}>
          {logo ? (
            <img src={logo} alt="Logo" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
          ) : (
            <div style={{ fontSize: 11, color: etikett.text, opacity: 0.5, textAlign: 'center', letterSpacing: '0.08em' }}>
              LOGO TIPPEN<br />UM HINZUZUFÜGEN
            </div>
          )}
        </div>
      </div>

      {/* Swipe Hinweise */}
      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <SwipeHint
          label="Etikett"
          value={etikett.name}
          color={etikett.bg}
          onLeft={() => setEtikettIdx((i) => (i + 1) % etikett_farben.length)}
          onRight={() => setEtikettIdx((i) => (i - 1 + etikett_farben.length) % etikett_farben.length)}
        />
        <SwipeHint
          label="Deckel"
          value={deckel.name}
          color={deckel.color}
          onLeft={() => setDeckelIdx((i) => (i + 1) % deckel_farben.length)}
          onRight={() => setDeckelIdx((i) => (i - 1 + deckel_farben.length) % deckel_farben.length)}
        />
      </div>

      {/* Logo Button */}
      <button
        onClick={() => fileRef.current?.click()}
        style={{
          marginTop: 24, padding: '14px 32px', borderRadius: 40,
          background: '#1D65AD', color: '#fff', border: 'none',
          fontSize: 14, letterSpacing: '0.1em', cursor: 'pointer',
          fontFamily: 'Outfit, sans-serif', fontWeight: 400,
        }}
      >
        {logo ? 'LOGO ÄNDERN' : 'LOGO HOCHLADEN'}
      </button>
      {logo && (
        <button onClick={() => setLogo(null)} style={{ marginTop: 8, background: 'none', border: 'none', color: '#9FB6CF', fontSize: 13, cursor: 'pointer' }}>
          Logo entfernen
        </button>
      )}
      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleLogoUpload} />

      {/* Farbpaletten */}
      <div style={{ marginTop: 28, width: '100%', maxWidth: 340 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#9FB6CF', marginBottom: 10, textTransform: 'uppercase' }}>Etikett Farben</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {etikett_farben.map((f, i) => (
            <button key={f.name} onClick={() => setEtikettIdx(i)} style={{
              width: 32, height: 32, borderRadius: '50%', background: f.bg,
              border: i === etikettIdx ? '3px solid #1D65AD' : '2px solid #D0DCE8',
              cursor: 'pointer', transition: 'border 0.2s',
            }} title={f.name} />
          ))}
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#9FB6CF', marginTop: 16, marginBottom: 10, textTransform: 'uppercase' }}>Deckel Farben</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {deckel_farben.map((f, i) => (
            <button key={f.name} onClick={() => setDeckelIdx(i)} style={{
              width: 32, height: 32, borderRadius: '50%', background: f.color,
              border: i === deckelIdx ? '3px solid #1D65AD' : '2px solid #D0DCE8',
              cursor: 'pointer', transition: 'border 0.2s',
            }} title={f.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SwipeHint({ label, value, color, onLeft, onRight }: {
  label: string; value: string; color: string;
  onLeft: () => void; onRight: () => void;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <button onClick={onRight} style={{ background: 'none', border: 'none', fontSize: 20, color: '#1D65AD', cursor: 'pointer', padding: '4px 8px' }}>‹</button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 120 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: color, border: '1.5px solid #D0DCE8', flexShrink: 0 }} />
        <span style={{ fontSize: 13, color: '#1D65AD', fontWeight: 300 }}>{label}: <strong>{value}</strong></span>
      </div>
      <button onClick={onLeft} style={{ background: 'none', border: 'none', fontSize: 20, color: '#1D65AD', cursor: 'pointer', padding: '4px 8px' }}>›</button>
    </div>
  );
}
