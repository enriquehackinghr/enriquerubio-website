import { Brain, Zap } from "lucide-react";

const thinkItems = [
  {
    label: "Leadership in the Age of AI",
    text: "Helping leaders understand what changes — and what must not — when AI becomes available to every organization on earth.",
  },
  {
    label: "Strategic Frameworks",
    text: "How to move from AI as a trend to AI as a core organizational capability: strategy, governance, ethics, and the human judgment that holds it together.",
  },
  {
    label: "Organizational Readiness",
    text: "Building the culture, workforce fluency, and decision architecture that make AI transformation real — not just announced.",
  },
  {
    label: "The Human Advantage",
    text: "Why human judgment, ethical courage, and strategic imagination become more valuable — not less — as AI becomes more capable.",
  },
];

const doItems = [
  {
    label: "Intensive Bootcamps",
    text: "Hands-on, fast-paced sessions where teams build real AI-powered systems, workflows, and operating capabilities — not slides.",
  },
  {
    label: "Leadership Workshops",
    text: "Structured learning experiences for executives and people leaders navigating AI strategy, execution, and organizational transformation.",
  },
  {
    label: "Certificate Programs",
    text: "Multi-week cohort experiences that take leaders from AI curiosity to operational fluency — with frameworks, live practice, and accountability.",
  },
  {
    label: "Custom Team Experiences",
    text: "Programs designed around your organization's specific context, AI maturity level, and transformation goals.",
  },
];

export function ThinkDoSection() {
  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] border-b-2 border-white/10">
      <div className="container-width">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border border-white/20 px-2 py-1 font-mono text-xs font-bold uppercase mb-4 text-white/50">
            :: How_Enrique_Works_With_You
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight leading-none">
            I help organizations<br />
            <span className="text-primary">Think</span> and <span className="text-primary">Do</span><br />
            with AI.
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-0 border-2 border-white/10">

          {/* THINK */}
          <div className="border-r border-white/10">
            <div className="flex items-center gap-3 px-8 py-5 border-b-2 border-white/10 bg-white/5">
              <Brain className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-heading font-bold text-xl uppercase tracking-tight text-white">Think with AI</span>
              <span className="ml-auto font-mono text-xs text-white/30 uppercase tracking-widest">Transformation</span>
            </div>
            <div className="px-8 py-8">
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 border-l-2 border-primary pl-4">
                The thinking side is about what kind of leaders and organizations we become as AI reshapes work, strategy, and the nature of human contribution.
              </p>
              <div className="space-y-6">
                {thinkItems.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-black font-mono font-bold text-xs flex items-center justify-center mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white uppercase text-sm tracking-wide mb-1">{item.label}</p>
                      <p className="text-gray-400 font-mono text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DO */}
          <div>
            <div className="flex items-center gap-3 px-8 py-5 border-b-2 border-white/10 bg-primary/5">
              <Zap className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-heading font-bold text-xl uppercase tracking-tight text-white">Do with AI</span>
              <span className="ml-auto font-mono text-xs text-white/30 uppercase tracking-widest">Practice</span>
            </div>
            <div className="px-8 py-8">
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 border-l-2 border-primary pl-4">
                The doing side is about building real capability — hands-on experiences where leaders and teams move from knowing to actually working differently with AI.
              </p>
              <div className="space-y-6">
                {doItems.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-black font-mono font-bold text-xs flex items-center justify-center mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white uppercase text-sm tracking-wide mb-1">{item.label}</p>
                      <p className="text-gray-400 font-mono text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-2 border-white/10 px-8 py-5 bg-white/5">
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-primary font-bold">//</span> Every engagement is designed around where your organization actually is — not where it should be.
          </p>
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 font-mono font-bold text-xs uppercase tracking-widest border-2 border-primary text-primary px-5 py-2 hover:bg-primary hover:text-black transition-all"
          >
            Let's Talk →
          </a>
        </div>

      </div>
    </section>
  );
}
