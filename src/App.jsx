import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/layout/LoadingScreen";
import BackToTop from "./components/layout/BackToTop";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuBranch1 from "./pages/MenuBranch1";
import MenuBranch2 from "./pages/MenuBranch2";
import Reservation from "./pages/Reservation";
import OrderNow from "./pages/OrderNow";
import Reviews from "./pages/Reviews";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen visible={loading} />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/branch1" element={<MenuBranch1 />} />
          <Route path="/menu/branch2" element={<MenuBranch2 />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
