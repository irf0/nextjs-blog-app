/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      "carter-one": ["Carter One", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        sm: { min: "300px", max: "767px" }, //small mobiles
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" }, //mobiles
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" }, //tablets
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1600px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
    },
  },
  plugins: [],
};
