/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,md,mdx,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#f8f9fa",
        swhite: "#f0f0f0",
        midnight: "#0a0910",
        vp: "#01ff8d",
        bp: "#014576",
        bd: "#022b3f",
      },
      fontFamily: {
        body: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        list: "repeat(auto-fill, minmax(400px, max-content))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
