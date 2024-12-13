import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { arabic: ['"KFGQPC Uthmanic Script HAFS Regular"', 'sans-serif'], },
      lineHeight: { 'extra-loose': '2.5', '12': '3rem', },
      letterSpacing: { wider: '.05em', widest: '.1em', },
    },
  },
  plugins: [],
} satisfies Config;
