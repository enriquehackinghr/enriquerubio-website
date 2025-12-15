import { Users, Globe, BookOpen, Lightbulb, Mountain, TreePine } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community Builder",
      description: "Founder of Hacking HR, a global leadership and learning community focused on AI, work, and organizational transformation."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Speaker",
      description: "Keynotes and executive sessions delivered globally to senior leaders and enterprise audiences."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Thought Leader",
      description: "Founder of the People and Culture Strategy Institute, focused on executive education and applied research."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI & Future of Work Expert",
      description: "Focused on translating AI strategy into execution, readiness, and governance at scale."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#09090B] text-white border-t-2 border-white/20">
      <div className="container-width">
        {/* Main About Content */}
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
                &gt; I'm Enrique Rubio. For over two decades, I've worked at the intersection of technology, leadership, and organizational transformation, helping leaders navigate how work actually changes in moments of disruption.
              </p>
              <p>
                &gt; As the founder of Hacking HR, I built a global leadership and learning ecosystem focused on the future of work, AI, and organizational change. My work is not about prediction—it's about helping organizations build the capability to respond.
              </p>
              <p>
                &gt; I don't just talk about change. I work with leaders to understand it, structure for it, and lead through it with clarity and intent.
              </p>
              <p className="text-gray-400 text-sm">
                My background spans engineering, public administration, and global leadership—bringing a systems lens to how organizations adapt in the age of AI.
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

        {/* Ultrarunner & Nature Lover Section */}
        <div className="mt-24 pt-24 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6">
                :: Beyond_Work
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tight">
                Ultrarunner & <br/><span className="text-primary">Nature Lover</span>
              </h3>
              <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                <p>
                  &gt; When I'm not speaking or building communities, you'll find me on mountain trails pushing my limits as an ultrarunner. There's something about running 3 to 4 thousand miles a year through wilderness that teaches you about resilience, patience, and the power of one step at a time.
                </p>
                <p>
                  &gt; Nature isn't just where I train—it's where I think. The clarity I find in forests and mountains directly informs my perspective on work and leadership. The best ideas often come when you're miles away from any screen.
                </p>
              </div>
              
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-3 p-4 border border-white/10 bg-white/5">
                  <Mountain className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-heading font-bold uppercase text-sm">Ultrarunner</p>
                    <p className="text-gray-500 font-mono text-xs">50+ mile races</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 border border-white/10 bg-white/5">
                  <TreePine className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-heading font-bold uppercase text-sm">Nature Lover</p>
                    <p className="text-gray-500 font-mono text-xs">Trails & Mountains</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder images - replace with real photos */}
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="w-16 h-16 text-white/20" />
                </div>
                <p className="absolute bottom-2 left-2 text-xs font-mono text-white/50">// trail_photo_1</p>
              </div>
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TreePine className="w-16 h-16 text-white/20" />
                </div>
                <p className="absolute bottom-2 left-2 text-xs font-mono text-white/50">// nature_photo_1</p>
              </div>
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group col-span-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="w-24 h-24 text-white/20" />
                </div>
                <p className="absolute bottom-2 left-2 text-xs font-mono text-white/50">// ultrarunning_hero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}