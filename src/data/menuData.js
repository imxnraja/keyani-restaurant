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

// ── Branch 2 (GT Road) — full real in-store menu ────────────
export const branch2Categories = [
  { id: "shinwari", label: "Shinwari" },
  { id: "chicken-karahi", label: "Chicken Karahi" },
  { id: "mutton-karahi", label: "Mutton Karahi" },
  { id: "chicken-handi", label: "Chicken Handi" },
  { id: "mutton-handi", label: "Mutton Handi" },
  { id: "bbq", label: "B.B.Q" },
  { id: "bbq-karahi", label: "B.B.Q Karahi" },
  { id: "bbq-platter", label: "BBQ Platter" },
  { id: "tawa-special", label: "Tawa Special" },
  { id: "chinese", label: "Chinese" },
  { id: "breakfast", label: "Breakfast" },
  { id: "ready-to-eat", label: "Ready to Eat" },
  { id: "fastfood", label: "Fast Food" },
  { id: "breads", label: "Roti & Naan" },
  { id: "winter-fish", label: "Winter Special — Fish (Not available in summers)" },
  { id: "soup", label: "Soup (Not available in summers)" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "bar", label: "Bar & Shakes" },
  { id: "drinks", label: "Drinks" },
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
  { id: "k-9",  category: "karahi", name: "Chicken Makhni Karahi",  price: 2390, unit: "full" },
  { id: "k-10", category: "karahi", name: "Chicken Makhni Karahi",  price: 1240, unit: "half" },
  { id: "k-11", category: "karahi", name: "Handi Karahi (Chicken)", price: 1500, unit: "full" },
  { id: "k-12", category: "karahi", name: "Handi Karahi (Chicken)", price: 800,  unit: "half" },
  { id: "k-13", category: "karahi", name: "Shinwari Karahi",        price: 1800, unit: "full" },
  { id: "k-14", category: "karahi", name: "Shinwari Karahi",        price: 950,  unit: "half" },

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

// Branch 2 items — full real in-store menu (all prices in PKR)
// Note: 3 items (Cold Drink 1.5L, Water Large/Small) had no legible price on the
// physical menu photo — price is left as `null` and shown as "—" until confirmed.
export const branch2Items = [
  // ─── SHINWARI ────────────────────────────────────────────
  { id: "b2-sh-1",  category: "shinwari", name: "Mutton Shinwari Karahi",  price: 3690, unit: "full" },
  { id: "b2-sh-2",  category: "shinwari", name: "Mutton Shinwari Karahi",  price: 1890, unit: "half" },
  { id: "b2-sh-3",  category: "shinwari", name: "Mutton Sulemani Karahi",  price: 3690, unit: "full" },
  { id: "b2-sh-4",  category: "shinwari", name: "Mutton Sulemani Karahi",  price: 1890, unit: "half" },
  { id: "b2-sh-5",  category: "shinwari", name: "Dumba Karahi",            price: 3890, unit: "full" },
  { id: "b2-sh-6",  category: "shinwari", name: "Dumba Karahi",            price: 1990, unit: "half" },
  { id: "b2-sh-7",  category: "shinwari", name: "Chicken Shinwari Karahi", price: 1990, unit: "full" },
  { id: "b2-sh-8",  category: "shinwari", name: "Chicken Shinwari Karahi", price: 1040, unit: "half" },
  { id: "b2-sh-9",  category: "shinwari", name: "Chicken Sulemani Karahi", price: 1990, unit: "full" },
  { id: "b2-sh-10", category: "shinwari", name: "Chicken Sulemani Karahi", price: 1040, unit: "half" },
  { id: "b2-sh-11", category: "shinwari", name: "Mutton Rosh",             price: 1090, unit: "per plate" },
  { id: "b2-sh-12", category: "shinwari", name: "Mutton Tikka",            price: 3690, unit: "per kg" },
  { id: "b2-sh-13", category: "shinwari", name: "Kabli Pulao",             price: 1100, unit: "full" },
  { id: "b2-sh-14", category: "shinwari", name: "Kabli Pulao",             price: 550,  unit: "half" },
  { id: "b2-sh-15", category: "shinwari", name: "Angara Chicken",          price: 1490, unit: "per plate" },
  { id: "b2-sh-16", category: "shinwari", name: "Afghani Naan",            price: 70,   unit: "per piece" },
  { id: "b2-sh-17", category: "shinwari", name: "Dampukht",                price: 3690, unit: "per kg" },

  // ─── CHICKEN KARAHI ──────────────────────────────────────
  { id: "b2-ck-1",  category: "chicken-karahi", name: "Keyani Special Chicken Makhni Karahi", price: 2390, unit: "full" },
  { id: "b2-ck-2",  category: "chicken-karahi", name: "Keyani Special Chicken Makhni Karahi", price: 1240, unit: "half" },
  { id: "b2-ck-3",  category: "chicken-karahi", name: "Chicken Karahi",                       price: 1990, unit: "full" },
  { id: "b2-ck-4",  category: "chicken-karahi", name: "Chicken Karahi",                       price: 1040, unit: "half" },
  { id: "b2-ck-5",  category: "chicken-karahi", name: "Chicken White Karahi",                 price: 2290, unit: "full" },
  { id: "b2-ck-6",  category: "chicken-karahi", name: "Chicken White Karahi",                 price: 1190, unit: "half" },
  { id: "b2-ck-7",  category: "chicken-karahi", name: "Chicken Lahori Karahi",                price: 2290, unit: "full" },
  { id: "b2-ck-8",  category: "chicken-karahi", name: "Chicken Lahori Karahi",                price: 1190, unit: "half" },
  { id: "b2-ck-9",  category: "chicken-karahi", name: "Chicken Malai Karahi",                 price: 2290, unit: "full" },
  { id: "b2-ck-10", category: "chicken-karahi", name: "Chicken Malai Karahi",                 price: 1190, unit: "half" },
  { id: "b2-ck-11", category: "chicken-karahi", name: "Chicken Boneless Karahi",              price: 2990, unit: "full" },
  { id: "b2-ck-12", category: "chicken-karahi", name: "Chicken Boneless Karahi",              price: 1540, unit: "half" },
  { id: "b2-ck-13", category: "chicken-karahi", name: "Chicken Boneless White Karahi",        price: 3290, unit: "full" },
  { id: "b2-ck-14", category: "chicken-karahi", name: "Chicken Boneless White Karahi",        price: 1690, unit: "half" },

  // ─── MUTTON KARAHI ───────────────────────────────────────
  { id: "b2-mk-1",  category: "mutton-karahi", name: "Keyani Special Mutton Turkish Karahi", price: 4090, unit: "full" },
  { id: "b2-mk-2",  category: "mutton-karahi", name: "Keyani Special Mutton Turkish Karahi", price: 2090, unit: "half" },
  { id: "b2-mk-3",  category: "mutton-karahi", name: "Mutton Karahi",                        price: 3690, unit: "full" },
  { id: "b2-mk-4",  category: "mutton-karahi", name: "Mutton Karahi",                        price: 1890, unit: "half" },
  { id: "b2-mk-5",  category: "mutton-karahi", name: "Mutton White Karahi",                  price: 3990, unit: "full" },
  { id: "b2-mk-6",  category: "mutton-karahi", name: "Mutton White Karahi",                  price: 2090, unit: "half" },
  { id: "b2-mk-7",  category: "mutton-karahi", name: "Mutton Makhni Karahi",                 price: 4090, unit: "full" },
  { id: "b2-mk-8",  category: "mutton-karahi", name: "Mutton Makhni Karahi",                 price: 2140, unit: "half" },
  { id: "b2-mk-9",  category: "mutton-karahi", name: "Mutton Boneless Karahi",               price: 4690, unit: "full" },
  { id: "b2-mk-10", category: "mutton-karahi", name: "Mutton Boneless Karahi",               price: 2390, unit: "half" },
  { id: "b2-mk-11", category: "mutton-karahi", name: "Mutton Boneless White Karahi",         price: 4990, unit: "full" },
  { id: "b2-mk-12", category: "mutton-karahi", name: "Mutton Boneless White Karahi",         price: 2540, unit: "half" },

  // ─── CHICKEN HANDI (Boneless) ────────────────────────────
  { id: "b2-ch-1", category: "chicken-handi", name: "Keyani Special Chicken Handi", price: 2390, unit: "full" },
  { id: "b2-ch-2", category: "chicken-handi", name: "Keyani Special Chicken Handi", price: 1240, unit: "half" },
  { id: "b2-ch-3", category: "chicken-handi", name: "Chicken Handi",                price: 2090, unit: "full" },
  { id: "b2-ch-4", category: "chicken-handi", name: "Chicken Handi",                price: 1090, unit: "half" },
  { id: "b2-ch-5", category: "chicken-handi", name: "Chicken Achari Handi",         price: 2190, unit: "full" },
  { id: "b2-ch-6", category: "chicken-handi", name: "Chicken Achari Handi",         price: 1140, unit: "half" },

  // ─── MUTTON HANDI (Boneless) ─────────────────────────────
  { id: "b2-mh-1", category: "mutton-handi", name: "Keyani Special Mutton Handi", price: 3390, unit: "full" },
  { id: "b2-mh-2", category: "mutton-handi", name: "Keyani Special Mutton Handi", price: 1740, unit: "half" },
  { id: "b2-mh-3", category: "mutton-handi", name: "Mutton Handi",                price: 3190, unit: "full" },
  { id: "b2-mh-4", category: "mutton-handi", name: "Mutton Handi",                price: 1640, unit: "half" },
  { id: "b2-mh-5", category: "mutton-handi", name: "Mutton Achari Handi",         price: 3290, unit: "full" },
  { id: "b2-mh-6", category: "mutton-handi", name: "Mutton Achari Handi",         price: 1690, unit: "half" },

  // ─── B.B.Q ───────────────────────────────────────────────
  { id: "b2-bbq-1",  category: "bbq", name: "Chicken Chargha",             price: 1590, unit: "full", pieces: "Full Chicken" },
  { id: "b2-bbq-2",  category: "bbq", name: "Chicken Chargha",             price: 840,  unit: "half", pieces: "Half Chicken" },
  { id: "b2-bbq-3",  category: "bbq", name: "Chicken Tikka (Leg Piece)",   price: 450,  unit: "per piece" },
  { id: "b2-bbq-4",  category: "bbq", name: "Chicken Tikka (Chest Piece)", price: 460,  unit: "per piece" },
  { id: "b2-bbq-5",  category: "bbq", name: "Chicken Boti",                price: 1040, unit: "full", pieces: "12 pcs" },
  { id: "b2-bbq-6",  category: "bbq", name: "Chicken Boti",                price: 590,  unit: "half", pieces: "6 pcs" },
  { id: "b2-bbq-7",  category: "bbq", name: "Chicken Malai Boti",          price: 1240, unit: "full", pieces: "12 pcs" },
  { id: "b2-bbq-8",  category: "bbq", name: "Chicken Malai Boti",          price: 690,  unit: "half", pieces: "6 pcs" },
  { id: "b2-bbq-9",  category: "bbq", name: "Chicken Reshmi Kebab",        price: 1040, unit: "full", pieces: "6 pcs" },
  { id: "b2-bbq-10", category: "bbq", name: "Chicken Reshmi Kebab",        price: 590,  unit: "half", pieces: "3 pcs" },
  { id: "b2-bbq-11", category: "bbq", name: "Beef Tikka",                  price: 1040, unit: "full", pieces: "24 pcs" },
  { id: "b2-bbq-12", category: "bbq", name: "Beef Tikka",                  price: 590,  unit: "half", pieces: "12 pcs" },
  { id: "b2-bbq-13", category: "bbq", name: "Beef Seekh Kebab",            price: 1040, unit: "full", pieces: "6 pcs" },
  { id: "b2-bbq-14", category: "bbq", name: "Beef Seekh Kebab",            price: 590,  unit: "half", pieces: "3 pcs" },

  // ─── B.B.Q KARAHI ────────────────────────────────────────
  { id: "b2-bk-1",  category: "bbq-karahi", name: "Beef Tikka Fry",           price: 2290, unit: "full" },
  { id: "b2-bk-2",  category: "bbq-karahi", name: "Beef Tikka Fry",           price: 1190, unit: "half" },
  { id: "b2-bk-3",  category: "bbq-karahi", name: "Beef Seekh Kabab Fry",     price: 2290, unit: "full" },
  { id: "b2-bk-4",  category: "bbq-karahi", name: "Beef Seekh Kabab Fry",     price: 1190, unit: "half" },
  { id: "b2-bk-5",  category: "bbq-karahi", name: "Chicken Boti Fry",         price: 2990, unit: "full" },
  { id: "b2-bk-6",  category: "bbq-karahi", name: "Chicken Boti Fry",         price: 1540, unit: "half" },
  { id: "b2-bk-7",  category: "bbq-karahi", name: "Chicken Malai Boti Fry",   price: 3290, unit: "full" },
  { id: "b2-bk-8",  category: "bbq-karahi", name: "Chicken Malai Boti Fry",   price: 1690, unit: "half" },
  { id: "b2-bk-9",  category: "bbq-karahi", name: "Chicken Reshmi Kebab Fry", price: 2290, unit: "full" },
  { id: "b2-bk-10", category: "bbq-karahi", name: "Chicken Reshmi Kebab Fry", price: 1190, unit: "half" },

  // ─── BBQ PLATTER ─────────────────────────────────────────
  { id: "b2-plat-1", category: "bbq-platter", name: "BBQ Platter (2 Person)", price: 2190, unit: "serves 2",
    desc: "4 Chicken Malai Boti · 2 Chicken Kebab · 4 Chicken Tikka Boti · 6 Beef Tikka · 2 Beef Kebab · 1 Mint Raita · 1 Salad" },
  { id: "b2-plat-2", category: "bbq-platter", name: "BBQ Platter (4 Person)", price: 4290, unit: "serves 4",
    desc: "8 Chicken Malai Boti · 4 Chicken Kebab · 8 Chicken Tikka Boti · 12 Beef Tikka · 4 Beef Kebab · 2 Mint Raita · 2 Salad" },

  // ─── TAWA SPECIAL ────────────────────────────────────────
  { id: "b2-tw-1",  category: "tawa-special", name: "Mutton Boneless Boti",           price: 1790, unit: "per plate" },
  { id: "b2-tw-2",  category: "tawa-special", name: "Mutton Champ",                   price: 1590, unit: "per plate" },
  { id: "b2-tw-3",  category: "tawa-special", name: "Mutton Qeema",                   price: 1490, unit: "per plate" },
  { id: "b2-tw-4",  category: "tawa-special", name: "Keyani Special Maghaz",          price: 1190, unit: "per plate" },
  { id: "b2-tw-5",  category: "tawa-special", name: "Beef Qeema",                     price: 1190, unit: "per plate" },
  { id: "b2-tw-6",  category: "tawa-special", name: "Keyani Special Chicken Mughlai", price: 1190, unit: "per plate" },
  { id: "b2-tw-7",  category: "tawa-special", name: "Chicken Hari Mirch Masala",      price: 1190, unit: "per plate" },
  { id: "b2-tw-8",  category: "tawa-special", name: "Chicken Qeema",                  price: 1190, unit: "per plate" },
  { id: "b2-tw-9",  category: "tawa-special", name: "Grill Chicken Piece",            price: 990,  unit: "per plate" },
  { id: "b2-tw-10", category: "tawa-special", name: "Grill Chicken Boti",             price: 990,  unit: "per plate" },
  { id: "b2-tw-11", category: "tawa-special", name: "Grill Chicken Seekh Kebab",      price: 1090, unit: "per plate" },

  // ─── CHINESE (Dishes & Rice) ─────────────────────────────
  { id: "b2-cn-1",  category: "chinese", name: "Chicken Chowmein",             price: 1290, unit: "full" },
  { id: "b2-cn-2",  category: "chinese", name: "Chicken Chowmein",             price: 690,  unit: "half" },
  { id: "b2-cn-3",  category: "chinese", name: "Chicken Manchurian With Rice", price: 1390, unit: "per plate" },
  { id: "b2-cn-4",  category: "chinese", name: "Chicken Jalfarezi",            price: 1390, unit: "per plate" },
  { id: "b2-cn-5",  category: "chinese", name: "Chicken Ginger",               price: 1390, unit: "per plate" },
  { id: "b2-cn-6",  category: "chinese", name: "Dhaka Chicken",                price: 1450, unit: "full" },
  { id: "b2-cn-7",  category: "chinese", name: "Dhaka Chicken",                price: 800,  unit: "half" },
  { id: "b2-cn-8",  category: "chinese", name: "Keyani Special Rice",          price: 1090, unit: "full" },
  { id: "b2-cn-9",  category: "chinese", name: "Keyani Special Rice",          price: 640,  unit: "half" },
  { id: "b2-cn-10", category: "chinese", name: "Chicken Fried Rice",           price: 1040, unit: "full" },
  { id: "b2-cn-11", category: "chinese", name: "Chicken Fried Rice",           price: 590,  unit: "half" },
  { id: "b2-cn-12", category: "chinese", name: "Chicken Masala Rice",          price: 1040, unit: "full" },
  { id: "b2-cn-13", category: "chinese", name: "Chicken Masala Rice",          price: 590,  unit: "half" },
  { id: "b2-cn-14", category: "chinese", name: "Beef Chilli Rice",             price: 1040, unit: "full" },
  { id: "b2-cn-15", category: "chinese", name: "Beef Chilli Rice",             price: 590,  unit: "half" },
  { id: "b2-cn-16", category: "chinese", name: "Egg Fried Rice",               price: 890,  unit: "full" },
  { id: "b2-cn-17", category: "chinese", name: "Egg Fried Rice",               price: 490,  unit: "half" },
  { id: "b2-cn-18", category: "chinese", name: "Vegetable Rice",               price: 790,  unit: "full" },
  { id: "b2-cn-19", category: "chinese", name: "Vegetable Rice",               price: 440,  unit: "half" },

  // ─── BREAKFAST ───────────────────────────────────────────
  { id: "b2-bf-1",  category: "breakfast", name: "Beef Nihari",                     price: 720, unit: "full" },
  { id: "b2-bf-2",  category: "breakfast", name: "Beef Nihari",                     price: 410, unit: "half" },
  { id: "b2-bf-3",  category: "breakfast", name: "Beef Paye",                       price: 720, unit: "full" },
  { id: "b2-bf-4",  category: "breakfast", name: "Beef Paye",                       price: 410, unit: "half" },
  { id: "b2-bf-5",  category: "breakfast", name: "Special Chany",                   price: 290, unit: "full" },
  { id: "b2-bf-6",  category: "breakfast", name: "Special Chany",                   price: 170, unit: "half" },
  { id: "b2-bf-7",  category: "breakfast", name: "Egg Omlet",                       price: 90,  unit: "per plate" },
  { id: "b2-bf-8",  category: "breakfast", name: "Egg Fry",                        price: 70,  unit: "per plate" },
  { id: "b2-bf-9",  category: "breakfast", name: "Khalis Doodh Balai",              price: 160, unit: "per plate" },
  { id: "b2-bf-10", category: "breakfast", name: "Special Tawa Paratha",            price: 90,  unit: "per piece" },
  { id: "b2-bf-11", category: "breakfast", name: "Roghni Naan",                     price: 90,  unit: "per piece" },
  { id: "b2-bf-12", category: "breakfast", name: "Kulcha Naan",                     price: 60,  unit: "per piece" },
  { id: "b2-bf-13", category: "breakfast", name: "Puri With Free Channay (Weekend)",price: 70,  unit: "per plate" },
  { id: "b2-bf-14", category: "breakfast", name: "Halwa (Weekend)",                 price: 100, unit: "125g plate" },

  // ─── READY TO EAT ────────────────────────────────────────
  { id: "b2-rte-1",  category: "ready-to-eat", name: "Chicken Biryani (Double Piece)", price: 500, unit: "full" },
  { id: "b2-rte-2",  category: "ready-to-eat", name: "Chicken Biryani (Double Piece)", price: 400, unit: "half" },
  { id: "b2-rte-3",  category: "ready-to-eat", name: "Chicken Pulao",                  price: 450, unit: "full" },
  { id: "b2-rte-4",  category: "ready-to-eat", name: "Chicken Pulao",                  price: 350, unit: "half" },
  { id: "b2-rte-5",  category: "ready-to-eat", name: "Chicken Qorma",                  price: 500, unit: "per plate" },
  { id: "b2-rte-6",  category: "ready-to-eat", name: "Allo Qeema",                     price: 450, unit: "per plate" },
  { id: "b2-rte-7",  category: "ready-to-eat", name: "Dal Mash",                       price: 390, unit: "per plate" },
  { id: "b2-rte-8",  category: "ready-to-eat", name: "Dal Chana",                      price: 290, unit: "per plate" },
  { id: "b2-rte-9",  category: "ready-to-eat", name: "Kari Pakora (Wednesday)",        price: 290, unit: "per plate" },
  { id: "b2-rte-10", category: "ready-to-eat", name: "Allo Matar Gajjar",              price: 290, unit: "per plate" },
  { id: "b2-rte-11", category: "ready-to-eat", name: "Karela Dall Chana",              price: 290, unit: "per plate" },
  { id: "b2-rte-12", category: "ready-to-eat", name: "Sabzi",                          price: 250, unit: "per plate" },
  { id: "b2-rte-13", category: "ready-to-eat", name: "Daal Chawal",                    price: 310, unit: "per plate" },
  { id: "b2-rte-14", category: "ready-to-eat", name: "Channa Chawal",                  price: 310, unit: "per plate" },
  { id: "b2-rte-15", category: "ready-to-eat", name: "Fry Salan",                      price: 400, unit: "per plate" },

  // ─── FAST FOOD ───────────────────────────────────────────
  { id: "b2-ff-1",  category: "fastfood", name: "Egg Burger",                       price: 200, unit: "per piece" },
  { id: "b2-ff-2",  category: "fastfood", name: "Shami Burger",                     price: 160, unit: "per piece" },
  { id: "b2-ff-3",  category: "fastfood", name: "Shami Kebaba",                     price: 90,  unit: "per piece" },
  { id: "b2-ff-4",  category: "fastfood", name: "Samosa Plate",                     price: 50,  unit: "per plate" },
  { id: "b2-ff-5",  category: "fastfood", name: "Samosa Chaat",                     price: 190, unit: "full" },
  { id: "b2-ff-6",  category: "fastfood", name: "Samosa Chaat",                     price: 140, unit: "half" },
  { id: "b2-ff-7",  category: "fastfood", name: "Special Chicken BBQ Paratha Roll", price: 310, unit: "per piece" },
  { id: "b2-ff-8",  category: "fastfood", name: "Malai Boti Paratha Roll",          price: 380, unit: "per piece" },
  { id: "b2-ff-9",  category: "fastfood", name: "Reshmi Kabab Paratha Roll",        price: 310, unit: "per piece" },
  { id: "b2-ff-10", category: "fastfood", name: "Anda Paratha Roll",                price: 220, unit: "per piece" },
  { id: "b2-ff-11", category: "fastfood", name: "Beef Tikka Paratha Roll",          price: 310, unit: "per piece" },
  { id: "b2-ff-12", category: "fastfood", name: "Seekh Kebab Paratha Roll",         price: 310, unit: "per piece" },
  { id: "b2-ff-13", category: "fastfood", name: "Shami Kabab Paratha Roll",         price: 250, unit: "per piece" },

  // ─── ROTI & NAAN ─────────────────────────────────────────
  { id: "b2-br-1", category: "breads", name: "Tandoori Roti",        price: 25,  unit: "per piece" },
  { id: "b2-br-2", category: "breads", name: "Plain Naan",            price: 30,  unit: "per piece" },
  { id: "b2-br-3", category: "breads", name: "Roghni Naan",           price: 90,  unit: "per piece" },
  { id: "b2-br-4", category: "breads", name: "Kulcha Naan",           price: 60,  unit: "per piece" },
  { id: "b2-br-5", category: "breads", name: "Special Tawa Paratha",  price: 90,  unit: "per piece" },
  { id: "b2-br-6", category: "breads", name: "Afghani Naan",          price: 70,  unit: "per piece" },

  // ─── WINTER SPECIAL — FISH ───────────────────────────────
  { id: "b2-fish-1", category: "winter-fish", name: "Dakha Fish",           price: 1590, unit: "full", pieces: "16 pcs" },
  { id: "b2-fish-2", category: "winter-fish", name: "Dakha Fish",           price: 840,  unit: "half", pieces: "8 pcs" },
  { id: "b2-fish-3", category: "winter-fish", name: "Fish Tikka",           price: 2190, unit: "full", pieces: "12 pcs" },
  { id: "b2-fish-4", category: "winter-fish", name: "Fish Tikka",           price: 1140, unit: "half", pieces: "6 pcs" },
  { id: "b2-fish-5", category: "winter-fish", name: "Fish & Chips",         price: 1590, unit: "full", pieces: "16 pcs" },
  { id: "b2-fish-6", category: "winter-fish", name: "Fish & Chips",         price: 840,  unit: "half", pieces: "8 pcs" },
  { id: "b2-fish-7", category: "winter-fish", name: "Grill Fish With Rice", price: 3090, unit: "per plate" },

  // ─── SOUP ────────────────────────────────────────────────
  { id: "b2-sp-1",  category: "soup", name: "Keyani Special Soup",   price: 790, unit: "full" },
  { id: "b2-sp-2",  category: "soup", name: "Keyani Special Soup",   price: 440, unit: "half" },
  { id: "b2-sp-3",  category: "soup", name: "Hot & Sour Soup",       price: 740, unit: "full" },
  { id: "b2-sp-4",  category: "soup", name: "Hot & Sour Soup",       price: 390, unit: "half" },
  { id: "b2-sp-5",  category: "soup", name: "Chicken Corn Soup",     price: 740, unit: "full" },
  { id: "b2-sp-6",  category: "soup", name: "Chicken Corn Soup",     price: 390, unit: "half" },
  { id: "b2-sp-7",  category: "soup", name: "Chicken Mushroom Soup", price: 740, unit: "full" },
  { id: "b2-sp-8",  category: "soup", name: "Chicken Mushroom Soup", price: 390, unit: "half" },
  { id: "b2-sp-9",  category: "soup", name: "Vegetable Soup",        price: 640, unit: "full" },
  { id: "b2-sp-10", category: "soup", name: "Vegetable Soup",        price: 340, unit: "half" },

  // ─── SIDES ───────────────────────────────────────────────
  { id: "b2-sd-1", category: "sides", name: "Green Salad", price: 190, unit: "per plate" },
  { id: "b2-sd-2", category: "sides", name: "Zeera Raita", price: 100, unit: "per bowl" },
  { id: "b2-sd-3", category: "sides", name: "Mint Raita",  price: 100, unit: "per bowl" },
  { id: "b2-sd-4", category: "sides", name: "Fries",       price: 220, unit: "per plate" },

  // ─── DESSERTS ────────────────────────────────────────────
  { id: "b2-ds-1", category: "desserts", name: "Special Gajar Halwa (Winter)", price: 200, unit: "per plate" },
  { id: "b2-ds-2", category: "desserts", name: "Khoye Wali Kheer",             price: 190, unit: "per bowl" },
  { id: "b2-ds-3", category: "desserts", name: "Russian Salad",                price: 390, unit: "S" },
  { id: "b2-ds-4", category: "desserts", name: "Russian Salad",                price: 790, unit: "M" },

  // ─── BAR & SHAKES ────────────────────────────────────────
  { id: "b2-bar-1",  category: "bar", name: "Banana Milkshake",           price: 250, unit: "per glass" },
  { id: "b2-bar-2",  category: "bar", name: "Mango Milkshake",            price: 250, unit: "per glass" },
  { id: "b2-bar-3",  category: "bar", name: "Apple Milkshake",            price: 250, unit: "per glass" },
  { id: "b2-bar-4",  category: "bar", name: "Strawberry Ice Cream Shake", price: 310, unit: "per glass" },
  { id: "b2-bar-5",  category: "bar", name: "Chocolate Ice Cream Shake",  price: 310, unit: "per glass" },
  { id: "b2-bar-6",  category: "bar", name: "Vanilla Ice Cream Shake",    price: 310, unit: "per glass" },
  { id: "b2-bar-7",  category: "bar", name: "Mango Ice Cream Shake",      price: 310, unit: "per glass" },
  { id: "b2-bar-8",  category: "bar", name: "Lassi Sweet",                price: 190, unit: "per glass" },
  { id: "b2-bar-9",  category: "bar", name: "Lassi Salted",               price: 160, unit: "per glass" },
  { id: "b2-bar-10", category: "bar", name: "Mint Margarita",             price: 200, unit: "per glass" },
  { id: "b2-bar-11", category: "bar", name: "Fresh Lime",                 price: 180, unit: "per glass" },
  { id: "b2-bar-12", category: "bar", name: "Pinacolada",                 price: 310, unit: "per glass" },
  { id: "b2-bar-13", category: "bar", name: "Orange Juice",               price: 250, unit: "per glass" },
  { id: "b2-bar-14", category: "bar", name: "Peach Juice",                price: 250, unit: "per glass" },
  { id: "b2-bar-15", category: "bar", name: "Anaar (Pomegranate) Juice",  price: 450, unit: "per glass" },
  { id: "b2-bar-16", category: "bar", name: "Grapes Juice",               price: 250, unit: "per glass" },
  { id: "b2-bar-17", category: "bar", name: "KR Special Fruit Punch",     price: 350, unit: "per glass" },
  { id: "b2-bar-18", category: "bar", name: "Ice Cream Scoop",            price: 240, unit: "per scoop" },
  { id: "b2-bar-19", category: "bar", name: "Cappuccino",                 price: 250, unit: "per cup" },

  // ─── DRINKS (Hot & Cold) ─────────────────────────────────
  { id: "b2-dr-1", category: "drinks", name: "Special Doodh Pati", price: 100,  unit: "per cup" },
  { id: "b2-dr-2", category: "drinks", name: "Green Tea",          price: 70,   unit: "per cup" },
  { id: "b2-dr-3", category: "drinks", name: "Lassi Sweet",        price: 190,  unit: "per glass" },
  { id: "b2-dr-4", category: "drinks", name: "Lassi Salted",       price: 160,  unit: "per glass" },
  { id: "b2-dr-5", category: "drinks", name: "Cold Drink",         price: 250,  unit: "1.5 Ltr" },
  { id: "b2-dr-6", category: "drinks", name: "Water Bottle",       price: 140,  unit: "Large" },
  { id: "b2-dr-7", category: "drinks", name: "Water Bottle",       price: 80,   unit: "Small" },
  { id: "b2-dr-8", category: "drinks", name: "Pheeki Doodh Pati",  price: 100,  unit: "per cup" },
];

// ── Branch 1 (Aslam Market) — same real in-store menu as Branch 2, ──
// minus Shinwari, Bar & Shakes, and Tawa Special (not on Branch 1's card)
const BRANCH1_EXCLUDED_CATEGORIES = ["shinwari", "bar", "tawa-special"];

export const branch1Categories = branch2Categories.filter(
  cat => !BRANCH1_EXCLUDED_CATEGORIES.includes(cat.id)
);

export const branch1Items = branch2Items.filter(
  item => !BRANCH1_EXCLUDED_CATEGORIES.includes(item.category)
);

// ── Category banner visuals (dummy stock photos — swap for real dish
// photography later by just changing the `image` URL below) ──
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const categoryVisuals = {
  "shinwari":       { icon: "🍖", image: u("photo-1585937421612-70a008356fbe"), tagline: "Smoky Peshawari-style karahi, slow-cooked in pure ghee" },
  "chicken-karahi":  { icon: "🍛", image: u("photo-1631452180519-c014fe946bc7"), tagline: "Hand-tossed chicken karahi, fresh to order" },
  "mutton-karahi":   { icon: "🍲", image: u("photo-1585937421612-70a008356fbe"), tagline: "Rich, slow-cooked mutton karahi classics" },
  "chicken-handi":   { icon: "🥘", image: u("photo-1631452180519-c014fe946bc7"), tagline: "Creamy boneless chicken handi favourites" },
  "mutton-handi":    { icon: "🥘", image: u("photo-1585937421612-70a008356fbe"), tagline: "Slow-simmered boneless mutton handi" },
  "bbq":             { icon: "🔥", image: u("photo-1633945274405-b6c8069047b0"), tagline: "Charcoal-grilled seekh, boti & tikka" },
  "bbq-karahi":      { icon: "🍢", image: u("photo-1603360946369-dc9bb6258143"), tagline: "BBQ meets karahi — fried to perfection" },
  "bbq-platter":     { icon: "🍽️", image: u("photo-1633945274405-b6c8069047b0"), tagline: "Shareable grill platters for the table" },
  "tawa-special":    { icon: "🍳", image: u("photo-1599487488170-d11ec9c172f0"), tagline: "Sizzling tawa-fried specialities" },
  "chinese":         { icon: "🥡", image: u("photo-1603133872878-684f208fb84b"), tagline: "Chinese-style wok dishes & fried rice" },
  "breakfast":       { icon: "🍞", image: u("photo-1533089860892-a7c6f0a88666"), tagline: "Nihari, paye & classic desi nashta" },
  "ready-to-eat":    { icon: "🍚", image: u("photo-1596797038530-2c107229654b"), tagline: "Comforting home-style rice & daal" },
  "fastfood":        { icon: "🌯", image: u("photo-1568901346375-23c9450c58cd"), tagline: "Rolls, burgers & quick bites" },
  "breads":          { icon: "🫓", image: u("photo-1509440159596-0249088772ff"), tagline: "Fresh-baked tandoori roti & naan" },
  "winter-fish":     { icon: "🐟", image: u("photo-1580217593608-61931cefc821"), tagline: "Crispy fried fish, a winter favourite" },
  "soup":            { icon: "🍜", image: u("photo-1547592166-23ac45744acd"), tagline: "Warm, hearty soups made fresh" },
  "sides":           { icon: "🥗", image: u("photo-1540420773420-3366772f4999"), tagline: "Salads, raita & crispy fries" },
  "desserts":        { icon: "🍮", image: u("photo-1551024506-0bccd828d307"), tagline: "Traditional sweets to finish your meal" },
  "bar":             { icon: "🥤", image: u("photo-1572490122747-3968b75cc699"), tagline: "Shakes, juices & refreshing coolers" },
  "drinks":          { icon: "☕", image: u("photo-1544787219-7f47ccb76574"), tagline: "Tea, lassi & cold drinks" },
};
