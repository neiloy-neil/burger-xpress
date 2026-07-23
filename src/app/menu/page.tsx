"use client";

import { useState } from "react";
import { MENU_ITEMS, CATEGORIES, type Category } from "@/data/menu";
import { CategoryIcon, SearchEmptyIcon, FoodpandaIcon, BurgerIcon } from "@/components/icons/AnimatedIcons";

const CATEGORY_PHOTOS: Record<string, string> = {
  "chicken-burger": "/images/fb-post-7.jpg",
  "beef-burger": "/images/fb-post-5.jpg",
  "chefs-choice": "/images/ig-post-1.jpg",
  "meatbox": "/images/fb-post-3.jpg",
  "appetizers": "/images/fb-post-2.jpg",
  "nachos": "/images/fb-post-6.jpg",
  "rice-bowl": "/images/ig-post-2.jpg",
  "chowmein": "/images/ig-post-2.jpg",
  "subway-sandwich": "/images/fb-post-4.jpg",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = MENU_ITEMS.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/8 py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
            Full Menu
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h1
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              What We Serve
            </h1>
            {/* Search */}
            <div className="relative w-full sm:w-72 shrink-0">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search items…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/15 hover:border-white/30 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            All 100% Halal · Made fresh daily · Dine-in or delivery
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        {/* Category filter tabs */}
        <div className="relative mb-8">
        <div
          className="flex gap-2 overflow-x-auto pb-3 scroll-smooth"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#374151 transparent" }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === "all"
                ? "bg-brand-blue border-brand-blue text-white"
                : "bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white/40"
            }`}
          >
            All Items ({MENU_ITEMS.length})
          </button>
          {CATEGORIES.map(({ id, label, icon }) => {
            const count = MENU_ITEMS.filter((i) => i.category === id).length;
            return (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === id
                    ? "bg-brand-blue border-brand-blue text-white"
                    : "bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white/40"
                }`}
              >
                <CategoryIcon name={icon} size={15} />
                {label} ({count})
              </button>
            );
          })}
        </div>
        {/* Right-fade hint — hidden once user scrolls to end */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-3 w-16 bg-gradient-to-l from-[#0f0f0f] to-transparent" />
        </div>

        {/* Results count */}
        {search && (
          <p className="text-gray-400 text-sm mb-5">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
          </p>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center">
            <SearchEmptyIcon size={64} />
            <p className="text-gray-400 mt-4">No items match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item) => {
              const catDef = CATEGORIES.find((c) => c.id === item.category);
              return (
                <div
                  key={item.id}
                  className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-brand-orange/30 rounded-xl p-5 transition-all duration-200 flex flex-col"
                >
                  <div className="w-full h-28 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={CATEGORY_PHOTOS[item.category] ?? "/images/fb-post-5.jpg"}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-2 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        {item.popular && (
                          <span className="text-xs bg-brand-orange/20 text-brand-orange px-1.5 py-0.5 rounded font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-white text-sm leading-snug">{item.name}</p>
                      <p className="text-gray-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-brand-orange font-bold text-lg">৳{item.price}</p>
                    <a
                      href="/order"
                      className="text-xs text-gray-400 hover:text-white border border-white/20 hover:border-brand-orange/60 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Order →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Order CTA */}
        <div className="mt-16 text-center bg-[#111] rounded-2xl py-10 px-6 border border-white/10">
          <p className="text-2xl font-bold text-white mb-2">Ready to Order?</p>
          <p className="text-gray-400 mb-6">Get your food delivered via Foodpanda or Munchies.</p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://www.foodpanda.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D70F64] hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-opacity"
            >
              <FoodpandaIcon size={20} />
              Foodpanda
            </a>
            <a
              href="https://www.munchies.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-opacity"
            >
              <BurgerIcon size={20} />
              Munchies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
