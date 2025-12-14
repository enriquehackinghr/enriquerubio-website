import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@assets/generated_images/warm_organic_beige_background_with_soft_orange_shapes.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#FAFAF9]">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <img 
          src={heroBg} 
          alt="Abstract background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />

      <div className="container-width relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10 animate-in slide-in-from-bottom-5 duration-700 fade-in text-center lg:text-left">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider mb-2">
             <Star className="w-4 h-4 fill-primary" /> Keynote Speaker & Founder
           </div>
           
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground tracking-tight leading-[1.05]">
            Future of Work <br/>
            <span className="highlight-underline">Humanized</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
            Helping organizations stay relevant in the age of AI by focusing on what matters most: <span className="text-foreground font-bold">People.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <Button size="xl" className="font-bold text-lg px-10 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
              Book Enrique
            </Button>
            <Button variant="outline" size="xl" className="font-bold text-lg px-10 rounded-full border-2 border-foreground hover:bg-foreground hover:text-white transition-all bg-transparent">
              Watch Keynotes
            </Button>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="lg:col-span-5 relative animate-in slide-in-from-right-5 duration-1000 delay-200 fade-in hidden md:block">
           {/* Decorative elements behind */}
           <div className="absolute top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
           
           <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white relative group">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl">
                   Image of Enrique
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] transform group-hover:scale-105 transition-transform">
                   <p className="font-heading font-bold text-3xl text-primary mb-1">100+</p>
                   <p className="text-sm font-bold text-foreground leading-tight">Global Keynotes Delivered</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}