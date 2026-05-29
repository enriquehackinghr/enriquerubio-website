import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const reviews = [
  {
    quote: "Enrique Rubio has written the manual for human-centric leading in the age of AI, making a compelling case for Team Human as the true competitive advantage for tomorrow's organization.",
    name: "Gary A. Bolles",
    title: "Chair for the Future of Work",
    org: "Singularity University",
  },
  {
    quote: "At a time when leaders are inundated with AI hype, this book delivers something no LLM can match: authentic human wisdom. It will challenge you to think carefully about what should be automated, what must remain deeply human, and most importantly, how organizations can preserve the conditions for real judgment, learning, and accountability. This is one of the few AI leadership books that truly understands that rapid technological change is, at its core, a human endeavor.",
    name: "Jeff Wetzler",
    title: "Author",
    org: "Ask: Tap Into the Hidden Wisdom of People Around You",
  },
  {
    quote: "Our Existential Advantage is a \"must read\" for anyone leading their business through this AI transition. The book walks the reader through the different components of the AI revolution before exploring \"the formula\" for strong leadership in this era.",
    name: "Janine Yancey",
    title: "Founder & CEO",
    org: "Emtrain",
  },
  {
    quote: "In a world racing to automate everything, Enrique Rubio makes the most important argument of this moment: the leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. This book is the clearest framework I've seen for what that actually looks like in practice as operational discipline. Required reading for anyone serious about leading through what comes next.",
    name: "Eynat Guez",
    title: "Co-Founder & CEO",
    org: "Papaya Global",
  },
  {
    quote: "Enrique Rubio refocuses us on what matters most in the Age of AI: people. Our Existential Advantage is a smart, deeply human guide to leading through change while preserving the qualities that make us irreplaceable. This is a timely and important book.",
    name: "Tracy Brower, PhD",
    title: "VP of Workplace Insights, Steelcase",
    org: "Author of Critical Connections and Secrets to Happiness at Work",
  },
  {
    quote: "Enrique Rubio forces us to confront what leaders must become in the AI revolution. Our Existential Advantage is a disciplined, human manifesto on judgment, courage, and responsibility in the age of intelligent machines. The 90/10 principle alone should be required doctrine in every executive team.",
    name: "Nico Decock",
    title: "CHRO",
    org: "Distrilog Group",
  },
  {
    quote: "As someone deeply engaged in leadership development and AI capability building, I found the premise of Our Existential Advantage both timely and necessary. Enrique Rubio reframes AI as a leadership challenge that asks us to protect human judgment, build trust, and lead transformation with clarity, ethics, and care.",
    name: "Clarissa Schuhmacher",
    title: "Head of Capabilities, Leadership & Culture",
    org: "Imperial Brands PLC",
  },
];

const parts = [
  {
    number: "I",
    title: "The Long View",
    subtitle: "Technology, Disruption, and the Shape of Change",
    summary: "Before any organization can lead AI well, it needs to understand what is actually happening. Not the version in the headlines, not the version in the vendor pitch, but the version that five centuries of technological disruption have consistently produced. Six chapters move through five major technological revolutions — from the printing press to the industrial revolution, from electrification to the digital era, to the internet's restructuring of entire industries. The purpose is pattern recognition, not historical nostalgia.\n\nAI is genuinely different from previous revolutions in three specific ways: it operates in the domain of cognition, its pace of improvement has compressed the window for adaptation, and no professional domain is insulated from its effects.\n\nPart I closes with six principles distilled from the full arc of technological history — the cognitive instruments that the rest of the book applies to the strategic, organizational, and personal challenges of AI leadership.",
  },
  {
    number: "II",
    title: "The Mirror",
    subtitle: "What AI Reveals About Human Leadership",
    summary: "Part II turns the lens from the external world to the internal one. Having established the historical shape of the disruption, the book now asks the question that most AI strategy frameworks skip entirely: what does AI say about the people leading through it? About their judgment, their voice, their identity as leaders, and the specific human capabilities that this transition will either develop or erode depending on how deliberately they engage with it.\n\nThe Dumbification Risk is named directly: the gradual erosion of human judgment that occurs when AI handles more of the cognitive work that builds and maintains that judgment. The 90/10 Formula is introduced here as a practical discipline, alongside the distinction between using AI for thinking and using AI for doing.\n\nPart II closes with the most personal question of all: who are you when AI becomes your colleague?",
  },
  {
    number: "III",
    title: "The Ecosystem",
    subtitle: "Understanding the Full Landscape",
    summary: "Most AI strategies fail because they are navigating with an incomplete map. They deploy technology into organizations they do not fully understand, against a competitive landscape they have not squarely examined, on a data foundation they have never honestly assessed. Part III is about building the map.\n\nThe Workplace Ecosystem Framework identifies seven interconnected components that together describe how AI reshapes organizational life — and why strategies that address fewer than all seven produce results no one can explain. The AI-Native Competitor thought experiment reveals, with uncomfortable precision, where any established organization is most exposed to disruption from a well-resourced entrant building from scratch.\n\nPart III is diagnostic before it is strategic. The leaders who do this work before committing to strategy will make different, more durable, and more calibrated decisions than those who skip it.",
  },
  {
    number: "IV",
    title: "The Strategy",
    subtitle: "From Vision to Execution",
    summary: "Most organizations do not fail at AI because they lack good technology. They fail because they confuse activity for progress. Tools get deployed, pilots get launched, announcements get made, and the underlying questions that would give all that activity coherent direction never get asked. Part IV is about closing the gap between AI ambition and AI value.\n\nThe work starts before the roadmap and before the pilots, with intent: the explicit articulation of what the organization is trying to accomplish with AI and why. From there, the book addresses execution, introduces the Office of Strategic AI Integration, and develops the multi-horizon roadmap, the measurement framework that captures genuine value creation, and the AI communication narrative that every leader needs.\n\nThe six chapters of Part IV are designed as a connected system.",
  },
  {
    number: "V",
    title: "The Readiness",
    subtitle: "Building Human and Organizational Capacity",
    summary: "Strategy without readiness is architecture without foundation. Organizations can articulate excellent AI intent, design coherent roadmaps, and build governance frameworks that look impressive on paper, and still fail to produce AI transformation, because the human and organizational capacity required to execute the strategy was never built.\n\nThe Four Dimensions of Readiness framework provides the diagnostic: technical fluency, cultural foundation, process adaptability, and leadership capability. The subsequent chapters develop each, addressing how to build AI fluency at scale, culture as the hidden infrastructure, and the structural reality that the most important AI transformation work is done by people without formal authority.\n\nPart V closes by naming psychological safety as the readiness multiplier.",
  },
  {
    number: "VI",
    title: "The Governance",
    subtitle: "Ethics, Accountability, and Oversight",
    summary: "Governance is the part of AI strategy that most organizations get wrong in the same way: they treat it as a constraint on what they can do rather than as the infrastructure that makes it safe to do more.\n\nThe governance paradox: the organizations with the most mature AI governance move faster than their less-governed competitors on the initiatives that matter most. The three-layer governance architecture covers the full organizational reality: decision authority, process governance, and cultural governance — from board-level accountability to the daily behavior of every person who uses AI.\n\nPart VI is ultimately an argument about trust: what it takes to earn it from employees, customers, regulators, and the public, and why the organizations that invest in earning it are building something that compounds.",
  },
  {
    number: "VII",
    title: "The Innovation",
    subtitle: "AI as Catalyst for Reinvention",
    summary: "Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing, but somewhat better, and those that used it to become something fundamentally different. The first group captured efficiency gains. The second group captured the future. Part VII is about building the organizational capacity to be the second kind.\n\nThe connecting thread is the distinction between AI as a tool and AI as a capability. A tool accomplishes a specific task. A capability changes what the organization is able to do, opens new strategic options, and compounds over time.",
  },
  {
    number: "VIII",
    title: "The Leader",
    subtitle: "Synthesis and the Road Ahead",
    summary: "Every part of this book has been about the same thing. Part VIII is where that becomes personal. Having built the full architecture of strategic AI leadership, the book now asks: what does all of this require of the people who lead?\n\nThe four capabilities that define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness. These are the capabilities that the preceding seven parts have been describing from their respective angles, now named and developed as an integrated whole.\n\nThe book closes with an honest acknowledgment: that the work ahead is genuinely harder to do than to read about, and genuinely worth doing.",
  },
  {
    number: "IX",
    title: "The Politics of AI",
    subtitle: "Governance, Power, and the Responsibility to Act",
    summary: "Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked: this is the question that determines whether the AI era represents one of the great advances in human history or one of its great cautionary tales.\n\nPart IX does not close the book on a comfortable note. It closes it on an honest one: that organizational excellence in AI leadership is necessary but insufficient, that the broader governance context in which organizations operate is being shaped by decisions in which capable leaders are largely absent, and that this absence is something every leader reading this book has the standing and the obligation to reconsider.",
  },
];

function PartAccordion({ part }: { part: typeof parts[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 py-5 text-left group"
      >
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1rem", color: "#C41230", minWidth: "1.5rem", paddingTop: "1px", flexShrink: 0 }}>
          {part.number}.
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "1.05rem", color: "#FFFFFF" }}>
              {part.title}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
              {part.subtitle}
            </span>
          </div>
        </div>
        <span className="flex-shrink-0 mt-1 opacity-40 group-hover:opacity-70 transition-opacity">
          {open ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
        </span>
      </button>
      {open && (
        <div className="pb-6 pl-9">
          {part.summary.split("\n\n").map((p, i) => (
            <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "0.75rem" }}>
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function InlineBookingForm() {
  const [formData, setFormData] = useState({ name: "", organization: "", email: "", eventDate: "", format: "In-Person Keynote", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || "Failed to submit");
      setStatus("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "3rem",
    padding: "0 1rem",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#FFFFFF",
    outline: "none",
    borderRadius: 0,
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <div style={{ width: "3.5rem", height: "3.5rem", background: "#00E676", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#000" }}>✓</span>
        </div>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>Message sent.</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)" }}>We'll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-cols-1 sm:grid-cols-2">
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
            Name *
          </label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
            Organization *
          </label>
          <input type="text" name="organization" required value={formData.organization} onChange={handleChange} placeholder="Company name" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
          Email *
        </label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
            Event Date
          </label>
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
            Format
          </label>
          <select name="format" value={formData.format} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
            <option>In-Person Keynote</option>
            <option>Virtual Keynote</option>
            <option>Workshop</option>
            <option>Fireside Chat</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
          Message *
        </label>
        <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about the audience, theme, and goals..." style={{ ...inputStyle, height: "8rem", padding: "0.75rem 1rem", resize: "none" }} />
      </div>

      {error && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#ff6b6b" }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          alignSelf: "flex-start",
          background: "#C41230",
          color: "#FFFFFF",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.9rem 2rem",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
        {status !== "loading" && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}

function NewsletterSection() {
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
    <section style={{ background: "#F5F1EB", padding: "5rem 1.5rem", borderTop: "1px solid #DDD6CC" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8E80", marginBottom: "1rem" }}>
          Coming June 2026
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontStyle: "italic", fontSize: "2.2rem", color: "#1C1410", lineHeight: 1.15, marginBottom: "0.75rem" }}>
          Be First to Know
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#6B5E52", lineHeight: 1.7, marginBottom: "2rem" }}>
          Get notified the moment <em>Our Existential Advantage</em> is available.
        </p>
        {status === "success" ? (
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "#C41230" }}>
            You're on the list.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row" }}>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.9rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", border: "1px solid #C4B9AC", background: "#FDFBF8", color: "#1C1410", outline: "none", width: "120px", flexShrink: 0, borderRadius: 0 }} />
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.9rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", border: "1px solid #C4B9AC", borderLeft: "none", background: "#FDFBF8", color: "#1C1410", outline: "none", flex: 1, borderRadius: 0 }} />
            <button type="submit" disabled={status === "loading"} style={{ height: "2.75rem", padding: "0 1.25rem", background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0, borderRadius: 0 }}>
              {status === "loading" ? "..." : "Notify Me"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function OurExistentialAdvantage() {
  const bookingRef = useRef<HTMLElement>(null);

  function scrollToBooking() {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#FFFFFF", minHeight: "100vh", background: "#0D0B09" }}>

      {/* MINIMAL TOP BAR */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(13,11,9,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
        <Link
          href="/book"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Books
        </Link>
        <button
          onClick={scrollToBooking}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#C41230", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.45rem 1rem", border: "none", cursor: "pointer" }}
        >
          Book Enrique
        </button>
      </div>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 0 5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="hero-grid">
          <div>
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C41230", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Coming June 2026
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "1.25rem", color: "#FFFFFF" }}>
              Our<br />Existential<br />
              <span style={{ color: "#C41230" }}>Advantage</span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.55, marginBottom: "0.5rem" }}>
              Human Leadership in the Age of Intelligent Machines
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", marginBottom: "2.5rem", letterSpacing: "0.03em" }}>
              by <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Enrique Rubio</span>
            </p>

            {/* Divider */}
            <div style={{ width: "2.5rem", height: "2px", background: "#C41230", marginBottom: "2rem" }} />

            {/* Thesis snippet */}
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "460px", marginBottom: "2.5rem" }}>
              "As artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable."
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#notify"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#0D0B09", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.9rem 1.75rem", textDecoration: "none" }}
              >
                Notify Me at Launch
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToBooking}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.9rem 1.75rem", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}
              >
                Book Enrique to Speak
              </button>
            </div>
          </div>

          {/* Cover */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(196,18,48,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ width: "min(340px, 80%)", aspectRatio: "3/4", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
              <img src="/book-cover.png" alt="Our Existential Advantage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .hero-grid > div:last-child { order: -1; }
          }
        `}</style>
      </section>

      {/* ENDORSEMENTS STRIP */}
      <section style={{ background: "#161210", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }} className="reviews-strip">
          {reviews.slice(0, 3).map((r, i) => (
            <div key={i} style={{ padding: "2.5rem 2rem", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                "{r.quote.length > 150 ? r.quote.slice(0, 150) + "..." : r.quote}"
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#FFFFFF" }}>{r.name}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "0.15rem" }}>{r.org}</p>
            </div>
          ))}
          <style>{`@media (max-width: 768px) { .reviews-strip { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* ABOUT THE BOOK */}
      <section style={{ background: "#FAFAF8", padding: "7rem 1.5rem", borderBottom: "1px solid #DDD6CC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="about-grid">

          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8E80", marginBottom: "1.5rem" }}>About the Book</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#1C1410", lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: "2rem" }}>
              This book is not about AI. It is about you.
            </h2>
            <div style={{ width: "2.5rem", height: "2px", background: "#C41230", marginBottom: "2rem" }} />
            <div style={{ background: "#F0EBE3", padding: "1.5rem", border: "1px solid #DDD6CC" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C41230", marginBottom: "0.75rem", fontWeight: 700 }}>
                The 90 / 10 Formula
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#4A4035", lineHeight: 1.75 }}>
                Ninety percent of a leader's thinking should remain theirs, ten percent AI-augmented. The doing can be shared fifty-fifty in genuine collaboration with AI. The formula is a discipline against the gradual outsourcing of judgment that AI makes easy and organizational effectiveness makes dangerous.
              </p>
            </div>
          </div>

          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#4A4035", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "1.25rem" }}>This book is not about artificial intelligence. It is about people, and especially the leaders navigating this transition.</p>
            <p style={{ marginBottom: "1.25rem" }}>More precisely, it is about what people bring to the world that AI cannot replicate, what leaders risk losing if they are not careful, and what it takes to lead with genuine judgment, ethical courage, and human care at a moment when the most powerful cognitive tools in human history are now available to every organization and individual on earth.</p>
            <p style={{ marginBottom: "1.25rem" }}>The central argument is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable. The judgment that integrates experience with context; the ethical reasoning that weighs competing human interests; the empathy that recognizes what data cannot capture; the strategic imagination that asks not what becomes more efficient but what becomes possible.</p>
            <p>The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is an invitation to become more fully what genuine leadership has always been: the irreplaceable human contribution to outcomes that matter.</p>
          </div>

          <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section style={{ background: "#F0EBE3", padding: "6rem 1.5rem", borderBottom: "1px solid #DDD6CC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "2rem", color: "#1C1410", whiteSpace: "nowrap" }}>
              What Leaders Are Saying
            </h2>
            <div style={{ flex: 1, height: "1px", background: "#DDD6CC" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} style={{ background: "#FAFAF8", border: "1px solid #DDD6CC", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3rem", color: "#C41230", lineHeight: 0.75, opacity: 0.5 }}>"</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#4A4035", lineHeight: 1.8, marginTop: "-0.5rem" }}>
                  {r.quote}
                </p>
                <div style={{ borderTop: "1px solid #DDD6CC", paddingTop: "1.25rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#1C1410" }}>{r.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.77rem", color: "#9C8E80", marginTop: "0.15rem" }}>{r.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.77rem", color: "#C41230", fontStyle: "italic", marginTop: "0.1rem" }}>{r.org}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 768px) { .reviews-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* INSIDE THE BOOK */}
      <section style={{ background: "#0D0B09", padding: "6rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.75rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "2rem", color: "#FFFFFF", whiteSpace: "nowrap" }}>
              Inside the Book
            </h2>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem" }}>
            Nine parts. A complete architecture for leading through the age of AI.
          </p>
          <div>
            {parts.map((part) => (
              <PartAccordion key={part.number} part={part} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOK ENRIQUE — INLINE FORM */}
      <section ref={bookingRef} id="booking" style={{ background: "#161210", padding: "6rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "start" }} className="booking-grid">

          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
              Bring This to Your Organization
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Book Enrique<br />to Speak
            </h2>
            <div style={{ width: "2.5rem", height: "2px", background: "#C41230", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "380px" }}>
              Enrique delivers keynotes and workshops built around the frameworks in this book. Your team leaves with the clarity and tools to lead through what's coming.
            </p>
          </div>

          <div>
            <InlineBookingForm />
          </div>

          <style>{`@media (max-width: 768px) { .booking-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
        </div>
      </section>

      {/* NEWSLETTER */}
      <div id="notify">
        <NewsletterSection />
      </div>

      {/* FOOTER */}
      <div style={{ background: "#F0EBE3", borderTop: "1px solid #DDD6CC", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#9C8E80" }}>
          &copy; 2026 Enrique Rubio
        </p>
        <Link href="/book" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#9C8E80", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <ArrowLeft className="w-3 h-3" />
          Back to Upcoming Books
        </Link>
      </div>
    </div>
  );
}
