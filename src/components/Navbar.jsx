import React from 'react';

export default function Navbar({ onEnrollClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/15 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif font-bold text-lg tracking-tight text-ink flex items-center gap-3 hover:opacity-90">
          <span className="w-2.5 h-2.5 rounded-full bg-wax shadow-[0_0_8px_rgba(139,46,31,0.4)] animate-pulse"></span>
          LAWCTOPUS LAW SCHOOL
        </a>
        
        <div className="flex items-center gap-6">
          <a href="#schedule" className="font-mono text-xs tracking-wider text-ink-soft hover:text-wax uppercase hidden md:inline-block transition-colors">
            Schedule
          </a>
          <a href="#curriculum" className="font-mono text-xs tracking-wider text-ink-soft hover:text-wax uppercase hidden md:inline-block transition-colors">
            Recitals
          </a>
          <a href="#faculty" className="font-mono text-xs tracking-wider text-ink-soft hover:text-wax uppercase hidden md:inline-block transition-colors">
            Faculty
          </a>
          <button 
            onClick={onEnrollClick}
            className="font-mono text-[11px] font-medium tracking-widest bg-ink text-paper px-5 py-2.5 rounded-sm uppercase transition-all duration-300 hover:bg-wax hover:shadow-[0_4px_12px_rgba(139,46,31,0.2)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </nav>
  );
}
