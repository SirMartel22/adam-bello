"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { caseStudies } from "@/lib/content";

export function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 761px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="horizontal-highlights">
      <header className="horizontal-highlights__header">
        <p>Selected case studies</p>
        <h2>HIGHLIGHTS</h2>
        <span>Scroll to explore</span>
      </header>

      <div ref={viewportRef} className="horizontal-highlights__viewport">
        <div ref={trackRef} className="horizontal-highlights__track">
          {caseStudies.slice(0, 6).map((study, index) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="highlight-card"
              style={{ "--card-accent": study.accent } as CSSProperties}
            >
              <div className="highlight-card__top">
                <span>0{index + 1}</span>
                <span>Case study</span>
                <ArrowUpRight />
              </div>
              <div className="highlight-card__media">
                <Image
                  src={study.image}
                  alt={`${study.title} case study`}
                  fill
                  sizes="(max-width: 760px) 84vw, 46vw"
                />
              </div>
              <div className="highlight-card__body">
                <p>{study.eyebrow}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
              </div>
              <div className="highlight-card__metric">
                <strong>{study.metric}</strong>
                <span>{study.metricLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
