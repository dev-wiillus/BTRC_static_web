/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF473E",
        secondary: "#4AAA5F",
        "text-primary": "#07070C",
        "text-secondary": "#8A8B91",
        "text-light-primary": "#FFFFFF",
        "text-light-secondary": "#F9F9FA",
        "text-green-secondary": "#4AAA5F",
        "button-secondary": "#2F2F37",
        "bg-primary": "#F9F9FA",
        "bg-footer": "#8A8B91",
      },
      fontFamily: {
        "hero-hangle": ['SB AggroOTF'],
        "chaney": ['CHANEY'],
        "pretendard": ['Pretendard'],
        "lato": ['Lato'],
      },
      fontSize: {
        "2xs": '0.625rem',
        "3xs": '0.5rem'
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [require("daisyui")],
}
