/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#eb7d2c",
          dark: "#2a1812",
          accent: "#1f3e5a",
          soft: "#fff6ef",
          gold: "#c9a227",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
