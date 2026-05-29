import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// ─── FONTS ───────────────────────────────────────────
const DISPLAY = "'Inter', sans-serif";   // 800–900, tight tracking
const BODY    = "'Inter', sans-serif";   // 400–500, normal tracking
const SERIF   = "'Playfair Display', Georgia, serif"; // italics only, for quotes

// ─── DATA ────────────────────────────────────────────
const featuredReviews = [
  {
    quote: "The leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. Required reading for anyone serious about leading through what comes next.",
    name: "Eynat Guez",
    role: "Co-Founder & CEO, Papaya Global",
    photo: "/reviewer-eynat.jpg",
  },
  {
    quote: "Enrique Rubio has written the manual for human-centric leading in the age of AI — a compelling case for Team Human as the true competitive advantage.",
    name: "Gary A. Bolles",
    role: "Chair for the Future of Work, Singularity University",
    photo: "/reviewer-gary.jpg",
  },
];

const allReviews = [
  { quote: "At a time when leaders are inundated with AI hype, this book delivers something no LLM can match: authentic human wisdom.", name: "Jeff Wetzler", role: "Author, Ask: Tap Into the Hidden Wisdom of People Around You", photo: "/reviewer-jeff.jpg" },
  { quote: "A must-read for anyone leading their business through this AI transition.", name: "Janine Yancey", role: "Founder & CEO, Emtrain", photo: "/reviewer-janine.jpg" },
  { quote: "A smart, deeply human guide to leading through change while preserving the qualities that make us irreplaceable.", name: "Tracy Brower, PhD", role: "VP of Workplace Insights, Steelcase", photo: "/reviewer-tracy.jpg" },
  { quote: "The 90/10 principle alone should be required doctrine in every executive team.", name: "Nico Decock", role: "CHRO, Distrilog Group", photo: "/reviewer-nico.jpg" },
  { quote: "Enrique reframes AI as a leadership challenge: protect human judgment, build trust, and lead transformation with clarity, ethics, and care.", name: "Clarissa Schuhmacher", role: "Head of Capabilities, Leadership & Culture, Imperial Brands PLC", photo: "/reviewer-clarissa.jpg" },
  { quote: "Deeply human, sharply practical. Enrique distills what five centuries of disruption keep teaching us, then applies it to the most consequential transition of our careers.", name: "Eynat Guez", role: "Co-Founder & CEO, Papaya Global", photo: "/reviewer-eynat.jpg" },
];

const parts = [
  { n: "I",    title: "The Long View",       sub: "Technology, Disruption, and the Shape of Change",    body: "Before any organization can lead AI well, it needs to understand what is actually happening — not the version in the headlines, but the version five centuries of technological disruption have consistently produced.\n\nAI is genuinely different in three specific ways: it operates in the domain of cognition, its pace of improvement has compressed the window for adaptation, and no professional domain is insulated from its effects." },
  { n: "II",   title: "The Mirror",          sub: "What AI Reveals About Human Leadership",             body: "Part II turns the lens inward. The Dumbification Risk is named directly — the gradual erosion of human judgment that occurs when AI handles the cognitive work that builds and maintains that judgment.\n\nThe 90/10 Formula is introduced here as a practical discipline. Part II closes with the most personal question: who are you when AI becomes your colleague?" },
  { n: "III",  title: "The Ecosystem",       sub: "Understanding the Full Landscape",                   body: "Most AI strategies fail because they navigate with an incomplete map. The Workplace Ecosystem Framework identifies seven interconnected components. The AI-Native Competitor thought experiment reveals, with uncomfortable precision, where any established organization is most exposed." },
  { n: "IV",   title: "The Strategy",        sub: "From Vision to Execution",                           body: "Most organizations don't fail at AI because they lack good technology. They fail because they confuse activity for progress.\n\nThe work starts with intent — the explicit articulation of what the organization is trying to accomplish with AI and why. From there: execution architecture, multi-horizon roadmaps, measurement frameworks, and the AI communication narrative every leader needs." },
  { n: "V",    title: "The Readiness",       sub: "Building Human and Organizational Capacity",         body: "Strategy without readiness is architecture without foundation. The Four Dimensions of Readiness: technical fluency, cultural foundation, process adaptability, and leadership capability.\n\nPart V closes by naming psychological safety as the readiness multiplier." },
  { n: "VI",   title: "The Governance",      sub: "Ethics, Accountability, and Oversight",              body: "The governance paradox: organizations with mature AI governance move faster than their less-governed competitors. The three-layer architecture covers decision authority, process governance, and cultural governance. Part VI is ultimately an argument about trust." },
  { n: "VII",  title: "The Innovation",      sub: "AI as Catalyst for Reinvention",                    body: "Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing better, and those that used it to become something fundamentally different.\n\nThe connecting thread: AI as a capability that changes what the organization is able to do and compounds over time." },
  { n: "VIII", title: "The Leader",          sub: "Synthesis and the Road Ahead",                      body: "Every part of this book has been about the same thing. Part VIII is where that becomes personal. Four capabilities define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness." },
  { n: "IX",   title: "The Politics of AI",  sub: "Governance, Power, and the Responsibility to Act",  body: "Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked — this determines whether the AI era represents an advance or a cautionary tale.\n\nPart IX closes honestly: organizational excellence in AI leadership is necessary but insufficient." },
];

// ─── COMPONENTS ──────────────────────────────────────
function Accordion({ p }: { p: typeof parts[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E8E0D8" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "1.5rem", padding: "1.1rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.7rem", color: "#C41230", minWidth: "1.5rem", paddingTop: "2px", flexShrink: 0, letterSpacing: "0.05em" }}>{p.n}</span>
        <span style={{ flex: 1 }}>
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.9rem", color: "#1C1410", display: "block", letterSpacing: "-0.01em" }}>{p.title}</span>
          <span style={{ fontFamily: BODY, fontSize: "0.73rem", color: "#9A8878", marginTop: "0.1rem", display: "block" }}>{p.sub}</span>
        </span>
        <span style={{ color: "#C4B5A8", flexShrink: 0, paddingTop: "3px" }}>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </button>
      {open && (
        <div style={{ paddingLeft: "3rem", paddingBottom: "1.25rem" }}>
          {p.body.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: BODY, fontSize: "0.875rem", color: "#5A4E44", lineHeight: 1.85, marginBottom: "0.6rem" }}>{para}</p>
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
    setD(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading"); setErr(null);
    try {
      const r = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.error || "Failed");
      setStatus("success");
    } catch (ex: any) { setErr(ex.message); setStatus("error"); }
  };
  const inp: React.CSSProperties = { width: "100%", height: "2.75rem", padding: "0 0.875rem", background: "#fff", border: "1px solid #DDD5CC", color: "#1C1410", fontFamily: BODY, fontSize: "0.875rem", outline: "none", borderRadius: 0 };
  if (status === "success") return (
    <div style={{ padding: "3rem 0", textAlign: "center" }}>
      <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#00B050", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "#fff", fontWeight: 700 }}>✓</div>
      <p style={{ fontFamily: BODY, color: "#5A4E44", fontSize: "0.9rem" }}>Inquiry received. We'll respond within 24 hours.</p>
    </div>
  );
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
        {(["name", "organization"] as const).map(k => (
          <div key={k}>
            <label style={{ display: "block", fontFamily: BODY, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>{k === "name" ? "Name *" : "Organization *"}</label>
            <input type="text" name={k} required value={d[k]} onChange={onChange} placeholder={k === "name" ? "Your name" : "Company"} style={inp} />
          </div>
        ))}
      </div>
      <div>
        <label style={{ display: "block", fontFamily: BODY, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Email *</label>
        <input type="email" name="email" required value={d.email} onChange={onChange} placeholder="you@company.com" style={inp} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
        <div>
          <label style={{ display: "block", fontFamily: BODY, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Event Date</label>
          <input type="date" name="eventDate" value={d.eventDate} onChange={onChange} style={inp} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: BODY, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Format</label>
          <select name="format" value={d.format} onChange={onChange} style={{ ...inp, cursor: "pointer" }}>
            <option>In-Person Keynote</option>
            <option>Virtual Keynote</option>
            <option>Workshop</option>
            <option>Fireside Chat</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: BODY, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8878", marginBottom: "0.35rem" }}>Message *</label>
        <textarea name="message" required value={d.message} onChange={onChange} placeholder="Tell us about the audience, theme, and goals..." style={{ ...inp, height: "6.5rem", padding: "0.75rem 0.875rem", resize: "none" }} />
      </div>
      {err && <p style={{ fontFamily: BODY, fontSize: "0.8rem", color: "#C41230" }}>{err}</p>}
      <button type="submit" disabled={status === "loading"} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", alignSelf: "flex-start", background: "#1C1410", color: "#fff", fontFamily: DISPLAY, fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 1.75rem", border: "none", cursor: "pointer", opacity: status === "loading" ? 0.6 : 1 }}>
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
    <button onClick={onClick} style={{ position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 200, background: "#C41230", color: "#fff", fontFamily: DISPLAY, fontWeight: 800, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.8rem 1.5rem", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(196,18,48,0.3)", opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(1rem)", transition: "opacity 0.25s, transform 0.3s", pointerEvents: show ? "auto" : "none" }}>
      Book Enrique to Speak
    </button>
  );
}

// ─── PAGE ─────────────────────────────────────────────
export default function OurExistentialAdvantage() {
  const bookingRef = useRef<HTMLElement>(null);
  const scrollToBooking = () => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const [nlName, setNlName] = useState("");
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function submitNl(e: React.FormEvent) {
    e.preventDefault(); setNlStatus("loading");
    try {
      const r = await fetch("/api/newsletter/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: nlName, email: nlEmail }) });
      const j = await r.json();
      if (j.success) { setNlStatus("success"); } else setNlStatus("error");
    } catch { setNlStatus("error"); }
  }

  return (
    <div style={{ fontFamily: BODY, background: "#F7F3EC" }}>
      <style>{`
        @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        input::placeholder, textarea::placeholder { color: #C4B8AD; }
        input[type=date]::-webkit-calendar-picker-indicator { filter: invert(0.3); }
        select option { background: #fff; color: #1C1410; }
        @media (max-width: 860px) {
          .hero-flanks { display: none !important; }
          .about-cols { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .booking-cols { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .parts-layout { grid-template-columns: 1fr !important; }
          .parts-sticky { position: static !important; }
        }
      `}</style>

      <FloatingCTA onClick={scrollToBooking} />

      {/* TOP BAR */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", background: "rgba(247,243,236,0.94)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(28,20,16,0.07)" }}>
        <Link href="/book" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#9A8878", fontFamily: DISPLAY, fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
          <ArrowLeft size={11} /> Books
        </Link>
        <button onClick={scrollToBooking} style={{ background: "#C41230", color: "#fff", fontFamily: DISPLAY, fontWeight: 800, fontSize: "0.67rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", border: "none", cursor: "pointer" }}>
          Book Enrique
        </button>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F7F3EC", paddingTop: "4.5rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>

          {/* 3-col: review | cover | review */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px 1fr", gap: "3rem", alignItems: "center", marginBottom: "3rem" }}>
            <div className="hero-flanks" style={{ textAlign: "right" }}>
              <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1rem", color: "#3A3028", lineHeight: 1.75, marginBottom: "1rem" }}>"{featuredReviews[0].quote}"</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem" }}>
                <div>
                  <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.78rem", color: "#1C1410", letterSpacing: "-0.01em", margin: 0 }}>{featuredReviews[0].name}</p>
                  <p style={{ fontFamily: BODY, fontSize: "0.7rem", color: "#9A8878", marginTop: "0.1rem", margin: 0 }}>{featuredReviews[0].role}</p>
                </div>
                <img src={featuredReviews[0].photo} alt={featuredReviews[0].name} style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid #E8DDD4" }} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", boxShadow: "0 20px 60px rgba(28,20,16,0.18), 0 4px 16px rgba(28,20,16,0.1)" }}>
                <img src="/book-cover.png" alt="Our Existential Advantage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            <div className="hero-flanks">
              <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1rem", color: "#3A3028", lineHeight: 1.75, marginBottom: "1rem" }}>"{featuredReviews[1].quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <img src={featuredReviews[1].photo} alt={featuredReviews[1].name} style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid #E8DDD4" }} />
                <div>
                  <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.78rem", color: "#1C1410", letterSpacing: "-0.01em", margin: 0 }}>{featuredReviews[1].name}</p>
                  <p style={{ fontFamily: BODY, fontSize: "0.7rem", color: "#9A8878", marginTop: "0.1rem", margin: 0 }}>{featuredReviews[1].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title block */}
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A898", marginBottom: "0.875rem" }}>Coming June 2026</p>
            <h1 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "clamp(2.75rem, 6vw, 5rem)", color: "#1C1410", lineHeight: 0.95, letterSpacing: "-0.04em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Our Existential<br />
              <span style={{ color: "#C41230" }}>Advantage</span>
            </h1>
            <p style={{ fontFamily: BODY, fontWeight: 400, fontSize: "1.05rem", color: "#6B5E52", marginBottom: "0.35rem", letterSpacing: "-0.01em" }}>
              Human Leadership in the Age of Intelligent Machines
            </p>
            <p style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "0.78rem", color: "#B8A898", letterSpacing: "0.05em", marginBottom: "2.25rem" }}>by Enrique Rubio</p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#notify" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#1C1410", color: "#fff", fontFamily: DISPLAY, fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 1.75rem", textDecoration: "none" }}>
                Notify Me at Launch <ArrowRight size={13} />
              </a>
              <button onClick={scrollToBooking} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "transparent", color: "#1C1410", fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 1.75rem", border: "1.5px solid #1C1410", cursor: "pointer" }}>
                Book Enrique to Speak
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THIN RULE */}
      <div style={{ maxWidth: "560px", margin: "0 auto", height: "1px", background: "linear-gradient(to right, transparent, #D4C9BE, transparent)" }} />

      {/* ── ABOUT ── */}
      <section style={{ background: "#fff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="about-cols">
            <div>
              <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1.5rem" }}>About the Book</p>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#1C1410", lineHeight: 1.0, letterSpacing: "-0.035em", textTransform: "uppercase", marginBottom: "2rem" }}>
                Not About AI.<br />About You.
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "0.95rem", color: "#6B5E52", lineHeight: 1.85, marginBottom: "2rem" }}>
                More precisely, it is about what you bring to the world that AI cannot replicate, and what you risk losing if you are not careful.
              </p>
              <div style={{ borderLeft: "3px solid #C41230", paddingLeft: "1.25rem" }}>
                <p style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C41230", marginBottom: "0.5rem" }}>The 90 / 10 Formula</p>
                <p style={{ fontFamily: BODY, fontSize: "0.9rem", color: "#6B5E52", lineHeight: 1.8 }}>
                  Ninety percent of a leader's thinking should remain theirs. Ten percent AI-augmented. The doing can be shared fifty-fifty. A discipline against the gradual outsourcing of judgment.
                </p>
              </div>
            </div>
            <div style={{ fontFamily: BODY, fontSize: "1rem", color: "#3A3028", lineHeight: 1.9 }}>
              <p style={{ marginBottom: "1.5rem" }}>The central argument is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable.</p>
              <p style={{ marginBottom: "1.5rem" }}>The judgment that integrates experience with context. The ethical reasoning that weighs competing human interests. The empathy that recognizes what data cannot capture. The strategic imagination that asks not what becomes more efficient, but what becomes possible.</p>
              <p>The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is an invitation to become more fully what genuine leadership has always been.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE BAND ── */}
      <section style={{ background: "#1C1410", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1.35rem, 2.8vw, 2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.55, marginBottom: "2rem" }}>
            "The leaders who will win are the ones who deepen their judgment instead of outsourcing it to AI. This book is the clearest framework I've seen for what that looks like in practice."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "1.5rem", height: "2px", background: "#C41230", flexShrink: 0 }} />
            <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
              Eynat Guez &nbsp;<span style={{ color: "rgba(255,255,255,0.28)", fontWeight: 400 }}>Co-Founder & CEO, Papaya Global</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── ALL REVIEWS ── */}
      <section style={{ background: "#F7F3EC", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A898", marginBottom: "0.75rem" }}>Advance Reviews</p>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#1C1410", letterSpacing: "-0.035em", textTransform: "uppercase", margin: 0 }}>
              What Leaders Are Saying
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="reviews-grid">
            {allReviews.map((r, i) => (
              <div key={i} style={{ background: "#fff", padding: "2.5rem 2rem 2rem", display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(28,20,16,0.06)" }}>
                {/* Photo */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={r.photo}
                      alt={r.name}
                      style={{ width: "88px", height: "88px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", display: "block", border: "3px solid #F7F3EC" }}
                    />
                    <div style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "22px", height: "22px", borderRadius: "50%", background: "#C41230", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #fff" }}>
                      <span style={{ color: "#fff", fontSize: "0.6rem", fontFamily: SERIF, fontStyle: "italic", lineHeight: 1 }}>"</span>
                    </div>
                  </div>
                </div>
                {/* Quote */}
                <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "0.95rem", color: "#2C2418", lineHeight: 1.85, marginBottom: "1.75rem", flex: 1, textAlign: "center" }}>
                  "{r.quote}"
                </p>
                {/* Attribution */}
                <div style={{ textAlign: "center", paddingTop: "1.25rem", borderTop: "1px solid #F0E8E0" }}>
                  <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.78rem", color: "#1C1410", letterSpacing: "-0.01em", margin: 0 }}>{r.name}</p>
                  <p style={{ fontFamily: BODY, fontSize: "0.68rem", color: "#9A8878", marginTop: "0.3rem", lineHeight: 1.5 }}>{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE THE BOOK ── */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Section header */}
          <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1.5rem" }}>Inside the Book</p>

          {/* Big split headline */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#1C1410", lineHeight: 0.95, letterSpacing: "-0.04em", textTransform: "uppercase", margin: 0 }}>
              Nine Parts.
            </h2>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#C41230", lineHeight: 0.95, letterSpacing: "-0.04em", textTransform: "uppercase", margin: 0, textAlign: "right" }}>
              One Conviction.
            </h2>
          </div>

          {/* Rule + description */}
          <div style={{ borderTop: "2px solid #1C1410", paddingTop: "1.25rem", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <p style={{ fontFamily: BODY, fontSize: "0.9rem", color: "#9A8878", lineHeight: 1.7, maxWidth: "540px", margin: 0 }}>
              A complete architecture for leading organizations through the age of AI, from the long view of history to the personal responsibility of the leader.
            </p>
            <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4B8AD", margin: 0, flexShrink: 0 }}>
              9 Parts &nbsp;·&nbsp; 350 Pages
            </p>
          </div>

          {/* Accordion */}
          <div>
            {parts.map(part => <Accordion key={part.n} p={part} />)}
          </div>
        </div>
      </section>

      {/* ── BOOK ENRIQUE ── */}
      <section ref={bookingRef} id="booking" style={{ background: "#F7F3EC", padding: "6rem 2rem", borderTop: "1px solid #E8E0D8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="booking-cols">
          <div>
            <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A898", marginBottom: "1.25rem" }}>Bring This to Your Organization</p>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#1C1410", lineHeight: 1.0, letterSpacing: "-0.035em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Book<br />Enrique<br />to Speak
            </h2>
            <div style={{ width: "2rem", height: "3px", background: "#C41230", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: BODY, fontSize: "0.9rem", color: "#6B5E52", lineHeight: 1.8 }}>
              Keynotes and workshops built around the frameworks in this book. Your team leaves with the clarity and tools to lead through what's coming.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* ── NOTIFY ── */}
      <section id="notify" style={{ background: "#1C1410", padding: "5.5rem 2rem" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.75rem" }}>Coming June 2026</p>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: "2.5rem", color: "#fff", lineHeight: 1.0, letterSpacing: "-0.04em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
            Be First<br />to Know
          </h2>
          <p style={{ fontFamily: BODY, fontSize: "0.9rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Get notified the moment <em>Our Existential Advantage</em> is available.
          </p>
          {nlStatus === "success" ? (
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1rem", color: "#C41230" }}>You're on the list.</p>
          ) : (
            <form onSubmit={submitNl} style={{ display: "flex" }}>
              <input type="text" placeholder="Name" value={nlName} onChange={e => setNlName(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.875rem", fontFamily: BODY, fontSize: "0.875rem", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", color: "#fff", outline: "none", width: "110px", flexShrink: 0 }} />
              <input type="email" placeholder="Email address" value={nlEmail} onChange={e => setNlEmail(e.target.value)} required style={{ height: "2.75rem", padding: "0 0.875rem", fontFamily: BODY, fontSize: "0.875rem", border: "1px solid rgba(255,255,255,0.1)", borderLeft: "none", background: "rgba(255,255,255,0.06)", color: "#fff", outline: "none", flex: 1 }} />
              <button type="submit" disabled={nlStatus === "loading"} style={{ height: "2.75rem", padding: "0 1.25rem", background: "#C41230", color: "#fff", fontFamily: DISPLAY, fontWeight: 800, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", flexShrink: 0 }}>
                {nlStatus === "loading" ? "..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#F0EAE0", borderTop: "1px solid #E0D5C8", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: BODY, fontSize: "0.72rem", color: "#B8A898" }}>&copy; 2026 Enrique Rubio</p>
        <Link href="/book" style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.08em", color: "#B8A898", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem", textTransform: "uppercase" }}>
          <ArrowLeft size={11} /> Back to Upcoming Books
        </Link>
      </footer>
    </div>
  );
}
