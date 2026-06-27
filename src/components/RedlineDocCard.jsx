import React, { useState } from 'react';

export default function RedlineDocCard() {
  const [isRedlined, setIsRedlined] = useState(true);
  const [activeNote, setActiveNote] = useState('welcome');

  const notes = {
    welcome: {
      title: "Interactive Contract Redline",
      text: "Click the toggle above or hover over highlighted terms to see why standard drafting clauses fail in real negotiations."
    },
    tryBest: {
      title: "Vague Standards",
      text: "'Try its best' is a subjective legal standard that leads to disputes. Always define a objective benchmark like 'reasonable care' or 'same degree of care'."
    },
    survival: {
      title: "Insufficient Duration",
      text: "6 months is far too short for intellectual property and proprietary trade secrets. 3 years is standard; trade secrets should survive indefinitely."
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Controls */}
      <div className="flex justify-between items-center mb-4 bg-paper-dim/80 p-2 rounded border border-ink/10 font-mono text-xs">
        <span className="text-ink-soft">Document Status:</span>
        <button 
          onClick={() => setIsRedlined(!isRedlined)}
          className={`px-3 py-1 rounded transition-all font-semibold ${
            isRedlined 
              ? 'bg-wax text-paper shadow-sm' 
              : 'bg-ink text-paper'
          }`}
        >
          {isRedlined ? 'View Redlined Draft' : 'View Original Draft'}
        </button>
      </div>

      {/* Document Sheet */}
      <div className="bg-white border border-ink/15 shadow-premium p-8 rounded-sm relative transform rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
        {/* Seal watermark */}
        <div className="absolute top-6 right-6 w-14 h-14 border border-brass/50 rounded-full flex items-center justify-center pointer-events-none opacity-60">
          <span className="font-mono text-[8px] tracking-widest text-brass-dim font-bold">DRAFT</span>
        </div>

        {/* Header */}
        <div className="font-mono text-[10px] tracking-wider text-ink-soft border-b border-ink/10 pb-3 mb-6">
          NON-DISCLOSURE AGREEMENT · CLAUSE 4 · CONFIDENTIALITY
        </div>

        {/* Clause 4.1 */}
        <div className="mb-6 font-serif text-sm md:text-base leading-relaxed text-ink">
          <span className="font-mono text-xs text-brass-dim mr-2 select-none">4.1</span>
          The Receiving Party shall{" "}
          {isRedlined ? (
            <>
              <span 
                className="line-through decoration-wax decoration-[1.5px] text-zinc-400 cursor-pointer transition-colors hover:bg-wax/5 px-0.5"
                onMouseEnter={() => setActiveNote('tryBest')}
                onMouseLeave={() => setActiveNote('welcome')}
              >
                try its best to
              </span>{" "}
              <span 
                className="bg-emerald-50 text-emerald-800 border-b-2 border-emerald-600 px-1 cursor-pointer font-medium transition-colors hover:bg-emerald-100"
                onMouseEnter={() => setActiveNote('tryBest')}
                onMouseLeave={() => setActiveNote('welcome')}
              >
                use the same degree of care it applies to its own confidential information, and in no event less than reasonable care,
              </span>
            </>
          ) : (
            <span className="bg-red-50 text-red-900 px-0.5 border-b border-dashed border-red-500">try its best to</span>
          )}
          {" "}keep the Disclosed Information confidential.
        </div>

        {/* Clause 4.2 */}
        <div className="mb-8 font-serif text-sm md:text-base leading-relaxed text-ink">
          <span className="font-mono text-xs text-brass-dim mr-2 select-none">4.2</span>
          This obligation shall survive termination of this Agreement for a period of{" "}
          {isRedlined ? (
            <>
              <span 
                className="line-through decoration-wax decoration-[1.5px] text-zinc-400 cursor-pointer transition-colors hover:bg-wax/5 px-0.5"
                onMouseEnter={() => setActiveNote('survival')}
                onMouseLeave={() => setActiveNote('welcome')}
              >
                six (6) months
              </span>{" "}
              <span 
                className="bg-emerald-50 text-emerald-800 border-b-2 border-emerald-600 px-1 cursor-pointer font-medium transition-colors hover:bg-emerald-100"
                onMouseEnter={() => setActiveNote('survival')}
                onMouseLeave={() => setActiveNote('welcome')}
              >
                three (3) years
              </span>
            </>
          ) : (
            <span className="bg-red-50 text-red-900 px-0.5 border-b border-dashed border-red-500">six (6) months</span>
          )}
          {" "}from the date of disclosure.
        </div>

        {/* Footer */}
        <div className="border-t border-dashed border-ink/20 pt-4 flex justify-between items-center mt-6">
          <span className="font-mono text-[9px] tracking-wider text-ink-soft uppercase">
            REDLINE BY: SHASHANK S.
          </span>
          <div className="w-24 h-px bg-ink"></div>
        </div>
      </div>

      {/* Margin note/Word Comment Box */}
      <div className="mt-6 lg:absolute lg:top-24 lg:-right-36 lg:w-44 lg:mt-0 bg-[#FFF8E8] border border-brass shadow-sticky-note p-3.5 rounded-sm font-mono text-[11px] leading-relaxed text-ink-soft transform lg:rotate-[2deg] transition-all duration-300">
        <div className="font-semibold text-wax mb-1 uppercase tracking-wider text-[9px]">
          {notes[activeNote].title}
        </div>
        <p>{notes[activeNote].text}</p>
        <div className="mt-2 text-[9px] text-brass-dim text-right font-semibold">
          — REVIEWER COMMENT
        </div>
      </div>
    </div>
  );
}
