const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {

      // 'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'smx': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      ...defaultTheme.screens,
    },
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    boxShadow: {
      '3xl': '13px 13px 20px #cbced1, -13px -13px 20px #fff',
      '3xl-dark': '13px 13px 20px #202020,-13px -13px 20px #2c2c2c ',
      'btn-shadow': '5px 5px 10px #202020,-5px -5px 10px #2c2c2c',
      'btn-shadow-5xl': '5px 5px 10px #1c1c1c,-5px -5px 10px #303030',
      '4xl': '12px 12px 25px #202020,-12px -12px 25px #2c2c2c',
    },
    letterSpacing: {
      max: '3px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
