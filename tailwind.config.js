/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.ts",
    "./**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss"],
  // tailwind.config.js
  purge: [],
  darkMode: false,
};

