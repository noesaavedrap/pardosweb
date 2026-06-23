import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#060606',
        foreground: '#FFFFFF',
        gold: {
          DEFAULT: '#D6A758',
          50: '#FDF8EF',
          100: '#FAF1DE',
          200: '#F5DFBD',
          300: '#EFCC9B',
          400: '#E5B67A',
          500: '#D6A758',
          600: '#C4953E',
          700: '#A67D2F',
          800: '#856626',
          900: '#634D1E',
        },
        accent: {
          DEFAULT: '#A8D96B',
          50: '#F5FAEE',
          100: '#EBF5DD',
          200: '#D7EBBB',
          300: '#C3E199',
          400: '#AFD777',
          500: '#A8D96B',
          600: '#8BC24E',
          700: '#6E9D3B',
          800: '#51782B',
          900: '#35531B',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          light: 'rgba(255,255,255,0.12)',
          dark: 'rgba(255,255,255,0.04)',
        },
        card: {
          DEFAULT: 'rgba(255,255,255,0.05)',
          foreground: '#FFFFFF',
        },
        border: 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-satoshi)', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 15vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D6A758 0%, #F5DFBD 50%, #D6A758 100%)',
        'gradient-premium': 'linear-gradient(180deg, rgba(214,167,88,0.1) 0%, transparent 100%)',
        'gradient-dark': 'linear-gradient(180deg, #060606 0%, #0a0a0a 50%, #060606 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(214,167,88,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
        'glass-lg': '0 16px 64px rgba(0,0,0,0.6)',
        'gold': '0 0 40px rgba(214,167,88,0.3)',
        'gold-lg': '0 0 80px rgba(214,167,88,0.4)',
        'inner-glow': 'inset 0 0 40px rgba(214,167,88,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
        'elevated': '0 24px 80px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        'glass': '24px',
        'card': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      backdropBlur: {
        'glass': '20px',
        'heavy': '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'slide-left': 'slide-left 0.6s ease-out forwards',
        'slide-right': 'slide-right 0.6s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(214,167,88,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(214,167,88,0.5)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      zIndex: {
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
