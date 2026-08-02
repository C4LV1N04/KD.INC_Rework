import { useEffect, useRef, useState } from "react";
import { KdCardFace } from "./KdCard";
import africaNetwork from "@/assets/africa-network.jpg";

/**
 * Phase 1 — The Landing (Black).
 * The kd.inc physical card fills the view, then flips on scroll to reveal
 * the Mission Matrix on its reverse face.
 */
export function HeroFlipCard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const progress = -el.getBoundingClientRect().top / window.innerHeight;
      setFlipped(progress > 0.28);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[210vh] bg-ink" aria-label="kd.inc">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-5">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 h-[70vh] -translate-y-1/2 opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 32%, transparent), transparent)",
          }}
        />

        <div
          className="container-inline relative w-full max-w-[min(88vw,720px)]"
          style={{ perspective: "1600px" }}
        >
          <div
            className="card-3d relative aspect-[16/9.6] w-full"
            style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            <div className="backface-hidden absolute inset-0">
              <KdCardFace />
            </div>

            <div
              className="backface-hidden absolute inset-0"
              style={{ transform: "rotateY(180deg)" }}
            >
              <MissionMatrix />
            </div>
          </div>
        </div>

        <p
          className={`mt-10 eyebrow text-paper/50 transition-opacity duration-500 ${
            flipped ? "opacity-0" : "opacity-100"
          }`}
        >
          Scroll down
        </p>
      </div>
    </section>
  );
}

function MissionMatrix() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-ink shadow-card">
      <img
        src={africaNetwork}
        alt="Network map of Africa showing kd.inc's areas of impact"
        width={1408}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="relative flex h-full flex-col justify-center gap-[3cqw] px-[7%]">
        <h1 className="font-display text-[7.2cqw] leading-[0.95] font-extrabold tracking-tight text-paper uppercase">
          Our <span className="text-brand">mission: disrupting Africa&apos;s</span> landscape.
        </h1>
        <ul className="font-display flex flex-wrap gap-x-[4cqw] gap-y-[1.4cqw] text-[4.4cqw] leading-none font-light tracking-tight text-paper/85 uppercase">
          <li>Education<span className="text-brand">.</span></li>
          <li>Telecoms<span className="text-brand">.</span></li>
          <li>Health<span className="text-brand">.</span></li>
          <li>Financial<span className="text-brand">.</span></li>
        </ul>
      </div>
    </div>
  );
}
