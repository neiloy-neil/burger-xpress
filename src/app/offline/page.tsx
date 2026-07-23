"use client";

export default function OfflinePage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center bg-[#0f0f0f]">
      <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-4">
        No Connection
      </p>
      <h1
        className="font-display font-black text-white leading-none mb-4"
        style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
      >
        You&apos;re<br />Offline
      </h1>
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
        Looks like you&apos;ve lost your connection. Check your network and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-brand-orange hover:bg-brand-orange-dark text-black font-black px-7 py-3.5 rounded-full text-sm transition-all hover:scale-105"
      >
        Try Again →
      </button>
      <p className="text-gray-600 text-xs mt-8">
        Burger Xpress · 7 Branches in Dhaka · 100% Halal
      </p>
    </div>
  );
}
