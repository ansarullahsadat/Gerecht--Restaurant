/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      goldenColor: "#DCCA87",
      blackColor: "#0C0C0C",
      grayColor: "#545454",
      crimsonColor: "#F5EFDB",
      greyColor: "#AAAAAA",
      whiteColor: "#FFFFFF",
      lightDark: "#0C0C0C",
    },

    extend: {
      fontFamily: {
        cormorant: "'comorant upright' , serif",
      },
      keyframes: {
        toggle: {
          "0%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      animation: {
        toggle: "toggle 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
    },
  },

  plugins: [],
}
