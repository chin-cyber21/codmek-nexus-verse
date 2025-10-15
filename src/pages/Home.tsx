import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Palette, GraduationCap, Cpu, Network } from "lucide-react";
import codmekLogo from "@/assets/codmek-logo.png";

const Home = () => {
  const verticals = [
    {
      id: "research",
      title: "Codmek Research",
      tagline: "Where Curiosity Meets Creation",
      description: "Exploring the edges of artificial cognition and neural systems",
      icon: Brain,
      path: "/research",
      gradient: "from-logo-white/20 to-logo-light/10"
    },
    {
      id: "studio",
      title: "Codmek Studio",
      tagline: "Imagination Meets Engineering",
      description: "A creative sanctuary where design and AI blend seamlessly",
      icon: Palette,
      path: "/studio",
      gradient: "from-logo-light/20 to-logo-medium/10"
    },
    {
      id: "learn",
      title: "Codmek Learn",
      tagline: "Building Tomorrow's Innovators",
      description: "AI literacy, research mentorships, and innovation programs",
      icon: GraduationCap,
      path: "/learn",
      gradient: "from-logo-medium/20 to-logo-dark/10"
    },
    {
      id: "solutions",
      title: "Codmek Solutions",
      tagline: "Enterprise Intelligence",
      description: "AI systems, automation, and research-as-a-service",
      icon: Cpu,
      path: "/solutions",
      gradient: "from-logo-dark/20 to-logo-darkest/10"
    },
    {
      id: "nexus",
      title: "Codmek Nexus",
      tagline: "Where Ideas Meet Allies",
      description: "Partnership platform for research and innovation ecosystems",
      icon: Network,
      path: "/nexus",
      gradient: "from-logo-darkest/20 to-logo-white/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-darkest via-background to-logo-dark opacity-50" />
        <div className="absolute inset-0 animate-pulse-glow">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-logo-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-logo-light/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Header */}
      <motion.header 
        className="relative z-10 pt-12 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.img 
            src={codmekLogo} 
            alt="Codmek" 
            className="h-16 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 holographic-text">
            CODMEK
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 font-light tracking-wide">
            Where Innovation Becomes Reality
          </p>
        </div>
      </motion.header>

      {/* Verticals Grid */}
      <motion.main 
        className="relative z-10 container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={index === verticals.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Link to={vertical.path} className="block h-full">
                  <motion.div
                    className={`glass-panel h-full p-8 rounded-lg border border-foreground/10 bg-gradient-to-br ${vertical.gradient} relative overflow-hidden group cursor-pointer`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-soft pointer-events-none" />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <Icon className="w-12 h-12 text-foreground/80 group-hover:text-foreground transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h2 className="text-2xl font-bold mb-2 text-foreground group-hover:holographic-text transition-all duration-300">
                        {vertical.title}
                      </h2>
                      <p className="text-sm text-foreground/60 mb-3 italic">
                        {vertical.tagline}
                      </p>
                      <p className="text-foreground/70 leading-relaxed">
                        {vertical.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-6 right-6 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 py-12 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-8" />
          <p className="text-foreground/50 text-sm">
            © 2025 Codmek. Building the future of intelligence.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
