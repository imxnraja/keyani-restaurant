import { useEffect, useMemo, useState } from "react";
import { branch1Categories, branch1Items, categoryVisuals } from "../data/menuData";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiPhone, HiArrowRight } from "react-icons/hi";

export default function MenuBranch1() {
  useEffect(() => { document.title = "Menu — Branch 1 (Aslam Market) | Keyani Restaurant"; }, []);
  const [active, setActive] = useState("bbq");

  const filtered = useMemo(() => branch1Items.filter(i => i.category === active), [active]);
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
      <div className="page-hero px-6">
        <Link to="/menu" className="flex w-fit mx-auto items-center gap-1.5 text-gold-accent hover:text-orange text-[11px] font-bold uppercase tracking-widest mb-8 transition-colors">
          ← All Branches
        </Link>
        <span className="eyebrow">Branch 1 — Aslam Market</span>
        <h1 className="page-hero-title">Menu &amp; Prices</h1>

        {/* Branch meta */}
        <div className="flex items-center justify-center flex-wrap gap-6 mt-5">
          <span className="flex items-center gap-1.5 text-luxury-medium text-xs font-semibold">
            <HiLocationMarker size={12} className="text-orange" />Aslam Market, Wah Cantt
          </span>
          <span className="flex items-center gap-1.5 text-luxury-medium text-xs font-semibold">
            <HiPhone size={11} className="text-orange" />0302 5202020
          </span>
          <span className="text-luxury-medium text-xs font-semibold">🕐 8:30 AM – 12:00 AM</span>
        </div>
        <p className="text-gold-light mt-2 text-[11px] tracking-wide font-medium">All prices in PKR · Dine-in, Takeaway &amp; Delivery</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 mt-6">

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {branch1Categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-xl text-[12px] font-bold border transition-all duration-300 whitespace-nowrap tracking-wide ${
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
            <p className="text-xs text-orange-light font-semibold">Breakfast served until 12:00 PM only.</p>
          </div>
        )}
        {active === "ready-to-eat" && (
          <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-orange/20 bg-orange/8 px-4 py-3">
            <span className="text-orange text-sm shrink-0">🍳</span>
            <p className="text-xs text-orange-light font-semibold">Note: Rs. 50 extra will be charged for the Fry version of Ready to Eat Salan.</p>
          </div>
        )}
        {(active === "winter-fish" || active === "soup") && (
          <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3">
            <span className="text-red-400 text-sm shrink-0">⚠️</span>
            <p className="text-xs text-red-400 font-semibold">This category is not available in summers.</p>
          </div>
        )}

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([name, variants]) => {
            const visual = categoryVisuals[variants[0].category];
            return (
              <div key={name} className="rounded-2xl overflow-hidden border border-white/8 bg-bg-card group hover:border-orange/30 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-3">
                  {visual?.image ? (
                    <img
                      src={visual.image}
                      alt={name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">{visual?.icon ?? "🍽️"}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-white/90 leading-tight">{name}</p>
                  {variants[0].desc && (
                    <p className="text-[11px] text-white/30 mt-1 leading-relaxed">{variants[0].desc}</p>
                  )}
                  <div className="mt-3 space-y-1.5">
                    {variants.map(v => (
                      <div key={v.id} className="flex items-center justify-between gap-2">
                        <span className="text-[11px] text-white/35 whitespace-nowrap">
                          {v.unit === "full" ? "Full" : v.unit === "half" ? "Half" : v.unit}
                          {v.pieces ? ` · ${v.pieces}` : ""}
                        </span>
                        <span className="font-bold text-orange text-sm whitespace-nowrap">{v.price != null ? `Rs. ${v.price.toLocaleString()}` : "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order CTA */}
        <div className="mt-10 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-orange" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent)]" />
          <div className="relative p-10 text-center">
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-3">Ready to Dine?</p>
            <h3 className="font-display text-3xl font-bold text-white mb-2" style={{ letterSpacing: "-0.01em" }}>Place Your Order</h3>
            <p className="text-white/60 text-sm mt-1 mb-7 font-light">Delivered straight to your door.</p>
            <Link to="/order" className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3.5 rounded-xl hover:bg-orange hover:text-white transition-all duration-300 text-sm tracking-wide shadow-dark">
              Order Now →
            </Link>
          </div>
        </div>

        {/* Branch 2 teaser */}
        <div className="mt-6 rounded-2xl border border-white/5 bg-white/2 p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="text-3xl shrink-0">🎉</div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-white/50">Looking for Shinwari, Tawa Special, Shakes, or Events?</p>
            <p className="text-xs text-white/25 mt-1 font-light leading-relaxed">
              Branch 2 (GT Road) offers a fuller menu including Shinwari Karahi, Tawa dishes, Bar &amp; Shakes, and a dedicated Events facility with Private Room &amp; Terrace.
            </p>
          </div>
          <Link to="/menu/branch2" className="shrink-0 flex items-center gap-2 border border-orange/25 text-orange text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-orange/8 transition-all">
            Branch 2 <HiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
