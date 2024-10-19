/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xl: { max: "1280px" },

      lg: { max: "1024px" },

      md: { max: "900px" },

      sm: { max: "640px" },

      xsm: { max: "480px" },

      mob: { max: "420px" },

      xmob: { max: "360px" },
    },
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#61dbfb",
      },
      width: {
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
        164: "44rem",
        176: "48rem",
        180: "52rem",
      },
      margin: {
        13: "52px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
