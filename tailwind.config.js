/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"San Francisco"',
          '"Helvetica Neue"',
          'Helvetica',
          'Ubuntu',
          'Roboto',
          'Noto',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#171717',
          700: '#262626',
        },
        fiery: {
          400: '#ff7b00',
          500: '#ff4e00',
          600: '#ea3800',
          700: '#b22200',
        }
      },
      animation: {
        'liquid-slow': 'liquid 15s ease-in-out infinite',
      },
      keyframes: {
        liquid: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.6' },
          '33%': { transform: 'scale(1.1) translate(30px, -50px)', opacity: '0.8' },
          '66%': { transform: 'scale(0.9) translate(-20px, 40px)', opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}
