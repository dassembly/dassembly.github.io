import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

const TITLE = "DASSEMBLY";

export default function Title() {
  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (_el, i) => 70 * (i + 1),
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (_el, i, l) => 80 * (l - i),
      });
  }, []);

  return (
    <section className="pb-32 pt-24">
      <h1 className="ml1 text-center text-[3.5em] font-black dark:text-white">
        <span className="relative inline-block pb-[0.15em] pr-[0.05em] pt-[0.1em]">
          <span className="line absolute left-0 top-0 h-[3px] w-full origin-[0_0] bg-slate-900 opacity-0 dark:bg-white"></span>
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
