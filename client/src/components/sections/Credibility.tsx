export function Credibility() {
  const points = [
    "Founder of Hacking HR, a global community and learning platform.",
    "Creator of global events exploring AI, work, and leadership.",
    "Focused on practical, strategic translation of AI into readiness.",
    "Experienced working with executive audiences globally."
  ];

  const targetAudiences = [
    "CEOs & Executive Teams",
    "CHROs & HR Leadership",
    "Transformation Leaders",
    "Conference Organizers",
    "Boards of Directors"
  ];

  return (
    <section className="section-spacing bg-gray-900 text-white">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">Trusted Perspective</h2>
            <div className="space-y-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-primary font-mono">0{idx + 1}</span>
                  <p className="text-gray-300 font-medium text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">Who this is for</h2>
            <div className="flex flex-wrap gap-3">
              {targetAudiences.map((audience, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                >
                  {audience}
                </span>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10">
               <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-6">Featured In / Trusted By</p>
               <div className="grid grid-cols-3 md:grid-cols-4 gap-8 opacity-40 grayscale">
                 {/* Logo Placeholders using CSS to look like generic logos */}
                 <div className="h-8 bg-current rounded w-full"></div>
                 <div className="h-8 bg-current rounded w-full"></div>
                 <div className="h-8 bg-current rounded w-full"></div>
                 <div className="h-8 bg-current rounded w-full hidden md:block"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}