import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold mb-3">
              <span className="text-brand-red">Burger</span>
              <span className="text-white"> Xpress</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Flavor Fusion. 100% Halal. Fresh ingredients, bold flavors, and
              7 branches across Dhaka serving you since day one.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/BurgerXpressbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-red transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/burgerxpress.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-red transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <span className="inline-flex items-center gap-1.5 bg-green-900/40 text-green-400 border border-green-800 text-xs font-medium px-2.5 py-1 rounded-full ml-2">
                🟢 100% Halal Certified
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {[
                { href: "/menu", label: "Full Menu" },
                { href: "/locations", label: "Find a Branch" },
                { href: "/order", label: "Order Online" },
                { href: "/about", label: "Our Story" },
                { href: "/gallery", label: "Gallery" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Order Online</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.foodpanda.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  🐼 Foodpanda
                </a>
              </li>
              <li>
                <a
                  href="https://www.munchies.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  🍔 Munchies
                </a>
              </li>
            </ul>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mt-6 mb-3">Rating</p>
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-gray-300 text-sm font-medium">4.8 / 5</span>
            </div>
            <p className="text-gray-500 text-xs mt-1">2,000+ reviews on Foodpanda</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Burger Xpress. All rights reserved.</p>
          <p>Dhaka, Bangladesh &nbsp;·&nbsp; 7 Branches &nbsp;·&nbsp; 100% Halal</p>
        </div>
      </div>
    </footer>
  );
}
