"use client";

import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--charcoal)", color: "var(--ivory)", padding: "5rem 0 2rem" }}>
      <div className="container">
        {/* Top CTA band */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid rgba(197,151,58,0.2)",
          marginBottom: "3.5rem",
        }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400, color: "var(--ivory)", marginBottom: "0.5rem" }}>
              Découvrez notre carte en 3D
            </h3>
            <p style={{ color: "rgba(250,247,242,0.45)", fontSize: "0.9rem", fontWeight: 300 }}>
              Toute la carte en réalité augmentée, directement sur votre smartphone.
            </p>
          </div>
          <a
            href="https://www.tapzy.be/m/sel-et-miel?t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Voir le Menu Digital
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3.5rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 500, letterSpacing: "0.05em", marginBottom: "0.2rem" }}>
                Sel <span style={{ color: "var(--gold)" }}>&amp;</span> Miel
              </div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
                Bruxelles
              </div>
            </div>
            <p style={{ color: "rgba(250,247,242,0.4)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "320px", fontWeight: 300 }}>
              Deux restaurants de caractère à Bruxelles. Une cuisine soignée, des produits sélectionnés, un service qui fait la différence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Navigation
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { href: "#philosophie", label: "Notre Philosophie" },
                { href: "#menu-digital", label: "Menu Digital 3D" },
                { href: "#nos-adresses", label: "Nos Adresses" },
                { href: "https://www.tapzy.be/m/sel-et-miel?t=1", label: "Carte en ligne", external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgba(250,247,242,0.45)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.3s", fontWeight: 300 }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.45)")}
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={{ color: "rgba(250,247,242,0.45)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.3s", fontWeight: 300 }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.45)")}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Contact
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { name: "Albert II", addr: "Bd Roi Albert II 41, 1030", phone: "02 248 06 57" },
                { name: "Lemonnier", addr: "Bd Maurice Lemonnier 11, 1000", phone: "02 675 98 52" },
              ].map((loc) => (
                <div key={loc.name}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,247,242,0.7)", marginBottom: "0.3rem" }}>
                    {loc.name}
                  </div>
                  <div style={{ color: "rgba(250,247,242,0.35)", fontSize: "0.82rem", lineHeight: 1.6, fontWeight: 300 }}>
                    {loc.addr}<br />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} style={{ color: "rgba(250,247,242,0.55)", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.55)")}
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(250,247,242,0.06)",
        }}>
          <p style={{ color: "rgba(250,247,242,0.2)", fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.1em" }}>
            © {year} Sel &amp; Miel — Menu digital propulsé par{" "}
            <a href="https://tapzy.be" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Tapzy</a>
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Mentions légales", "Confidentialité"].map((label) => (
              <Link key={label} href="#" style={{ color: "rgba(250,247,242,0.2)", fontSize: "0.7rem", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.6)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.2)")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
