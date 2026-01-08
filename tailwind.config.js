/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        embassy: {
          green: "#00853F", // Official Senegal Green
          yellow: "#FDEF42", // Official Senegal Yellow
          red: "#E31B23",    // Official Senegal Red
          DEFAULT: "#00853F" // Keep for backward compatibility
        },
        gold: {
          50: '#fbf8ea',
          100: '#f5efcb',
          200: '#eddfa0',
          300: '#e3ca6d',
          400: '#d7b243',
          500: '#cb972b',
          600: '#ae7621',
          700: '#8c551d',
          800: '#75431e',
          900: '#63381e',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    }
  },
  plugins: []
};
