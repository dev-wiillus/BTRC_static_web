const { transform } = require('typescript')

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
        "text-gray-primary": "#6C6C72",
        "button-secondary": "#2F2F37",
        "bg-primary": "#F9F9FA",
        "bg-footer": "#8A8B91",
        "avartar-empty": "#D9D9D9",
        "border-circle": "#E1E1E2",
      },
      fontFamily: {
        "hero-hangle": ['SB AggroOTF'],
        "chaney": ['CHANEY'],
        "pretendard": ['Pretendard'],
      },
      fontSize: {
        "2xs": '0.625rem',
        "3xs": '0.5rem'
      },
      keyframes: {
        fadeInFadeOut1: {
          '0%, 20%, 100%': {
            opacity: 0
          },
          '5%, 15%' :{
            opacity: 1
          },
        },
        fadeInFadeOut2: {
          '0%, 20%, 80%, 100%': {
            opacity: 0
          },
          '25%, 75%': {
            opacity: 1
          }
        },
        fadeInFadeOut3: {
          '0%, 80%, 100%': {
            opacity: 0
          },
          '85%, 95%' :{
            opacity: 1
          }
        },
        textLoop: {
          '0%': {
            transform: 'translate3d(-10%, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(-110%, 0, 0)'
          }
        }
      }
    },
    container: {
      center: true,
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EF473E",
          secondary: "#4AAA5F",
          accent: "#37CDBE",                   
          neutral: "#3D4451",                   
          "base-100": "#FFFFFF",                   
          info: "#3ABFF8",                   
          success: "#36D399",                   
          warning: "#FBBD23",                   
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
