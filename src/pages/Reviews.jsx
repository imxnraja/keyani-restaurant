import { useEffect, useState, useMemo } from "react";
import { reviews, overallRating } from "../data/reviews";
import StarRating from "../components/ui/StarRating";

export default function Reviews() {
  useEffect(() => { document.title = "Customer Reviews | Keyani Restaurant"; }, []);
  const [filter, setFilter] = useState("all");

  const filteredReviews = useMemo(() => {
    if (filter === "all") return reviews;
    return reviews.filter(r => r.branch === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-bg">
      {/* Page Hero */}
      <div className="page-hero px-6">
        <span className="eyebrow">Testimonials</span>
        <h1 className="page-hero-title">Customer Reviews</h1>
        <div className="ornament">
          <div className="ornament-line" />
          <div className="ornament-dot" />
          <div className="ornament-line rev" />
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center mt-8 gap-2">
          <p
            className="font-serif-alt font-semibold text-gradient"
            style={{ fontSize: "6rem", lineHeight: 1, fontStyle: "italic" }}
          >
            {overallRating.score}
          </p>
          <StarRating rating={overallRating.score} size={22} />
          <p className="text-[11px] text-gold-light uppercase tracking-[0.3em] mt-2 font-semibold">
            Based on {overallRating.count}+ Google Reviews
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 flex justify-center">
        <div className="flex gap-2 bg-bg-card border border-white/5 p-1.5 rounded-2xl">
          {[
            { id: "all", label: "All Reviews" },
            { id: "branch1", label: "Aslam Market (Branch 1)" },
            { id: "branch2", label: "GT Road (Branch 2)" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${filter === tab.id
                  ? "bg-white text-black shadow-md"
                  : "text-white/50 hover:text-white/80 hover:bg-white/3"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((r, i) => (
            <div
              key={r.id}
              className="premium-card p-7 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Card Header with Quotation and Branch Indicator */}
              <div className="flex justify-between items-start mb-2">
                <div
                  className="font-serif-alt text-7xl text-orange/15 leading-none select-none"
                  aria-hidden
                  style={{ fontStyle: "italic", lineHeight: 0.7 }}
                >
                  "
                </div>
                <span className="text-[9px] bg-orange/8 border border-orange/20 text-orange-light px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  {r.branch === "branch1" ? "Aslam Market" : "GT Road"}
                </span>
              </div>

              <StarRating rating={r.rating} />

              <p className="text-luxury-medium text-sm mt-4 leading-[1.9] font-medium italic flex-1">
                {r.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                <div className="relative">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border border-orange/20"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-orange rounded-full border-2 border-bg-card flex items-center justify-center">
                    <span className="text-white text-[7px] font-bold">★</span>
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-white/80 block tracking-wide">{r.name}</span>
                  <span className="text-[11px] text-gold-light font-medium block mt-0.5">{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
