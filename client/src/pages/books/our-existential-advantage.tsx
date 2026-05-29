import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const featuredReviews = [
  {
    quote: "The leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. Required reading for anyone serious about leading through what comes next.",
    name: "Eynat Guez",
    role: "Co-Founder & CEO, Papaya Global",
  },
  {
    quote: "Enrique Rubio has written the manual for human-centric leading in the age of AI — a compelling case for Team Human as the true competitive advantage.",
    name: "Gary A. Bolles",
    role: "Chair for the Future of Work, Singularity University",
  },
];

const allReviews = [
  {
    quote: "At a time when leaders are inundated with AI hype, this book delivers something no LLM can match: authentic human wisdom. It challenges you to think carefully about what should be automated, what must remain deeply human.",
    name: "Jeff Wetzler",
    role: "Author, Ask: Tap Into the Hidden Wisdom of People Around You",
  },
  {
    quote: "A must-read for anyone leading their business through this AI transition. The book walks the reader through the components of the AI revolution before exploring the formula for strong leadership in this era.",
    name: "Janine Yancey",
    role: "Founder & CEO, Emtrain",
  },
  {
    quote: "A smart, deeply human guide to leading through change while preserving the qualities that make us irreplaceable. Timely and important.",
    name: "Tracy Brower, PhD",
    role: "VP of Workplace Insights, Steelcase",
  },
  {
    quote: "The 90/10 principle alone should be required doctrine in every executive team. Enrique forces us to confront what leaders must become in the AI revolution.",
    name: "Nico Decock",
    role: "CHRO, Distrilog Group",
  },
  {
    quote: "Enrique reframes AI as a leadership challenge that asks us to protect human judgment, build trust, and lead transformation with clarity, ethics, and care.",
    name: "Clarissa Schuhmacher",
    role: "Head of Capabilities, Leadership & Culture, Imperial Brands PLC",
  },
  {
    quote: "Deeply human, sharply practical. Enrique Rubio distills what five hundred years of technological disruption keep teaching us, then applies it to the most consequential transition of our careers.",
    name: "Nico Decock",
    role: "CHRO, Distrilog Group",
  },
];

const parts = [
  { n: "I", title: "The Long View", sub: "Technology, Disruption, and the Shape of Change", body: "Before any organization can lead AI well, it needs to understand what is actually happening — not the version in the headlines, but the version that five centuries of technological disruption have consistently produced. Six chapters trace five major revolutions, from the printing press to today.\n\nAI is genuinely different in three specific ways: it operates in the domain of cognition, its pace of improvement has compressed the window for adaptation, and no professional domain is insulated from its effects. Part I closes with six principles distilled from the full arc of technological history." },
  { n: "II", title: "The Mirror", sub: "What AI Reveals About Human Leadership", body: "Part II turns the lens inward. Having established the shape of the disruption, the book asks the question most AI strategy frameworks skip entirely: what does AI say about the people leading through it?\n\nThe Dumbification Risk is named directly — the gradual erosion of human judgment that occurs when AI handles the cognitive work that builds and maintains that judgment. The 90/10 Formula is introduced here as a practical discipline. Part II closes with the most personal question: who are you when AI becomes your colleague?" },
  { n: "III", title: "The Ecosystem", sub: "Understanding the Full Landscape", body: "Most AI strategies fail because they navigate with an incomplete map. The Workplace Ecosystem Framework identifies seven interconnected components. The AI-Native Competitor thought experiment reveals, with uncomfortable precision, where any established organization is most exposed.\n\nPart III is diagnostic before it is strategic. The leaders who do this work before committing to strategy will make different, more durable decisions." },
  { n: "IV", title: "The Strategy", sub: "From Vision to Execution", body: "Most organizations don't fail at AI because they lack good technology. They fail because they confuse activity for progress. Part IV closes the gap between AI ambition and AI value.\n\nThe work starts with intent — the explicit articulation of what the organization is trying to accomplish with AI and why. From there: execution architecture, the Office of Strategic AI Integration, multi-horizon roadmaps, measurement frameworks, and the AI communication narrative every leader needs." },
  { n: "V", title: "The Readiness", sub: "Building Human and Organizational Capacity", body: "Strategy without readiness is architecture without foundation. Organizations can articulate excellent AI intent and still fail to produce transformation because the human capacity was never built.\n\nThe Four Dimensions of Readiness: technical fluency, cultural foundation, process adaptability, and leadership capability. Part V closes by naming psychological safety as the readiness multiplier." },
  { n: "VI", title: "The Governance", sub: "Ethics, Accountability, and Oversight", body: "Governance is the part of AI strategy most organizations get wrong in the same way: they treat it as a constraint rather than as infrastructure that makes it safe to do more.\n\nThe governance paradox: organizations with mature AI governance move faster than their less-governed competitors. The three-layer architecture covers decision authority, process governance, and cultural governance. Part VI is ultimately an argument about trust." },
  { n: "VII", title: "The Innovation", sub: "AI as Catalyst for Reinvention", body: "Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing better, and those that used it to become something fundamentally different. The first captured efficiency. The second captured the future.\n\nThe connecting thread: AI as a capability, not just a tool. A capability changes what the organization is able to do and compounds over time." },
  { n: "VIII", title: "The Leader", sub: "Synthesis and the Road Ahead", body: "Every part of this book has been about the same thing. Part VIII is where that becomes personal. Four capabilities define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness.\n\nThe book closes honestly — the work ahead is genuinely harder to do than to read about, and genuinely worth doing." },
  { n: "IX", title: "The Politics of AI", sub: "Governance, Power, and the Responsibility to Act", body: "Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked — this determines whether the AI era represents one of the great advances in human history or one of its cautionary tales.\n\nPart IX closes on an honest note: organizational excellence in AI leadership is necessary but insufficient. The governance context is being shaped by decisions in which capable leaders are largely absent." },
];

function Accordion({ p }: { p: typeof parts[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E8E0D8" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "1.5rem", padding: "1.25rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#C41230", minWidth: "1.25rem", paddingTop: "1px", flexShrink: 0 }}>{p.n}</span>
        <span style={{ flex: 1 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#1C1410", display: "block", marginBottom: "0.1rem" }}>{p.title}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9A8878" }}>{p.sub}</span>
        </span>
        <span style={{ color: "#9A8878", paddingTop: "2px", flexShrink: 0 }}>
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </button>
      {open && (
        <div style={{ paddingLeft: "2.75rem", paddingBottom: "1.25rem" }}>
          {p.body.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#5A4E44", lineHeight: 1.85, marginBottom: "0.75rem" }}>{para}</p>
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setD(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading"); setErr(null);
    try {
      const r = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.error || "Failed");
      setStatus("success");
    } catch (e: any) { setErr(e.message); setStatus("error"); }
  };
  const input: React.CSSProperties = { width: "100%", height: "2.75rem", padding: "0 0.875rem", background: "#fff", border: "1px solid #DDD5CC", color: "#1C1410", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", outline: "none", borderRadius: 0 };
  if (status === "success") return (
    <div style={{ padding: "3rem 0", textAlign: "center" }}>
      <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#00B050", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "#fff", fontWeight: 700, fontSize: "1rem" }}>✓</div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A4E44", fontSize: "0.9rem" }}>Inquiry received. We'll respond within 24 hours.</p>
    </div>
  );
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Name *</label>
          <input type="text" name="name" required value={d.name} onChange={onChange} placeholder="Your name" style={input} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Organization *</label>
          <input type="text" name="organization" required value={d.organization} onChange={onChange} placeholder="Company" style={input} />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Email *</label>
        <input type="email" name="email" required value={d.email} onChange={onChange} placeholder="you@company.com" style={input} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Event Date</label>
          <input type="date" name="eventDate" value={d.eventDate} onChange={onChange} style={input} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Format</label>
          <select name="format" value={d.format} onChange={onChange} style={{ ...input, cursor: "pointer" }}>
            <option>In-Person Keynote</option>
            <option>Virtual Keynote</option>
            <option>Workshop</option>
            <option>Fireside Chat</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Message *</label>
        <textarea name="message" required value={d.message} onChange={onChange} placeholder="Tell us about the audience, theme, and goals..." style={{ ...input, height: "6.5rem", padding: "0.75rem 0.875rem", resize: "none" }} />
      </div>
      {err && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#C41230" }}>{err}</p>}
      <button type="submit" disabled={status === "loading"} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", alignSelf: "flex-start", background: "#1C1410", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.8rem 1.75rem", border: "none", cursor: "pointer", opacity: status === "loading" ? 0.6 : 1 }}>
        {status === "loading" ? "Sending..." : <>Send Inquiry <ArrowRight size={13} /></>}
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
    <button onClick={onClick} style={{ position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 200, background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.8rem 1.5rem", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(196,18,48,0.35)", opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(1rem)", transition: "opacity 0.25s, transform 0.3s", pointerEvents: show ? "auto" : "none" }}>
      Book Enrique to Speak
    </button>
  );
}

export default function OurExistentialAdvantage() {
  const bookingRef = useRef<HTMLElement>(null);
  const scrollToBooking = () => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function submitNewsletter(e: React.FormEvent) {
    e.preventDefault(); setNlStatus("loading");
    try {
      const r = await fetch("/api/newsletter/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email }) });
      const j = await r.json();
      if (j.success) { setNlStatus("success"); setName(""); setEmail(""); } else setNlStatus("error");
    } catch { setNlStatus("error"); }
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F7F3EC" }}>
      <style>{`
        @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        input::placeholder, textarea::placeholder { color: #C4B8AD; }
        input[type=date]::-webkit-calendar-picker-indicator { filter: invert(0.3); }
        select option { background: #fff; color: #1C1410; }
        @media (max-width: 860px) {
          .hero-flanks { display: none !important; }
          .about-cols { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .booking-cols { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .parts-cols { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      <FloatingCTA onClick={scrollToBooking} />

      {/* ── TOP BAR ── */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", background: "rgba(247,243,236,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(28,20,16,0.08)" }}>
        <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#9A8878", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
          <ArrowLeft size={12} /> Books
        </Link>
        <button onClick={scrollToBooking} style={{ background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.4rem 1rem", border: "none", cursor: "pointer" }}>
          Book Enrique
        </button>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F7F3EC", paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>

          {/* 3-col: review | cover | review */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px 1fr", gap: "3.5rem", alignItems: "center", marginBottom: "3.5rem" }}>

            {/* Left review */}
            <div className="hero-flanks" style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.05rem", color: "#3A3028", lineHeight: 1.75, marginBottom: "1rem" }}>
                "{featuredReviews[0].quote}"
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#1C1410" }}>{featuredReviews[0].name}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", color: "#9A8878", marginTop: "0.2rem" }}>{featuredReviews[0].role}</p>
            </div>

            {/* Cover — center */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "3/4", overflow: "hidden", boxShadow: "0 24px 64px rgba(28,20,16,0.2), 0 4px 16px rgba(28,20,16,0.12)" }}>
                <img src="/book-cover.png" alt="Our Existential Advantage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            {/* Right review */}
            <div className="hero-flanks" style={{ textAlign: "left" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.05rem", color: "#3A3028", lineHeight: 1.75, marginBottom: "1rem" }}>
                "{featuredReviews[1].quote}"
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#1C1410" }}>{featuredReviews[1].name}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", color: "#9A8878", marginTop: "0.2rem" }}>{featuredReviews[1].role}</p>
            </div>
          </div>

          {/* Title block — centered */}
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1rem" }}>Coming June 2026</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#1C1410", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.875rem" }}>
              Our Existential Advantage
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#6B5E52", marginBottom: "0.375rem" }}>
              Human Leadership in the Age of Intelligent Machines
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#B8A898", marginBottom: "2.5rem" }}>by Enrique Rubio</p>
            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#notify" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#1C1410", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.9rem 1.75rem", textDecoration: "none" }}>
                Notify Me at Launch <ArrowRight size={13} />
              </a>
              <button onClick={scrollToBooking} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "transparent", color: "#1C1410", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.9rem 1.75rem", border: "1.5px solid #1C1410", cursor: "pointer" }}>
                Book Enrique to Speak
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── THIN DIVIDER ── */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #D4C9BE, transparent)", maxWidth: "600px", margin: "0 auto" }} />

      {/* ── ABOUT ── */}
      <section style={{ background: "#fff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="about-cols">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1.75rem" }}>About the Book</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1C1410", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
                This book is not about AI.<br />It is about you.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#6B5E52", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                More precisely, it is about what you bring to the world that AI cannot replicate, and what you risk losing if you are not careful.
              </p>
              <div style={{ borderLeft: "3px solid #C41230", paddingLeft: "1.25rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#C41230", marginBottom: "0.5rem", fontWeight: 700 }}>The 90 / 10 Formula</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6B5E52", lineHeight: 1.8 }}>
                  Ninety percent of a leader's thinking should remain theirs. Ten percent AI-augmented. The doing can be shared fifty-fifty. A discipline against the gradual outsourcing of judgment.
                </p>
              </div>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#3A3028", lineHeight: 1.9 }}>
              <p style={{ marginBottom: "1.5rem" }}>The central argument is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable.</p>
              <p style={{ marginBottom: "1.5rem" }}>The judgment that integrates experience with context. The ethical reasoning that weighs competing human interests. The empathy that recognizes what data cannot capture. The strategic imagination that asks not what becomes more efficient, but what becomes possible.</p>
              <p>The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is an invitation to become more fully what genuine leadership has always been: the irreplaceable human contribution to outcomes that matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL REVIEWS ── */}
      <section style={{ background: "#F7F3EC", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "3.5rem", textAlign: "center" }}>
            What Leaders Are Saying
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5rem" }} className="reviews-grid">
            {allReviews.map((r, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.97rem", color: "#2C2418", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  "{r.quote}"
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#1C1410" }}>{r.name}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9A8878", marginTop: "0.15rem" }}>{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE THE BOOK ── */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: "5rem", alignItems: "start" }} className="parts-cols">
          <div style={{ position: "sticky", top: "5rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1rem" }}>Inside the Book</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "1.75rem", color: "#1C1410", lineHeight: 1.2, marginBottom: "1rem" }}>
              Nine parts. One conviction.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#9A8878", lineHeight: 1.75 }}>
              A complete architecture for leading through the age of AI — from the long view of history to the personal responsibility of the leader.
            </p>
          </div>
          <div>
            {parts.map(part => <Accordion key={part.n} p={part} />)}
          </div>
        </div>
      </section>

      {/* ── BOOK ENRIQUE ── */}
      <section ref={bookingRef} id="booking" style={{ background: "#F7F3EC", padding: "6rem 2rem", borderTop: "1px solid #E8E0D8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="booking-cols">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1.25rem" }}>Bring This to Your Organization</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1C1410", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Book Enrique<br />to Speak
            </h2>
            <div style={{ width: "2rem", height: "2px", background: "#C41230", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6B5E52", lineHeight: 1.8 }}>
              Keynotes and workshops built around the frameworks in this book. Your team leaves with the clarity and tools to lead through what's coming.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* ── NOTIFY ── */}
      <section id="notify" style={{ background: "#1C1410", padding: "5.5rem 2rem" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.75rem" }}>Coming June 2026</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "2.25rem", color: "#fff", lineHeight: 1.1, marginBottom: "0.75rem" }}>Be First to Know</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Get notified the moment <em>Our Existential Advantage</em> is available.
          </p>
          {nlStatus === "success" ? (
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#C41230" }}>You're on the list.</p>
          ) : (
            <form onSubmit={submitNewsletter} style={{ display: "flex" }}>
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.875rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)", color: "#fff", outline: "none", width: "110px", flexShrink: 0 }} />
              <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.875rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", border: "1px solid rgba(255,255,255,0.12)", borderLeft: "none", background: "rgba(255,255,255,0.07)", color: "#fff", outline: "none", flex: 1 }} />
              <button type="submit" disabled={nlStatus === "loading"} style={{ height: "2.75rem", padding: "0 1.25rem", background: "#C41230", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0 }}>
                {nlStatus === "loading" ? "..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#F0EAE0", borderTop: "1px solid #E0D5C8", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#B8A898" }}>&copy; 2026 Enrique Rubio</p>
        <Link href="/book" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#B8A898", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <ArrowLeft size={11} /> Back to Upcoming Books
        </Link>
      </footer>
    </div>
  );
}
