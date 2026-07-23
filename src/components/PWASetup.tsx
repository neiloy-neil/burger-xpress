"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWASetup() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Register service worker in production only.
    // In development, unregister any stale SW to prevent cached-chunk hydration mismatches.
    if ("serviceWorker" in navigator) {
      if (process.env.NODE_ENV === "production") {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/" })
          .catch(() => {});
      } else {
        navigator.serviceWorker.getRegistrations().then((regs) =>
          regs.forEach((r) => r.unregister())
        );
      }
    }

    // Capture install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      const prompt = e as BeforeInstallPromptEvent;
      setInstallPrompt(prompt);

      // Show banner after 3s if not already installed
      const dismissed = sessionStorage.getItem("pwa-banner-dismissed");
      if (!dismissed) {
        setTimeout(() => setShowBanner(true), 3000);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") setShowBanner(false);
    setInstallPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem("pwa-banner-dismissed", "1");
  };

  if (!showBanner) return null;

  return (
    <div className="pwa-banner fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-[9999] bg-[#1B3D8F] border border-white/20 rounded-2xl p-4 shadow-2xl shadow-black/60">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-orange flex items-center justify-center font-display font-black text-black text-sm">
          BX
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm leading-tight">
            Install Burger Xpress
          </p>
          <p className="text-blue-200 text-xs mt-0.5 leading-relaxed">
            Add to your home screen for faster access and offline browsing.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="shrink-0 text-white/40 hover:text-white text-lg leading-none mt-0.5"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleInstall}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-black font-black text-xs py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
        >
          Install App
        </button>
        <button
          onClick={handleDismiss}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 rounded-full transition-colors"
        >
          Not Now
        </button>
      </div>
    </div>
  );
}
