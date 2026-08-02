import { useEffect, useRef } from "react";

// ISO numeric codes for African countries (used to isolate the continent)
const AFRICA_IDS = new Set([
  "012", "024", "072", "108", "120", "132", "140", "148", "174", "178", "180",
  "204", "226", "231", "232", "262", "266", "270", "288", "324", "384", "404",
  "426", "430", "434", "450", "454", "466", "478", "480", "504", "508", "516",
  "562", "566", "624", "638", "646", "678", "686", "690", "694", "706", "710",
  "716", "728", "729", "732", "748", "768", "788", "800", "834", "854", "894",
]);

type Props = { onDone: () => void };

export default function IntroGlobe({ onDone }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    let raf = 0;
    let cancelled = false;

    (async () => {
      // Loaded lazily so SSR never touches the geo libs
      const [{ geoOrthographic, geoPath, geoCircle, geoGraticule10 }, { feature, mesh }, topoMod] =
        await Promise.all([
          import("d3-geo"),
          import("topojson-client"),
          import("world-atlas/countries-110m.json"),
        ]);
      if (cancelled) return;

      const topo = (topoMod as any).default ?? topoMod;
      const countries: any = feature(topo, topo.objects.countries);
      const borders: any = mesh(topo, topo.objects.countries, (a: any, b: any) => a !== b);
      const africa = {
        type: "FeatureCollection",
        features: countries.features.filter((f: any) =>
          AFRICA_IDS.has(String(f.id).padStart(3, "0")),
        ),
      } as any;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d")!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      let w = 0, h = 0;
      const resize = () => {
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      window.addEventListener("resize", resize);

      const projection = geoOrthographic().clipAngle(90);
      const path = geoPath(projection, ctx);
      const sphere = { type: "Sphere" } as any;
      const graticule = geoGraticule10();

      // ---- timeline ----
      const AFRICA: [number, number] = [20, 2];   // heart of Africa
      const START: [number, number] = [-60, -12];
      const SPIN_MS = 3200;     // free realistic rotation
      const TRAVEL_MS = 2600;   // rotate to Africa
      const OUTLINE_MS = 1200;  // red outline draws on
      const ZOOM_MS = 1400;     // zoom into the continent
      const TOTAL = SPIN_MS + TRAVEL_MS + OUTLINE_MS + ZOOM_MS;

      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      const clamp01 = (t: number) => Math.max(0, Math.min(1, t));

      const t0 = performance.now();

      const draw = (now: number) => {
        const elapsed = now - t0;
        const base = Math.min(w, h) / 2;

        const pTravel  = clamp01((elapsed - SPIN_MS) / TRAVEL_MS);
        const pOutline = clamp01((elapsed - SPIN_MS - TRAVEL_MS) / OUTLINE_MS);
        const pZoom    = clamp01((elapsed - SPIN_MS - TRAVEL_MS - OUTLINE_MS) / ZOOM_MS);

        const spinLambda = START[0] + (elapsed / SPIN_MS) * 150;
        const lambda =
          pTravel > 0
            ? spinLambda + (AFRICA[0] - (((spinLambda % 360) + 540) % 360) + 180) * ease(pTravel)
            : spinLambda;
        const phi = START[1] + (AFRICA[1] - START[1]) * ease(pTravel);

        const scale =
          base * 0.82 * (1 + 0.35 * ease(pTravel)) * (1 + 6.5 * Math.pow(ease(pZoom), 1.6));

        projection.rotate([-lambda, -phi, 0]).scale(scale).translate([w / 2, h / 2]);
        ctx.clearRect(0, 0, w, h);

        // ocean sphere with lit gradient
        ctx.beginPath();
        path(sphere);
        const g = ctx.createRadialGradient(
          w / 2 - scale * 0.35, h / 2 - scale * 0.4, scale * 0.1,
          w / 2, h / 2, scale,
        );
        g.addColorStop(0, "#3a3a3a");
        g.addColorStop(0.6, "#161616");
        g.addColorStop(1, "#050505");
        ctx.fillStyle = g;
        ctx.fill();

        // graticule
        ctx.beginPath();
        path(graticule);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // landmasses + borders
        ctx.beginPath();
        path(countries);
        ctx.fillStyle = "#f2f2f2";
        ctx.fill();

        ctx.beginPath();
        path(borders);
        ctx.strokeStyle = "rgba(0,0,0,0.35)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Africa: red fill + animated glowing outline
        if (pOutline > 0) {
          ctx.save();
          ctx.beginPath();
          path(africa);
          ctx.fillStyle = `rgba(236,6,5,${0.25 * pOutline})`;
          ctx.fill();
          ctx.setLineDash([scale * 4, scale * 4]);
          ctx.lineDashOffset = scale * 4 * (1 - pOutline);
          ctx.strokeStyle = "#EC0605";
          ctx.lineWidth = 2.2 + 2 * pZoom;
          ctx.shadowColor = "#EC0605";
          ctx.shadowBlur = 18;
          ctx.stroke();
          ctx.restore();
        }

        // day/night terminator shading
        ctx.save();
        ctx.beginPath();
        path(sphere);
        ctx.clip();
        const shade = ctx.createRadialGradient(
          w / 2 - scale * 0.4, h / 2 - scale * 0.45, scale * 0.2,
          w / 2, h / 2, scale * 1.15,
        );
        shade.addColorStop(0, "rgba(255,255,255,0.10)");
        shade.addColorStop(0.55, "rgba(0,0,0,0)");
        shade.addColorStop(1, "rgba(0,0,0,0.75)");
        ctx.fillStyle = shade;
        ctx.fillRect(0, 0, w, h);
        ctx.restore();

        // red atmosphere rim
        if (pZoom < 0.6) {
          ctx.beginPath();
          path(geoCircle().center([lambda, phi]).radius(89.6)() as any);
          ctx.strokeStyle = `rgba(236,6,5,${0.35 * (1 - pZoom)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // fade out at the end of the zoom
        canvas.style.opacity = String(1 - clamp01((pZoom - 0.72) / 0.28));

        if (elapsed < TOTAL) raf = requestAnimationFrame(draw);
        else doneRef.current();
      };

      raf = requestAnimationFrame(draw);
      return () => window.removeEventListener("resize", resize);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <canvas ref={canvasRef} className="h-full w-full" />
      <button
        onClick={() => doneRef.current()}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.4em] text-white/50 transition-colors hover:text-brand cursor-pointer"
      >
        skip
      </button>
    </div>
  );
}
