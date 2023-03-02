/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D1D1D',
        primary: '#D92222'
      },
      gridTemplateColumns: {
        'app': '14rem 1fr'
      }
    },
  },
  plugins: [],
}
