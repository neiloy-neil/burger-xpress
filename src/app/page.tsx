"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "@/data/menu";

const SIGNATURE_ITEMS = MENU_ITEMS.filter((item) => item.popular).slice(0, 6);

const REVIEWS = [
  {
    name: "Rakib H.",
    rating: 5,
    text: "Best burger in Dhaka hands down. The Beef Cheese Blast is absolutely insane. Generous portions and the quality is always consistent.",
    branch: "Uttara Branch",
  },
  {
    name: "Sadia M.",
    rating: 5,
    text: "Visited the Dhanmondi branch and was blown away. The chicken burger is so fresh — you can taste the quality. Will definitely be back!",
    branch: "Dhanmondi Branch",
  },
  {
    name: "Tanvir A.",
    rating: 5,
    text: "The Pro Meatbox is worth every taka. My whole family ordered and everyone loved it. Service is fast and the staff is friendly.",
    branch: "Banani Branch",
  },
  {
    name: "Nusrat K.",
    rating: 5,
    text: "I order from Foodpanda 3-4 times a week. Always arrives hot, always tastes fresh. The loaded nachos are my go-to starter!",
    branch: "Mirpur 10 Branch",
  },
];

const DELIVERY_PARTNERS = [
  {
    name: "Foodpanda",
    emoji: "🐼",
    color: "#D70F64",
    url: "https://www.foodpanda.com.bd",
    branches: "Dhanmondi · Uttara · Banani · Mirpur",
  },
  {
    name: "Munchies",
    emoji: "🍔",
    color: "#FF6B35",
    url: "https://www.munchies.com.bd",
    branches: "Banani",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm text-gray-200">
            <span className="text-green-400">●</span>
            100% Halal Certified · 7 Branches in Dhaka
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-white">Flavor</span>{" "}
            <span className="text-brand-red">Fusion</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Dhaka&apos;s favourite burger since the start. Fresh ingredients, bold flavors,
            and the kind of burger that keeps you coming back — 4.8★ across 2,000+ reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/menu"
              className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-colors text-base shadow-lg shadow-red-900/40"
            >
              See the Menu
            </Link>
            <Link
              href="/order"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
            >
              Order Online
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs animate-bounce">
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <section className="bg-brand-red py-5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "7", label: "Branches" },
            { value: "4.8★", label: "Avg Rating" },
            { value: "2000+", label: "Happy Reviews" },
            { value: "100%", label: "Halal" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{value}</p>
              <p className="text-red-200 text-sm mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIGNATURE ITEMS ──────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
            Fan Favourites
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Burgers Everyone&apos;s Chasing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNATURE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-brand-red/40 rounded-2xl p-6 transition-all duration-200"
            >
              {/* Placeholder food image */}
              <div className="w-full h-40 bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-xl mb-5 flex items-center justify-center text-5xl">
                {item.category === "chicken-burger" && "🍗"}
                {item.category === "beef-burger" && "🥩"}
                {item.category === "chefs-choice" && "👨‍🍳"}
                {item.category === "meatbox" && "📦"}
                {item.category === "appetizers" && "🍟"}
                {item.category === "nachos" && "🧀"}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-white text-base leading-tight">{item.name}</p>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>
                <p className="text-brand-red font-bold text-lg shrink-0">৳{item.price}</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block bg-brand-red/15 text-brand-red text-xs font-medium px-2.5 py-1 rounded-full">
                  Popular ★
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-red text-gray-300 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
          >
            View Full Menu
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── ORDER CTA STRIP ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
            Order Now
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Delivered to Your Door
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Order fresh burgers, rice bowls, and more through your favourite delivery app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {DELIVERY_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl px-8 py-6 transition-all w-full sm:w-auto sm:min-w-[220px]"
              >
                <span className="text-4xl">{partner.emoji}</span>
                <p className="font-bold text-white text-lg">{partner.name}</p>
                <p className="text-gray-500 text-xs">{partner.branches}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-2">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-gray-300 font-semibold">4.8 / 5</span>
            <span className="text-gray-500 text-sm">· Foodpanda</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5 text-yellow-400 text-sm">
                {"★".repeat(review.rating)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div>
                <p className="text-white text-sm font-semibold">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HALAL BADGE SECTION ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🟢",
              title: "100% Halal",
              desc: "Every ingredient, every preparation, certified halal. No compromises.",
            },
            {
              icon: "🌿",
              title: "Fresh Ingredients",
              desc: "Sourced fresh daily. No frozen shortcuts — only real, quality food.",
            },
            {
              icon: "🏆",
              title: "Award-Winning Flavors",
              desc: "Consistently rated 4.8★ across thousands of verified reviews.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <span className="text-4xl">{icon}</span>
              <p className="text-white font-semibold text-lg">{title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FIND A BRANCH CTA ────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            7 Branches Across Dhaka
          </h2>
          <p className="text-gray-400 mb-8">
            Dhanmondi · Uttara · Mirpur · Baily Road · Banani · Mohammadpur · Badda
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-colors text-base shadow-lg shadow-red-900/30"
          >
            Find Your Branch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
