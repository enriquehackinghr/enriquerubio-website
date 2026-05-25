import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const parts = [
  {
    number: "I",
    title: "THE LONG VIEW",
    subtitle: "Technology, Disruption, and the Shape of Change",
    chapters: "Chapters 1–6",
    summary: `Before any organization can lead AI well, it needs to understand what is actually happening. Not the version in the headlines, not the version in the vendor pitch, but the version that five centuries of technological disruption have consistently produced. Part I builds that understanding from the ground up.

Six chapters move through five major technological revolutions, from the printing press to the industrial revolution, from electrification to the digital era, to the internet's restructuring of entire industries. The purpose is not historical nostalgia but pattern recognition. Every major technology transition has followed a recognizable structure: incumbents who misread the moment, windows for structural advantage that close faster than planning systems anticipate, human costs that are real and often ignored, and the eventual emergence of a new competitive landscape that rewards the organizations that moved with clarity while others were still debating whether the change was real.

Chapter 3 makes the case that AI is genuinely different from previous revolutions in three specific ways: it operates in the domain of cognition rather than physical capability, its pace of improvement has compressed the window for adaptation, and no professional domain is insulated from its effects. These differences intensify the historical patterns discussed.

Part I closes with six principles distilled from the full arc of technological history. These principles are the cognitive instruments that the rest of the book applies, repeatedly and in specific domains, to the strategic, organizational, and personal challenges of AI leadership. The long view is the foundation. Everything that follows is built on it.`,
    toc: [
      { ch: "1", title: "Five Revolutions", items: ["The Printing Press and the Death of Scribal Authority", "The Industrial Revolution and the Invention of Management", "The Electrification of Everything", "The Digital Revolution and the Emergence of Data as Capital", "The Internet Era and the Speed of Creative Destruction"] },
      { ch: "2", title: "The Anatomy of Disruption", items: ["Why Good Companies Fail", "The S-Curve and Where You Are on It", "The Window for Adaptation", "The Human Cost of Disruption and the Ethical Obligation"] },
      { ch: "3", title: "What Makes This Revolution Different", items: ["General-Purpose Technologies and Why AI Qualifies", "The Compression of the Capability Curve", "The Breadth Problem: No Domain Is Exempt from the Impact of AI", "The Agentic Shift: From Tools to Actors", "The Meaning Question"] },
      { ch: "4", title: "The Leaders Who Got It Right", items: ["Carnegie, Ford, and the Art of Structural Reinvention", "IBM's Watson and the Humility to Reinvent Twice", "The Synthesis: What the Navigators Shared"] },
      { ch: "5", title: "The Psychology of Technological Change", items: ["The Grief Cycle in Organizations", "Identity Threat and the Expert Trap", "The Organizational Immune System"] },
      { ch: "6", title: "Lessons Crystallized", items: ["The Six Principles", "Applying the Principles to Your Situation", "The Long View as Leadership Practice"] },
    ],
  },
  {
    number: "II",
    title: "THE MIRROR",
    subtitle: "What AI Reveals About Human Leadership",
    chapters: "Chapters 7–12",
    summary: `Part II turns the lens from the external world to the internal one. Having established the historical shape of the disruption, the book now asks the question that most AI strategy frameworks skip entirely: what does AI say about the people leading through it? About their judgment, their voice, their identity as leaders, and the specific human capabilities that this transition will either develop or erode depending on how deliberately they engage with it.

The Bridges Story in Chapter 8 is the most important example in the book. It is the story of a situation where every piece of relevant data pointed one direction, and where a leader's decision to honor a different kind of knowledge, contextual, relational, human, prevented a catastrophic outcome. It illustrates what the Human Advantage Matrix describes systematically: the specific capabilities that AI cannot replicate even when it can approximate their surface.

Chapter 9 names the Dumbification Risk directly: the gradual erosion of human judgment that occurs when AI handles more of the cognitive work that builds and maintains that judgment. The 90/10 Formula is introduced here as a practical discipline. Chapter 12 addresses identity: the order of operations that determines whether AI augments a leader's thinking or substitutes for it, the Voice Preservation Principle, and the stable core from which genuine AI leadership becomes possible.

Part II is an act of preparation. It establishes what people bring that AI cannot replicate, what leaders risk losing if they are not careful, and the kind of leadership presence required before the strategic and organizational work that follows can be led well.`,
    toc: [
      { ch: "7", title: "The Moment We Are In", items: ["The Acceleration", "The Civilizational Stakes", "The Leadership Vacuum"] },
      { ch: "8", title: "What Machines Cannot Do", items: ["The Bridges Story", "The Human Advantage Matrix", "The Governance Gap in People Decisions"] },
      { ch: "9", title: "The Dumbification Risk", items: ["The Trajectory Before AI", "AI's Amplifying Effect", "The 90/10 Formula as Cognitive Discipline", "AI for Thinking and Not Just Doing"] },
      { ch: "10", title: "The Fear Beneath the Adoption", items: ["What People Are Actually Feeling", "The Manager in the Middle", "From Fear to Agency"] },
      { ch: "11", title: "The Trust Problem", items: ["The Trust Deficit and the Trust Surplus", "What Builds Trust in AI Systems", "Trust, Accountability, and Who Owns the Output"] },
      { ch: "12", title: "Who You Are When AI Is Your Colleague", items: ["The Question Behind Every AI Decision", "The Voice Question", "Leading From a Stable Core", "AI as Your First Hire"] },
    ],
  },
  {
    number: "III",
    title: "THE ECOSYSTEM",
    subtitle: "Understanding the Full Landscape",
    chapters: "Chapters 13–18",
    summary: `Most AI strategies fail not because the leaders behind them lack capability but because they are navigating with an incomplete map. They deploy technology into organizations they do not fully understand, against a competitive landscape they have not squarely examined, on a data foundation they have never honestly assessed. Part III is about building the map.

The Workplace Ecosystem Framework in Chapter 13 identifies seven interconnected components that together describe how AI reshapes organizational life, and why strategies that address fewer than all seven produce results no one can explain. The AI-Native Competitor thought experiment in Chapter 14 is the strategic diagnostic that reveals, with uncomfortable precision, where any established organization is most exposed to disruption from a well-resourced entrant building from scratch.

Chapters 15 through 17 address the three infrastructure questions that determine whether everything else works: the workforce that now includes AI agents alongside human employees, the data foundation that sets the ceiling on what any AI deployment can accomplish, and the build-buy-partner platform decisions that are already locking organizations into strategic positions they have not fully examined. Chapter 18 addresses the AI landscape that exists inside organizational walls right now.

Part III is diagnostic before it is strategic. Its value is in completing the picture of organizational reality that AI strategy must be built on. The leaders who do this work before committing to strategy will make different, more durable, and more calibrated decisions than those who skip it.`,
    toc: [
      { ch: "13", title: "The Workplace Ecosystem", items: ["Why Leaders Need a Map", "The Seven Components", "How the Components Interact"] },
      { ch: "14", title: "The AI-Native Competitor", items: ["The Monday Morning Scenario", "What AI-Native Means", "The Strategic Implication"] },
      { ch: "15", title: "The Workforce Redefined", items: ["A New Definition of Team", "The Human Work That Remains", "The Reskilling Responsibility", "Designing the Human-AI Organizational Model"] },
      { ch: "16", title: "The Data Foundation", items: ["Data as Organizational Memory", "The Data Governance Imperative", "Building AI-Ready Data Infrastructure"] },
      { ch: "17", title: "The Platform Question", items: ["Build, Buy, or Partner", "Vendor Dependence and the Lock-In Risk", "Organizational AI Platform Strategy"] },
      { ch: "18", title: "Reading the AI Landscape", items: ["The Shadow AI Problem", "The Integration Gap", "The Strategic AI Inventory", "Acting on What You Find"] },
    ],
  },
  {
    number: "IV",
    title: "THE STRATEGY",
    subtitle: "From Vision to Execution",
    chapters: "Chapters 19–24",
    summary: `Most organizations do not fail at AI because they lack good technology, but because they confuse activity for progress. Tools get deployed, pilots get launched, announcements get made, and the underlying questions that would give all that activity coherent direction never get asked. Part IV is about closing the gap between AI ambition and AI value.

Chapter 19 starts before the roadmap and before the pilots, with intent: the explicit articulation of what the organization is trying to accomplish with AI and why. This is the only foundation on which coherent strategy can be built, and it is consistently missing. Chapter 20 addresses execution directly: why AI strategies consistently fail to become organizational reality, and what the leaders who close that gap do differently. Chapter 21 introduces the Office of Strategic AI Integration.

Chapters 22 through 24 address three disciplines that are consistently underdeveloped in AI strategies: the multi-horizon roadmap that prevents single-horizon thinking from producing AI investments that are individually rational but strategically incoherent; the measurement framework that captures genuine value creation rather than adoption rates and tool counts; and the AI communication narrative that every leader needs to be able to tell, with the specificity and honesty that makes transformation legible to the people living through it.

Part IV's six chapters are designed as a connected system. Intent shapes the roadmap, the roadmap informs measurement, measurement feeds back into intent, and all three are held together by the communication that makes transformation legible to the organization living through it.`,
    toc: [
      { ch: "19", title: "Leading with Intent", items: ["The Problem with Opportunistic AI", "What Intent Looks Like", "Building Intent Intentionally"] },
      { ch: "20", title: "From Strategy to Execution", items: ["Why Strategies Fail to Become Reality", "Process Deconstruction and Reconstruction", "Designing the Organization as a Network", "The Temporal Reality of AI Execution", "Building the Knowledge Infrastructure"] },
      { ch: "21", title: "The Office of Strategic AI Integration", items: ["The Function That Doesn't Exist Yet", "Structure and Mandate", "What This Function Produces", "Building Toward Obsolescence"] },
      { ch: "22", title: "The Multi-Horizon Roadmap", items: ["Why Single-Horizon Thinking Fails", "Building the Roadmap", "The Full ROI Equation: Beyond Efficiency", "Measuring ROI Across the Workplace Ecosystem", "The AI Budget Anatomy", "Building the AI Business Case", "Three Starter Metrics for Every AI Initiative", "Planning for Uncertainty", "Governing the Roadmap Itself"] },
      { ch: "23", title: "Measuring What Matters", items: ["The Metrics Trap", "Measuring the Human Side", "Building the Complete Measurement Framework"] },
      { ch: "24", title: "The AI Story", items: ["Why Most AI Communication Fails", "The Narrative Architecture", "Managing Resistance as Information", "Channel Strategy and the Feedback Loop", "The Long Arc of the AI Story"] },
    ],
  },
  {
    number: "V",
    title: "THE READINESS",
    subtitle: "Building Human and Organizational Capacity",
    chapters: "Chapters 25–31",
    summary: `Strategy without readiness is architecture without foundation. Organizations can articulate excellent AI intent, design coherent roadmaps, and build governance frameworks that look impressive on paper, and still fail to produce AI transformation, because the human and organizational capacity required to execute the strategy was never built. Part V addresses the investment asymmetry that defines most organizations' AI journeys: serious investment in technology deployment, minimal investment in the human and organizational capacity to use it well.

The Four Dimensions of Readiness framework in Chapter 25 provides the diagnostic: technical fluency, cultural foundation, process adaptability, and leadership capability. The subsequent chapters develop each: Chapter 26 addresses how to build AI fluency at scale without overwhelming learning systems; Chapter 27 examines culture as the hidden infrastructure that either enables or undermines every capability built on top of it; Chapter 28 navigates the structural reality that the most consequential AI transformation happens at the organizational level, where individual leaders must act without formal authority.

Chapters 29 through 31 address the human challenges that AI transformation consistently surfaces and that standard organizational frameworks consistently underestimate: the change management approach adequate to continuous rather than episodic transformation, the talent strategy calibrated to a landscape where skill half-lives are measured in months, and the psychological safety that research most consistently identifies as the prerequisite for genuine AI capability development.

Part V closes by naming psychological safety as the readiness multiplier: the organizational condition that activates the return on every other readiness investment and that is also, as the final chapter argues, the same investment that makes AI governance genuine rather than performative.`,
    toc: [
      { ch: "25", title: "Four Dimensions of Readiness", items: ["Why Readiness Precedes Everything", "The Four Dimensions", "How the Dimensions Interact", "The Readiness Investment Roadmap"] },
      { ch: "26", title: "AI Learning Moments", items: ["The L&D Math Problem", "What AI Learning Moments Are", "The Leader's Role in Learning Culture", "Building the Organizational Learning Infrastructure", "Governing and Sustaining the Practice"] },
      { ch: "27", title: "Culture as Infrastructure", items: ["What Culture Actually Does", "The Cultural Conditions for AI Transformation", "Building Culture Deliberately", "The Timeline and Resilience of Cultural Change", "Culture, Context, and Equity"] },
      { ch: "28", title: "Leading Without Authority", items: ["The Structural Reality", "Participation as the Core Leadership Act", "The Five Practices of Influence Without Authority", "Coalition Architecture", "When Authority Would Help and What to Do Instead", "Building Organizational Influence Capacity"] },
      { ch: "29", title: "The Change Management Imperative", items: ["Why the Standard Playbook Falls Short", "The Pace Problem", "The Sponsorship Architecture", "Change Capacity as Organizational Resilience"] },
      { ch: "30", title: "Building AI-Ready Teams", items: ["The Skill Half-Life Problem", "The AI Fluency Spectrum", "Retaining in the AI Transition", "The Ethics of Team Building Through Transition", "Building Self-Sustaining Talent Development Infrastructure"] },
      { ch: "31", title: "Psychological Safety as a Strategic Asset", items: ["Why AI Transformation Requires Safety", "How Leaders Create and Destroy Safety", "Designing Safe Experimentation Systems", "Psychological Safety as the Readiness Multiplier", "Safety, Governance, and the Ethics of Honest Organizations"] },
    ],
  },
  {
    number: "VI",
    title: "THE GOVERNANCE",
    subtitle: "Ethics, Accountability, and Oversight",
    chapters: "Chapters 32–37",
    summary: `Governance is the part of AI strategy that most organizations get wrong in the same way: they treat it as a constraint on what they can do rather than as the infrastructure that makes it safe to do more. Part VI makes the strategic and moral case for governance as an organizational investment, and then builds the practical architecture for doing it well.

Chapter 32 opens with the governance paradox: the organizations with the most mature AI governance move faster than their less-governed competitors on the initiatives that matter most, because they have already answered the questions that ungoverned organizations must answer from scratch for every deployment or fix once reputational damages were created by the unintended consequences of unfettered AI adoption. The three-layer governance architecture in Chapter 33 covers the full organizational reality: decision authority, process governance, and cultural governance, from board-level accountability to the daily behavior of every person who uses AI.

Chapters 34 and 35 address the most consequential governance challenges: AI in high-stakes decisions where errors are harms to real people, and algorithmic bias that compounds across training cycles and produces discriminatory outcomes without discriminatory intent. Chapter 36 addresses the regulatory frontier, arguing that compliance by design and compliance by retrofit produce dramatically different competitive positions in the governance environment now forming. Chapter 37 closes with the ethics of speed: the moral argument about who bears the costs of competitive AI pressure.

Part VI is ultimately an argument about trust: what it takes to earn it from employees, customers, regulators, and the public, and why the organizations that invest in earning it are building something that compounds in exactly the way that governance theater does not.`,
    toc: [
      { ch: "32", title: "Why Governance Enables Innovation", items: ["The Governance Paradox", "What Governance Is Not", "The Business Case for Ethics", "Responding to the Governance Objections"] },
      { ch: "33", title: "The Three Layers of Governance", items: ["Layer One: Decision Authority", "Layer Two: Process Governance", "Layer Three: Cultural Governance", "Integrating the Three Layers"] },
      { ch: "34", title: "AI in High-Stakes Decisions", items: ["The Human in the Loop", "High-Stakes Domains", "The Bridges Story Revisited", "Governance Investment for High-Stakes AI"] },
      { ch: "35", title: "Bias, Fairness, and the Accountability Gap", items: ["How AI Inherits and Amplifies Bias", "The Accountability Gap in Practice", "What Fairness Requires of Leaders"] },
      { ch: "36", title: "The Regulatory Frontier", items: ["The Regulatory Landscape Is Forming Now", "Compliance by Design vs. Compliance by Retrofit", "Building Regulatory Intelligence"] },
      { ch: "37", title: "The Ethics of Speed", items: ["Speed as a Moral Choice", "The Reversibility Principle", "Building an Ethics Function That Works"] },
    ],
  },
  {
    number: "VII",
    title: "THE INNOVATION",
    subtitle: "AI as Catalyst for Reinvention",
    chapters: "Chapters 38–43",
    summary: `Every major technology transition has produced two kinds of organizations: those that used the technology to do what they were already doing, but somewhat better, and those that used it to become something fundamentally different. The first group captured efficiency gains. The second group captured the future. Part VII is about building the organizational capacity to be the second kind.

Chapter 38 examines human-AI collaboration as a design discipline: the specific workflows and decision architectures that produce outcomes neither humans nor AI could achieve working separately. Chapter 39 addresses the failure anatomy of AI experimentation, the specific organizational patterns that prevent pilots from becoming platforms, and how to design against them from the beginning rather than discovering them at scale. Chapter 40 asks the strategic question that most AI investments avoid: when optimization is available to every competitor, what is your genuine competitive moat, and are you building the version that AI cannot erode?

Chapter 41 introduces the Innovation Operating System: the institutional infrastructure that makes every AI initiative more productive than the last, building organizational AI capability rather than accumulating disconnected experiments. Chapter 42 addresses the most consequential transition in the innovation cycle, from pilot to platform, where more AI value is lost than at any other stage. Chapter 43 builds the organizational foresight capability that distinguishes organizations that anticipate the AI future from those that respond to it after the advantage has already been captured.

Part VII's connecting thread is the distinction between AI as a tool and AI as a capability. A tool accomplishes a specific task. A capability changes what the organization is able to do, opens new strategic options, and compounds over time. Part VII is about building the latter.`,
    toc: [
      { ch: "38", title: "Human-AI Collaboration", items: ["Complementarity, Not Competition", "The Co-Creation Workflow", "Brand Voice and Human Authenticity", "Agentic AI Collaboration"] },
      { ch: "39", title: "When Experiments Fail", items: ["Anatomy of a Failed AI Pilot", "The Network Solution", "Hypothesis-Driven Experimentation"] },
      { ch: "40", title: "Reinventing the Business Model", items: ["Beyond Optimization", "The Competitive Moat Question", "The Elephants in the Room"] },
      { ch: "41", title: "The Innovation Operating System", items: ["From Project to Capability", "The Portfolio Management Mindset"] },
      { ch: "42", title: "From Pilot to Platform", items: ["Why Pilots Stay Pilots", "The Scaling Architecture"] },
      { ch: "43", title: "Anticipating What's Next", items: ["The Organizational Foresight Function", "Weak Signals and Strong Signals", "Scenario Planning for the AI Era"] },
    ],
  },
  {
    number: "VIII",
    title: "THE LEADER",
    subtitle: "Synthesis and the Road Ahead",
    chapters: "Chapters 44–49",
    summary: `Every part of this book has been about the same thing. Part VIII is where that becomes personal. Having built the full architecture of strategic AI leadership across seven parts, the book now asks: what does all of this require of the people who lead? The frameworks are complete. The question that remains is who will lead within them.

Chapter 44 synthesizes the four capabilities that define strategic AI leadership: strategic imagination, ethical courage, integrative intelligence, and human centeredness. These are not competency additions to a conventional leadership framework. They are the capabilities that the preceding seven parts have been describing from their respective angles, now named and developed as an integrated whole. Chapter 45 names the existential advantage directly: the irreplaceable value of genuinely human leadership in a world where everything that is not genuinely human is increasingly replicable.

Chapters 46 through 48 address dimensions of leadership that strategic frameworks typically omit: the inner life of the AI leader, the loneliness of leading in a role that is genuinely unprecedented, and the sustaining practices that make it possible to lead well over time. Chapter 47 addresses generational complexity. Chapter 48 addresses social responsibility: the obligations that come with leading at the frontier of a technology that is reshaping work, opportunity, and power at civilizational scale.

Chapter 49 is the personal close: a synthesis of what the book has built, a call to the three acts that distinguish leaders who shape the AI era from those who experience it, and an honest acknowledgment that the work ahead is genuinely harder to do than to read about, and genuinely worth doing.`,
    toc: [
      { ch: "44", title: "What Makes a Strategic AI Leader", items: ["The Definition Revisited", "The Four Capabilities", "Leading Without Authority at Scale"] },
      { ch: "45", title: "The Existential Advantage", items: ["Naming the Advantage", "The Integrated Roadmap", "The Last Word"] },
      { ch: "46", title: "The Inner Life of an AI Leader", items: ["The Loneliness of the AI Leader", "Sustaining Your Own Learning", "The Meaning Project"] },
      { ch: "47", title: "Leading Across Generations", items: ["The Generational Technology Landscape", "The Expertise Inversion", "Designing for Generational Inclusion"] },
      { ch: "48", title: "The AI Leader's Social Responsibility", items: ["The Reach of Your Decisions", "Voice, Influence, and the Responsibility to Speak", "The Standard You Set"] },
      { ch: "49", title: "Your Next Chapter", items: ["What You Now Know", "The Work Ahead", "Three Acts of Leadership"] },
    ],
  },
  {
    number: "IX",
    title: "THE POLITICS OF AI",
    subtitle: "Governance, Power, and the Responsibility to Act",
    chapters: "Chapters 50–55",
    summary: `Whether the extraordinary power that AI concentrates will be subject to democratic accountability or allowed to accumulate unchecked: this is the question that determines whether the AI era represents one of the great advances in human history or one of its great cautionary tales. Part IX is about why that question requires the engagement of the most capable and informed leaders of this generation, and how that engagement can take meaningful form.

Chapter 50 names the governance vacuum directly: the structural gap between the speed at which AI is advancing and the speed at which democratic institutions can respond. Chapter 51 draws the historical precedents that the current moment is ignoring: social media's twenty-year governance failure, finance's long road to accountability after catastrophic failure, and what the compounding cost of delayed AI governance will look like if the pattern repeats. Chapter 52 examines AI at war: the specific decisions being made right now about military AI applications, and what they reveal about the governance frameworks that do not yet exist.

Chapter 53 addresses the regulatory fracture: the divergence between European governance ambition and American deregulation, and what a fragmented global governance landscape means for organizations operating across jurisdictions. Chapter 54 turns to corporate responsibility: what organizations must do to protect employees and customers when governments have abdicated the governance function. Chapter 55 closes the book by addressing the strategic leader's political responsibility directly, arguing that the leaders who understand AI most clearly from operational experience are precisely the ones whose voices the governance conversation most needs, and that their absence from that conversation is a choice with consequences.

Part IX does not close the book on a comfortable note. It closes it on an honest one: that organizational excellence in AI leadership is necessary but insufficient, that the broader governance context in which organizations operate is being shaped by decisions in which capable leaders are largely absent, and that this absence is something every leader reading this book has the standing and the obligation to reconsider.`,
    toc: [
      { ch: "50", title: "The Governance Vacuum", items: ["The Structural Gap", "Why Democracy Moves Slowly and Technology Moves Fast", "The AI Acceleration Problem"] },
      { ch: "51", title: "The Precedents We Ignore", items: ["Social Media and the Twenty-Year Failure", "Finance, Tobacco, and the Long Road to Accountability", "The Compounding Cost of Delayed Governance"] },
      { ch: "52", title: "AI at War", items: ["The Pentagon Ultimatum and What It Reveals", "OpenAI and the Complexity of Corporate Compromise", "The Stakes Beyond the Contract"] },
      { ch: "53", title: "The Regulatory Fracture", items: ["The India Summit and the US Rejection of Global Governance", "Europe Leads, America Retreats, the World Fragments", "Grok, Children, and the Enforcement Gap"] },
      { ch: "54", title: "The Corporate Responsibility Imperative", items: ["When Governments Abdicate", "Protecting Employees and Customers When Laws Don't", "The Business Case for Political Engagement"] },
      { ch: "55", title: "The Strategic Leader's Political Responsibility", items: ["Why Strategic Leaders Must Enter the Political Arena", "The Forms of Political Engagement Available", "From Organizational Leader to Civic Actor"] },
    ],
  },
];

function PartCard({ part, index }: { part: typeof parts[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className="border-2 border-black bg-white">
      {/* Part Header */}
      <div className="flex items-start gap-0">
        <div className="bg-black text-primary font-heading font-bold text-3xl w-16 min-h-full flex items-center justify-center py-6 flex-shrink-0 writing-mode-vertical">
          {part.number}
        </div>
        <div className="flex-1 p-6 border-l-2 border-black">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Part {part.number}</p>
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-black mb-1">{part.title}</h3>
              <p className="text-gray-600 font-mono text-sm mb-1">{part.subtitle}</p>
              <p className="text-xs font-mono text-primary font-bold">{part.chapters}</p>
            </div>
          </div>

          {/* Summary toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black border border-black px-3 py-1.5 hover:bg-black hover:text-primary transition-all"
          >
            {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {open ? "Hide Summary" : "Read Summary"}
          </button>

          {open && (
            <div className="mt-5 space-y-4 text-gray-700 font-mono text-sm leading-relaxed border-t border-gray-200 pt-5">
              {part.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* TOC toggle */}
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="mt-2 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black border border-black px-3 py-1.5 hover:bg-black hover:text-primary transition-all"
              >
                {tocOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                {tocOpen ? "Hide Chapters" : "View Chapters"}
              </button>

              {tocOpen && (
                <div className="mt-4 space-y-4">
                  {part.toc.map((chapter) => (
                    <div key={chapter.ch} className="border-l-2 border-primary pl-4">
                      <p className="font-mono font-bold text-black text-sm uppercase">Chapter {chapter.ch}: {chapter.title}</p>
                      <ul className="mt-1 space-y-0.5">
                        {chapter.items.map((item, i) => (
                          <li key={i} className="text-xs text-gray-500 font-mono flex gap-2">
                            <span className="text-primary flex-shrink-0">{chapter.ch}.{i + 1}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Book Cover */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
              <div className="relative">
                <div className="w-56 md:w-72 aspect-[3/4] border-2 border-primary shadow-[12px_12px_0px_0px_#00E676] overflow-hidden">
                  <img
                    src="/book-cover.png"
                    alt="Our Existential Advantage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-primary text-black px-3 py-1 font-mono font-bold text-xs uppercase shadow-[4px_4px_0px_0px_#000]">
                  Coming June 2026
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1">
              <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6 shadow-[4px_4px_0px_0px_#000]">
                :: New Book
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
                Our<br />Existential<br /><span className="text-primary">Advantage</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-mono mb-3">
                Human Leadership in the Age of Intelligent Machines
              </p>
              <p className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-4">
                Enrique Rubio, Founder &amp; CEO, Hacking HR | People and Culture Strategy Institute
              </p>
              <div className="inline-flex items-center gap-2 border-2 border-primary px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest">Coming June 2026</span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-0 mb-10">
                <div className="border-2 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">9</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Parts</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">55</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Chapters</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">1</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Conviction</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 text-gray-300 font-mono italic text-lg leading-relaxed">
                "In the age of intelligent machines, the most strategic thing you can do is become more fully, more deliberately, more courageously human."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="py-20 px-4 border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs">
              :: The Thesis
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">What this book argues and why it matters now</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>This book is not about artificial intelligence. It is about people, and especially the leaders navigating this transition.</p>
              <p>More precisely, it is about what people bring to the world that AI cannot replicate, what leaders risk losing if they are not careful, and what it takes to lead with genuine judgment, ethical courage, and human care at a moment when the most powerful cognitive tools in human history are now available to every organization and individual on earth.</p>
              <p>The central argument of Our Existential Advantage is both simple and consequential: as artificial intelligence becomes more capable, the capabilities that make human leadership irreplaceable become more valuable. The judgment that integrates experience with context; the ethical reasoning that weighs competing human interests; the empathy that recognizes what data cannot capture; the strategic imagination that asks not what becomes more efficient but what becomes possible.</p>
            </div>
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>Of course, this is not optimism for its own sake. It is a claim grounded in five centuries of technological transitions, in the research on what AI can and cannot do, and in the operational reality of what organizations navigating genuine AI transformation consistently discover: the limiting factor is almost never the technology, but the quality of the human judgment, values, and leadership directing it.</p>
              <div className="border-2 border-primary bg-primary/5 p-6">
                <p className="text-primary font-mono font-bold text-xs uppercase tracking-widest mb-3">// The 90/10 Formula</p>
                <p className="text-white font-mono text-sm leading-relaxed">Ninety percent of a leader's thinking should remain theirs, ten percent AI-augmented; the doing can be shared fifty-fifty or more heavily relying on AI. The formula is a discipline against the gradual outsourcing of judgment that AI makes easy and organizational effectiveness makes dangerous.</p>
              </div>
              <p>The leaders this book is written for already sense that AI is changing something fundamental about the nature of their role. They are right. What this book argues is that the change is not a diminishment. It is an invitation to become more fully what genuine leadership has always been: the irreplaceable human contribution to outcomes that matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Parts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs">
              :: Nine Parts
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">A complete leadership architecture</p>
          </div>

          <div className="space-y-4">
            {parts.map((part, index) => (
              <PartCard key={part.number} part={part} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Book — AI for Beginners */}
      <section className="py-20 px-4 border-t-2 border-white/10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="inline-block bg-white/10 text-white px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs">
              :: Also Coming June 2026
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">

            {/* Left — book cover */}
            <div className="flex justify-center md:justify-start">
              <div
                className="overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  aspectRatio: "3/4",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="/ai-for-beginners-cover.png"
                  alt="AI for Beginners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle — identity */}
            <div>
              <div className="inline-flex items-center gap-2 border-2 border-primary px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest">Coming June 2026</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
                AI for<br /><span className="text-primary">Beginners</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-8">Enrique Rubio</p>

              <blockquote className="border-l-4 border-primary pl-6 text-gray-300 font-mono italic text-lg leading-relaxed mb-10">
                "AI is your first hire. Brief it well, and the work begins."
              </blockquote>

              {/* Stats */}
              <div className="flex flex-wrap gap-0">
                <div className="border-2 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">44</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Chapters</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">~20</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Min / Chapter</div>
                </div>
                <div className="border-2 border-l-0 border-white/20 px-6 py-4 bg-white/5">
                  <div className="text-3xl font-heading font-bold text-primary">$19</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">US Paperback</div>
                </div>
              </div>
            </div>

            {/* Right — description */}
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
              <p>You opened ChatGPT or Claude once, asked a question, glanced at the answer, and closed the tab. The interaction lasted under a minute and produced a mediocre result. You walked away thinking AI was overrated, or that it works for other people but somehow not for you.</p>
              <p>This book is built around one simple frame. AI is your first hire. Brief it the way you would brief a smart new colleague, and the work begins. Skip the briefing, and you get the generic output you have already learned to dismiss.</p>
              <p>In forty-four short chapters, you will move from curious to confident. Each chapter takes about twenty minutes and gives you something you can use the next day: a reusable brief, a sharper question, a habit that compounds across years.</p>
              <div className="border-2 border-white/10 bg-white/5 p-6">
                <p className="text-primary font-mono font-bold text-xs uppercase tracking-widest mb-3">// What this book is really about</p>
                <p className="text-white font-mono text-sm leading-relaxed">This is not a book about AI. It is a book about you, helping you complete work that used to require more manual effort, in a fraction of the time, with more of your judgment showing through.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <BookNewsletter />

      <Footer />
    </div>
  );
}

function BookNewsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-4 border-t-2 border-white/10 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto text-center">

        {/* Coming label */}
        <div className="inline-flex items-center gap-2 border-2 border-primary px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest">Coming June 2026</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4 leading-none">
          Stay Tuned for the<br /><span className="text-primary">Book Release</span>
        </h2>
        <p className="text-gray-400 font-mono text-lg mb-10 leading-relaxed">
          Be the first to know when <em>Our Existential Advantage</em> is available.<br />
          No spam. Just the release date and where to get it.
        </p>

        {status === "success" ? (
          <div className="border-2 border-primary bg-primary/10 px-8 py-8 text-center">
            <p className="text-primary font-mono font-bold text-xl mb-2">You're on the list.</p>
            <p className="text-gray-300 font-mono text-sm">We'll reach out as soon as the book is released in June 2026.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-none border-2 border-white/20 bg-white/5 text-white placeholder:text-gray-500 font-mono h-14 px-4 focus:border-primary focus:ring-0 sm:w-44 flex-shrink-0"
            />
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-none border-2 border-l-0 sm:border-l-0 border-t-0 sm:border-t-2 border-white/20 bg-white/5 text-white placeholder:text-gray-500 font-mono h-14 px-4 focus:border-primary focus:ring-0 flex-1"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="rounded-none border-2 border-primary border-l-0 bg-primary text-black font-mono font-bold uppercase tracking-widest h-14 px-8 hover:bg-primary/90 shadow-none"
            >
              {status === "loading" ? "..." : "Notify Me"}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-400 font-mono text-sm">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
