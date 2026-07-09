/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep steel-navy — primary dark surfaces
        ink: '#0B0F17',
        'ink-panel': '#141B27',
        'ink-raised': '#1B2432',

        // Warm off-white "spec sheet" canvas
        paper: '#FAF8F2',
        'paper-dim': '#F1ECE0',

        // Steel blue-gray neutral scale
        steel: {
          50: '#F4F6F8',
          100: '#E6E9ED',
          200: '#CDD3DC',
          300: '#A8B1BF',
          400: '#7C889B',
          500: '#5A6A7E',
          600: '#48566A',
          700: '#37424F',
          800: '#232A34',
          900: '#141920',
        },

        // Signal red-orange — brand action + inspection-flag accent
        signal: {
          50: '#FDEEE8',
          100: '#FBDCCF',
          200: '#F4B7A0',
          300: '#E88A66',
          400: '#DD5330',
          500: '#D3401F',
          600: '#B23A1E',
          700: '#A5310F',
          800: '#7E260C',
        },

        // Calibration brass — sparing accent
        brass: {
          400: '#DCB268',
          500: '#C99A3E',
          600: '#AD8231',
        },

        // Positive/pass state (advantages, success)
        emerald: {
          50: '#EAFBF3',
          400: '#2FC088',
          500: '#0EA976',
          600: '#0B8F63',
        },

        blueprint: '#C9C2B3',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(250,248,242,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(250,248,242,0.08) 1px, transparent 1px)',
        'grid-lines-dim':
          'linear-gradient(rgba(11,15,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,15,23,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '32px 32px',
        'grid-lg': '64px 64px',
      },
      letterSpacing: {
        wide2: '.12em',
        widest2: '.28em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,15,23,0.04), 0 8px 24px -8px rgba(11,15,23,0.10)',
        elevated: '0 4px 16px rgba(11,15,23,0.06), 0 24px 48px -16px rgba(11,15,23,0.20)',
        'glow-signal': '0 0 0 1px rgba(211,64,31,0.15), 0 12px 32px -8px rgba(211,64,31,0.35)',
        'inner-line': 'inset 0 1px 0 0 rgba(250,248,242,0.06)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.85 },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(24px, -18px)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-18px, 22px)' },
        },
      },
      animation: {
        scan: 'scan 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4.5s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift-slow 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
