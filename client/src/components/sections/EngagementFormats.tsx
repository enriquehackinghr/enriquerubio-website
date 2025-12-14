import { Mic, Users, Coffee, Projector } from "lucide-react";

export function EngagementFormats() {
  const formats = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Keynotes",
      desc: "High-impact presentations for large audiences (Virtual or In-Person)."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Executive Briefings",
      desc: "Strategic deep-dives for leadership teams and boards."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Fireside Chats",
      desc: "Moderated conversations that explore specific organizational challenges."
    },
    {
      icon: <Projector className="w-6 h-6" />,
      title: "Workshops",
      desc: "Interactive sessions to build capability and roadmap solutions."
    }
  ];

  return (
    <section className="section-spacing bg-white border-b border-gray-100">
      <div className="container-width text-center">
        <h2 className="text-3xl font-heading font-bold mb-16">Engagement Formats</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                {format.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{format.title}</h3>
              <p className="text-sm text-muted-foreground">{format.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}