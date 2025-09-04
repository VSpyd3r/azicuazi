import { useState } from "react";
import SplashScreen from "../../components/SplashScreen";
import { Link } from "react-router-dom";
import SplitText from "../../components/WelcomeAnim";
import logoImage from "../../assets/images/azilogo192.png";

export default function Onboarding() {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    // Optional: handle animation completion logic
  };

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-white text-brand-white space-y-16">
      {/* Logo */}
      <img
        src={logoImage}
        alt="Logo"
        className="fixed z-50 top-40 w-24 h-24 rounded-3xl animate-pulse"
      />

      {/* Animated Text */}
      <div className="text-center mb-12 mt-10">
        <SplitText
          text="Livrare rapidă, chiar azi!"
          className="text-3xl font-semibold text-dark"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-10px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* CTA Button */}
      <Link
        to="/signup"
        className="bg-blue-500 text-white px-6 py-4 rounded-3xl hover:opacity-90">
        Creează cont
      </Link>
    </section>
  );
}