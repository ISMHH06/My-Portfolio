import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        ink: '#0C0C0C',
        mist: '#D7E2EA',
        blue: '#3B82F6',
        violet: '#8B5CF6',
        fuchsia: '#A855F7',
        cyan: '#06B6D4',
      },
      boxShadow: {
        glow: '0 0 45px rgba(59, 130, 246, 0.28)',
        violet: '0 0 55px rgba(168, 85, 247, 0.22)',
      },
      keyframes: {
        marqueeRight: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        marqueeLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(16px, -18px, 0)' },
        },
      },
      animation: {
        marqueeRight: 'marqueeRight 35s linear infinite',
        marqueeLeft: 'marqueeLeft 35s linear infinite',
        drift: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
