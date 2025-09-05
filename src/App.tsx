import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./Pages/onboarding/Onboarding";
import Home from "./Pages/home/Home";
import Delivery from "./Pages/delivery/Delivery";
import History from "./Pages/history/History";
import Settings from "./Pages/settings/Settings";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // Durata splash screen-ului

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        {/* Redirect implicit către onboarding */}
        <Route path="*" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;