import React from 'react';

export default function Fees({ onEnrollClick }) {
  const plans = [
    {
      id: 'full',
      name: "Mastering Contract Drafting & Freelancing",
      duration: "6 months · 54 live sessions",
      oldPrice: "Rs. 60,000",
      newPrice: "Rs. 24,999",
      featured: true,
      features: [
        "24+ agreements drafted by your own hand",
        "Personalized markup feedback on 10 drafts",
        "Upwork & LinkedIn freelance pathway training",
        "Lifetime access to all materials and live recordings",
        "Direct access to expert guest speaker workshops"
      ],
      ctaText: "Enroll (Best Value) →"
    },
    {
      id: 'short',
      name: "Contract Drafting & Negotiation",
      duration: "2 months · live sessions",
      oldPrice: null,
      newPrice: "Rs. 7,999",
      featured: false,
      features: [
        "Core contract drafting fundamentals",
        "Common commercial agreement structures",
        "Negotiation strategy & mock disputes",
        "Access to curriculum readings & templates"
      ],
      ctaText: "Enroll →"
    }
  ];

  return (
    <section id="enroll" className="py-20 md:py-28 bg-paper">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="flex items-center justify-center gap-3 text-brass-dim font-mono text-xs uppercase tracking-widest mb-4">
            <span className="text-wax font-semibold">SCHEDULE B</span>
            <span>— Fees & Investments</span>
          </div>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-ink leading-tight">
            Two ways in. One is built for this exact outcome.
          </h2>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`flex flex-col justify-between border rounded-sm p-8 md:p-10 relative transition-all duration-300 ${
                plan.featured 
                  ? 'bg-[#FFF8E8] border-brass shadow-[0_15px_40px_rgba(201,166,104,0.15)] md:scale-105 z-10' 
                  : 'bg-white/40 border-ink/15 shadow-sm'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wax text-paper text-[9px] font-mono tracking-widest px-4 py-1.5 uppercase rounded-sm shadow-md">
                  RECOMMENDED BATCH
                </span>
              )}

              <div>
                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-ink mb-2">
                  {plan.name}
                </h3>
                
                {/* Duration */}
                <div className="font-mono text-[10px] text-ink-soft uppercase tracking-wider mb-6">
                  {plan.duration}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                  {plan.oldPrice && (
                    <span className="font-mono text-sm text-ink-soft line-through">
                      {plan.oldPrice}
                    </span>
                  )}
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-wax">
                    {plan.newPrice}
                  </span>
                </div>

                {/* Bullet features */}
                <ul className="space-y-3 mb-10 border-t border-ink/10 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs sm:text-sm text-ink-soft flex items-start gap-2.5">
                      <span className="text-brass-dim font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                onClick={() => onEnrollClick(plan.id)}
                className={`w-full font-mono text-xs font-semibold tracking-wider py-4 rounded-sm uppercase transition-all duration-300 text-center ${
                  plan.featured 
                    ? 'bg-wax text-paper hover:bg-wax-bright hover:shadow-[0_4px_15px_rgba(139,46,31,0.3)]' 
                    : 'bg-ink text-paper hover:bg-ink-soft'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
