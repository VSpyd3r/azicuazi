import { useEffect, useState } from "react";

export default function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className={`${className} ${done ? "animate-bounce" : ""}`}>
      {displayedText}
    </p>
  );
}