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
        skew: {
          "0%, 100%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(10deg)" },
        },
      },
      animation: {
        skew: "skew 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
