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
        background: "#141414",
        foreground: "#F5F5F5",
        shadow: {
          DEFAULT: "#141414",
          50: "#2a2a2a",
          100: "#242424",
          200: "#1e1e1e",
          300: "#181818",
          400: "#141414",
          900: "#0d0d0d",
        },
        citrus: {
          DEFAULT: "#E4FD97",
          light: "#effec1",
          dark: "#c6e36d",
          muted: "rgba(228, 253, 151, 0.15)",
        },
        crimson: {
          DEFAULT: "#FF2A5F",
          light: "#ff5982",
          dark: "#d91648",
          muted: "rgba(255, 42, 95, 0.15)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
