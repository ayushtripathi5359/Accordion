import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0d10',
        slate: '#111521',
        mist: '#e9edf3',
        muted: '#9aa4b2',
        accent: '#7c6bff',
        accentDeep: '#3d2b8f',
        glow: 'rgba(124, 107, 255, 0.3)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 40px 80px rgba(0, 0, 0, 0.45)',
        glow: '0 0 40px rgba(124, 107, 255, 0.35)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(124, 107, 255, 0.35), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
