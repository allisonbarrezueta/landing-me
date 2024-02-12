import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F4E3E3",
          200: "#E7C7C7",
          300: "#DAAFAF",
          400: "#B6718D",
          500: "#A15373",
          600: "#8F4967",
          700: "#5F3143",
          800: "#47252F",
          900: "#2F191B",
        },
        lightBlue: {
          500: "#0ea5e9",
        },
        blueGray: {
          100: "#f1f5f9",
        },
        complimentary: "#53A181",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
