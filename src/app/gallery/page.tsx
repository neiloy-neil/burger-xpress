import type { Metadata } from "next";
import { CameraIcon } from "@/components/icons/AnimatedIcons";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Food photography and branch photos from Burger Xpress. See our burgers, sides, and atmosphere.",
};

const GALLERY_ITEMS = [
  { id: 1, src: "/images/ig-post-1.jpg", label: "Flavors That Shock", category: "lifestyle" },
  { id: 2, src: "/images/fb-post-5.jpg", label: "Burger of the Match", category: "burgers" },
  { id: 3, src: "/images/ig-post-3.jpg", label: "Good Times at BX", category: "lifestyle" },
  { id: 4, src: "/images/fb-post-3.jpg", label: "Squad Knows What's Up", category: "lifestyle" },
  { id: 5, src: "/images/fb-post-2.jpg", label: "Burger Break", category: "burgers" },
  { id: 6, src: "/images/fb-post-7.jpg", label: "Catch the Flavor", category: "burgers" },
  { id: 7, src: "/images/fb-post-4.jpg", label: "Signature Stack", category: "burgers" },
  { id: 8, src: "/images/ig-post-2.jpg", label: "Fresh from the Kitchen", category: "burgers" },
  { id: 9, src: "/images/fb-post-1.jpg", label: "Loaded Combo", category: "sides" },
  { id: 10, src: "/images/fb-post-6.jpg", label: "Squad Meal", category: "lifestyle" },
  { id: 11, src: "/images/ig-post-1.jpg", label: "Food Spread", category: "sides" },
  { id: 12, src: "/images/fb-post-3.jpg", label: "Dine-In Vibes", category: "lifestyle" },
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
      <div className="bg-[#0a0a0a] border-b border-white/8 py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
              Gallery
            </p>
            <h1
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Food Worth<br />Photographing
            </h1>
          </div>
          <a
            href="https://www.instagram.com/burgerxpress.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-black px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity uppercase tracking-wider"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="17.5" cy="6.5" r="1.8" />
            </svg>
            @burgerxpress.bd
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`group relative border border-white/10 hover:border-brand-orange/40 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
                i % 5 === 0 ? "row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram embed prompt */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-2xl p-10">
          <span className="mb-4 flex justify-center"><CameraIcon size={72} /></span>
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
