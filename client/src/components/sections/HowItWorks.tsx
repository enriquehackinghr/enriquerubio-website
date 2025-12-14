import { Check } from "lucide-react";

export function HowItWorks() {
  const outcomes = [
    "Clarifies what AI changes in work, leadership, and people strategy.",
    "Helps leaders move from experimentation to operational relevance.",
    "Builds readiness across culture, capability, and governance.",
    "Connects HR technology, AI adoption, and workforce transformation."
  ];

  return (
    <section className="section-spacing bg-gray-50 border-y border-gray-100">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
            Strategic translation into action.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I don't just talk about the future; I help organizations understand how AI changes work, redesign workflows, and prepare their people for a new operating reality.
          </p>
        </div>
        
        <div className="space-y-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <p className="font-medium text-foreground/80">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}