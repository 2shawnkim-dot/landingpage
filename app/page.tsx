"use client";

import React, { useEffect, useRef } from "react";

/* ── COLORS ── */
var C = {
  white: "#ffffff",
  bg: "#f8fafc",
  gray50: "#f8fafc",
  gray100: "#f1f5f9",
  gray200: "#e2e8f0",
  gray300: "#cbd5e1",
  gray400: "#94a3b8",
  gray500: "#64748b",
  gray600: "#475569",
  gray700: "#334155",
  gray800: "#1e293b",
  gray900: "#0f172a",
  gray950: "#020617",
  violet50: "#f5f3ff",
  violet100: "#ede9fe",
  violet400: "#a78bfa",
  violet500: "#8b5cf6",
  violet600: "#7c3aed",
  violet700: "#6d28d9",
  indigo500: "#6366f1",
  indigo600: "#4f46e5",
  indigo950: "#1e1b4b",
  emerald500: "#10b981",
  amber400: "#fbbf24",
  rose500: "#f43f5e",
  orange500: "#f97316",
  teal500: "#14b8a6",
  purple500: "#a855f7",
  blue500: "#3b82f6",
  cyan500: "#06b6d4",
};

/* ── FADE IN ── */
function useFadeIn(): React.RefObject<HTMLDivElement | null> {
  var ref = useRef<HTMLDivElement | null>(null);
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(
      function (entries: IntersectionObserverEntry[]) {
        var target = ref.current;
        if (entries[0].isIntersecting && target) {
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);
  return ref;
}

function FadeIn(props: { children: React.ReactNode; delay?: number }) {
  var ref = useFadeIn();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
        transitionDelay: (props.delay || 0) + "ms",
      }}
    >
      {props.children}
    </div>
  );
}

/* ── NAVBAR ── */
function Nav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", background: "rgba(255,255,255,0.8)", borderBottom: "1px solid " + C.gray200 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, " + C.violet600 + ", " + C.indigo600 + ")", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.white, fontSize: 14, fontWeight: 700 }}>I</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em", color: C.gray900 }}>Intentional</span>
        </a>
        <a
          href="#waitlist"
          style={{ fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 9999, background: C.gray900, color: C.white, textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.background = C.gray700; }}
          onMouseLeave={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.background = C.gray900; }}
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: 64, background: "linear-gradient(180deg, " + C.gray50 + " 0%, " + C.white + " 40%, " + C.violet50 + "40 100%)" }}>
      <div style={{ position: "absolute", width: 600, height: 600, top: -200, right: -200, borderRadius: "50%", background: "radial-gradient(circle, " + C.violet400 + ", " + C.indigo500 + ", transparent)", filter: "blur(80px)", opacity: 0.15, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, bottom: -100, left: -150, borderRadius: "50%", background: "radial-gradient(circle, " + C.violet400 + ", " + C.indigo500 + ", transparent)", filter: "blur(80px)", opacity: 0.08, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, " + C.indigo500 + " 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <FadeIn>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 9999, background: C.violet50, border: "1px solid " + C.violet100, marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.violet500, display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.violet700, letterSpacing: "0.04em" }}>Now accepting founding members</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: C.gray900, margin: 0 }}>
            Dating, redesigned
            <br />
            <span style={{ background: "linear-gradient(to right, " + C.violet600 + ", " + C.indigo600 + ", " + C.purple500 + ")", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for commitment.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p style={{ marginTop: 28, fontSize: "clamp(16px, 2.2vw, 20px)", color: C.gray500, maxWidth: 580, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65, fontWeight: 300 }}>
            AI-powered matching built on attachment theory, values alignment, and relationship science. For people done with swiping and ready for something real.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a
              href="#waitlist"
              style={{ display: "inline-flex", alignItems: "center", padding: "14px 32px", borderRadius: 9999, background: "linear-gradient(to right, " + C.violet600 + ", " + C.indigo600 + ")", color: C.white, fontSize: 14, fontWeight: 600, textDecoration: "none", boxShadow: "0 8px 30px rgba(124,58,237,0.25)", transition: "all 0.3s" }}
              onMouseEnter={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.boxShadow = "0 12px 40px rgba(124,58,237,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,58,237,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Take the Compatibility Preview
              <span style={{ marginLeft: 8 }}>{"\u2192"}</span>
            </a>
            <a
              href="#how"
              style={{ display: "inline-flex", alignItems: "center", padding: "14px 32px", borderRadius: 9999, background: C.white, color: C.gray700, fontSize: 14, fontWeight: 600, textDecoration: "none", border: "1px solid " + C.gray200, transition: "all 0.2s" }}
              onMouseEnter={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.borderColor = C.gray300; e.currentTarget.style.background = C.gray50; }}
              onMouseLeave={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.borderColor = C.gray200; e.currentTarget.style.background = C.white; }}
            >
              See How It Works
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={450}>
          <div style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 24, fontSize: 12, color: C.gray400, fontWeight: 500, flexWrap: "wrap" }}>
            {["Research-backed", "Privacy-first", "Invite-only"].map(function (t: string) {
              return <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: C.emerald500, fontSize: 14 }}>{"\u2713"}</span>{t}</span>;
            })}
          </div>
        </FadeIn>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </section>
  );
}

/* ── PROBLEM ── */
var problems = [
  { icon: "\u23F0", title: "Infinite scrolling, zero connection", desc: "The average user spends 90 minutes per day swiping. Apps keep you scrolling, not connecting." },
  { icon: "\uD83D\uDCB0", title: "Optimized for revenue, not love", desc: "Dating apps earn more when you stay single. Their model is misaligned with finding a partner." },
  { icon: "\uD83D\uDE29", title: "78% of users report burnout", desc: "Decision fatigue, ghosting, and surface matching leave people exhausted and hopeless." },
];

function Problem() {
  return (
    <section style={{ padding: "112px 0", background: C.white }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.violet600, marginBottom: 16 }}>The Problem</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.gray900, letterSpacing: "-0.025em", margin: 0 }}>Dating apps are broken by design.</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {problems.map(function (p: { icon: string; title: string; desc: string }, i: number) {
            return (
              <FadeIn key={i} delay={i * 120}>
                <div
                  style={{ padding: 32, borderRadius: 20, background: C.gray50, border: "1px solid " + C.gray100, transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)", cursor: "default" }}
                  onMouseEnter={function (e: React.MouseEvent<HTMLDivElement>) { var t = e.currentTarget; t.style.background = C.white; t.style.boxShadow = "0 20px 60px rgba(0,0,0,0.07)"; t.style.transform = "translateY(-4px)"; t.style.borderColor = C.gray200; }}
                  onMouseLeave={function (e: React.MouseEvent<HTMLDivElement>) { var t = e.currentTarget; t.style.background = C.gray50; t.style.boxShadow = "none"; t.style.transform = "translateY(0)"; t.style.borderColor = C.gray100; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: C.violet100, color: C.violet600, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>{p.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.gray900, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
var steps = [
  { num: "01", title: "Discover Your Blueprint", desc: "Complete a research-backed psychological assessment mapping attachment style, core values, communication patterns, and relationship goals.", c1: C.violet500, c2: C.indigo500 },
  { num: "02", title: "AI Compatibility Scoring", desc: "Our engine analyzes 54 dimensions of compatibility. Not who looks good on paper \u2014 who will work under real conditions.", c1: C.indigo500, c2: C.blue500 },
  { num: "03", title: "Curated Introductions", desc: "Receive 3\u20135 deeply compatible matches per week, each with a compatibility narrative and conversation starters.", c1: C.blue500, c2: C.cyan500 },
];

function HowItWorks() {
  return (
    <section id="how" style={{ padding: "112px 0", background: "linear-gradient(180deg, " + C.white + ", " + C.gray50 + ")", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 80px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.violet600, marginBottom: 16 }}>How It Works</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.gray900, letterSpacing: "-0.025em", margin: 0 }}>Three steps to meaningful connection.</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {steps.map(function (s: { num: string; title: string; desc: string; c1: string; c2: string }, i: number) {
            return (
              <FadeIn key={i} delay={i * 150}>
                <div>
                  <span style={{ fontSize: 56, fontWeight: 900, background: "linear-gradient(135deg, " + s.c1 + ", " + s.c2 + ")", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", opacity: 0.2, display: "block", lineHeight: 1 }}>{s.num}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.gray900, marginTop: 8, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  <div style={{ marginTop: 24, height: 4, width: 48, borderRadius: 2, background: "linear-gradient(to right, " + s.c1 + ", " + s.c2 + ")" }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── SCIENCE ── */
var features = [
  { title: "Attachment Theory Modeling", desc: "We identify your attachment style and match you with partners whose patterns complement yours for secure, lasting bonds.", grad: "linear-gradient(135deg, " + C.rose500 + ", #ec4899)" },
  { title: "Core Values Alignment", desc: "We map deep value structures \u2014 what you build your life around \u2014 and find true alignment beyond surface preferences.", grad: "linear-gradient(135deg, " + C.orange500 + ", #f59e0b)" },
  { title: "Communication Compatibility", desc: "How you fight matters more than whether you fight. We analyze conflict style, repair instinct, and emotional expression.", grad: "linear-gradient(135deg, " + C.emerald500 + ", " + C.teal500 + ")" },
  { title: "Life Vision Mapping", desc: "Children, geography, career, lifestyle. We ensure you are building toward the same future, not just enjoying the same present.", grad: "linear-gradient(135deg, " + C.violet500 + ", " + C.purple500 + ")" },
];

function Science() {
  return (
    <section id="science" style={{ padding: "112px 0", background: C.white }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <div style={{ maxWidth: 500, marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.violet600, marginBottom: 16 }}>The Science</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.gray900, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "0 0 24px" }}>Matching built on relationship science, not swipe velocity.</h2>
            <p style={{ fontSize: 16, color: C.gray500, lineHeight: 1.7, margin: "0 0 32px" }}>Instead of asking &ldquo;Are they attractive?&rdquo; we ask: &ldquo;Will this dynamic sustain under stress five years from now?&rdquo;</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: C.gray400 }}>
              <div style={{ width: 32, height: 1, background: C.gray300 }} />
              Based on Gottman, Bowlby, and Schwartz research
            </div>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {features.map(function (f: { title: string; desc: string; grad: string }, i: number) {
            return (
              <FadeIn key={i} delay={i * 100}>
                <div
                  style={{ padding: 24, borderRadius: 20, background: C.gray50, border: "1px solid " + C.gray100, display: "flex", alignItems: "flex-start", gap: 16, transition: "all 0.5s", cursor: "default" }}
                  onMouseEnter={function (e: React.MouseEvent<HTMLDivElement>) { e.currentTarget.style.background = C.white; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={function (e: React.MouseEvent<HTMLDivElement>) { e.currentTarget.style.background = C.gray50; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: f.grad, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: C.gray900, marginBottom: 6 }}>{f.title}</h3>
                    <p style={{ fontSize: 13, color: C.gray500, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── SOCIAL PROOF ── */
var testimonials = [
  { quote: "I was so burned out I almost gave up. My first Intentional match became my first real relationship in three years.", name: "Sarah K.", detail: "Matched in Week 2", av: "S" },
  { quote: "The compatibility breakdown was eerily accurate. It predicted every tension point and gave us tools to handle them.", name: "James R.", detail: "Partnership tier", av: "J" },
  { quote: "Finally, an app that treats finding a partner like the serious life decision it is. The onboarding alone taught me about myself.", name: "Priya M.", detail: "Beta tester", av: "P" },
];

function SocialProof() {
  return (
    <section id="proof" style={{ padding: "112px 0", background: "linear-gradient(180deg, " + C.gray50 + ", " + C.white + ")" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.violet600, marginBottom: 16 }}>Early Members</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: C.gray900, letterSpacing: "-0.025em", margin: 0 }}>Real people. Real alignment.</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {testimonials.map(function (t: { quote: string; name: string; detail: string; av: string }, i: number) {
            return (
              <FadeIn key={i} delay={i * 120}>
                <div style={{ padding: 32, borderRadius: 20, background: C.white, border: "1px solid " + C.gray100, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" as const, height: "100%" }}>
                  <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                    {[0, 1, 2, 3, 4].map(function (j: number) { return <span key={j} style={{ color: C.amber400, fontSize: 16 }}>{"\u2605"}</span>; })}
                  </div>
                  <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.7, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid " + C.gray100, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, " + C.violet400 + ", " + C.indigo500 + ")", display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontSize: 12, fontWeight: 700 }}>{t.av}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: C.gray900, margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: C.gray400, margin: 0 }}>{t.detail}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section id="waitlist" style={{ position: "relative", padding: "128px 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, " + C.gray950 + ", " + C.gray900 + ", " + C.indigo950 + ")" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, " + C.violet400 + " 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div style={{ position: "absolute", width: 500, height: 500, top: -200, left: "50%", marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, " + C.violet400 + ", " + C.indigo500 + ", transparent)", filter: "blur(80px)", opacity: 0.12, pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.violet400, marginBottom: 24 }}>Founding Cohort</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 24px" }}>Stop settling for algorithms designed to keep you single.</h2>
          <p style={{ fontSize: 18, color: C.gray400, maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>Lifetime premium pricing, priority matching, and expanded insights for founding members.</p>
        </FadeIn>
        <FadeIn delay={200}>
          <div style={{ marginTop: 40 }}>
            <a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", padding: "16px 40px", borderRadius: 9999, background: "linear-gradient(to right, " + C.violet500 + ", " + C.indigo500 + ")", color: C.white, fontSize: 14, fontWeight: 600, textDecoration: "none", boxShadow: "0 12px 40px rgba(139,92,246,0.25)", transition: "all 0.3s" }}
              onMouseEnter={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.boxShadow = "0 16px 50px rgba(139,92,246,0.45)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={function (e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,92,246,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Apply for Early Access <span style={{ marginLeft: 8 }}>{"\u2192"}</span>
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: 12, color: C.gray600 }}>Applications reviewed for community quality. Limited spots per city.</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ padding: "48px 0", background: C.gray950, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg, " + C.violet600 + ", " + C.indigo600 + ")", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.white, fontSize: 10, fontWeight: 700 }}>I</span>
          </div>
          <span style={{ fontSize: 13, color: C.gray500 }}>Intentional</span>
        </div>
        <p style={{ fontSize: 13, color: C.gray600, margin: 0 }}>Swipe apps gamified attraction. We&rsquo;re engineering compatibility.</p>
        <div style={{ display: "flex", gap: 24, fontSize: 12, color: C.gray600 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ── PAGE ── */
export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Science />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </>
  );
}
