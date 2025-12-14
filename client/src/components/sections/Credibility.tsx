export function Credibility() {
  const points = [
    "Founder of Hacking HR, a global community and learning platform.",
    "Creator of global events exploring AI, work, and leadership.",
    "Focused on practical, strategic translation of AI into readiness.",
    "Experienced working with executive audiences globally."
  ];

  return (
    <section className="py-24 md:py-36 bg-[#1A1A1A] text-white">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-heading font-black mb-10 text-accent">Trusted Perspective</h2>
            <div className="space-y-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center font-heading font-bold text-xl text-primary bg-white/5">
                    {idx + 1}
                  </span>
                  <p className="text-white/90 font-medium text-xl leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-heading font-black mb-10 text-accent">Who this is for</h2>
            <div className="flex flex-wrap gap-4">
              {["CEOs & Execs", "CHROs", "HR Leaders", "Event Planners", "Boards", "Transformation Leads"].map((audience, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-lg font-bold hover:bg-white hover:text-black hover:border-white transition-all cursor-default"
                >
                  {audience}
                </span>
              ))}
            </div>
            
            <div className="mt-16 p-8 border-2 border-white/10 rounded-2xl bg-white/5">
               <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-6 text-center">Featured In / Trusted By</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                 <div className="h-10 bg-white/20 rounded w-full"></div>
                 <div className="h-10 bg-white/20 rounded w-full"></div>
                 <div className="h-10 bg-white/20 rounded w-full"></div>
                 <div className="h-10 bg-white/20 rounded w-full"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}