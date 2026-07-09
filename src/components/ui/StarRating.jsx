import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
export default function StarRating({ rating = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" style={{ color: "#E8630A" }}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < Math.floor(rating)) return <FaStar key={i} size={size} />;
        if (i < rating) return <FaStarHalfAlt key={i} size={size} />;
        return <FaRegStar key={i} size={size} />;
      })}
    </div>
  );
}
