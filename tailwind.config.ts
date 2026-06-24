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
        steel: '#646973',
      },
      boxShadow: {
        glow: '0 0 45px rgba(215, 226, 234, 0.18)',
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
