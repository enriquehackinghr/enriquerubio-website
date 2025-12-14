import { Button } from "@/components/ui/button";
import { Check, Mic } from "lucide-react";

export function SpeakingSection() {
  const keynotes = [
    {
      title: "Staying Relevant in the Age of AI",
      description: "A strategic overview of how AI reshapes value creation and what organizations must do to keep up. This talk focuses on the macro shifts in business models and the micro shifts in daily work.",
      outcomes: [
        "Align leadership on AI strategy",
        "Understand the urgency of adaptation",
        "Clarify the path from pilot to scale"
      ],
      audience: "Executive Leadership, Boards, Strategy Teams",
      format: "45-60 min Keynote"
    },
    {
      title: "AI and the Future of Work: What's Changing",
      description: "Going beyond the hype to understand practical shifts in jobs, skills, and workflows. We deconstruct roles and reconstruct them for an AI-augmented reality.",
      outcomes: [
        "Realistic roadmap for work redesign",
        "Skill mapping for the future",
        "Mitigating fear through clarity"
      ],
      audience: "All Employees, HR, Managers",
      format: "45-60 min Keynote + Q&A"
    },
    {
      title: "HR's Role in AI-Driven Workplace Transformation",
      description: "Why HR is the most critical function for AI adoption and how to lead the charge. Moving HR from a support function to the architect of the new operating model.",
      outcomes: [
        "Empowered HR leadership strategy",
        "Governance frameworks for AI",
        "Culture change for digital adoption"
      ],
      audience: "HR Leaders, People Operations",
      format: "Keynote or Half-day Workshop"
    }
  ];

  return (
    <section id="speaking" className="py-24 md:py-36 bg-white border-y-2 border-black">
      <div className="container-width">
        <div className="max-w-4xl mb-16">
          <div className="inline-block bg-black text-primary px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6 border border-primary">
            :: Speaking_Engagements
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 uppercase tracking-tight">
            Keynotes & <span className="text-primary bg-black px-2">Talks</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-mono">
            // Provocative, practical, and strategic talks that help audiences navigate the intersection of human capability and artificial intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {keynotes.map((note, idx) => (
            <div key={idx} className="bg-[#F3F4F6] p-8 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#00E676] transition-all grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-black text-primary border border-primary flex items-center justify-center font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-heading font-bold uppercase">{note.title}</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed text-lg font-mono border-l-4 border-primary pl-4">
                  {note.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-wide block mb-3">// Outcomes</span>
                    <ul className="space-y-2">
                      {note.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-bold text-foreground/80">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={4} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-wide block mb-3">// Audience & Format</span>
                    <p className="text-sm font-bold text-foreground/80 mb-2">{note.audience}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-primary text-xs font-mono font-bold border border-primary">
                      <Mic className="w-3 h-3" /> {note.format}
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
          ))}
        </div>
      </div>
    </section>
  );
}