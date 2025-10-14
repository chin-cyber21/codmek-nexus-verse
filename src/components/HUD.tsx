import { motion } from "framer-motion";
import { MessageCircle, Info, Menu } from "lucide-react";
import { Button } from "./ui/button";

interface HUDProps {
  onChatClick: () => void;
  hoveredPod: string | null;
}

const HUD = ({ onChatClick, hoveredPod }: HUDProps) => {
  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-20 p-6"
      >
        <div className="glass-panel rounded-2xl p-5 flex items-center justify-between shadow-2xl border-primary/30">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold holographic-text tracking-wider">CODMEK STUDIO</h1>
            <span className="text-xs px-4 py-1.5 glass-panel rounded-full text-primary font-medium border border-primary/20">
              AI-Native Workspace
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <Info className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Info */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed bottom-0 left-0 right-0 z-20 p-6"
      >
        <div className="flex items-end justify-between">
          {/* Instructions */}
          <div className="glass-panel rounded-2xl p-5 max-w-md shadow-2xl border-primary/30">
            <p className="text-sm text-muted-foreground mb-2 font-medium">
              <strong className="text-primary">Click & Drag</strong> to explore • <strong className="text-primary">Scroll</strong> to zoom
            </p>
            {hoveredPod && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-primary font-semibold tracking-wide"
              >
                Hovering: {hoveredPod} Pod
              </motion.p>
            )}
          </div>

          {/* Chat Button - Enhanced HD version */}
          <Button
            onClick={onChatClick}
            className="glass-panel rounded-full px-10 py-7 glow-white hover:scale-105 transition-all duration-500 border-primary/40 shadow-2xl"
          >
            <MessageCircle className="h-6 w-6 mr-3 drop-shadow-lg" strokeWidth={2.5} />
            <span className="font-semibold text-base tracking-wide">Talk to AI Guide</span>
          </Button>
        </div>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      >
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.2, 0.8, 1] }}
          className="glass-panel rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold holographic-text mb-2">
            Welcome to Codmek Studio
          </h2>
          <p className="text-muted-foreground">
            Where curiosity meets creation
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HUD;
