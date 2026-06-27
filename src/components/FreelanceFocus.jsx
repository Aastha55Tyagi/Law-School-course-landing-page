import React from 'react';

export default function FreelanceFocus() {
  const cards = [
    {
      num: '01',
      tag: 'PROFILE',
      title: "Build a profile clients trust",
      desc: "Upwork and LinkedIn profiles built around your actual drafted work, not generic claims of 'detail-oriented.'"
    },
    {
      num: '02',
      tag: 'PRICING',
      title: "Price like a professional",
      desc: "What to charge for an NDA versus an MSA, and how to say the number out loud without flinching."
    },
    {
      num: '03',
      tag: 'FIRST CLIENT',
      title: "Land and handle your first brief",
      desc: "Direct opportunities from a top-rated Upwork contract expert, plus the proposal language that actually wins work."
    }
  ];

  return (
    <section className="bg-ink text-paper py-20 md:py-28 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-brass/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-widest mb-4">
            <span className="text-brass">CLAUSE 9</span>
            <span>— Consideration</span>
          </div>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-paper leading-tight mb-6">
            The drafting is the craft. The freelancing is the income.
          </h2>
          <p className="text-paper/60 text-base leading-relaxed">
            This is the part most contract courses skip entirely — taught by someone who's actually closed clients on the platforms you'll use.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-paper/10 border border-paper/15 rounded-sm overflow-hidden">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-ink p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <span className="font-mono text-xs text-brass font-semibold tracking-wider block mb-4">
                {card.num} — {card.tag}
              </span>
              <h3 className="font-serif font-bold text-xl text-paper mb-3">
                {card.title}
              </h3>
              <p className="text-paper/60 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
