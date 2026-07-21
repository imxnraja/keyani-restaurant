import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";

const OWNER_WHATSAPP = "923085319846"; // All feedback goes here

const BRANCHES = [
  { id: "branch1", label: "Aslam Market (Branch 1)", phone: "0302 5202020" },
  { id: "branch2", label: "GT Road (Branch 2)", phone: "0302 2264444" },
];

function buildMsg({ form, branch }) {
  const b = BRANCHES.find(x => x.id === branch);
  return `📝 *KEYANI RESTAURANT*
*Feedback Slip*

Branch: ${b?.label}
Name: ${form.name}
Phone: ${form.phone || "Not provided"}

Complaint:
${form.complaint}

Suggestions:
${form.suggestions || "None"}`;
}

export default function Feedback() {
  useEffect(() => { document.title = "Feedback | Keyani Restaurant"; }, []);

  const [branch, setBranch] = useState("all");
  const [form, setForm] = useState({ name: "", phone: "", complaint: "", suggestions: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (branch === "all") { setError("Please select a branch."); return; }
    if (!form.name || !form.complaint) { setError("Please fill in your name and complaint."); return; }
    setError("");
    const msg = buildMsg({ form, branch });
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
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

        {/* Branch tabs */}
        <div className="flex items-center justify-center mt-8 px-6">
          <div className="max-w-full overflow-x-auto scrollbar-hide">
            <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1">
              <button type="button" onClick={() => setBranch("all")}
                className={`shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${branch === "all" ? "bg-white text-black shadow-sm" : "text-white/50 hover:text-white"}`}>
                Select Branch
              </button>
              {BRANCHES.map(b => (
                <button key={b.id} type="button" onClick={() => setBranch(b.id)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${branch === b.id ? "gradient-orange text-white shadow-orange-sm" : "text-white/50 hover:text-white"}`}>
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {branch !== "all" && (
          <p className="text-xs text-white/30 mt-3">
            Feedback will go to management · {BRANCHES.find(b => b.id === branch)?.phone}
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-20">
        {sent ? (
          <div className="premium-card p-14 text-center">
            <div className="w-20 h-20 rounded-full gradient-orange flex items-center justify-center mx-auto shadow-orange-lg">
              <HiCheckCircle className="text-white" size={44} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mt-6">Thank You</h3>
            <p className="text-white/40 mt-2 text-sm leading-relaxed">Your feedback has been received. We'll respond within 24 hours.</p>
            <button onClick={() => { setSent(false); setBranch("all"); setForm({ name: "", phone: "", complaint: "", suggestions: "" }); }}
              className="mt-6 gradient-orange text-white px-7 py-3 rounded-xl font-bold text-sm shadow-orange-md hover:-translate-y-0.5 transition-all duration-300">
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="premium-card p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="input" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="input" />
            </div>
            <textarea name="complaint" value={form.complaint} onChange={handleChange} placeholder="Describe your complaint *" rows={4} className="textarea" />
            <textarea name="suggestions" value={form.suggestions} onChange={handleChange} placeholder="Any suggestions for us?" rows={3} className="textarea" />
            {error && <div className="border border-red-500/20 bg-red-500/8 rounded-xl px-4 py-3 text-sm text-red-400">⚠️ {error}</div>}
            <button type="submit"
              className="w-full relative gradient-orange text-white py-4 rounded-2xl font-bold text-sm shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
              Submit Feedback
            </button>
            <p className="text-center text-xs text-white/20">Feedback goes directly to management via WhatsApp</p>
          </form>
        )}
      </div>
    </div>
  );
}
