export function Credibility() {
  const points = [
    "Founder of Hacking HR, a global community and learning platform.",
    "Creator of global events exploring AI, work, and leadership.",
    "Focused on practical, strategic translation of AI into readiness.",
    "Experienced working with executive audiences globally."
  ];

  return (
    <section className="py-24 md:py-36 bg-[#09090B] text-white border-t-2 border-white/20">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-10 text-primary uppercase tracking-wider border-b-2 border-primary inline-block pb-2">Trusted Perspective</h2>
            <div className="space-y-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center font-mono font-bold text-xl text-primary bg-white/5">
                    0{idx + 1}
                  </span>
                  <p className="text-gray-300 font-mono text-lg leading-relaxed border-l border-white/10 pl-4">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-heading font-bold mb-10 text-primary uppercase tracking-wider border-b-2 border-primary inline-block pb-2">Target_Users</h2>
            <div className="flex flex-wrap gap-4">
              {["CEOs & Execs", "CHROs", "HR Leaders", "Event Planners", "Boards", "Transformation Leads"].map((audience, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 border border-white/20 bg-white/5 text-lg font-mono font-bold hover:bg-primary hover:text-black hover:border-primary transition-all cursor-default uppercase"
                >
                  {audience}
                </span>
              ))}
            </div>
            
            <div className="mt-16 p-8 border border-white/10 bg-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
               <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
               <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>
               
               <p className="text-xs text-gray-500 font-mono uppercase tracking-widest font-bold mb-6 text-center">:: Featured_In // Trusted_By</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                 <div className="h-8 bg-white/20 w-full"></div>
                 <div className="h-8 bg-white/20 w-full"></div>
                 <div className="h-8 bg-white/20 w-full"></div>
                 <div className="h-8 bg-white/20 w-full"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}