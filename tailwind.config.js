/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#252525',
        'background-lighter': '#303030',
        primary: '#D92222',
        border: '#444444',
        'text-light': 'rgba(255,255,255,0.7)'
      },
      gridTemplateColumns: {
        'app': '14rem 1fr'
      }
    },
  },
  plugins: [],
}
