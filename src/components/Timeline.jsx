import React, { useState } from 'react';

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      roman: 'I–II',
      period: 'Months 1-2',
      title: 'Foundations & your first redraft',
      description: 'The anatomy of a valid contract, pre-contractual instruments, and negotiation basics — then you review and redraft a live Sale Deed yourself, with feedback.',
      details: [
        'Anatomy of a standard contract & key clauses (indemnity, liability, representations)',
        'Pre-contractual letters of intent, NDAs, and term sheets',
        'Reviewing and redrafting a live Sale Deed',
        'Basic negotiation principles and mock simulations'
      ],
      tags: ['Contract fundamentals', 'Sale Deed redraft', 'Negotiation table']
    },
    {
      roman: 'III',
      period: 'Month 3',
      title: 'Common & international agreements',
      description: 'Build fluency in the agreements every junior associate is handed first — plus advanced negotiation skills for when the other side pushes back.',
      details: [
        'Employment agreements & independent contractor agreements',
        'International commercial contracts & dispute resolution clauses',
        'Boilerplate clauses and standard interpretations',
        'Advanced negotiation techniques: handling leverage imbalances'
      ],
      tags: ['International contracts', 'Advanced negotiation']
    },
    {
      roman: 'IV',
      period: 'Month 4',
      title: 'IP, technology & website terms',
      description: 'Draft for the always-online economy — licensing, data, and the website Terms & Conditions every business needs and few lawyers can write well.',
      details: [
        'Intellectual Property assignment & licensing agreements',
        'SaaS agreements, SLA (Service Level Agreements)',
        'Website privacy policies & Terms of Service (T&Cs)',
        'GDPR and local data compliance structures'
      ],
      tags: ['IP agreements', 'Website T&Cs']
    },
    {
      roman: 'V',
      period: 'Month 5',
      title: 'Real estate agreements',
      description: 'Sale deeds, leave-and-license, power of attorney — the highest-value, highest-stakes documents in private practice.',
      details: [
        'Commercial lease & leave-and-license agreements',
        'Power of Attorney drafting (General vs Special)',
        'Gift deeds, mortgage deeds, and release deeds',
        'Title search reporting and legal due diligence'
      ],
      tags: ['Power of Attorney', 'Lease & licence']
    },
    {
      roman: 'VI',
      period: 'Month 6',
      title: 'Business agreements & freelance launch',
      description: 'MSAs, Shareholders\' Agreements, Joint Ventures — then LinkedIn profile-building, Upwork strategy, and your first client conversation.',
      details: [
        'Master Services Agreements (MSAs) & Statement of Work (SoW)',
        'Shareholders\' Agreements & Joint Venture structures',
        'Setting up professional profiles on Upwork & LinkedIn',
        'Sending proposals, pricing strategies, and onboarding clients'
      ],
      tags: ['MSAs & JVs', 'Upwork launch', 'Client handling']
    }
  ];

  return (
    <section id="schedule" className="py-20 md:py-28 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-brass-dim font-mono text-xs uppercase tracking-widest mb-4">
            <span className="text-wax font-semibold">SCHEDULE A</span>
            <span>— Term of performance</span>
          </div>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-ink leading-tight">
            Six months, structured the way a real legal career is built — foundations first, specialisation after.
          </h2>
        </div>

        {/* Interactive Accordion Timeline */}
        <div className="border-t border-ink/20">
          {timelineData.map((row, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`border-b border-ink/15 transition-all duration-300 ${
                  isOpen ? 'bg-paper-dim/40' : 'hover:bg-paper-dim/20'
                }`}
              >
                {/* Header row */}
                <div 
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="flex items-start md:items-center justify-between p-6 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    {/* Period Badge */}
                    <div className="flex flex-col items-center justify-center w-14 text-center">
                      <span className="font-serif font-bold text-2xl text-ink leading-none">
                        {row.roman}
                      </span>
                      <span className="font-mono text-[9px] tracking-wider text-wax uppercase mt-1">
                        {row.roman.includes('–') ? 'Months' : 'Month'}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-serif font-semibold text-base sm:text-lg text-ink">
                        {row.title}
                      </h3>
                      <p className="font-mono text-[10px] text-ink-soft mt-1 md:hidden">
                        {row.period}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <span className={`text-xl text-brass-dim font-mono transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {/* Body (Expanded Content) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="pl-20 pr-6 pb-6 pt-2">
                    <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
                      {row.description}
                    </p>
                    
                    {/* Bullet List details */}
                    <div className="mb-5 bg-white/70 p-4 border-l-2 border-brass rounded-sm max-w-2xl">
                      <h4 className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold mb-2">Detailed Syllabus Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {row.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-ink flex items-start gap-2">
                            <span className="text-wax mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {row.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="font-mono text-[10px] tracking-wider text-ink-soft bg-paper border border-ink/20 px-3 py-1 rounded-sm uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
