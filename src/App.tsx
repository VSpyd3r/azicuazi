import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./Pages/onboarding/Onboarding";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <Onboarding />
  );
}

export default App;