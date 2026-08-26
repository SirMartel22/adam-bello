"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "@/lib/contact";

const links = [["About", "/about"], ["Selected work", "/work"], ["Work with me", "/work-with-me"]];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""} ${open ? "site-nav--menu-open" : ""}`}>
      <Link href="/" className="wordmark" aria-label="Adam Bello home">Adam Bello</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href], index) => <span className="nav-item" key={href}><Link href={href}>{label}</Link>{index < links.length - 1 && <i>/</i>}</span>)}
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}><span>Menu</span>{open ? <X /> : <Menu />}</button>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Menu">
        <div className="mobile-nav-main">
          <p>Explore</p>
          {links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span><strong>{label}</strong><ArrowUpRight /></Link>)}
        </div>
        <div className="mobile-nav-aside">
          <p>Start a conversation about communities, partnerships, programmes or events.</p>
          <Link className="mobile-nav-contact" href="/contact" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight /></Link>
          <div className="mobile-nav-socials"><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.twitter} target="_blank" rel="noreferrer">X / Twitter</a></div>
          <a className="mobile-nav-email" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </nav>}
    </header>
  );
}
