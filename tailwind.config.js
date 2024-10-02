/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#B2C6B6", // blue
        c2: "#0F336E", // dark blue
        c3: "#DDE2EA", // input bg
        c4: "#0F336Ecc", // hover blue
      },
    },
  },

  plugins: [],
};
