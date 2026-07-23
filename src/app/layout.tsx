import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Burger Xpress — Flavor Fusion | Dhaka's Favourite Burger",
    template: "%s | Burger Xpress",
  },
  description:
    "100% Halal burgers, rice bowls, chowmein and more across 7 branches in Dhaka. Dine in or order on Foodpanda and Munchies. Rated 4.8★ by 2,000+ happy customers.",
  keywords: [
    "burger Dhaka",
    "halal burger Bangladesh",
    "best burger Dhanmondi",
    "Burger Xpress",
    "halal fast food Dhaka",
    "order burger online Dhaka",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Burger Xpress",
    title: "Burger Xpress — Flavor Fusion",
    description: "100% Halal burgers across 7 branches in Dhaka. Rated 4.8★.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
