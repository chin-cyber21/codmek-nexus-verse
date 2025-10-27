import { motion } from "framer-motion";
import { ArrowLeft, Lock, Sparkles, Grid3x3, Brain, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Enhanced Mysterious Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced animated grid background */}
        <div className="absolute inset-0 opacity-12">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1.5px, transparent 1.5px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }} />
          
          {/* Scanline effect */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(0deg, transparent 50%, hsl(var(--primary) / 0.03) 50%)',
              backgroundSize: '100% 4px',
              animation: 'grid-move 8s linear infinite'
            }}
          />
        </div>

        {/* Enhanced mysterious orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Enhanced mysterious lock icon with glow */}
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-10 relative"
            >
              {/* Pulsing glow ring */}
              <motion.div
                className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Lock className="w-28 h-28 text-primary relative z-10" style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))' }} />
            </motion.div>

            <motion.h1 
              className="text-7xl md:text-8xl font-bold mb-10 holographic-text"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Codmek Learn
            </motion.h1>
            
            <motion.p 
              className="text-3xl md:text-4xl text-foreground/80 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Learn. Build. Evolve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="max-w-2xl mx-auto space-y-4"
            >
              <p className="text-xl text-foreground/70 leading-relaxed">
                A knowledge grid where curiosity meets capability. 
              </p>
              <p className="text-foreground/40 text-base font-mono">
                [ SOMETHING EXTRAORDINARY IS BEING FORGED... ]
              </p>
            </motion.div>
          </motion.div>

          {/* Mysterious feature hints */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {[
              { icon: Brain, label: "AI Mastery" },
              { icon: Grid3x3, label: "Knowledge Grid" },
              { icon: Zap, label: "Rapid Evolution" },
              { icon: Sparkles, label: "Community Power" },
              { icon: Eye, label: "Vision Unlock" },
              { icon: Lock, label: "Access Granted Soon" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + (idx * 0.1) }}
                  className="glass-panel p-8 border border-border/30 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                  
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-10 h-10 mx-auto text-primary/80 group-hover:text-primary transition-all relative z-10" />
                  </motion.div>
                  
                  <div className="text-sm text-foreground/60 font-mono group-hover:text-foreground/80 transition-colors relative">
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Enhanced bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <motion.div 
          className="absolute bottom-0 left-0 h-px bg-primary/80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </section>

      {/* Enhanced Encrypted Message Section */}
      <section className="py-32 px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel p-16 text-center border border-primary/30 relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-block mb-8 relative"
          >
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
            <Grid3x3 className="w-20 h-20 mx-auto text-primary relative z-10" />
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-8 holographic-text">
            The Grid Awaits
          </h3>
          <p className="text-foreground/70 mb-12 leading-relaxed text-lg max-w-3xl mx-auto">
            A gamified learning experience unlike anything before. 
            Bootcamps that challenge. Hackathons that inspire. 
            Mentorships that transform. Certificates that prove mastery.
          </p>
          <div className="space-y-5 text-foreground/50 font-mono text-base max-w-2xl mx-auto">
            <motion.div 
              className="opacity-80 flex items-center justify-between border-l-2 border-primary/40 pl-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <span>BOOTCAMPS INITIALIZING...</span>
              <span className="text-primary/60">███████░░</span>
            </motion.div>
            <motion.div 
              className="opacity-70 flex items-center justify-between border-l-2 border-primary/30 pl-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <span>COMMUNITY PROTOCOLS LOADING...</span>
              <span className="text-primary/60">████████░</span>
            </motion.div>
            <motion.div 
              className="opacity-60 flex items-center justify-between border-l-2 border-primary/20 pl-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <span>KNOWLEDGE NODES CONNECTING...</span>
              <span className="text-primary/60">██████░░░</span>
            </motion.div>
            <motion.div 
              className="opacity-50 flex items-center justify-between border-l-2 border-primary/10 pl-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <span>EVOLUTION ENGINE CALIBRATING...</span>
              <span className="text-primary/60">█████░░░░</span>
            </motion.div>
          </div>
          
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 glass-panel inline-block px-8 py-4 border border-primary/40"
          >
            <span className="text-primary font-bold text-xl tracking-wider">
              ACCESS GRANTED: Q2 2025
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Mystery Quote */}
      <section className="py-32 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-12 border border-primary/20">
            <div className="mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8" />
              <blockquote className="text-2xl md:text-4xl font-light text-foreground/70 italic leading-relaxed">
                "The best way to predict the future is to build it.
                <br />
                <span className="text-foreground/60">
                  The best way to build it? Learn from those already shaping it."
                </span>
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-8" />
            </div>
            <motion.div 
              className="text-primary/80 font-mono text-sm tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              — CODMEK LEARN MANIFESTO
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Learn;
