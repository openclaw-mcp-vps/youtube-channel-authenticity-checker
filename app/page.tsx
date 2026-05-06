export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Discovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Is That YouTube Channel<br />
          <span className="text-[#58a6ff]">Actually On-Topic?</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste any YouTube channel URL and get an AI-powered authenticity score showing how consistently it sticks to its stated niche — before you subscribe.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $5/month
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Paste Channel URL", desc: "Drop in any YouTube channel link." },
          { step: "2", title: "AI Analyzes Videos", desc: "We scan recent titles & descriptions against the channel topic." },
          { step: "3", title: "Get Authenticity Score", desc: "Receive a 0–100 score with a detailed breakdown." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited channel analyses",
              "AI topic-consistency scoring",
              "Detailed video-by-video breakdown",
              "Export reports as PDF",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the authenticity score work?",
              a: "We fetch the channel's recent videos via the YouTube Data API, then use AI to compare each video's title and description against the channel's stated topic. The score reflects the percentage of on-topic content."
            },
            {
              q: "Which YouTube channels can I analyze?",
              a: "Any public YouTube channel. Simply paste the channel URL or handle and we'll handle the rest."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} YouTube Channel Authenticity Checker. All rights reserved.
      </footer>
    </main>
  );
}
