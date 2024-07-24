import { useEffect, useState } from "react";

const FINAL_TITLE = "Dassembly";

export default function Title() {
  const [showBlinker, setShowBlinker] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let index = 0;
    let finalBlinkCounter = 10;
    const interval = setInterval(() => {
      if (index < FINAL_TITLE.length) {
        index++;
        setTitle(() => FINAL_TITLE.substring(0, index));
      } else if (finalBlinkCounter-- <= 0) {
        setShowBlinker(false);
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-32 pt-24">
      <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
        {title}
        {showBlinker && (
          <span className="inline-block w-0 animate-blink">|</span>
        )}
      </h1>
    </section>
  );
}
