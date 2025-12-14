import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-32 bg-primary overflow-hidden relative border-t-2 border-black">
      {/* Tech patterns */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>

      <div className="container-width max-w-4xl text-center relative z-10">
        <div className="inline-block bg-black text-white px-4 py-1 font-mono font-bold uppercase tracking-widest text-sm mb-6">
          :: System_Ready
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-black mb-10 tracking-tighter leading-none uppercase">
          Ready to humanize <br/> the future?
        </h2>
        <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-2xl mx-auto font-mono border-l-4 border-black pl-4 text-left md:text-center md:border-none md:pl-0">
          // Share your event details and we’ll respond with availability and next steps.
        </p>
        <Button size="xl" className="bg-black text-primary hover:bg-white hover:text-black border-2 border-black shadow-[8px_8px_0px_0px_#fff] text-xl px-12 py-8 rounded-none uppercase font-bold tracking-wider font-mono">
          Initialize_Booking
        </Button>
      </div>
    </section>
  );
}