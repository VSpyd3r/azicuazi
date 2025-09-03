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
    <div className="flex items-center justify-center w-screen h-screen bg-white relative overflow-hidden">
      {/* Conținut centrat */}
      <div className="flex flex-col items-center justify-center space-y-16">
        <img
          src={logoImage}
          alt="Logo"
          className="fixed z-50 top-40 w-24 h-24 rounded-3xl animate-pulse"
        />

        <TypewriterText
          text="Se pregătește livrarea..."
          className="text-black text-2xl text-center"
        />

        {/* Bara de progres */}
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
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