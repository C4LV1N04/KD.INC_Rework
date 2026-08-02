import { useEffect, useRef, useState } from "react";
import { KdCardFace } from "./KdCard";
import africaNetwork from "@/assets/africa-network.jpg";
import { RotateCw } from "lucide-react";

/**
 * Phase 1 — The Landing (Black).
 * The kd.inc physical card fills the view, then flips on scroll or click to reveal
 * the Mission Matrix on its reverse face.
 */
export function HeroFlipCard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollFlipped, setScrollFlipped] = useState(false);
  const [manualFlipped, setManualFlipped] = useState<boolean | null>(null);

  const flipped = manualFlipped !== null ? manualFlipped : scrollFlipped;

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const progress = -el.getBoundingClientRect().top / window.innerHeight;
      setScrollFlipped(progress > 0.28);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFlip = () => {
    setManualFlipped((prev) => (prev === null ? !scrollFlipped : !prev));
  };

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
          className="container-inline relative w-full max-w-[min(88vw,720px)] cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-[2rem]"
          style={{ perspective: "1600px" }}
          onClick={toggleFlip}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleFlip();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={flipped ? "Card showing Mission Matrix. Click to flip back to front." : "Card showing kd.inc brand face. Click to flip to back."}
        >
          <div
            className="card-3d relative aspect-[16/9.6] w-full transition-transform duration-500 group-hover:scale-[1.015]"
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

        <button
          onClick={toggleFlip}
          className="mt-8 eyebrow text-paper/70 transition-all duration-300 hover:text-brand flex items-center gap-2 px-4 py-2 rounded-full bg-paper/5 hover:bg-paper/10 border border-paper/10"
        >
          <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-brand" />
          <span>{flipped ? "Click to view front face" : "Click card or scroll to flip"}</span>
        </button>
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
