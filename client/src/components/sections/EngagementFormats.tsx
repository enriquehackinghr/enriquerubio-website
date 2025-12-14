import { Mic, Users, Coffee, Projector } from "lucide-react";

export function EngagementFormats() {
  const formats = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Keynotes",
      desc: "High-impact presentations for large audiences (Virtual or In-Person).",
      color: "bg-white", 
      accent: "border-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Executive Briefings",
      desc: "Strategic deep-dives for leadership teams and boards.",
      color: "bg-white",
      accent: "border-[#2979FF]"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Fireside Chats",
      desc: "Moderated conversations that explore specific organizational challenges.",
      color: "bg-white",
      accent: "border-[#FF1744]"
    },
    {
      icon: <Projector className="w-8 h-8" />,
      title: "Workshops",
      desc: "Interactive sessions to build capability and roadmap solutions.",
      color: "bg-white",
      accent: "border-[#FFD600]"
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F3F4F6] border-b-2 border-black">
      <div className="container-width text-center">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-20 text-foreground uppercase tracking-tight">
          Engagement_Formats
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format, idx) => (
            <div key={idx} className="group relative">
               {/* Card Body */}
               <div className={`relative z-10 h-full flex flex-col items-center text-center p-8 border-2 border-black bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#00E676] shadow-[4px_4px_0px_0px_#000]`}>
                  
                  {/* Icon Square */}
                  <div className={`w-20 h-20 bg-black ${format.accent} border-2 flex items-center justify-center mb-6 group-hover:rotate-45 transition-transform duration-300`}>
                    <div className="text-white group-hover:-rotate-45 transition-transform duration-300">
                      {format.icon}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-4 leading-tight uppercase">{format.title}</h3>
                  <p className="text-sm font-mono text-foreground/70 leading-relaxed">{format.desc}</p>
                  
                  {/* Tech decoration corners */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-black"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-black"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black"></div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}