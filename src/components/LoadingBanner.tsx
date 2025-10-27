import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import codmekLogo from "@/assets/codmek-logo.png";

interface LoadingBannerProps {
  onComplete: () => void;
}

export const LoadingBanner = ({ onComplete }: LoadingBannerProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"loading" | "reveal" | "complete">("loading");

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("reveal"), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === "reveal") {
      setTimeout(() => {
        setStage("complete");
        setTimeout(onComplete, 800);
      }, 1500);
    }
  }, [stage, onComplete]);

  return (
    <AnimatePresence>
      {stage !== "complete" && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--primary) / 0.3) 2px, transparent 2px),
                  linear-gradient(90deg, hsl(var(--primary) / 0.3) 2px, transparent 2px)
                `,
                backgroundSize: '80px 80px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '-80px -80px'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Glowing orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Logo with dramatic entrance */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ 
                scale: stage === "reveal" ? 1.2 : 1,
                opacity: 1,
                rotateY: 0,
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-12"
            >
              <motion.img
                src={codmekLogo}
                alt="Codmek"
                className="h-32 mx-auto"
                style={{
                  filter: 'drop-shadow(0 0 40px hsl(var(--primary) / 0.6))',
                }}
                animate={{
                  filter: [
                    'drop-shadow(0 0 40px hsl(var(--primary) / 0.6))',
                    'drop-shadow(0 0 60px hsl(var(--primary) / 0.9))',
                    'drop-shadow(0 0 40px hsl(var(--primary) / 0.6))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Text animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-7xl font-bold mb-6 holographic-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                CODMEK
              </motion.h1>

              {stage === "loading" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-6"
                >
                  {/* Loading bar */}
                  <div className="w-80 mx-auto">
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        style={{
                          boxShadow: '0 0 20px hsl(var(--primary) / 0.6)',
                        }}
                      />
                    </div>
                    <motion.p
                      className="text-foreground/60 text-sm font-mono mt-4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      INITIALIZING INTELLIGENCE... {progress}%
                    </motion.p>
                  </div>

                  {/* Loading messages */}
                  <motion.div
                    className="text-foreground/40 text-xs font-mono space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {progress > 20 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        ▸ Neural networks loaded...
                      </motion.div>
                    )}
                    {progress > 40 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        ▸ Cognitive systems online...
                      </motion.div>
                    )}
                    {progress > 60 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        ▸ Holographic interface calibrated...
                      </motion.div>
                    )}
                    {progress > 80 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        ▸ Reality augmentation ready...
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              )}

              {stage === "reveal" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl text-primary font-light tracking-wider"
                >
                  WELCOME TO THE FUTURE
                </motion.div>
              )}
            </motion.div>

            {/* Particle effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/60 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/30" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/30" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
