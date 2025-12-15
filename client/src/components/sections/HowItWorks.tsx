import { Check } from "lucide-react";

export function HowItWorks() {
  const outcomes = [
    "Clarifies what AI changes in strategy, work and leadership.",
    "Helps leaders move from experimentation to real execution and AI operational excellence.",
    "Builds readiness across capability, culture, and governance.",
    "Connects AI adoption with operating models and work design."
  ];

  return (
    <section className="py-24 md:py-36 bg-[#E0E7FF] border-b-2 border-black">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-start">
        <div>
           <div className="inline-block border border-black px-2 py-1 font-mono text-xs font-bold uppercase mb-4">
              :: Algorithm_Output
           </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-balance text-foreground uppercase tracking-tight">
            Strategic translation into <span className="text-primary bg-black px-2">action.</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg font-mono">
            // I don't just talk about the future. I help organizations turn AI into real operating change.
          </p>
        </div>
        
        <div className="space-y-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-6 p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#2979FF]">
              <div className="mt-1 flex-shrink-0 w-8 h-8 bg-black border border-primary flex items-center justify-center text-primary">
                <Check className="w-5 h-5" strokeWidth={4} />
              </div>
              <p className="font-bold text-lg text-foreground font-heading uppercase leading-tight">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}