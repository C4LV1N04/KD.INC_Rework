import { createFileRoute } from "@tanstack/react-router";
import { HeroFlipCard } from "@/components/HeroFlipCard";
import { Reveal } from "@/components/Reveal";
import { KdMark } from "@/components/KdCard";
import skilledProfessionals from "@/assets/skilled-professionals.jpg";
import efficientProcesses from "@/assets/efficient-processes.jpg";
import cuttingEdgeTech from "@/assets/cutting-edge-tech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "kd.inc — ingeniously disruptive investment firm in Africa" },
      {
        name: "description",
        content:
          "kd.inc combines skilled professionals, efficient business processes and cutting-edge technologies to disrupt education, telecoms, health and financial landscapes across Africa.",
      },
      {
        property: "og:title",
        content: "kd.inc — ingeniously disruptive investment firm in Africa",
      },
      {
        property: "og:description",
        content:
          "Disrupting the education, telecoms, health and financial landscapes in Africa.",
      },
    ],
  }),
  component: Index,
});

const triad = [
  {
    index: "01",
    title: "Skilled Professionals",
    caption: "Curating Top Talent",
    body: "Sector experts who share one ingenuity: build what the continent actually needs, then scale it.",
    image: skilledProfessionals,
  },
  {
    index: "02",
    title: "Efficient Business Processes",
    caption: "Frictionless Operations",
    body: "Operating discipline that turns strategy into throughput — lean, measured, repeatable.",
    image: efficientProcesses,
  },
  {
    index: "03",
    title: "Cutting-Edge Technologies",
    caption: "Powering the Next Gen",
    body: "Digital platforms engineered for townships and rural markets, not just metros.",
    image: cuttingEdgeTech,
  },
];

const landscapes = [
  {
    name: "Education",
    body: "Digital learning platforms that reach learners beyond the reach of traditional infrastructure.",
  },
  {
    name: "Telecoms",
    body: "Connectivity for the unconnected — advanced comms built for informal economies.",
  },
  {
    name: "Health",
    body: "Health technology and logistics that shorten the distance between people and care.",
  },
  {
    name: "Financial",
    body: "Fin-tech rails that bring the unbanked into a real, participating digital economy.",
  },
];

const sectors = [
  "digital platforms",
  "healthcare",
  "education",
  "engineering infrastructure",
  "property development",
  "financial",
];

const subsidiaries = [
  "afrinova",
  "kako",
  "mojapay",
  "safe pozi",
  "lefatshe",
  "digitaudit",
  "maisha",
  "innovity",
  "motse",
  "asante",
  "logimed",
  "motse pele",
];


function Index() {
  return (
    <div className="min-h-screen bg-ink">
      <SiteHeader />
      <main>
        <HeroFlipCard />
        <IngeniousSection />
        <TriadSection />
        <LandscapeSection />
        <SectorsSection />
        <SubsidiariesSection />
        <FounderSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const links = [
    { label: "Mission", href: "#mission" },
    { label: "The Triad", href: "#triad" },
    { label: "Sectors", href: "#sectors" },
    { label: "Subsidiaries", href: "#subsidiaries" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between md:px-8">
        <a href="#top" className="flex min-w-0 items-center text-paper" aria-label="kd.inc home">
          <KdMark className="text-[1.6rem]" />
        </a>
        <nav className="hidden shrink-0 items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-paper/60 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="eyebrow shrink-0 rounded-full bg-brand px-5 py-2.5 text-paper transition-colors hover:bg-brand-deep md:hidden lg:inline-block"
        >
          Partner
        </a>
      </div>
    </header>
  );
}

/* ---------- Black: the definition ---------- */
function IngeniousSection() {
  return (
    <section id="mission" className="relative overflow-hidden border-t border-paper/10 bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-brand">in·gen·ious &nbsp;|&nbsp; inˈjēnyəs</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-paper uppercase sm:text-5xl md:text-7xl">
            Inventive. Original.
            <br />
            <span className="text-brand">Ingeniously disruptive.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 border-t border-paper/10 pt-12 md:grid-cols-3">
          <Reveal delay={80}>
            <p className="eyebrow text-paper/40">Our Vision</p>
            <p className="mt-4 text-lg leading-relaxed font-light text-paper/80">
              To be the ingeniously disruptive investment firm and strategic partner in Africa.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="eyebrow text-paper/40">Our &apos;Why&apos;</p>
            <p className="mt-4 text-lg leading-relaxed font-light text-paper/80">
              People are central to our existence. The kd.inc team consists of sector experts
              driven by the real economic needs of South Africa and the continent.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="eyebrow text-paper/40">Our Model</p>
            <p className="mt-4 text-lg leading-relaxed font-light text-paper/80">
              Multi-dimensional sector integration. Our businesses do not operate in silos —
              each one compounds the others.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { RotateCw } from "lucide-react";

/* ---------- White: the triad ---------- */
function TriadSection() {
  return (
    <section id="triad" className="bg-paper py-24 text-ink md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-brand">The Triad Formula</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl">
            The engine of <span className="text-brand">change</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-ink/65">
            Three forces combined into one synergy that unlocks the true potential of investments
            across diverse sectors in South Africa and beyond.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {triad.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <TriadFlipCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TriadFlipCard({ item }: { item: (typeof triad)[number] }) {
  const [flipped, setFlipped] = useState(false);

  const backDetails: Record<string, { subtitle: string; points: string[] }> = {
    "Skilled Professionals": {
      subtitle: "Talent Execution Strategy",
      points: [
        "Curated cross-disciplinary sector specialists",
        "Deep local market expertise & township roots",
        "Empowerment-driven executive leadership",
        "Mentorship & sustainable capacity building",
      ],
    },
    "Efficient Business Processes": {
      subtitle: "Operational Discipline",
      points: [
        "Lean, measured, & repeatable frameworks",
        "Automated compliance & risk management",
        "Cross-subsidiary resource optimization",
        "Data-informed throughput & capital agility",
      ],
    },
    "Cutting-Edge Technologies": {
      subtitle: "Next-Gen Tech Architecture",
      points: [
        "Low-bandwidth, offline-capable digital platforms",
        "USSD & fintech API ecosystem integration",
        "High-reliability rural telecom infrastructure",
        "Localized health tech & logistics tracking",
      ],
    },
  };

  const details = backDetails[item.title] || {
    subtitle: "Strategic Advantage",
    points: ["Scalable impact", "Market leadership", "Sustainable growth"],
  };

  return (
    <div
      className="group h-[460px] cursor-pointer select-none rounded-3xl [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${item.title} card. Click to flip over.`}
    >
      <div
        className="card-3d relative h-full w-full rounded-3xl shadow-float ring-1 ring-ink/10 transition-transform duration-700 group-hover:scale-[1.01]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Face */}
        <article className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-paper">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              width={1008}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-ink/75 backdrop-blur-md px-3 py-1 text-[0.65rem] font-semibold text-paper uppercase tracking-wider">
              <RotateCw className="h-3 w-3 text-brand animate-spin-slow" />
              Flip
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <p className="eyebrow text-brand">{item.index}</p>
              <h3 className="mt-2 font-display text-xl leading-tight font-bold tracking-tight uppercase">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-ink/70">{item.body}</p>
            </div>
            <div className="flex items-center justify-between border-t border-ink/10 pt-4 mt-2">
              <p className="eyebrow text-ink/40">{item.caption}</p>
              <span className="text-xs font-semibold text-brand hover:underline flex items-center gap-1">
                Click to flip <RotateCw className="h-3 w-3" />
              </span>
            </div>
          </div>
        </article>

        {/* Back Face */}
        <article
          className="backface-hidden absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-7 text-paper shadow-card"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <div className="flex items-center justify-between border-b border-paper/15 pb-4">
              <span className="eyebrow text-brand">{item.index} / Deep Dive</span>
              <span className="flex items-center gap-1 text-xs text-paper/60">
                <RotateCw className="h-3 w-3 text-brand" /> Click to flip back
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold uppercase text-paper">
              {item.title}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand">
              {details.subtitle}
            </p>
            <ul className="mt-5 space-y-3">
              {details.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm font-light text-paper/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-paper/5 p-4 border border-paper/10 text-center">
            <p className="text-xs font-light text-paper/70">
              Disrupting African sectors through strategy, technology & people.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

/* ---------- Red: the landscapes ---------- */
function LandscapeSection() {
  return (
    <section className="relative overflow-hidden bg-brand py-24 text-paper md:py-36">
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-30"
        style={{ background: "radial-gradient(closest-side, oklch(1 0 0 / 0.5), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-paper/70">Phase Three — Landscape Impact</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] font-extrabold tracking-tight uppercase sm:text-5xl md:text-7xl">
            Differentiation drives impact<span className="text-ink">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-paper/25 sm:grid-cols-2">
          {landscapes.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <article className="h-full bg-brand p-8 transition-colors duration-500 hover:bg-brand-deep md:p-10">
                <p className="eyebrow text-paper/60">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase md:text-4xl">
                  {item.name}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed font-light text-paper/85">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-8 border-t border-paper/25 pt-12 sm:grid-cols-3">
            {[
              { value: "11+", label: "Operating subsidiaries" },
              { value: "6", label: "Core investment sectors" },
              { value: "4", label: "Landscapes disrupted" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 eyebrow text-paper/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- White: sectors ---------- */
function SectorsSection() {
  return (
    <section id="sectors" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-brand">Our Core Investment Sectors</p>
        </Reveal>
        <div className="mt-10 border-t border-ink/10">
          {sectors.map((sector, i) => (
            <Reveal key={sector} delay={i * 60}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6 border-b border-ink/10 py-7">
                <span className="eyebrow shrink-0 text-ink/35">0{i + 1}</span>
                <h3 className="min-w-0 font-display text-2xl leading-none font-bold tracking-tight uppercase transition-colors duration-300 group-hover:text-brand sm:text-4xl md:text-5xl">
                  {sector}
                  <span className="text-brand">.</span>
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Black: subsidiaries ---------- */
function SubsidiariesSection() {
  return (
    <section id="subsidiaries" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-brand">Our Subsidiaries</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-paper uppercase sm:text-5xl">
            One group. Many fronts.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-paper/10 sm:grid-cols-3 lg:grid-cols-4">
          {subsidiaries.map((name, i) => (
            <Reveal key={name} delay={i * 40}>
              <div className="flex h-28 items-center justify-center bg-ink px-4 transition-colors duration-300 hover:bg-brand">
                <span className="font-display text-center text-lg font-semibold tracking-[0.16em] text-paper/70 uppercase transition-colors hover:text-paper">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- White: founder & communities ---------- */
function FounderSection() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.1fr_1fr] md:px-8">
        <Reveal>
          <p className="eyebrow text-brand">Our Founder</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-5xl">
            Kagisho Dichabe
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed font-light text-ink/70">
            One of Africa&apos;s ingeniously disruptive leaders, with a core strategic focus on
            digital inclusion — financial, telecoms, health, educational and property — for
            Africa, her people and their businesses, especially the informal economy.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed font-light text-ink/70">
            His passion is achieved by empowering the unbanked, unconnected, uneducated and
            underserved with digital platforms that let them participate in the digital economy
            of townships and rural areas.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl bg-ink p-9 text-paper shadow-float">
            <p className="eyebrow text-brand">Our Communities</p>
            <ul className="mt-7 space-y-4">
              {[
                "Digital Platform Development",
                "Financial Inclusion Solutions",
                "Telecommunications Solutions",
                "Healthcare Technology",
                "Property Technology (PropTech)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-paper/10 pb-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span className="font-light text-paper/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Red: contact ---------- */
function ContactSection() {
  return (
    <section id="contact" className="bg-brand py-24 text-paper md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl">
            Ready to partner with us<span className="text-ink">?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed font-light text-paper/85">
            Contact us today to explore exciting opportunities across our sectors.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+271145657890"
              className="eyebrow rounded-full bg-ink px-8 py-4 text-paper transition-transform duration-300 hover:-translate-y-1"
            >
              Call us
            </a>
            <a
              href="mailto:info@kdinc.co.za"
              className="eyebrow rounded-full border border-paper/50 px-8 py-4 text-paper transition-colors duration-300 hover:bg-paper hover:text-brand"
            >
              info@kdinc.co.za
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 sm:flex sm:justify-between md:px-8">
        <div className="flex min-w-0 items-center text-paper">
          <KdMark className="text-[1.5rem]" />
        </div>
        <p className="shrink-0 text-sm font-light text-paper/45">
          © {new Date().getFullYear()} kd.inc — ingeniously disruptive
          <span className="text-brand">.</span>
        </p>
      </div>
    </footer>
  );
}
