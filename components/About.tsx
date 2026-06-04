export default function About() {
  return (
    <section id="about" className="section-about" style={{ padding: '120px 60px' }}>
      <div className="about reveal">
        <div>
          <div className="section-label">Über Labeldrop</div>
          <h2 className="section-title">Branding, das<br />man anfassen<br />kann.</h2>
          <p className="section-body">Labeldrop unterstützt Unternehmen dabei, ihre Markenidentität durch individuell gestaltete Premium-Wasserflaschen hochwertig zu präsentieren.</p>
          <p className="section-body" style={{ marginTop: 20 }}>Von der Erstberatung bis zur Lieferung – alles aus einer Hand. Professionell, schnell und in höchster Qualität für Ihr Unternehmen.</p>
          <p className="section-body" style={{ marginTop: 20 }}>Kein Werbegeschenk von der Stange — sondern ein durchdachtes Markenerlebnis.</p>
        </div>
        <div className="about-visual">
          <div className="about-card card-floating card-float-1 reveal">
            <div className="float-icon">✦</div>
            <div className="float-text">Premium<br />Qualität</div>
          </div>
          <div className="about-card card-main">
            <div className="card-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Individuelles Design</div>
            </div>
            <div className="stat-divider" />
            <div className="card-stat">
              <div className="stat-number">Flexibel</div>
              <div className="stat-label">ab 300 Stück bestellbar</div>
            </div>
            <div className="stat-divider" />
            <div className="card-stat">
              <div className="stat-number">B2B</div>
              <div className="stat-label">Fokus</div>
            </div>
            <div className="stat-divider" />
            <div className="card-stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Möglichkeiten</div>
            </div>
          </div>
          <div className="about-card card-floating card-float-2 reveal">
            <div className="float-icon">◈</div>
            <div className="float-text">Ihr<br />Design</div>
          </div>
        </div>
      </div>
    </section>
  );
}
