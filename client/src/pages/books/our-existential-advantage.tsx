import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "wouter";

const reviews = [
  {
    quote: "Enrique Rubio has written the manual for human-centric leading in the age of AI, making a compelling case for Team Human as the true competitive advantage for tomorrow's organization.",
    name: "Gary A. Bolles",
    title: "Chair for the Future of Work, Singularity University",
  },
  {
    quote: "At a time when leaders are inundated with AI hype, this book delivers something no LLM can match: authentic human wisdom. It will challenge you to think carefully about what should be automated, what must remain deeply human, and most importantly, how organizations can preserve the conditions for real judgment, learning, and accountability.",
    name: "Jeff Wetzler",
    title: "Author, Ask: Tap Into the Hidden Wisdom of People Around You",
  },
  {
    quote: "Our Existential Advantage is a \"must read\" for anyone leading their business through this AI transition. The book walks the reader through the different components of the AI revolution before exploring the formula for strong leadership in this era.",
    name: "Janine Yancey",
    title: "Founder & CEO, Emtrain",
  },
  {
    quote: "In a world racing to automate everything, Enrique Rubio makes the most important argument of this moment: the leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. Required reading for anyone serious about leading through what comes next.",
    name: "Eynat Guez",
    title: "Co-Founder & CEO, Papaya Global",
  },
  {
    quote: "Enrique Rubio refocuses us on what matters most in the Age of AI: people. Our Existential Advantage is a smart, deeply human guide to leading through change while preserving the qualities that make us irreplaceable.",
    name: "Tracy Brower, PhD",
    title: "VP of Workplace Insights, Steelcase",
  },
  {
    quote: "Enrique Rubio forces us to confront what leaders must become in the AI revolution. The 90/10 principle alone should be required doctrine in every executive team.",
    name: "Nico Decock",
    title: "CHRO, Distrilog Group",
  },
  {
    quote: "As someone deeply engaged in leadership development and AI capability building, I found the premise of Our Existential Advantage both timely and necessary. Enrique Rubio reframes AI as a leadership challenge that asks us to protect human judgment, build trust, and lead transformation with clarity, ethics, and care.",
    name: "Clarissa Schuhmacher",
    title: "Head of Capabilities, Leadership & Culture, Imperial Brands PLC",
  },
];

const parts = [
  {
    number: "I",
    title: "The Long View",
    subtitle: "Technology, Disruption, and the Shape of Change",
    summary: "Before any organization can lead AI well, it needs to understand what is actually happening — not the version in the headlines, but the version that five centuries of technological disruption have consistently produced. Six chapters move through five major revolutions, from the printing press to today. The purpose is pattern recognition, not historical nostalgia.\n\nAI is genuinely different in three specific ways: it operates in the domain of cognition, its pace of improvement has compressed the window for adaptation, and no professional domain is insulated from its effects. Part I closes with six principles distilled from the full arc of technological history.",
  },
  {
    number: "II",
    title: "The Mirror",
    subtitle: "What AI Reveals About Human Leadership",
    summary: "Part II turns the lens inward. Having established the historical shape of the disruption, the book asks the question most AI strategy frameworks skip entirely: what does AI say about the people leading through it?\n\nThe Dumbification Risk is named directly: the gradual erosion of human judgment that occurs when AI handles more of the cognitive work that builds and maintains that judgment. The 90/10 Formula is introduced here as a practical discipline. Part II closes with the most personal question of all: who are you when AI becomes your colleague?",
  },
  {
    number: "III",
    title: "The Ecosystem",
    subtitle: "Understanding the Full Landscape",
    summary: "Most AI strategies fail because they navigate with an incomplete map. The Workplace Ecosystem Framework identifies seven interconnected components that describe how AI reshapes organizational life. The AI-Native Competitor thought experiment reveals, with uncomfortable precision, where any established organization is most exposed.\n\nPart III is diagnostic before it is strategic. The leaders who do this work before committing to strategy will make different, more durable decisions.",
  },
  {
    number: "IV",
    title: "The Strategy",
    subtitle: "From Vision to Execution",
    summary: "Most organizations don't fail at AI because they lack good technology. They fail because they confuse activity for progress. Part IV closes the gap between AI ambition and AI value.\n\nThe work starts with intent: the explicit articulation of what the organization is trying to accomplish with AI and why. From there: execution architecture, the Office of Strategic AI Integration, multi-horizon roadmaps, measurement frameworks, and the AI communication narrative every leader needs.",
  },
  {
    number: "V",
    title: "The Readiness",
    subtitle: "Building Human and Organizational Capacity",
    summary: "Strategy without readiness is architecture without foundation. Organizations can articulate excellent AI intent and still fail to produce transformation because the human capacity was never built.\n\nThe Four Dimensions of Readiness: technical fluency, cultural foundation, process adaptability, and leadership capability. Part V closes by naming psychological safety as the readiness multiplier — the condition that activates the return on every other readiness investment.",
  },
  {
    number: "VI",
    title: "The Governance",
    subtitle: "Ethics, Accountability, and Oversight",
    summary: "Governance is the part of AI strategy most organizations get wrong in the same way: they treat it as a constraint rather than as infrastructure that makes it safe to do more.\n\nThe governance paradox: organizations with mature AI governance move faster than their less-governed competitors. The three-layer architecture covers decision authority, process governance, and cultural governance — from board accountability to daily individual behavior. Part VI is ultimately an argument about trust.",
  },
  {
    number: "VII",
    title: "The Innovation",
    subtitle: "AI as Catalyst for Reinvention",
    summary: "Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing better, and those that used it to become something fundamentally different. The first captured efficiency. The second captured the future.\n\nThe connecting thread: the distinction between AI as a tool and AI as a capability. A tool accomplishes a task. A capability changes what the organization is able to do, opens new strategic options, and compounds over time.",
  },
  {
    number: "VIII",
    title: "The Leader",
    subtitle: "Synthesis and the Road Ahead",
    summary: "Every part of this book has been about the same thing. Part VIII is where that becomes personal. Having built the full architecture of strategic AI leadership, the book asks: what does all of this require of the people who lead?\n\nFour capabilities define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness. The book closes with an honest acknowledgment — the work ahead is genuinely harder to do than to read about, and genuinely worth doing.",
  },
  {
    number: "IX",
    title: "The Politics of AI",
    subtitle: "Governance, Power, and the Responsibility to Act",
    summary: "Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked — this is the question that determines whether the AI era represents one of the great advances in human history or one of its cautionary tales.\n\nPart IX closes on an honest note: organizational excellence in AI leadership is necessary but insufficient. The governance context is being shaped by decisions in which capable leaders are largely absent. This absence is something every leader has the standing and the obligation to reconsider.",
  },
];

function PartAccordion({ part }: { part: typeof parts[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-6 py-6 text-left group">
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#E85A2A", minWidth: "1.5rem", paddingTop: "2px", flexShrink: 0, opacity: 0.9 }}>
          {part.number}
        </span>
        <div className="flex-1">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#FFFFFF", display: "block", marginBottom: "0.2rem" }}>
            {part.title}
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.77rem", color: "rgba(255,255,255,0.3)" }}>
            {part.subtitle}
          </span>
        </div>
        <span className="flex-shrink-0 opacity-30 group-hover:opacity-60 transition-opacity mt-1">
          {open ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
        </span>
      </button>
      {open && (
        <div className="pb-6 pl-10">
          {part.summary.split("\n\n").map((p, i) => (
            <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "0.75rem" }}>
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
      const res = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || "Failed to submit");
      setStatus("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%", height: "3rem", padding: "0 1rem",
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF", outline: "none", borderRadius: 0,
    transition: "border-color 0.2s",
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0" }}>
        <div style={{ width: "3rem", height: "3rem", background: "#00D46A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
          <span style={{ fontWeight: 700, color: "#000", fontSize: "1.1rem" }}>✓</span>
        </div>
        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.3rem", color: "#FFF", marginBottom: "0.5rem" }}>Inquiry received.</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>We'll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Name *</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" style={inputBase} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Organization *</label>
          <input type="text" name="organization" required value={formData.organization} onChange={handleChange} placeholder="Company name" style={inputBase} />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Email *</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" style={inputBase} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Event Date</label>
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} style={inputBase} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Format</label>
          <select name="format" value={formData.format} onChange={handleChange} style={{ ...inputBase, cursor: "pointer" }}>
            <option>In-Person Keynote</option>
            <option>Virtual Keynote</option>
            <option>Workshop</option>
            <option>Fireside Chat</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>Message *</label>
        <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about the audience, theme, and goals..." style={{ ...inputBase, height: "7rem", padding: "0.75rem 1rem", resize: "none" }} />
      </div>
      {error && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#ff7070" }}>{error}</p>}
      <button type="submit" disabled={status === "loading"} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", alignSelf: "flex-start", background: "#E85A2A", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1 }}>
        {status === "loading" ? "Sending..." : <>Send Inquiry <ArrowRight className="w-3.5 h-3.5" /></>}
      </button>
    </form>
  );
}

function FloatingBookButton({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed", bottom: "2rem", right: "2rem", zIndex: 200,
        display: "flex", alignItems: "center", gap: "0.5rem",
        background: "#E85A2A", color: "#FFFFFF",
        fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
        fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
        padding: "0.85rem 1.5rem",
        border: "none", cursor: "pointer",
        boxShadow: "0 8px 32px rgba(232,90,42,0.45)",
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
      }}
    >
      Book Enrique to Speak
    </button>
  );
}

function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email }) });
      const data = await res.json();
      if (data.success) { setStatus("success"); setName(""); setEmail(""); } else setStatus("error");
    } catch { setStatus("error"); }
  }
  return (
    <section id="notify" style={{ background: "#FAF6F0", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "540px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "0.75rem" }}>Coming June 2026</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "2.5rem", color: "#1A1208", lineHeight: 1.1, marginBottom: "0.75rem" }}>Be First to Know</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#7A6A58", lineHeight: 1.7, marginBottom: "2.25rem" }}>
          Get notified the moment <em>Our Existential Advantage</em> is available.
        </p>
        {status === "success" ? (
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem", color: "#E85A2A" }}>You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            <input type="text" placeholder="First name" value={name} onChange={e => setName(e.target.value)} required style={{ height: "3rem", padding: "0 1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", border: "1px solid #DDD0C4", background: "#FDFBF8", color: "#1A1208", outline: "none", width: "130px", flexShrink: 0, borderRadius: 0 }} />
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required style={{ height: "3rem", padding: "0 1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", border: "1px solid #DDD0C4", borderLeft: "none", background: "#FDFBF8", color: "#1A1208", outline: "none", flex: 1, borderRadius: 0 }} />
            <button type="submit" disabled={status === "loading"} style={{ height: "3rem", padding: "0 1.4rem", background: "#E85A2A", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0 }}>
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#FFFFFF", minHeight: "100vh" }}>
      <style>{`
        @keyframes fadePulse { 0%,100%{opacity:0.7} 50%{opacity:1} }
        @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
        select option { background: #1A1208; color: #fff; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid .cover-col { order: -1; }
          .hero-ctas { justify-content: center !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .booking-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .reviews-flow { columns: 1 !important; }
        }
      `}</style>

      <FloatingBookButton onClick={scrollToBooking} />

      {/* TOP BAR */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(14,10,6,0.8)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
        <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
          <ArrowLeft className="w-3 h-3" />Back to Books
        </Link>
        <button onClick={scrollToBooking} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#E85A2A", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", border: "none", cursor: "pointer" }}>
          Book Enrique
        </button>
      </div>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 70% 40%, rgba(232,90,42,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(180,60,20,0.1) 0%, transparent 50%), #0E0A06",
        display: "flex", alignItems: "center",
        padding: "5rem 0 4rem",
      }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 2.5rem", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5rem", alignItems: "center" }} className="hero-grid">

          <div>
            {/* Launch label */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(232,90,42,0.12)", border: "1px solid rgba(232,90,42,0.3)", padding: "0.35rem 0.85rem", borderRadius: "2rem", marginBottom: "2.5rem" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#E85A2A", display: "inline-block", animation: "fadePulse 2s infinite" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#E8A07A" }}>Coming June 2026</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(3rem, 6.5vw, 5.8rem)", lineHeight: 0.95, letterSpacing: "-0.025em", marginBottom: "1.75rem", color: "#FFFFFF" }}>
              Our<br />Existential<br />
              <span style={{ background: "linear-gradient(135deg, #E85A2A 0%, #C41230 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Advantage</span>
            </h1>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "0.4rem" }}>
              Human Leadership in the Age of Intelligent Machines
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.25)", marginBottom: "2.5rem" }}>
              by <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>Enrique Rubio</span>
            </p>

            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: "440px", marginBottom: "3rem", borderLeft: "2px solid rgba(232,90,42,0.5)", paddingLeft: "1.25rem" }}>
              As AI becomes more capable, the capabilities that make human leadership irreplaceable become more valuable.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="hero-ctas">
              <a href="#notify" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#0E0A06", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.9rem 1.75rem", textDecoration: "none" }}>
                Notify Me at Launch <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button onClick={scrollToBooking} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(232,90,42,0.1)", color: "#E8A07A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.9rem 1.75rem", border: "1px solid rgba(232,90,42,0.35)", cursor: "pointer" }}>
                Book Enrique to Speak
              </button>
            </div>
          </div>

          {/* Cover */}
          <div className="cover-col" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: "-40px", background: "radial-gradient(ellipse at center, rgba(232,90,42,0.25) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(20px)" }} />
            <div style={{ position: "relative", zIndex: 1, transform: "rotate(-2deg)", width: "min(320px, 85%)" }}>
              <div style={{ boxShadow: "0 48px 96px rgba(0,0,0,0.75), -12px 12px 40px rgba(196,18,48,0.2)", overflow: "hidden", aspectRatio: "3/4" }}>
                <img src="/book-cover.png" alt="Our Existential Advantage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE REVIEWS ── */}
      <section style={{ background: "#130E08", padding: "2.5rem 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ display: "flex", animation: "marqueeScroll 40s linear infinite", width: "max-content" }}>
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: "2rem", padding: "0 3rem", whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.88rem", color: "rgba(255,255,255,0.4)" }}>"{r.quote.length > 80 ? r.quote.slice(0, 80) + "..." : r.quote}"</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#E85A2A", fontWeight: 600, letterSpacing: "0.06em" }}>{r.name}</span>
              <span style={{ width: "1px", height: "1.5rem", background: "rgba(255,255,255,0.1)", display: "inline-block" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT THE BOOK ── */}
      <section style={{ background: "#FAF6F0", padding: "8rem 2.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "7rem", alignItems: "start" }} className="about-grid">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "2rem" }}>About the Book</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A1208", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>
                Not about AI.<br />About you.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#9A8878", lineHeight: 1.8, marginBottom: "2rem" }}>
                More precisely, about what you bring to the world that AI cannot replicate — and what you risk losing if you are not careful.
              </p>
              {/* Stat callouts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { n: "9", label: "Parts" },
                  { n: "53", label: "Chapters" },
                  { n: "1", label: "Conviction" },
                ].map(s => (
                  <div key={s.n} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "2.2rem", color: "#E85A2A", lineHeight: 1 }}>{s.n}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#9A8878", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#3A3028", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                The central argument is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#3A3028", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                The judgment that integrates experience with context. The ethical reasoning that weighs competing human interests. The empathy that recognizes what data cannot capture. The strategic imagination that asks not what becomes more efficient, but what becomes possible.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#3A3028", lineHeight: 1.9, marginBottom: "2.5rem" }}>
                The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is an invitation to become more fully what genuine leadership has always been.
              </p>

              {/* 90/10 callout — inline, no box */}
              <div style={{ borderLeft: "3px solid #E85A2A", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E85A2A", marginBottom: "0.6rem", fontWeight: 700 }}>The 90 / 10 Formula</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#4A3C30", lineHeight: 1.75 }}>
                  Ninety percent of a leader's thinking should remain theirs. Ten percent AI-augmented. The doing can be shared fifty-fifty. A discipline against the gradual outsourcing of judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIG QUOTE BREAK ── */}
      <section style={{ background: "#1A1208", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2.1rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.55, marginBottom: "2rem" }}>
            "The leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. This book is the clearest framework I've seen for what that looks like in practice."
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "2rem", height: "1px", background: "#E85A2A" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}>Eynat Guez <span style={{ color: "rgba(255,255,255,0.25)", fontWeight: 400 }}>/ Co-Founder & CEO, Papaya Global</span></p>
            <div style={{ width: "2rem", height: "1px", background: "#E85A2A" }} />
          </div>
        </div>
      </section>

      {/* ── REVIEWS — open editorial flow ── */}
      <section style={{ background: "#FAF6F0", padding: "7rem 2.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", whiteSpace: "nowrap" }}>Advance Reviews</p>
            <div style={{ flex: 1, height: "1px", background: "#E0D8CE" }} />
          </div>

          <div style={{ columns: 2, columnGap: "4rem" }} className="reviews-flow">
            {reviews.map((r, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "3rem" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#2C2418", lineHeight: 1.8, marginBottom: "1rem" }}>
                  "{r.quote}"
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#1A1208" }}>{r.name}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", color: "#B8A898", marginTop: "0.15rem" }}>{r.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE THE BOOK ── */}
      <section style={{ background: "#0E0A06", padding: "6rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.75rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "1.9rem", color: "#FFFFFF", whiteSpace: "nowrap" }}>Inside the Book</h2>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", marginBottom: "2.5rem" }}>Nine parts. A complete architecture for leading through what comes next.</p>
          {parts.map(part => <PartAccordion key={part.number} part={part} />)}
        </div>
      </section>

      {/* ── BOOK ENRIQUE — inline form ── */}
      <section ref={bookingRef} id="booking" style={{ background: "#130E08", padding: "6rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "6rem", alignItems: "start" }} className="booking-grid">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>Bring This to Your Organization</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Book Enrique<br />to Speak
            </h2>
            <div style={{ width: "2.5rem", height: "2px", background: "#E85A2A", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
              Keynotes and workshops built around the frameworks in this book. Your team leaves with clarity and tools to lead through what's coming.
            </p>
          </div>
          <div>
            <InlineBookingForm />
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />

      {/* ── FOOTER ── */}
      <div style={{ background: "#F0EAE2", borderTop: "1px solid #E0D8CE", padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#B8A898" }}>&copy; 2026 Enrique Rubio</p>
        <Link href="/book" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#B8A898", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <ArrowLeft className="w-3 h-3" />Back to Upcoming Books
        </Link>
      </div>
    </div>
  );
}
