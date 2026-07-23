"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { MENU_ITEMS, CATEGORIES, type Category } from "@/data/menu";

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
      <div className="bg-[#111] border-b border-white/10 py-12 px-4 text-center">
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
          Full Menu
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
          What We Serve
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          From signature burgers to rice bowls and nachos — all 100% Halal, all made fresh.
        </p>

        {/* Search */}
        <div className="mt-6 max-w-md mx-auto relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            width="16"
            height="16"
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
            className="w-full bg-white/5 border border-white/15 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-colors"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Category filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === "all"
                ? "bg-brand-red border-brand-red text-white"
                : "bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white/40"
            }`}
          >
            All Items ({MENU_ITEMS.length})
          </button>
          {CATEGORIES.map(({ id, label, emoji }) => {
            const count = MENU_ITEMS.filter((i) => i.category === id).length;
            return (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === id
                    ? "bg-brand-red border-brand-red text-white"
                    : "bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white/40"
                }`}
              >
                {emoji} {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Results count */}
        {search && (
          <p className="text-gray-400 text-sm mb-5">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
          </p>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-400">No items match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item) => {
              const catDef = CATEGORIES.find((c) => c.id === item.category);
              return (
                <div
                  key={item.id}
                  className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-brand-red/30 rounded-xl p-5 transition-all duration-200 flex flex-col"
                >
                  {/* Icon placeholder */}
                  <div className="w-full h-28 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg mb-4 flex items-center justify-center text-4xl">
                    {catDef?.emoji ?? "🍔"}
                  </div>

                  <div className="flex items-start justify-between gap-2 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        {item.popular && (
                          <span className="text-xs bg-brand-red/20 text-brand-red px-1.5 py-0.5 rounded font-medium">
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
                    <p className="text-brand-red font-bold text-lg">৳{item.price}</p>
                    <a
                      href="/order"
                      className="text-xs text-gray-400 hover:text-white border border-white/20 hover:border-brand-red/60 px-3 py-1.5 rounded-full transition-colors"
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
              className="bg-[#D70F64] hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-opacity"
            >
              🐼 Foodpanda
            </a>
            <a
              href="https://www.munchies.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B35] hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-opacity"
            >
              🍔 Munchies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
