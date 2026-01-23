/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F4EEE4',
        clay: '#C4A187',
        mist: '#9AAAAD',
        linen: '#EADFCE',
        dune: '#D1BBA7',
        lagoon: '#55818E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
