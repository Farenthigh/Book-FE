/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarycontainer: "#ECE6F0",
        primary: "#65558F",
      },
      fontFamily: {
        cherry: ["Cherry Cream Soda"],
      },
    },
  },

  plugins: [],
};
