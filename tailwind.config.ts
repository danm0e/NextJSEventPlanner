import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          "0%": {
            transform: "scale(0%)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.5s cubic-bezier(0.42, 0, 0.37, 1.66) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
