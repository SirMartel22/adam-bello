import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__glow" aria-hidden="true" />
      <p className="availability-badge"><span aria-hidden="true" /> Available for work</p>
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
        <h1 id="hero-title">
          Community Builder &amp;<br />Partnerships Lead<br />based in Nigeria
        </h1>
      </div>

      <div className="editorial-hero__right">
        <p>
          Hi, I&apos;m Adam Bello. I bring communities, partners and programs
          together to create opportunities that matter.
        </p>
        <Link className="editorial-hero__cta" href="/work">
          <span aria-hidden="true"><ArrowRight /></span> See my work
        </Link>
      </div>

      <p className="editorial-hero__name" aria-hidden="true">ADAM BELLO</p>
    </section>
  );
}
