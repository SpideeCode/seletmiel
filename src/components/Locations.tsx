"use client";

const sharedHighlights = ["Burgers & Pâtes", "Crêpes Gourmandes", "Escalopes & Pain de Veau", "Salades Fraîches", "Gaufres & Glaces", "Smoothies & Milkshakes"];

const locations = [
  {
    id: "albert-ii",
    name: "Boulevard Albert II",
    subtitle: "Chaleur & Convivialité",
    description: "Un cadre lumineux et moderne sur deux niveaux. Venez savourer nos burgers, pâtes, escalopes, crêpes gourmandes, gaufres et bien plus — dans une atmosphère conviviale et familiale. Entièrement halal.",
    address: "Bd Roi Albert II 41, 1030 Bruxelles",
    phone: "02 248 06 57",
    hours: "Tous les jours : 14h – 23h",
    tags: ["Halal", "Familial", "Wi-Fi", "Terrasse"],
    image: "/img/seletmielAncien.jpg",
    googleMaps: "https://maps.google.com/?q=Bd+Roi+Albert+II+41+1030+Bruxelles",
  },
  {
    id: "lemonnier",
    name: "Boulevard Lemonnier",
    subtitle: "Tradition & Générosité",
    description: "Une adresse chaleureuse où il fait bon se retrouver. Pâtes maison, crêpes gourmandes, salades fraîches, gaufres et une grande variété de boissons : smoothies, milkshakes, cafés et glaces. Entièrement halal.",
    address: "Bd Maurice Lemonnier 11, 1000 Bruxelles",
    phone: "02 675 98 52",
    hours: "Tous les jours : 14h – 23h",
    tags: ["Halal", "Familial", "Ouvert tous les jours", "Accueil chaleureux"],
    image: "/img/photoSeletMiel.jpg",
    googleMaps: "https://maps.google.com/?q=Bd+Maurice+Lemonnier+11+1000+Bruxelles",
  },
];

const Locations = () => {
  return (
    <section id="nos-adresses" style={{ padding: "7rem 0", background: "var(--ivory)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            Nos Établissements
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "var(--charcoal)",
            lineHeight: 1.15,
          }}>
            Deux adresses, <em style={{ fontStyle: "italic" }}>une seule promesse</em>
          </h2>
          <div className="divider divider-center" style={{ margin: "1.25rem auto" }} />
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
            Retrouvez-nous dans deux quartiers de Bruxelles, chacun avec son caractère propre.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="card"
              style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
            >
              {/* Image */}
              <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
                <img
                  src={loc.image}
                  alt={loc.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.7s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,26,24,0.65) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "1.2rem", left: "1.5rem" }}>
                  <span style={{
                    display: "inline-block", padding: "0.25rem 0.8rem", background: "var(--gold)",
                    fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", fontWeight: 600,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--charcoal)",
                  }}>
                    {loc.subtitle}
                  </span>
                </div>
                {/* Halal badge */}
                <div style={{
                  position: "absolute", top: "1rem", right: "1rem",
                  padding: "0.2rem 0.6rem",
                  background: "rgba(28,26,24,0.75)", backdropFilter: "blur(6px)",
                  border: "1px solid rgba(197,151,58,0.4)",
                  fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)",
                }}>
                  Halal
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 400, color: "var(--charcoal)", marginBottom: "0.75rem" }}>
                  {loc.name}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem", fontWeight: 300 }}>
                  {loc.description}
                </p>

                {/* Highlights */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                  padding: "1rem",
                  background: "rgba(197,151,58,0.05)",
                  border: "1px solid rgba(197,151,58,0.1)",
                }}>
                  {sharedHighlights.map((h) => (
                    <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem" }}>◆</span>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-mid)", fontWeight: 400 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Info details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                  {[loc.address, loc.phone, loc.hours].map((val) => (
                    <div key={val} style={{ fontSize: "0.85rem", color: "var(--text-mid)", paddingLeft: "0.75rem", borderLeft: "2px solid var(--gold)", opacity: 0.85, lineHeight: 1.4 }}>
                      {val}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
                  {loc.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "0.25rem 0.75rem", background: "transparent",
                      border: "1px solid var(--border)", fontSize: "0.65rem",
                      fontFamily: "'Jost', sans-serif", fontWeight: 500,
                      letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "auto" }}>
                  <a
                    href={loc.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "0.8rem", border: "1px solid var(--border-light)",
                      fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 500,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--charcoal)", textDecoration: "none", transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--charcoal)"; (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--charcoal)"; }}
                  >
                    Itinéraire
                  </a>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "0.8rem", background: "var(--charcoal)",
                      fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 500,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--ivory)", textDecoration: "none", transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--charcoal)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--charcoal)"; (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                  >
                    Appeler
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
