import { GiChefToque, GiFarmTractor, GiCook } from "react-icons/gi";
import { MdOutlineCleanHands } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import useReveal from "../../hooks/useReveal";
import interior from "../../assets/images/restaurant-interior.jpg";

const values = [
  { icon: GiFarmTractor,        title: "Fresh Ingredients",  text: "Meat and produce sourced daily from trusted local suppliers." },
  { icon: GiCook,               title: "Traditional Recipes", text: "Family recipes cooked the way they were meant to be." },
  { icon: GiChefToque,          title: "Family Environment", text: "A warm dining room built for gatherings, big and small." },
  { icon: MdOutlineCleanHands,  title: "Hygienic Kitchen",   text: "Open, spotless kitchen — see exactly how your food is made." },
  { icon: FaBolt,               title: "Fast Service",       text: "Attentive staff and a kitchen built for quick quality turnaround." },
];

export default function About() {
  const refL = useReveal();
  const refR = useReveal();

  return (
    <section className="section bg-bg-2 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — Image */}
        <div ref={refL} className="reveal-left relative">
          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden shadow-dark">
            <img
              src={interior}
              alt="Keyani Restaurant Interior"
              className="w-full h-[500px] object-cover object-bottom transition-transform duration-[8s] hover:scale-105"
              loading="lazy"
            />
            {/* Multi-layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/8" />
          </div>

          {/* Floating "Est." badge */}
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full gradient-orange flex flex-col items-center justify-center shadow-orange-lg rotate-12">
            <span className="text-white/80 text-[9px] font-bold tracking-[0.3em] uppercase">Est.</span>
            <span className="font-display text-2xl font-bold text-white leading-none">1985</span>
          </div>

          {/* Floating years badge */}
          <div
            className="absolute -bottom-6 right-6 glass-card px-7 py-5"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
          >
            <p className="font-serif-alt text-5xl font-semibold text-gradient" style={{ fontStyle: "italic" }}>15+</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 font-bold mt-1">Years of Flavour</p>
          </div>
        </div>

        {/* RIGHT — Copy */}
        <div ref={refR} className="reveal-right">
          <span className="eyebrow">Our Story</span>

          <h2
            className="font-serif-alt font-semibold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            A Table Built on<br />
            <em className="text-gradient" style={{ fontStyle: "italic" }}>Tradition</em>
          </h2>

          <p className="text-white/50 leading-[1.9] mb-4 text-base font-light">
            Keyani Restaurant began as a single tandoor and a family recipe book. Today we still cook the same way — slow-marinated meats, hand-ground spices, and a kitchen that never cuts corners.
          </p>
          <p className="text-white/35 leading-[1.9] mb-10 text-sm font-light">
            Every dish that reaches your table tastes like it was made for you alone — because it was.
          </p>

          {/* Gold divider */}
          <div className="gold-line mb-10 w-24" />

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="premium-card p-4 flex items-start gap-3.5 cursor-default"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-orange/8 border border-orange/12 flex items-center justify-center text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                  <v.icon size={18} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-white/90 tracking-wide mb-0.5">{v.title}</h3>
                  <p className="text-[12px] text-white/35 leading-relaxed font-light">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
