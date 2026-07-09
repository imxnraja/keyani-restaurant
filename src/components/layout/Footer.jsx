import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";

const quickLinks = [
  { to:"/",label:"Home"},{to:"/menu",label:"Menu"},{to:"/order",label:"Order Now"},
  {to:"/reviews",label:"Reviews"},{to:"/feedback",label:"Feedback"},{to:"/contact",label:"Contact"},
];
const hours = [
  { day:"Mon – Thu", time:"12:00 PM – 11:30 PM" },
  { day:"Fri – Sun", time:"12:00 PM – 1:00 AM" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg overflow-hidden">
      <div className="orange-line" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Keyani" className="h-12 w-12 rounded-full object-cover border-2 border-orange/30" />
              <div>
                <span className="font-display text-xl font-bold text-white block">Keyani</span>
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-orange">Restaurant</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">Authentic Pakistani BBQ, karahi and tawa specials. Serving since 1985.</p>
            <div className="flex gap-2">
              {[
                { href:"https://facebook.com", Icon:FaFacebookF },
                { href:"https://instagram.com", Icon:FaInstagram },
                { href:"https://wa.me/923022264444", Icon:FaWhatsapp },
              ].map(({href,Icon})=>(
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:bg-orange hover:border-orange hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l=>(
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/35 hover:text-orange transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-orange transition-all duration-300 rounded-full" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-5">Hours</h4>
            <ul className="space-y-4">
              {hours.map(h=>(
                <li key={h.day} className="flex gap-3 items-start">
                  <FaClock size={12} className="text-orange mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-white/60">{h.day}</p>
                    <p className="text-xs text-white/30 mt-0.5">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-5">Branches</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt size={12} className="text-orange mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-orange">Branch 1 — Aslam Market</p>
                  <p className="text-xs text-white/30 mt-0.5">0302 5202020</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt size={12} className="text-orange mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-orange">Branch 2 — GT Road</p>
                  <p className="text-xs text-white/30 mt-0.5">0302 2264444</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FaEnvelope size={12} className="text-orange mt-0.5 shrink-0" />
                <p className="text-xs text-white/30">hello@keyanirestaurant.pk</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Keyani Restaurant. All rights reserved.</p>
          <p className="text-xs text-white/15">Wah Cantt · Since 1985</p>
        </div>
      </div>
    </footer>
  );
}
