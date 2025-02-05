import { useEffect, useState } from "react";

const FINAL_TITLE = "Dassembly";

export default function Title() {
  const [showBlinker, setShowBlinker] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let state = 0;
    let initialBlinkCounter = 10;
    let index = 0;
    let finalBlinkCounter = 10;
    const interval = setInterval(() => {
      switch (state) {
        case 0:
          if (initialBlinkCounter-- <= 0) {
            state++;
          }
          break;
        case 1:
          if (index++ < FINAL_TITLE.length) {
            setTitle(() => FINAL_TITLE.substring(0, index));
          } else {
            state++;
          }
          break;
        case 2:
          if (finalBlinkCounter-- <= 0) {
            setShowBlinker(false);
            state++;
          }
          break;
        default:
          clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-32">
      <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
        {title}
        {showBlinker && (
          <span className="animate-blink inline-block w-0">|</span>
        )}
      </h1>
    </section>
  );
}
