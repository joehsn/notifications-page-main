/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // primary-colors
        "my-red": "hsl(1, 90%, 64%)",
        "my-blue": "hsl(219, 85%, 26%)",
        // secondary-colors
        vlgb: "hsl(210, 60%, 98%)",
        lgb1: "hsl(211, 68%, 94%)",
        lgb2: "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        paragraph: "16px",
      },
      boxShadow: {
        mine: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
