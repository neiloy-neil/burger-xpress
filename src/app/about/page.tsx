import type { Metadata } from "next";
import {
  ValueIcon,
  HalalShieldIcon,
  BurgerIcon,
  MedalIcon,
  LocationPinIcon,
  FacebookIcon,
  HalalDot,
} from "@/components/icons/AnimatedIcons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Burger Xpress — our brand story, halal commitment, fresh ingredient philosophy, and quality values.",
};

const VALUES = [
  {
    icon: "halal",
    title: "100% Halal",
    desc: "Every ingredient we source and every dish we prepare meets strict halal standards. Our certification is not a label — it is our commitment to every customer.",
  },
  {
    icon: "leaf",
    title: "Always Fresh",
    desc: "We source fresh vegetables, quality meats, and premium buns daily. No freezer shortcuts. When you taste the difference, you&apos;ll understand why.",
  },
  {
    icon: "sparkle",
    title: "Hygiene First",
    desc: "Our kitchens are cleaned and inspected daily. We hold ourselves to a higher standard because the people eating our food deserve nothing less.",
  },
  {
    icon: "coin",
    title: "Real Value",
    desc: "Flavor Fusion doesn&apos;t mean premium pricing. We&apos;ve built a menu that punches above its weight — bold, satisfying, and affordable for everyone.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/8 py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.28em] mb-3">
            Our Story
          </p>
          <h1
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            About Burger Xpress
          </h1>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            We started with one idea: make the kind of burger that makes you stop mid-bite and say wow.
            Seven branches later, Dhaka has spoken.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-14">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Born in Dhaka. Built for Dhaka.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Burger Xpress started as a single outlet with a big dream: serve Dhaka
                the kind of burger that actually tastes like a burger. Not a frozen patty,
                not a fast-food replica — a real, hand-crafted, flavour-forward experience
                at a price everyone could afford.
              </p>
              <p>
                The response was immediate. Customers kept coming back. Reviews piled up.
                Word spread. Within months, we opened a second branch. Then a third. Today,
                with 7 branches across Dhaka — Dhanmondi, Uttara, Mirpur, Baily Road,
                Banani, Mohammadpur, and Badda — Burger Xpress has become a staple of
                Dhaka&apos;s fast-casual food scene.
              </p>
              <p>
                Our tagline is <strong className="text-white">Flavor Fusion</strong>. It
                describes exactly what we do: take classic comfort food and elevate it with
                bold sauces, quality proteins, and a kitchen team that genuinely cares about
                what lands on your plate.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-blue/20 to-blue-900/20 rounded-2xl border border-white/10 aspect-square flex items-center justify-center">
            <BurgerIcon size={160} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4"
              >
                <span className="shrink-0 mt-0.5"><ValueIcon name={icon} size={36} /></span>
                <div>
                  <p className="text-white font-semibold text-base mb-1.5">{title}</p>
                  <p
                    className="text-gray-400 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-brand-blue rounded-2xl py-10 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "7", label: "Branches" },
              { value: "4.8", label: "Rating" },
              { value: "2,000+", label: "Reviews" },
              { value: "100%", label: "Halal" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-white">{value}</p>
                <p className="text-blue-200 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Halal certification */}
        <div className="mt-10 bg-green-950/40 border border-green-900/50 rounded-2xl p-8 text-center">
          <span className="mb-2 flex justify-center"><MedalIcon size={72} /></span>
          <h3 className="text-white font-bold text-xl mb-2">Halal Certified</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Burger Xpress operates under strict Halal certification. All meats are sourced
            from certified halal suppliers and all kitchen processes maintain halal integrity
            from prep to plate.
          </p>
          <span className="inline-flex items-center gap-2 mt-5 bg-green-900/40 text-green-400 border border-green-800 text-sm font-medium px-4 py-2 rounded-full">
            <HalalDot /> 100% Halal — No Exceptions
          </span>
        </div>

        {/* Contact / Find us */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <a
            href="/locations"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/40 rounded-2xl p-6 flex items-center gap-4 transition-all"
          >
            <LocationPinIcon size={36} />
            <div>
              <p className="text-white font-semibold group-hover:text-brand-orange transition-colors">
                Find a Branch
              </p>
              <p className="text-gray-500 text-sm">7 locations across Dhaka</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/BurgerXpressbd"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/40 rounded-2xl p-6 flex items-center gap-4 transition-all"
          >
            <FacebookIcon size={36} />
            <div>
              <p className="text-white font-semibold group-hover:text-brand-orange transition-colors">
                Follow on Facebook
              </p>
              <p className="text-gray-500 text-sm">@BurgerXpressbd · 78,000+ fans</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
