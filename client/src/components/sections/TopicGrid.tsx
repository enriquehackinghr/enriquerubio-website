import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface Topic {
  title: string;
  description: string;
  tag: string;
}

const topics: Topic[] = [
  {
    title: "Staying Relevant in the Age of AI",
    description: "A strategic overview of how AI reshapes value creation and what organizations must do to keep up.",
    tag: "Strategy"
  },
  {
    title: "AI and the Future of Work",
    description: "Going beyond the hype to understand practical shifts in jobs, skills, and workflows.",
    tag: "Future Trends"
  },
  {
    title: "HR’s Role in Transformation",
    description: "Why HR is the most critical function for AI adoption and how to lead the charge.",
    tag: "Leadership"
  },
  {
    title: "Leadership in an AI-Augmented Org",
    description: "How decision-making, management, and culture must evolve when intelligence is a commodity.",
    tag: "Management"
  },
  {
    title: "Building Human Capability",
    description: "Strategies for upskilling, reskilling, and fostering a growth mindset in a tech-first world.",
    tag: "Culture"
  },
  {
    title: "Responsible AI at Work",
    description: "Navigating the ethics, governance, and trust issues inherent in AI deployment.",
    tag: "Ethics"
  }
];

export function TopicGrid() {
  return (
    <section id="topics" className="section-spacing bg-white">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Signature Talks</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-6">
            Topics that ignite <span className="text-primary underline decoration-4 underline-offset-4 decoration-primary/30">action</span>.
          </h2>
          <p className="text-xl text-muted-foreground">
            Practical, provocative, and tailored to your specific industry challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, idx) => (
            <div key={idx} className="group relative bg-[#FAFAF9] rounded-3xl p-1 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-primary rounded-3xl translate-y-2 translate-x-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform -z-10"></div>
              
              <div className="bg-white h-full p-8 rounded-[1.4rem] border-2 border-transparent group-hover:border-primary/10 flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                    {topic.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed font-medium">
                  {topic.description}
                </p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-foreground text-sm">Learn more</span>
                  <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Link href="/speaking">
            <a className="inline-flex items-center gap-2 font-bold text-lg text-foreground border-b-2 border-primary hover:text-primary transition-colors pb-1">
              View full descriptions & outcomes <ArrowUpRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}