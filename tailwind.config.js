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
      '3xl': '3px 3px 3px #cbced1, -3px -3px 3px #fafafa',
      '3xl-dark': '3px 3px 3px #202020,-3px -3px 3px #2c2c2c ',
      'btn-shadow': '3px 3px 3px #cbced1, -3px -3px 3px #fafafa',
      'btn-shadow-5xl': '3px 3px 3px #cbced1, -3px -3px 3px #fafafa',
      '4xl': '3px 3px 3px #cbced1, -3px -3px 3px #fafafa',
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
