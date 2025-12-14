import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-32 bg-primary overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"}}></div>

      <div className="container-width max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-10 tracking-tight leading-none drop-shadow-[4px_4px_0px_#000]">
          Ready to humanize the future of work?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-bold">
          Share your event details and we’ll respond with availability and next steps.
        </p>
        <Button size="xl" className="bg-white text-black border-2 border-black shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#000] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[4px_4px_0px_0px_#000] text-xl px-12 py-8 rounded-2xl">
          Book Enrique Now
        </Button>
      </div>
    </section>
  );
}