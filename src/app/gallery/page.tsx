import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Food photography and branch photos from Burger Xpress. See our burgers, sides, and atmosphere.",
};

// Placeholder gallery items — replace with real photos from client
const GALLERY_ITEMS = [
  { id: 1, emoji: "🍔", label: "Signature Beef Boom Blast", category: "burgers" },
  { id: 2, emoji: "🍗", label: "Crispy Chicken Burger", category: "burgers" },
  { id: 3, emoji: "🍟", label: "Loaded Fries", category: "sides" },
  { id: 4, emoji: "🧀", label: "Loaded Nachos", category: "sides" },
  { id: 5, emoji: "👨‍🍳", label: "Chef's Kitchen", category: "behind-scenes" },
  { id: 6, emoji: "🍚", label: "Crispy Chicken Rice Bowl", category: "bowls" },
  { id: 7, emoji: "🥩", label: "Beef Cheese Blast", category: "burgers" },
  { id: 8, emoji: "🍜", label: "Chicken Chowmein", category: "noodles" },
  { id: 9, emoji: "📦", label: "Pro Meatbox", category: "bundles" },
  { id: 10, emoji: "🍖", label: "Chicken Wings", category: "sides" },
  { id: 11, emoji: "🌶️", label: "Spicy Chicken Burger", category: "burgers" },
  { id: 12, emoji: "🥪", label: "Chicken Subway", category: "sandwiches" },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "burgers", label: "Burgers" },
  { id: "sides", label: "Sides" },
  { id: "bowls", label: "Rice Bowls" },
  { id: "noodles", label: "Noodles" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "bundles", label: "Bundles" },
  { id: "behind-scenes", label: "Behind the Scenes" },
];

export default function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-[#111] border-b border-white/10 py-12 px-4 text-center">
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
          Gallery
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
          Food Worth Photographing
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Fresh out of the kitchen and onto your feed.
        </p>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/burgerxpress.bd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="17.5" cy="6.5" r="1.8" />
          </svg>
          @burgerxpress.bd on Instagram
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-white/10 hover:border-brand-red/40 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
                // Make some items taller for masonry feel
                i % 5 === 0 ? "row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram embed prompt */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-2xl p-10">
          <span className="text-5xl mb-4 block">📸</span>
          <h2 className="text-white font-bold text-2xl mb-2">Follow us on Instagram</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-6 text-sm">
            New food photos daily. Tag us in your Burger Xpress moments —
            your photo might end up on our page!
          </p>
          <a
            href="https://www.instagram.com/burgerxpress.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="17.5" cy="6.5" r="1.8" />
            </svg>
            @burgerxpress.bd
          </a>
        </div>
      </div>
    </div>
  );
}
