import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Cpu, Wrench, Zap, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

interface PodOverlayProps {
  podName: string | null;
  onClose: () => void;
}

const podContent: Record<string, {
  icon: any;
  title: string;
  description: string;
  features: string[];
  color: string;
  locked?: boolean;
}> = {
  Reception: {
    icon: Sparkles,
    title: "Reception Desk",
    description: "Welcome to Codmek Studio. Your AI guide is ready to help you navigate our workspace.",
    features: ["AI Receptionist", "Guided Tours", "Quick Navigation"],
    color: "white",
  },
  Research: {
    icon: Cpu,
    title: "Research Pod",
    description: "Pioneering AGI, Cognitive Systems, and Digital Twins.",
    features: ["AGI Development", "Neural Networks", "Cognitive Computing"],
    color: "white",
  },
  Workshop: {
    icon: Wrench,
    title: "Workshop Pod",
    description: "Prototyping intelligent systems. Enter the build zone.",
    features: ["Rapid Prototyping", "System Testing", "Integration Lab"],
    color: "white",
  },
  Nexus: {
    icon: Zap,
    title: "Nexus Portal",
    description: "Collaborate with Codmek. Portal coming soon.",
    features: ["Team Collaboration", "Project Sync", "Resource Sharing"],
    color: "white",
    locked: true,
  },
  Learn: {
    icon: BookOpen,
    title: "Learn Terminal",
    description: "Learn, Build, and Grow with Codmek.",
    features: ["Interactive Courses", "Code Labs", "Certifications"],
    color: "white",
    locked: true,
  },
};

const PodOverlay = ({ podName, onClose }: PodOverlayProps) => {
  if (!podName || !(podName in podContent)) return null;

  const content = podContent[podName as keyof typeof podContent];
  const Icon = content.icon;
  const glowClass = `glow-${content.color}`;

  return (
    <AnimatePresence>
      {podName && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-md z-30"
          />

          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-40"
          >
            <div className={`glass-panel rounded-3xl p-8 ${glowClass}`}>
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 hover:bg-primary/20"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-2xl glass-panel ${glowClass}`}>
                  <Icon className="h-12 w-12 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h2 className="text-3xl font-bold text-center holographic-text mb-3">
                {content.title}
              </h2>
              
              <p className="text-center text-muted-foreground mb-6">
                {content.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {content.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 glass-panel p-3 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              {content.locked ? (
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              ) : (
                <Button className="w-full bg-primary hover:bg-primary/80">
                  Explore {content.title}
                </Button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PodOverlay;
