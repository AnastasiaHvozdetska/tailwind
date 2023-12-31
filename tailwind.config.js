/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "InterRegular",
        interBold: "InterBold",
        gilroy: "GilroyMedium",
        gilroyBold: "GilroyBold",
        poppins: "PoppinsMedium",
        gilroyMedium: "GilroyMedium",
      },
      fontSize: {
        "5xl": "85px",
        "18px": ["18px", "22px"],
        lg: ["20px", "30px"],
        lg2: ["20px", "25px"],
        lg3: ["22px", "normal"],
        h3: ["34px", "normal"],
      },
      lineHeight: {
        "22px": "22px",
        "30px": "30px",
      },
      colors: {
        purple: "#AE67FA",
        orange: "#F49867",
        main: "#3E4581",
        dark: "#293134",
        linesColor: "rgba(185, 172, 209, 0.5)",
        selago: "#EADFFB",
        titanWhite: "#F8F8FF",
        purpleHeart: "#7D30DF",
        lightTitanWhite: "#ECEEFF",
        viola: "#CD7EBA",
      },
      spacing: {
        "115px": "115px",
        "190px": "190px",
        "30px": "30px",
        "75px": "75px",
        "60px": "60px",
        "22px": "22px",
        "100px": "100px",
      },
      maxWidth: {
        700: "700px",
      },
      borderRadius: {
        10: "10px",
      },
      animation: {
        rainbow: "rainbow 2s ease-in-out infinite",
      },
      boxShadow: {
        "3xl": "0px 56px 63px 0px rgba(0, 0, 0, 0.22)",
      },
      gridTemplateColumns: {
        282: "repeat(3, 282px)",
        475: "repeat(2, 475px)",
      },
      backgroundImage: {
        "shape-pattern-right": "url('/assets/icons/shape-right.svg')",
        "shape-pattern-left": "url('/assets/icons/shape-left.svg')",
      },
      borderRadius: {
        10: "10px",
      },
      skew: {
        20: "20deg",
      },
      rotate: {
        20: "20deg",
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
