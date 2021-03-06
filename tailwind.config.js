const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.emerald,
      gray: colors.coolGray,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



// module.exports = {
//   mode: 'jit',
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
