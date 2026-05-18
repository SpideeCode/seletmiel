"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxEls = heroRef.current.querySelectorAll(".hero-bg-img") as NodeListOf<HTMLElement>;
      parallaxEls.forEach((el) => {
        el.style.transform = `translateY(${scrolled * 0.3}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--charcoal)",
      }}
    >
      {/* Two-photo background split */}
      <div style={{
        position: "absolute",
        inset: "-15%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
      }}>
        {/* Left photo: photoSeletMiel (Albert II - modern) */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            className="hero-bg-img"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/img/photoSeletMiel.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              opacity: 0.45,
              willChange: "transform",
            }}
          />
        </div>
        {/* Right photo: seletmielAncien (Lemonnier) */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            className="hero-bg-img"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/img/seletmielAncien.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.45,
              willChange: "transform",
            }}
          />
        </div>
      </div>

      {/* Vertical divider line in the middle */}
      <div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "50%",
        width: "1px",
        background: "linear-gradient(to bottom, transparent, rgba(197,151,58,0.5), transparent)",
        zIndex: 2,
      }} />

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(28,26,24,0.55) 0%, rgba(28,26,24,0.25) 40%, rgba(28,26,24,0.8) 100%)",
        zIndex: 3,
      }} />

      {/* Decorative corner lines */}
      <div style={{ position: "absolute", top: "2rem", left: "2rem", width: "1px", height: "5rem", background: "linear-gradient(to bottom, transparent, var(--gold))", opacity: 0.5, zIndex: 4 }} />
      <div style={{ position: "absolute", bottom: "2rem", right: "2rem", width: "1px", height: "5rem", background: "linear-gradient(to top, transparent, var(--gold))", opacity: 0.5, zIndex: 4 }} />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingTop: "7rem",
          paddingBottom: "7rem",
        }}
      >
        <div style={{ opacity: 0, animation: "fadeUp 1s ease 0.2s forwards" }}>
          <span
            className="section-label"
            style={{ color: "var(--gold-pale)", marginBottom: "2rem", display: "inline-block" }}
          >
            Restaurant · Crêperie · Bruxelles
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            fontWeight: 300,
            color: "var(--ivory)",
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 1s ease 0.4s forwards",
          }}
        >
          Rien n&apos;est laissé
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold-pale)" }}>au hasard.</em>
        </h1>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 300,
            color: "rgba(250,247,242,0.65)",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.8,
            letterSpacing: "0.03em",
            opacity: 0,
            animation: "fadeUp 1s ease 0.6s forwards",
          }}
        >
          Une cuisine généreuse et conviviale — burgers, crêpes, pâtes, gaufres 
          et bien plus. Halal. Deux adresses à Bruxelles.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            opacity: 0,
            animation: "fadeUp 1s ease 0.8s forwards",
          }}
        >
          <a
            href="https://www.tapzy.be/m/sel-et-miel?t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <span>Découvrir la Carte</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <Link href="#nos-adresses" className="btn-outline" style={{ color: "var(--ivory)", borderColor: "rgba(250,247,242,0.4)" }}>
            <span>Nos Adresses</span>
          </Link>
        </div>

        {/* Dual label below */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "6rem",
          marginTop: "4rem",
          opacity: 0,
          animation: "fadeIn 1s ease 1.2s forwards",
        }}>
          {["Boulevard Lemonnier", "Boulevard Albert II"].map((name) => (
            <div key={name} style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(250,247,242,0.35)",
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "-2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: 0,
          animation: "fadeIn 1s ease 1.4s forwards",
        }}>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(250,247,242,0.35)",
          }}>
            Défiler
          </span>
          <div style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
            animation: "lineGrow 1.5s ease 1.8s both",
            transformOrigin: "top",
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
