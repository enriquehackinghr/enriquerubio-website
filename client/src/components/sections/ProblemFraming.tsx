export function ProblemFraming() {
  return (
    <section className="py-24 md:py-36 bg-white border-y-2 border-black">
      <div className="container-width">
        <div className="max-w-5xl mx-auto">
          <h2 className="sr-only">The Challenge</h2>
          <div className="space-y-12 md:space-y-16">
            <p className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.0] tracking-tighter uppercase">
              AI is moving faster than <br/>
              <span className="bg-black text-white px-2">organizations can adapt.</span>
            </p>
            <p className="text-3xl md:text-5xl font-heading font-bold text-gray-400 leading-tight uppercase">
              Leaders feel pressure but lack clarity on where and how to start.
            </p>
            <p className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.0] tracking-tighter pl-0 md:pl-20 border-l-8 border-primary uppercase">
              Transformation is expected without clear ownership or mandate.
            </p>
            <p className="text-3xl md:text-5xl font-heading font-bold text-gray-400 leading-tight uppercase">
              People feel uncertainty when they should feel capable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}