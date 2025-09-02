import { useState } from "react";
import SplashScreen from "../../components/SplashScreen";
import { Link } from "react-router-dom";
import TypewriterText from "../../components/AnimatedText";
import SplitText from "../../components/WelcomeAnim"


export default function Onboarding() {
  const [showSplash, setShowSplash] = useState(true);
  const handleAnimationComplete = () => {
    
  }

  return showSplash ? (
    <SplashScreen  onFinish={() => setShowSplash(false)} />
  ) : (
    <section className="relative flex flex-col items-center justify-center h-screen text-brand-white">
      {/* Fundal */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/onboarding_bg.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conținut */}
      <div className="relative z-10 text-center">
        <SplitText
          text="Bine ai venit!"
          className="text-4xl font-semibold text-center text-white mb-15"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{opacity:0, y: 40}}
          to={{opacity:1, y: 0}}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        
        />
        <TypewriterText text="Obține o livrare cu doar câteva clicuri" />

        <div className="flex gap-4 justify-center mt-30">
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            Creează cont
          </Link>
        </div>
      </div>
    </section>
  );
}