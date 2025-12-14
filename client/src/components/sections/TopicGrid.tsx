import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface Topic {
  title: string;
  description: string;
  outcome: string;
}

const topics: Topic[] = [
  {
    title: "Staying Relevant in the Age of AI",
    description: "A strategic overview of how AI reshapes value creation and what organizations must do to keep up.",
    outcome: "Outcome: Alignment, clarity, action."
  },
  {
    title: "AI and the Future of Work",
    description: "Going beyond the hype to understand practical shifts in jobs, skills, and workflows.",
    outcome: "Outcome: Realistic roadmap for work redesign."
  },
  {
    title: "HR’s Role in AI-Driven Transformation",
    description: "Why HR is the most critical function for AI adoption and how to lead the charge.",
    outcome: "Outcome: Empowered HR leadership strategy."
  },
  {
    title: "Leadership in an AI-Augmented Org",
    description: "How decision-making, management, and culture must evolve when intelligence is a commodity.",
    outcome: "Outcome: Readiness across executive teams."
  },
  {
    title: "Building Human Capability",
    description: "Strategies for upskilling, reskilling, and fostering a growth mindset in a tech-first world.",
    outcome: "Outcome: Workforce resilience and agility."
  },
  {
    title: "Responsible AI at Work",
    description: "Navigating the ethics, governance, and trust issues inherent in AI deployment.",
    outcome: "Outcome: Trust and sustainable adoption."
  }
];

export function TopicGrid() {
  return (
    <section id="topics" className="section-spacing bg-white">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Signature Keynotes</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Topics that drive change.
            </h2>
          </div>
          <Link href="/speaking" className="hidden md:flex items-center gap-2 font-semibold text-primary hover:opacity-80 transition-opacity group">
            View full descriptions <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                {topic.description}
              </p>
              <div className="pt-6 border-t border-gray-50">
                <span className="text-xs font-bold text-foreground/70 uppercase tracking-wide">
                  {topic.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link href="/speaking" className="inline-flex items-center gap-2 font-semibold text-primary">
            View full descriptions <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}