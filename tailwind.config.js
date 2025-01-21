/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Cinzel', 'serif']
      },
      colors: {
        metal: {
          900: '#1a1a1a',
          800: '#262626',
          700: '#333333',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#999999',
          200: '#a3a3a3',
          100: '#d4d4d4',
        }
      },
      backgroundImage: {
        'gradient-metal': 'linear-gradient(145deg, #262626 0%, #1a1a1a 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  plugins: [],
}