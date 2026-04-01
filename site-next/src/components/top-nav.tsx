"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="site-nav-wrap">
      <div className="site-nav">
        <Link href="/" className="brand-link">
          <span className="brand-dot" aria-hidden="true" />
          Jaswanth Manigundan
        </Link>
        <nav aria-label="Primary">
          <ul>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? "nav-link is-active" : "nav-link"}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
