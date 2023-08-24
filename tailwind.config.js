/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "InterRegular",
        interBold: "InterBold",
        gilroy: "GilroyMedium",
        poppins: "PoppinsMedium",
      },
      fontSize: {
        "5xl": "85px",
        lg: ["20px", "30px"],
        lg2: ["20px", "25px"],
      },
      colors: {
        purple: "#AE67FA",
        orange: "#F49867",
        main: "#3E4581",
        dark: "#293134",
        linesColor: "rgba(185, 172, 209, 0.5)",
      },
      spacing: {
        "115px": "115px",
        "190px": "190px",
        "30px": "30px",
      },
      animation: {
        rainbow: "rainbow 2s ease-in-out infinite",
      },
      boxShadow: {
        "3xl": "0px 56px 63px 0px rgba(0, 0, 0, 0.22)",
      },

      keyframes: {
        rainbow: {
          "0%": { "background-position": "left" },
          "50%": { "background-position": "right" },
          "100%": { "background-position": "left" },
        },
      },
    },
  },
  plugins: [],
}
