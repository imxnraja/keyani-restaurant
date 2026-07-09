import { GiChefToque, GiFarmTractor, GiCook } from "react-icons/gi";
import { MdOutlineCleanHands } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import useReveal from "../../hooks/useReveal";
import interior from "../../assets/images/restaurant-interior.jpg";

const values = [
  { icon: GiFarmTractor, title: "Fresh Ingredients", text: "Meat and produce sourced daily from trusted local suppliers." },
  { icon: GiCook, title: "Traditional Recipes", text: "Family recipes cooked the way they were meant to be." },
  { icon: GiChefToque, title: "Family Environment", text: "A warm dining room built for gatherings, big and small." },
  { icon: MdOutlineCleanHands, title: "Hygienic Kitchen", text: "Open, spotless kitchen — see exactly how your food is made." },
  { icon: FaBolt, title: "Fast Service", text: "Attentive staff and a kitchen built for quick quality turnaround." },
];

export default function About() {
  const refL = useReveal();
  const refR = useReveal();

  return (
    <section className="section bg-bg-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        <div ref={refL} className="reveal-left relative">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={interior}
              alt="Keyani Restaurant Interior" className="w-full h-[460px] object-cover object-bottom" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-3 sm:right-6 glass-card px-6 py-4 shadow-dark">
            <p className="font-display text-4xl font-bold text-gradient">15+</p>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-0.5">Years of Flavour</p>
          </div>
          {/* Small accent */}
          <div className="absolute top-6 left-6 bg-orange/90 backdrop-blur-sm rounded-xl px-3 py-1.5">
            <p className="text-white text-xs font-bold tracking-wide">Est. 1985</p>
          </div>
        </div>

        <div ref={refR} className="reveal-right">
          <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
            <span className="w-6 h-px bg-orange" /> Our Story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            A Table Built on<br /><span className="text-gradient">Tradition</span>
          </h2>
          <p className="text-white/45 leading-relaxed mb-8 text-sm sm:text-base">
            Keyani Restaurant began as a single tandoor and a family recipe book. Today we still cook the same way — slow-marinated meats, hand-ground spices, and a kitchen that never cuts corners — so every dish that reaches your table tastes like it was made for you alone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v.title} className="premium-card p-4 flex items-start gap-3 cursor-default">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-orange/10 border border-orange/15 flex items-center justify-center text-orange">
                  <v.icon size={17} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-white/35 mt-0.5 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
