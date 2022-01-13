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
      '3xl-dark': '20px 20px 60px #202020,-20px -20px 60px #2c2c2c ',
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
