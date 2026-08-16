"use client";

import Image from "next/image";
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
        <Link href="/" className="brand-link" aria-label="Jaswanth Manigundan, home">
          <span className="brand-monogram" aria-hidden="true">
            <span className="brand-j">j</span>
            <span className="brand-a">a</span>
            <span className="brand-s">s</span>
          </span>
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
        <Link href="/about" className="nav-profile" aria-label="About Jaswanth Manigundan">
          <Image
            src="/jaswanth-profile.png"
            alt=""
            width={48}
            height={48}
            priority
            unoptimized
          />
        </Link>
      </div>
    </header>
  );
}
