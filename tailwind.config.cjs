/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-field": "url('/src/assets/claudio-web.webp')",
      },
      fontFamily: {
        "josefin": ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};