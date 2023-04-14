/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindforms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#247D7D",
        secondary: "red",
        alternate: "gray",
      },
    },
  },
  plugins: [tailwindforms],
};
