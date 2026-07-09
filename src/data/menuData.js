// ============================================================
// Full menu data extracted from Keyani Restaurant menu images
// Prices are in PKR
// ============================================================

export const menuCategories = [
  { id: "bbq", label: "BBQ" },
  { id: "karahi", label: "Karahi" },
  { id: "tawa", label: "Tawa Special" },
  { id: "chanay", label: "Chanay & Nehari" },
  { id: "rice", label: "Rice & Naan" },
  { id: "raita", label: "Raita & Salad" },
  { id: "drinks", label: "Cold Drinks" },
];

// ── Branch 1 (Aslam Market) — no Tawa Special ──────────────
export const branch1Categories = [
  { id: "bbq", label: "BBQ" },
  { id: "karahi", label: "Karahi" },
  { id: "chanay", label: "Chanay & Nehari" },
  { id: "rice", label: "Rice & Naan" },
  { id: "raita", label: "Raita & Salad" },
  { id: "drinks", label: "Cold Drinks" },
];

// ── Branch 2 (GT Road) — full menu + desserts ───────────────
export const branch2Categories = [
  { id: "bbq", label: "BBQ" },
  { id: "karahi", label: "Karahi" },
  { id: "tawa", label: "Tawa Special" },
  { id: "chanay", label: "Chanay & Nehari" },
  { id: "rice", label: "Rice & Naan" },
  { id: "raita", label: "Raita & Salad" },
  { id: "drinks", label: "Cold Drinks" },
  { id: "desserts", label: "Desserts" },
];

export const menuItems = [
  // ─── BBQ ─────────────────────────────────────────────────
  { id: "bbq-1",  category: "bbq", name: "Beef Boti",          price: 550,  unit: "per plate" },
  { id: "bbq-2",  category: "bbq", name: "Beef Tikka",         price: 550,  unit: "per plate" },
  { id: "bbq-3",  category: "bbq", name: "Beef Seekh Kabab",   price: 500,  unit: "per plate" },
  { id: "bbq-4",  category: "bbq", name: "Beef Chapli Kabab",  price: 500,  unit: "per piece" },
  { id: "bbq-5",  category: "bbq", name: "Mutton Boti",        price: 700,  unit: "per plate" },
  { id: "bbq-6",  category: "bbq", name: "Mutton Tikka",       price: 700,  unit: "per plate" },
  { id: "bbq-7",  category: "bbq", name: "Mutton Seekh Kabab", price: 650,  unit: "per plate" },
  { id: "bbq-8",  category: "bbq", name: "Chicken Boti",       price: 450,  unit: "per plate" },
  { id: "bbq-9",  category: "bbq", name: "Chicken Tikka",      price: 450,  unit: "per plate" },
  { id: "bbq-10", category: "bbq", name: "Chicken Seekh",      price: 400,  unit: "per plate" },
  { id: "bbq-11", category: "bbq", name: "Mix BBQ Platter",    price: 1800, unit: "full" },
  { id: "bbq-12", category: "bbq", name: "Mix BBQ Platter",    price: 950,  unit: "half" },

  // ─── KARAHI ──────────────────────────────────────────────
  { id: "k-1",  category: "karahi", name: "Beef Karahi",            price: 1800, unit: "full" },
  { id: "k-2",  category: "karahi", name: "Beef Karahi",            price: 950,  unit: "half" },
  { id: "k-3",  category: "karahi", name: "Mutton Karahi",          price: 2200, unit: "full" },
  { id: "k-4",  category: "karahi", name: "Mutton Karahi",          price: 1150, unit: "half" },
  { id: "k-5",  category: "karahi", name: "Chicken Karahi",         price: 1400, unit: "full" },
  { id: "k-6",  category: "karahi", name: "Chicken Karahi",         price: 750,  unit: "half" },
  { id: "k-7",  category: "karahi", name: "Chicken White Karahi",   price: 1500, unit: "full" },
  { id: "k-8",  category: "karahi", name: "Chicken White Karahi",   price: 800,  unit: "half" },
  { id: "k-9",  category: "karahi", name: "Handi Karahi (Chicken)", price: 1500, unit: "full" },
  { id: "k-10", category: "karahi", name: "Handi Karahi (Chicken)", price: 800,  unit: "half" },
  { id: "k-11", category: "karahi", name: "Shinwari Karahi",        price: 1800, unit: "full" },
  { id: "k-12", category: "karahi", name: "Shinwari Karahi",        price: 950,  unit: "half" },

  // ─── TAWA SPECIAL ────────────────────────────────────────
  { id: "t-1", category: "tawa", name: "Tawa Beef",          price: 1800, unit: "full" },
  { id: "t-2", category: "tawa", name: "Tawa Beef",          price: 950,  unit: "half" },
  { id: "t-3", category: "tawa", name: "Tawa Mutton",        price: 2200, unit: "full" },
  { id: "t-4", category: "tawa", name: "Tawa Mutton",        price: 1150, unit: "half" },
  { id: "t-5", category: "tawa", name: "Tawa Chicken",       price: 1400, unit: "full" },
  { id: "t-6", category: "tawa", name: "Tawa Chicken",       price: 750,  unit: "half" },
  { id: "t-7", category: "tawa", name: "Kata Kat (Beef)",    price: 1800, unit: "full" },
  { id: "t-8", category: "tawa", name: "Kata Kat (Beef)",    price: 950,  unit: "half" },
  { id: "t-9", category: "tawa", name: "Kata Kat (Mutton)",  price: 2200, unit: "full" },
  { id: "t-10",category: "tawa", name: "Kata Kat (Mutton)",  price: 1150, unit: "half" },

  // ─── CHANAY & NEHARI ─────────────────────────────────────
  { id: "c-1", category: "chanay", name: "Chanay",          price: 350, unit: "per plate" },
  { id: "c-2", category: "chanay", name: "Paye (Beef)",     price: 400, unit: "per plate" },
  { id: "c-3", category: "chanay", name: "Paye (Mutton)",   price: 500, unit: "per plate" },
  { id: "c-4", category: "chanay", name: "Nehari (Beef)",   price: 400, unit: "per plate" },
  { id: "c-5", category: "chanay", name: "Nehari (Mutton)", price: 500, unit: "per plate" },

  // ─── RICE & NAAN ─────────────────────────────────────────
  { id: "r-1", category: "rice", name: "Beef Pulao",        price: 500, unit: "per plate" },
  { id: "r-2", category: "rice", name: "Chicken Pulao",     price: 450, unit: "per plate" },
  { id: "r-3", category: "rice", name: "Mutton Pulao",      price: 600, unit: "per plate" },
  { id: "r-4", category: "rice", name: "Plain Rice",        price: 200, unit: "per plate" },
  { id: "r-5", category: "rice", name: "Naan",              price: 30,  unit: "per piece" },
  { id: "r-6", category: "rice", name: "Roghni Naan",       price: 60,  unit: "per piece" },
  { id: "r-7", category: "rice", name: "Paratha",           price: 50,  unit: "per piece" },

  // ─── RAITA & SALAD ───────────────────────────────────────
  { id: "ra-1", category: "raita", name: "Raita",           price: 100, unit: "per bowl" },
  { id: "ra-2", category: "raita", name: "Mint Raita",      price: 120, unit: "per bowl" },
  { id: "ra-3", category: "raita", name: "Green Salad",     price: 150, unit: "per plate" },
  { id: "ra-4", category: "raita", name: "Onion Salad",     price: 100, unit: "per plate" },
  { id: "ra-5", category: "raita", name: "Kachumber Salad", price: 150, unit: "per plate" },

  // ─── COLD DRINKS ─────────────────────────────────────────
  { id: "d-1", category: "drinks", name: "Soft Drink (Can)",   price: 120, unit: "per can" },
  { id: "d-2", category: "drinks", name: "Water Bottle",        price: 80,  unit: "per bottle" },
  { id: "d-3", category: "drinks", name: "Lassi (Sweet)",       price: 200, unit: "per glass" },
  { id: "d-4", category: "drinks", name: "Lassi (Salty)",       price: 200, unit: "per glass" },
  { id: "d-5", category: "drinks", name: "Fresh Juice",         price: 250, unit: "per glass" },

  // ─── DESSERTS (Branch 2 only) ─────────────────────────────
  { id: "ds-1", category: "desserts", name: "Gulab Jamun",         price: 150, unit: "per plate" },
  { id: "ds-2", category: "desserts", name: "Kheer",               price: 180, unit: "per bowl" },
  { id: "ds-3", category: "desserts", name: "Zarda",               price: 200, unit: "per plate" },
  { id: "ds-4", category: "desserts", name: "Firni",               price: 180, unit: "per bowl" },
  { id: "ds-5", category: "desserts", name: "Ice Cream (Scoop)",   price: 120, unit: "per scoop" },
  { id: "ds-6", category: "desserts", name: "Shahi Tukray",        price: 250, unit: "per plate" },
];

// ── Branch-specific item IDs to hide from Branch 1 ──────────
const BRANCH1_HIDDEN_ITEM_IDS = ["d-5"]; // Fresh Juice

// Branch 1 items — excludes Tawa and hidden items
export const branch1Items = menuItems.filter(
  i => i.category !== "tawa" && i.category !== "desserts" && !BRANCH1_HIDDEN_ITEM_IDS.includes(i.id)
);

// Branch 2 items — full menu
export const branch2Items = menuItems;
