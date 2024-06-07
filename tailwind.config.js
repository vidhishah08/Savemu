/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlack:"#171620",
        customPurple:"#6C69EE",
        customGray:"#2e2d36",
      }
    },
  },
  plugins: [],
}

