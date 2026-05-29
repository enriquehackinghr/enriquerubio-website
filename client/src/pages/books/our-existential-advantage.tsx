import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight, Calendar, BookOpen } from "lucide-react";
import { Link } from "wouter";

const reviews = [
  {
    quote: "Enrique Rubio has written the manual for human-centric leading in the age of AI, making a compelling case for Team Human as the true competitive advantage for tomorrow's organization.",
    name: "Gary A. Bolles",
    title: "Chair for the Future of Work",
    org: "Singularity University",
    short: "The manual for human-centric leading in the age of AI.",
  },
  {
    quote: "At a time when leaders are inundated with AI hype, this book delivers something no LLM can match: authentic human wisdom. It will challenge you to think carefully about what should be automated, what must remain deeply human, and most importantly, how organizations can preserve the conditions for real judgment, learning, and accountability. This is one of the few AI leadership books that truly understands that rapid technological change is, at its core, a human endeavor.",
    name: "Jeff Wetzler",
    title: "Author",
    org: "Ask: Tap Into the Hidden Wisdom of People Around You",
    short: "Something no LLM can match: authentic human wisdom.",
  },
  {
    quote: "Our Existential Advantage is a \"must read\" for anyone leading their business through this AI transition. The book walks the reader through the different components of the AI revolution before exploring \"the formula\" for strong leadership in this era.",
    name: "Janine Yancey",
    title: "Founder & CEO",
    org: "Emtrain",
    short: "A must read for anyone leading through this AI transition.",
  },
  {
    quote: "In a world racing to automate everything, Enrique Rubio makes the most important argument of this moment: the leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. This book is the clearest framework I've seen for what that actually looks like in practice as operational discipline. Required reading for anyone serious about leading through what comes next.",
    name: "Eynat Guez",
    title: "Co-Founder & CEO",
    org: "Papaya Global",
    short: "The clearest framework for what human leadership looks like in practice.",
  },
  {
    quote: "Enrique Rubio refocuses us on what matters most in the Age of AI: people. Our Existential Advantage is a smart, deeply human guide to leading through change while preserving the qualities that make us irreplaceable. Rubio shows us how the future belongs to leaders who can connect, create community, and build belonging. This is a timely and important book.",
    name: "Tracy Brower, PhD",
    title: "VP of Workplace Insights, Steelcase",
    org: "Author of Critical Connections and Secrets to Happiness at Work",
    short: "A smart, deeply human guide to preserving what makes us irreplaceable.",
  },
  {
    quote: "Enrique Rubio forces us to confront what leaders must become in the AI revolution. Our Existential Advantage is a disciplined, human manifesto on judgment, courage, and responsibility in the age of intelligent machines. Rubio cuts through the noise with a powerful truth: the real risk is that leaders gradually surrender the very capabilities that make them indispensable. The 90/10 principle alone should be required doctrine in every executive team.",
    name: "Nico Decock",
    title: "CHRO",
    org: "Distrilog Group",
    short: "A disciplined, human manifesto on judgment and courage.",
  },
  {
    quote: "As someone deeply engaged in leadership development and AI capability building, I found the premise of Our Existential Advantage both timely and necessary. Enrique Rubio reframes AI as a leadership challenge that asks us to protect human judgment, build trust, and lead transformation with clarity, ethics, and care.",
    name: "Clarissa Schuhmacher",
    title: "Head of Capabilities, Leadership & Culture",
    org: "Imperial Brands PLC",
    short: "Timely and necessary. Reframes AI as a human leadership challenge.",
  },
];

const parts = [
  { number: "I", roman: "I", title: "The Long View", subtitle: "Technology, Disruption, and the Shape of Change", chapters: "Chapters 1–6", summary: "Before any organization can lead AI well, it needs to understand what is actually happening. Not the version in the headlines, not the version in the vendor pitch, but the version that five centuries of technological disruption have consistently produced. Part I builds that understanding from the ground up.\n\nSix chapters move through five major technological revolutions — from the printing press to the industrial revolution, from electrification to the digital era, to the internet's restructuring of entire industries. The purpose is not historical nostalgia but pattern recognition.\n\nPart I closes with six principles distilled from the full arc of technological history. These principles are the cognitive instruments that the rest of the book applies, repeatedly and in specific domains, to the strategic, organizational, and personal challenges of AI leadership.", toc: ["Five Revolutions", "The Anatomy of Disruption", "What Makes This Revolution Different", "The Leaders Who Got It Right", "The Psychology of Technological Change", "Lessons Crystallized"] },
  { number: "II", roman: "II", title: "The Mirror", subtitle: "What AI Reveals About Human Leadership", chapters: "Chapters 7–12", summary: "Part II turns the lens from the external world to the internal one. Having established the historical shape of the disruption, the book now asks the question that most AI strategy frameworks skip entirely: what does AI say about the people leading through it?\n\nThe Bridges Story in Chapter 8 is the most important example in the book. It illustrates what the Human Advantage Matrix describes systematically: the specific capabilities that AI cannot replicate even when it can approximate their surface.\n\nChapter 9 names the Dumbification Risk directly: the gradual erosion of human judgment that occurs when AI handles more of the cognitive work that builds and maintains that judgment. The 90/10 Formula is introduced here as a practical discipline.", toc: ["The Moment We Are In", "What Machines Cannot Do", "The Dumbification Risk", "The Fear Beneath the Adoption", "The Trust Problem", "Who You Are When AI Is Your Colleague"] },
  { number: "III", roman: "III", title: "The Ecosystem", subtitle: "Understanding the Full Landscape", chapters: "Chapters 13–18", summary: "Most AI strategies fail not because the leaders behind them lack capability but because they are navigating with an incomplete map. Part III is about building the map.\n\nThe Workplace Ecosystem Framework in Chapter 13 identifies seven interconnected components that together describe how AI reshapes organizational life. The AI-Native Competitor thought experiment in Chapter 14 is the strategic diagnostic that reveals, with uncomfortable precision, where any established organization is most exposed.\n\nPart III is diagnostic before it is strategic. Its value is in completing the picture of organizational reality that AI strategy must be built on.", toc: ["The Workplace Ecosystem", "The AI-Native Competitor", "The Workforce Redefined", "The Data Foundation", "The Platform Question", "Reading the AI Landscape"] },
  { number: "IV", roman: "IV", title: "The Strategy", subtitle: "From Vision to Execution", chapters: "Chapters 19–24", summary: "Most organizations do not fail at AI because they lack good technology, but because they confuse activity for progress. Part IV is about closing the gap between AI ambition and AI value.\n\nChapter 19 starts before the roadmap and before the pilots, with intent. Chapter 20 addresses execution directly. Chapter 21 introduces the Office of Strategic AI Integration.\n\nPart IV's six chapters are designed as a connected system. Intent shapes the roadmap, the roadmap informs measurement, measurement feeds back into intent, and all three are held together by the communication that makes transformation legible to the organization living through it.", toc: ["Leading with Intent", "From Strategy to Execution", "The Office of Strategic AI Integration", "The Multi-Horizon Roadmap", "Measuring What Matters", "The AI Story"] },
  { number: "V", roman: "V", title: "The Readiness", subtitle: "Building Human and Organizational Capacity", chapters: "Chapters 25–31", summary: "Strategy without readiness is architecture without foundation. Part V addresses the investment asymmetry that defines most organizations' AI journeys: serious investment in technology deployment, minimal investment in the human and organizational capacity to use it well.\n\nThe Four Dimensions of Readiness framework provides the diagnostic: technical fluency, cultural foundation, process adaptability, and leadership capability.\n\nPart V closes by naming psychological safety as the readiness multiplier: the organizational condition that activates the return on every other readiness investment.", toc: ["Four Dimensions of Readiness", "AI Learning Moments", "Culture as Infrastructure", "Leading Without Authority", "The Change Management Imperative", "Building AI-Ready Teams", "Psychological Safety as a Strategic Asset"] },
  { number: "VI", roman: "VI", title: "The Governance", subtitle: "Ethics, Accountability, and Oversight", chapters: "Chapters 32–37", summary: "Governance is the part of AI strategy that most organizations get wrong in the same way: they treat it as a constraint on what they can do rather than as the infrastructure that makes it safe to do more.\n\nChapter 32 opens with the governance paradox: the organizations with the most mature AI governance move faster than their less-governed competitors on the initiatives that matter most.\n\nPart VI is ultimately an argument about trust: what it takes to earn it from employees, customers, regulators, and the public.", toc: ["Why Governance Enables Innovation", "The Three Layers of Governance", "AI in High-Stakes Decisions", "Bias, Fairness, and the Accountability Gap", "The Regulatory Frontier", "The Ethics of Speed"] },
  { number: "VII", roman: "VII", title: "The Innovation", subtitle: "AI as Catalyst for Reinvention", chapters: "Chapters 38–43", summary: "Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing, but somewhat better, and those that used it to become something fundamentally different. Part VII is about building the organizational capacity to be the second kind.\n\nPart VII's connecting thread is the distinction between AI as a tool and AI as a capability. A tool accomplishes a specific task. A capability changes what the organization is able to do, opens new strategic options, and compounds over time.", toc: ["Human-AI Collaboration", "When Experiments Fail", "Reinventing the Business Model", "The Innovation Operating System", "From Pilot to Platform", "Anticipating What's Next"] },
  { number: "VIII", roman: "VIII", title: "The Leader", subtitle: "Synthesis and the Road Ahead", chapters: "Chapters 44–49", summary: "Every part of this book has been about the same thing. Part VIII is where that becomes personal. Having built the full architecture of strategic AI leadership across seven parts, the book now asks: what does all of this require of the people who lead?\n\nChapter 44 synthesizes the four capabilities that define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness.\n\nChapter 49 is the personal close: a synthesis of what the book has built, a call to the three acts that distinguish leaders who shape the AI era from those who experience it.", toc: ["What Makes a Strategic AI Leader", "The Existential Advantage", "The Inner Life of an AI Leader", "Leading Across Generations", "The AI Leader's Social Responsibility", "Your Next Chapter"] },
  { number: "IX", roman: "IX", title: "The Politics of AI", subtitle: "Governance, Power, and the Responsibility to Act", chapters: "Chapters 50–55", summary: "Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked: this is the question that determines whether the AI era represents one of the great advances in human history or one of its great cautionary tales.\n\nChapter 53 addresses power concentration and the economic architecture that emerges when AI capabilities compound primarily in the hands of the organizations that can most afford them.\n\nChapter 55 closes with the argument that the leaders best positioned to shape the political and governance environment for AI are exactly the kind of leaders this book has been building.", toc: ["The Governance Vacuum", "The Precedents We Are Ignoring", "AI at War", "Power, Concentration, and Economic Architecture", "The Corporate Responsibility Imperative", "The Strategic Leader's Political Responsibility"] },
];

function PartAccordion({ part }: { part: typeof parts[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #D9D2C7" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-6 py-6 text-left hover:opacity-80 transition-opacity"
      >
        <span
          className="flex-shrink-0 w-10 text-right"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "#C41230", paddingTop: "2px" }}
        >
          {part.roman}.
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1410", letterSpacing: "-0.01em" }}>
              {part.title}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#9C8E80" }}>
              {part.subtitle}
            </span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#C41230", marginTop: "2px", letterSpacing: "0.05em" }}>
            {part.chapters}
          </p>
        </div>
        <span className="flex-shrink-0 mt-1" style={{ color: "#9C8E80" }}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      {open && (
        <div className="pb-8 pl-16">
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#4A4035", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            {part.summary.split("\n\n").map((p, i) => <p key={i} style={{ marginBottom: "0.75rem" }}>{p}</p>)}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C8E80", marginBottom: "0.75rem" }}>
              Chapters
            </p>
            <div className="flex flex-col gap-1.5">
              {part.toc.map((ch, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#C41230", minWidth: "1.2rem", textAlign: "right" }}>
                    {i + 1}
                  </span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#4A4035" }}>{ch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setName(""); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section style={{ background: "#F2EDE5", borderTop: "1px solid #D9D2C7", padding: "6rem 1.5rem" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8E80", marginBottom: "1rem" }}>
          Coming June 2026
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C1410", lineHeight: 1.15, marginBottom: "1rem" }}>
          Be First to Know
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#6B5E52", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Get notified the moment <em>Our Existential Advantage</em> is available. No spam.
        </p>

        {status === "success" ? (
          <div style={{ padding: "2rem", border: "1px solid #C41230", background: "rgba(196,18,48,0.04)" }}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", color: "#C41230", marginBottom: "0.5rem" }}>You're on the list.</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6B5E52" }}>We'll reach out as soon as it's released.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ height: "3rem", padding: "0 1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", border: "1px solid #C4B9AC", background: "#FBF9F6", color: "#1C1410", outline: "none", borderRadius: 0, flexShrink: 0, width: "140px" }}
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ height: "3rem", padding: "0 1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", border: "1px solid #C4B9AC", borderLeft: "none", background: "#FBF9F6", color: "#1C1410", outline: "none", borderRadius: 0, flex: 1 }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{ height: "3rem", padding: "0 1.75rem", background: "#C41230", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", borderRadius: 0, flexShrink: 0 }}
            >
              {status === "loading" ? "..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p style={{ marginTop: "0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#C41230" }}>Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

export default function OurExistentialAdvantage() {
  return (
    <div style={{ background: "#FAF9F6", color: "#1C1410", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "#FAF9F6", paddingTop: "7rem", paddingBottom: "5rem", borderBottom: "1px solid #D9D2C7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

            {/* Cover */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
              <div
                style={{
                  width: "min(280px, 70vw)",
                  aspectRatio: "3/4",
                  boxShadow: "0 8px 16px rgba(28,20,10,0.12), 0 32px 64px rgba(28,20,10,0.18), 4px 4px 0 0 rgba(196,18,48,0.35)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img src="/book-cover.png" alt="Our Existential Advantage" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              {/* Pre-publication label */}
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-3.5 h-3.5" style={{ color: "#C41230" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9C8E80" }}>
                  Coming June 2026
                </span>
                <span style={{ color: "#D9D2C7" }}>|</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9C8E80" }}>
                  7 Editorial Reviews
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
                  color: "#1C1410",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                Our Existential<br />Advantage
              </h1>

              {/* Subtitle */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.15rem", color: "#6B5E52", lineHeight: 1.5, marginBottom: "0.5rem" }}>
                Human Leadership in the Age of Intelligent Machines
              </p>

              {/* Author */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#9C8E80", marginBottom: "2rem", letterSpacing: "0.02em" }}>
                by <span style={{ color: "#4A4035", fontWeight: 600 }}>Enrique Rubio</span>
                <span style={{ color: "#D9D2C7", margin: "0 0.5rem" }}>|</span>
                Founder, Hacking HR
              </p>

              {/* Stats bar */}
              <div
                className="flex flex-wrap gap-0 mb-8"
                style={{ borderTop: "1px solid #D9D2C7", borderLeft: "1px solid #D9D2C7" }}
              >
                {[["9", "Parts"], ["55", "Chapters"], ["1", "Conviction"]].map(([n, l]) => (
                  <div
                    key={l}
                    style={{ padding: "1rem 1.75rem", borderRight: "1px solid #D9D2C7", borderBottom: "1px solid #D9D2C7" }}
                  >
                    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.8rem", color: "#C41230", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9C8E80", marginTop: "0.25rem" }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote
                style={{
                  borderLeft: "3px solid #C41230",
                  paddingLeft: "1.25rem",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "#4A4035",
                  lineHeight: 1.65,
                  marginBottom: "2.5rem",
                  maxWidth: "520px",
                }}
              >
                "In the age of intelligent machines, the most strategic thing you can do is become more fully, more deliberately, more courageously human."
              </blockquote>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#notify"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: "#C41230",
                    color: "#FFFFFF",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.9rem 1.75rem",
                    textDecoration: "none",
                  }}
                >
                  Notify Me at Launch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/#booking"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: "transparent",
                    color: "#1C1410",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.9rem 1.75rem",
                    textDecoration: "none",
                    border: "1px solid #D9D2C7",
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  Book Enrique to Speak
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ENDORSEMENTS STRIP */}
      <section style={{ background: "#1C1410", padding: "3.5rem 1.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
            {reviews.slice(0, 3).map((r, i) => (
              <div key={i} style={{ background: "#1C1410", padding: "2rem 2rem 1.75rem" }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1rem", color: "#E8DDD3", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  "{r.short}"
                </p>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#FFFFFF", letterSpacing: "0.05em" }}>{r.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9C8E80", marginTop: "0.15rem" }}>{r.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE BOOK */}
      <section style={{ background: "#FAF9F6", padding: "6rem 1.5rem", borderBottom: "1px solid #D9D2C7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — decorative pull quote */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8E80", marginBottom: "1.5rem" }}>
                About the Book
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  color: "#1C1410",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  marginBottom: "2rem",
                }}
              >
                "This book is not about AI. It is about you — and why your humanity remains the only advantage that cannot be replicated, automated, or scaled away."
              </p>
              <div style={{ width: "3rem", height: "3px", background: "#C41230", marginBottom: "2rem" }} />
              <div style={{ background: "#F2EDE5", border: "1px solid #D9D2C7", padding: "1.5rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C41230", marginBottom: "0.75rem", fontWeight: 700 }}>
                  The 90 / 10 Formula
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#4A4035", lineHeight: 1.7 }}>
                  Ninety percent of a leader's thinking should remain theirs, ten percent AI-augmented. The formula is a discipline against the gradual outsourcing of judgment that AI makes easy and organizational effectiveness makes dangerous.
                </p>
              </div>
            </div>

            {/* Right — thesis text */}
            <div
              className="space-y-5"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#4A4035", lineHeight: 1.8 }}
            >
              <p>This book is not about artificial intelligence. It is about people, and especially the leaders navigating this transition.</p>
              <p>More precisely, it is about what people bring to the world that AI cannot replicate, what leaders risk losing if they are not careful, and what it takes to lead with genuine judgment, ethical courage, and human care at a moment when the most powerful cognitive tools in human history are now available to every organization and individual on earth.</p>
              <p>The central argument of <em>Our Existential Advantage</em> is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable. The judgment that integrates experience with context; the ethical reasoning that weighs competing human interests; the empathy that recognizes what data cannot capture; the strategic imagination that asks not what becomes more efficient but what becomes possible.</p>
              <p>Of course, this is not optimism for its own sake. It is a claim grounded in five centuries of technological transitions, in the research on what AI can and cannot do, and in the operational reality of what organizations navigating genuine AI transformation consistently discover: the limiting factor is almost never the technology, but the quality of the human judgment, values, and leadership directing it.</p>
              <p>The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is not a diminishment. It is an invitation to become more fully what genuine leadership has always been.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section style={{ background: "#F2EDE5", padding: "6rem 1.5rem", borderBottom: "1px solid #D9D2C7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1C1410" }}>
              Editorial Reviews
            </h2>
            <div style={{ flex: 1, height: "1px", background: "#D9D2C7" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9C8E80", letterSpacing: "0.08em" }}>
              {reviews.length} endorsements
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#FAF9F6",
                  border: "1px solid #D9D2C7",
                  padding: "2rem 2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "3.5rem",
                    color: "#C41230",
                    lineHeight: 0.8,
                    opacity: 0.6,
                    display: "block",
                  }}
                >
                  "
                </span>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.93rem",
                    color: "#4A4035",
                    lineHeight: 1.75,
                    marginTop: "-0.5rem",
                  }}
                >
                  {r.quote}
                </p>
                <div style={{ borderTop: "1px solid #D9D2C7", paddingTop: "1.25rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#1C1410", letterSpacing: "0.02em" }}>
                    {r.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#9C8E80", marginTop: "0.2rem" }}>
                    {r.title}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#C41230", marginTop: "0.1rem", fontStyle: "italic" }}>
                    {r.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE THE BOOK */}
      <section style={{ background: "#FAF9F6", padding: "6rem 1.5rem", borderBottom: "1px solid #D9D2C7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-3">
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1C1410" }}>
              Inside the Book
            </h2>
            <div style={{ flex: 1, height: "1px", background: "#D9D2C7" }} />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#9C8E80", marginBottom: "2.5rem" }}>
            Nine parts. Fifty-five chapters. A complete architecture for leading through the age of AI.
          </p>

          <div>
            {parts.map((part) => (
              <PartAccordion key={part.number} part={part} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOK ENRIQUE CTA */}
      <section style={{ background: "#1C1410", padding: "6rem 1.5rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8E80", marginBottom: "1rem" }}>
                Bring This to Your Organization
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Book Enrique<br />to Speak
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#9C8E80", lineHeight: 1.7, maxWidth: "480px" }}>
                Enrique delivers keynotes and workshops built around the frameworks in this book. Your team leaves with the clarity and the tools to lead through what's coming.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 items-center lg:items-start flex-shrink-0">
              <a
                href="/#booking"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#C41230",
                  color: "#FFFFFF",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1.1rem 2.25rem",
                  textDecoration: "none",
                }}
              >
                <BookOpen className="w-4 h-4" />
                Book Enrique
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/speaking"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6B5E52",
                  textDecoration: "none",
                }}
              >
                View speaking topics
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <div id="notify">
        <NewsletterSignup />
      </div>

      <Footer />
    </div>
  );
}
