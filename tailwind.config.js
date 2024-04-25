/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontSize:{
      "small": "0.9375em",
    },
    extend: {
      colors: {
        "Very-Light-Grayish-Blue": "hsl(240, 78%, 98%)",
        "Light-Grayish-Blue": "hsl(234, 14%, 74%)",
        "Grayish-Blue": "hsl(233, 13%, 49%)",
        "Dark-Grayish": "Blue: hsl(232, 13%, 33%)",
        White: "#FFFFFF",
      },
      backgroundImage: {
        Primary:
          "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%) )",
      },
    

      fontFamily: {
        Montserrat: ["Montserrat"],
      },

      maxWidth: {
        "custom-xl": "1440px",
        "custom-xs": "330px",
      },

      screens: {
        phone: "320px",
        "phone-xs": "375px",
      },
    },
  },
  plugins: [],
};
