import { SiteFooter } from "@/components/site-footer";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main className="simple-page legal-page">
      <article>
        <p className="section-label">Purchase terms</p>
        <h1>Course purchase terms</h1>
        <p>Last updated: 16 August 2026</p>
        <h2>Purchase</h2>
        <p>
          Access costs ₹15,000 INR as a one-time payment. It is not a subscription and
          will not renew automatically. Paddle is the merchant of record and provides
          checkout, tax handling, and the payment receipt.
        </p>
        <h2>Delivery</h2>
        <p>
          Course sessions, materials, and learner communication are delivered outside
          this website. Use the same email address throughout so your purchase can be
          matched to course access.
        </p>
        <h2>Refunds and billing support</h2>
        <p>
          To request help with a charge or refund, email{" "}
          <a href="mailto:hello@jaswanth.foo">hello@jaswanth.foo</a> and include your
          Paddle receipt. Any statutory consumer rights that apply to you remain
          unaffected.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Course materials are licensed to the purchaser for personal learning. They
          must not be redistributed, resold, or published without written permission.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
