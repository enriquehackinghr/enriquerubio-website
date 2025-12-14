import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroBg from "@assets/generated_images/paper_texture_with_colorful_abstract_doodle_shapes.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#FFFCF5]">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-multiply">
        <img 
          src={heroBg} 
          alt="Abstract background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-width relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 animate-in slide-in-from-bottom-5 duration-700 fade-in text-left">
           
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black brutal-shadow-sm rounded-full font-bold text-sm uppercase tracking-wider mb-2 rotate-[-2deg]">
             <Sparkles className="w-4 h-4 text-primary fill-primary" /> 
             Keynote Speaker & Founder
           </div>
           
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground tracking-tight leading-[1.0] drop-shadow-sm">
            Future of Work
            <br />
            <span className="text-primary highlight-marker px-2">Humanized.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-xl leading-relaxed font-bold border-l-4 border-primary pl-6">
            Helping organizations stay relevant in the age of AI by focusing on what matters most: <span className="underline decoration-4 decoration-accent underline-offset-4">People.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-6 items-start">
            <Button size="xl" className="rotate-[-1deg]">
              Book Enrique Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="rotate-[1deg]">
              Watch Keynotes
            </Button>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="lg:col-span-5 relative animate-in slide-in-from-right-5 duration-1000 delay-200 fade-in hidden md:block">
           <div className="relative z-10 transform rotate-3 transition-transform duration-500 hover:rotate-1">
             <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden border-4 border-black brutal-shadow-lg relative group">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[#E0F2F1] flex items-center justify-center text-foreground font-black text-3xl uppercase tracking-widest opacity-20">
                   Enrique Photo
                </div>
                
                {/* Floating Sticker */}
                <div className="absolute -top-6 -right-6 bg-accent w-24 h-24 rounded-full border-2 border-black flex items-center justify-center animate-bounce duration-[3000ms]">
                   <Star className="w-10 h-10 text-black fill-white" />
                </div>

                {/* Info Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-black p-6">
                   <p className="font-heading font-black text-4xl text-foreground mb-1">100+</p>
                   <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Global Keynotes Delivered</p>
                </div>
             </div>
           </div>
           
           {/* Decorative doodle behind */}
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full border-4 border-black -z-10"></div>
        </div>
      </div>
    </section>
  );
}