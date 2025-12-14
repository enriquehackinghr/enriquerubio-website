import { Mic, Users, Coffee, Projector } from "lucide-react";

export function EngagementFormats() {
  const formats = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Keynotes",
      desc: "High-impact presentations for large audiences (Virtual or In-Person).",
      color: "bg-[#FFF9C4]", // Yellow
      shadowColor: "shadow-[#FBC02D]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Executive Briefings",
      desc: "Strategic deep-dives for leadership teams and boards.",
      color: "bg-[#B3E5FC]", // Light Blue
      shadowColor: "shadow-[#0288D1]"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Fireside Chats",
      desc: "Moderated conversations that explore specific organizational challenges.",
      color: "bg-[#FFCCBC]", // Light Coral
      shadowColor: "shadow-[#D84315]"
    },
    {
      icon: <Projector className="w-8 h-8" />,
      title: "Workshops",
      desc: "Interactive sessions to build capability and roadmap solutions.",
      color: "bg-[#E1BEE7]", // Light Purple
      shadowColor: "shadow-[#7B1FA2]"
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFCF5] border-b-2 border-black">
      <div className="container-width text-center">
        <h2 className="text-5xl md:text-6xl font-heading font-black mb-20 text-foreground">
          Engagement Formats
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format, idx) => (
            <div key={idx} className="group relative">
               {/* Card Body */}
               <div className={`relative z-10 h-full flex flex-col items-center text-center p-8 rounded-2xl border-2 border-black ${format.color} transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]`}>
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_#1A1A1A] group-hover:scale-110 transition-transform duration-300">
                    <div className="text-black">
                      {format.icon}
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-2xl mb-4 leading-tight">{format.title}</h3>
                  <p className="text-sm font-bold text-foreground/80 leading-relaxed">{format.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}