/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        charm: ["Charm", "cursive"],
        syne: ["Syne", "cursive"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "2px black",
          "text-stroke": "2px black",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "2px white",
          "text-stroke": "2px white",
        },
        ".text-stroke-3": {
          "-webkit-text-stroke": "1px black",
          "text-stroke": "1px black",
        },
        ".text-stroke-4": {
          "-webkit-text-stroke": "4px black",
          "text-stroke": "4px black",
        },
      });
    },
  ],
};
