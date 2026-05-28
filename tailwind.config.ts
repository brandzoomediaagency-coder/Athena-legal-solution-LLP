import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#061A2B',
          50: '#E8EEF4',
          900: '#061A2B',
        },
        gold: {
          DEFAULT: '#C8A21A',
          light: '#E5C158',
          dark: '#9A7C12',
        },
        slate: {
          soft: '#E8EEF4',
        },
        charcoal: '#101820',
        emerald: {
          accent: '#0C7C59',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        premium: '0 20px 60px -20px rgba(6, 26, 43, 0.35)',
        gold: '0 10px 30px -10px rgba(200, 162, 26, 0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A21A 0%, #E5C158 100%)',
        'navy-gradient': 'linear-gradient(135deg, #061A2B 0%, #0a2a44 100%)',
        'hero-pattern':
          'radial-gradient(ellipse at top right, rgba(200,162,26,0.18), transparent 55%), radial-gradient(ellipse at bottom left, rgba(12,124,89,0.15), transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
