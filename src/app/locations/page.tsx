import type { Metadata } from "next";
import { LOCATIONS } from "@/data/locations";
import { BurgerIcon, FoodpandaIcon, HalalDot } from "@/components/icons/AnimatedIcons";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find your nearest Burger Xpress branch. 7 locations across Dhaka — Dhanmondi, Uttara, Mirpur, Baily Road, Banani, Mohammadpur, and Badda.",
};

export default function LocationsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/8 py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
            7 Locations
          </p>
          <h1
            className="font-display font-black text-white leading-tight mb-3"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Find Your Branch
          </h1>
          <p className="text-gray-500 text-sm">
            Dine in or order online from your nearest Burger Xpress.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-12">
        {/* Area pills */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.id}
              href={`#${loc.id}`}
              className="text-sm border border-white/20 text-gray-400 hover:text-white hover:border-brand-orange/60 px-4 py-1.5 rounded-full transition-colors"
            >
              {loc.area}
            </a>
          ))}
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              id={loc.id}
              className="bg-white/5 border border-white/10 hover:border-brand-orange/30 rounded-2xl p-6 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-white font-bold text-lg group-hover:text-brand-orange transition-colors">
                    {loc.name}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1 flex items-start gap-1.5">
                    <svg
                      className="shrink-0 mt-0.5"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    {loc.address}
                  </p>
                </div>
                <div className="shrink-0 w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <BurgerIcon size={28} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {loc.hours}
                </span>
              </div>

              {/* Delivery badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {loc.foodpandaUrl && (
                  <span className="inline-flex items-center gap-1 bg-[#D70F64]/15 text-[#E8449A] text-xs font-medium px-2.5 py-1 rounded-full border border-[#D70F64]/30">
                    <FoodpandaIcon size={14} /> Foodpanda
                  </span>
                )}
                {loc.munchiesUrl && (
                  <span className="inline-flex items-center gap-1 bg-orange-900/30 text-orange-400 text-xs font-medium px-2.5 py-1 rounded-full border border-orange-800/50">
                    <BurgerIcon size={14} /> Munchies
                  </span>
                )}
                <span className="inline-flex items-center gap-1 bg-green-900/30 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full border border-green-800/50">
                  <HalalDot /> Dine-in
                </span>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm border border-white/20 hover:border-white/40 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                  Get Directions
                </a>
                <a
                  href={`https://wa.me/${loc.whatsappNumber}?text=Hi%2C+I%27d+like+to+make+a+reservation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm bg-green-700/20 hover:bg-green-700/30 border border-green-800/50 text-green-400 px-4 py-2 rounded-full transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.926A.5.5 0 00.5 24h.072l6.246-1.633A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.844 9.844 0 01-5.031-1.381l-.36-.214-3.727.976.996-3.638-.234-.373A9.844 9.844 0 012.105 12C2.105 6.525 6.525 2.105 12 2.105S21.895 6.525 21.895 12 17.475 21.894 12 21.894z" />
                  </svg>
                  Reserve a Table
                </a>
                {loc.foodpandaUrl && (
                  <a
                    href={loc.foodpandaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm bg-[#D70F64]/15 hover:bg-[#D70F64]/25 border border-[#D70F64]/30 text-[#E8449A] px-4 py-2 rounded-full transition-colors"
                  >
                    Order →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dine-in note */}
        <div className="mt-10 bg-brand-blue/10 border border-brand-blue/30 rounded-2xl p-6 text-center">
          <p className="text-white font-semibold text-lg mb-1">Prefer to dine in?</p>
          <p className="text-gray-400 text-sm mb-4">
            All branches welcome walk-ins. Reserve your table via WhatsApp for groups of 4+.
          </p>
          <a
            href="https://wa.me/8801XXXXXXXXX?text=Hi%2C+I%27d+like+to+make+a+group+reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.926A.5.5 0 00.5 24h.072l6.246-1.633A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.844 9.844 0 01-5.031-1.381l-.36-.214-3.727.976.996-3.638-.234-.373A9.844 9.844 0 012.105 12C2.105 6.525 6.525 2.105 12 2.105S21.895 6.525 21.895 12 17.475 21.894 12 21.894z" />
            </svg>
            WhatsApp Reservation
          </a>
        </div>
      </div>
    </div>
  );
}
