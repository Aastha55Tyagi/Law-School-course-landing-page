/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F3',
        'paper-dim': '#F1EDE3',
        ink: '#1C2A24',
        'ink-soft': '#3D4F45',
        wax: '#8B2E1F',
        'wax-bright': '#A8392A',
        brass: '#C9A668',
        'brass-dim': '#B7995E',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 1px 2px rgba(28,42,36,0.04), 0 24px 48px -24px rgba(28,42,36,0.22)',
        'sticky-note': '2px 4px 10px rgba(28,42,36,0.12)',
      }
    },
  },
  plugins: [],
}
