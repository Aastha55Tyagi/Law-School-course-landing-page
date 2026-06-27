import React from 'react';

export default function Faculty() {
  const members = [
    {
      role: "Faculty — Corporate Contracts",
      name: "Debanshu, NUJS / UCL",
      desc: "Founder of Standard Indian Legal Citation, corporate lawyer, and Angel Investor with Mumbai Angels Network — formerly led Leslie and Khettry, est. 1944."
    },
    {
      role: "Faculty — Negotiation & Freelancing",
      name: "Shashank Sardesai",
      desc: "Independent Litigator and Company Secretary, University of Pune '18 — leads the redrafting workshops and negotiation table exercises."
    },
    {
      role: "Faculty — Legal Education",
      name: "Shayonee",
      desc: "Consultant at IDIA and freelance researcher-writer, deeply embedded in the legal education and freelance research space."
    }
  ];

  return (
    <section id="faculty" className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-brass-dim font-mono text-xs uppercase tracking-widest mb-4">
            <span className="text-wax font-semibold">CLAUSE 12</span>
            <span>— Representations</span>
          </div>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-ink leading-tight">
            Taught by people who draft for a living, not just teach about it.
          </h2>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <div 
              key={i} 
              className="border border-ink/15 p-8 bg-white/40 backdrop-blur-[2px] transition-all duration-300 hover:border-brass hover:bg-white/80 group rounded-sm hover:shadow-[0_8px_30px_rgba(201,166,104,0.08)]"
            >
              <span className="font-mono text-[10px] tracking-wider text-wax font-semibold uppercase block mb-4 group-hover:text-wax-bright transition-colors">
                {member.role}
              </span>
              <h3 className="font-serif font-bold text-xl text-ink mb-4 group-hover:text-wax transition-colors">
                {member.name}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
