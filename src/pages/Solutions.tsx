import { motion } from "framer-motion";
import { ArrowLeft, Brain, Code, Cog, Zap, Users, Bot, Cloud, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const solutions = [
  {
    id: "ai-ml-cloud",
    icon: Brain,
    title: "AI, Machine Learning & Cloud Engineering",
    tagline: "Building intelligence that scales — from model to deployment",
    capabilities: [
      "Custom AI/ML model development (vision, NLP, multimodal)",
      "Generative AI (LLMs, copilots, chatbots, content systems)",
      "Predictive analytics, anomaly detection, and business insights",
      "Cloud model hosting & deployment (AWS / GCP / Azure)",
      "MLOps pipelines for training, inference, and monitoring",
      "Data engineering, ETL pipelines, and API orchestration",
      "Cost optimization and high-performance infrastructure tuning"
    ],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "software-dev",
    icon: Code,
    title: "AI Software Development",
    tagline: "Crafting intelligent digital experiences that think, learn, and adapt",
    capabilities: [
      "Web & mobile apps with embedded AI",
      "Scalable APIs, model endpoints, and microservices",
      "AI-driven UI/UX personalization and adaptive design",
      "Integration of backend intelligence in business tools"
    ],
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: "automation",
    icon: Cog,
    title: "Business Process Automation",
    tagline: "Reimagining workflows through automation and intelligence",
    capabilities: [
      "Robotic Process Automation (RPA)",
      "Intelligent document and data automation",
      "Multi-agent process optimization",
      "AI integrations for ERP, CRM, HRMS, and support systems"
    ],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "rad",
    icon: Zap,
    title: "Rapid Application Development",
    tagline: "Speed meets intelligence — build, test, and deploy in record time",
    capabilities: [
      "AI-powered MVP & prototype development",
      "Low-code/no-code integration with custom AI modules",
      "API sandbox setup for fast experimentation",
      "End-to-end rapid deployment lifecycle"
    ],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "consulting",
    icon: Users,
    title: "Consulting & Advisory",
    tagline: "Guiding businesses through their AI transformation journey",
    capabilities: [
      "AI readiness assessment & adoption roadmap",
      "Architecture design & technical strategy",
      "AI ethics, compliance, and responsible deployment",
      "Corporate upskilling & training workshops"
    ],
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    tagline: "Engineering the bridge between digital intelligence and physical autonomy",
    capabilities: [
      "AI-driven robotics (autonomous drones, bots, and agents)",
      "Computer vision integration (object detection, SLAM, tracking)",
      "Edge AI for real-time decision-making",
      "Mechatronic design with AI control loops",
      "Neural and agentic decision frameworks for robotics"
    ],
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: "cloud-infra",
    icon: Cloud,
    title: "Data & Cloud Infrastructure",
    tagline: "Scalable foundations for enterprise AI systems",
    capabilities: [
      "Cloud model hosting (AWS/GCP/Azure)",
      "MLOps pipelines for training & inference",
      "Data engineering and API orchestration",
      "Cost optimization & performance tuning"
    ],
    color: "from-slate-500/20 to-zinc-500/20"
  }
];

const processSteps = [
  { 
    title: "Discover", 
    description: "We dive deep into your business challenges, objectives, and technical landscape.",
    icon: "🔍"
  },
  { 
    title: "Design", 
    description: "Our architects craft tailored solutions that align with your strategic vision.",
    icon: "🎨"
  },
  { 
    title: "Develop", 
    description: "Agile development cycles bring intelligent systems to life with precision.",
    icon: "⚡"
  },
  { 
    title: "Deploy", 
    description: "Seamless integration into your infrastructure with comprehensive support.",
    icon: "🚀"
  },
  { 
    title: "Evolve", 
    description: "Continuous optimization and scaling as your needs grow and transform.",
    icon: "🔄"
  }
];

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Global Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 holographic-text">
              Codmek Solutions
            </h1>
            <p className="text-3xl md:text-4xl font-light mb-6 text-foreground/80">
              Intelligence that delivers.
            </p>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto mb-12">
              Enterprise-grade AI systems that transform businesses. 
              From intelligent automation to autonomous robotics, 
              we build solutions that scale with your ambition.
            </p>

            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="gap-2">
                Explore Solutions
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions Portfolio</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Comprehensive AI capabilities engineered for enterprise excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedSolution(solution)}
                  className="glass-panel p-8 rounded-xl cursor-pointer group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-foreground/80" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:holographic-text transition-all duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-foreground/60 mb-4 text-sm leading-relaxed">
                      {solution.tagline}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-foreground/50 group-hover:text-foreground/80 transition-colors">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-8 bg-foreground/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Delivery Process</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              A proven methodology that transforms vision into reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full glass-panel flex items-center justify-center text-4xl mb-6 relative z-10 bg-background">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-16 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-pink-500/10 opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
                Partner with Codmek to build intelligent systems that drive measurable results. 
                Let's discuss your vision.
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="gap-2">
                  Schedule a Consultation
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Link to="/nexus">
                  <Button size="lg" variant="outline">
                    Explore Partnerships
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Detail Modal */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedSolution && (
            <>
              <DialogHeader>
                <div className="w-16 h-16 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
                  <selectedSolution.icon className="w-8 h-8 text-foreground/80" />
                </div>
                <DialogTitle className="text-3xl">{selectedSolution.title}</DialogTitle>
                <DialogDescription className="text-lg pt-2">
                  {selectedSolution.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground/90">Core Capabilities</h4>
                  <div className="space-y-3">
                    {selectedSolution.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground/70">{capability}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-foreground/10">
                  <Button className="w-full gap-2">
                    Request More Information
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Solutions;
