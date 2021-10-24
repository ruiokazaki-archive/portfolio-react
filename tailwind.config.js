// const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'monospace', 'sans-serif'],
    },
    colors: {
      black1: '#110e17',
      black2: '#14121c',
      black3: '#1a1526',
      white1: '#f2f2f2',
      pink1: '#f858f1',
      gray1: '#988e9f',
      red1: '#ff6480',
      green1: '#0bffd4',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
