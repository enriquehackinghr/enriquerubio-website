import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-32 bg-white">
      <div className="container-width max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-8 tracking-tight text-balance">
          If your organization is serious about staying relevant in the age of AI, let’s talk.
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Share your event details and we’ll respond with availability and next steps.
        </p>
        <Button size="xl" className="text-lg px-12 py-8 rounded-full shadow-2xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
          Book Enrique
        </Button>
      </div>
    </section>
  );
}