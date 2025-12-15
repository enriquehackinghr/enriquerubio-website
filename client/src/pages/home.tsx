import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
import { AdaChatSection } from "@/components/sections/AdaChatSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BuildWithYouSection } from "@/components/sections/BuildWithYouSection";
import { TopicGrid } from "@/components/sections/TopicGrid";
import { SpeakingSection } from "@/components/sections/SpeakingSection";
import { EngagementFormats } from "@/components/sections/EngagementFormats";
import { FounderSection } from "@/components/sections/FounderSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemFraming />
        <AdaChatSection />
        <HowItWorks />
        <BuildWithYouSection />
        <SpeakingSection />
        <TopicGrid />
        <EngagementFormats />
        <FounderSection />
        <AboutSection />
        <BookingSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}