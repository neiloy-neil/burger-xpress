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
        brand: {
          blue: "#1B3D8F",
          "blue-dark": "#142F6E",
          orange: "#F5A020",
          "orange-dark": "#D4880A",
          red: "#C0392B",
          "red-dark": "#922B21",
          cream: "#FDF6EC",
          charcoal: "#1A1A1A",
          "gray-warm": "#2C2C2C",
        },
      },
      fontFamily: {
        display: ["'Arial Black'", "Impact", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
