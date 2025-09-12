/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2447",
        accent: "#1FA2A6",
        neutralbg: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
