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
      },
      backgroundColor: {
        "bluey": "#4567F7",
        "neutrall": "#F9F9F9"
      },
      textColor:{
        "txtblue": "#4567F7",
      },
     

    },
  },
  plugins: [],
 
}