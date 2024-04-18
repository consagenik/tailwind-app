/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // Make custom screen sizes and query for desktop first design
      'lg': {max: '1440px'},
      'md': {max: '1024px'},
      'sm': {max: '480px'},
    },
    container: {
      center: true,
      padding: '20px',
    },
    fontFamily: {
      'neue-regular': ['Neue Montreal Regular', 'sans-serif'],
      'neue-italic': ['Neue Montreal Italic', 'sans-serif'],
      'neue-light': ['Neue Montreal Light', 'sans-serif'],
      'neue-light-italic': ['Neue Montreal Light Italic', 'sans-serif'],
      'neue-medium': ['Neue Montreal Medium', 'sans-serif'],
      'neue-medium-italic': ['Neue Montreal Medium Italic', 'sans-serif'],
      'neue-bold': ['Neue Montreal Bold', 'sans-serif'],
      'neue-bold-italic': ['Neue Montreal Bold Italic', 'sans-serif'],
    },

    extend: {
      colors: {
        customBlack: '#181A20',
        customSecondaryBlack: '#262626',
        customGray: '#7D7D7D',
        customSecondaryGray: '#999999',
        customWhite: '#FAFAFA',
        customAccentLighter: '#F4F1E7',
        customAccentLight: '#DDD5CC',
        customAccent: '#DFD8BF',
        customAccentDark: '#B09B64',
        customAccentShine: '#E0BB68',
        customOrange: '#FE7B1E',
      }
    },
  },
  plugins: [],
}

