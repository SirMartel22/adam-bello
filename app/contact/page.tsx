import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/contact";

export const metadata: Metadata = { title: "Contact", description: "Contact Adam Bello about ecosystem, community, partnerships and program work." };
export default function ContactPage() { return <main className="contact-page section-shell"><p className="kicker">Contact</p><h1>Let&apos;s make the<br />idea operational.</h1><p>Share the problem, audience, location and outcome you are working toward.</p><a className="email-link" href={`mailto:${contact.email}`}>{contact.email} <ArrowUpRight /></a><div className="contact-links" aria-label="Contact and social links"><a href={contact.phoneHref}><span>Phone</span>{contact.phone}</a><a href={contact.linkedin} target="_blank" rel="noreferrer"><span>Social</span>LinkedIn <ArrowUpRight /></a><a href={contact.twitter} target="_blank" rel="noreferrer"><span>Social</span>X / Twitter <ArrowUpRight /></a></div></main>; }
