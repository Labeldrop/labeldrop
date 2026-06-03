'use client';

import { useState } from 'react';

export default function Contact() {
  const [selectedQty, setSelectedQty] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQty = (val: string) => setSelectedQty(val === selectedQty ? '' : val);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const qtys = [
    { label: 'Noch nicht sicher', value: '' },
    { label: '300 – 500', value: '300-500' },
    { label: '500 – 1.000', value: '500-1000' },
    { label: '1.000 +', value: '1000+' },
  ];

  return (
    <section className="contact-section section-contact" id="contact">
      <div className="contact-inner reveal">
        <div className="section-label">Kontakt</div>
        <h2 className="section-title">Bereit für Ihr<br />Premium-Branding?</h2>
        <p className="section-body" style={{ margin: '0 auto', textAlign: 'center', maxWidth: 440 }}>
          Hinterlassen Sie uns Ihre Anfrage — wir melden uns persönlich und unverbindlich bei Ihnen.
        </p>
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Ihr Name</label>
              <input type="text" placeholder="Max Mustermann" />
            </div>
            <div className="form-group">
              <label>Unternehmen</label>
              <input type="text" placeholder="Musterfirma GmbH" />
            </div>
          </div>
          <div className="form-group">
            <label>E-Mail-Adresse</label>
            <input type="email" placeholder="max@musterfirma.de" />
          </div>
          <div className="form-group">
            <label>
              Gewünschte Menge{' '}
              <span style={{ fontSize: '0.65rem', color: 'var(--ice-5)', letterSpacing: '0.1em' }}>(optional)</span>
            </label>
            <div className="qty-chips">
              {qtys.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  className={`qty-chip${selectedQty === q.value && (q.value !== '' || selectedQty === '') ? ' selected' : ''}`}
                  onClick={() => handleQty(q.value)}
                >
                  {q.label}
                </button>
              ))}
            </div>
            <input type="hidden" value={selectedQty} name="menge" />
          </div>
          <div className="form-group">
            <label>Ihre Nachricht</label>
            <textarea placeholder="Erzählen Sie uns von Ihrem Unternehmen und Ihren Wünschen..." />
          </div>
          <div className="form-submit">
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={submitted}
              style={submitted ? { background: 'var(--ice-5)' } : {}}
            >
              {submitted ? '✓ Anfrage gesendet' : 'Anfrage senden'}
            </button>
          </div>
          <p className="form-note">Wir antworten innerhalb von 24 Stunden · Keine Verpflichtung</p>
        </div>
      </div>
    </section>
  );
}
