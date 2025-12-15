import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Mic } from "lucide-react";

export function SpeakingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const keynotes = [
    {
      title: "Staying Relevant in the Age of AI",
      shortTitle: "Staying Relevant",
      description: "A strategic view of how AI reshapes value creation, operating models, and organizational relevance.",
      outcomes: [
        "Align leadership on AI direction and priorities",
        "Understand the urgency of organizational adaptation",
        "Clarify the path from experimentation to scale"
      ],
      audience: "Executive teams, boards, and transformation leaders",
      format: "Duration to be discussed"
    },
    {
      title: "AI and the Future of Work: What's Changing",
      shortTitle: "Future of Work",
      description: "Moving beyond hype to understand how AI reshapes work, workflows, and decision-making.",
      outcomes: [
        "Practical roadmap for work and workflow redesign",
        "Capability mapping for an AI-augmented organization",
        "Reducing uncertainty through clarity"
      ],
      audience: "Leaders, managers, and transformation teams",
      format: "Duration to be discussed"
    },
    {
      title: "Leading AI-Driven Workplace Transformation",
      shortTitle: "Workplace Transformation",
      description: "How leadership teams align people, structure, governance, and operating models to enable AI at scale.",
      outcomes: [
        "Clear ownership and leadership alignment",
        "Governance frameworks for responsible AI",
        "Cultural and operational change for AI adoption"
      ],
      audience: "Executive teams, HR, and transformation leaders",
      format: "Duration to be discussed"
    },
    {
      title: "From AI Strategy to Execution",
      shortTitle: "Strategy to Execution",
      description: "How organizations translate AI ambition into execution across workflows, functions, and business units.",
      outcomes: [
        "Connect AI strategy to measurable business outcomes",
        "Identify where AI creates value—and where it creates risk"
      ],
      audience: "Executive teams, operations, strategy, and transformation leaders",
      format: "Duration to be discussed"
    },
    {
      title: "Leadership in an AI-Augmented Organization",
      shortTitle: "AI Leadership",
      description: "How leadership, decision-making, and accountability change when intelligence scales across the enterprise.",
      outcomes: [
        "Redefine leadership roles in AI-augmented environments",
        "Improve decision quality, speed, and accountability"
      ],
      audience: "Senior leaders, managers, and enterprise leadership teams",
      format: "Duration to be discussed"
    },
    {
      title: "Governing AI at Enterprise Scale",
      shortTitle: "AI Governance",
      description: "Designing governance, oversight, and accountability for AI across complex, global organizations.",
      outcomes: [
        "Establish clear ownership, decision rights, and guardrails",
        "Balance innovation, risk, and trust at scale"
      ],
      audience: "Boards, executive leadership, legal, risk, and transformation teams",
      format: "Duration to be discussed"
    }
  ];

  const activeKeynote = keynotes[activeIndex];

  return (
    <section id="speaking" className="py-24 md:py-36 bg-white border-y-2 border-black">
      <div className="container-width">
        <div className="max-w-4xl mb-12">
          <div className="inline-block bg-black text-primary px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6 border border-primary">
            :: Speaking_Engagements
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 uppercase tracking-tight">
            Keynotes & <span className="text-primary bg-black px-2">Talks</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-mono">
            // Provocative, practical, and strategic talks for leaders navigating AI-driven change.
          </p>
        </div>

        {/* Tab Menu */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {keynotes.map((note, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                data-testid={`tab-keynote-${idx}`}
                className={`px-4 py-3 font-mono font-bold text-sm uppercase tracking-wide border-2 border-black transition-all ${
                  activeIndex === idx
                    ? "bg-primary text-black shadow-[3px_3px_0px_0px_#000]"
                    : "bg-white text-foreground/70 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2 text-xs opacity-70">0{idx + 1}</span>
                {note.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Active Keynote Card */}
        <div className="bg-[#F3F4F6] p-8 border-2 border-black shadow-[4px_4px_0px_0px_#000] grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-black text-primary border border-primary flex items-center justify-center font-mono font-bold">
                0{activeIndex + 1}
              </div>
              <h3 className="text-2xl font-heading font-bold uppercase">{activeKeynote.title}</h3>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed text-lg font-mono border-l-4 border-primary pl-4">
              {activeKeynote.description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wide block mb-3">// Outcomes</span>
                <ul className="space-y-2">
                  {activeKeynote.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-bold text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={4} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wide block mb-3">// Audience & Format</span>
                <p className="text-sm font-bold text-foreground/80 mb-2">{activeKeynote.audience}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-primary text-xs font-mono font-bold border border-primary">
                  <Mic className="w-3 h-3" /> {activeKeynote.format}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center border-t-2 lg:border-t-0 lg:border-l-2 border-black pt-6 lg:pt-0 lg:pl-8">
            <div className="bg-white border-2 border-black p-6 text-center shadow-[4px_4px_0px_0px_#000]">
              <p className="text-sm font-mono font-bold mb-4 uppercase">Interested in this topic?</p>
              <a href="#booking">
                <Button className="w-full bg-primary text-black border-2 border-black rounded-none font-bold uppercase hover:bg-black hover:text-primary transition-colors">
                  Inquire Availability
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
