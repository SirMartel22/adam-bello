import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__portrait">
        <Image
          src="/Personal pictures_/Close out .jpg"
          alt="Adam Bello"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 48vw"
        />
      </div>

      <div className="editorial-hero__content">
        <p className="editorial-hero__eyebrow">Product &amp; Programs Management</p>
        <h1 id="hero-title">Turning high-level vision into executable results.</h1>
        <p>
          I&apos;m  <strong style={{fontSize: "20px"}}> ADAM BELLO </strong>, and I turn big-picture <strong>WHAT IFs </strong> into 
          <strong> WHAT&apos;s NEXT.  </strong> I work at the intersection of technology,
          strategy, and operations, building the systems that help teams scale,
          align cross-functionally, and turn users into long-term advocates.
        </p>
        <Link className="editorial-hero__cta" href="#work">
          Explore case studies <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
