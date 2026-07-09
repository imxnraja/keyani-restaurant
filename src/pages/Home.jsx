import { useEffect } from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import SpecialDishes from "../components/home/SpecialDishes";
import ReviewsPreview from "../components/home/ReviewsPreview";

export default function Home() {
  useEffect(() => { document.title = "Keyani Restaurant | Authentic Pakistani BBQ & Karahi — Wah Cantt"; }, []);
  return (
    <>
      <Hero />
      <About />
      <SpecialDishes />
      <ReviewsPreview />
    </>
  );
}
