import { useEffect } from "react";
import { reviews, overallRating } from "../data/reviews";
import StarRating from "../components/ui/StarRating";

export default function Reviews() {
  useEffect(() => { document.title = "Reviews | Keyani Restaurant"; }, []);
  return (
    <div className="min-h-screen bg-bg">
      <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.07)_0%,transparent_60%)] pointer-events-none" />
        <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
          <span className="w-6 h-px bg-orange" /> Testimonials <span className="w-6 h-px bg-orange" />
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white">Customer Reviews</h1>
        <div className="flex flex-col items-center mt-8 gap-2">
          <p className="font-display text-7xl font-bold text-gradient">{overallRating.score}</p>
          <StarRating rating={overallRating.score} size={22} />
          <p className="text-xs text-white/30 uppercase tracking-widest mt-1">Based on {overallRating.count}+ Google Reviews</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map(r => (
          <div key={r.id} className="premium-card p-6">
            <StarRating rating={r.rating} />
            <p className="text-white/40 text-sm mt-4 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/6">
              <img src={r.image} alt={r.name} loading="lazy" className="w-11 h-11 rounded-full object-cover border-2 border-orange/25" />
              <span className="font-semibold text-sm text-white/70">{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
