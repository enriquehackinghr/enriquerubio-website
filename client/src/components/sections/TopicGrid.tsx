import { ArrowUpRight } from "lucide-react";

interface Topic {
  title: string;
  description: string;
  tag: string;
  color: string;
}

const topics: Topic[] = [
  {
    title: "Staying Relevant in the Age of AI",
    description: "A strategic overview of how AI reshapes value creation and what organizations must do to keep up.",
    tag: "Strategy",
    color: "bg-white" 
  },
  {
    title: "AI and the Future of Work",
    description: "Going beyond the hype to understand practical shifts in jobs, skills, and workflows.",
    tag: "Future_Trends",
    color: "bg-white" 
  },
  {
    title: "HR’s Role in Transformation",
    description: "Why HR is the most critical function for AI adoption and how to lead the charge.",
    tag: "Leadership",
    color: "bg-white" 
  },
  {
    title: "Leadership in an AI-Augmented Org",
    description: "How decision-making, management, and culture must evolve when intelligence is a commodity.",
    tag: "Management",
    color: "bg-white" 
  },
  {
    title: "Building Human Capability",
    description: "Strategies for upskilling, reskilling, and fostering a growth mindset in a tech-first world.",
    tag: "Culture",
    color: "bg-white" 
  },
  {
    title: "Responsible AI at Work",
    description: "Navigating the ethics, governance, and trust issues inherent in AI deployment.",
    tag: "Ethics",
    color: "bg-white" 
  }
];

export function TopicGrid() {
  return (
    <section id="topics" className="py-24 md:py-36 bg-[#F3F4F6] border-y-2 border-black tech-grid-bg">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-black text-primary px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6 border border-primary">
            :: System_Modules
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 uppercase tracking-tight">
            Topics that ignite <span className="bg-primary text-black px-2">action</span>.
          </h2>
          <p className="text-xl font-medium text-gray-600 font-mono">
            // Practical, provocative, and tailored to your specific industry challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, idx) => (
            <div key={idx} className="group relative h-full">
              {/* Shadow Element */}
              <div className="absolute inset-0 bg-primary/20 rounded-none translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 border-2 border-primary"></div>
              
              {/* Main Card */}
              <div className={`relative h-full ${topic.color} p-8 border-2 border-black transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 flex flex-col hover:shadow-[4px_4px_0px_0px_#000]`}>
                <div className="mb-6 flex justify-between items-start">
                  <span className="inline-block px-2 py-1 bg-gray-100 border border-black text-black text-xs font-mono font-bold uppercase tracking-wide">
                    [{topic.tag}]
                  </span>
                  <div className="w-8 h-8 bg-black flex items-center justify-center text-primary font-mono border border-primary">
                    <span className="font-bold">0{idx + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 leading-none uppercase">
                  {topic.title}
                </h3>
                <p className="text-foreground/70 mb-8 flex-grow leading-relaxed font-mono text-sm border-l-2 border-gray-200 pl-4">
                  {topic.description}
                </p>
                
                <div className="pt-6 border-t-2 border-black/10 flex justify-end">
                  <div className="w-10 h-10 bg-black text-primary border border-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}