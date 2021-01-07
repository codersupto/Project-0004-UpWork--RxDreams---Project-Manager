module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
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
