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
        "font-color": "var(--font-color)",
        "border-color": "var(--border-color)",
        "primary-color": "var(--primary-color)",
        "subtitle-color": "var(--subtitle-color)",
        "background-color": "var(--background-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      tossFace: "var(--font-toss-face)",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
