import { motion } from "framer-motion";
import { ArrowLeft, Network, Users, GitBranch, Globe, Award, Sparkles, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Nexus = () => {
  const [selectedHub, setSelectedHub] = useState<string | null>(null);

  const hubs = [
    {
      id: "opensource",
      icon: GitBranch,
      title: "Open Source",
      tagline: "Building in the open",
      description: "Join our open-source ecosystem. Contribute to cutting-edge AI tools, frameworks, and research datasets that power innovation worldwide.",
      initiatives: [
        "Open AI model repositories",
        "Community-driven toolkits",
        "Research dataset contributions",
        "Developer documentation sprints"
      ]
    },
    {
      id: "partners",
      icon: Users,
      title: "Partner Network",
      tagline: "Freelancers & collaborators",
      description: "Connect with Codmek as a freelance contributor, technical partner, or solution integrator. Let's build the future together.",
      initiatives: [
        "Freelance AI engineering projects",
        "Partnership programs",
        "Revenue-sharing models",
        "Co-creation opportunities"
      ]
    },
    {
      id: "research",
      icon: GraduationCap,
      title: "Research Collaborations",
      tagline: "Universities & startups",
      description: "Academic partnerships, joint research programs, and startup accelerator initiatives driving breakthrough discoveries.",
      initiatives: [
        "University research grants",
        "Startup co-innovation labs",
        "PhD collaboration programs",
        "Shared publication initiatives"
      ]
    },
    {
      id: "government",
      icon: Building2,
      title: "Government & Public Sector",
      tagline: "Serving the greater good",
      description: "Strategic partnerships with government bodies and public institutions to deploy AI for societal impact.",
      initiatives: [
        "Public policy AI advisory",
        "Smart city integrations",
        "Healthcare system automation",
        "Education transformation programs"
      ]
    },
    {
      id: "innovation",
      icon: Sparkles,
      title: "Cross-Lab Innovation",
      tagline: "Boundary-less creation",
      description: "Interdisciplinary innovation programs connecting researchers, engineers, and visionaries across domains.",
      initiatives: [
        "Multi-domain hackathons",
        "Innovation challenges",
        "Cross-vertical project teams",
        "Experimental prototyping grants"
      ]
    },
    {
      id: "community",
      icon: Award,
      title: "Contributor Recognition",
      tagline: "Celebrating builders",
      description: "Recognition programs, leaderboards, and rewards for active contributors to the Codmek ecosystem.",
      initiatives: [
        "Monthly contributor awards",
        "Open-source leaderboards",
        "Project showcase gallery",
        "Annual innovation summit invites"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated network background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Network className="w-20 h-20 mx-auto mb-6 text-primary animate-pulse-glow" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6 holographic-text">
              Codmek Nexus
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-4">
              Collaborate. Co-create. Connect.
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A portal where innovators, researchers, and builders converge to shape the future of intelligence.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </section>

      {/* Collaboration Hubs Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 holographic-text">The Network</h2>
          <p className="text-foreground/70 text-lg">Six pillars of collaboration, infinite possibilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, index) => {
            const Icon = hub.icon;
            return (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedHub(hub.id)}
                className="glass-panel p-6 cursor-pointer group hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/50"
              >
                <Icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {hub.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">{hub.tagline}</p>
                <div className="text-primary/70 text-xs font-mono">EXPLORE →</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Global Connection Visual */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 text-center"
        >
          <Globe className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse-glow" />
          <h3 className="text-3xl font-bold mb-4">A Global Movement</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto mb-8">
            From solo developers to enterprise teams, from university labs to government institutions — 
            Codmek Nexus is where boundaries dissolve and collective intelligence emerges.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="glass-panel p-6">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-foreground/60">Active Contributors</div>
            </div>
            <div className="glass-panel p-6">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-foreground/60">Research Partners</div>
            </div>
            <div className="glass-panel p-6">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-foreground/60">Countries</div>
            </div>
            <div className="glass-panel p-6">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-foreground/60">Active Projects</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 holographic-text">
            Ready to Connect?
          </h2>
          <p className="text-foreground/70 mb-8 text-lg">
            Whether you're a researcher, developer, partner, or visionary — there's a place for you in the Nexus.
          </p>
          <button className="glass-panel px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform border border-primary/50 hover:border-primary">
            Join the Network →
          </button>
        </motion.div>
      </section>

      {/* Hub Details Modal */}
      <Dialog open={!!selectedHub} onOpenChange={() => setSelectedHub(null)}>
        <DialogContent className="glass-panel max-w-2xl border-primary/30">
          {selectedHub && (() => {
            const hub = hubs.find(h => h.id === selectedHub)!;
            const Icon = hub.icon;
            return (
              <>
                <DialogHeader>
                  <Icon className="w-12 h-12 mb-4 text-primary" />
                  <DialogTitle className="text-3xl holographic-text">{hub.title}</DialogTitle>
                  <DialogDescription className="text-foreground/70 text-base">
                    {hub.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 text-foreground/90">Current Initiatives</h4>
                  <ul className="space-y-3">
                    {hub.initiatives.map((initiative, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="flex-1 glass-panel px-6 py-3 font-semibold hover:scale-105 transition-transform border border-primary/50">
                    Learn More
                  </button>
                  <button className="flex-1 bg-primary/10 px-6 py-3 font-semibold hover:bg-primary/20 transition-colors rounded border border-primary/30">
                    Get Involved
                  </button>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Nexus;
