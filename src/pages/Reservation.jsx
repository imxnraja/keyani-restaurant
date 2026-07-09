import { useEffect, useState } from "react";
import { HiCheckCircle, HiX, HiPhone } from "react-icons/hi";
import { MdEventAvailable, MdPeople, MdMeetingRoom } from "react-icons/md";
import { FaWhatsapp, FaUmbrellaBeach } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";

const OWNER_WHATSAPP = "923055414748";

const EVENT_TYPES = [
  { id: "wedding",   label: "Wedding",         emoji: "💍" },
  { id: "birthday",  label: "Birthday Party",   emoji: "🎂" },
  { id: "corporate", label: "Corporate Event",  emoji: "💼" },
  { id: "aqiqah",    label: "Aqiqah / Walima",  emoji: "🌙" },
  { id: "anniversary", label: "Anniversary",   emoji: "🥂" },
  { id: "other",     label: "Other",            emoji: "🎉" },
];

const VENUES = [
  {
    id: "room",
    label: "Private Room",
    icon: MdMeetingRoom,
    desc: "An elegant enclosed private room — ideal for intimate gatherings, corporate meetings, and formal events.",
    capacity: "Up to 50 guests",
    features: ["Air-conditioned", "Fully private", "Catering included"],
  },
  {
    id: "terrace",
    label: "Rooftop Terrace",
    icon: FaUmbrellaBeach,
    desc: "An open-air rooftop terrace with stunning views — perfect for evening events, mehndi, and outdoor celebrations.",
    capacity: "Up to 120 guests",
    features: ["Open air", "Evening ambience", "Decor support"],
  },
  {
    id: "both",
    label: "Room + Terrace",
    icon: BiBuildingHouse,
    desc: "Book both venues for a grand event with indoor and outdoor spaces seamlessly combined.",
    capacity: "Up to 150 guests",
    features: ["Maximum space", "Flexible layout", "Full event support"],
  },
];

function buildReservationWhatsApp({ form, event, venue, planner }) {
  const selectedVenue = VENUES.find(v => v.id === venue);
  const selectedEvent = EVENT_TYPES.find(e => e.id === event.type);
  const refNo = `KR-RES-${Date.now().toString().slice(-6)}`;
  const time = new Date().toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" });

  const msg =
    `🎉 *RESERVATION REQUEST — KEYANI RESTAURANT*
━━━━━━━━━━━━━━━━━━━━
📋 *Ref No:* ${refNo}
🕐 *Submitted:* ${time}
🏪 *Branch:* Branch 2 — GT Road, Wah Cantt

👤 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━
• Name: ${form.name}
• Phone: ${form.phone}
• Email: ${form.email || "Not provided"}

🎊 *EVENT DETAILS*
━━━━━━━━━━━━━━━━━━━━
• Event Type: ${selectedEvent?.emoji} ${selectedEvent?.label}
• Venue: ${selectedVenue?.label}
• Date: ${event.date}
• Time: ${event.time}
• Guests: ~${event.guests} persons
• Catering Required: ${event.catering ? "Yes ✅" : "No ❌"}
${event.notes ? `• Notes: ${event.notes}` : ""}

${planner.wantsPlanner ? `🧑‍💼 *PROFESSIONAL PLANNER REQUESTED*
• Preferred Contact Time: ${planner.contactTime}
• The customer wants to consult our event planner.` : ""}
━━━━━━━━━━━━━━━━━━━━
Please confirm this reservation at your earliest. 🙏
Thank you — Keyani Restaurant`;

  return encodeURIComponent(msg);
}

// ── Success Popup ──────────────────────────────────────────
function SuccessPopup({ onClose, onWhatsApp }) {
  useEffect(() => {
    const t = setTimeout(onClose, 9000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        className="relative premium-card p-8 sm:p-10 max-w-md w-full text-center shadow-orange-lg"
        onClick={e => e.stopPropagation()}
        style={{ animation: "scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
          <HiX size={14} />
        </button>
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full gradient-orange animate-pulse-ring opacity-40" />
          <div className="relative w-20 h-20 rounded-full gradient-orange flex items-center justify-center shadow-orange-lg">
            <HiCheckCircle className="text-white" size={40} />
          </div>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Reservation Sent!</h2>
        <p className="text-white/45 text-sm leading-relaxed mb-8">
          Your request has been submitted. Please confirm on WhatsApp so we can finalize your booking right away.
        </p>
        <button
          onClick={onWhatsApp}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fbd5c] text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg mb-3"
        >
          <FaWhatsapp size={20} />
          Confirm Reservation on WhatsApp
        </button>
        <button onClick={onClose} className="w-full border border-white/10 bg-white/3 text-white/40 hover:text-white/60 py-3 rounded-xl text-sm font-medium transition-all">
          Close
        </button>
        <div className="mt-5 h-0.5 w-full bg-white/6 rounded-full overflow-hidden">
          <div className="h-full bg-orange/50 rounded-full" style={{ animation: "shrink 9s linear forwards" }} />
        </div>
        <p className="text-white/20 text-xs mt-2">Closes automatically in 9 seconds</p>
      </div>
      <style>{`
        @keyframes scaleIn { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
        @keyframes shrink { from{width:100%} to{width:0%} }
      `}</style>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────
export default function Reservation() {
  useEffect(() => { document.title = "Reservations & Events | Keyani Restaurant"; }, []);

  const [venue, setVenue] = useState("");
  const [event, setEvent] = useState({ type: "", date: "", time: "", guests: 20, catering: true, notes: "" });
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [planner, setPlanner] = useState({ wantsPlanner: false, contactTime: "" });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const handleFormChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleEventChange = e => setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!venue) { setError("Please select a venue."); return; }
    if (!event.type) { setError("Please select an event type."); return; }
    if (!event.date) { setError("Please pick a date for your event."); return; }
    if (!event.time) { setError("Please pick a time for your event."); return; }
    if (!form.name || !form.phone) { setError("Please fill in your name and phone number."); return; }
    if (planner.wantsPlanner && !planner.contactTime) { setError("Please specify your preferred contact time for the planner."); return; }
    setError("");

    const msg = buildReservationWhatsApp({ form, event, venue, planner });
    setWhatsAppUrl(`https://wa.me/${OWNER_WHATSAPP}?text=${msg}`);
    setShowPopup(true);
  };

  const handleWhatsApp = () => {
    window.open(whatsAppUrl, "_blank");
    setShowPopup(false);
    resetAll();
  };

  const handleClosePopup = () => { setShowPopup(false); resetAll(); };

  const resetAll = () => {
    setVenue("");
    setEvent({ type: "", date: "", time: "", guests: 20, catering: true, notes: "" });
    setForm({ name: "", phone: "", email: "" });
    setPlanner({ wantsPlanner: false, contactTime: "" });
  };

  // Get today's date in YYYY-MM-DD format for date input min
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {showPopup && <SuccessPopup onClose={handleClosePopup} onWhatsApp={handleWhatsApp} />}

      <div className="min-h-screen bg-bg">
        {/* Hero */}
        <div className="relative pt-32 pb-14 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.09)_0%,transparent_65%)] pointer-events-none" />
          <Link to="/menu/branch2" className="inline-flex items-center gap-1.5 text-white/30 hover:text-orange text-xs font-semibold uppercase tracking-widest mb-6 transition-colors">
            ← Branch 2 Menu
          </Link>
          <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4 block">
            <span className="w-6 h-px bg-orange" /> Branch 2 — GT Road <span className="w-6 h-px bg-orange" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Events &amp; Reservations</h1>
          <p className="text-white/35 mt-3 text-sm max-w-lg mx-auto">
            Reserve our Private Room or Rooftop Terrace for your special occasion. We'll handle the rest.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <span className="flex items-center gap-2 text-xs text-white/30 bg-white/3 border border-white/8 px-4 py-2 rounded-full">
              <HiPhone size={12} className="text-orange" /> 0302 2264444
            </span>
            <span className="flex items-center gap-2 text-xs text-white/30 bg-white/3 border border-white/8 px-4 py-2 rounded-full">
              📍 GT Road, Wah Cantt
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* ── Step 1: Venue ── */}
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">1</span>
                Choose Your Venue
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {VENUES.map(v => {
                  const Icon = v.icon;
                  const selected = venue === v.id;
                  return (
                    <label
                      key={v.id}
                      className={`relative cursor-pointer rounded-2xl border-2 p-5 transition-all duration-300 ${selected ? "border-orange bg-orange/8 shadow-orange-sm" : "border-white/8 bg-white/2 hover:border-orange/35 hover:bg-orange/3"}`}
                    >
                      <input type="radio" name="venue" value={v.id} checked={selected} onChange={() => setVenue(v.id)} className="sr-only" />
                      {selected && (
                        <span className="absolute top-3 right-3 w-5 h-5 rounded-full gradient-orange flex items-center justify-center text-white text-xs font-bold shadow-orange-sm">✓</span>
                      )}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${selected ? "gradient-orange shadow-orange-sm" : "bg-white/5 border border-white/10"}`}>
                        <Icon size={18} className={selected ? "text-white" : "text-white/40"} />
                      </div>
                      <p className={`font-bold text-sm mb-1 transition-colors ${selected ? "text-orange" : "text-white/70"}`}>{v.label}</p>
                      <p className="text-xs text-white/30 leading-relaxed mb-3">{v.desc}</p>
                      <p className="text-xs font-bold text-white/40 mb-2">👥 {v.capacity}</p>
                      <div className="flex flex-col gap-1">
                        {v.features.map(f => (
                          <span key={f} className="text-[10px] text-white/25 flex items-center gap-1">
                            <span className="text-orange">✓</span> {f}
                          </span>
                        ))}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* ── Step 2: Event Type ── */}
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">2</span>
                Event Type
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EVENT_TYPES.map(et => {
                  const selected = event.type === et.id;
                  return (
                    <label
                      key={et.id}
                      className={`cursor-pointer rounded-xl border-2 px-4 py-3.5 flex items-center gap-3 transition-all duration-300 ${selected ? "border-orange bg-orange/10 text-orange" : "border-white/8 bg-white/2 text-white/40 hover:border-orange/30 hover:text-white/60"}`}
                    >
                      <input type="radio" name="eventType" value={et.id} checked={selected} onChange={() => setEvent({ ...event, type: et.id })} className="sr-only" />
                      <span className="text-lg">{et.emoji}</span>
                      <span className="text-sm font-semibold">{et.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* ── Step 3: Date, Time & Guests ── */}
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">3</span>
                Date, Time &amp; Guests
              </h3>
              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={event.date}
                    min={today}
                    onChange={handleEventChange}
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-2">Event Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={event.time}
                    onChange={handleEventChange}
                    className="input"
                  />
                </div>
              </div>

              {/* Guest count */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-3">
                  Estimated Guests
                  <span className="ml-2 text-orange font-display text-base normal-case">{event.guests}</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={150}
                  step={5}
                  value={event.guests}
                  onChange={e => setEvent({ ...event, guests: Number(e.target.value) })}
                  className="w-full accent-orange h-2 rounded-full bg-white/10 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-white/20 mt-1">
                  <span>5</span>
                  <span>75</span>
                  <span>150</span>
                </div>
              </div>

              {/* Catering */}
              <div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Include Food Catering?</p>
                <div className="flex gap-3">
                  {[{ val: true, label: "✅ Yes, include catering" }, { val: false, label: "❌ No catering needed" }].map(opt => (
                    <label
                      key={String(opt.val)}
                      className={`flex-1 cursor-pointer border-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all text-center ${event.catering === opt.val ? "border-orange bg-orange/10 text-orange" : "border-white/8 bg-white/2 text-white/35 hover:border-orange/30"}`}
                    >
                      <input type="radio" checked={event.catering === opt.val} onChange={() => setEvent({ ...event, catering: opt.val })} className="sr-only" />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mt-5">
                <label className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-2">Special Requests / Notes</label>
                <textarea
                  name="notes"
                  value={event.notes}
                  onChange={handleEventChange}
                  rows={3}
                  placeholder="E.g. decor preferences, dietary restrictions, specific requirements..."
                  className="textarea"
                />
              </div>
            </div>

            {/* ── Step 4: Professional Planner ── */}
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">4</span>
                Professional Event Planner
              </h3>
              <p className="text-sm text-white/35 mb-6 ml-11">Our in-house event planner can help you design a flawless event — from décor to seating to catering coordination.</p>

              {/* Planner toggle */}
              <label className={`flex items-start gap-4 cursor-pointer rounded-2xl border-2 p-5 transition-all duration-300 ${planner.wantsPlanner ? "border-orange bg-orange/8" : "border-white/8 bg-white/2 hover:border-orange/30"}`}>
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={planner.wantsPlanner}
                    onChange={e => setPlanner({ ...planner, wantsPlanner: e.target.checked })}
                    className="sr-only"
                  />
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${planner.wantsPlanner ? "gradient-orange border-transparent shadow-orange-sm" : "border-white/20 bg-white/5"}`}>
                    {planner.wantsPlanner && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                </div>
                <div>
                  <p className={`font-bold text-sm transition-colors ${planner.wantsPlanner ? "text-orange" : "text-white/60"}`}>
                    🧑‍💼 Yes, I'd like to consult with a professional event planner
                  </p>
                  <p className="text-xs text-white/30 mt-1 leading-relaxed">
                    Our planner will contact you to discuss décor, layout, catering coordination, and make your event unforgettable.
                  </p>
                </div>
              </label>

              {/* Contact time — shown only when planner is selected */}
              {planner.wantsPlanner && (
                <div className="mt-5 animate-fadeUp">
                  <label className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Preferred Time to Be Contacted *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Morning (9–12)", "Afternoon (12–4)", "Evening (4–8)", "Anytime"].map(t => (
                      <label
                        key={t}
                        className={`cursor-pointer rounded-xl border-2 px-3 py-3 text-xs font-semibold text-center transition-all ${planner.contactTime === t ? "border-orange bg-orange/10 text-orange" : "border-white/8 bg-white/2 text-white/40 hover:border-orange/30 hover:text-white/60"}`}
                      >
                        <input type="radio" checked={planner.contactTime === t} onChange={() => setPlanner({ ...planner, contactTime: t })} className="sr-only" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Step 5: Your Details ── */}
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">5</span>
                Your Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleFormChange} placeholder="Full Name *" className="input" />
                <input name="phone" value={form.phone} onChange={handleFormChange} placeholder="Phone Number *" className="input" />
                <input name="email" value={form.email} onChange={handleFormChange} placeholder="Email Address (optional)" className="input sm:col-span-2" type="email" />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="border border-red-500/20 bg-red-500/8 rounded-xl px-4 py-3 text-sm text-red-400 flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              id="submit-reservation"
              className="w-full relative gradient-orange text-white py-4 rounded-2xl font-bold text-base shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group flex items-center justify-center gap-3"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
              <FaWhatsapp size={18} />
              Send Reservation Request via WhatsApp
            </button>

            <p className="text-center text-xs text-white/20">
              Your request will be sent to our team via WhatsApp. We'll confirm your booking within a few hours.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
