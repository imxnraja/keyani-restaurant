import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
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
  },
];

export default function Menu() {
  useEffect(() => { document.title = "Menu | Keyani Restaurant"; }, []);

  return (
    <div className="min-h-screen bg-bg">

      {/* Page Hero */}
      <div className="page-hero px-6">
        <span className="eyebrow">Our Branches</span>
        <h1 className="page-hero-title">Choose a Branch</h1>
        <p className="text-luxury-medium mt-4 text-sm font-medium max-w-md mx-auto leading-relaxed">
          Each branch has its own curated menu. Select your nearest location to explore dishes &amp; prices.
        </p>
        <div className="ornament">
          <div className="ornament-line" />
          <div className="ornament-dot" />
          <div className="ornament-line rev" />
        </div>
      </div>

      {/* Branch cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-8">
          {branches.map((b, i) => (
            <div
              key={b.id}
              className="luxury-card p-8 flex flex-col"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Event badge */}
              {b.hasEvents && (
                <div className="flex items-center gap-1.5 bg-orange/10 border border-orange/20 text-orange text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit mb-5">
                  <MdEventAvailable size={11} />
                  Events & Reservations
                </div>
              )}

              {/* Tag */}
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange/70 mb-2">{b.tag}</span>

              {/* Name */}
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                {b.name}
              </h2>

              {/* Info */}
              <div className="flex flex-col gap-2.5 mb-7">
                {[
                  { icon: HiLocationMarker, text: b.address },
                  { icon: HiPhone,         text: b.phone },
                  { icon: null,            text: `🕐 ${b.hours}` },
                ].map((item, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    {item.icon && <item.icon size={13} className="text-orange shrink-0" />}
                    <span className="text-sm text-luxury-medium font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="gold-line mb-6" />

              {/* Menu teaser */}
              <p className="text-[10px] font-bold text-gold-accent uppercase tracking-[0.3em] mb-3">Available Menu</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {b.features.map(f => (
                  <span
                    key={f}
                    className="text-[11px] bg-orange/8 border border-orange/20 text-orange-light px-3.5 py-1 rounded-full font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-xs text-luxury-muted mb-7 italic">{b.note}</p>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Link to={b.href} className="btn-primary w-full text-center justify-center rounded-2xl">
                  View Full Menu →
                </Link>
                {b.hasEvents && (
                  <Link
                    to="/reservation"
                    className="btn-ghost w-full justify-center rounded-2xl"
                  >
                    <MdEventAvailable size={15} />
                    Book an Event / Reservation
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-10 rounded-2xl border border-white/5 bg-white/1.5 px-7 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-3xl shrink-0">🍖</span>
          <div>
            <p className="text-sm font-semibold text-white/50">All prices are in PKR · Dine-in, Takeaway &amp; Delivery available</p>
            <p className="text-xs text-white/20 mt-1 font-light">Call the branch for bulk order pricing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
