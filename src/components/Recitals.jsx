import React from 'react';

export default function Recitals() {
  const recitals = [
    {
      letter: '(a)',
      title: "You'll draft, not just study",
      desc: "24+ agreements — NDAs, MSAs, Shareholders' Agreements, JVs, e-contracts — built clause by clause, not read off a slide."
    },
    {
      letter: '(b)',
      title: "Every draft gets marked up",
      desc: "Personalised feedback on 10 contracts, fine-tuned until they're good enough to anchor your freelance portfolio."
    },
    {
      letter: '(c)',
      title: "You'll learn to get paid for it",
      desc: "Direct training from a top-rated Upwork contract expert — pricing, proposals, and your first client, handled with confidence."
    },
    {
      letter: '(d)',
      title: "It's permanent, not a one-time cram",
      desc: "Lifetime access to every recording, draft, and reading resource — this isn't a course you finish and forget."
    }
  ];

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-paper-dim">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-brass-dim font-mono text-xs uppercase tracking-widest mb-4">
            <span className="text-wax font-semibold">RECITALS</span>
            <span>— Whereas the following is true</span>
          </div>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-ink leading-tight mb-6">
            Most law graduates have read a hundred contracts. Almost none have drafted one that survived a real negotiation.
          </h2>
          <p className="text-ink-soft text-base leading-relaxed">
            This course exists to close that exact gap — between knowing what a clause says, and knowing why it's written that way, and what to write instead.
          </p>
        </div>

        {/* Recital List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-ink/15 divide-y md:divide-y-0 md:divide-x divide-ink/15 bg-white/50 backdrop-blur-sm rounded-sm">
          {recitals.map((recital, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-10 transition-colors duration-300 hover:bg-white/80 ${
                i >= 2 ? 'md:border-t md:border-ink/15' : ''
              }`}
            >
              <span className="font-mono text-xs text-brass-dim font-semibold block mb-4">
                {recital.letter}
              </span>
              <h3 className="font-serif font-bold text-lg text-ink mb-3">
                {recital.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {recital.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
