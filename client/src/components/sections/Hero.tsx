import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import heroBg from "@assets/generated_images/digital_grid_with_subtle_glitch_noise_and_data_patterns.png";
import userHeadshot from "@assets/Enrique_1765759922247.png";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-end pt-20 pb-0 overflow-hidden bg-[#F3F4F6]">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay">
        <img 
          src={heroBg} 
          alt="Abstract background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 tech-grid-bg opacity-30 pointer-events-none" />
      
      <div className="container-width relative z-10 grid lg:grid-cols-12 gap-12 items-end w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 animate-in slide-in-from-bottom-5 duration-700 fade-in text-left pb-16">
           
           <div className="inline-flex items-center gap-2 px-4 py-1 bg-black border border-primary brutal-shadow-sm text-primary font-mono font-bold text-xs uppercase tracking-widest mb-2">
             <Terminal className="w-3 h-3" /> 
             System.Init: Keynote_Speaker
           </div>
           
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground tracking-tighter leading-[0.9] drop-shadow-sm uppercase">
            Future of Work
            <br />
            <span className="text-primary bg-black px-2 inline-block transform -skew-x-12">Humanized_</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-xl leading-relaxed font-medium border-l-4 border-primary pl-6 font-mono">
            // Helping organizations upgrade their OS for the age of AI by focusing on the core kernel: <span className="bg-primary/20 px-1 text-black font-bold">PEOPLE.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-6 items-start">
            <Button size="xl" className="bg-primary text-black hover:bg-primary/80 border-2 border-black shadow-[4px_4px_0px_0px_#000] rounded-none uppercase font-bold tracking-wider">
              Book Enrique Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none rounded-none uppercase font-bold tracking-wider font-mono">
              [Watch_Keynotes]
            </Button>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="lg:col-span-5 absolute right-0 bottom-0 top-24 animate-in slide-in-from-right-5 duration-1000 delay-200 fade-in hidden md:flex items-end justify-end pr-8">
           <img 
             src={userHeadshot} 
             alt="Enrique Rubio" 
             className="h-[130%] w-auto object-contain object-bottom max-w-none"
           />
        </div>
      </div>
    </section>
  );
}