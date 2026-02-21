import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intentional — Dating, redesigned for commitment",
};

/* ───────────────────────── DATA ───────────────────────── */

const capabilities = [
  { label: "Attachment theory modeling" },
  { label: "Core values alignment" },
  { label: "Communication style analysis" },
  { label: "Long-term life goal mapping" },
  { label: "Conflict orientation patterns" },
  { label: "AI-driven compatibility scoring" },
];

const steps = [
  {
    number: "01",
    title: "Discover Your Relational Blueprint",
    description:
      "Complete a structured psychological profile and uncover your attachment style, emotional triggers, and communication patterns.",
  },
  {
    number: "02",
    title: "Intelligent Compatibility Scoring",
    description:
      "Our engine ranks matches based on measurable long-term alignment — not swipe velocity or surface-level preferences.",
  },
  {
    number: "03",
    title: "Curated Introductions",
    description:
      "No infinite scrolling. You receive a limited number of highly compatible matches each week, each chosen for a reason.",
  },
];

const audience = [
  "Serious about long-term partnership",
  "Value emotional intelligence",
  "Have outgrown swipe culture",
  "Care about compatibility more than chemistry alone",
];

/* ──────────────────── SECTION COMPONENTS ──────────────── */

function Hero() {
  return (
    <section className="py-section" aria-labelledby="hero-heading">
      <div className="section-container text-center">
        <h1
          id="hero-heading"
          className="text-hero font-display max-w-3xl mx-auto"
        >
          Dating, redesigned for commitment.
        </h1>

        <p className="mt-6 text-subhead text-ink-secondary max-w-2xl mx-auto">
          Stop swiping. Start matching based on psychological compatibility,
          attachment alignment, and long-term life vision.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#early-access" className="btn-primary">
            Take the Compatibility Preview
          </a>
          <a href="#early-access" className="btn-secondary">
            Join the Early Access List
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section
      className="py-section bg-surface-muted"
      aria-labelledby="problem-heading"
    >
      <div className="section-container max-w-3xl text-center">
        <h2 id="problem-heading" className="text-headline">
          Modern dating apps are built for engagement&nbsp;— not&nbsp;relationships.
        </h2>

        <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
          Endless scrolling. Instant judgments. Decision fatigue. For people who
          want something serious, the system feels broken — optimized for time
          spent in the app, not time spent with the right person.
        </p>

        <p className="mt-5 text-base font-medium text-ink">
          You don&rsquo;t need more options. You need better alignment.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="py-section" aria-labelledby="solution-heading">
      <div className="section-container text-center">
        <h2 id="solution-heading" className="text-headline">
          Compatibility First. Always.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-3xl mx-auto text-left">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex items-start gap-3 py-2"
            >
              <span
                className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-ink-muted flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-ink-secondary text-sm leading-snug">
                {cap.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-14 text-lg text-ink font-medium max-w-2xl mx-auto leading-relaxed">
          Instead of asking &ldquo;Are they attractive?&rdquo; we ask:
          <br />
          <em className="font-display text-xl not-italic block mt-2">
            &ldquo;Will this dynamic sustain under stress five years from
            now?&rdquo;
          </em>
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      className="py-section bg-surface-muted"
      aria-labelledby="how-heading"
    >
      <div className="section-container">
        <h2 id="how-heading" className="text-headline text-center">
          How It Works
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step) => (
            <article key={step.number} className="group">
              <span className="block text-xs font-medium tracking-widest text-ink-muted uppercase mb-4">
                Step {step.number}
              </span>

              <h3 className="text-lg font-semibold text-ink leading-snug">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                {step.description}
              </p>

              <div
                className="mt-5 h-px w-10 bg-rule transition-all duration-500 ease-smooth group-hover:w-16 group-hover:bg-ink-muted"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  return (
    <section className="py-section" aria-labelledby="audience-heading">
      <div className="section-container max-w-2xl text-center">
        <h2 id="audience-heading" className="text-headline">
          Built for Intentional People
        </h2>

        <ul className="mt-10 space-y-5 text-left inline-block" role="list">
          {audience.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-ink-secondary text-base leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink-muted">
          If you&rsquo;re looking for casual dating or entertainment, this
          probably isn&rsquo;t for you.
        </p>
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section
      id="early-access"
      className="py-section bg-surface-dark"
      aria-labelledby="cta-heading"
    >
      <div className="section-container text-center">
        <h2
          id="cta-heading"
          className="text-headline text-surface"
        >
          Join the Founding Cohort
        </h2>

        <p className="mt-6 text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
          Early members receive lifetime discounted premium access, expanded
          compatibility insights, and priority match curation.
        </p>

        <div className="mt-10">
          <a href="#" className="btn-inverse">
            Apply for Early Access
          </a>
        </div>

        <p className="mt-5 text-xs text-rule-dark tracking-wide">
          We review applications to maintain high-intent community quality.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-rule">
      <div className="section-container text-center">
        <p className="text-sm text-ink-muted">
          Swipe apps gamified attraction. We&rsquo;re engineering compatibility.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhoItsFor />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
