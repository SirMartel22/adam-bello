import Link from "next/link";
import { FooterNameReveal } from "@/components/motion";

export function SiteFooter() {
  return <footer className="site-footer reference-footer"><div className="footer-top"><div><h2>Get in touch</h2><a href="mailto:hello@example.com">hello@example.com</a><small>Temporary email address</small></div><div className="footer-links"><div><Link href="/about">About</Link><Link href="/work-with-me">Work with me</Link><Link href="/work">Selected work</Link><Link href="/field-notes">Field notes</Link></div><div><a href="#">LinkedIn</a><a href="#">X / Twitter</a><Link href="/contact">Contact</Link></div></div></div><FooterNameReveal /><div className="footer-base"><span>© {new Date().getFullYear()} Adam Bello</span><span>Portfolio template — content and imagery pending verification</span></div></footer>;
}
