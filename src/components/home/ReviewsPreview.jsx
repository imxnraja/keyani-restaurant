import { Link } from "react-router-dom";
import { reviews, overallRating } from "../../data/reviews";
import StarRating from "../ui/StarRating";
import useReveal from "../../hooks/useReveal";

export default function ReviewsPreview() {
  const ref = useReveal();

  return (
    <section className="section bg-bg-2 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-orange/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal text-center mb-14">
          <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
            <span className="w-6 h-px bg-orange" /> Testimonials <span className="w-6 h-px bg-orange" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Loved by Our Regulars</h2>
          <div className="flex flex-col items-center mt-6 gap-2">
            <p className="font-display text-6xl font-bold text-gradient">{overallRating.score}</p>
            <StarRating rating={overallRating.score} size={20} />
            <p className="text-xs text-white/30 uppercase tracking-widest mt-1">Based on {overallRating.count}+ Google Reviews</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0,3).map((r, i) => (
            <div key={r.id} className="premium-card p-6" style={{ transitionDelay:`${i*80}ms` }}>
              <StarRating rating={r.rating} />
              <p className="text-white/40 text-sm mt-4 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/6">
                <img src={r.image} alt={r.name} loading="lazy" className="w-10 h-10 rounded-full object-cover border-2 border-orange/30" />
                <span className="font-semibold text-sm text-white/80">{r.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/reviews" className="inline-flex items-center gap-2 border border-white/10 bg-white/3 hover:border-orange/40 hover:bg-orange/5 text-white/60 hover:text-orange px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300">
            View All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
