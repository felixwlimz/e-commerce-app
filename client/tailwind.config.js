/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns : {
        'cart': '3fr 1.25fr'
      }
    },
    fontFamily :{
      'poppins': ['Poppins', 'sans - serif']
    }
  },
  plugins: [],
}
