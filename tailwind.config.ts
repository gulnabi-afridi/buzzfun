import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue: {
          1: "#004BFE",
        },
        yellow: {
          1: "#FEF652",
        },
        black: {
          1: "#000000",
          2: "#373737",
          3: "#1D252C",
          4: "#0E161C",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
