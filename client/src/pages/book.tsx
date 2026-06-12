import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-12 px-4 border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6 shadow-[4px_4px_0px_0px_#000]">
            :: Books
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
            Two Books.<br /><span className="text-primary">Now Available.</span>
          </h1>
          <p className="text-gray-400 font-mono text-lg max-w-2xl leading-relaxed">
            Two books by Enrique Rubio, now available on Amazon. One for leaders navigating AI transformation. One for anyone ready to start using AI with confidence.
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
                  Now Available
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

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com/dp/B0H46B8KFZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all hover:opacity-90 no-underline"
                  style={{ background: "#C41230", color: "#FFFFFF", boxShadow: "6px 6px 0px 0px #000" }}
                >
                  Buy on Amazon
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/books/our-existential-advantage"
                  className="inline-flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all hover:opacity-90"
                  style={{ border: "2px solid rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  Explore the Book
                </Link>
              </div>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest">Now Available</span>
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

              <div className="pt-4">
                <a
                  href="https://www.amazon.com/dp/B0H42FYT4Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all hover:opacity-90 no-underline"
                  style={{ background: "#C41230", color: "#FFFFFF", boxShadow: "6px 6px 0px 0px #000" }}
                >
                  Buy on Amazon
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 border-t-2 border-white/10 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4 leading-none">
            Get Both Books<br /><span className="text-primary">on Amazon</span>
          </h2>
          <p className="text-gray-400 font-mono text-lg mb-10 leading-relaxed">
            Available now in paperback and Kindle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.amazon.com/dp/B0H46B8KFZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-mono font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all hover:opacity-90 no-underline"
              style={{ background: "#C41230", color: "#FFFFFF", boxShadow: "6px 6px 0px 0px #000" }}
            >
              Our Existential Advantage <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.amazon.com/dp/B0H42FYT4Z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-mono font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all hover:opacity-90 no-underline"
              style={{ border: "2px solid #C41230", color: "#C41230" }}
            >
              AI for Beginners <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
