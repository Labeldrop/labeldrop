'use client';

import { useState } from 'react';

export default function Contact() {
  const [selectedQty, setSelectedQty] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', firma: '', email: '', nachricht: '' });

  const handleQty = (val: string) => setSelectedQty(val === selectedQty ? '' : val);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, menge: selectedQty }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', firma: '', email: '', nachricht: '' });
        setSelectedQty('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
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
              <label>Ihr Name *</label>
              <input name="name" type="text" placeholder="Max Mustermann" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Unternehmen</label>
              <input name="firma" type="text" placeholder="Musterfirma GmbH" value={form.firma} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>E-Mail-Adresse *</label>
            <input name="email" type="email" placeholder="max@musterfirma.de" value={form.email} onChange={handleChange} />
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
          </div>
          <div className="form-group">
            <label>Ihre Nachricht</label>
            <textarea name="nachricht" placeholder="Erzählen Sie uns von Ihrem Unternehmen und Ihren Wünschen..." value={form.nachricht} onChange={handleChange} />
          </div>
          <div className="form-submit">
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={status === 'sending' || status === 'success'}
              style={status === 'success' ? { background: '#2e7d4f' } : status === 'error' ? { background: '#c0392b' } : {}}
            >
              {status === 'sending' && 'Wird gesendet...'}
              {status === 'success' && '✓ Anfrage erfolgreich gesendet'}
              {status === 'error' && 'Fehler — bitte erneut versuchen'}
              {status === 'idle' && 'Anfrage senden'}
            </button>
          </div>
          {status === 'success' && (
            <p style={{ textAlign: 'center', color: '#2e7d4f', fontSize: '0.9rem', marginTop: 8 }}>
              Wir melden uns innerhalb von 24 Stunden bei Ihnen!
            </p>
          )}
          <p className="form-note">Wir antworten innerhalb von 24 Stunden · Keine Verpflichtung</p>
        </div>
      </div>
    </section>
  );
}
