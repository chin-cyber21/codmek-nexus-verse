import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Linkedin, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import codmekLogo from "@/assets/codmek-logo.png";

// X/Twitter icon component (Lucide doesn't have it)
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate submission - in production, connect to your email service
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thanks for subscribing! We'll be in touch.");
    }, 1000);
  };

  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: XIcon,
      href: "https://x.com/CodmekSoftech",
      label: "@CodmekSoftech"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/codmek-softech/",
      label: "Codmek Softech"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@codmek.com",
      label: "contact@codmek.com"
    }
  ];

  const quickLinks = [
    { name: "Research", path: "/research" },
    { name: "Studio", path: "/studio" },
    { name: "Learn", path: "/learn" },
    { name: "Solutions", path: "/solutions" },
    { name: "Nexus", path: "/nexus" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.footer
      className="relative z-10 mt-24 border-t border-border/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Contact CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-2xl border border-primary/20 text-center mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-6 text-primary/70" />
            </motion.div>
            
            <h3 className="text-2xl md:text-4xl font-bold mb-4 holographic-text">
              Let's Build Something Together
            </h3>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8 text-lg">
              Have a project in mind? Want to collaborate on research? Or just curious about what we do?
              We'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:contact@codmek.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="https://x.com/CodmekSoftech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-panel border border-primary/30 font-semibold rounded-lg hover:border-primary/60 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <XIcon className="w-5 h-5" />
                Follow Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={codmekLogo} alt="Codmek" className="h-10 opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Pioneering the future of artificial intelligence through research, creativity, and enterprise solutions.
            </p>
            <p className="text-foreground/40 text-xs font-mono">
              Intelligence, Deployed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-foreground/50 hover:text-foreground transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="text-foreground/50 hover:text-foreground transition-colors text-sm flex items-center gap-3 group"
                    >
                      <Icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-foreground/50 text-sm mb-4">
              Get the latest on AI research, product updates, and innovation insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4 text-primary" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/40 text-sm">
              © {new Date().getFullYear()} Codmek Softech. Building the future of intelligence.
            </p>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="text-foreground/40 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
