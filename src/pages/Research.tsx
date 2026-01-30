import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Brain, Eye, Dna, Bot, Network, Scan } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ResearchDivision {
  id: string;
  icon: typeof Brain;
  title: string;
  tagline: string;
  focusAreas: string[];
}

const researchDivisions: ResearchDivision[] = [
  {
    id: "agi",
    icon: Brain,
    title: "Artificial General Intelligence & Cognitive Systems",
    tagline: "Building architectures that learn, reason, and evolve.",
    focusAreas: [
      "Self-learning frameworks and cognitive loops",
      "Adaptive neural architecture search",
      "Cognitive feedback and meta-reasoning",
      "Synthetic consciousness research"
    ]
  },
  {
    id: "neural",
    icon: Eye,
    title: "Neural Control & Interpretability",
    tagline: "Understanding how intelligence thinks.",
    focusAreas: [
      "Layer-level neuron tracing and weight visualization",
      "Explainable latent space mapping",
      "Influence attribution and controllable generative flow",
      "Reinforcement-based interpretability studies"
    ]
  },
  {
    id: "biology",
    icon: Dna,
    title: "Computational Biology & Digital Twins",
    tagline: "Simulating life through computation.",
    focusAreas: [
      "Genome modeling and cell structure simulations",
      "Alzheimer's and neuro-degenerative pattern recognition",
      "Organ-level digital twin creation",
      "Predictive biological AI systems"
    ]
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Autonomous Systems & Robotics",
    tagline: "Intelligence that moves.",
    focusAreas: [
      "Vision-based navigation and drone cognition",
      "SLAM and field-level self-mapping",
      "Humanoid robotics with adaptive decision models",
      "Contextual multi-agent robotics"
    ]
  },
  {
    id: "graph",
    icon: Network,
    title: "Ego Networks & Graph Intelligence",
    tagline: "Mapping the invisible relationships between data and behavior.",
    focusAreas: [
      "Ego-centric GNN modeling",
      "Knowledge graph formation and reasoning",
      "Relational context learning",
      "Distributed cognition systems"
    ]
  },
  {
    id: "vision",
    icon: Scan,
    title: "3D Computer Vision & Medical Imaging",
    tagline: "Teaching AI to perceive, reconstruct, and heal.",
    focusAreas: [
      "3D reconstruction from MRI/CT scans",
      "Anatomical surface and distance measurement",
      "Surgical model simulation",
      "Vision-based robotic assistance"
    ]
  }
];

const Research = () => {
  const [selectedDivision, setSelectedDivision] = useState<ResearchDivision | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />
      
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors glass-panel px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle at center, hsl(var(--foreground) / 0.03) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 holographic-text">
              Codmek Research
            </h1>
            <p className="text-3xl md:text-4xl text-foreground/80 font-light mb-8">
              Where Curiosity Meets Creation
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            At Codmek, research isn't a department — it's the pulse of everything we build.
            From cognitive architectures to digital twins and self-evolving AI,
            we're shaping the frontier of artificial intelligence and embodied cognition.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={() => document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-panel px-8 py-4 text-lg hover:glow-soft transition-all duration-300"
          >
            Explore Our Research Divisions →
          </motion.button>
        </motion.div>
      </section>

      {/* Research Divisions Grid */}
      <section id="divisions" className="py-32 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-center mb-16 holographic-text">
            Research Divisions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchDivisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedDivision(division)}
                  className="glass-panel p-8 cursor-pointer group hover:glow-soft transition-all duration-300"
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-foreground/70 group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:holographic-text transition-all">
                    {division.title}
                  </h3>
                  <p className="text-foreground/60 italic">
                    "{division.tagline}"
                  </p>
                  <div className="mt-4 text-sm text-foreground/40">
                    Click to explore →
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Research in Motion */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-foreground/5 to-background" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.p
            className="text-4xl md:text-5xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We don't just train models.<br />
            <span className="holographic-text font-bold">
              We craft minds that think, adapt, and evolve.
            </span>
          </motion.p>
        </motion.div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 holographic-text">
            The Codmek Research Lifecycle
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Discover",
                description: "Theoretical exploration, hypothesis testing",
                icon: "🔬"
              },
              {
                phase: "Develop",
                description: "Experimental builds, simulation, and field prototypes",
                icon: "⚡"
              },
              {
                phase: "Deploy",
                description: "Integration into Codmek's in-house or partner ecosystems",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-panel p-8 text-center hover:glow-soft transition-all duration-300">
                  <div className="text-6xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 holographic-text">
                    {index + 1}. {step.phase}
                  </h3>
                  <p className="text-foreground/70">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-foreground/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro */}
      <section className="py-32 px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-4xl font-light mb-12 leading-relaxed">
            Codmek Research isn't about predicting the future —<br />
            <span className="holographic-text font-bold">
              it's about building it, one discovery at a time.
            </span>
          </p>
          <Link
            to="/nexus"
            className="inline-block glass-panel px-10 py-5 text-lg hover:glow-soft transition-all duration-300"
          >
            Partner with Codmek Labs →
          </Link>
        </motion.div>
      </section>

      {/* Division Modal */}
      <Dialog open={!!selectedDivision} onOpenChange={() => setSelectedDivision(null)}>
        <DialogContent className="max-w-3xl glass-panel border-foreground/20">
          {selectedDivision && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl holographic-text flex items-center gap-4">
                  {(() => {
                    const Icon = selectedDivision.icon;
                    return <Icon className="w-10 h-10" />;
                  })()}
                  {selectedDivision.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6">
                <p className="text-xl italic text-foreground/70 mb-8">
                  "{selectedDivision.tagline}"
                </p>
                <h4 className="text-lg font-bold mb-4">Focus Areas:</h4>
                <ul className="space-y-3">
                  {selectedDivision.focusAreas.map((area, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className="text-foreground/50 mt-1">▸</span>
                      {area}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Research;
