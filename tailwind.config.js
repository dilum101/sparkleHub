module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sparkleBlue: "#00b5be",
        sparkleNavy: "#1b3a6b",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        heading: ['"Poppins"', "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
