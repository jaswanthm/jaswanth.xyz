import { SiteFooter } from "@/components/site-footer";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main className="simple-page legal-page">
      <article>
        <p className="section-label">Privacy</p>
        <h1>Privacy notice</h1>
        <p>Last updated: 16 August 2026</p>
        <h2>Payment information</h2>
        <p>
          Payments are processed by Paddle, our merchant of record. Paddle collects and
          processes your payment details, billing information, and email under its own
          privacy policy. This website does not receive or store your card details.
        </p>
        <h2>Course fulfilment</h2>
        <p>
          We use the name, email address, and purchase information associated with your
          Paddle transaction to confirm your purchase, communicate course access, and
          provide support.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email <a href="mailto:hello@jaswanth.foo">hello@jaswanth.foo</a>.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
