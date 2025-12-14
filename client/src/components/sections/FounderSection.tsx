import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, Globe, BookOpen } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 md:py-36 bg-[#FFD54F] border-t-2 border-black relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "30px 30px"}}></div>

      <div className="container-width relative z-10">
        <div className="bg-white border-2 border-black rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-1 font-bold uppercase tracking-widest text-sm rotate-[-1deg]">
                Community Builder
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground leading-tight">
                Founder of <br/>
                <span className="text-primary">Hacking HR</span>
              </h2>
              
              <h3 className="text-xl font-bold text-foreground/80 border-b-2 border-black/10 pb-4">
                & People and Culture Strategy Institute
              </h3>
              
              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                I don't just speak about the future; I'm actively building it. Hacking HR is a global community of leaders dedicated to the intersection of the future of work, technology, and human potential.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 font-bold text-sm bg-gray-100 px-3 py-1.5 rounded-lg border border-black/20">
                  <Users className="w-4 h-4 text-primary" /> Global Community
                </div>
                <div className="flex items-center gap-2 font-bold text-sm bg-gray-100 px-3 py-1.5 rounded-lg border border-black/20">
                  <Globe className="w-4 h-4 text-primary" /> World-Class Events
                </div>
                <div className="flex items-center gap-2 font-bold text-sm bg-gray-100 px-3 py-1.5 rounded-lg border border-black/20">
                  <BookOpen className="w-4 h-4 text-primary" /> Learning Lab
                </div>
              </div>

              <div className="pt-6">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 hover:text-white border-transparent">
                  Visit Hacking HR <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Visual/Logo Area */}
            <div className="relative">
              {/* Pseudo-Browser Window for Visual Interest */}
              <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A]">
                <div className="bg-black p-3 flex gap-2 items-center border-b-2 border-black">
                  <div className="w-3 h-3 rounded-full bg-red-500 border border-black/30"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black/30"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 border border-black/30"></div>
                </div>
                <div className="p-8 bg-[#FAFAFA] min-h-[300px] flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
                   {/* Abstract representation of the Hacking HR brand since we don't have the logo yet */}
                   <div className="relative z-10">
                     <h4 className="font-heading font-black text-4xl tracking-tighter">HACKING <span className="text-primary">HR</span></h4>
                     <p className="text-xs font-bold tracking-[0.3em] uppercase mt-1 text-gray-400">Future of Work</p>
                   </div>
                   
                   {/* Decorative elements */}
                   <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                   <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
                   
                   <div className="w-full max-w-[200px] h-2 bg-gray-200 rounded-full mt-8 overflow-hidden">
                     <div className="w-2/3 h-full bg-primary animate-pulse"></div>
                   </div>
                   <div className="flex gap-2 opacity-50">
                     <div className="w-8 h-8 rounded bg-gray-200"></div>
                     <div className="w-8 h-8 rounded bg-gray-200"></div>
                     <div className="w-8 h-8 rounded bg-gray-200"></div>
                   </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border-2 border-black px-6 py-3 rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] rotate-3">
                 <span className="font-heading font-black text-xl">Top Voice 2025</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}