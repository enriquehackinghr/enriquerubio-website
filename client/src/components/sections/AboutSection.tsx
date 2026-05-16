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
                &gt; As the founder of Hacking HR, I built a global leadership and learning ecosystem focused on the future of work, AI, and organizational change. My work is not about prediction: it's about helping organizations build the capability to respond.
              </p>
              <p>
                &gt; I don't just talk about change. I work with leaders to understand it, structure for it, and lead through it with clarity and intent.
              </p>
              <p className="text-gray-400 text-sm">
                My background spans engineering, public administration, and global leadership, bringing a systems lens to how organizations adapt in the age of AI.
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
                  &gt; Nature isn't just where I train, it's where I think. The clarity I find in forests and mountains directly informs my perspective on work and leadership. The best ideas often come when you're miles away from any screen.
                </p>
              </div>
              
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-3 p-4 border border-white/10 bg-white/5">
                  <Mountain className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-heading font-bold uppercase text-sm">Ultrarunner</p>
                    <p className="text-gray-500 font-mono text-xs">50+ and 100+ mile races</p>
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
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group">
                <img 
                  src="/ultrarunner-1.jpg" 
                  alt="Enrique running in canyon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group">
                <img 
                  src="/ultrarunner-2.jpg" 
                  alt="Enrique at mountain lake"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group">
                <img 
                  src="/ultrarunner-3.jpg" 
                  alt="Enrique at waterfall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group">
                <img 
                  src="/ultrarunner-4.jpg" 
                  alt="Enrique at Monument Valley"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-gray-800 border border-white/10 overflow-hidden relative group col-span-2">
                <img 
                  src="/ultrarunner-5.jpg" 
                  alt="Enrique at rock formations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Book Section */}
        <div className="mt-24 pt-24 border-t border-white/10">

          {/* Top: Cover + Title side by side */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-14">
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="w-48 md:w-56 aspect-[3/4] border-2 border-primary shadow-[8px_8px_0px_0px_#00E676] overflow-hidden">
                  <img
                    src="/book-cover.png"
                    alt="Our Existential Advantage - Human Leadership in the Age of Intelligent Machines"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-primary text-black px-3 py-1 font-mono font-bold text-xs uppercase">
                  Coming June 2026
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-5">
                :: Upcoming_Book
              </div>
              <h3 className="text-4xl md:text-6xl font-heading font-bold mb-3 uppercase tracking-tight leading-none">
                Our Existential <br /><span className="text-primary">Advantage</span>
              </h3>
              <p className="text-lg text-gray-300 font-mono mb-1">
                Human Leadership in the Age of Intelligent Machines
              </p>
              <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">
                Enrique Rubio | Founder, Hacking HR
              </p>
            </div>
          </div>

          {/* Body text in two columns */}
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 font-mono leading-relaxed text-lg mb-10">
            <p>
              This book is not about artificial intelligence. It is about you. It is about what happens to human judgment, strategic imagination, and moral courage when the most powerful cognitive tool in history becomes available to everyone, everywhere, at negligible cost, and why your humanity remains the only advantage that cannot be replicated, automated, or scaled away.
            </p>
            <p>
              We are at an inflection point. AI is accelerating faster than most organizations can absorb, faster than most leaders can process, faster than most institutions can govern, and faster than our brains can keep up with. The temptation is to keep up by leaning harder into the machines, letting them synthesize, decide, and lead. But that path leads somewhere dangerous: organizations that are efficient and hollow, and leaders who trade their judgment for convenience.
            </p>
            <p>
              Our Existential Advantage is a different kind of leadership book for this moment. It moves through the full landscape a strategic leader must navigate, the history of technological disruption and what it actually teaches us, the deep psychology of why humans resist and adopt change, the organizational ecosystems that AI is rewiring right now, the governance and ethics questions that can no longer be deferred, and the inner life of a leader who is trying to stay human while everything accelerates around them.
            </p>
            <p>
              This is not a book about AI tools. It is a book about you as a leader and your thinking, your values, your responsibility to the people and institutions in your care, and how they all must be upgraded even faster than AI is. It is built on a single conviction: that in the age of intelligent machines, the most strategic thing you can do is become more fully, more deliberately, more courageously human.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5">
              <span className="text-primary font-mono text-sm">//</span>
              <span className="font-mono text-sm">Strategic Frameworks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5">
              <span className="text-primary font-mono text-sm">//</span>
              <span className="font-mono text-sm">Real-World Scenarios</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5">
              <span className="text-primary font-mono text-sm">//</span>
              <span className="font-mono text-sm">Practical Exercises</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}