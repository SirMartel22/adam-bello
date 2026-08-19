import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { fieldNotes } from "@/lib/content";

export function generateStaticParams() { return fieldNotes.map(({ slug }) => ({ slug })); }
export default async function FieldNotePage({ params }: PageProps<"/field-notes/[slug]">) { const { slug } = await params; const note = fieldNotes.find((item) => item.slug === slug); if (!note) notFound(); return <main className="article-main section-shell"><Link className="back-link" href="/field-notes"><ArrowLeft /> Field notes</Link><article><p className="kicker">{note.date}</p><h1>{note.title}</h1><p className="article-deck">{note.summary}</p><div className="placeholder-copy"><p>This is a structured placeholder for a future field note. The final piece will connect an observation from Adam&apos;s work to a practical decision, the action taken and the result.</p><h2>Observation</h2><p>What happened in the field, what pattern became visible and why it mattered.</p><h2>Decision</h2><p>How that observation changed the way a program, partnership or activation was designed.</p><h2>What it means</h2><p>A practical takeaway that another ecosystem or program operator can apply.</p></div></article></main>; }
