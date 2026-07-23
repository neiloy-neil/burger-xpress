"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

function loop(duration: number, delay = 0) {
  return { repeat: Infinity, duration, delay, ease: "easeInOut" as const };
}

// ── HalalDot ───────────────────────────────────────────────────────────────
// Tiny pulsing live-indicator dot. Replaces 🟢 in inline badge text.
export function HalalDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex w-2.5 h-2.5 ${className}`}>
      <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-70" />
      <span className="relative block rounded-full bg-green-500 w-2.5 h-2.5" />
    </span>
  );
}

// ── HalalShieldIcon ────────────────────────────────────────────────────────
// Shield with animated checkmark draw. Replaces 🟢 in card/section contexts.
export function HalalShieldIcon({ size = 40 }: { size?: number }) {
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500/30"
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
      />
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <motion.path
          d="M20 3L5 10v11c0 9.5 6.5 18 15 20.5C29.5 39 36 30.5 36 21V10L20 3z"
          fill="#16a34a"
          animate={{ scale: [1, 1.05, 1] }}
          transition={loop(3)}
          style={{ transformOrigin: "20px 20px" }}
        />
        <path
          d="M20 3L5 10v7c4-2 7-3 15-3s11 1 15 3v-7L20 3z"
          fill="rgba(255,255,255,0.1)"
        />
        <motion.path
          d="M13 20l5 5 9-9"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </svg>
    </span>
  );
}

// ── StarIcon ───────────────────────────────────────────────────────────────
// Single twinkling star. Used inside StarRating.
export function StarIcon({ size = 18, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      animate={{ scale: [1, 1.25, 1], rotate: [0, 8, -4, 0] }}
      transition={loop(2.5, delay)}
    >
      <path
        d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.15 5.06 16.75l.94-5.49-4-3.9 5.53-.8L10 1.5z"
        fill="#facc15"
      />
    </motion.svg>
  );
}

// ── StarRating ─────────────────────────────────────────────────────────────
// 5 stars with staggered twinkle.
export function StarRating({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-px">
      {[0, 0.2, 0.4, 0.6, 0.8].map((delay, i) => (
        <StarIcon key={i} size={size} delay={delay} />
      ))}
    </span>
  );
}

// ── BurgerIcon ─────────────────────────────────────────────────────────────
// Layered burger with floating layers. Large decorative icon. Replaces 🍔
export function BurgerIcon({ size = 64 }: { size?: number }) {
  const fl = (delay: number) => ({
    animate: { y: [0, -3, 0] as [number, number, number] },
    transition: loop(2.2, delay),
  });
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <motion.path d="M10 30C10 19 18 9 32 9s22 10 22 21H10z" fill="#F5A020" {...fl(0)} />
      <motion.g {...fl(0)}>
        <ellipse cx="23" cy="17" rx="2.5" ry="1.5" fill="#c97208" />
        <ellipse cx="32" cy="13" rx="2.5" ry="1.5" fill="#c97208" />
        <ellipse cx="41" cy="17" rx="2.5" ry="1.5" fill="#c97208" />
      </motion.g>
      <motion.rect x="10" y="28" width="44" height="4" rx="2" fill="#e8890a" {...fl(0)} />
      <motion.path
        d="M9 33c3-3.5 5 1 8-1.5s5 1 8-1.5 5 1 8-1.5 5 1 9 1.5"
        stroke="#22c55e"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        {...fl(0.08)}
      />
      <motion.rect x="9" y="37" width="46" height="9" rx="4.5" fill="#7c2d12" {...fl(0.16)} />
      <motion.g {...fl(0.16)} opacity={0.5}>
        <path d="M15 40h34" stroke="#451c0a" strokeWidth="1.5" />
        <path d="M15 44h34" stroke="#451c0a" strokeWidth="1.5" />
      </motion.g>
      <motion.path d="M9 46h46l-4 5H13l-4-5z" fill="#fcd34d" {...fl(0.22)} />
      <motion.rect x="9" y="51" width="46" height="9" rx="4.5" fill="#F5A020" {...fl(0.28)} />
    </svg>
  );
}

// ── FoodpandaIcon ──────────────────────────────────────────────────────────
// Pink delivery bag with speed lines. Replaces 🐼
export function FoodpandaIcon({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <motion.g
        animate={{ y: [0, -4, 0], rotate: [-2, 2, -2] }}
        transition={loop(1.8)}
        style={{ transformOrigin: "36px 38px" }}
      >
        <rect x="18" y="24" width="32" height="28" rx="5" fill="#D70F64" />
        <path
          d="M26 24V18c0-3.5 2.5-6 6-6s6 2.5 6 6v6"
          stroke="#b00d52"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="22" y="29" width="24" height="18" rx="3" fill="rgba(255,255,255,0.12)" />
        <text
          x="34" y="42"
          textAnchor="middle"
          fill="white"
          fontSize="15"
          fontWeight="900"
          fontFamily="Arial,sans-serif"
        >
          F
        </text>
      </motion.g>
      <motion.g
        animate={{ x: [-4, 0, -4], opacity: [0.4, 1, 0.4] }}
        transition={loop(1.8)}
      >
        <line x1="3" y1="32" x2="15" y2="32" stroke="#E8449A" strokeWidth="3" strokeLinecap="round" />
        <line x1="3" y1="40" x2="13" y2="40" stroke="#E8449A" strokeWidth="2" strokeLinecap="round" />
        <line x1="3" y1="48" x2="11" y2="48" stroke="#E8449A" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

// ── LeafIcon ───────────────────────────────────────────────────────────────
// Swaying leaf. Replaces 🌿
export function LeafIcon({ size = 40 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      animate={{ rotate: [-6, 6, -6] }}
      transition={loop(3)}
      style={{ transformOrigin: "20px 36px" }}
    >
      <path
        d="M20 36S6 26 6 14C6 7 12 3 20 3s14 4 14 11C34 26 20 36 20 36z"
        fill="#16a34a"
      />
      <path d="M20 36V14" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 22l-6-5" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" opacity={0.6} />
      <path d="M20 28l6-5" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" opacity={0.6} />
      <path d="M8 10c2-4 7-6 12-5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </motion.svg>
  );
}

// ── SparkleIcon ────────────────────────────────────────────────────────────
// Multi-point sparkles. Replaces 🧼
export function SparkleIcon({ size = 40 }: { size?: number }) {
  function Spark({ cx, cy, r, delay }: { cx: number; cy: number; r: number; delay: number }) {
    return (
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ scale: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
        transition={loop(1.8, delay)}
      >
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
        <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
        <line x1={cx - r * 0.65} y1={cy - r * 0.65} x2={cx + r * 0.65} y2={cy + r * 0.65} stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
        <line x1={cx + r * 0.65} y1={cy - r * 0.65} x2={cx - r * 0.65} y2={cy + r * 0.65} stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Spark cx={24} cy={24} r={9} delay={0} />
      <Spark cx={10} cy={11} r={6} delay={0.5} />
      <Spark cx={39} cy={10} r={4.5} delay={0.9} />
      <Spark cx={39} cy={37} r={5.5} delay={0.3} />
    </svg>
  );
}

// ── CoinIcon ───────────────────────────────────────────────────────────────
// Gold coin with ৳ symbol. Replaces 💰
export function CoinIcon({ size = 40 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      animate={{ rotateY: [0, 360] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1.5 }}
    >
      <circle cx="20" cy="20" r="17" fill="#fbbf24" />
      <circle cx="20" cy="20" r="13" fill="#f59e0b" />
      <circle cx="20" cy="20" r="15" fill="none" stroke="#fde68a" strokeWidth="2" />
      <text
        x="20" y="26"
        textAnchor="middle"
        fill="#78350f"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial,sans-serif"
      >
        ৳
      </text>
      <path d="M9 13c2-4 7-6 11-5" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

// ── MedalIcon ──────────────────────────────────────────────────────────────
// Swinging award medal. Replaces 🏅
export function MedalIcon({ size = 64 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      animate={{ rotate: [-10, 10, -10] }}
      transition={loop(2.5)}
      style={{ transformOrigin: "32px 4px" }}
    >
      <path d="M24 4h16l-4 22h-8L24 4z" fill="#dc2626" />
      <path d="M28 4h8l-4 22-4-22z" fill="#b91c1c" />
      <motion.circle
        cx="32" cy="44" r="18"
        fill="#fbbf24"
        opacity={0.2}
        animate={{ r: [18, 24, 18], opacity: [0.2, 0, 0.2] }}
        transition={loop(2.5)}
      />
      <circle cx="32" cy="44" r="18" fill="#fbbf24" />
      <circle cx="32" cy="44" r="14" fill="#f59e0b" />
      <path
        d="M32 33l2.5 5 5.5.8-4 3.9 1 5.5-5-2.4-5 2.4 1-5.5-4-3.9 5.5-.8L32 33z"
        fill="#fde68a"
      />
      <path d="M20 36c2-5 7-9 12-9" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

// ── LocationPinIcon ────────────────────────────────────────────────────────
// Bouncing pin with shadow. Replaces 📍
export function LocationPinIcon({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex flex-col items-center"
      style={{ width: size, height: size + 6 }}
    >
      <motion.span
        className="absolute bottom-0 bg-black/25 rounded-full"
        style={{ width: size * 0.45, height: 5 }}
        animate={{ scaleX: [1, 1.5, 1], opacity: [0.35, 0.1, 0.35] }}
        transition={loop(1.2)}
      />
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        animate={{ y: [0, -5, 0] }}
        transition={loop(1.2)}
      >
        <path
          d="M20 2C12.27 2 6 8.27 6 16c0 10.5 14 24 14 24S34 26.5 34 16C34 8.27 27.73 2 20 2z"
          fill="#F5A020"
        />
        <circle cx="20" cy="16" r="7" fill="white" />
        <circle cx="20" cy="16" r="4" fill="#F5A020" />
        <path d="M10 10c2.5-5 8-7 12-5.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" />
      </motion.svg>
    </span>
  );
}

// ── FacebookIcon ───────────────────────────────────────────────────────────
// Facebook logo with subtle pulse. Replaces 📘
export function FacebookIcon({ size = 40 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      animate={{ scale: [1, 1.07, 1] }}
      transition={loop(3)}
    >
      <rect width="40" height="40" rx="9" fill="#1877F2" />
      <path
        d="M26 20h-4v13h-5V20h-3v-5h3v-3c0-4.5 2-6.5 7-6.5h3v5h-2.5c-.8 0-1 .4-1 1V15H26l-1 5z"
        fill="white"
      />
    </motion.svg>
  );
}

// ── CameraIcon ─────────────────────────────────────────────────────────────
// Camera with animated lens glint. Replaces 📸
export function CameraIcon({ size = 64 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      animate={{ scale: [1, 1.05, 1] }}
      transition={loop(2.5)}
    >
      <rect x="5" y="16" width="54" height="38" rx="7" fill="#374151" />
      <rect x="18" y="10" width="22" height="8" rx="4" fill="#374151" />
      <rect x="34" y="11" width="7" height="5" rx="2.5" fill="#1f2937" />
      <motion.rect
        x="7" y="19" width="9" height="7" rx="2"
        fill="#fbbf24"
        animate={{ opacity: [1, 0.25, 1] }}
        transition={loop(2, 0.6)}
      />
      <circle cx="32" cy="35" r="14" fill="#1f2937" />
      <circle cx="32" cy="35" r="11" fill="#111827" />
      <circle cx="32" cy="35" r="8" fill="none" stroke="#374151" strokeWidth="2" />
      <motion.circle
        cx="32" cy="35" r="5"
        fill="#1d4ed8"
        animate={{ opacity: [0.4, 0.9, 0.4], r: [4, 5.5, 4] }}
        transition={loop(2)}
        style={{ transformOrigin: "32px 35px" }}
      />
      <rect x="47" y="19" width="9" height="7" rx="2" fill="#1f2937" />
      <circle cx="27" cy="25" r="2" fill="#4b5563" />
    </motion.svg>
  );
}

// ── SearchEmptyIcon ────────────────────────────────────────────────────────
// Animated magnifying glass for empty search results. Replaces 🔍
export function SearchEmptyIcon({ size = 64 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1 }}
    >
      <motion.circle
        cx="27" cy="27" r="17"
        stroke="#F5A020"
        strokeWidth="5"
        fill="none"
        animate={{ scale: [1, 1.07, 1] }}
        transition={loop(3)}
        style={{ transformOrigin: "27px 27px" }}
      />
      <circle cx="27" cy="27" r="10" fill="#F5A020" opacity={0.1} />
      <motion.line
        x1="40" y1="40" x2="56" y2="56"
        stroke="#F5A020"
        strokeWidth="5"
        strokeLinecap="round"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={loop(3)}
      />
    </motion.svg>
  );
}

// ── DineIcon ───────────────────────────────────────────────────────────────
// Fork, knife, and plate. Replaces 🍽️
export function DineIcon({ size = 48 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      animate={{ scale: [1, 1.08, 1] }}
      transition={loop(2.5)}
    >
      <circle cx="24" cy="30" r="16" fill="#1B3D8F" opacity={0.18} />
      <circle cx="24" cy="30" r="16" stroke="#1B3D8F" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="30" r="10" stroke="#1B3D8F" strokeWidth="1.5" fill="none" opacity={0.4} />
      <line x1="16" y1="8" x2="16" y2="42" stroke="#F5A020" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="13" y1="8" x2="13" y2="16" stroke="#F5A020" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="8" x2="19" y2="16" stroke="#F5A020" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 16C13 18 14.3 19 16 19C17.7 19 19 18 19 16" stroke="#F5A020" strokeWidth="1.5" fill="none" />
      <path d="M32 8C32 8 34 14 34 21L32 23" stroke="#F5A020" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <line x1="32" y1="23" x2="32" y2="42" stroke="#F5A020" strokeWidth="2.2" strokeLinecap="round" />
    </motion.svg>
  );
}

// ── Category pill icons ────────────────────────────────────────────────────
// Small 16×16 icons for menu filter pills.

function PillSVG({ size, children }: { size: number; children: ReactNode }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.svg>
  );
}

const CATEGORY_ICONS: Record<string, (s: number) => ReactNode> = {
  chicken: (s) => (
    <PillSVG size={s}>
      <ellipse cx="10" cy="5" rx="4" ry="3" fill="#F5A020" />
      <rect x="3.5" y="5" width="3" height="7" rx="1.5" fill="#F5A020" />
      <circle cx="5" cy="12.5" r="2.5" fill="#e8890a" />
    </PillSVG>
  ),
  beef: (s) => (
    <PillSVG size={s}>
      <rect x="2" y="5.5" width="12" height="5.5" rx="2.75" fill="#7c2d12" />
      <path d="M4 7.5h8M4 9.5h8" stroke="#451c0a" strokeWidth="0.75" />
      <ellipse cx="8" cy="5.5" rx="4" ry="2" fill="#92400e" />
    </PillSVG>
  ),
  chef: (s) => (
    <PillSVG size={s}>
      <rect x="3" y="10" width="10" height="4" rx="1" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.5" />
      <path d="M5 10V7.5" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M11 10V7.5" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="8" cy="4.5" r="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.5" />
      <path d="M5 10h6" stroke="#cbd5e1" strokeWidth="0.75" />
    </PillSVG>
  ),
  sandwich: (s) => (
    <PillSVG size={s}>
      <rect x="1" y="11.5" width="14" height="3" rx="1.5" fill="#F5A020" />
      <rect x="1" y="8.5" width="14" height="2.5" fill="#22c55e" />
      <rect x="1" y="6" width="14" height="2.5" fill="#fcd34d" />
      <rect x="1" y="1.5" width="14" height="3.5" rx="1.5" fill="#F5A020" />
    </PillSVG>
  ),
  bowl: (s) => (
    <PillSVG size={s}>
      <path d="M2 7h12c0 3.5-2.7 6-6 6S2 10.5 2 7z" fill="#fbbf24" />
      <path d="M2 7h12" stroke="#f59e0b" strokeWidth="1" />
      <line x1="5" y1="7" x2="5" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="7" x2="8" y2="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="7" x2="11" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 3C7 2 8 1.5 9 2" stroke="#9ca3af" strokeWidth="1" strokeLinecap="round" />
    </PillSVG>
  ),
  noodle: (s) => (
    <PillSVG size={s}>
      <path d="M2 4.5c1.5-2 2 .5 3-1.5 1-2 2 .5 3-1.5 1-2 2 .5 3-1.5 1-2 1.5.5 3 .5"
        stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M2 8.5c1.5-2 2 .5 3-1.5 1-2 2 .5 3-1.5 1-2 2 .5 3-1.5 1-2 1.5.5 3 .5"
        stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M2 12.5c1.5-2 2 .5 3-1.5 1-2 2 .5 3-1.5 1-2 2 .5 3-1.5 1-2 1.5.5 3 .5"
        stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </PillSVG>
  ),
  nachos: (s) => (
    <PillSVG size={s}>
      <polygon points="8,2 15,13 1,13" fill="#fbbf24" />
      <polygon points="8,2 15,13 1,13" fill="none" stroke="#f59e0b" strokeWidth="0.75" />
      <line x1="5" y1="13" x2="4.5" y2="15.5" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="13" x2="10.5" y2="15.5" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" />
    </PillSVG>
  ),
  fries: (s) => (
    <PillSVG size={s}>
      <path d="M4 8h8l-1 7H5L4 8z" fill="#ef4444" />
      <rect x="5.5" y="2" width="1.8" height="6" rx="0.9" fill="#fbbf24" />
      <rect x="8.1" y="1" width="1.8" height="7" rx="0.9" fill="#fbbf24" />
      <rect x="10.7" y="2" width="1.8" height="6" rx="0.9" fill="#fbbf24" />
    </PillSVG>
  ),
  box: (s) => (
    <PillSVG size={s}>
      <rect x="2" y="7" width="12" height="8" rx="1.5" fill="#F5A020" />
      <path d="M2 7l2.5-4h7l2.5 4" fill="#e8890a" />
      <path d="M2 7h12" stroke="#c97208" strokeWidth="0.5" />
      <rect x="4" y="9" width="8" height="4" rx="2" fill="#7c2d12" />
    </PillSVG>
  ),
};

export function CategoryIcon({ name, size = 16 }: { name: string; size?: number }) {
  const render = CATEGORY_ICONS[name];
  return render ? <>{render(size)}</> : null;
}

// ── ValueIcon (dispatch by name) ───────────────────────────────────────────
// Used in about page values grid.
export function ValueIcon({ name, size = 40 }: { name: string; size?: number }) {
  switch (name) {
    case "halal":   return <HalalShieldIcon size={size} />;
    case "leaf":    return <LeafIcon size={size} />;
    case "sparkle": return <SparkleIcon size={size} />;
    case "coin":    return <CoinIcon size={size} />;
    default:        return null;
  }
}
