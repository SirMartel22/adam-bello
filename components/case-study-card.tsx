import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return <Link className="work-row" href={`/work/${study.slug}`}><div className="work-index">0{index + 1}</div><div className="work-copy"><p className="eyebrow">{study.eyebrow}</p><h3>{study.title}</h3><p>{study.positioning}</p></div><div className="work-metric"><strong>{study.metric}</strong><span>{study.metricLabel}</span></div><div className="work-image"><Image src={study.image} alt={`${study.title} program`} fill sizes="(max-width: 800px) 100vw, 30vw" /></div><ArrowUpRight className="work-arrow" /></Link>;
}
