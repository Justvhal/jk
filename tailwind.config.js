/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {accent: '#451184',},
      fontSize: {clamp: "clamp(1rem, 3vw, 1.875rem)",}
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
