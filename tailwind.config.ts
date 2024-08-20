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
      screens: {
        xs: '325px',
        sm: '480px',
        csm: '540px',
        md: '768px',
        cmd: '850px',
        lg: '976px',
        clg: '1080px',
        cxl:'1200px',
        xl: '1280px',
        '2xl':'1400px',
        '3xl':'1600px'
      },
      colors: {
        blue: {
          1: "#004BFE",
          2:'#317C85',
          3:'#336FFE',
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
