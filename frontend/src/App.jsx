import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import SignIn from "./components/Sign-in";
import Complaints from "./components/Complaints";

function Home() {
  return (
    <>
      <HeroSection />
      <MapSection />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/signin" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;