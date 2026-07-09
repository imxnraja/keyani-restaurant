import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reservation" },
  { to: "/order", label: "Order" },
  { to: "/reviews", label: "Reviews" },
  { to: "/feedback", label: "Feedback" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-dark py-3" : "bg-transparent py-5"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="relative">
              <img src={logo} alt="Keyani" className="h-11 w-11 rounded-full object-cover border-2 border-orange/50 transition-all duration-300 group-hover:border-orange group-hover:shadow-orange-sm" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-orange rounded-full border-2 border-bg animate-pulse-ring" />
            </div>
            <div className="leading-none">
              <span className="font-display text-xl font-bold text-white block">Keyani</span>
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-orange">Restaurant</span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActive ? "text-orange bg-orange/10" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`
                }>
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/order" className="gradient-orange text-white px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide shadow-orange-sm hover:shadow-orange-md hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
              Order Now <span>→</span>
            </Link>
          </div>

          <button className="lg:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-orange/50 hover:bg-orange/10 transition-all"
            onClick={() => setOpen(o => !o)}>
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0 bg-bg" />
        <div className="relative h-full flex flex-col items-center justify-center gap-1 px-8">
          <img src={logo} alt="Keyani" className="h-20 w-20 rounded-full object-cover border-4 border-orange shadow-orange-md mb-8" />
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
              className={({ isActive }) => `w-full text-center py-4 font-display text-2xl font-bold rounded-2xl transition-all duration-300 ${isActive ? "text-orange bg-orange/10" : "text-white/70 hover:text-orange hover:bg-orange/5"}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/order" onClick={() => setOpen(false)}
            className="mt-6 w-full gradient-orange text-white py-4 rounded-2xl font-bold text-center shadow-orange-md text-lg">
            Order Now →
          </Link>
        </div>
      </div>
    </>
  );
}
