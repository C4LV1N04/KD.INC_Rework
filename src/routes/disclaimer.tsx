import { createFileRoute, Link } from "@tanstack/react-router";
import { KdMark } from "@/components/KdCard";
import { ArrowLeft, AlertTriangle, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — kd.inc" },
      {
        name: "description",
        content: "Read the official website disclaimer for kd.inc.",
      },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-brand selection:text-paper">
      {/* Header */}
      <header className="border-b border-ink/10 bg-paper/95 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center text-ink hover:opacity-80 transition-opacity">
            <KdMark className="text-[1.6rem]" />
          </Link>
          <Link
            to="/"
            className="eyebrow flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-xs text-ink/80 transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-center gap-3 text-brand">
          <AlertTriangle className="h-6 w-6" />
          <span className="eyebrow">Legal Document</span>
        </div>

        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl text-ink">
          Disclaimer
        </h1>
        <p className="mt-4 text-sm font-medium text-ink/60 border-b border-ink/10 pb-8">
          Official Legal Notice & Website Disclaimer
        </p>

        <div className="mt-10 space-y-8 leading-relaxed font-normal text-ink/85 text-base md:text-lg">
          <p>
            All information contained in this website is intended for general information purposes
            only. The information is provided by Kdinc. We try to keep the information up-to-date and
            ensure that it is correct, however, we make no warranties of any kind concerning the
            accuracy, completeness, suitability, reliability, or availability of the information
            contained in this website, or any products, services, links, or graphics that may be found
            on this website. Use this information at your own risk.
          </p>

          <section className="space-y-3 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Limitation of Liability
            </h2>
            <p>
              Kdinc will not be held liable for any loss or damage, or loss of data from your use of
              this website, or in connection with this website. This includes indirect or
              consequential loss or damage.
            </p>
          </section>

          <section className="space-y-3 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Third Party Links
            </h2>
            <p>
              Kdinc has no control over websites that are linked to on this website. Those third party
              websites are under the control of their owners, and Kdinc will not be held liable for
              your use of those websites. By linking to these sites, we are not endorsing or
              recommending any information or views expressed in the content on those sites.
            </p>
          </section>

          <section className="space-y-4 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Questions or Concerns?
            </h2>
            <p>If you have any questions regarding this Disclaimer, please reach out to us.</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:info@kdinc.co.za"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-paper hover:bg-brand-deep transition-colors shadow-sm"
              >
                <Mail className="h-4 w-4" /> Email info@kdinc.co.za
              </a>
              <a
                href="tel:+271145657890"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                <Phone className="h-4 w-4" /> Call +27 11 456 57890
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-paper py-8 text-center text-sm font-light text-ink/60">
        <p>© {new Date().getFullYear()} kd.inc — ingeniously disruptive<span className="text-brand">.</span></p>
      </footer>
    </div>
  );
}
