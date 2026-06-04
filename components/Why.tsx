const cards = [
  { num: '01', title: 'Individuelles Branding', text: 'Jede Flasche wird exklusiv auf Ihr Unternehmen abgestimmt — mit Ihrem Logo, Ihren Farben, Ihrer Persönlichkeit.' },
  { num: '02', title: 'Premium-Auftritt', text: 'Positionieren Sie Ihr Unternehmen als Premiummarke — bei Kunden, Partnern und Mitarbeitern.' },
  { num: '03', title: 'Hochwertiges Design', text: 'Unsere Designexperten entwickeln ein stimmiges Erscheinungsbild, das Ihre Marke optimal in Szene setzt.' },
  { num: '04', title: 'Ideal für jeden Bereich', text: 'Ob Wartebereich, Konferenzraum, Event oder Lounge — Ihre gebrandeten Flaschen wirken überall souverän.' },
  { num: '05', title: 'Moderne Markenwirkung', text: 'Zeigen Sie Haltung. Kunden und Besucher nehmen subtile Markensignale wahr — und erinnern sich an Sie.' },
  { num: '06', title: 'Professionelle Beratung', text: 'Von der Idee bis zur Lieferung begleiten wir Sie persönlich — kompetent, unkompliziert und zuverlässig.' },
];

export default function Why() {
  return (
    <section className="why-section section-why" id="why">
      <div className="why-inner">
        <div className="why-header reveal">
          <div className="section-label">Warum Labeldrop</div>
          <h2 className="section-title">Sechs Gründe für<br />Ihr Branding.</h2>
        </div>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className="why-card reveal" key={c.num} data-delay={i * 120}>
              <div className="why-number">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
