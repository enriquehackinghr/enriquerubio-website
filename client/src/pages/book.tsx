import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-12 px-4 border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6 shadow-[4px_4px_0px_0px_#000]">
            :: Upcoming Books
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
            Two Books.<br /><span className="text-primary">June 2026.</span>
          </h1>
          <p className="text-gray-400 font-mono text-lg max-w-2xl leading-relaxed">
            Enrique Rubio publishes two books in June 2026. One for leaders navigating AI transformation. One for anyone ready to start using AI with confidence.
          </p>
        </div>
      </section>

      {/* Book 1 — Our Existential Advantage */}
      <section className="py-20 px-4 border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Cover */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
              <div className="relative">
                <div
                  className="w-56 md:w-64 overflow-hidden"
                  style={{
                    aspectRatio: "3/4",
                    border: "2px solid #C41230",
                    boxShadow: "12px 12px 0px 0px #C41230",
                  }}
                >
                  <img
                    src="/book-cover.png"
                    alt="Our Existential Advantage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -top-3 -right-3 px-3 py-1 font-mono font-bold text-xs uppercase"
                  style={{ background: "#C41230", color: "#FFFFFF", boxShadow: "4px 4px 0px 0px #000" }}
                >
                  Coming June 2026
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div
                className="inline-block px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6"
                style={{ background: "#C41230", color: "#FFFFFF", boxShadow: "4px 4px 0px 0px #000" }}
              >
                :: Leadership Book
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
                Our<br />Existential<br /><span className="text-primary">Advantage</span>
              </h2>
              <p className="text-xl text-gray-300 font-mono mb-3">
                Human Leadership in the Age of Intelligent Machines
              </p>
              <p className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-6">
                Enrique Rubio
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-0 mb-8">
                <div className="border-2 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">9</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Parts</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">55</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Chapters</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">1</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Conviction</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 text-gray-300 font-mono italic text-lg leading-relaxed mb-8">
                "In the age of intelligent machines, the most strategic thing you can do is become more fully, more deliberately, more courageously human."
              </blockquote>

              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 max-w-xl">
                As artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable. This book is the complete architecture for leading through what's coming.
              </p>

              <Link
                href="/books/our-existential-advantage"
                className="inline-flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all hover:opacity-90"
                style={{ background: "#C41230", color: "#FFFFFF", boxShadow: "6px 6px 0px 0px #000" }}
              >
                Explore the Book
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book 2 — AI for Beginners */}
      <section className="py-20 px-4 border-b-2 border-white/10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">

            {/* Left — book cover */}
            <div className="flex justify-center md:justify-start">
              <div
                className="overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  aspectRatio: "3/4",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="/ai-for-beginners-cover.png"
                  alt="AI for Beginners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle — identity */}
            <div>
              <div className="inline-flex items-center gap-2 border-2 border-primary px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest">Coming June 2026</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
                AI for<br /><span className="text-primary">Beginners</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-8">Enrique Rubio</p>

              <blockquote className="border-l-4 border-primary pl-6 text-gray-300 font-mono italic text-lg leading-relaxed mb-10">
                "AI is your first hire. Brief it well, and the work begins."
              </blockquote>

              {/* Stats */}
              <div className="flex flex-wrap gap-0">
                <div className="border-2 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">44</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Chapters</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">~20</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Min / Chapter</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">$19</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">US Paperback</div>
                </div>
              </div>
            </div>

            {/* Right — description */}
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>You opened ChatGPT or Claude once, asked a question, glanced at the answer, and closed the tab. The interaction lasted under a minute and produced a mediocre result. You walked away thinking AI was overrated, or that it works for other people but somehow not for you.</p>
              <p>This book is built around one simple frame. AI is your first hire. Brief it the way you would brief a smart new colleague, and the work begins. Skip the briefing, and you get the generic output you have already learned to dismiss.</p>
              <p>In forty-four short chapters, you will move from curious to confident. Each chapter takes about twenty minutes and gives you something you can use the next day: a reusable brief, a sharper question, a habit that compounds across years.</p>
              <div className="border-2 border-white/10 bg-white/5 p-6">
                <p className="text-primary font-mono font-bold text-xs uppercase tracking-widest mb-3">// What this book is really about</p>
                <p className="text-white font-mono text-sm leading-relaxed">This is not a book about AI. It is a book about you, helping you complete work that used to require more manual effort, in a fraction of the time, with more of your judgment showing through.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <BookNewsletter />

      <Footer />
    </div>
  );
}

function BookNewsletter() {
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
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-4 border-t-2 border-white/10 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border-2 border-primary px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest">Coming June 2026</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4 leading-none">
          Stay Tuned for the<br /><span className="text-primary">Book Release</span>
        </h2>
        <p className="text-gray-400 font-mono text-lg mb-10 leading-relaxed">
          Be the first to know when both books are available.<br />
          No spam. Just the release date and where to get them.
        </p>

        {status === "success" ? (
          <div className="border-2 border-primary bg-primary/10 px-8 py-8 text-center">
            <p className="text-primary font-mono font-bold text-xl mb-2">You're on the list.</p>
            <p className="text-gray-300 font-mono text-sm">We'll reach out as soon as the books are released in June 2026.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-none border-2 border-white/20 bg-white/5 text-white placeholder:text-gray-500 font-mono h-14 px-4 focus:border-primary focus:ring-0 sm:w-44 flex-shrink-0"
            />
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-none border-2 border-l-0 sm:border-l-0 border-t-0 sm:border-t-2 border-white/20 bg-white/5 text-white placeholder:text-gray-500 font-mono h-14 px-4 focus:border-primary focus:ring-0 flex-1"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="rounded-none border-2 border-primary border-l-0 bg-primary text-black font-mono font-bold uppercase tracking-widest h-14 px-8 hover:bg-primary/90 shadow-none"
            >
              {status === "loading" ? "..." : "Notify Me"}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-400 font-mono text-sm">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
