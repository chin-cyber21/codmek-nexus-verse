import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Phone, Send, Linkedin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setIsSubmitting(true);

    const mailtoSubject = encodeURIComponent(`[${formData.subject}] from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:contact@codmek.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Opening your email client",
        description: "If it doesn't open, email us directly at contact@codmek.com",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Contact Us"
        description="Get in touch with Codmek Softech for AI consulting, software development, research partnerships, or business inquiries. Based in Jaipur, India — serving clients worldwide."
        path="/contact"
        keywords="contact Codmek, AI consulting, hire AI developers, AI company India, Jaipur software company, AI partnership, get quote AI project"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Codmek Softech",
          "url": "https://codmek.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Codmek Softech",
            "url": "https://codmek.com",
            "email": "contact@codmek.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jaipur",
              "addressRegion": "Rajasthan",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@codmek.com",
              "availableLanguage": ["English", "Hindi"]
            }
          }
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 holographic-text">Get in Touch</h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Have a project in mind? Let's talk about how Codmek can help you build intelligent solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3 glass-panel p-8 md:p-10 rounded-2xl border border-primary/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required maxLength={255} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" placeholder="Your company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} maxLength={100} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(val) => setFormData({ ...formData, subject: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI Consulting">AI Consulting</SelectItem>
                      <SelectItem value="Software Development">Software Development</SelectItem>
                      <SelectItem value="Research Partnership">Research Partnership</SelectItem>
                      <SelectItem value="RaaS Inquiry">Research as a Service (RaaS)</SelectItem>
                      <SelectItem value="Nexus Collaboration">Nexus Collaboration</SelectItem>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required maxLength={2000} />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Opening email client..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary/70 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@codmek.com" className="text-foreground/60 hover:text-foreground transition-colors text-sm">contact@codmek.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary/70 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-foreground/60 text-sm">Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 text-primary/70 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-foreground/60 text-sm">Mon–Sat, 10 AM – 7 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="space-y-4">
                  <a href="https://x.com/CodmekSoftech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors">
                    <XIcon className="w-5 h-5" />
                    <span className="text-sm">@CodmekSoftech</span>
                  </a>
                  <a href="https://www.linkedin.com/company/codmek-softech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">Codmek Softech</span>
                  </a>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, reach out directly via email.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
