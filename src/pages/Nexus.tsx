import { motion } from "framer-motion";
import { ArrowLeft, Network, Users, GitBranch, Globe, Award, Sparkles, Building2, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEO
        title="Nexus"
        description="Codmek Nexus — global partnership hub for open-source collaboration, academic research, government AI, and cross-domain innovation with 150+ active contributors worldwide."
        path="/nexus"
        keywords="AI partnerships, open source AI, academic collaboration, innovation hub, Codmek Nexus, AI community, government AI, research partnerships"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Codmek Nexus — Global AI Partnership Hub",
          "url": "https://codmek.com/nexus",
          "description": "A portal for innovators, researchers, and builders to collaborate on AI projects and drive open-source innovation.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Codmek Nexus",
            "parentOrganization": { "@type": "Organization", "name": "Codmek Softech" }
          }
        }}
      />
      {/* Global Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 25s linear infinite'
          }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
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
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Network className="w-20 h-20 mx-auto text-primary glow-soft" />
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 holographic-text">
              Codmek Nexus
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-foreground/80 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Collaborate. Co-create. Connect.
            </motion.p>
            
            <motion.p 
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A portal where innovators, researchers, and builders converge to shape the future of intelligence.
            </motion.p>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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
                className="glass-panel p-8 cursor-pointer group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/60 relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="w-14 h-14 text-primary/80 group-hover:text-primary transition-colors relative z-10" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:holographic-text transition-all duration-300 relative">
                  {hub.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 font-light italic relative">{hub.tagline}</p>
                
                <motion.div 
                  className="flex items-center gap-2 text-primary/70 text-xs font-mono group-hover:text-primary transition-colors relative"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <span>EXPLORE</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
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
          className="glass-panel p-16 text-center border border-primary/20"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-block mb-8"
          >
            <Globe className="w-20 h-20 mx-auto text-primary glow-soft" />
          </motion.div>
          <h3 className="text-4xl font-bold mb-6 holographic-text">A Global Movement</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto mb-8">
            From solo developers to enterprise teams, from university labs to government institutions — 
            Codmek Nexus is where boundaries dissolve and collective intelligence emerges.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "150+", label: "Active Contributors", delay: 0 },
              { value: "40+", label: "Research Partners", delay: 0.1 },
              { value: "25+", label: "Countries", delay: 0.2 },
              { value: "12", label: "Active Projects", delay: 0.3 }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="glass-panel p-8 border border-border/30 hover:border-primary/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold holographic-text mb-3">{stat.value}</div>
                <div className="text-sm text-foreground/60 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-8 holographic-text">
            Ready to Connect?
          </h2>
          <p className="text-foreground/70 mb-12 text-xl leading-relaxed">
            Whether you're a researcher, developer, partner, or visionary — there's a place for you in the Nexus.
          </p>
          <motion.a
            href="mailto:contact@codmek.com?subject=Nexus%20Partnership%20Inquiry"
            className="inline-block glass-panel px-10 py-5 text-lg font-semibold border border-primary/50 hover:border-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Join the Network
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
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
                  <a
                    href={`mailto:contact@codmek.com?subject=${encodeURIComponent(`Learn More: ${hubs.find(h => h.id === selectedHub)?.title || 'Nexus'}`)}`}
                    className="flex-1 glass-panel px-6 py-3 font-semibold hover:scale-105 transition-transform border border-primary/50 text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:contact@codmek.com?subject=${encodeURIComponent(`Get Involved: ${hubs.find(h => h.id === selectedHub)?.title || 'Nexus'}`)}`}
                    className="flex-1 bg-primary/10 px-6 py-3 font-semibold hover:bg-primary/20 transition-colors rounded border border-primary/30 text-center"
                  >
                    Get Involved
                  </a>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Nexus;
