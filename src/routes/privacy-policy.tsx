import { createFileRoute, Link } from "@tanstack/react-router";
import { KdMark } from "@/components/KdCard";
import { ArrowLeft, Mail, Phone, Shield } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — kd.inc" },
      {
        name: "description",
        content: "Read the Privacy Policy for kd.inc regarding data collection and protection.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand selection:text-paper">
      {/* Header */}
      <header className="border-b border-paper/10 bg-ink/90 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center text-paper hover:opacity-80 transition-opacity">
            <KdMark className="text-[1.6rem]" />
          </Link>
          <Link
            to="/"
            className="eyebrow flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs text-paper/80 transition-colors hover:bg-paper hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-center gap-3 text-brand">
          <Shield className="h-6 w-6" />
          <span className="eyebrow">Legal Document</span>
        </div>

        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl text-paper">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm font-light text-paper/50 border-b border-paper/10 pb-8">
          This Privacy Policy was last modified on 2024-01-01.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed font-light text-paper/85 text-base md:text-lg">
          <p>
            Kdinc (“us”, “we”, or “our”) operates{" "}
            <a
              href="https://kdinc.co.za/"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline underline-offset-4 hover:text-paper"
            >
              https://kdinc.co.za/
            </a>{" "}
            (the “Site”). This page informs you of our policies regarding the collection, use and
            disclosure of Personal Information we receive from users of the Site.
          </p>

          <p>
            We use your Personal Information only for providing and improving the Site. By using the
            Site, you agree to the collection and use of information in accordance with this policy.
            Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have
            the same meanings as in our Terms and Conditions, accessible at{" "}
            <a
              href="https://kdinc.co.za/"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline underline-offset-4 hover:text-paper"
            >
              https://kdinc.co.za/
            </a>
            .
          </p>

          <section className="space-y-3 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Information Collection And Use
            </h2>
            <p>
              While using our Site, we may ask you to provide us with certain personally
              identifiable information that can be used to contact or identify you. Personally
              identifiable information may include but is not limited to, your name, email address,
              postal address and phone number (“Personal Information”).
            </p>
          </section>

          <section className="space-y-3 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Log Data
            </h2>
            <p>
              Like many site operators, we collect information that your browser sends whenever you
              visit our Site (“Log Data”). This Log Data may include information such as your
              computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of
              our Site that you visit, the time and date of your visit, the time spent on those pages
              and other statistics.
            </p>
          </section>

          <section className="space-y-3 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Cookies
            </h2>
            <p>
              Cookies are files with a small amount of data, which may include an anonymous unique
              identifier. Cookies are sent to your browser from a website and stored on your
              computer’s hard drive.
            </p>
            <p>
              Like many sites, we use “cookies” to collect information. You can instruct your browser
              to refuse all cookies or to indicate when a cookie is being sent. However, if you do
              not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section className="space-y-3 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Security
            </h2>
            <p>
              The security of your Personal Information is important to us, but remember that no
              method of transmission over the Internet, or method of electronic storage, is 100%
              secure. While we strive to use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-3 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Links To Other Sites
            </h2>
            <p>
              Our Site may contain links to other sites that are not operated by us. If you click on a
              third party link, you will be directed to that third party’s site. We strongly advise
              you to review the Privacy Policy of every site you visit.
            </p>
            <p>
              Kdinc has no control over, and assumes no responsibility for, the content, privacy
              policies, or practices of any third party sites or services.
            </p>
          </section>

          <section className="space-y-3 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Changes To This Privacy Policy
            </h2>
            <p>
              Kdinc may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on the Site. You are advised to review this
              Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="space-y-4 border-t border-paper/10 pt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-paper tracking-tight">
              Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:info@kdinc.co.za"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-paper hover:bg-brand-deep transition-colors"
              >
                <Mail className="h-4 w-4" /> Email info@kdinc.co.za
              </a>
              <a
                href="tel:+271145657890"
                className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                <Phone className="h-4 w-4" /> Call +27 11 456 57890
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-paper/10 bg-ink py-8 text-center text-sm font-light text-paper/45">
        <p>© {new Date().getFullYear()} kd.inc — ingeniously disruptive<span className="text-brand">.</span></p>
      </footer>
    </div>
  );
}
