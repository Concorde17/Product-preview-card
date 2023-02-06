/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*{.js,.jsx,.ts,.tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creams': '#FBCC9D',
        'darkCyan': '#3C8067',
        'vDarkBlue': '#1C232B',
        'dGreyishBlue': '#6C7289',
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
        fraunces: ['"Fraunces"']
      },
    },
    screens: {
      'wide': '375px',
      // => @media (min-width: 375px) { ... }
    },
  },
  plugins: [],
}
