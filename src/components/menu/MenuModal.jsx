import { useEffect } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function MenuModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-forest-dark/95 backdrop-blur-sm flex items-center justify-center px-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-6 right-6 text-cream/70 hover:text-gold text-3xl"
      >
        <HiX />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-3 sm:left-8 text-cream/70 hover:text-gold text-3xl p-2"
      >
        <HiChevronLeft />
      </button>

      <div
        className="max-w-3xl w-full max-h-[80vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[70vh] w-auto object-contain rounded-sm shadow-2xl transition-transform duration-500 scale-100"
        />
        <p className="text-cream font-display text-xl mt-5">{item.title}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-3 sm:right-8 text-cream/70 hover:text-gold text-3xl p-2"
      >
        <HiChevronRight />
      </button>
    </div>
  );
}
