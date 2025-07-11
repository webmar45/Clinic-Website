/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Scan all JSX/TSX/HTML files inside src
    "./pages/**/*.{js,ts,jsx,tsx}",    // If using Next.js
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
