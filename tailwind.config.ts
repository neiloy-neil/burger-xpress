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
          red: "#C0392B",
          "red-dark": "#922B21",
          "red-light": "#E74C3C",
          orange: "#E67E22",
          cream: "#FDF6EC",
          charcoal: "#1A1A1A",
          "gray-warm": "#2C2C2C",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
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
