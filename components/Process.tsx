const steps = [
  { icon: '📩', title: 'Anfrage senden', text: 'Kontaktieren Sie uns unverbindlich. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.' },
  { icon: '🎨', title: 'Design abstimmen', text: 'Gemeinsam entwickeln wir Ihr individuelles Label-Design — basierend auf Ihrer Markenidentität.' },
  { icon: '⚙️', title: 'Produktion', text: 'Ihre Flaschen werden bei zertifizierten Premiumpartnern professionell produziert und veredelt.' },
  { icon: '📦', title: 'Lieferung', text: 'Ihre gebrandeten Wasserflaschen werden direkt und zuverlässig an Ihre gewünschte Adresse geliefert.' },
];

export default function Process() {
  return (
    <section className="process-section section-process" id="process">
      <div className="process-inner">
        <div className="process-header reveal">
          <div className="section-label">So funktioniert es</div>
          <h2 className="section-title">Vier Schritte<br />zu Ihrer Flasche.</h2>
        </div>
        <div className="process-steps">
          {steps.map((s) => (
            <div className="process-step reveal" key={s.title}>
              <div className="step-num"><span className="step-icon">{s.icon}</span></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
