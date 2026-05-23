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
          New Book
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-row items-stretch justify-center min-h-0 overflow-hidden max-w-6xl mx-auto w-full">

        {/* Left — Book cover (tall, fills height) */}
        <div
          className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
          style={{ minWidth: "clamp(220px, 28vw, 420px)" }}
        >
          <div className="relative h-full flex items-center py-6">
            <div
              className="overflow-hidden"
              style={{
                height: "calc(100vh - 120px)",
                maxHeight: "780px",
                aspectRatio: "3/4",
                boxShadow: "0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <img
                src="/book-cover.png"
                alt="Our Existential Advantage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Red glow behind cover */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-25"
              style={{ background: "#C41230", transform: "scale(0.7) translateY(15%)" }}
            />
          </div>
        </div>

        {/* Right — Text + form */}
        <div className="flex-1 flex flex-col justify-center pr-8 md:pr-14 py-6 min-w-0 overflow-hidden">

          {/* Coming badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C41230" }} />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
              Coming June 2026
            </span>
          </div>

          {/* Title */}
          <h1
            className="uppercase leading-[0.88] mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#FFFFFF", display: "block" }}>Our Existential</span>
            <span style={{ color: "#C41230", display: "block" }}>Advantage</span>
          </h1>

          {/* Subtitle + author */}
          <p className="text-white/60 mb-1" style={{ fontSize: "1rem", lineHeight: 1.5 }}>
            Human Leadership in the Age of Intelligent Machines
          </p>
          <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-5">
            Enrique Rubio
          </p>

          {/* Divider */}
          <div className="mb-5 w-12 h-px" style={{ background: "#C41230" }} />

          {/* Thesis */}
          <p className="text-white/70 leading-relaxed mb-6" style={{ fontSize: "0.93rem", maxWidth: "480px" }}>
            This book is not about AI. It is about you, and why your humanity remains
            the only advantage that cannot be replicated, automated, or scaled away.
          </p>

          {/* Sign-up */}
          {status === "success" ? (
            <div
              className="px-5 py-4 mb-5"
              style={{ border: "1px solid #C41230", background: "rgba(196,18,48,0.06)", maxWidth: "520px" }}
            >
              <p className="font-semibold mb-0.5" style={{ color: "#C41230" }}>You're on the list.</p>
              <p className="text-white/50 text-sm">We'll notify you as soon as the book is released.</p>
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

          {/* Continue to website — green CTA */}
          <a
            href="/"
            className="inline-flex items-center gap-3 self-start group transition-opacity hover:opacity-85"
            style={{
              background: "#00E676",
              color: "#000000",
              padding: "11px 24px",
              borderRadius: 0,
            }}
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
