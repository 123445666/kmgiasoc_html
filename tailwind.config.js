const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enable: true,
    content: ["./src/**/**/*.html", "./src/**/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        grey: colors.grey,
        "sky": colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
