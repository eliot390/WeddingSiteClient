/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'serif']
      },
      colors: {
        'blood-red': '#8c0707',
        'dark-red': '#660404',
        'gold': '#a89668'
      }
    },
  },
  plugins: [],
}

