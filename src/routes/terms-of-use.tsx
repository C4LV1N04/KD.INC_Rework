import { createFileRoute, Link } from "@tanstack/react-router";
import { KdMark } from "@/components/KdCard";
import { ArrowLeft, FileText, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms Of Use — kd.inc" },
      {
        name: "description",
        content: "Read the Terms of Use agreement for accessing and using kd.inc website.",
      },
    ],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
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
          <FileText className="h-6 w-6" />
          <span className="eyebrow">Legal Document</span>
        </div>

        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl text-ink">
          Terms Of Use
        </h1>
        <p className="mt-4 text-sm font-medium text-ink/60 border-b border-ink/10 pb-8">
          Terms and Conditions of Use Agreement
        </p>

        <div className="mt-10 space-y-8 leading-relaxed font-normal text-ink/85 text-base md:text-lg">
          <p>
            By using our website you are agreeing to comply with and be bound by the following terms of
            use. Review the terms carefully, and if you do not agree with them, do not use this
            website. The terms us, we, or our refers to Kdinc, while the term you refers to the user
            or viewer of the site.
          </p>

          <p>
            You agree to the terms and conditions as outlined in this Terms of Use Agreement with
            respect to our site. This agreement is the entire and only agreement between us and you,
            and it replaces any prior agreements you may have had with us, with respect to our site,
            products, services, and content. We reserve the right to change this agreement from time
            to time, without notification. The latest Agreement will be posted on our website, and it
            is your responsibility to review the latest agreement.
          </p>

          <section className="space-y-3 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Copyright & Intellectual Property
            </h2>
            <p>
              This site is copyrighted by us. This copyright covers all content, Kdinc, design,
              graphics, compilations, digital conversion, and magnetic translation that relates to this
              site. Copying this website, unless otherwise allowed, is a violation of our copyrights,
              and is strictly prohibited. You do not own any rights to any content on this website,
              unless it is your own work, such as messages you have written in our forum.
            </p>
            <p>
              <a
                href="https://kdinc.co.za/"
                target="_blank"
                rel="noreferrer"
                className="text-brand font-semibold underline underline-offset-4 hover:text-ink"
              >
                https://kdinc.co.za/
              </a>{" "}
              and others are our service marks or registered service marks or trademarks. Other product
              and company names mentioned on this site belong to their respective owners.
            </p>
          </section>

          <section className="space-y-3 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Limited License & Permitted Uses
            </h2>
            <p>You are granted a non-exclusive, non-transferable, revocable license to:</p>
            <ul className="list-disc pl-6 space-y-2 text-ink/80 font-normal">
              <li>Use the site strictly in accordance with this agreement.</li>
              <li>Use the site solely for internal, personal, non-commercial purposes.</li>
              <li>
                To print out information from the site solely for internal, personal, non-commercial
                purposes, ensuring that you adhere to all copyright laws and other policies in your
                usage of that information.
              </li>
            </ul>
            <p className="text-ink/70 italic text-sm pt-2">
              You are not granted permission to use any information printed from our site in any type of
              litigation or arbitration, under any circumstances.
            </p>
          </section>

          <section className="space-y-3 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Restrictions and Prohibitions of Use
            </h2>
            <p>
              Your right and license to access and use this site, including any information or
              materials on this site, are subject to the following restrictions and prohibitions of
              use:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-ink/80 font-normal">
              <li>
                You may not copy, print (except as expressed above), republish, distribute, display,
                sell, rent, lease, loan, transmit, or otherwise make available in any form, or by any
                means, all or any portion of this site or any content and materials retrieved from
                this site.
              </li>
              <li>
                You may not use the site or any materials on the site to develop any information,
                storage or retrieval system, database, information base, or any other similar type of
                resource that we offer for commercial distribution of any kind, including through
                license, sale, lease, rental, subscription, or any other type of distribution.
              </li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-ink/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-ink tracking-tight">
              Get In Touch
            </h2>
            <p>If you have any questions or inquiries regarding these Terms of Use, please contact us.</p>
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
