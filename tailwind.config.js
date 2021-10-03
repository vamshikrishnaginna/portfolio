const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      dracula: {
        cyan: "#8be9fd",
        orange: "#ffb86c",
        pink: "#ff79c6",
        purple: "#bd93f9",
        red: "#ff5555",
        yellow: "#f1fa8c",
        nosferatu: "#282a36",
        green: { main: "#50fa7b", dark: "rgba(80,250,123,.8)" },
        dark: "#44475a",
        light: "#f8f8f2",
        darker: "#171923",
        blue: "#6272a4",
        background: "rgba(0,0,0,0.93)",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
