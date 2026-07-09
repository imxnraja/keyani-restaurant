import { useMemo, useState } from "react";
import { menuCategories, menuImages } from "../../data/menuImages";
import MenuModal from "./MenuModal";

export default function MenuGallery() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () =>
      category === "All" ? menuImages : menuImages.filter((m) => m.category === category),
    [category]
  );

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  const goNext = () => setActiveIndex((i) => (i + 1) % filtered.length);
  const goPrev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {menuCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold rounded-full border transition-colors duration-300 ${
              category === c
                ? "bg-gold border-gold text-forest-dark"
                : "border-forest/20 text-forest-dark/70 hover:border-gold hover:text-gold-dark"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group relative rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 aspect-[4/5]"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/40 transition-colors duration-300 flex items-end p-5">
              <span className="text-cream font-display text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {item.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      <MenuModal item={activeItem} onClose={() => setActiveIndex(null)} onNext={goNext} onPrev={goPrev} />
    </div>
  );
}
