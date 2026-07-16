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
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass-dark py-3 shadow-dark"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group shrink-0" onClick={() => setOpen(false)}>
            <div className="relative">
              {/* Premium Double Ring Frame around logo */}
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gold/50 via-orange/40 to-gold/30 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
              <div className="absolute -inset-0.5 rounded-full border border-gold/15 group-hover:border-gold/30 transition-colors duration-500" />
              <img
                src={logo}
                alt="Keyani"
                className="h-10 w-10 rounded-full object-cover border border-transparent p-1 relative z-10 transition-transform duration-500 group-hover:scale-95"
              />
            </div>
            <div className="leading-none pt-0.5">
              <span className="font-serif-alt text-2xl font-semibold text-gold-light tracking-wide block transition-colors duration-500">
                Keyani
              </span>
              <span className="text-[9px] tracking-[0.55em] uppercase font-extrabold text-gold block mt-1 transition-colors duration-500 group-hover:text-orange-light">
                RESTAURANT
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 text-[13px] font-semibold rounded-lg transition-all duration-300 tracking-wide group ${
                      isActive
                        ? "text-orange bg-orange/8"
                        : "text-white/55 hover:text-white hover:bg-white/4"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {/* Active underline */}
                      <span
                        className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px rounded-full bg-orange transition-all duration-300 ${
                          isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-40"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden lg:block">
            <Link
              to="/order"
              className="btn-orange text-sm px-6 py-2.5"
            >
              Order Now →
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/4 flex items-center justify-center text-white hover:border-orange/50 hover:bg-orange/8 transition-all duration-300"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-bg" />
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative h-full flex flex-col items-center justify-center gap-1 px-8">
          {/* Logo in mobile menu */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gold/50 via-orange/40 to-gold/30 opacity-80 pointer-events-none" />
              <div className="absolute -inset-1 rounded-full border border-gold/25" />
              <img src={logo} alt="Keyani" className="h-24 w-24 rounded-full object-cover border border-transparent p-1.5 relative z-10 shadow-orange-md" />
            </div>
            <div className="text-center">
              <p className="font-serif-alt text-3xl font-bold text-white tracking-wide">Keyani</p>
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold font-extrabold mt-1">RESTAURANT</p>
            </div>
          </div>

          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-4 font-display text-2xl font-bold rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "text-orange bg-orange/8"
                    : "text-white/65 hover:text-white hover:bg-white/3"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/order"
            onClick={() => setOpen(false)}
            className="mt-8 w-full btn-orange py-4 rounded-2xl text-base font-bold text-center justify-center"
          >
            Order Now →
          </Link>
        </div>
      </div>
    </>
  );
}
