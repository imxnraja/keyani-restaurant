import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiPhone, HiArrowRight } from "react-icons/hi";
import { MdEventAvailable } from "react-icons/md";

const branches = [
  {
    id: "branch1",
    tag: "Branch 1",
    name: "Aslam Market",
    address: "Aslam Market, Wah Cantt",
    phone: "0302 5202020",
    href: "/menu/branch1",
    hours: "12:00 PM – 1:00 AM",
    features: ["BBQ", "Karahi", "Chanay & Nehari", "Rice & Naan", "Raita & Salad", "Cold Drinks"],
    note: "Dine-in & Takeaway",
    hasEvents: false,
    accent: "from-orange-900/30 via-orange-800/10 to-transparent",
    badge: null,
  },
  {
    id: "branch2",
    tag: "Branch 2",
    name: "GT Road",
    address: "GT Road, Wah Cantt",
    phone: "0302 2264444",
    href: "/menu/branch2",
    hours: "12:00 PM – 2:00 AM",
    features: ["BBQ", "Karahi", "Tawa Special", "Chanay & Nehari", "Rice & Naan", "Desserts & more"],
    note: "Dine-in, Takeaway & Events",
    hasEvents: true,
    accent: "from-amber-900/30 via-orange-800/10 to-transparent",
    badge: "Events & Reservations",
  },
];

export default function Menu() {
  useEffect(() => { document.title = "Menu | Keyani Restaurant"; }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero header */}
      <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.09)_0%,transparent_65%)] pointer-events-none" />
        <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
          <span className="w-6 h-px bg-orange" /> Our Branches <span className="w-6 h-px bg-orange" />
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white">Choose a Branch</h1>
        <p className="text-white/35 mt-3 text-sm max-w-md mx-auto">
          Each branch has its own curated menu. Select your nearest branch to explore dishes &amp; prices.
        </p>
      </div>

      {/* Branch cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {branches.map((b, i) => (
            <div
              key={b.id}
              className="relative rounded-3xl border border-white/8 overflow-hidden bg-bg-card group hover:border-orange/30 transition-all duration-500"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100`} />

              {/* Event badge */}
              {b.hasEvents && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-orange/15 border border-orange/25 text-orange text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  <MdEventAvailable size={12} />
                  {b.badge}
                </div>
              )}

              <div className="relative p-7 sm:p-8">
                {/* Tag */}
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange mb-3 block">{b.tag}</span>

                {/* Name */}
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">{b.name}</h2>

                {/* Info */}
                <div className="flex flex-col gap-1.5 mb-6">
                  <div className="flex items-center gap-2">
                    <HiLocationMarker size={13} className="text-orange shrink-0" />
                    <span className="text-sm text-white/45">{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiPhone size={13} className="text-orange shrink-0" />
                    <span className="text-sm text-white/45 font-semibold">{b.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange shrink-0 text-xs">🕐</span>
                    <span className="text-sm text-white/45">{b.hours}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="orange-line mb-5" />

                {/* Menu teaser */}
                <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-3">Available Menu</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {b.features.map(f => (
                    <span key={f} className="text-xs bg-white/4 border border-white/8 text-white/50 px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Note */}
                <p className="text-xs text-white/25 mb-6 italic">{b.note}</p>

                {/* CTA buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={b.href}
                    className="relative gradient-orange text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-orange-sm hover:shadow-orange-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group/btn"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                    View Full Menu
                    <HiArrowRight size={16} />
                  </Link>

                  {b.hasEvents && (
                    <Link
                      to="/reservation"
                      className="border border-orange/30 bg-orange/5 text-orange font-semibold py-3 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 hover:bg-orange/12 hover:border-orange/50 transition-all duration-300"
                    >
                      <MdEventAvailable size={15} />
                      Book an Event / Reservation
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-10 rounded-2xl border border-white/6 bg-white/2 px-6 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-3xl">🍖</span>
          <div>
            <p className="text-sm font-semibold text-white/60">All prices are in PKR · Dine-in, Takeaway &amp; Delivery available</p>
            <p className="text-xs text-white/25 mt-1">Prices may vary slightly. Call the branch for latest pricing on bulk orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
