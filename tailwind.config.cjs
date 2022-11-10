/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-field": "url('/src/assets/claudio-testa--SO3JtE3gZo-unsplash.webp')",
      },
      fontFamily: {
        "josefin": ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};