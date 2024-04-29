/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   softGreen: '#D7E4C0', #E9D5DA
      //   paleGreen: '#C6DCBA',#827397
      //   lightOlive: '#BBC3A4',#4D4C7D
      //   warmGray: '#B3A398' #363062
      // },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

