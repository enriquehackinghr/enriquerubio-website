import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import heroBg from "@assets/generated_images/digital_grid_with_subtle_glitch_noise_and_data_patterns.png";

export function FutureOfWorkSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#F3F4F6] border-b-2 border-black">
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
      
      <div className="container-width relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-8 animate-in slide-in-from-bottom-5 duration-700 fade-in text-left">
           
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

        {/* Right Content - Visual (Removed Headshot) */}
        <div className="lg:col-span-4 relative hidden md:block">
           {/* Abstract tech element instead of headshot */}
           <div className="w-full h-64 border-2 border-black bg-white/50 backdrop-blur-sm p-4 relative overflow-hidden flex items-center justify-center shadow-[8px_8px_0px_0px_#00E676]">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse"></div>
              <div className="font-mono text-sm text-black/50">
                &gt; Awaiting_Input...<br/>
                &gt; Processing_Requests...<br/>
                &gt; AI_Status: ONLINE
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}