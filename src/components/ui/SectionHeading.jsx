import useReveal from "../../hooks/useReveal";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const ref = useReveal();
  const center = align === "center";

  return (
    <div ref={ref} className={`reveal flex flex-col mb-14 ${center ? "items-center text-center mx-auto" : "items-start text-left"} max-w-2xl`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
          {center && <span className="w-6 h-px bg-orange" />}
          {eyebrow}
          {center && <span className="w-6 h-px bg-orange" />}
          {!center && <span className="w-6 h-px bg-orange" />}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">{title}</h2>
      <div className={`flex items-center gap-2 mt-4 ${center ? "justify-center" : ""}`}>
        <span className="h-1 w-10 rounded-full bg-gradient-to-r from-orange-dark to-orange" />
        <span className="h-1 w-4 rounded-full bg-orange/30" />
      </div>
      {description && <p className="mt-5 text-white/45 text-base sm:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
