import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

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
    color: "bg-[#E0F2F1]" // Light Teal
  },
  {
    title: "AI and the Future of Work",
    description: "Going beyond the hype to understand practical shifts in jobs, skills, and workflows.",
    tag: "Future Trends",
    color: "bg-[#FFF9C4]" // Light Yellow
  },
  {
    title: "HR’s Role in Transformation",
    description: "Why HR is the most critical function for AI adoption and how to lead the charge.",
    tag: "Leadership",
    color: "bg-[#FFCCBC]" // Light Coral
  },
  {
    title: "Leadership in an AI-Augmented Org",
    description: "How decision-making, management, and culture must evolve when intelligence is a commodity.",
    tag: "Management",
    color: "bg-[#E1BEE7]" // Light Purple
  },
  {
    title: "Building Human Capability",
    description: "Strategies for upskilling, reskilling, and fostering a growth mindset in a tech-first world.",
    tag: "Culture",
    color: "bg-[#C8E6C9]" // Light Green
  },
  {
    title: "Responsible AI at Work",
    description: "Navigating the ethics, governance, and trust issues inherent in AI deployment.",
    tag: "Ethics",
    color: "bg-[#B3E5FC]" // Light Blue
  }
];

export function TopicGrid() {
  return (
    <section id="topics" className="section-spacing bg-white border-y-2 border-black">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-black text-white px-4 py-1 font-bold uppercase tracking-widest text-sm mb-6 rotate-[-2deg]">
            Signature Talks
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-foreground mb-6">
            Topics that ignite action.
          </h2>
          <p className="text-xl font-medium text-gray-600">
            Practical, provocative, and tailored to your specific industry challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, idx) => (
            <div key={idx} className="group relative h-full">
              {/* Shadow Element */}
              <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              
              {/* Main Card */}
              <div className={`relative h-full ${topic.color} p-8 rounded-xl border-2 border-black transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 flex flex-col`}>
                <div className="mb-6 flex justify-between items-start">
                  <span className="inline-block px-3 py-1 bg-white border-2 border-black rounded-lg text-black text-xs font-bold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {topic.tag}
                  </span>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <span className="font-bold">{idx + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-black mb-4 leading-tight">
                  {topic.title}
                </h3>
                <p className="text-foreground/80 mb-8 flex-grow leading-relaxed font-bold text-sm">
                  {topic.description}
                </p>
                
                <div className="pt-6 border-t-2 border-black/10 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <Link href="/speaking">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-black rounded-full font-black text-lg text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              View full descriptions & outcomes <ArrowUpRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}