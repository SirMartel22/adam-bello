import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { Reveal } from "@/components/motion";

type Testimonial = {
  name: string;
  role: string;
  source: string;
  tone: string;
  pullQuote: string;
  fullRecommendation: string;
  initials: string;
  portrait?: string;
  proof?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Habeeb Abubakar",
    role: "Lead, Unilorin Fetuils Tech Hub · FrontEnd Developer · IoT & Embedded Systems Engineer",
    source: "LinkedIn recommendation · July 23, 2025",
    tone: "peach",
    pullQuote: "Adam combines strong leadership, clear communication and genuine community building with the ability to turn ideas into meaningful action.",
    fullRecommendation: "Adam consistently stands out for his leadership, community building and ability to turn ideas into meaningful action. Having worked with him across multiple organisations, I have seen his ability to bring teams together, lead volunteer initiatives and drive projects forward. He communicates complex ideas with clarity, inspires people to contribute, and combines strong execution with a genuine commitment to the communities he serves.",
    initials: "HA",
  },
  {
    name: "Aminat Afolabi",
    role: "Product Manager @ Conclase",
    source: "LinkedIn recommendation",
    tone: "sage",
    pullQuote: "Adam is exceptionally resourceful. He approaches challenges with practical solutions, brings valuable ideas to the table and consistently helps teams move toward their goals.",
    fullRecommendation: "I’ve had the opportunity to work alongside Adam on several projects, and I’ve consistently been impressed by his professionalism and resourcefulness. No matter the challenge, Adam finds practical solutions and brings valuable ideas to the table. He is dependable, collaborative and consistently goes the extra mile to ensure goals are achieved. He not only delivers on his responsibilities but also supports others in achieving theirs.",
    initials: "AA",
  },
  {
    name: "Ayokunle Abiola",
    role: "NSBE Golden Torch Awardee — Chicago · Oil & Gas · Field Engineer",
    source: "LinkedIn recommendation",
    tone: "plum",
    pullQuote: "Adam combines sharp thinking, proactive leadership and an exceptional ability to connect with people, align teams and communicate with clarity.",
    fullRecommendation: "I worked with Adam Bello for over two years at Google Developer Groups, and it has been nothing short of inspiring. We collaborated across multiple teams, most notably on a large-scale event that drew over 1,000 students. Adam consistently stood out for his sharp intellect, proactive approach and natural leadership. He balances confidence with genuine attentiveness, connects easily with people, inspires teams and communicates ideas clearly both in private discussions and on stage.",
    initials: "AA",
  },
  {
    name: "Google for Developers",
    role: "DevFest Students Edition",
    source: "External testimonial",
    tone: "peach",
    pullQuote: "You're exceeding all expectations, Adam—including ours!",
    fullRecommendation: "Thank you for putting in the work to make this #DevFest Students Edition a success.",
    initials: "G",
    proof: "/Testimonials/Testimonials .jpg",
  },
];

export default function Home() {
  return (
    <main className="reference-home">
      <HeroSection />

      <section className="reference-testimonials section-shell">
        <div className="reference-section-title"><h2>TESTIMONIALS</h2><p>What people I&apos;ve worked<br />with say about me</p></div>
        <div className="testimonial-lead"><p>Third-party perspectives on Adam&apos;s leadership, resourcefulness, communication and ability to turn ideas into meaningful action.</p></div>
        <div className="testimonial-stack">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} className={`reference-testimonial ${item.tone} card-${index + 1}`}>
              <div className="testimonial-person">
                {item.portrait ? <span className="testimonial-avatar"><Image src={item.portrait} alt={`Portrait of ${item.name}`} fill sizes="45px" /></span> : <span className="avatar-placeholder" aria-hidden="true">{item.initials}</span>}
                <div><strong>{item.name}</strong><small>{item.role}</small><small className="testimonial-source">{item.source}</small></div><b>&ldquo;</b>
              </div>
              <p>{item.pullQuote}</p>
              <details className="testimonial-full"><summary>Read full recommendation</summary><p>{item.fullRecommendation}</p></details>
              {item.proof && <div className="testimonial-proof"><Image src={item.proof} alt="Google for Developers praising Adam Bello's work on DevFest Students Edition" fill sizes="(max-width: 760px) 90vw, 46vw" /></div>}
            </Reveal>
          ))}
        </div>
      </section>

      <HighlightsSection />

      <section className="reference-programs">
        <div className="programs-feature">
          <Image className="programs-feature__background" src="/Personal pictures_/ADB.jpg" alt="Adam Bello at a community program" fill sizes="100vw" />
          <div className="programs-feature__content section-shell">
            <div className="reference-section-title"><h2>PROGRAMS<br />&amp; EVENTS</h2><p>Strategy becomes real<br />in the field.</p></div>
            <div className="programs-grid">
              <div className="programs-copy"><p>I work across technology events, developer programs, career initiatives, workshops and community gatherings. I build the structure that helps the right people take part.</p><p>The goal is not an event that looks busy for one day. It is a useful experience with a clear path toward learning, building, access, partnerships or future contribution.</p></div>
              <Link className="programs-cta" href="/work-with-me">Want to build a program<br />or activate a community?<span /><ArrowUpRight /></Link>
            </div>
          </div>
        </div>
        <div className="future-programs section-shell">
          <p className="kicker">Future programs and engagements</p>
          <h3>Planning a technology program, community activation, partnership or event?</h3>
          <Link href="/contact">Get in touch</Link>
        </div>
      </section>
    </main>
  );
}
