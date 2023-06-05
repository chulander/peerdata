/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindforms from "@tailwindcss/forms";

export default {
  content: ["index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", ...defaultTheme.fontFamily.sans],
        sans: ["Avenir", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        gradient: "url(./assets/gradient-background.png)",
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
        "brand-blue": "#00A5CF",
        // primary: "#247D7D",
        secondary: "#247D7D",
        alternate: "gray",
      },
    },
  },
  // darkMode: "class",
  plugins: [tailwindforms],
};
