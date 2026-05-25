import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function BookLanding() {
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
      setStatus(data.success ? "success" : "error");
      if (data.success) { setName(""); setEmail(""); }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="h-screen overflow-hidden flex flex-col"
      style={{ background: "#161616", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 md:px-14 py-3 border-b border-white/10 flex-shrink-0">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/40">enriquerubio.ai</span>
        <span
          className="text-xs font-mono tracking-[0.25em] uppercase px-3 py-1 border"
          style={{ borderColor: "#C41230", color: "#C41230" }}
        >
          New Books
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-row items-stretch justify-center min-h-0 overflow-hidden max-w-6xl mx-auto w-full">

        {/* Left — Two book covers side by side */}
        <div
          className="flex items-center justify-center gap-4 py-6 px-6"
          style={{ width: "42%", flexShrink: 0 }}
        >
          {/* OEA cover */}
          <div className="flex flex-col items-center gap-3" style={{ flex: 1 }}>
            <div
              className="overflow-hidden w-full"
              style={{
                aspectRatio: "3/4",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <img src="/book-cover.png" alt="Our Existential Advantage" className="w-full h-full object-cover" />
            </div>
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest text-center leading-tight">
              Our Existential<br />Advantage
            </p>
          </div>

          {/* Divider */}
          <div className="w-px self-stretch bg-white/10 flex-shrink-0" />

          {/* AI for Beginners cover */}
          <div className="flex flex-col items-center gap-3" style={{ flex: 1 }}>
            <div
              className="overflow-hidden w-full"
              style={{
                aspectRatio: "3/4",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <img src="/ai-for-beginners-cover.png" alt="AI for Beginners" className="w-full h-full object-cover" />
            </div>
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest text-center leading-tight">
              AI for<br />Beginners
            </p>
          </div>
        </div>

        {/* Right — Text + form */}
        <div className="flex flex-col justify-center pr-8 md:pr-12 py-6" style={{ width: "58%", flexShrink: 0 }}>

          {/* Badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C41230" }} />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
              Two Books. Coming June 2026.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="uppercase leading-[0.88] mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#FFFFFF", display: "block" }}>Enrique Rubio</span>
            <span style={{ color: "#C41230", display: "block" }}>June 2026</span>
          </h1>

          {/* Two book entries */}
          <div className="flex flex-col gap-3 mb-6">
            {/* Book 1 */}
            <div className="flex gap-4 items-start p-4 border border-white/10 bg-white/[0.02]">
              <div className="w-1 self-stretch flex-shrink-0" style={{ background: "#C41230" }} />
              <div>
                <p className="font-bold text-white text-sm mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Our Existential Advantage
                </p>
                <p className="text-white/50 text-xs font-mono leading-relaxed">
                  Human Leadership in the Age of Intelligent Machines
                </p>
              </div>
            </div>
            {/* Book 2 */}
            <div className="flex gap-4 items-start p-4 border border-white/10 bg-white/[0.02]">
              <div className="w-1 self-stretch flex-shrink-0" style={{ background: "#1d4a35" }} />
              <div>
                <p className="font-bold text-white text-sm mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  AI for Beginners
                </p>
                <p className="text-white/50 text-xs font-mono leading-relaxed">
                  A Practical Path from Curious to Confident
                </p>
              </div>
            </div>
          </div>

          {/* Sign-up */}
          {status === "success" ? (
            <div
              className="px-5 py-4 mb-5"
              style={{ border: "1px solid #C41230", background: "rgba(196,18,48,0.06)", maxWidth: "520px" }}
            >
              <p className="font-semibold mb-0.5 text-sm" style={{ color: "#C41230" }}>You're on the list.</p>
              <p className="text-white/50 text-xs font-mono">We'll notify you as soon as both books are released.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-5" style={{ maxWidth: "520px" }}>
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-3">
                Get notified at launch
              </p>
              <div className="flex flex-row gap-0">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-32 h-11 px-4 text-sm font-mono bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/40 flex-shrink-0"
                  style={{ borderRadius: 0 }}
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-11 px-4 text-sm font-mono bg-white/5 border border-l-0 border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/40"
                  style={{ borderRadius: 0 }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-11 px-5 text-xs font-mono font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex-shrink-0"
                  style={{ background: "#C41230", color: "#FFFFFF", borderRadius: 0, letterSpacing: "0.12em" }}
                >
                  {status === "loading" ? "..." : "Notify Me"}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-2 text-red-400 text-xs font-mono">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

          {/* Continue to website */}
          <a
            href="/"
            onClick={() => localStorage.setItem("enrique_book_landing_seen", "true")}
            className="inline-flex items-center gap-3 self-start transition-opacity hover:opacity-85"
            style={{ background: "#00E676", color: "#000000", padding: "11px 24px", borderRadius: 0 }}
          >
            <span className="text-base font-mono font-bold uppercase tracking-[0.15em]">
              Continue to website
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-14 py-2.5 border-t border-white/10 flex-shrink-0 flex items-center justify-between">
        <p className="text-white/20 text-xs font-mono">&copy; 2026 Enrique Rubio</p>
        <p className="text-white/20 text-xs font-mono">Hacking HR | People and Culture Strategy Institute</p>
      </div>
    </div>
  );
}
