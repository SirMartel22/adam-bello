import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link className="work-row" href={`/work/${study.slug}`}>
      <div className="work-copy">
        <div className="work-heading">
          <span className="work-index">0{index + 1}</span>
          <h3>{study.title}</h3>
        </div>
        <div className="work-summary">
          <p>{study.positioning}</p>
          <div className="work-tags">
            <span>{study.eyebrow}</span>
            <span>{study.metric} · {study.metricLabel}</span>
          </div>
        </div>
      </div>
      <div className="work-image">
        <Image src={study.image} alt={`${study.title} program`} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 34vw, 70vw" />
        <span className="work-image-arrow" aria-hidden="true"><ArrowUpRight /></span>
      </div>
    </Link>
  );
}
