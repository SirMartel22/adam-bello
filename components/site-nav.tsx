"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["About", "/about"], ["Selected work", "/work"], ["Field notes", "/field-notes"], ["Work with me", "/work-with-me"]];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <Link href="/" className="wordmark" aria-label="Adam Bello home">Adam Bello</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href], index) => <span className="nav-item" key={href}><Link href={href}>{label}</Link>{index < links.length - 1 && <i>/</i>}</span>)}
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}><span>Menu</span>{open ? <X /> : <Menu />}</button>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Get in touch</Link></nav>}
    </header>
  );
}
