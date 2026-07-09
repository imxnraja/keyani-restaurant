// Signature element: a hand-drawn brass paisley motif — a nod to Pakistani
// mehndi & textile ornamentation — used sparingly as a section punctuation mark.
export default function GoldDivider({ inverted = false }) {
  const stroke = inverted ? "#D4AF37" : "#A6842A";

  return (
    <div className="flex items-center justify-center gap-4 my-2" aria-hidden="true">
      <span className={`h-px w-12 sm:w-20 ${inverted ? "bg-gold/50" : "bg-forest/20"}`} />
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path
          d="M17 3C10 6 8 12 12 17C16 22 14 27 8 29C16 31 24 26 23 18C22 11 27 8 31 9C27 4 21 2 17 3Z"
          stroke={stroke}
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="17" cy="17" r="1.6" fill={stroke} />
      </svg>
      <span className={`h-px w-12 sm:w-20 ${inverted ? "bg-gold/50" : "bg-forest/20"}`} />
    </div>
  );
}
