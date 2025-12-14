import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/subtle_light_abstract_executive_background_texture.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img 
          src={heroBg} 
          alt="Abstract background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Soft Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

      <div className="container-width relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 animate-in slide-in-from-bottom-5 duration-700 fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1]">
            Helping organizations <span className="text-primary">stay relevant</span> in the age of AI.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I help leaders, HR teams, and organizations redesign work and build the human capability needed for intelligent transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="xl" className="font-semibold text-lg px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              Book Enrique
            </Button>
            <Button variant="outline" size="xl" className="font-semibold text-lg px-8 bg-white/50 backdrop-blur-sm hover:bg-white border-primary/10">
              Explore Keynotes
            </Button>
          </div>
        </div>

        {/* Right Content - Credibility Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in slide-in-from-right-5 duration-1000 delay-200 fade-in">
          <div className="relative w-full max-w-md aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
             {/* Placeholder for Headshot */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                <span className="sr-only">Enrique Rubio Portrait</span>
             </div>
             
             {/* Overlay Content Card */}
             <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-500 hover:-translate-y-1">
               <h3 className="font-heading font-bold text-xl text-foreground">Enrique Rubio</h3>
               <div className="h-0.5 w-12 bg-primary my-3"></div>
               <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                 Speaker on AI, the future of work, & HR technology.
                 <br/>
                 Founder, <span className="text-primary">Hacking HR</span>.
               </p>
               <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 Global Audiences
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}