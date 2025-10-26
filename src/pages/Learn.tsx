import { motion } from "framer-motion";
import { ArrowLeft, Lock, Sparkles, Grid3x3, Brain, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Mysterious Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        {/* Mysterious orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
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
            {/* Mysterious lock icon with glow */}
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Lock className="w-24 h-24 text-primary glow-soft" />
            </motion.div>

            <h1 className="text-7xl md:text-8xl font-bold mb-8 holographic-text">
              Codmek Learn
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-foreground/80 mb-6"
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
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg text-foreground/60 mb-12">
                A knowledge grid where curiosity meets capability. 
                <br />
                <span className="text-foreground/40 text-sm">Something extraordinary is being forged...</span>
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
                  className="glass-panel p-6 border border-border/30 hover:border-primary/50 transition-all group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all" />
                  <div className="text-sm text-foreground/60 font-mono">{item.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </section>

      {/* Encrypted Message Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel p-12 text-center border border-primary/20"
        >
          <Grid3x3 className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse-glow" />
          <h3 className="text-3xl font-bold mb-6 holographic-text">
            The Grid Awaits
          </h3>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            A gamified learning experience unlike anything before. 
            Bootcamps that challenge. Hackathons that inspire. 
            Mentorships that transform. Certificates that prove mastery.
          </p>
          <div className="space-y-4 text-foreground/50 font-mono text-sm">
            <div className="opacity-70">█████████ BOOTCAMPS INITIALIZING...</div>
            <div className="opacity-60">█████████ COMMUNITY PROTOCOLS LOADING...</div>
            <div className="opacity-50">█████████ KNOWLEDGE NODES CONNECTING...</div>
            <div className="opacity-40">█████████ EVOLUTION ENGINE CALIBRATING...</div>
          </div>
          
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 text-primary/80 font-semibold text-lg"
          >
            ACCESS GRANTED: Q2 2025
          </motion.div>
        </motion.div>
      </section>

      {/* Mystery Quote */}
      <section className="py-24 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-foreground/60 italic mb-6">
            "The best way to predict the future is to build it.
            <br />
            The best way to build it? Learn from those already shaping it."
          </blockquote>
          <div className="text-primary/70 font-mono text-sm">— Codmek Learn Manifesto</div>
        </motion.div>
      </section>
    </div>
  );
};

export default Learn;
