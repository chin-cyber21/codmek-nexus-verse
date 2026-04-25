import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden px-6">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Codmek Softech to continue exploring AI research, solutions, and innovation."
        path="/404"
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.4) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground) / 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            animation: "grid-move 30s linear infinite",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl"
      >
        <motion.h1
          className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none holographic-text"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-light text-foreground/80 mb-4 -mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Signal Lost in the Network
        </motion.p>

        <motion.p
          className="text-foreground/50 text-base md:text-lg mb-10 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The page you're looking for doesn't exist or has moved.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <HomeIcon className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link to="/contact">
              <ArrowLeft className="w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
