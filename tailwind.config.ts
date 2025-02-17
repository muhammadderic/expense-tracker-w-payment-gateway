import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#16404D",
        secondary: {
          DEFAULT: "#DDA853",
          dark: "#B88128",
        },
        tarsier: "#FBF5DD",
      },
    },
  },
  plugins: [],
} satisfies Config;
