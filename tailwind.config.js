/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarycontainer: "#ECE6F0",
        primary: "#65558F",
        lightPrimary: "#B89DFF",
        OrangePrimary: "#FF971D",
        available: "#168F04",
        rented: "#900205",

      },
      fontFamily: {
        cherry: ["Cherry Cream Soda"],
      },
    },
  },

  plugins: [],
};
