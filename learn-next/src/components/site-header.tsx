import Link from "next/link";
import { CheckoutButton } from "@/components/paddle-checkout";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Jas Learning home">
          <span aria-hidden="true">jas</span>
          <strong>Learning</strong>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#course">Course</Link>
          <Link href="/#curriculum">Outline</Link>
        </nav>
        <CheckoutButton className="header-purchase">Get access</CheckoutButton>
      </div>
    </header>
  );
}
