import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050814',
          secondary: '#0a0f1e',
          card: 'rgba(255,255,255,0.04)',
        },
        accent: {
          primary: '#6C63FF',
          secondary: '#F5A623',
          glow: '#4F46E5',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#475569',
        },
        border: {
          subtle: 'rgba(255,255,255,0.07)',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 99, 255, 0.3)',
        card: '0 20px 60px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
      backdropBlur: {
        xs: '4px',
        'glass': '16px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #050814 0%, #0f0c29 50%, #302b63 100%)',
        'gradient-cta': 'linear-gradient(135deg, #6C63FF, #F5A623)',
        'mesh': 'radial-gradient(circle at 30% 30%, rgba(108,99,255,0.24) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(245,166,35,0.18) 0%, transparent 60%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
      },
      fontFamily: {
        display: ['"Clash Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Syne"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
