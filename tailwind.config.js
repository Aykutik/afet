/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        danger: "#f0000",
        success: "#00ff00",
        yazi: "#000000",
        tablo: "#eeeeee",
      },
    },
  },
  plugins: [],
}