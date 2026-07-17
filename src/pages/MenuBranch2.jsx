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
      {/* Page Hero */}
      <div className="page-hero px-6 pb-6">
        <Link to="/menu" className="flex w-fit mx-auto items-center gap-1.5 text-gold-accent hover:text-orange text-[11px] font-bold uppercase tracking-widest mb-8 transition-colors">
          ← All Branches
        </Link>
        <span className="eyebrow">Branch 2 — GT Road</span>
        <h1 className="page-hero-title">Menu &amp; Prices</h1>

        <div className="flex items-center justify-center flex-wrap gap-6 mt-5">
          <span className="flex items-center gap-1.5 text-luxury-medium text-xs font-semibold">
            <HiLocationMarker size={12} className="text-orange" />GT Road, Wah Cantt
          </span>
          <span className="flex items-center gap-1.5 text-luxury-medium text-xs font-semibold">
            <HiPhone size={11} className="text-orange" />0302 2264444
          </span>
          <span className="text-luxury-medium text-xs font-semibold">🕐 12:00 PM – 2:00 AM</span>
        </div>
        <p className="text-gold-light mt-2 text-[11px] tracking-wide font-medium">All prices in PKR · Dine-in, Takeaway &amp; Delivery</p>
      </div>

      {/* Events Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-6">
        <div className="relative rounded-2xl overflow-hidden border border-orange/20 bg-gradient-to-r from-orange/10 via-orange/5 to-transparent p-5 flex flex-col sm:flex-row items-center gap-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(249,115,22,0.12),transparent_65%)] pointer-events-none" />
          <div className="relative w-12 h-12 rounded-2xl gradient-orange flex items-center justify-center shadow-orange-sm shrink-0">
            <MdEventAvailable size={22} className="text-white" />
          </div>
          <div className="relative flex-1 text-center sm:text-left">
            <p className="text-sm font-bold text-white">Events &amp; Reservations Available</p>
            <p className="text-xs text-luxury-medium mt-0.5 font-medium">
              We have a <span className="text-orange font-semibold">Private Room</span> &amp; a beautiful <span className="text-orange font-semibold">Rooftop Terrace</span> — weddings, birthdays, corporate &amp; more.
            </p>
          </div>
          <Link to="/reservation" className="relative shrink-0 btn-orange text-sm px-5 py-2.5 rounded-xl whitespace-nowrap">
            Book Now →
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 mt-8">

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {branch2Categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 px-5 py-2.5 rounded-xl text-[12px] font-bold border transition-all duration-300 whitespace-nowrap tracking-wide ${
                active === cat.id
                  ? "bg-white text-black border-white shadow-dark"
                  : "bg-white/3 border-white/7 text-white/40 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {active === "breakfast" && (
          <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-orange/20 bg-orange/8 px-4 py-3">
            <span className="text-orange text-sm shrink-0">🕐</span>
            <p className="text-xs text-orange-light font-semibold">Breakfast served on weekends only (Saturday &amp; Sunday).</p>
          </div>
        )}

        {/* Menu table */}
        <div className="rounded-2xl overflow-hidden border border-white/7">
          <div className="grid grid-cols-12 px-6 py-4 bg-bg-3 border-b border-white/5">
            <span className="col-span-7 text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold">Item</span>
            <span className="col-span-3 text-center text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold">Size</span>
            <span className="col-span-2 text-right text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold">Price</span>
          </div>
          <div className="divide-y divide-white/4 max-h-[65vh] overflow-y-auto bg-bg-card">
            {Object.entries(grouped).map(([name, variants]) =>
              variants.length === 1 ? (
                <div key={variants[0].id} className="menu-row group">
                  <div className="col-span-7">
                    <p className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors">{variants[0].name}</p>
                    <p className="text-xs text-white/22 mt-0.5 font-light">{variants[0].unit}</p>
                    {variants[0].desc && (
                      <p className="text-[11px] text-white/30 mt-1 leading-relaxed">{variants[0].desc}</p>
                    )}
                  </div>
                  <div className="col-span-3 text-center">
                    <span className="text-xs text-white/18">—</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="font-bold text-orange text-sm">{variants[0].price != null ? `Rs. ${variants[0].price.toLocaleString()}` : "—"}</span>
                  </div>
                </div>
              ) : (
                <div key={name} className="divide-y divide-white/3">
                  {variants.map((item, idx) => (
                    <div key={item.id} className="menu-row">
                      <div className="col-span-7">
                        <p className={`text-sm transition-colors ${idx === 0 ? "font-semibold text-white/75" : "text-white/35 font-light"}`}>{item.name}</p>
                        {item.pieces && <p className="text-[10px] text-white/20 mt-0.5">{item.pieces}</p>}
                      </div>
                      <div className="col-span-3 text-center">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${item.unit === "full" ? "bg-orange/12 text-orange border border-orange/20" : "bg-white/5 text-white/35 border border-white/8"}`}>
                          {item.unit === "full" ? "Full" : item.unit === "half" ? "Half" : item.unit}
                        </span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="font-bold text-orange text-sm">{item.price != null ? `Rs. ${item.price.toLocaleString()}` : "—"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>

        {/* Order CTA */}
        <div className="mt-10 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-orange" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent)]" />
          <div className="relative p-10 text-center">
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-3">Ready to Dine?</p>
            <h3 className="font-display text-3xl font-bold text-white mb-2" style={{ letterSpacing: "-0.01em" }}>Place Your Order</h3>
            <p className="text-white/60 text-sm mt-1 mb-7 font-light">Delivered straight to your door from Branch 2.</p>
            <Link to="/order" className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3.5 rounded-xl hover:bg-orange hover:text-white transition-all duration-300 text-sm tracking-wide shadow-dark">
              Order Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
