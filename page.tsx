"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   ANIMATED GRADIENT ORB
   ───────────────────────────────────────────── */
function GradientOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none ${className || ""}`}
      style={{ background: "radial-gradient(circle, #a78bfa 0%, #6366f1 40%, transparent 70%)" }}
    />
  );
}

/* ─────────────────────────────────────────────
   FADE-IN ON SCROLL OBSERVER
   ───────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAV
   ───────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">I</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-gray-900">Intentional</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-gray-500 font-medium">
          <a href="#how" className="hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#science" className="hover:text-gray-900 transition-colors">The Science</a>
          <a href="#proof" className="hover:text-gray-900 transition-colors">Stories</a>
        </div>
        <a
          href="#waitlist"
          className="text-[13px] font-semibold px-5 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/20"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-violet-50/30" />
      <GradientOrb className="w-[600px] h-[600px] -top-40 -right-40" />
      <GradientOrb className="w-[500px] h-[500px] -bottom-20 -left-32 !opacity-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-semibold text-violet-700 tracking-wide">Now accepting founding members</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05]">
            Dating, redesigned
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              for commitment.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-7 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            AI-powered matching built on attachment theory, values alignment, and
            relationship science. For people done with swiping and ready for something real.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#waitlist"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Take the Compatibility Preview
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={450}>
          <div className="mt-16 flex items-center justify-center gap-8 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Research-backed
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Privacy-first
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Invite-only
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROBLEM
   ───────────────────────────────────────────── */
const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Infinite scrolling, zero connection",
    desc: "The average user spends 90 minutes per day swiping through faces. Apps are designed to keep you scrolling, not to help you find someone.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Optimized for engagement, not outcomes",
    desc: "Dating apps earn more when you stay single. Their revenue model is fundamentally misaligned with your goal of finding a lasting partner.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "78% of users report burnout",
    desc: "Decision fatigue, ghosting, and surface-level matching leave most people feeling exhausted and hopeless about finding real connection.",
  },
];

function Problem() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-4">The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Dating apps are broken by design.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-5 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
   ───────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discover Your Blueprint",
    desc: "Complete a research-backed psychological assessment that maps your attachment style, core values, communication patterns, and relationship goals.",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    num: "02",
    title: "AI Compatibility Scoring",
    desc: "Our engine analyzes 54 dimensions of compatibility. Not who looks good on paper \u2014 who will actually work with you under real-world conditions.",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    num: "03",
    title: "Curated Introductions",
    desc: "Receive 3\u20135 deeply compatible matches per week. Each comes with a compatibility narrative explaining why you were paired and conversation starters.",
    accent: "from-blue-500 to-cyan-500",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <GradientOrb className="w-[400px] h-[400px] top-20 right-0 !opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Three steps to meaningful connection.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="relative">
                <span className={`text-6xl font-black bg-gradient-to-br ${s.accent} bg-clip-text text-transparent opacity-20`}>
                  {s.num}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${s.accent}`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SCIENCE / DIFFERENTIATION
   ───────────────────────────────────────────── */
const features = [
  {
    title: "Attachment Theory Modeling",
    desc: "We identify your attachment style and match you with partners whose patterns complement yours for secure, lasting bonds.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Core Values Alignment",
    desc: "Beyond surface preferences. We map deep value structures \u2014 what you build your life around \u2014 and find true alignment.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Communication Compatibility",
    desc: "How you fight matters more than whether you fight. We analyze conflict style, repair instinct, and emotional expression.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Life Vision Mapping",
    desc: "Children, geography, career ambitions, lifestyle. We ensure you are building toward the same future, not just enjoying the same present.",
    gradient: "from-violet-500 to-purple-500",
  },
];

function Science() {
  return (
    <section id="science" className="relative py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-4">The Science</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Matching built on
                <br />
                relationship science,
                <br />
                not swipe velocity.
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Instead of asking &ldquo;Are they attractive?&rdquo; we ask: &ldquo;Will this
                dynamic sustain under stress five years from now?&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-px bg-gray-300" />
                Based on Gottman, Bowlby, and Schwartz research
              </div>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-gray-200/40 hover:border-gray-200 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} opacity-80 flex-shrink-0 mt-0.5`} />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SOCIAL PROOF
   ───────────────────────────────────────────── */
const testimonials = [
  {
    quote: "I was so burned out on dating apps I almost gave up. My first Intentional match became my first real relationship in three years.",
    name: "Sarah K.",
    detail: "Matched in Week 2",
    avatar: "S",
  },
  {
    quote: "The compatibility breakdown was eerily accurate. It predicted every tension point we would navigate \u2014 and gave us tools to handle them.",
    name: "James R.",
    detail: "Now in Partnership tier",
    avatar: "J",
  },
  {
    quote: "Finally, an app that treats finding a partner like the serious life decision it actually is. The onboarding alone taught me things about myself.",
    name: "Priya M.",
    detail: "Beta tester",
    avatar: "P",
  },
];

function SocialProof() {
  return (
    <section id="proof" className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-4">Early Members</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Real people. Real alignment.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.detail}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA
   ───────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <GradientOrb className="w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2 !opacity-15" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-6">Founding Cohort</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Stop settling for algorithms
            <br />
            designed to keep you single.
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Join the founding cohort. Lifetime premium pricing, priority matching,
            and expanded compatibility insights for early members.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10">
            <a
              href="#"
              className="group inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm font-semibold shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply for Early Access
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <p className="mt-5 text-xs text-gray-500">
            We review applications to maintain a high-intent community. Limited spots per city.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">I</span>
          </div>
          <span className="text-sm text-gray-500">Intentional</span>
        </div>
        <p className="text-sm text-gray-600 text-center">
          Swipe apps gamified attraction. We&rsquo;re engineering compatibility.
        </p>
        <div className="flex items-center gap-6 text-xs text-gray-600">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
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
