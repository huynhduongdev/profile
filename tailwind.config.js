/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'SF Pro Text', 'Segoe UI', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Manrope', 'SF Pro Display', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 30px 70px rgba(1, 7, 30, 0.45)',
        glow: '0 0 70px rgba(126, 193, 255, 0.28)',
      },
      borderRadius: {
        premium: '30px',
      },
    },
  },
  plugins: [],
}
