/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "430px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      listStyleImage: {
        checkmark: "url('./assets/images/checkMark.png')",
      },
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          DEFAULT: "#2962ad",
          secondary: "18abbc",
          tertiary: "#90c6cd",
          quaternary: "#ffd700",
          form: "#115173",
        },
        grey: "e8f0f1",
        darkDarkBlue: "#022c43",
        darkLightBlue: "#b3d4fc",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        tags: ["La Belle Aurore", "cursive"],
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 78, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 73, 81, 0.08)",
        comic: "5px 5px 0px rgba(0, 0, 0, 0.5)",
        comic2: "5px 5px 0px rgba(41, 98, 173, 1)",
        comic3: "5px 5px 0px rgba(203 213 225, 1)",
        cube1: "0 0 20px 0px lightBlue",
        cube2: "0 0 20px 0px lightYellow",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        spincube: {
          "0%, 100%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
          "16%": { transform: "rotateY(-90deg)" },
          "33%": { transform: "rotateY(-90deg) rotateZ(90deg)" },
          "50%": { transform: "rotateY(-180deg) rotateZ(90deg)" },
          "66%": { transform: "rotateY(-270deg) rotateZ(90deg)" },
          "83%": { transform: "rotateX(90deg)" },
        },
      },
      animation: {
        bounceIn: "bounceIn 1s",
        pulse: "pulse 1s",
        spincube: "spincube 12s ease-in-out infinite",
      },
      transformOrigin: {
        custom: "10rem 10rem 0",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
