import { cn } from "@/lib/utils";

/**
 * The kd.inc brand mark: lowercase "kd" with "inc" set vertically alongside it.
 * The dot of the "i" in "inc" is the brand red (#EC0605) and sits at the
 * baseline beside the "d", exactly as on the physical card.
 */
function IncStack({ dotClass, textClass }: { dotClass: string; textClass: string }) {
  return (
    <span className="relative inline-flex flex-col items-center">
      <span
        className={cn("font-display leading-none font-bold", textClass)}
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {"\u0131nc"}
      </span>
      <span className={cn("absolute rounded-full bg-brand", dotClass)} aria-hidden="true" />
    </span>
  );
}

export function KdCardFace({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2rem] bg-ink px-[7%] py-[6.5%] shadow-card",
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 items-center justify-center gap-[5%]">
        <span className="font-display text-[26cqw] leading-[0.76] font-bold tracking-tight text-paper">
          kd
        </span>
        <IncStack
          textClass="text-[13cqw] tracking-[0.02em] text-paper"
          dotClass="bottom-[0.6cqw] -left-[1.9cqw] h-[3.4cqw] w-[3.4cqw]"
        />
      </div>
      <p className="font-display text-center text-[4.6cqw] leading-none font-light tracking-[0.3em] whitespace-nowrap text-paper">
        ingeniously disruptive<span className="text-brand">.</span>
      </p>
    </div>
  );
}

/** Compact lockup for the header and footer. */
export function KdMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-end gap-[0.28em]", className)}>
      <span className="font-display text-[1em] leading-[0.78] font-bold tracking-tight">kd</span>
      <IncStack
        textClass="text-[0.5em] text-current"
        dotClass="bottom-[0.02em] -left-[0.1em] h-[0.13em] w-[0.13em]"
      />
    </span>
  );
}
