import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, Globe, BookOpen, Terminal } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 md:py-36 bg-black border-t-2 border-white/20 relative overflow-hidden text-white">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0, 230, 118, .3) 25%, rgba(0, 230, 118, .3) 26%, transparent 27%, transparent 74%, rgba(0, 230, 118, .3) 75%, rgba(0, 230, 118, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 230, 118, .3) 25%, rgba(0, 230, 118, .3) 26%, transparent 27%, transparent 74%, rgba(0, 230, 118, .3) 75%, rgba(0, 230, 118, .3) 76%, transparent 77%, transparent)", backgroundSize: "50px 50px"}}></div>

      <div className="container-width relative z-10">
        <div className="bg-[#111] border-2 border-primary/50 p-8 md:p-12 shadow-[0px_0px_20px_rgba(0,230,118,0.2)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs">
                :: Network_Node_Admin
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight uppercase">
                Founder of <br/>
                <span className="text-primary text-stroke">Hacking HR</span>
              </h2>
              
              <h3 className="text-xl font-mono text-gray-400 border-b border-gray-800 pb-4">
                & The People and Culture Strategy Institute
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                &gt; Initiating protocol: Enterprise learning and leadership activation... <br/>
                &gt; I don't just speak about the future. I build platforms, programs, and communities that help leaders turn change into capability at scale.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-mono">
                Hacking HR brings together senior leaders, practitioners, and organizations to explore how technology, work, and leadership are evolving, and how to respond with clarity and intent.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 font-mono text-xs bg-gray-900 px-3 py-2 border border-gray-700 text-primary">
                  <Users className="w-4 h-4" /> Global Leadership Community
                </div>
                <div className="flex items-center gap-2 font-mono text-xs bg-gray-900 px-3 py-2 border border-gray-700 text-primary">
                  <Globe className="w-4 h-4" /> Global Executive Events
                </div>
                <div className="flex items-center gap-2 font-mono text-xs bg-gray-900 px-3 py-2 border border-gray-700 text-primary">
                  <BookOpen className="w-4 h-4" /> Applied Learning Lab
                </div>
              </div>

              <div className="pt-6">
                <a href="https://hackinghrlab.io/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary hover:bg-primary hover:text-black border-2 border-primary rounded-none font-mono uppercase tracking-widest">
                    Explore Hacking HR <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual/Logo Area */}
            <div className="relative">
              {/* Terminal Window */}
              <div className="bg-black border-2 border-gray-700 overflow-hidden shadow-2xl relative">
                <div className="bg-gray-900 p-2 flex justify-between items-center border-b border-gray-700">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="text-xs font-mono text-gray-500">bash 80x24</div>
                </div>
                <div className="p-8 min-h-[300px] flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden font-mono">
                   
                   <div className="relative z-10 text-left w-full">
                     <p className="text-green-500">$ ./start_hacking_hr.sh</p>
                     <p className="text-white mt-2">Initializing core modules...</p>
                     <p className="text-white">Loading future_of_work.js...</p>
                     <div className="mt-8 border-2 border-primary p-4 inline-block">
                        <h4 className="font-heading font-bold text-4xl tracking-tighter text-white">HACKING_<span className="text-primary">HR</span></h4>
                     </div>
                     <p className="text-primary mt-4 animate-pulse">_Cursor blinking...</p>
                   </div>
                   
                   {/* Grid Overlay inside terminal */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}