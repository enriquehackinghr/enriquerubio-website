import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
      className="min-h-screen flex flex-col"
      style={{ background: "#161616", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/40">enriquerubio.ai</span>
        <span
          className="text-xs font-mono tracking-[0.25em] uppercase px-3 py-1 border"
          style={{ borderColor: "#C41230", color: "#C41230" }}
        >
          New Book
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-0 px-8 md:px-16 py-16 md:py-24 max-w-7xl mx-auto w-full">

        {/* Left — Book cover */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start lg:pr-24 mb-16 lg:mb-0">
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{
                width: "clamp(220px, 28vw, 360px)",
                aspectRatio: "3/4",
                boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <img
                src="/book-cover.png"
                alt="Our Existential Advantage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow behind cover */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: "#C41230", transform: "scale(0.8) translateY(20%)" }}
            />
          </div>
        </div>

        {/* Right — Text + form */}
        <div className="flex-1 max-w-xl">
          {/* Coming badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C41230" }} />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
              Coming June 2026
            </span>
          </div>

          {/* Title */}
          <h1
            className="uppercase leading-[0.9] mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Our<br />Existential<br /></span>
            <span style={{ color: "#C41230" }}>Advantage</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 mb-2" style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
            Human Leadership in the Age of Intelligent Machines
          </p>
          <p className="text-white/30 text-sm font-mono tracking-widest uppercase mb-10">
            Enrique Rubio
          </p>

          {/* Divider */}
          <div className="mb-10 w-16 h-px" style={{ background: "#C41230" }} />

          {/* Thesis line */}
          <p className="text-white/70 leading-relaxed mb-10" style={{ fontSize: "1rem" }}>
            This book is not about AI. It is about you, and why your humanity remains
            the only advantage that cannot be replicated, automated, or scaled away.
          </p>

          {/* Sign-up */}
          {status === "success" ? (
            <div
              className="px-6 py-5 mb-10"
              style={{ border: "1px solid #C41230", background: "rgba(196,18,48,0.06)" }}
            >
              <p className="font-semibold mb-1" style={{ color: "#C41230" }}>You're on the list.</p>
              <p className="text-white/50 text-sm">We'll notify you as soon as the book is released.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-10">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
                Get notified at launch
              </p>
              <div className="flex flex-col sm:flex-row gap-0">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-shrink-0 sm:w-40 h-12 px-4 text-sm font-mono bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/40"
                  style={{ borderRadius: 0 }}
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 text-sm font-mono bg-white/5 border border-l-0 border-t-0 sm:border-t sm:border-l-0 border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/40"
                  style={{ borderRadius: 0 }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-12 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-opacity hover:opacity-90 border-l-0"
                  style={{
                    background: "#C41230",
                    color: "#FFFFFF",
                    borderRadius: 0,
                    letterSpacing: "0.15em",
                  }}
                >
                  {status === "loading" ? "..." : "Notify Me"}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-2 text-red-400 text-xs font-mono">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

          {/* Continue button */}
          <a
            href="/home"
            className="inline-flex items-center gap-3 group"
          >
            <span
              className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors"
            >
              Continue to website
            </span>
            <span
              className="flex items-center justify-center w-8 h-8 border border-white/20 group-hover:border-white/50 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" />
            </span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-16 py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/20 text-xs font-mono">
          &copy; 2026 Enrique Rubio. All rights reserved.
        </p>
        <img
          src="/book-banner.png"
          alt=""
          className="hidden sm:block h-10 opacity-20 object-contain"
        />
        <p className="text-white/20 text-xs font-mono">
          Hacking HR | People and Culture Strategy Institute
        </p>
      </div>
    </div>
  );
}
