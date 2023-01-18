/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mgen: '#6aa517',
    },
    extend: {
      opacity: {
        12: '.12,',
      },
    },
  },
  plugins: [],
};
