/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mintGreen: "#A1D1B1",
        shadowGreen: "#1C2529",
      },
      backgroundImage: {
        'slate-gradient': 'linear-gradient(to top, #0f172a, transparent)',
      },
    }
  },
  plugins: []
}