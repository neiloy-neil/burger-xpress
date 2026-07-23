"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "@/data/menu";
import { BurgerIcon, FoodpandaIcon, StarRating, StarIcon } from "@/components/icons/AnimatedIcons";

const SIGNATURE_ITEMS = MENU_ITEMS.filter((item) => item.popular).slice(0, 6);

const SIGNATURE_PHOTOS = [
  "/images/fb-post-5.jpg",
  "/images/ig-post-1.jpg",
  "/images/fb-post-2.jpg",
  "/images/fb-post-7.jpg",
  "/images/fb-post-3.jpg",
  "/images/fb-post-4.jpg",
];

const REVIEWS = [
  {
    name: "Rakib H.",
    text: "Best burger in Dhaka hands down. The Beef Cheese Blast is absolutely insane.",
    branch: "Uttara",
  },
  {
    name: "Sadia M.",
    text: "Visited the Dhanmondi branch and was blown away. So fresh — you can taste the quality.",
    branch: "Dhanmondi",
  },
  {
    name: "Tanvir A.",
    text: "The Pro Meatbox is worth every taka. My whole family ordered and everyone loved it.",
    branch: "Banani",
  },
  {
    name: "Nusrat K.",
    text: "I order from Foodpanda 3-4 times a week. Always arrives hot, always tastes fresh.",
    branch: "Mirpur 10",
  },
  {
    name: "Farhan R.",
    text: "Finally, a burger place that doesn't cut corners. The quality is consistently brilliant.",
    branch: "Baily Road",
  },
  {
    name: "Mitu S.",
    text: "The loaded nachos are something else. Service at Banani is fast and the staff is friendly.",
    branch: "Banani",
  },
];

const TICKER = "FLAVOR FUSION · HALAL CERTIFIED · 7 BRANCHES IN DHAKA · MORE FLAVOR FOR LESS · RATED 4.8★ ON FOODPANDA · ";

export default function HomePage() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroImgRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex items-end pb-16 sm:pb-24 overflow-hidden grain-overlay bg-black">
        {/* Background image with parallax */}
        <div ref={heroImgRef} className="absolute inset-0 scale-110">
          <img
            src="/images/hero-cover.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Gradients — heavy left so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Corner accent lines */}
        <span className="absolute bottom-0 left-0 w-px h-24 bg-brand-orange/50" />
        <span className="absolute bottom-0 left-0 w-24 h-px bg-brand-orange/50" />
        <span className="absolute top-0 right-0 w-px h-24 bg-white/10" />

        {/* Hero content — left aligned */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 max-w-screen-xl mx-auto">
          <div className="max-w-xl">
            <p className="hero-line hero-line-1 text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-5">
              Dhaka&apos;s Favourite Burger · Est. Dhanmondi
            </p>

            <h1 className="mb-6 leading-none">
              <span className="hero-line hero-line-2 block font-display font-black uppercase text-white"
                style={{ fontSize: "clamp(3.8rem, 11vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}>
                Flavor
              </span>
              <span className="hero-line hero-line-3 block font-display font-black uppercase text-brand-orange"
                style={{ fontSize: "clamp(3.8rem, 11vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}>
                Fusion
              </span>
            </h1>

            <p className="hero-line hero-line-4 text-gray-300 text-sm sm:text-base max-w-sm leading-relaxed mb-8">
              Fresh ingredients. Bold flavors. The burger Dhaka keeps coming back for —&nbsp;
              4.8★ across 2,000+ reviews.
            </p>

            <div className="hero-line hero-line-5 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="animate-glow-pulse bg-brand-orange hover:bg-brand-orange-dark text-black font-black px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                See the Menu →
              </Link>
              <Link
                href="/order"
                className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORANGE TICKER ───────────────────────────────────────────────── */}
      <div className="bg-brand-orange py-3 overflow-hidden select-none">
        <div className="animate-marquee-fast whitespace-nowrap" style={{ width: "max-content" }}>
          <span className="text-black text-xs font-black uppercase tracking-[0.2em]">
            {(TICKER + TICKER)}
          </span>
        </div>
      </div>

      {/* ── EDITORIAL STATS ─────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-white/8">
            {[
              { num: "7",     label: "Branches in Dhaka" },
              { num: "4.8",   label: "Star Rating"       },
              { num: "2K+",   label: "Happy Reviews"     },
              { num: "100%",  label: "Halal Certified"   },
            ].map(({ num, label }, i) => (
              <div
                key={label}
                className="reveal px-8 sm:px-12 py-12 sm:py-16"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p
                  className="font-display font-black text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                >
                  {num}
                </p>
                <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.22em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAN FAVOURITES (horizontal scroll rail) ─────────────────────── */}
      <section className="py-20 sm:py-28 overflow-hidden">
        {/* Section header */}
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 mb-10 flex items-end justify-between">
          <div>
            <p className="reveal text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
              Fan Favourites
            </p>
            <h2
              className="reveal font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", transitionDelay: "80ms" }}
            >
              The Burgers<br />Everyone&apos;s Chasing
            </h2>
          </div>
          <Link
            href="/menu"
            className="reveal hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-brand-orange font-bold uppercase tracking-widest transition-colors border-b border-transparent hover:border-brand-orange pb-0.5"
            style={{ transitionDelay: "160ms" }}
          >
            Full Menu <span>→</span>
          </Link>
        </div>

        {/* Scroll rail */}
        <div className="flex gap-4 overflow-x-auto px-6 sm:px-10 lg:px-20 pb-6 snap-x snap-mandatory scrollbar-hide">
          {SIGNATURE_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="shrink-0 snap-start group cursor-pointer"
              style={{ width: "clamp(230px, 28vw, 300px)" }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/5"
                style={{ height: "clamp(320px, 42vw, 400px)" }}>
                <img
                  src={SIGNATURE_PHOTOS[i % SIGNATURE_PHOTOS.length]}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110"
                  style={{ transition: "transform 0.5s ease" }}
                />
                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                {/* Top badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-black bg-brand-orange px-2.5 py-1 rounded-full">
                    Popular <StarIcon size={10} />
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-white font-bold text-sm leading-snug mb-3">{item.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-brand-orange font-black text-2xl">৳{item.price}</p>
                    <Link
                      href="/order"
                      className="text-[11px] text-black bg-brand-orange hover:bg-brand-orange-dark font-black px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* See all card */}
          <div className="shrink-0 snap-start" style={{ width: "clamp(230px, 28vw, 300px)" }}>
            <Link
              href="/menu"
              className="flex items-center justify-center h-full rounded-2xl border border-white/10 hover:border-brand-orange/40 transition-colors group"
              style={{ height: "clamp(320px, 42vw, 400px)" }}
            >
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-white/20 group-hover:border-brand-orange/60 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400 group-hover:text-brand-orange transition-colors">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-gray-400 group-hover:text-white text-sm font-semibold transition-colors">See all items</p>
                <p className="text-gray-600 text-xs mt-1">Full menu →</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile-only full menu link */}
        <div className="sm:hidden mt-2 px-6 text-right">
          <Link href="/menu" className="text-xs text-gray-500 hover:text-brand-orange transition-colors">
            View full menu →
          </Link>
        </div>
      </section>

      {/* ── REVIEWS MARQUEE ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 mb-12">
          <p className="reveal text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
            Customer Reviews
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2
              className="reveal font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", transitionDelay: "80ms" }}
            >
              Dhaka Loves<br />Burger Xpress
            </h2>
            <div className="reveal flex items-center gap-2" style={{ transitionDelay: "160ms" }}>
              <StarRating size={16} />
              <span className="text-white font-bold text-sm">4.8 / 5</span>
              <span className="text-gray-500 text-xs">on Foodpanda</span>
            </div>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div
            className="animate-marquee flex gap-4"
            style={{ width: "max-content" }}
          >
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div
                key={i}
                className="shrink-0 w-[260px] sm:w-72 bg-white/5 border border-white/8 rounded-xl p-5 card-lift"
              >
                <div className="mb-3"><StarRating size={12} /></div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.branch} Branch</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div
            className="animate-marquee-reverse flex gap-4"
            style={{ width: "max-content" }}
          >
            {[...REVIEWS.slice().reverse(), ...REVIEWS.slice().reverse()].map((r, i) => (
              <div
                key={i}
                className="shrink-0 w-[260px] sm:w-72 bg-white/5 border border-white/8 rounded-xl p-5 card-lift"
              >
                <div className="mb-3"><StarRating size={12} /></div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.branch} Branch</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER NOW ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-20 bg-[#111]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div className="lg:col-span-2">
              <p className="reveal text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
                Order Now
              </p>
              <h2
                className="reveal font-display font-black text-white leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", transitionDelay: "80ms" }}
              >
                Delivered<br />to Your Door
              </h2>
              <p className="reveal text-gray-400 text-sm leading-relaxed max-w-xs" style={{ transitionDelay: "160ms" }}>
                Order via Foodpanda or Munchies and get fresh burgers, rice bowls, and more
                delivered straight to you.
              </p>
            </div>

            {/* Right — delivery cards */}
            <div className="lg:col-span-3 reveal grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: "200ms" }}>
              <a
                href="https://www.foodpanda.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border-2 border-[#D70F64]/30 hover:border-[#D70F64] bg-[#D70F64]/8 hover:bg-[#D70F64]/15 p-7 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-900/25 card-lift"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D70F64]/10 rounded-full -translate-y-8 translate-x-8 group-hover:bg-[#D70F64]/20 transition-colors" />
                <span className="block mb-4"><FoodpandaIcon size={64} /></span>
                <p className="text-white font-bold text-xl mb-1">Foodpanda</p>
                <p className="text-gray-400 text-xs mb-4">5 branches available</p>
                <span className="text-[#E8449A] text-xs font-black uppercase tracking-wider">
                  Order now →
                </span>
              </a>

              <a
                href="https://www.munchies.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border-2 border-[#FF6B35]/30 hover:border-[#FF6B35] bg-[#FF6B35]/8 hover:bg-[#FF6B35]/15 p-7 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-900/25 card-lift"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/10 rounded-full -translate-y-8 translate-x-8 group-hover:bg-[#FF6B35]/20 transition-colors" />
                <span className="block mb-4"><BurgerIcon size={64} /></span>
                <p className="text-white font-bold text-xl mb-1">Munchies</p>
                <p className="text-gray-400 text-xs mb-4">Banani branch</p>
                <span className="text-[#FF6B35] text-xs font-black uppercase tracking-wider">
                  Order now →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES (numbered) ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            {[
              {
                num: "01",
                title: "100% Halal",
                desc: "Every ingredient sourced and every dish prepared to strict halal standards. No exceptions, ever.",
              },
              {
                num: "02",
                title: "Always Fresh",
                desc: "We source daily. No freezer shortcuts — just real, quality food that tastes the way it should.",
              },
              {
                num: "03",
                title: "#MoreFlavorForLess",
                desc: "Bold, satisfying, affordable. Flavor Fusion doesn't cost a fortune — and it never will.",
              },
            ].map(({ num, title, desc }, i) => (
              <div
                key={title}
                className="reveal px-0 sm:px-10 py-10 sm:py-0 first:pt-0 last:pb-0"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <p
                  className="font-display font-black text-brand-orange/25 leading-none mb-4"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                >
                  {num}
                </p>
                <p className="text-white font-bold text-lg mb-2">{title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCH CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-10 lg:px-20 bg-brand-blue overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/8 blur-3xl pointer-events-none" />
        {/* Accent line */}
        <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-orange/40 via-white/10 to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto text-center">
          <p className="reveal text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-5">
            Find Your Branch
          </p>
          <h2
            className="reveal font-display font-black text-white leading-none mb-5"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", transitionDelay: "80ms" }}
          >
            7 Branches.<br />
            Across Dhaka.
          </h2>
          <p className="reveal text-white/60 text-sm mb-10 max-w-md mx-auto leading-relaxed" style={{ transitionDelay: "160ms" }}>
            Dhanmondi · Uttara · Mirpur · Baily Road<br />Banani · Mohammadpur · Badda
          </p>
          <div className="reveal" style={{ transitionDelay: "240ms" }}>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange-dark text-black font-black px-9 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95"
            >
              Find Your Branch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
