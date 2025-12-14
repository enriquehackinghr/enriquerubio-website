import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Mic, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Speaking() {
  const keynotes = [
    {
      title: "Staying Relevant in the Age of AI",
      description: "A strategic overview of how AI reshapes value creation and what organizations must do to keep up. This talk focuses on the macro shifts in business models and the micro shifts in daily work.",
      outcomes: [
        "Align leadership on AI strategy",
        "Understand the urgency of adaptation",
        "Clarify the path from pilot to scale"
      ],
      audience: "Executive Leadership, Boards, Strategy Teams",
      format: "45-60 min Keynote"
    },
    {
      title: "AI and the Future of Work: What’s Changing",
      description: "Going beyond the hype to understand practical shifts in jobs, skills, and workflows. We deconstruct roles and reconstruct them for an AI-augmented reality.",
      outcomes: [
        "Realistic roadmap for work redesign",
        "Skill mapping for the future",
        "Mitigating fear through clarity"
      ],
      audience: "All Employees, HR, Managers",
      format: "45-60 min Keynote + Q&A"
    },
    {
      title: "HR’s Role in AI-Driven Workplace Transformation",
      description: "Why HR is the most critical function for AI adoption and how to lead the charge. Moving HR from a support function to the architect of the new operating model.",
      outcomes: [
        "Empowered HR leadership strategy",
        "Governance frameworks for AI",
        "Culture change for digital adoption"
      ],
      audience: "HR Leaders, People Operations",
      format: "Keynote or Half-day Workshop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Header */}
        <section className="container-width mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-4xl">
             <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
               Speaking & Keynotes
             </h1>
             <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
               Provocative, practical, and strategic talks that help audiences navigate the intersection of human capability and artificial intelligence.
             </p>
          </div>
        </section>

        {/* Keynotes List */}
        <section className="container-width mb-24">
          <div className="space-y-12">
            {keynotes.map((note, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">{note.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {note.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-bold text-foreground/50 uppercase tracking-wide block mb-3">Outcomes</span>
                      <ul className="space-y-2">
                        {note.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-medium text-foreground/80">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground/50 uppercase tracking-wide block mb-3">Audience & Format</span>
                       <p className="text-sm font-medium text-foreground/80 mb-2">{note.audience}</p>
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-foreground/70">
                         <Mic className="w-3 h-3" /> {note.format}
                       </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
                   <div className="bg-gray-50 rounded-xl p-6 text-center">
                     <p className="text-sm font-semibold mb-4">Interested in this topic?</p>
                     <Button className="w-full">Inquire Availability</Button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="container-width max-w-3xl">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-heading font-bold mb-2">Book Enrique</h2>
            <p className="text-muted-foreground mb-8">
              Tell us about your event. We usually respond within 24 hours.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full h-10 px-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Organization</label>
                  <input type="text" className="w-full h-10 px-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Company name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full h-10 px-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="you@company.com" />
              </div>
              
               <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Date (Optional)</label>
                  <input type="date" className="w-full h-10 px-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Format</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>In-Person Keynote</option>
                    <option>Virtual Keynote</option>
                    <option>Workshop</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full h-32 px-3 py-2 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Tell us about the audience, theme, and goals..." />
              </div>
              
              <Button size="lg" className="w-full md:w-auto">Send Inquiry</Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}