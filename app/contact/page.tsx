import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Contact Adam Bello about ecosystem, community, partnerships and program work." };
export default function ContactPage() { return <main className="contact-page section-shell"><p className="kicker">Contact</p><h1>Let&apos;s make the<br />idea operational.</h1><p>Share the problem, audience, location and outcome you are working toward.</p><a className="email-link" href="mailto:hello@example.com">hello@example.com <ArrowUpRight /></a><div className="contact-meta"><span>Email address is temporary</span><span>Social links will be added with Adam&apos;s final details</span></div></main>; }
