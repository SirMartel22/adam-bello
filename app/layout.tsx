import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adam Bello | Community Builder & Partnerships Lead", template: "%s | Adam Bello" },
  description: "Adam Bello builds the systems that turn communities, events and partnerships into real opportunities.",
  keywords: ["Adam Bello", "community operations", "developer programs", "ecosystem strategy", "partnerships", "events"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><SmoothScroll><SiteNav />{children}<SiteFooter /></SmoothScroll></body></html>;
}
