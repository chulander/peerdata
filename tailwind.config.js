/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindforms from "@tailwindcss/forms";

export default {
  content: ["index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        indivisible: ["Indivisible", ...defaultTheme.fontFamily.sans],
        sans: ["Indivisible", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        gradient: "url(./assets/gradient-background.png)",
        "home-banner":
          "url(https://media.graphassets.com/F5QFqaQeRAejs31hYZc5)",
        "home-about": "url(https://media.graphassets.com/Mn5mQJcqSmig46arfCx7)",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        brand: {
          700: "#004E64",
          500: "#25A18E",
          300: "#7AE582",
          100: "#9FFFCB",
        },
        "brand-blue": "#1DC1F4",
        "brand-dark-blue": "#173654",
        "brand-green": "#13BFA2",
        "brand-light-background": "#F8F4F2",
        "brand-orange": "#FF5634",
        // primary: "#247D7D",
        secondary: "#247D7D",
        alternate: "gray",
      },
      letterSpacing: {
        tighter: "-0.05em",
      },
      fontSize: {
        xl: ["1.375rem", { lineHeight: "1.75rem" }], // 22px | 28px
        "3xl": ["1.75rem", { lineHeight: "2.375rem" }], //  28px | 38px
        "4xl": ["2.125rem", { lineHeight: "2.25rem" }], // 34px | 36px
        "7xl": ["4rem", { lineHeight: "4rem" }], // 64px | 64px
        "8xl": ["5.625rem", { lineHeight: "5.9375rem" }], //90px | 28px
      },
      lineHeight: {
        // 7 is the same as default
        7: "1.75rem", // 28px
        8: "2.25rem", // 36px
        9: "2.375rem", // 38px
        10: "3rem", // 48 px
        11: "4rem", //64 px
        12: "5.9375rem", // 95px
      },
    },
  },
  // darkMode: "class",
  plugins: [tailwindforms],
};
