import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { EvidenceGallery } from "@/components/evidence-gallery";
import { caseStudies } from "@/lib/content";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> { const { slug } = await params; const study = caseStudies.find((item) => item.slug === slug); return study ? { title: study.title, description: study.positioning } : {}; }

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return <main className="case-main"><section className="case-hero section-shell" style={{ "--case-accent": study.accent } as CSSProperties}><Link className="back-link" href="/work"><ArrowLeft /> All work</Link><div className="case-title"><p className="kicker">{study.eyebrow}</p><h1>{study.title}</h1><p>{study.positioning}</p></div><div className="case-facts"><div><span>Role</span><strong>{study.role}</strong></div><div><span>Timeframe</span><strong>{study.timeframe}</strong></div><div><span>Headline measure</span><strong>{study.metric}</strong><small>{study.metricLabel}</small></div></div><div className="case-image"><Image src={study.image} alt={`${study.title} program`} fill priority sizes="100vw" /></div></section><article className="case-body section-shell"><div className="case-lead"><p className="kicker">The overview</p><h2>{study.summary}</h2></div>{study.ownershipNote && <aside className="ownership-note"><span>Role clarity</span><p>{study.ownershipNote}</p></aside>}<div className="case-columns"><section><p className="kicker">The challenge</p><h3>What needed to change</h3><p>{study.challenge}</p></section><section><p className="kicker">The approach</p><h3>How the work moved</h3><ul>{study.approach.map((item) => <li key={item}>{item}</li>)}</ul></section><section><p className="kicker">The outcome</p><h3>What changed</h3><p>{study.outcome}</p></section></div><section className="gallery-section"><div className="section-head split-head"><div><p className="kicker">Evidence gallery</p><h2>The work, in the field.</h2></div><p>Selected program photography and supporting evidence.</p></div><EvidenceGallery images={study.gallery} title={study.title} /></section><section className="case-lesson"><p className="kicker">Strategic lesson</p><blockquote>{study.lesson}</blockquote></section><Link className="next-link" href="/work">Explore another case study <ArrowUpRight /></Link></article></main>;
}
