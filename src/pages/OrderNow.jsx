import { useEffect, useMemo, useState } from "react";
import { branch1Categories, branch1Items, branch2Categories, branch2Items } from "../data/menuData";
import { HiCheckCircle, HiLocationMarker, HiPhone, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const BRANCHES = [
  { id: "branch1", name: "Branch 1 — Aslam Market", address: "Aslam Market, Wah Cantt", phone: "0302 5202020", whatsapp: "923025202020", tag: "Branch 1" },
  { id: "branch2", name: "Branch 2 — GT Road", address: "GT Road, Wah Cantt", phone: "0302 2264444", whatsapp: "923022264444", tag: "Branch 2" },
];

// Right-aligns a value against a label within a fixed-width monospace row
const SLIP_WIDTH = 34;
function slipRow(label, value, width = SLIP_WIDTH) {
  const l = String(label);
  const v = String(value);
  const gap = Math.max(1, width - l.length - v.length);
  return l + " ".repeat(gap) + v;
}

function buildWhatsAppMessage({ form, cartItems, total, branch, payment }) {
  const selectedBranch = BRANCHES.find(b => b.id === branch);
  const orderNo = `KR-${Date.now().toString().slice(-6)}`;
  const time = new Date().toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" });
  const deliveryCharge = total > 0 ? 250 : 0;
  const grandTotal = total + deliveryCharge;

  const itemLines = cartItems
    .map(i => slipRow(`${i.name} (${i.unit}${i.pieces ? `, ${i.pieces}` : ""}) x${i.qty}`, `Rs.${(i.price * i.qty).toLocaleString()}`))
    .join("\n");

  const slip =
    `${itemLines}
${"-".repeat(SLIP_WIDTH)}
${slipRow("Subtotal", `Rs.${total.toLocaleString()}`)}
${slipRow("Delivery Charge", `Rs.${deliveryCharge.toLocaleString()}`)}
${"-".repeat(SLIP_WIDTH)}
${slipRow("TOTAL", `Rs.${grandTotal.toLocaleString()}`)}`;

  const msg =
    `🍖 *KEYANI RESTAURANT*
*Order Receipt*

Order No: ${orderNo}
Date: ${time}
Branch: ${selectedBranch?.name}

*Customer Details*
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}, ${form.city}${form.notes ? `\nNotes: ${form.notes}` : ""}

\`\`\`
${slip}
\`\`\`

Payment: ${payment === "cod" ? "Cash on Delivery" : "Bank Transfer"}

Thank you for ordering from Keyani Restaurant! 🙏`;

  return encodeURIComponent(msg);
}

// ── Success Popup ──────────────────────────────────────────
function SuccessPopup({ onClose, onWhatsApp }) {
  useEffect(() => {
    const t = setTimeout(onClose, 8000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative premium-card p-8 sm:p-10 max-w-md w-full text-center shadow-orange-lg"
        onClick={e => e.stopPropagation()}
        style={{ animation: "scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}>

        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
          <HiX size={14} />
        </button>

        {/* Success icon */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full gradient-orange animate-pulse-ring opacity-40" />
          <div className="relative w-20 h-20 rounded-full gradient-orange flex items-center justify-center shadow-orange-lg">
            <HiCheckCircle className="text-white" size={40} />
          </div>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Order Placed!
        </h2>
        <p className="text-white/45 text-sm leading-relaxed mb-8">
          Your order has been received. Please send us the receipt on WhatsApp so we can confirm and process it right away.
        </p>

        {/* WhatsApp button */}
        <button
          onClick={onWhatsApp}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fbd5c] text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg mb-3">
          <FaWhatsapp size={20} />
          Send Order Receipt on WhatsApp
        </button>

        <button onClick={onClose} className="w-full border border-white/10 bg-white/3 text-white/40 hover:text-white/60 py-3 rounded-xl text-sm font-medium transition-all">
          Close
        </button>

        {/* Auto-close bar */}
        <div className="mt-5 h-0.5 w-full bg-white/6 rounded-full overflow-hidden">
          <div className="h-full bg-orange/50 rounded-full" style={{ animation: "shrink 8s linear forwards" }} />
        </div>
        <p className="text-white/20 text-xs mt-2">Closes automatically in 8 seconds</p>
      </div>

      <style>{`
        @keyframes scaleIn { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
        @keyframes shrink { from{width:100%} to{width:0%} }
      `}</style>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────
export default function OrderNow() {
  useEffect(() => { document.title = "Order Now | Keyani Restaurant"; }, []);

  const [branch, setBranch] = useState("");
  const [cart, setCart] = useState({});
  const [activeCategory, setActiveCategory] = useState("bbq");
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", notes: "" });
  const [payment, setPayment] = useState("cod");
  const [showPopup, setShowPopup] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [error, setError] = useState("");

  // Each branch shows its own real menu; default to Branch 2's (fullest) menu as a preview until a branch is picked
  const filteredCategories = useMemo(() => {
    if (branch === "branch1") return branch1Categories;
    return branch2Categories;
  }, [branch]);

  const branchItems = branch === "branch1" ? branch1Items : branch2Items;

  // When branch changes, reset activeCategory to first available category
  useEffect(() => {
    if (branch) {
      const available = branch === "branch1" ? branch1Categories : branch2Categories;
      if (available.length > 0 && !available.some(c => c.id === activeCategory)) {
        setActiveCategory(available[0].id);
      }
    }
  }, [branch]);

  const categoryItems = useMemo(() =>
    branchItems.filter(i => i.category === activeCategory),
    [activeCategory, branchItems]
  );
  const cartItems = useMemo(() =>
    Object.entries(cart).filter(([, qty]) => qty > 0).map(([id, qty]) => ({ ...branch2Items.find(i => i.id === id), qty })),
    [cart]
  );
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + (subtotal > 0 ? 250 : 0);

  const updateCart = (id, delta) => setCart(c => ({ ...c, [id]: Math.max(0, (c[id] || 0) + delta) }));
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!branch) { setError("Please select a branch."); return; }
    if (!form.name || !form.phone || !form.address || !form.city) { setError("Please fill in all required fields."); return; }
    if (cartItems.length === 0) { setError("Please add at least one item."); return; }
    setError("");

    // Build WhatsApp receipt URL — message goes to the selected branch's own WhatsApp
    const selectedBranch = BRANCHES.find(b => b.id === branch);
    const msg = buildWhatsAppMessage({ form, cartItems, total: subtotal, branch, payment });
    setWhatsAppUrl(`https://wa.me/${selectedBranch.whatsapp}?text=${msg}`);
    setShowPopup(true);
  };

  const handleWhatsApp = () => {
    window.open(whatsAppUrl, "_blank");
    setShowPopup(false);
    setCart({});
    setForm({ name: "", phone: "", address: "", city: "", notes: "" });
    setBranch("");
    setPayment("cod");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCart({});
    setForm({ name: "", phone: "", address: "", city: "", notes: "" });
    setBranch("");
    setPayment("cod");
  };

  return (
    <>
      {showPopup && <SuccessPopup onClose={handleClosePopup} onWhatsApp={handleWhatsApp} />}

      <div className="min-h-screen bg-bg">
        {/* Header */}
        <div className="page-hero px-6">
          <span className="eyebrow">Online Ordering</span>
          <h1 className="page-hero-title">Place Your Order</h1>
          <p className="text-luxury-medium mt-3 text-sm font-medium">Order confirmed via WhatsApp receipt</p>
          <div className="ornament"><div className="ornament-line" /><div className="ornament-dot" /><div className="ornament-line rev" /></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {/* Step 1: Branch */}
              <div className="premium-card p-6">
                <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">1</span>
                  Select Branch
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BRANCHES.map(b => (
                    <label key={b.id} className={`relative rounded-2xl border-2 p-5 cursor-pointer transition-all duration-300 ${branch === b.id ? "border-orange bg-orange/8 shadow-orange-sm" : "border-white/8 bg-white/2 hover:border-orange/40"}`}>
                      <input type="radio" name="branch" value={b.id} checked={branch === b.id}
                        onChange={() => setBranch(b.id)} className="sr-only" />
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${branch === b.id ? "gradient-orange shadow-orange-sm" : "bg-white/5 border border-white/10"}`}>
                          <HiLocationMarker size={16} className={branch === b.id ? "text-white" : "text-white/40"} />
                        </div>
                        <div>
                          <p className={`font-bold text-sm mb-1 transition-colors ${branch === b.id ? "text-orange" : "text-white/70"}`}>{b.tag}</p>
                          <p className="text-xs text-white/35">{b.address}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <HiPhone size={10} className="text-orange shrink-0" />
                            <p className="text-xs text-white/50 font-semibold">{b.phone}</p>
                          </div>
                        </div>
                      </div>
                      {branch === b.id && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full gradient-orange flex items-center justify-center shadow-orange-sm">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Items */}
              <div className="premium-card p-6">
                <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">2</span>
                  Select Items
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide">
                  {filteredCategories.map(cat => (
                    <button key={cat.id} type="button" onClick={() => setActiveCategory(cat.id)}
                      className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${activeCategory === cat.id
                        ? "gradient-orange border-transparent text-white shadow-orange-sm"
                        : "bg-white/3 border-white/8 text-white/40 hover:border-orange/40 hover:text-orange"
                      }`}>
                      {cat.label}
                    </button>
                  ))}
                </div>
                {activeCategory === "breakfast" && (
                  <div className="mb-4 flex items-center gap-2.5 rounded-xl border border-orange/20 bg-orange/8 px-4 py-3">
                    <span className="text-orange text-sm shrink-0">🕐</span>
                    <p className="text-xs text-orange-light font-semibold">
                      {branch === "branch1" && "Breakfast served until 12:00 PM only."}
                      {branch === "branch2" && "Breakfast served on weekends only (Saturday & Sunday)."}
                      {!branch && "Branch 1: breakfast until 12:00 PM · Branch 2: weekends only."}
                    </p>
                  </div>
                )}
                <div className="space-y-1 max-h-72 overflow-y-auto pr-1 scrollbar-hide">
                  {categoryItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between py-3 border-b border-white/4 last:border-0 hover:bg-orange/3 px-2 rounded-lg transition-colors">
                      <div>
                        <p className="text-sm font-semibold text-white/80">{item.name}</p>
                        <p className="text-xs text-white/30 mt-0.5">
                          {item.unit}{item.pieces ? ` (${item.pieces})` : ""} · <span className="text-orange font-bold">{item.price != null ? `Rs. ${item.price.toLocaleString()}` : "Ask in-store"}</span>
                        </p>
                      </div>
                      {item.price != null ? (
                        <div className="flex items-center gap-2.5">
                          <button type="button" onClick={() => updateCart(item.id, -1)}
                            className="w-8 h-8 rounded-xl border border-white/10 bg-white/3 text-white/60 hover:border-orange/50 hover:text-orange hover:bg-orange/10 transition-all flex items-center justify-center text-lg leading-none">−</button>
                          <span className={`w-5 text-center text-sm font-bold transition-colors ${(cart[item.id] || 0) > 0 ? "text-orange" : "text-white/30"}`}>{cart[item.id] || 0}</span>
                          <button type="button" onClick={() => updateCart(item.id, 1)}
                            className="w-8 h-8 rounded-xl gradient-orange text-white hover:shadow-orange-sm transition-all flex items-center justify-center text-lg leading-none">+</button>
                        </div>
                      ) : (
                        <span className="text-xs text-white/20 italic">Not orderable online</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Details */}
              <div className="premium-card p-6">
                <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full gradient-orange text-white text-sm flex items-center justify-center font-bold shadow-orange-sm">3</span>
                  Your Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="input" />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" className="input" />
                  <input name="address" value={form.address} onChange={handleChange} placeholder="Delivery Address *" className="input sm:col-span-2" />
                  <input name="city" value={form.city} onChange={handleChange} placeholder="City *" className="input" />
                  <input name="notes" value={form.notes} onChange={handleChange} placeholder="Special instructions (optional)" className="input" />
                </div>
                <div className="mt-5">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Payment Method</p>
                  <div className="flex gap-3">
                    {[{ id: "cod", label: "💵 Cash on Delivery" }, { id: "bank", label: "🏦 Bank Transfer" }].map(p => (
                      <label key={p.id} className={`flex-1 cursor-pointer border-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all text-center ${payment === p.id ? "border-orange bg-orange/10 text-orange" : "border-white/8 bg-white/2 text-white/35 hover:border-orange/30"}`}>
                        <input type="radio" name="payment" value={p.id} checked={payment === p.id} onChange={() => setPayment(p.id)} className="sr-only" />
                        {p.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {error && (
                <div className="border border-red-500/20 bg-red-500/8 rounded-xl px-4 py-3 text-sm text-red-400 flex items-center gap-2">
                  <span>⚠️</span> {error}
                </div>
              )}

              <button type="submit"
                className="w-full btn-orange rounded-2xl py-4 text-sm group overflow-hidden">
                <FaWhatsapp size={18} />
                Place Order — Rs. {total.toLocaleString()}
              </button>
            </div>

            {/* RIGHT: Order Summary */}
            <div className="lg:col-span-1">
              <div className="premium-card p-6 sticky top-28">
                <h3 className="font-display text-lg text-orange mb-1 font-bold">Order Summary</h3>
                <p className="text-xs text-white/25 mb-5">Receipt will be sent via WhatsApp</p>

                {branch && (
                  <div className="bg-orange/8 border border-orange/15 rounded-xl p-3 mb-4 flex items-center gap-2">
                    <HiLocationMarker size={14} className="text-orange shrink-0" />
                    <p className="text-xs text-white/60 font-semibold">{BRANCHES.find(b => b.id === branch)?.name}</p>
                  </div>
                )}

                {cartItems.length === 0
                  ? (
                    <div className="py-8 text-center">
                      <p className="text-3xl mb-2">🛒</p>
                      <p className="text-white/20 text-sm">No items added yet</p>
                    </div>
                  ) : (
                    <ul className="space-y-2.5 mb-4 max-h-48 overflow-y-auto scrollbar-hide">
                      {cartItems.map(i => (
                        <li key={i.id} className="flex justify-between text-sm border-b border-white/4 pb-2.5">
                          <span className="text-white/50">{i.name} × {i.qty}</span>
                          <span className="text-white/80 font-bold">Rs. {(i.price * i.qty).toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }

                <div className="space-y-2 border-t border-white/8 pt-4">
                  <div className="flex justify-between text-sm text-white/40">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/40">
                    <span>🛵 Delivery Charge</span>
                    <span className="text-orange">Rs. 250</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/8">
                    <span className="text-white/60 font-bold">Total</span>
                    <span className="text-gradient font-display text-2xl font-bold">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl border border-green-500/15 bg-green-500/5 flex items-center gap-2">
                  <FaWhatsapp size={14} className="text-green-400 shrink-0" />
                  <p className="text-xs text-white/35">
                    Order receipt sent to {branch ? BRANCHES.find(b => b.id === branch)?.tag : "branch"} WhatsApp:{" "}
                    <span className="text-green-400 font-bold">{branch ? BRANCHES.find(b => b.id === branch)?.phone : "select a branch"}</span>
                  </p>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
