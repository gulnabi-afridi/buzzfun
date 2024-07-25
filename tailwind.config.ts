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
        courier: ["Courier Prime", "sans-serif"],

      },
      colors: {
        blue: {
          1: "#004BFE",
          2:'#317C85'
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
        white:{
          1:'#ffffff',
          2:'#D1DBE4'
        },
        orange:{
          1:'#EF7216'
        },
        purple:{
          1:'#4F40FF'
        },
        green:{
          1:'#2DB363'
        },
        red:{
          1:'#EA0000'
        }
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
