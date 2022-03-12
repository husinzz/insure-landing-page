module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "dark-violet": "hsl(256, 26%, 20%)",
          "grayish-blue": "hsl(216, 30%, 68%)",
        },
        neutral: {
          "very-dark-violet": "hsl(270, 9%, 17%)",
          "dark-grayish-violet": "hsl(273, 4%, 51%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        dm: ["DM Serif Display"],
        karla: ["Karla"],
      },
    },
  },
  plugins: [],
};
