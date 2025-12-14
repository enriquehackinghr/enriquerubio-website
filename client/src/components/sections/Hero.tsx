import { Button } from "@/components/ui/button";
import userHeadshot from "@assets/Partnership_Templates_1765722497738.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-20">
      <div className="container-width relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content - Text */}
          <div className="order-2 lg:order-1 space-y-12 py-12 lg:py-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-white tracking-tight leading-tight text-balance">
              The AI keynote speaker who connects to your audience at a human level.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="xl" className="bg-white text-black hover:bg-gray-200 rounded-sm px-8 py-6 text-lg font-medium">
                Watch Keynotes
              </Button>
              <Button size="xl" className="bg-white text-black hover:bg-gray-200 rounded-sm px-8 py-6 text-lg font-medium">
                Book Enrique
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 relative h-full min-h-[50vh] lg:min-h-[80vh] flex items-end justify-center lg:justify-end">
             {/* Image container that spans height */}
             <div className="relative w-full h-full flex items-end justify-end">
                <img 
                  src={userHeadshot} 
                  alt="Enrique Rubio" 
                  className="max-h-[80vh] w-auto object-contain object-bottom grayscale contrast-125 brightness-90 mask-image-b"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}