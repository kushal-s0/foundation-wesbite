import { Facebook, HeartHandshake, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-primary">
              <HeartHandshake size={24} aria-hidden="true" />
            </span>
            <span className="text-lg font-bold">Nayepankh Foundation</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-slate-300">
            Empowering communities through education, skill development, social welfare, and locally led change.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social media profile"
                className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-white/10 transition hover:bg-primary"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-base font-bold">Quick Links</h2>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring rounded-md text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-base font-bold">Contact</h2>
          <div className="mt-4 grid gap-4 text-slate-300">
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0" size={18} aria-hidden="true" /> Community Development Office, India</p>
            <a href="mailto:contact@nayepankh.org" className="focus-ring flex rounded-md gap-3 transition hover:text-white"><Mail size={18} aria-hidden="true" /> contact@nayepankh.org</a>
            <a href="tel:+919999999999" className="focus-ring flex rounded-md gap-3 transition hover:text-white"><Phone size={18} aria-hidden="true" /> +91 99999 99999</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell py-5 text-sm text-slate-400">
          © {new Date().getFullYear()} Nayepankh Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
