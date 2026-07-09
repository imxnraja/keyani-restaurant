import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} aria-label="Back to top"
      className={`fixed bottom-7 right-7 z-40 w-12 h-12 rounded-full gradient-orange text-white shadow-orange-md flex items-center justify-center transition-all duration-400 hover:-translate-y-1 hover:shadow-orange-lg ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <HiArrowUp size={18} />
    </button>
  );
}
