import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fieldNotes } from "@/lib/content";

export const metadata: Metadata = { title: "Field notes", description: "Notes on community, programs, ecosystems and execution." };
export default function FieldNotesPage() { return <main className="page-main section-shell"><header className="page-hero"><p className="kicker">Field notes</p><h1>Ideas from<br />the work.</h1><p>Short observations on community, activation, partnerships and building systems that continue.</p></header><div className="notes-list notes-index">{fieldNotes.map((note) => <Link href={`/field-notes/${note.slug}`} key={note.slug}><span>{note.date}</span><h3>{note.title}</h3><p>{note.summary}</p><ArrowUpRight /></Link>)}</div></main>; }
