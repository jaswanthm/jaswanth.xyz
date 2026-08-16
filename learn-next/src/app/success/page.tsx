import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Payment received",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="simple-page">
      <section className="success-card">
        <span className="success-mark" aria-hidden="true">✓</span>
        <p className="section-label">Payment complete</p>
        <h1>Thank you for joining.</h1>
        <p>
          Paddle will send your payment receipt to the email address used at checkout.
          Keep it as your proof of purchase and check your spam folder if it does not
          arrive shortly.
        </p>
        <p>
          Course communication and access details are handled separately using that same
          email address.
        </p>
        <Link className="text-link" href="/">Return to the course page →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
