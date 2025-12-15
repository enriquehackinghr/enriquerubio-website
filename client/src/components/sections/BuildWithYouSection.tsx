import { Wrench, Lightbulb, Users, Rocket } from "lucide-react";

export function BuildWithYouSection() {
  const buildAreas = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "AI Tools & Frameworks",
      description: "Practical frameworks leaders can use to integrate AI into real operations."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Custom Strategies",
      description: "Tailored roadmaps that align AI adoption with strategy, structure, and goals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership & Team Workshops",
      description: "Hands-on sessions where leaders and teams design solutions together."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Implementation Support",
      description: "From pilot to scale: support that turns strategy into operating reality."
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black text-white border-y-2 border-white/20">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Main Message */}
          <div>
            <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6">
              :: Collaboration_Mode
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 uppercase tracking-tight leading-[0.95]">
              I don't just speak. <br/>
              <span className="text-primary">I build with you.</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>
                &gt; Inspiration is the starting point. Execution is the work.
              </p>
              <p>
                &gt; I partner with organizations to build real strategies, frameworks, and capabilities that hold up after the session ends.
              </p>
              <p>
                &gt; We don't just talk about the future. <span className="text-primary font-bold">We build it together.</span>
              </p>
            </div>
          </div>

          {/* Right - Build Areas Grid */}
          <div className="grid grid-cols-2 gap-4">
            {buildAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="p-6 border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-black border border-primary flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                  {area.icon}
                </div>
                <h3 className="font-heading font-bold text-lg uppercase mb-2">{area.title}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}