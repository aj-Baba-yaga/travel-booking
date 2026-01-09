import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Destinations from "./components/Destinations";
import WhyChoose from "./components/WhyChoose";
import TravelTips from "./components/TravelTips";
import Footer from "./components/Footer";
import AuthModal from "./components/modals/AuthModal";

import { RegionProvider } from "./components/context/RegionContext";
import { detectRegionFromIP } from "./data/pricing";

function App() {
  const [region, setRegion] = useState("OTHER"); // default for you, or "OTHER"

  const [activeCategory, setActiveCategory] = useState("flights");

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin"); // "signin" | "signup"

  const [searchDestination, setSearchDestination] = useState("");

  useEffect(() => {
    let mounted = true;
    detectRegionFromIP().then((r) => mounted && setRegion(r));
    return () => (mounted = false);
  }, []);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleSearch = ({ type, destination }) => {
    // keep tabs synced (optional but product-like)
    if (type) setActiveCategory(type);

    setSearchDestination(destination || "");

    const el = document.getElementById("trending");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <RegionProvider region={region}>
      <>
        <TopBar onOpenAuth={openAuth} />
        <Navbar onOpenAuth={openAuth} />

        <Hero
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onSearch={handleSearch}
        />

        <Trending
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchDestination={searchDestination}
        />

        <Destinations />
        <WhyChoose />
        <TravelTips />
        <Footer />

        <AuthModal
          open={authOpen}
          mode={authMode}
          onClose={() => setAuthOpen(false)}
          onSwitch={(m) => setAuthMode(m)}
        />
      </>
    </RegionProvider>
  );
}

export default App;
