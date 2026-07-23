import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Burger Xpress — Flavor Fusion",
    short_name: "Burger Xpress",
    description:
      "100% Halal burgers, rice bowls & more across 7 branches in Dhaka. Rated 4.8★.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#1B3D8F",
    orientation: "portrait-primary",
    categories: ["food", "restaurants"],
    lang: "en",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    shortcuts: [
      {
        name: "View Menu",
        url: "/menu",
        description: "Browse the full Burger Xpress menu",
      },
      {
        name: "Order Online",
        url: "/order",
        description: "Order via Foodpanda or Munchies",
      },
      {
        name: "Find a Branch",
        url: "/locations",
        description: "Find your nearest Burger Xpress",
      },
    ],
  };
}
