import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          "0%, 100%": { translate: "0 0" },
          "50%": { translate: "0 -12px" },
        },
        "float-delayed": {
          "0%, 100%": { translate: "0 0" },
          "50%": { translate: "0 -8px" },
        },
        marquee: {
          "0%": { translate: "0 0" },
          "100%": { translate: "-50% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.92)", opacity: "0.7" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float-delayed 6.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
