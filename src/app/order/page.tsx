import type { Metadata } from "next";
import { LOCATIONS } from "@/data/locations";

export const metadata: Metadata = {
  title: "Order Online",
  description:
    "Order Burger Xpress online via Foodpanda or Munchies. Available across Dhanmondi, Uttara, Banani, and Mirpur branches.",
};

const PLATFORMS = [
  {
    name: "Foodpanda",
    emoji: "🐼",
    color: "#D70F64",
    bgColor: "bg-[#D70F64]",
    borderColor: "border-[#D70F64]/40",
    textColor: "text-[#E8449A]",
    bgLight: "bg-[#D70F64]/10",
    url: "https://www.foodpanda.com.bd",
    branches: ["dhanmondi", "uttara", "banani", "mirpur", "baily-road"],
    description: "Order on Foodpanda for fast delivery to your door.",
  },
  {
    name: "Munchies",
    emoji: "🍔",
    color: "#FF6B35",
    bgColor: "bg-[#FF6B35]",
    borderColor: "border-[#FF6B35]/40",
    textColor: "text-[#FF6B35]",
    bgLight: "bg-[#FF6B35]/10",
    url: "https://www.munchies.com.bd",
    branches: ["banani"],
    description: "Available via Munchies at our Banani branch.",
  },
];

export default function OrderPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-[#111] border-b border-white/10 py-12 px-4 text-center">
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
          Online Ordering
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
          Order Online
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Get Burger Xpress delivered to your door through your favourite platform.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {PLATFORMS.map((platform) => {
            const serviced = LOCATIONS.filter((l) =>
              platform.branches.includes(l.id)
            );
            return (
              <div
                key={platform.name}
                className={`border ${platform.borderColor} ${platform.bgLight} rounded-2xl p-8 flex flex-col gap-5`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{platform.emoji}</span>
                  <div>
                    <p className="text-white font-bold text-2xl">{platform.name}</p>
                    <p className={`text-sm ${platform.textColor}`}>{platform.description}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    Available branches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {serviced.map((loc) => (
                      <span
                        key={loc.id}
                        className={`text-xs border ${platform.borderColor} ${platform.textColor} px-2.5 py-1 rounded-full`}
                      >
                        {loc.area}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.bgColor} hover:opacity-90 text-white font-bold py-3 rounded-xl text-center transition-opacity text-sm`}
                >
                  Order on {platform.name} →
                </a>
              </div>
            );
          })}
        </div>

        {/* Branch-by-branch breakdown */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5">Order by Branch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <p className="text-white font-semibold mb-1">{loc.name}</p>
                <p className="text-gray-500 text-xs mb-3">{loc.address}</p>
                <div className="flex flex-wrap gap-2">
                  {loc.foodpandaUrl && (
                    <a
                      href={loc.foodpandaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-[#D70F64]/15 text-[#E8449A] border border-[#D70F64]/30 hover:bg-[#D70F64]/25 px-3 py-1.5 rounded-full transition-colors"
                    >
                      🐼 Foodpanda
                    </a>
                  )}
                  {loc.munchiesUrl && (
                    <a
                      href={loc.munchiesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-orange-900/30 text-orange-400 border border-orange-800/50 hover:bg-orange-900/50 px-3 py-1.5 rounded-full transition-colors"
                    >
                      🍔 Munchies
                    </a>
                  )}
                  {!loc.foodpandaUrl && !loc.munchiesUrl && (
                    <span className="text-xs text-gray-600 italic">Dine-in only</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dine-in CTA */}
        <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-4xl">🍽️</div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white font-bold text-xl mb-1">Prefer to dine in?</p>
            <p className="text-gray-400 text-sm">
              Walk in at any branch or reserve your table for groups via WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/locations"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors border border-white/20"
            >
              Find a Branch
            </a>
            <a
              href="https://wa.me/8801XXXXXXXXX?text=Hi%2C+I%27d+like+to+make+a+reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              WhatsApp Reserve
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
