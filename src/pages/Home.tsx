import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Palette, GraduationCap, Cpu, Network, ArrowRight, Sparkles } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import codmekLogo from "@/assets/codmek-logo.png";
import { LoadingBanner } from "@/components/LoadingBanner";
import { Scene3D } from "@/components/Scene3D";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
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
    <>
      {/* Loading Banner */}
      {!showContent && <LoadingBanner onComplete={() => setShowContent(true)} />}
      
      {showContent && (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 30s linear infinite'
          }} />
        </div>
        
        {/* Multiple glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Enhanced Hero Header with Parallax */}
      <motion.header 
        className="relative z-10 pt-20 pb-16 min-h-[70vh] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.img 
              src={codmekLogo} 
              alt="Codmek" 
              className="h-24 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              animate={{ 
                filter: [
                  "drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                  "drop-shadow(0 0 40px rgba(255,255,255,0.6))",
                  "drop-shadow(0 0 30px rgba(255,255,255,0.4))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Sparkles className="w-6 h-6 mx-auto text-primary/70 animate-pulse-glow" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 holographic-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CODMEK
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-foreground/80 font-light tracking-wide mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where Innovation Becomes Reality
          </motion.p>
          
          <motion.p
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Pioneering the future of artificial intelligence through research, creativity, and enterprise solutions
          </motion.p>

          {/* Interactive scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 1, delay: 1.2 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <span className="text-foreground/40 text-xs font-mono tracking-wider">
              SCROLL TO EXPLORE
            </span>
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Verticals Grid */}
      <motion.main 
        className="relative z-10 container mx-auto px-6 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 holographic-text">Our Divisions</h2>
          <p className="text-foreground/60 text-lg">Five pillars of innovation, one unified vision</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={index === verticals.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Link to={vertical.path} className="block h-full">
                  <motion.div
                    className={`glass-panel h-full p-8 rounded-lg border border-border/50 bg-gradient-to-br ${vertical.gradient} relative overflow-hidden group cursor-pointer`}
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Animated border glow */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 border-2 border-primary/40 rounded-lg" 
                        style={{
                          boxShadow: '0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.1)'
                        }}
                      />
                    </motion.div>
                    
                    {/* Background glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    
                    {/* Scan line effect on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      initial={{ top: "-100%" }}
                      whileHover={{
                        top: "100%",
                        transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </motion.div>
                    
                    {/* Icon with enhanced animation */}
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="w-14 h-14 text-primary/80 group-hover:text-primary transition-colors duration-300 relative z-10" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative space-y-3">
                      <h2 className="text-2xl font-bold text-foreground group-hover:holographic-text transition-all duration-300">
                        {vertical.title}
                      </h2>
                      <p className="text-sm text-foreground/60 italic font-light">
                        {vertical.tagline}
                      </p>
                      <p className="text-foreground/70 leading-relaxed">
                        {vertical.description}
                      </p>
                    </div>

                    {/* Enhanced arrow indicator */}
                    <motion.div 
                      className="absolute bottom-6 right-6 flex items-center gap-2 text-foreground/40 group-hover:text-primary transition-all duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">ENTER</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.main>

      {/* Enhanced Footer */}
      <motion.footer 
        className="relative z-10 py-16 mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12" />
            
            <div className="text-center space-y-6">
              <motion.p 
                className="text-foreground/70 text-lg italic max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                "The best way to predict the future is to build it."
              </motion.p>
              
              <motion.p 
                className="text-foreground/50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                © 2025 Codmek. Building the future of intelligence.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
      )}
    </>
  );
};

export default Home;
