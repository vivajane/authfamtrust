/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": "Lato",
        "montesarrat": "Montserrat Alternates"
      },
      backgroundColor: {
        "bluey": "#4567F7",
        "neutrall": "#F9F9F9",
        "purp" : "#E2DDFF"
      },
      textColor:{
        "txtblue": "#4567F7",
      },
      backgroundImage:{
        "bg": "url('/herobg.png')"
      }
     

    },
  },
  plugins: [],
 
}