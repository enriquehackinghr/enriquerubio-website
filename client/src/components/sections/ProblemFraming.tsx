export function ProblemFraming() {
  return (
    <section className="py-24 md:py-36 bg-white border-y-2 border-black">
      <div className="container-width">
        <div className="max-w-5xl mx-auto">
          <h2 className="sr-only">The Challenge</h2>
          <div className="space-y-12 md:space-y-16">
            <p className="text-4xl md:text-6xl font-heading font-black text-foreground leading-[1.1] tracking-tight">
              AI is moving faster than <br/>
              <span className="bg-primary/20 px-2 decoration-4 underline decoration-primary underline-offset-4">organizations can adapt.</span>
            </p>
            <p className="text-3xl md:text-5xl font-heading font-bold text-muted-foreground leading-tight">
              Leaders feel pressure but lack clarity on the "how."
            </p>
            <p className="text-4xl md:text-6xl font-heading font-black text-foreground leading-[1.1] tracking-tight pl-0 md:pl-20 border-l-8 border-accent">
              HR is expected to lead transformation without the mandate.
            </p>
            <p className="text-3xl md:text-5xl font-heading font-bold text-muted-foreground leading-tight">
              Employees feel uncertainty when they should feel capability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}