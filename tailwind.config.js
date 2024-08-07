/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
    },
    extend: {
      colors: {
        netflix: {
          red: "#E50914",
          white: "#FFFFFF",
          black: "#141414",
          darkgray: "#2A2A2A",
          lightgray: "#B3B3B3",
        },
      },
    },
  },
  plugins: [],
};
