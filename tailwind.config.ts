import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lgold': '#f5f1e5',
        'lorange': '#ffd480',
        'lslate' : '#f2f3f0',
        'lgrey' : '#8f8e8e',
        'lbrown' : '#9f8655',
      },
    },
  },
  plugins: [],
};
export default config;
