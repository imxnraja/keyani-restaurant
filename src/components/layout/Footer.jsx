import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logo from "../../assets/images/logo.jpg";

const quickLinks = [
  { to: "/",           label: "Home" },
  { to: "/menu",       label: "Menu" },
  { to: "/reservation",label: "Reservation" },
  { to: "/order",      label: "Order Now" },
  { to: "/reviews",    label: "Reviews" },
  { to: "/feedback",   label: "Feedback" },
  { to: "/contact",    label: "Contact" },
];

const hours = [
  { day: "Branch 1 (Aslam Market)", time: "8:30 AM – 12:00 AM" },
  { day: "Branch 2 (GT Road)", time: "Mon–Fri: 12 PM – 12 AM | Sat–Sun: 7 AM – 12 AM" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top gold/orange accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-orange/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-orange/2 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-24 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gold/50 via-orange/40 to-gold/30 opacity-70 pointer-events-none" />
                <div className="absolute -inset-0.5 rounded-full border border-gold/15" />
                <img src={logo} alt="Keyani" className="h-11 w-11 rounded-full object-cover border border-transparent p-1 relative z-10" />
              </div>
              <div>
                <span className="font-serif-alt text-2xl font-semibold text-white tracking-wide block">Keyani</span>
                <span className="text-[9px] tracking-[0.55em] uppercase font-extrabold text-gold block mt-1">RESTAURANT</span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-[1.9] mb-8 font-light max-w-[220px]">
              Authentic Pakistani BBQ, karahi and tawa specials. Serving since 1985.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: "https://www.tiktok.com/@keyanirestaurant?_r=1&_t=ZS-98DSBiIP3Ui", Icon: FaTiktok },
                { href: "https://www.instagram.com/keyanirestaurant?igsh=OGc3eXFkeGRwM2lm&utm_source=qr", Icon: FaInstagram },
                { href: "https://wa.me/923022264444", Icon: FaWhatsapp },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-white/35 hover:bg-orange hover:border-orange hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/30 hover:text-orange transition-all duration-300 flex items-center gap-2 group font-light"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gradient-to-r from-orange to-orange/0 transition-all duration-300 rounded-full" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">Opening Hours</h4>
            <ul className="space-y-5">
              {hours.map(h => (
                <li key={h.day} className="flex gap-3 items-start">
                  <FaClock size={11} className="text-orange mt-1 shrink-0 opacity-70" />
                  <div>
                    <p className="text-sm text-white/50 font-medium">{h.day}</p>
                    <p className="text-xs text-white/25 mt-0.5 font-light">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 bg-orange/8 border border-orange/15 rounded-full px-3.5 py-2">
              <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
              <span className="text-orange text-[10px] font-bold tracking-widest uppercase">Currently Open</span>
            </div>
          </div>

          {/* Branches / Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">Our Branches</h4>
            <ul className="space-y-5">
              <li>
                <p className="text-xs font-bold text-orange/80 mb-1 uppercase tracking-wide">Branch 1 — Aslam Market</p>
                <div className="flex items-center gap-1.5 mb-1">
                  <FaMapMarkerAlt size={10} className="text-white/20 shrink-0" />
                  <p className="text-xs text-white/25 font-light">Aslam Market, Wah Cantt</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaPhone size={10} className="text-white/20 shrink-0" />
                  <p className="text-xs text-white/30 font-medium">0302 5202020</p>
                </div>
              </li>
              <li className="pt-4 border-t border-white/4">
                <p className="text-xs font-bold text-orange/80 mb-1 uppercase tracking-wide">Branch 2 — GT Road</p>
                <div className="flex items-center gap-1.5 mb-1">
                  <FaMapMarkerAlt size={10} className="text-white/20 shrink-0" />
                  <p className="text-xs text-white/25 font-light">GT Road, Wah Cantt</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaPhone size={10} className="text-white/20 shrink-0" />
                  <p className="text-xs text-white/30 font-medium">0302 2264444</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/15 font-light tracking-wide">
            © {new Date().getFullYear()} Keyani Restaurant. All rights reserved.
          </p>
          <p className="text-[11px] text-white/10 font-light tracking-widest uppercase">
            Wah Cantt · Since 1985
          </p>
        </div>
      </div>
    </footer>
  );
}
