/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xlMin": "1536px",
      // => @media (min-width: 1536px) { ... }

      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xlMin: "1280px",
      xl: { max: "1280px" },

      lgMin: "1024px",
      lg: { max: "1024px" },

      lgMidMin: "950px",
      lgMid: { max: "950px" },

      mdMin: "900px",
      md: { max: "900px" },

      mdMidMin: "750px",
      mdMid: { max: "750px" },

      smMin: "640px",
      sm: { max: "640px" },

      mobMidMin: "520px",
      mobMid: { max: "520px" },

      xsmMin: "480px",
      xsm: { max: "480px" },

      mobMin: "420px",
      mob: { max: "420px" },

      xmobMin: "360px",
      xmob: { max: "360px" },
    },
    extend: {
      colors: {
        primary: "#0f172a", // dark mode background (slate-900)
        secondary: "#c084fc", // dark mode accent (purple-400)
        background: "#f4f4f4", // dark mode content background
        lightPrimary: "#f8fafc", // light mode background (slate-50)
        lightSecondary: "#7e22ce", // light mode accent (indigo-100)
        lightBackground: "#f1f5f9", // light mode content background (slate-100)
        lightText: "#1e293b", // readable text (slate-800)
        accentText: "#4f46e5", // strong purple text (indigo-600)
      },
      width: {
        68: "17rem",
        88: "22rem",
        102: "26rem",
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
        164: "44rem",
        176: "48rem",
        180: "52rem",
      },
      maxWidth: {
        68: "17rem",
        88: "22rem",
        102: "26rem",
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
        164: "44rem",
        176: "48rem",
        180: "52rem",
      },
      minWidth: {
        68: "17rem",
        88: "22rem",
        102: "26rem",
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
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "spin-slow-hover": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
