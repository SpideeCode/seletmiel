"use client";

const Philosophy = () => {
  return (
    <section
      id="philosophie"
      style={{
        padding: "7rem 0",
        background: "var(--charcoal)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(197,151,58,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(197,151,58,0.04) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "1px",
        height: "4rem",
        background: "linear-gradient(to bottom, var(--gold), transparent)",
        opacity: 0.5,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "8rem",
            lineHeight: 0.6,
            color: "var(--gold)",
            opacity: 0.2,
            marginBottom: "2rem",
            userSelect: "none",
          }}>
            "
          </div>

          <span className="section-label" style={{ color: "var(--gold)", marginBottom: "2rem", display: "inline-block" }}>
            Notre Philosophie
          </span>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--ivory)",
            lineHeight: 1.2,
            margin: "1.5rem 0",
            letterSpacing: "0.01em",
          }}>
            Chaque assiette est une signature,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-pale)" }}>chaque geste, un engagement.</em>
          </h2>

          <div className="divider divider-center" />

          <p style={{
            color: "rgba(250,247,242,0.55)",
            fontSize: "1rem",
            lineHeight: 1.9,
            maxWidth: "580px",
            margin: "0 auto 3.5rem",
            fontWeight: 300,
          }}>
            Chez Sel &amp; Miel, la cuisine est avant tout une affaire de générosité et de soin. 
            De la justesse de l&apos;assaisonnement à la fraîcheur des produits, 
            nous croyons que l&apos;excellence naît de mille petits gestes parfaits — 
            servis dans une atmosphère chaleureuse et familiale.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(197,151,58,0.2)",
            borderLeft: "1px solid rgba(197,151,58,0.2)",
          }}>
            {[
              { number: "01", title: "Produits", desc: "Des ingrédients frais, sélectionnés avec soin pour composer chaque plat avec sincérité." },
              { number: "02", title: "Précision", desc: "Chaque cuisson, chaque assaisonnement, pensés dans les moindres détails." },
              { number: "03", title: "Accueil", desc: "Un service attentif, chaleureux — ici tout le monde est le bienvenu." },
            ].map((item) => (
              <div
                key={item.number}
                style={{
                  padding: "2.5rem 2rem",
                  borderRight: "1px solid rgba(197,151,58,0.2)",
                  borderBottom: "1px solid rgba(197,151,58,0.2)",
                  textAlign: "left",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(197,151,58,0.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem",
                  color: "var(--gold)",
                  opacity: 0.35,
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}>
                  {item.number}
                </span>
                <h4 style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--ivory)",
                  marginBottom: "0.75rem",
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: "0.85rem",
                  color: "rgba(250,247,242,0.45)",
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "1px",
        height: "4rem",
        background: "linear-gradient(to top, var(--gold), transparent)",
        opacity: 0.5,
      }} />
    </section>
  );
};

export default Philosophy;
