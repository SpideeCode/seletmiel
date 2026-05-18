"use client";

const TapzyShowcase = () => {
  return (
    <section
      id="menu-digital"
      style={{
        padding: "7rem 0",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-label" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            Innovation &amp; Expérience
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 400,
            color: "var(--charcoal)",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}>
            Notre carte en <em style={{ fontStyle: "italic" }}>Réalité Augmentée</em>
          </h2>
          <div className="divider divider-center" />
          <p style={{
            color: "var(--text-muted)",
            fontSize: "1rem",
            maxWidth: "520px",
            margin: "1.5rem auto 0",
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            Chaque plat de notre carte prend vie en 3D sur votre smartphone.
            Visualisez avant de commander, directement à votre table.
          </p>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="showcase-grid"
        >
          {/* Left: Features list */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  icon: "◈",
                  title: "Modèles 3D haute fidélité",
                  desc: "Chaque plat est modélisé avec une précision photographique. Textures, volumes, garnitures — tout est fidèle à la réalité.",
                },
                {
                  icon: "◎",
                  title: "Réalité Augmentée sur table",
                  desc: "Posez virtuellement votre plat sur votre table avant de le commander. Une expérience inédite en Belgique.",
                },
                {
                  icon: "◇",
                  title: "Sans application à télécharger",
                  desc: "Accès instantané depuis le navigateur de votre smartphone. Aucune installation, aucune friction.",
                },
                {
                  icon: "◉",
                  title: "Carte toujours à jour",
                  desc: "Notre menu digital est synchronisé en temps réel avec nos cuisines et les disponibilités du jour.",
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    padding: "2rem 0",
                    borderBottom: "1px solid var(--border-light)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
                >
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    color: "var(--gold)",
                    lineHeight: 1,
                    paddingTop: "0.15rem",
                    flexShrink: 0,
                  }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--charcoal)",
                      marginBottom: "0.5rem",
                    }}>
                      {feat.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <a
                href="https://www.tapzy.be/m/sel-et-miel?t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Ouvrir le Menu Digital</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              background: "radial-gradient(circle, rgba(197,151,58,0.12) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }} />

            {/* Phone frame */}
            <div style={{
              width: "260px",
              height: "520px",
              background: "var(--charcoal)",
              borderRadius: "2.5rem",
              border: "8px solid var(--charcoal-light)",
              boxShadow: "0 30px 80px rgba(28,26,24,0.25), 0 0 0 1px rgba(197,151,58,0.15)",
              overflow: "hidden",
              position: "relative",
              animation: "slowFloat 6s ease-in-out infinite",
            }}>
              {/* Notch */}
              <div style={{
                position: "absolute",
                top: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70px",
                height: "6px",
                background: "var(--charcoal-light)",
                borderRadius: "3px",
                zIndex: 10,
              }} />

              {/* Screen */}
              <div style={{ position: "absolute", inset: 0, padding: "2rem 1rem 1.5rem", display: "flex", flexDirection: "column" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.2rem",
                  paddingTop: "0.5rem",
                }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--ivory)", fontStyle: "italic" }}>
                    Sel &amp; Miel
                  </span>
                  <div style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(197,151,58,0.15)",
                    border: "1px solid rgba(197,151,58,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    color: "var(--gold)",
                  }}>◈</div>
                </div>

                {/* Featured dish */}
                <div style={{
                  flex: 1,
                  borderRadius: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "0.75rem",
                  background: "var(--charcoal-mid)",
                }}>
                  <img
                    src="/img/burgerSeletmiel.webp"
                    alt="Burger Sel & Miel"
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,26,24,0.9) 0%, transparent 60%)" }} />
                  <div style={{
                    position: "absolute",
                    top: "0.6rem",
                    right: "0.6rem",
                    padding: "0.2rem 0.6rem",
                    background: "var(--gold)",
                    borderRadius: "2rem",
                    fontSize: "0.55rem",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--charcoal)",
                    textTransform: "uppercase",
                  }}>
                    3D · AR
                  </div>
                  <div style={{ position: "absolute", bottom: "0.8rem", left: "0.8rem" }}>
                    <div style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Plat du Chef</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--ivory)" }}>Burger Signature</div>
                  </div>
                </div>

                {/* Mini CTA buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  {[
                    { label: "Voir en 3D", primary: true },
                    { label: "Réalité AR", primary: false },
                  ].map(({ label, primary }) => (
                    <div key={label} style={{
                      padding: "0.6rem",
                      borderRadius: "0.6rem",
                      background: primary ? "var(--gold)" : "rgba(250,247,242,0.06)",
                      border: !primary ? "1px solid rgba(197,151,58,0.2)" : "none",
                      textAlign: "center",
                    }}>
                      <div style={{
                        fontSize: "0.55rem",
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: primary ? "var(--charcoal)" : "var(--ivory)",
                      }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .showcase-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default TapzyShowcase;
