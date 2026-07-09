import { useEffect, useMemo, useState } from "react";
import { branch2Categories, branch2Items } from "../data/menuData";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { MdEventAvailable } from "react-icons/md";

export default function MenuBranch2() {
  useEffect(() => { document.title = "Menu — Branch 2 (GT Road) | Keyani Restaurant"; }, []);
  const [active, setActive] = useState("bbq");

  const filtered = useMemo(() => branch2Items.filter(i => i.category === active), [active]);
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach(item => {
      if (!map[item.name]) map[item.name] = [];
      map[item.name].push(item);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero header */}
      <div className="relative pt-32 pb-4 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.08)_0%,transparent_60%)] pointer-events-none" />

        {/* Back link */}
        <Link to="/menu" className="inline-flex items-center gap-1.5 text-white/30 hover:text-orange text-xs font-semibold uppercase tracking-widest mb-6 transition-colors">
          ← All Branches
        </Link>

        <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-3 block">
          <span className="w-6 h-px bg-orange" /> Branch 2 — GT Road <span className="w-6 h-px bg-orange" />
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white">Menu &amp; Prices</h1>

        {/* Branch info */}
        <div className="flex items-center justify-center flex-wrap gap-5 mt-5">
          <span className="flex items-center gap-1.5 text-white/35 text-xs">
            <HiLocationMarker size={13} className="text-orange" />
            GT Road, Wah Cantt
          </span>
          <span className="flex items-center gap-1.5 text-white/35 text-xs">
            <HiPhone size={12} className="text-orange" />
            0302 2264444
          </span>
          <span className="text-white/35 text-xs">🕐 12:00 PM – 2:00 AM</span>
        </div>
        <p className="text-white/25 mt-2 text-xs">All prices in PKR · Dine-in, Takeaway &amp; Delivery</p>
      </div>

      {/* Events Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        <div className="relative rounded-2xl overflow-hidden border border-orange/20 bg-gradient-to-r from-orange/10 via-orange/5 to-transparent p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(232,99,10,0.15),transparent_70%)] pointer-events-none" />
          <div className="relative w-12 h-12 rounded-2xl gradient-orange flex items-center justify-center shadow-orange-sm shrink-0">
            <MdEventAvailable size={22} className="text-white" />
          </div>
          <div className="relative flex-1 text-center sm:text-left">
            <p className="text-sm font-bold text-white">🎉 Events &amp; Reservations Available at This Branch</p>
            <p className="text-xs text-white/40 mt-0.5">We have a dedicated <span className="text-orange font-semibold">Private Room</span> &amp; a beautiful <span className="text-orange font-semibold">Terrace</span> — perfect for weddings, birthdays, corporate gatherings &amp; more.</p>
          </div>
          <Link
            to="/reservation"
            className="relative shrink-0 gradient-orange text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-orange-sm hover:shadow-orange-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Book Now →
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 mt-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {branch2Categories.map(cat => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 whitespace-nowrap ${
                active === cat.id
                  ? "gradient-orange border-transparent text-white shadow-orange-sm"
                  : "bg-white/3 border-white/8 text-white/50 hover:border-orange/40 hover:text-orange"
              }`}>
              {cat.label}
              {cat.id === "desserts" && (
                <span className="ml-2 text-[9px] bg-orange/20 text-orange px-1.5 py-0.5 rounded-full uppercase tracking-wide font-bold">New</span>
              )}
            </button>
          ))}
        </div>

        {/* Menu table */}
        <div className="rounded-2xl overflow-hidden border border-white/8">
          {/* Header */}
          <div className="grid grid-cols-12 px-6 py-3 bg-bg-3 border-b border-white/6">
            <span className="col-span-7 text-xs uppercase tracking-widest text-white/30 font-bold">Item</span>
            <span className="col-span-3 text-center text-xs uppercase tracking-widest text-white/30 font-bold">Size</span>
            <span className="col-span-2 text-right text-xs uppercase tracking-widest text-white/30 font-bold">Price</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/4 max-h-[65vh] overflow-y-auto bg-bg-card">
            {Object.entries(grouped).map(([name, variants]) =>
              variants.length === 1 ? (
                <div key={variants[0].id} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-orange/4 transition-colors group">
                  <div className="col-span-7">
                    <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{variants[0].name}</p>
                    <p className="text-xs text-white/25 mt-0.5">{variants[0].unit}</p>
                  </div>
                  <div className="col-span-3 text-center">
                    <span className="text-xs text-white/20">—</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="font-bold text-orange text-sm">Rs. {variants[0].price.toLocaleString()}</span>
                  </div>
                </div>
              ) : (
                <div key={name} className="divide-y divide-white/3">
                  {variants.map((item, idx) => (
                    <div key={item.id} className="grid grid-cols-12 items-center px-6 py-3.5 hover:bg-orange/4 transition-colors">
                      <div className="col-span-7">
                        <p className={`text-sm transition-colors ${idx === 0 ? "font-semibold text-white/80" : "text-white/40"}`}>{item.name}</p>
                      </div>
                      <div className="col-span-3 text-center">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${item.unit === "full" ? "bg-orange/15 text-orange" : "bg-white/6 text-white/40"}`}>
                          {item.unit === "full" ? "Full" : item.unit === "half" ? "Half" : item.unit}
                        </span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="font-bold text-orange text-sm">Rs. {item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>

        {/* Order CTA */}
        <div className="mt-8 relative gradient-orange rounded-2xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <h3 className="font-display text-2xl font-bold text-white">Ready to Order?</h3>
          <p className="text-white/70 text-sm mt-2">Order from Branch 2 — delivered straight to your door.</p>
          <Link to="/order" className="inline-flex items-center gap-2 bg-white text-orange font-bold px-8 py-3.5 rounded-xl mt-5 hover:bg-orange-50 transition-colors text-sm shadow-dark">
            Order Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
