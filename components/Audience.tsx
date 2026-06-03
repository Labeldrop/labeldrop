const groups = ['Autohäuser', 'Hotels', 'Arztpraxen', 'Kanzleien', 'Immobilienbüros', 'Fitnessstudios', 'Events & Messen'];

export default function Audience() {
  return (
    <section className="audience-section section-audience" id="audience">
      <div className="audience-inner">
        <div className="audience-header reveal">
          <div className="section-label">Zielgruppen</div>
          <h2 className="section-title">Für Unternehmen,<br />die Qualität leben.</h2>
        </div>
        <div className="audience-grid">
          {groups.map((g) => (
            <div className="audience-card reveal" key={g}>
              <h3>{g}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
