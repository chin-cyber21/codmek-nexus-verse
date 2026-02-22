import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Home, Beaker, GraduationCap, Lightbulb, Network, Palette, Menu, X, Mail } from "lucide-react";
import { Button } from "./ui/button";
import codmekLogo from "@/assets/codmek-icon.png";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/studio", label: "Studio", icon: Palette },
  { path: "/research", label: "Research", icon: Beaker },
  { path: "/learn", label: "Learn", icon: GraduationCap },
  { path: "/solutions", label: "Solutions", icon: Lightbulb },
  { path: "/nexus", label: "Nexus", icon: Network },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show immediately on non-home pages, after scroll on home
      setIsVisible(isHomePage ? scrollY > 100 : true);
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
          >
            <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 border border-primary/20 shadow-2xl">
              <Link to="/" className="mr-1">
                <img src={codmekLogo} alt="Codmek" className="h-7 w-7 rounded-full object-cover" />
              </Link>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300
                        ${active 
                          ? "bg-primary/20 text-primary" 
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                      {active && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 rounded-full border border-primary/40 glow-soft"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground flex items-center gap-2 text-sm font-medium ml-1 glow-soft"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Contact Us
                </motion.div>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-6 right-6 z-50 md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-panel rounded-full h-12 w-12 border border-primary/20 shadow-xl"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 right-6 z-50 md:hidden"
          >
            <div className="glass-panel rounded-2xl p-4 border border-primary/20 shadow-2xl min-w-[200px]">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  
                  return (
                    <Link key={item.path} to={item.path}>
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        className={`
                          px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300
                          ${active 
                            ? "bg-primary/20 text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </motion.div>
                    </Link>
                  );
                })}
                <Link to="/contact">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 rounded-xl flex items-center gap-3 bg-primary text-primary-foreground font-medium mt-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Contact Us</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
