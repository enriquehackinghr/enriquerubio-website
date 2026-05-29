import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const reviews = [
  {
    quote: "Enrique Rubio has written the manual for human-centric leading in the age of AI — a compelling case for Team Human as the true competitive advantage for tomorrow's organization.",
    name: "Gary A. Bolles",
    role: "Chair for the Future of Work, Singularity University",
  },
  {
    quote: "At a time when leaders are inundated with AI hype, this book delivers something no LLM can match: authentic human wisdom. It will challenge you to think carefully about what should be automated, what must remain deeply human, and how organizations can preserve the conditions for real judgment and accountability.",
    name: "Jeff Wetzler",
    role: "Author, Ask: Tap Into the Hidden Wisdom of People Around You",
  },
  {
    quote: "A must-read for anyone leading their business through this AI transition. The book walks the reader through the different components of the AI revolution before exploring the formula for strong leadership in this era.",
    name: "Janine Yancey",
    role: "Founder & CEO, Emtrain",
  },
  {
    quote: "In a world racing to automate everything, Enrique Rubio makes the most important argument of this moment: the leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. Required reading for anyone serious about leading through what comes next.",
    name: "Eynat Guez",
    role: "Co-Founder & CEO, Papaya Global",
  },
  {
    quote: "A smart, deeply human guide to leading through change while preserving the qualities that make us irreplaceable. This is a timely and important book.",
    name: "Tracy Brower, PhD",
    role: "VP of Workplace Insights, Steelcase",
  },
  {
    quote: "Enrique Rubio forces us to confront what leaders must become in the AI revolution. The 90/10 principle alone should be required doctrine in every executive team.",
    name: "Nico Decock",
    role: "CHRO, Distrilog Group",
  },
  {
    quote: "Enrique Rubio reframes AI as a leadership challenge that asks us to protect human judgment, build trust, and lead transformation with clarity, ethics, and care.",
    name: "Clarissa Schuhmacher",
    role: "Head of Capabilities, Leadership & Culture, Imperial Brands PLC",
  },
];

const parts = [
  {
    n: "I",
    title: "The Long View",
    sub: "Technology, Disruption, and the Shape of Change",
    body: "Before any organization can lead AI well, it needs to understand what is actually happening — not the version in the headlines, but the version that five centuries of technological disruption have consistently produced. Six chapters trace five major revolutions, from the printing press to today. The purpose is pattern recognition, not historical nostalgia.\n\nAI is genuinely different in three specific ways: it operates in the domain of cognition, its pace of improvement has compressed the window for adaptation, and no professional domain is insulated from its effects. Part I closes with six principles distilled from the full arc of technological history.",
  },
  {
    n: "II",
    title: "The Mirror",
    sub: "What AI Reveals About Human Leadership",
    body: "Part II turns the lens inward. Having established the shape of the disruption, the book asks the question most AI strategy frameworks skip entirely: what does AI say about the people leading through it?\n\nThe Dumbification Risk is named directly — the gradual erosion of human judgment that occurs when AI handles the cognitive work that builds and maintains that judgment. The 90/10 Formula is introduced here as a practical discipline. Part II closes with the most personal question: who are you when AI becomes your colleague?",
  },
  {
    n: "III",
    title: "The Ecosystem",
    sub: "Understanding the Full Landscape",
    body: "Most AI strategies fail because they navigate with an incomplete map. The Workplace Ecosystem Framework identifies seven interconnected components that describe how AI reshapes organizational life. The AI-Native Competitor thought experiment reveals, with uncomfortable precision, where any established organization is most exposed.\n\nPart III is diagnostic before it is strategic. The leaders who do this work before committing to strategy will make different, more durable decisions.",
  },
  {
    n: "IV",
    title: "The Strategy",
    sub: "From Vision to Execution",
    body: "Most organizations don't fail at AI because they lack good technology. They fail because they confuse activity for progress. Part IV closes the gap between AI ambition and AI value.\n\nThe work starts with intent — the explicit articulation of what the organization is trying to accomplish with AI and why. From there: execution architecture, the Office of Strategic AI Integration, multi-horizon roadmaps, measurement frameworks, and the AI communication narrative every leader needs.",
  },
  {
    n: "V",
    title: "The Readiness",
    sub: "Building Human and Organizational Capacity",
    body: "Strategy without readiness is architecture without foundation. Organizations can articulate excellent AI intent and still fail to produce transformation because the human capacity was never built.\n\nThe Four Dimensions of Readiness: technical fluency, cultural foundation, process adaptability, and leadership capability. Part V closes by naming psychological safety as the readiness multiplier.",
  },
  {
    n: "VI",
    title: "The Governance",
    sub: "Ethics, Accountability, and Oversight",
    body: "Governance is the part of AI strategy most organizations get wrong in the same way: they treat it as a constraint rather than as infrastructure that makes it safe to do more.\n\nThe governance paradox: organizations with mature AI governance move faster than their less-governed competitors. The three-layer architecture covers decision authority, process governance, and cultural governance. Part VI is ultimately an argument about trust.",
  },
  {
    n: "VII",
    title: "The Innovation",
    sub: "AI as Catalyst for Reinvention",
    body: "Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing better, and those that used it to become something fundamentally different. The first captured efficiency. The second captured the future.\n\nThe connecting thread: AI as a capability, not just a tool. A capability changes what the organization is able to do and compounds over time.",
  },
  {
    n: "VIII",
    title: "The Leader",
    sub: "Synthesis and the Road Ahead",
    body: "Every part of this book has been about the same thing. Part VIII is where that becomes personal. Four capabilities define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness.\n\nThe book closes honestly — the work ahead is genuinely harder to do than to read about, and genuinely worth doing.",
  },
  {
    n: "IX",
    title: "The Politics of AI",
    sub: "Governance, Power, and the Responsibility to Act",
    body: "Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked — this determines whether the AI era represents one of the great advances in human history or one of its cautionary tales.\n\nPart IX closes on an honest note: organizational excellence in AI leadership is necessary but insufficient. The governance context is being shaped by decisions in which capable leaders are largely absent. This absence is something every leader has the standing and the obligation to reconsider.",
  },
];

function Accordion({ part }: { part: typeof parts[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "1.5rem", padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#C41230", fontSize: "0.9rem", minWidth: "1.25rem", paddingTop: "2px", flexShrink: 0 }}>{part.n}</span>
        <span style={{ flex: 1 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#fff", display: "block", marginBottom: "0.15rem" }}>{part.title}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.28)" }}>{part.sub}</span>
        </span>
        <span style={{ color: "rgba(255,255,255,0.25)", paddingTop: "2px", flexShrink: 0 }}>
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </button>
      {open && (
        <div style={{ paddingLeft: "2.75rem", paddingBottom: "1.5rem" }}>
          {part.body.split("\n\n").map((p, i) => (
            <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, marginBottom: "0.75rem" }}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function BookingForm() {
  const [d, setD] = useState({ name: "", organization: "", email: "", eventDate: "", format: "In-Person Keynote", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setD(p => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading"); setErr(null);
    try {
      const r = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.error || "Failed");
      setStatus("success");
    } catch (e: any) { setErr(e.message); setStatus("error"); }
  };
  const field: React.CSSProperties = {
    width: "100%", height: "2.75rem", padding: "0 0.875rem",
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
    outline: "none", borderRadius: 0,
  };
  if (status === "success") return (
    <div style={{ padding: "3rem 0", textAlign: "center" }}>
      <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#00C060", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "#000", fontWeight: 700 }}>✓</div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>Inquiry received. We'll respond within 24 hours.</p>
    </div>
  );
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
        {[["name", "Name *", "text", "Your name", true], ["organization", "Organization *", "text", "Company", true]].map(([n, l, t, p, req]) => (
          <div key={n as string}>
            <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.35rem" }}>{l as string}</label>
            <input type={t as string} name={n as string} required={req as boolean} value={(d as any)[n as string]} onChange={onChange} placeholder={p as string} style={field} />
          </div>
        ))}
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.35rem" }}>Email *</label>
        <input type="email" name="email" required value={d.email} onChange={onChange} placeholder="you@company.com" style={field} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.35rem" }}>Event Date</label>
          <input type="date" name="eventDate" value={d.eventDate} onChange={onChange} style={field} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.35rem" }}>Format</label>
          <select name="format" value={d.format} onChange={onChange} style={{ ...field, cursor: "pointer" }}>
            <option>In-Person Keynote</option>
            <option>Virtual Keynote</option>
            <option>Workshop</option>
            <option>Fireside Chat</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.35rem" }}>Message *</label>
        <textarea name="message" required value={d.message} onChange={onChange} placeholder="Tell us about the audience, theme, and goals..." style={{ ...field, height: "6.5rem", padding: "0.75rem 0.875rem", resize: "none" }} />
      </div>
      {err && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#ff6060" }}>{err}</p>}
      <button type="submit" disabled={status === "loading"} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", alignSelf: "flex-start", background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.8rem 1.75rem", border: "none", cursor: "pointer", opacity: status === "loading" ? 0.6 : 1 }}>
        {status === "loading" ? "Sending..." : <>Send Inquiry <ArrowRight size={14} /></>}
      </button>
    </form>
  );
}

function FloatingCTA({ onClick }: { onClick: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button onClick={onClick} style={{
      position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 200,
      background: "#C41230", color: "#fff",
      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem",
      letterSpacing: "0.1em", textTransform: "uppercase",
      padding: "0.8rem 1.5rem", border: "none", cursor: "pointer",
      boxShadow: "0 4px 24px rgba(196,18,48,0.4)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(1rem)",
      transition: "opacity 0.25s ease, transform 0.3s ease",
      pointerEvents: show ? "auto" : "none",
    }}>
      Book Enrique to Speak
    </button>
  );
}

export default function OurExistentialAdvantage() {
  const bookingRef = useRef<HTMLElement>(null);
  const scrollToBooking = () => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.18); }
        input[type=date]::-webkit-calendar-picker-indicator { filter: invert(0.4); }
        select option { background: #111; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-cover { display: none !important; }
          .about-cols { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .booking-cols { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .reviews-cols { column-count: 1 !important; }
        }
      `}</style>

      <FloatingCTA onClick={scrollToBooking} />

      {/* TOP BAR */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
          <ArrowLeft size={12} /> Books
        </Link>
        <button onClick={scrollToBooking} style={{ background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.38rem 1rem", border: "none", cursor: "pointer" }}>
          Book Enrique
        </button>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#0A0A0A", minHeight: "100vh", display: "flex", alignItems: "center", padding: "5rem 0 3rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 2.5rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 380px", gap: "6rem", alignItems: "center" }} className="hero-grid">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "2rem" }}>
              Coming June 2026
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(3.2rem, 7vw, 6.5rem)", lineHeight: 0.92, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "2rem" }}>
              Our<br />Existential<br /><span style={{ color: "#C41230" }}>Advantage</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.6, marginBottom: "0.375rem" }}>
              Human Leadership in the Age of Intelligent Machines
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.22)", marginBottom: "3rem" }}>
              by Enrique Rubio
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <a href="#notify" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#fff", color: "#0A0A0A", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.85rem 1.75rem", textDecoration: "none" }}>
                Notify Me at Launch <ArrowRight size={13} />
              </a>
              <button onClick={scrollToBooking} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "transparent", color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.85rem 1.75rem", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}>
                Book Enrique to Speak
              </button>
            </div>
          </div>

          {/* Book cover */}
          <div className="hero-cover" style={{ position: "relative" }}>
            <div style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)", aspectRatio: "3/4", overflow: "hidden" }}>
              <img src="/book-cover.png" alt="Our Existential Advantage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER — names only ── */}
      <div style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "1rem 0", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "max-content", animation: "ticker 50s linear infinite" }}>
          {[...reviews, ...reviews].map((r, i) => (
            <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.08em", whiteSpace: "nowrap", padding: "0 2.5rem" }}>
              {r.name} <span style={{ color: "#C41230", margin: "0 0.5rem" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section style={{ background: "#ffffff", padding: "8rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "2rem" }}>About the Book</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(2rem, 4.5vw, 3.75rem)", color: "#0A0A0A", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "5rem", maxWidth: "860px" }}>
            This book is not about AI.<br />It is about you — and what you<br />risk losing if you are not careful.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }} className="about-cols">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#333", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                The central argument is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#333", lineHeight: 1.85 }}>
                The judgment that integrates experience with context. The ethical reasoning that weighs competing human interests. The empathy that recognizes what data cannot capture. The strategic imagination that asks not what becomes more efficient, but what becomes possible.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#333", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is an invitation to become more fully what genuine leadership has always been.
              </p>
              <div style={{ borderLeft: "2px solid #C41230", paddingLeft: "1.25rem", marginTop: "2rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#C41230", marginBottom: "0.5rem", fontWeight: 700 }}>The 90 / 10 Formula</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#555", lineHeight: 1.8 }}>
                  Ninety percent of a leader's thinking should remain theirs. Ten percent AI-augmented. The doing can be shared fifty-fifty. A discipline against the gradual outsourcing of judgment that AI makes easy and organizational effectiveness makes dangerous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section style={{ background: "#0A0A0A", padding: "7rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2.25rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
            "The leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. This book is the clearest framework I've seen for what that looks like in practice."
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>
            Eynat Guez &nbsp;—&nbsp; <span style={{ color: "rgba(255,255,255,0.22)" }}>Co-Founder & CEO, Papaya Global</span>
          </p>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ background: "#ffffff", padding: "7rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "4rem" }}>Advance Reviews</p>
          <div style={{ columnCount: 2, columnGap: "4rem" }} className="reviews-cols">
            {reviews.map((r, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "3rem" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.0rem", color: "#222", lineHeight: 1.8, marginBottom: "1rem" }}>
                  "{r.quote}"
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "#0A0A0A" }}>{r.name}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", color: "#999", marginTop: "0.15rem" }}>{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE THE BOOK ── */}
      <section style={{ background: "#0A0A0A", padding: "7rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "0.75rem" }}>
            Inside the Book
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.28)", marginBottom: "3rem" }}>
            Nine parts. A complete architecture for leading through what comes next.
          </p>
          {parts.map(p => <Accordion key={p.n} part={p} />)}
        </div>
      </section>

      {/* ── BOOK ENRIQUE ── */}
      <section ref={bookingRef} id="booking" style={{ background: "#111111", padding: "7rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem", alignItems: "start" }} className="booking-cols">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "1.25rem" }}>Bring This to Your Organization</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Book Enrique<br />to Speak
            </h2>
            <div style={{ width: "2rem", height: "2px", background: "#C41230", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.36)", lineHeight: 1.8 }}>
              Keynotes and workshops built around the frameworks in this book. Your team leaves with clarity and tools to lead through what's coming.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section id="notify" style={{ background: "#fff", padding: "6rem 2.5rem", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "0.75rem" }}>Coming June 2026</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "2.25rem", color: "#0A0A0A", lineHeight: 1.1, marginBottom: "0.75rem" }}>Be First to Know</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#666", lineHeight: 1.7, marginBottom: "2rem" }}>
            Get notified the moment <em>Our Existential Advantage</em> is available.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.22)" }}>&copy; 2026 Enrique Rubio</p>
        <Link href="/book" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <ArrowLeft size={11} /> Back to Books
        </Link>
      </footer>
    </div>
  );
}

function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setStatus("loading");
    try {
      const r = await fetch("/api/newsletter/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email }) });
      const j = await r.json();
      if (j.success) { setStatus("success"); setName(""); setEmail(""); } else setStatus("error");
    } catch { setStatus("error"); }
  }
  if (status === "success") return <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#C41230" }}>You're on the list.</p>;
  return (
    <form onSubmit={submit} style={{ display: "flex" }}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.875rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", border: "1px solid #ddd", background: "#fff", color: "#0A0A0A", outline: "none", width: "110px", flexShrink: 0 }} />
      <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.875rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", border: "1px solid #ddd", borderLeft: "none", background: "#fff", color: "#0A0A0A", outline: "none", flex: 1 }} />
      <button type="submit" disabled={status === "loading"} style={{ height: "2.75rem", padding: "0 1.25rem", background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0 }}>
        {status === "loading" ? "..." : "Notify Me"}
      </button>
    </form>
  );
}
