import { useEffect, useState } from "react";

export default function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {        
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
        } else {
            clearInterval(interval)
            setDone(true)
        }
    }, 60); // typing speed

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p
      className={`text-xl font-semibold mb-10 text-white ${
        done ? "animate-bounce" : ""
      }`}
    >
      {displayedText}
    </p>
  );
}