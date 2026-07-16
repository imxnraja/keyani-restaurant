import { useEffect, useState } from "react";
import { HiCheckCircle, HiX } from "react-icons/hi";
import { FaWhatsapp, FaUsers, FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { MdRoofing, MdMeetingRoom, MdEventNote } from "react-icons/md";
import { Link } from "react-router-dom";

const OWNER_WHATSAPP = "923022264444"; // Branch 2 GT Road

const EVENT_TYPES = [
  { id: "nikkah", label: "Nikkah", icon: "💍" },
  { id: "birthday", label: "Birthday Party", icon: "🎂" },
  { id: "dawat", label: "Dawat / Dinner", icon: "🍽️" },
  { id: "meeting", label: "Corporate Meeting", icon: "💼" },
  { id: "bridal_shower", label: "Bridal Shower", icon: "👰" },
  { id: "anniversary", label: "Anniversary", icon: "🌹" },
];

const VENUES = [
  {
    id: "room",
    label: "Indoor Room",
    icon: MdMeetingRoom,
    desc: "Elegant indoor hall — perfect for intimate gatherings, meetings and formal events.",
    features: ["Air Conditioned", "Private Setting", "Catering Included"],
  },
  {
    id: "terrace",
    label: "Rooftop Terrace",
    icon: MdRoofing,
    desc: "Open-air terrace with a beautiful view — ideal for dawat, anniversary and birthday events.",
    features: ["Open Air", "Scenic View", "Flexible Setup"],
  },
  {
    id: "both",
    label: "Room + Terrace (Both)",
    icon: MdEventNote,
    desc: "Book both venues for large events like Nikkah and big dawats.",
    features: ["Maximum Capacity", "Best for Large Events", "Premium Package"],
  },
];

function buildWhatsAppMsg({ form, venue, eventType }) {
  const selectedVenue = VENUES.find(v => v.id === venue);
  const selectedEvent = EVENT_TYPES.find(e => e.id === eventType);
  const bookingId = `KR-EVT-${Date.now().toString().slice(-5)}`;

  const msg =
    `🎉 *KEYANI RESTAURANT*
*Event Reservation Slip*

Booking ID: ${bookingId}
Branch: Branch 2 — GT Road, Wah Cantt

*Contact Details*
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}

*Event Details*
Event Type: ${selectedEvent?.icon} ${selectedEvent?.label}
Venue: ${selectedVenue?.label}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests} people
Special Requests: ${form.notes || "None"}

Advance Required: 30% of total to confirm booking
Planner Consultation: Free

Please reply to confirm availability and discuss details.
Thank you! 🙏`;

  return `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function SuccessPopup({ onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div className="relative premium-card p-8 sm:p-10 max-w-sm w-full text-center shadow-orange-lg"
        onClick={e => e.stopPropagation()}
        style={{ animation: "scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all">
          <HiX size={14} />
        </button>
        <div className="relative w-20 h-20 mx-auto mb-5">
          <div className="absolute inset-0 rounded-full gradient-orange opacity-30 animate-pulse-ring" />
          <div className="relative w-20 h-20 rounded-full gradient-orange flex items-center justify-center shadow-orange-lg">
            <HiCheckCircle className="text-white" size={42} />
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-white mb-3">Reservation Sent!</h2>
        <p className="text-white/45 text-sm leading-relaxed mb-6">
          Your event request has been received. Our team will contact you shortly to confirm availability and discuss details.
        </p>
        <p className="text-xs text-orange font-semibold mb-4">📞 Expect a call on your provided number</p>
        <button onClick={onClose} className="w-full gradient-orange text-white py-3.5 rounded-xl font-bold text-sm shadow-orange-md transition-all">
          OK, Got it!
        </button>
        <div className="mt-5 h-0.5 w-full bg-white/6 rounded-full overflow-hidden">
          <div className="h-full bg-orange/40 rounded-full" style={{ animation: "shrink 6s linear forwards" }} />
        </div>
      </div>
      <style>{`
        @keyframes scaleIn { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
        @keyframes shrink { from{width:100%} to{width:0%} }
      `}</style>
    </div>
  );
}

export default function Reservation() {
  useEffect(() => { document.title = "Event Reservation | Keyani Restaurant"; }, []);

  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "", guests: "", notes: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!eventType) { setError("Please select an event type."); return; }
    if (!venue) { setError("Please select a venue."); return; }
    if (!form.name || !form.phone || !form.date || !form.time || !form.guests) {
      setError("Please fill in all required fields."); return;
    }
    setError("");
    const url = buildWhatsAppMsg({ form, venue, eventType });
    window.open(url, "_blank");
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    setEventType(""); setVenue("");
    setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "", notes: "" });
  };

  return (
    <>
      {showPopup && <SuccessPopup onClose={handleClose} />}

      <div className="min-h-screen bg-bg">
        {/* Hero */}
        <div className="relative pt-28 pb-14 px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-orange/3 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center">
            {/* Back link — top left */}
            <div className="mb-6">
              <Link to="/menu" className="inline-flex items-center gap-2 text-white/30 hover:text-orange text-xs font-semibold uppercase tracking-widest transition-colors duration-300">
                ← Back to Menu
              </Link>
            </div>

            {/* Branch badge — its own line, left aligned */}
            <div className="inline-flex items-center justify-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span className="text-orange text-xs font-bold tracking-[0.25em] uppercase">Branch 2 — GT Road</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-6 h-px bg-orange" />
              <span className="text-orange text-xs tracking-[0.35em] uppercase font-bold">Private Events</span>
              <span className="w-6 h-px bg-orange" />
            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
              Book Your <span className="text-gradient">Event</span>
            </h1>
            <p className="text-white/40 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Reserve our Private Room or Rooftop Terrace for your special occasion. We'll handle the rest.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <span className="inline-flex items-center gap-2 bg-white/4 border border-white/8 rounded-full px-4 py-2 text-xs text-white/50">
                📞 0302 2264444
              </span>
              <span className="inline-flex items-center gap-2 bg-white/4 border border-white/8 rounded-full px-4 py-2 text-xs text-white/50">
                📍 GT Road, Wah Cantt
              </span>
              <span className="inline-flex items-center gap-2 bg-white/3 border border-white/6 rounded-full px-4 py-2 text-xs text-white/30">
                ✗ Events not available at Branch 1
              </span>
            </div>
          </div>
        </div>

        {/* Features bar */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: FaStar, label: "Free Planner", sub: "Professional consultation" },
              { icon: FaCalendarAlt, label: "All Occasions", sub: "Nikkah, Birthday & more" },
              { icon: FaUsers, label: "Room & Terrace", sub: "Flexible venues" },
              { icon: FaClock, label: "30% Advance", sub: "To confirm booking" },
            ].map(f => (
              <div key={f.label} className="premium-card p-4 text-center">
                <div className="w-9 h-9 rounded-xl gradient-orange flex items-center justify-center mx-auto mb-2 shadow-orange-sm">
                  <f.icon size={15} className="text-white" />
                </div>
                <p className="text-xs font-bold text-white/80">{f.label}</p>
                <p className="text-[10px] text-white/30 mt-0.5">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Step 1: Event Type */}
            <div className="premium-card p-6">
              <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">1</span>
                Select Event Type
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EVENT_TYPES.map(e => (
                  <button key={e.id} type="button" onClick={() => setEventType(e.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${eventType === e.id
                        ? "border-orange bg-orange/10"
                        : "border-white/8 bg-white/2 hover:border-orange/40"
                      }`}>
                    <span className="text-2xl block mb-1">{e.icon}</span>
                    <p className={`text-xs font-bold transition-colors ${eventType === e.id ? "text-orange" : "text-white/60"}`}>{e.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Venue */}
            <div className="premium-card p-6">
              <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">2</span>
                Select Venue
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {VENUES.map(v => (
                  <button key={v.id} type="button" onClick={() => setVenue(v.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 ${venue === v.id
                        ? "border-orange bg-orange/8 shadow-orange-sm"
                        : "border-white/8 bg-white/2 hover:border-orange/40"
                      }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${venue === v.id ? "gradient-orange shadow-orange-sm" : "bg-white/5 border border-white/10"}`}>
                      <v.icon size={18} className={venue === v.id ? "text-white" : "text-white/40"} />
                    </div>
                    <p className={`font-bold text-sm mb-1 ${venue === v.id ? "text-orange" : "text-white/70"}`}>{v.label}</p>
                    <p className="text-xs text-white/30 leading-relaxed mb-3">{v.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {v.features.map(f => (
                        <span key={f} className="text-[10px] bg-white/5 border border-white/8 text-white/40 px-2 py-0.5 rounded-full">{f}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl border border-white/6 bg-white/2">
                <p className="text-xs text-white/30">💡 Capacity details will be discussed during your free consultation with our event planner. Contact us via WhatsApp to discuss your requirements.</p>
              </div>
            </div>

            {/* Step 3: Details */}
            <div className="premium-card p-6">
              <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">3</span>
                Event Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="input" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" className="input" />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address (optional)" className="input" />
                <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} placeholder="Number of Guests *" className="input" />
                <input name="date" type="date" value={form.date} onChange={handleChange} className="input" min={new Date().toISOString().split("T")[0]} />
                <input name="time" type="time" value={form.time} onChange={handleChange} className="input" />
                <textarea name="notes" value={form.notes} onChange={handleChange}
                  placeholder="Special requests, decoration preferences, dietary needs..." rows={3} className="textarea sm:col-span-2" />
              </div>
            </div>

            {/* Planner note */}
            <div className="p-5 rounded-2xl border border-orange/20 bg-orange/5">
              <div className="flex items-start gap-3">
                <FaStar size={16} className="text-orange mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white/80">Free Professional Planner Consultation</p>
                  <p className="text-xs text-white/40 mt-1 leading-relaxed">
                    After submitting your request, our professional event planner will contact you to help plan every detail — decoration, menu, seating, and more. This consultation is completely free.
                  </p>
                </div>
              </div>
            </div>

            {/* Advance note */}
            <div className="p-4 rounded-xl border border-yellow-500/15 bg-yellow-500/5 flex items-start gap-3">
              <span className="text-yellow-400 text-sm shrink-0 mt-0.5">💰</span>
              <p className="text-xs text-white/40 leading-relaxed">
                <span className="text-yellow-400 font-semibold">30% advance payment</span> is required to confirm your booking. Details will be shared by our team after reviewing your request.
              </p>
            </div>

            {error && (
              <div className="border border-red-500/20 bg-red-500/8 rounded-xl px-4 py-3 text-sm text-red-400 flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            <button type="submit"
              className="w-full relative gradient-orange text-white py-4 rounded-2xl font-bold text-base shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group flex items-center justify-center gap-3">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
              <FaWhatsapp size={18} />
              Send Reservation Request
            </button>

            <p className="text-center text-xs text-white/25">
              Reservations only at <span className="text-orange">Branch 2 — GT Road</span> ·{" "}
              <Link to="/contact" className="text-orange/70 hover:text-orange transition-colors">Contact us</Link> for more info
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
