import { useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { branch1Categories, branch2Categories } from "../data/menuData";

const branches = [
  {
    id: "branch1",
    tag: "Branch 1",
    name: "Aslam Market",
    address: "Aslam Market, Wah Cantt, 47040",
    phone: "0302 5202020",
    whatsapp: "923025202020",
    hours: "8:30 AM – 12:00 AM",
    menu: [...branch1Categories.slice(0, 5).map(c => c.label), "& more"],
    service: "Dine-in & Takeaway",
    event: false,
  },
  {
    id: "branch2",
    tag: "Branch 2",
    name: "GT Road",
    address: "GT Road, Wah Cantt, 47040",
    phone: "0302 2264444",
    whatsapp: "923022264444",
    hours: "Mon–Fri: 12:00 PM – 12:00 AM | Sat–Sun: 7:00 AM – 12:00 AM",
    menu: [...branch2Categories.slice(0, 5).map(c => c.label), "& more"],
    service: "Dine-in, Takeaway & Events",
    event: true,
  },
];

export default function Contact() {
  useEffect(() => { document.title = "Contact | Keyani Restaurant"; }, []);

  return (
    <div className="min-h-screen bg-bg">
      <div className="relative pt-32 pb-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.07)_0%,transparent_60%)] pointer-events-none" />
        <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
          <span className="w-6 h-px bg-orange" /> Get In Touch <span className="w-6 h-px bg-orange" />
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Visit or Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        {/* Branch cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {branches.map(b => (
            <div key={b.id} className="premium-card p-7 flex flex-col">
              {/* Event badge for branch 2 */}
              {b.event && (
                <div className="inline-flex items-center gap-1.5 bg-orange/10 border border-orange/20 rounded-full px-3 py-1 mb-4 self-start">
                  <span className="text-orange text-[10px] font-bold uppercase tracking-wider">🎉 Events & Reservations</span>
                </div>
              )}

              <p className="text-orange text-xs font-bold uppercase tracking-widest mb-1">{b.tag}</p>
              <h2 className="font-display text-3xl font-bold text-white mb-5">{b.name}</h2>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt size={13} className="text-orange shrink-0" />
                  <p className="text-white/55 text-sm">{b.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone size={13} className="text-orange shrink-0" />
                  <p className="text-white/55 text-sm">{b.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock size={13} className="text-orange shrink-0" />
                  <p className="text-white/55 text-sm">{b.hours}</p>
                </div>
              </div>

              <div className="border-t border-white/6 pt-4 mb-5">
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Available Menu</p>
                <div className="flex flex-wrap gap-2">
                  {b.menu.map(m => (
                    <span key={m} className="text-xs bg-white/5 border border-white/8 text-white/40 px-2.5 py-1 rounded-full">{m}</span>
                  ))}
                </div>
                <p className="text-xs text-white/25 italic mt-3">{b.service}</p>
              </div>

              {/* Buttons at bottom */}
              <div className="mt-auto space-y-2">
                <Link to="/menu"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", background: "white", color: "#111111", fontWeight: "800", padding: "13px", borderRadius: "12px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", border: "none" }}>
                  View Full Menu →
                </Link>
                {b.event && (
                  <Link to="/reservation"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontWeight: "600", padding: "13px", borderRadius: "12px", fontSize: "13px", textDecoration: "none" }}>
                    🗓 Book an Event / Reservation
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map + contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden h-[380px] border border-white/8">
            <iframe title="Keyani Restaurant" src="https://www.google.com/maps?q=Keyani+Restaurant+Wah+Cantt&output=embed"
              className="w-full h-full border-0 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

          <div className="space-y-4">
            {[
              { Icon: FaEnvelope, label: "Email", value: "hello@keyanirestaurant.pk" },
              { Icon: FaClock, label: "Branch 1 (Aslam Market)", value: "8:30 AM – 12:00 AM" },
              { Icon: FaClock, label: "Branch 2 (GT Road)", value: "Mon–Fri 12 PM–12 AM | Sat–Sun 7 AM–12 AM" },
            ].map(i => (
              <div key={i.label} className="premium-card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange/10 border border-orange/15 flex items-center justify-center text-orange shrink-0">
                  <i.Icon size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/25">{i.label}</p>
                  <p className="text-white/70 font-semibold mt-0.5 text-sm">{i.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/923025202020" target="_blank" rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-dark">
                <FaWhatsapp size={16} /> WhatsApp
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:border-orange/50 hover:text-orange hover:bg-orange/10 transition-all"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:border-orange/50 hover:text-orange hover:bg-orange/10 transition-all"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
