import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__glow" aria-hidden="true" />
      <div className="editorial-hero__portrait" aria-hidden="true">
        <Image
          src="/Personal pictures_/Close out .jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 760px) 100vw, 58vw"
        />
      </div>

      <div className="editorial-hero__left">
        <p className="availability-badge"><span aria-hidden="true" /> Available for work</p>
        <h1 id="hero-title">
          Ecosystem &amp;<br />Community Operator<br />based in Nigeria
        </h1>
      </div>

      <div className="editorial-hero__right">
        <p>
          Hi, I&apos;m Adam Bello — I build communities, partnerships and
          programs that turn participation into meaningful opportunity.
        </p>
        <Link className="editorial-hero__cta" href="/work">
          <span aria-hidden="true"><ArrowRight /></span> See my work
        </Link>
      </div>

      <p className="editorial-hero__name" aria-hidden="true">Adam Bello</p>
    </section>
  );
}
