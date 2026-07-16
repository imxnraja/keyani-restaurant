import { Link } from "react-router-dom";
import { reviews, overallRating } from "../../data/reviews";
import StarRating from "../ui/StarRating";
import useReveal from "../../hooks/useReveal";

export default function ReviewsPreview() {
  const ref = useReveal();

  // Curate a mix of Branch 1 (Aslam Market) and Branch 2 (GT Road) reviews
  const featuredReviews = [reviews[0], reviews[3], reviews[4]].filter(Boolean);

  return (
    <section className="section bg-bg-2 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div ref={ref} className="reveal text-center mb-16">
          <span className="eyebrow">Testimonials</span>
          <h2
            className="font-serif-alt font-semibold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Loved by Our Regulars
          </h2>
          <div className="ornament">
            <div className="ornament-line" />
            <div className="ornament-dot" />
            <div className="ornament-line rev" />
          </div>

          {/* Rating display */}
          <div className="flex flex-col items-center mt-8 gap-2">
            <p
              className="font-serif-alt font-semibold text-gradient"
              style={{ fontSize: "5rem", lineHeight: 1, fontStyle: "italic" }}
            >
              {overallRating.score}
            </p>
            <StarRating rating={overallRating.score} size={20} />
            <p className="text-[11px] text-gold-light uppercase tracking-[0.3em] mt-2 font-semibold">
              Based on {overallRating.count}+ Google Reviews
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredReviews.map((r, i) => (
            <div
              key={r.id}
              className="premium-card p-7 flex flex-col"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Card Header with Quotation and Branch Label */}
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
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full gradient-orange flex items-center justify-center border border-orange/20 shadow-orange-sm">
                    <span className="font-display text-white text-base font-bold">{r.name.charAt(0)}</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-gold rounded-full border-2 border-bg-card flex items-center justify-center">
                    <span className="text-black text-[7px] font-bold">★</span>
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-white/80 block tracking-wide">{r.name}</span>
                  <span className="text-[11px] text-gold-light font-medium block mt-0.5">{r.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/reviews" className="btn-ghost">
            View All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
