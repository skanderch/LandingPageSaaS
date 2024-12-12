/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          50: '#e4f0fb',
          100: '#c9e1f7',
          200: '#91c4ee',
          300: '#5aa8e6',
          400: '#228bde',
          500: '#006ec6', // Primary dark blue
          600: '#0056a3',
          700: '#004081',
          800: '#002c5e',
          900: '#00183b',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
