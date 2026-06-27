import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="border-t border-ink/15 bg-paper py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[11px] text-ink-soft">
        <div>
          © {currentYear} LAWCTOPUS LAW SCHOOL —{' '}
          <a 
            href="mailto:courses@lawctopus.com" 
            className="text-wax font-semibold hover:underline"
          >
            courses@lawctopus.com
          </a>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <span className="uppercase tracking-wider">
            Executed in good faith
          </span>
          <span className="text-[10px] text-brass-dim font-bold">
            AS OF: {formattedDate}
          </span>
        </div>
      </div>
    </footer>
  );
}
