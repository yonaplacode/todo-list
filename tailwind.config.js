module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#39B54A',
      },
      fontFamily: {
        'montserrat': 'Montserrat, sans-serif',
        'shadows': 'Shadows Into Light, sans-serif',
        'seymourOne': 'Seymour One, cursive'
      }
    },
  },
  plugins: [],
};
