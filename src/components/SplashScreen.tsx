import React, { useEffect, useState } from "react";
import logoImage from "../assets/images/azilogo192.png";
import TypewriterText from "./AnimatedText";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Imaginea de fundal */}
      <div
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ backgroundImage: "url('/onboarding_bg.jpg')" }}
      ></div>
      
      {/* Conținut centrat */}
      <div className="absolute inset-0 z-10 flex flex-col items-center pt-18">
        <img
          src={logoImage}
          alt="Logo"
          className="w-24 h-24 mb-46 animate-pulse"
        />
        <TypewriterText text="Se pregateste livrarea ...."/>

        {/* Bara de progres */}
        <div className="w-3/4 h-4 bg-white rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;