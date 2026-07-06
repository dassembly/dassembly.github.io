import { createTimeline } from "animejs";
import { useEffect } from "react";

const TITLE = "DASSEMBLY";

export default function Title() {
  useEffect(() => {
    createTimeline({ loop: false })
      .add(".ml1 .letter", {
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        ease: "outExpo",
        duration: 600,
        delay: (_el: unknown, i: number = 0) => 70 * (i + 1),
      })
      .add(
        ".ml1 .line",
        {
          scaleX: [0, 1],
          opacity: [0.5, 1],
          ease: "outExpo",
          duration: 700,
          delay: (_el: unknown, i: number = 0, l: unknown[] = []) =>
            80 * (l.length - i),
        },
        "-=875",
      );
  }, []);

  return (
    <section className="pt-12 pb-12 sm:pt-24 sm:pb-20">
      <h1 className="ml1 text-center text-4xl font-black sm:text-5xl lg:text-6xl dark:text-white">
        <span className="relative inline-block pt-[0.1em] pr-[0.05em] pb-[0.15em]">
          <span className="line absolute top-0 left-0 h-[3px] w-full origin-[0_0] bg-slate-900 opacity-0 dark:bg-white"></span>
          <span className="letters inline-block leading-[1em]">
            {TITLE.split("").map((letter, i) => (
              <span key={i} className="letter">
                {letter}
              </span>
            ))}
          </span>
          <span className="line absolute bottom-0 left-0 h-[3px] w-full origin-[0_0] bg-slate-900 opacity-0 dark:bg-white"></span>
        </span>
      </h1>
    </section>
  );
}
