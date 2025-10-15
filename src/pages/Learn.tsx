import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 holographic-text">Codmek Learn</h1>
        <p className="text-xl text-foreground/70">Building Tomorrow's Innovators</p>
        <p className="mt-8 text-foreground/50">Coming soon...</p>
      </motion.div>
    </div>
  );
};

export default Learn;
