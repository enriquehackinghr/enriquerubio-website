import { Users, Globe, BookOpen, Award, Briefcase, Lightbulb } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community Builder",
      description: "Founder of Hacking HR, connecting HR and people leaders worldwide."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Speaker",
      description: "100+ keynotes delivered across 6 continents to diverse audiences."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Thought Leader",
      description: "Creator of the People and Culture Strategy Institute."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI & Future of Work Expert",
      description: "Focused on translating AI strategy into practical organizational readiness."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#09090B] text-white border-t-2 border-white/20">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div>
            <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6">
              :: About_Enrique
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 uppercase tracking-tight">
              The Human Behind <br/><span className="text-primary">the Mission</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>
                &gt; I'm Enrique Rubio, and I believe that the future of work isn't just about technology—it's about people. For over a decade, I've been at the intersection of HR, technology, and organizational transformation.
              </p>
              <p>
                &gt; As the founder of Hacking HR, I've built a global community of leaders who are committed to making work more human, even as AI reshapes every industry. My work isn't about predicting the future; it's about helping organizations and their people prepare for it.
              </p>
              <p>
                &gt; I don't just talk about change—I help leaders understand it, embrace it, and lead through it.
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 border border-white/10 bg-white/5 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-black border border-primary flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}