export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Dating, redesigned for commitment.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Stop swiping. Start matching based on psychological compatibility,
          attachment alignment, and long-term life vision.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#early-access" className="btn-primary">
            Take the Compatibility Preview
          </a>
          <a href="#early-access" className="btn-secondary">
            Join the Early Access List
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Modern dating apps are built for engagement — not relationships.
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Endless scrolling. Instant judgments. Decision fatigue. For people who
            want something serious, the system feels broken.
          </p>
          <p className="mt-4 text-gray-800 font-medium">
            You don&rsquo;t need more options. You need better alignment.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Compatibility First. Always.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            <ul className="space-y-4 text-gray-700">
              <li>&#8226; Attachment theory modeling</li>
              <li>&#8226; Core values alignment</li>
              <li>&#8226; Communication style analysis</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>&#8226; Long-term life goal mapping</li>
              <li>&#8226; Conflict orientation patterns</li>
              <li>&#8226; AI-driven compatibility scoring</li>
            </ul>
          </div>
          <p className="mt-10 text-lg text-gray-800 font-medium max-w-2xl mx-auto">
            Instead of asking &ldquo;Are they attractive?&rdquo; we ask:
            <br />
            <em className="block mt-2 text-xl">
              &ldquo;Will this dynamic sustain under stress five years from now?&rdquo;
            </em>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg">1. Discover Your Relational Blueprint</h3>
              <p className="mt-3 text-gray-600">
                Complete a structured psychological profile and uncover your
                attachment style, emotional triggers, and communication patterns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">2. Intelligent Compatibility Scoring</h3>
              <p className="mt-3 text-gray-600">
                Our engine ranks matches based on measurable long-term alignment —
                not swipe velocity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">3. Curated Introductions</h3>
              <p className="mt-3 text-gray-600">
                No infinite scrolling. You receive a limited number of highly
                compatible matches each week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Built for Intentional People</h2>
          <ul className="mt-8 space-y-4 text-gray-700 text-lg">
            <li>&#10004; Serious about long-term partnership</li>
            <li>&#10004; Value emotional intelligence</li>
            <li>&#10004; Have outgrown swipe culture</li>
            <li>&#10004; Care about compatibility more than chemistry alone</li>
          </ul>
          <p className="mt-8 text-gray-500 text-sm">
            If you&rsquo;re looking for casual dating or entertainment, this probably isn&rsquo;t for you.
          </p>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="early-access" className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">Join the Founding Cohort</h2>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Early members receive lifetime discounted premium access,
          expanded compatibility insights, and priority match curation.
        </p>
        <div className="mt-10">
          <a href="#" className="btn-inverse">Apply for Early Access</a>
        </div>
        <p className="mt-4 text-gray-500 text-xs tracking-wide">
          We review applications to maintain high-intent community quality.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-200">
        Swipe apps gamified attraction. We&rsquo;re engineering compatibility.
      </footer>
    </main>
  );
}
