import React from 'react';

export default function TrustStats() {
  const trusts = [
    { num: '15', text: 'years as Lawctopus' },
    { num: '3.5L+', text: 'readers reached' },
    { num: '93.2/100', text: 'average course rating' },
    { num: 'Upwork', text: 'direct freelance pathway' }
  ];

  return (
    <div className="border-y border-ink/15 bg-paper py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
        {trusts.map((item, i) => (
          <div key={i} className="flex items-center gap-3 font-mono text-xs tracking-wider text-ink-soft">
            <span className="font-serif font-bold text-lg text-ink">
              {item.num}
            </span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
