/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // myshadow: '0 0px 0px 20px rgba(0 0 255 / 50%)',
      },
    },
  },
  plugins: [],
}
