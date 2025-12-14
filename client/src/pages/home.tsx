import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TopicGrid } from "@/components/sections/TopicGrid";
import { Credibility } from "@/components/sections/Credibility";
import { EngagementFormats } from "@/components/sections/EngagementFormats";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemFraming />
        <HowItWorks />
        <TopicGrid />
        <Credibility />
        <EngagementFormats />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}