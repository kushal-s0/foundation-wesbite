"use client";

import { HeartHandshake, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-md font-bold text-ink" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-white">
            <HeartHandshake size={22} aria-hidden="true" />
          </span>
          <span>Nayepankh</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/volunteer"
          className="focus-ring hidden rounded-md bg-accent px-4 py-2 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 lg:inline-flex"
        >
          Join Us
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-ink lg:hidden"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div className={`border-t border-slate-100 bg-white lg:hidden ${open ? "block" : "hidden"}`}>
        <div className="section-shell py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`focus-ring block rounded-md px-3 py-3 text-sm font-semibold ${
                pathname === item.href ? "bg-blue-50 text-primary" : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
