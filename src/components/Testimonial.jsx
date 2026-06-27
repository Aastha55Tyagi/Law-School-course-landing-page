import React from 'react';

export default function Testimonial() {
  return (
    <section className="bg-paper-dim border-y border-ink/15 py-20 md:py-24 relative overflow-hidden">
      {/* Decorative quotes watermark */}
      <div className="absolute -top-10 left-12 font-serif text-[180px] text-ink/5 pointer-events-none select-none">
        “
      </div>
      <div className="absolute -bottom-28 right-12 font-serif text-[180px] text-ink/5 pointer-events-none select-none">
        ”
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Rating stars */}
        <div className="font-mono text-xs tracking-widest text-wax font-semibold mb-6 flex justify-center items-center gap-1.5">
          <span className="text-amber-500 text-lg">★★★★★</span>
          <span className="mx-2">•</span>
          <span>RATED 9/10 BY THE DEC–MAY BATCH</span>
        </div>

        {/* Quote */}
        <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-ink leading-relaxed mb-8">
          "My overall experience with the Contract Drafting and Negotiation course was very good. The six-month course covered a wide range of important agreements."
        </blockquote>

        {/* Author info */}
        <cite className="font-mono text-[11px] tracking-wider text-ink-soft uppercase not-italic font-semibold">
          — LEARNER, DEC 2025–MAY 2026 BATCH
        </cite>
      </div>
    </section>
  );
}
