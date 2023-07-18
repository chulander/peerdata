/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindforms from "@tailwindcss/forms";

export default {
  content: ["index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        indivisible: ["indivisible", ...defaultTheme.fontFamily.sans],
        sans: ["indivisible", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        circular: "url(./assets/background/circular-background.svg)",
        square: "url(./assets/background/square-background.svg)",
        gradient: "url(./assets/gradient-background.png)",
        // "home-banner":
        //   "url(https://media.graphassets.com/F5QFqaQeRAejs31hYZc5)",
        // "home-about": "url(https://media.graphassets.com/Mn5mQJcqSmig46arfCx7)",
      },
      colors: {
        "brand-blue": "#1DC1F4",
        "brand-dark-blue": "#173654",
        "brand-green": "#13BFA2",
        "brand-light-background": "#F8F4F2",
        "brand-orange": "#FF5634",
        "brand-deep-blue": "#041C2C", // this color is made up
        // primary: "#247D7D",
        secondary: "#247D7D",
        alternate: "gray",
      },
      letterSpacing: {
        tighter: "-0.05em",
      },

      fontSize: {
        xl: ["1.8331rem", { lineHeight: "2.3331rem" }], // 22px | 28px
        "3xl": ["2.3331rem", { lineHeight: "3.1669rem" }], //  28px | 38px
        "4xl": ["2.8331rem", { lineHeight: "3rem" }], // 34px | 36px
        "5xl": ["2.8331rem", { lineHeight: "4rem" }], // 34px | 48px
        "7xl": ["5.3331rem", { lineHeight: "5.33rem" }], // 64px | 64px
        "8xl": ["7.5rem", { lineHeight: "7.92rem" }], //90px | 95px
        // xl: ["1.375rem", { lineHeight: "1.75rem" }], // 22px | 28px
        // "3xl": ["1.75rem", { lineHeight: "2.375rem" }], //  28px | 38px
        // "4xl": ["2.125rem", { lineHeight: "2.25rem" }], // 34px | 36px
        // "7xl": ["4rem", { lineHeight: "4rem" }], // 64px | 64px
        // "8xl": ["5.625rem", { lineHeight: "5.9375rem" }], //90px | 28px
      },
      lineHeight: {
        // 7 is the same as default
        7: "2.3331rem", // 28px
        8: "3rem", // 36px
        9: "3.1669rem", // 38px
        10: "4rem", // 48 px
        11: "5.3331rem", //64 px
        12: "7.9162rem", // 95px
      },
    },
  },
  // darkMode: "class",
  plugins: [tailwindforms],
};
