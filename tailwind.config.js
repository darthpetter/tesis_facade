/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        guayaquil: {
          50: '#F0F6FB',
          100: '#CDE0F2',
          200: '#ADCCEA',
          300: '#90BAE2',
          400: '#75AADB',
          500: '#5A9AD4',
          600: '#428BCE',
          700: '#327DC2',
          800: '#2D70AF',
          900: '#245481',
        },
      }
    },
  },
  plugins: [],
}
