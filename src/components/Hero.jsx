import React from 'react';
import RedlineDocCard from './RedlineDocCard';

export default function Hero({ onEnrollClick }) {
  const stats = [
    { value: '24+', label: 'Contracts drafted' },
    { value: '54', label: 'Live sessions' },
    { value: '9/10', label: 'Learner rating' },
    { value: '20K+', label: 'Students taught' }
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-wax font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-6 h-px bg-wax"></span>
            6-Month Live Course · Batch: July 1 – Dec 31
          </div>
          
          <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-ink leading-[1.08] tracking-tight mb-8">
            Learn to draft contracts <br className="hidden sm:inline" />
            like you've done it <br className="hidden sm:inline" />
            for <span className="italic text-wax font-medium">ten years.</span>
          </h1>
          
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            54 live sessions. 24 contracts drafted by your own hand. A direct path from 
            "law student" to a freelancer clients actually pay for — on Upwork, on LinkedIn, on retainer.
          </p>
          
          <div className="flex flex-wrap items-center gap-5 mb-12">
            <button 
              onClick={onEnrollClick}
              className="font-mono text-xs font-semibold tracking-wider bg-wax text-paper border border-wax px-8 py-4 rounded-sm uppercase transition-all duration-300 hover:bg-wax-bright hover:shadow-[0_6px_20px_rgba(139,46,31,0.25)] hover:-translate-y-0.5"
            >
              Reserve your seat →
            </button>
            <a 
              href="#schedule" 
              className="font-mono text-xs font-semibold text-ink border-b border-ink/40 pb-1 hover:border-wax hover:text-wax transition-colors"
            >
              See the full schedule
            </a>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-ink/15">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-serif font-bold text-2xl sm:text-3xl text-ink mb-1">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-ink-soft uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Redline Clause Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:pr-10">
          <RedlineDocCard />
        </div>
      </div>
    </section>
  );
}
