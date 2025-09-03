/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        shadowedGreen: '#1C2529',
        mintGreen: '#A1D1B1',
        lavenderMist: '#C8BFE7',
      }
    },
  },
  plugins: [],
}
