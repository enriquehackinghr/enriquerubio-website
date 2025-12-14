import { Check } from "lucide-react";

export function HowItWorks() {
  const outcomes = [
    "Clarifies what AI changes in work, leadership, and people strategy.",
    "Helps leaders move from experimentation to operational relevance.",
    "Builds readiness across culture, capability, and governance.",
    "Connects HR technology, AI adoption, and workforce transformation."
  ];

  return (
    <section className="py-24 md:py-36 bg-[#E0F2F1] border-b-2 border-black">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 text-balance text-foreground">
            Strategic translation into <span className="text-primary">action.</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg font-bold">
            I don't just talk about the future; I help organizations understand how AI changes work, redesign workflows, and prepare their people for a new operating reality.
          </p>
        </div>
        
        <div className="space-y-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-6 p-6 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#1A1A1A] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A]">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent border-2 border-black flex items-center justify-center text-black">
                <Check className="w-5 h-5" strokeWidth={4} />
              </div>
              <p className="font-bold text-lg text-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}