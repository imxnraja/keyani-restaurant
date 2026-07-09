import { useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const branches = [
  { name:"Branch 1 — Aslam Market", address:"Aslam Market, Wah Cantt, 47040", phone:"0302 5202020" },
  { name:"Branch 2 — GT Road", address:"GT Road, Wah Cantt, 47040", phone:"0302 2264444" },
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
        {/* Branches */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {branches.map(b => (
            <div key={b.name} className="premium-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center shadow-orange-sm">
                  <FaMapMarkerAlt size={16} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{b.name}</h3>
              </div>
              <p className="text-white/40 text-sm mb-2">{b.address}</p>
              <div className="flex items-center gap-2">
                <FaPhone size={11} className="text-orange" />
                <p className="text-orange font-bold text-sm">{b.phone}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden h-[380px] border border-white/8">
            <iframe title="Keyani Restaurant" src="https://www.google.com/maps?q=Keyani+Restaurant+Wah+Cantt&output=embed"
              className="w-full h-full border-0 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

          <div className="space-y-4">
            {[
              { Icon:FaEnvelope, label:"Email", value:"hello@keyanirestaurant.pk" },
              { Icon:FaClock, label:"Mon–Thu", value:"12:00 PM – 11:30 PM" },
              { Icon:FaClock, label:"Fri–Sun", value:"12:00 PM – 1:00 AM" },
            ].map(i=>(
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
