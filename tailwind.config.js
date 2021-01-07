module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px", //1366px
      "2xl": "1536px",
    },
    extend: {
      colors: {
        body: "#0D0D0D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
