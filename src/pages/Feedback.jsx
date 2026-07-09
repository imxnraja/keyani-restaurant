import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";

export default function Feedback() {
  useEffect(() => { document.title = "Feedback | Keyani Restaurant"; }, []);
  const [form, setForm] = useState({ name:"",email:"",phone:"",complaint:"",suggestions:"" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.complaint) { setError("Please fill in name, email and complaint."); return; }
    setError(""); setSent(true);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="relative pt-32 pb-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,99,10,0.07)_0%,transparent_60%)] pointer-events-none" />
        <span className="inline-flex items-center gap-2 text-orange text-xs tracking-[0.35em] uppercase font-bold mb-4">
          <span className="w-6 h-px bg-orange" /> We're Listening <span className="w-6 h-px bg-orange" />
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Complaint / Feedback</h1>
        <p className="text-white/35 mt-3 text-sm">Tell us what went wrong — we read every message.</p>
      </div>
      <div className="max-w-2xl mx-auto px-6 pb-20">
        {sent ? (
          <div className="premium-card p-14 text-center">
            <div className="w-20 h-20 rounded-full gradient-orange flex items-center justify-center mx-auto shadow-orange-lg">
              <HiCheckCircle className="text-white" size={44} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mt-6">Thank You</h3>
            <p className="text-white/40 mt-2">We've received your feedback and will respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="premium-card p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full Name *" className="input" />
              <input name="email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email *" className="input" />
            </div>
            <input name="phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone Number" className="input" />
            <textarea name="complaint" value={form.complaint} onChange={e=>setForm({...form,complaint:e.target.value})} placeholder="Describe your complaint *" rows={4} className="textarea" />
            <textarea name="suggestions" value={form.suggestions} onChange={e=>setForm({...form,suggestions:e.target.value})} placeholder="Suggestions for us?" rows={3} className="textarea" />
            {error && <p className="text-sm text-red-400 bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>}
            <button type="submit" className="w-full gradient-orange text-white py-4 rounded-xl font-bold text-sm shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all duration-300">
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
