/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#121212",     // fundal principal
          light: "#1E1E1E",    // secțiuni/containers
          accent: "#FFD100",   // accent cald & vizibil
          gray: "#A0A0A0",     // text secundar
          white: "#FFFFFF",    // text principal
        }
      }
    },
  },
  plugins: [],
}
