import { Link } from "react-router-dom";
import { specialDishes } from "../../data/dishes";
import useReveal from "../../hooks/useReveal";

export default function SpecialDishes() {
  const ref = useReveal();

  return (
    <section className="section bg-bg relative overflow-hidden">
      {/* Subtle center radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div ref={ref} className="reveal text-center mb-16">
          <span className="eyebrow">Signature Plates</span>
          <h2
            className="font-serif-alt font-semibold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Our Special Dishes
          </h2>
          <div className="ornament">
            <div className="ornament-line" />
            <div className="ornament-dot" />
            <div className="ornament-line rev" />
          </div>
          <p className="text-white/35 text-sm mt-4 font-light max-w-md mx-auto leading-relaxed">
            Each dish is a labour of love, crafted from recipes passed down through generations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {specialDishes.map((dish, i) => (
            <div
              key={dish.id}
              className="luxury-card group"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden rounded-t-3xl">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ transformOrigin: "center" }}
                />
                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/20 to-transparent" />

                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                  {dish.price}
                </div>

                {/* Category pill */}
                <div className="absolute bottom-4 left-4 bg-orange/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Signature
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="font-display text-xl font-bold text-white mb-3 group-hover:text-orange/90 transition-colors duration-300"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {dish.name}
                </h3>
                <p className="text-white/38 text-sm leading-[1.8] mb-6 font-light">{dish.description}</p>

                {/* CTA */}
                <Link
                  to="/order"
                  className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-wide group/link"
                >
                  <span className="border-b border-orange/0 group-hover/link:border-orange/70 pb-px transition-all duration-300">Order Now</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link to="/menu" className="btn-ghost">
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
