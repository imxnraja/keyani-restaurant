import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import storefront from "../../assets/images/keyani-storefront.jpg";

const HeroParticles = lazy(() => import("./HeroParticles"));

const stats = [
  { value: "1M+", label: "Happy Guests" },
  { value: "4★", label: "Google Rating" },
  { value: "2", label: "Branches" },
  { value: "1985", label: "Est." },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={storefront} alt="Keyani Restaurant" className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8s] hover:scale-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-bg/40" />
      </div>

      <Suspense fallback={null}><HeroParticles /></Suspense>

      {/* Floating orange orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange/6 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange/4 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold">Now Open · Wah Cantt</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight animate-fadeUp delay-100">
          Authentic<br />
          <span className="text-gradient">Pakistani Taste</span>
        </h1>
        <p className="mt-2 font-display text-2xl sm:text-3xl text-white/40 font-normal italic animate-fadeUp delay-200">
          Since Day One
        </p>

        <p className="mt-7 text-white/55 text-base sm:text-lg max-w-lg mx-auto leading-relaxed animate-fadeUp delay-300">
          Fresh BBQ · Traditional Karahi · Tawa Specials · Family Dining
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp delay-400">
          <Link to="/menu"
            className="group relative px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm tracking-wide uppercase hover:border-orange/50 hover:bg-orange/10 transition-all duration-300 backdrop-blur-sm">
            Explore Menu
          </Link>
          <Link to="/order"
            className="group relative gradient-orange text-white px-8 py-4 rounded-xl font-semibold text-sm tracking-wide uppercase shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
            Order Now →
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-4 gap-2 sm:gap-6 max-w-xl mx-auto animate-fadeUp delay-500">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-xl sm:text-2xl font-bold text-orange">{s.value}</span>
              <span className="text-[10px] sm:text-xs text-white/35 uppercase tracking-wider mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
