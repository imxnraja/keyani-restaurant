import { Link } from "react-router-dom";
import { specialDishes } from "../../data/dishes";
import useReveal from "../../hooks/useReveal";

export default function SpecialDishes() {
  const ref = useReveal();

  return (
    <section className="section bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,99,10,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal text-center mb-14">
          <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
            <span className="w-6 h-px bg-orange" /> Signature Plates <span className="w-6 h-px bg-orange" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">Our Special Dishes</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange" />
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialDishes.map((dish, i) => (
            <div key={dish.id} className="group relative rounded-3xl overflow-hidden bg-bg-card border border-white/6 hover:border-orange/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-dark"
              style={{ transitionDelay: `${i * 80}ms` }}>

              <div className="relative h-56 overflow-hidden">
                <img src={dish.image} alt={dish.name} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-orange-sm">{dish.price}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{dish.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{dish.description}</p>
                <Link to="/order" className="inline-flex items-center gap-2 text-orange text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  Order Now <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
