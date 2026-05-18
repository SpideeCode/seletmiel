"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#philosophie", label: "Notre Philosophie" },
    { href: "#nos-adresses", label: "Nos Adresses" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.5s ease",
          padding: isScrolled ? "0.6rem 0" : "1.2rem 0",
          background: isScrolled ? "rgba(250, 247, 242, 0.97)" : "transparent",
          borderBottom: isScrolled ? "1px solid rgba(28,26,24,0.1)" : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center"}}>
            <Image
              src="/img/logoseletmiel.png"
              alt="Sel & Miel — Restaurant Crêperie"
              width={64}
              height={64}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isScrolled ? "var(--charcoal)" : "var(--ivory)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isScrolled ? "var(--charcoal)" : "var(--ivory)")}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.tapzy.be/m/sel-et-miel?t=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.65rem 1.6rem",
                background: "var(--gold)",
                color: "var(--charcoal)",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid var(--gold)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--charcoal)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
              }}
            >
              Notre Carte
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexDirection: "column",
              gap: "5px",
            }}
            className="mobile-toggle"
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: isScrolled ? "var(--charcoal)" : "var(--ivory)",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: isMobileOpen
                    ? i === 0 ? "translateY(6px) rotate(45deg)"
                    : i === 2 ? "translateY(-6px) rotate(-45deg)"
                    : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "var(--ivory)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s ease",
          padding: "2rem",
        }}
      >
        <Image
          src="/img/logoseletmiel.png"
          alt="Sel & Miel"
          width={80}
          height={80}
          style={{ objectFit: "cover", borderRadius: "50%", marginBottom: "1rem" }}
        />
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 400,
              color: "var(--charcoal)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.3s",
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://www.tapzy.be/m/sel-et-miel?t=1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileOpen(false)}
          className="btn-gold"
          style={{ marginTop: "1rem" }}
        >
          Notre Carte
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
