/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'Inter', 'Roboto', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05070f',
          900: '#070b17',
          800: '#0b1122',
          700: '#131c36',
        },
        blurple: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#5865f2',
          600: '#4752c4',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.08), 0 20px 60px -15px rgba(88,101,242,.45)',
        card: '0 18px 60px -18px rgba(0,0,0,.7)',
        pop: '0 12px 40px -8px rgba(88,101,242,.55)',
      },
      keyframes: {
        'float-y': { '0%,100%': { transform: 'translateY(-8px)' }, '50%': { transform: 'translateY(8px)' } },
        'float-y-soft': { '0%,100%': { transform: 'translateY(-4px)' }, '50%': { transform: 'translateY(4px)' } },
        'aurora': {
          '0%': { transform: 'translate(0,0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.08) rotate(8deg)' },
          '66%': { transform: 'translate(-30px,25px) scale(0.95) rotate(-6deg)' },
          '100%': { transform: 'translate(0,0) scale(1) rotate(0deg)' },
        },
        'gradient-pan': { '0%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' }, '100%': { 'background-position': '0% 50%' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'pulse-ring': { '0%': { transform: 'scale(.95)', opacity: '.8' }, '50%': { transform: 'scale(1.05)', opacity: '.35' }, '100%': { transform: 'scale(.95)', opacity: '.8' } },
        'shine': { '0%': { transform: 'translateX(-120%) skewX(-18deg)' }, '100%': { transform: 'translateX(220%) skewX(-18deg)' } },
        'marquee': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'pop-in': { '0%': { opacity: '0', transform: 'scale(.92) translateY(14px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
      },
      animation: {
        'float-y': 'float-y 7s ease-in-out infinite',
        'float-y-soft': 'float-y-soft 5s ease-in-out infinite',
        aurora: 'aurora 16s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'pulse-ring': 'pulse-ring 3.2s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pop-in': 'pop-in .7s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}