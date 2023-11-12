/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#343839',
        'dark-value':"#141718",
        'light-value':'#E8ECEF'
      }
    },
  },
  plugins: [],
}