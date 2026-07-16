import { useEffect, useMemo, useState } from "react";
import { branch1Categories, branch1Items } from "../data/menuData";
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
          <span className="text-luxury-medium text-xs font-semibold">🕐 12:00 PM – 1:00 AM</span>
        </div>
        <p className="text-gold-light mt-2 text-[11px] tracking-wide font-medium">All prices in PKR · Dine-in, Takeaway &amp; Delivery</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 mt-6">

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {branch1Categories.map(cat => (
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

        {/* Menu table */}
        <div className="rounded-2xl overflow-hidden border border-white/7">
          {/* Header */}
          <div className="grid grid-cols-12 px-6 py-4 bg-bg-3 border-b border-white/5">
            <span className="col-span-7 text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold">Item</span>
            <span className="col-span-3 text-center text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold">Size</span>
            <span className="col-span-2 text-right text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold">Price</span>
          </div>

          {/* Rows */}
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
                      </div>
                      <div className="col-span-3 text-center">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${item.unit === "full" ? "bg-orange/12 text-orange border border-orange/20" : "bg-white/5 text-white/35 border border-white/8"}`}>
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
