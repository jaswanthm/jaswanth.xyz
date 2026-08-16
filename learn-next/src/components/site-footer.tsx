import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Jaswanth Manigundan</p>
      <div>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a href="mailto:hello@jaswanth.foo">Support</a>
      </div>
    </footer>
  );
}
