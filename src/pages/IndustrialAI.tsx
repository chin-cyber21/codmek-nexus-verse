import { Suspense, useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  Factory,
  ChevronRight,
  Eye,
  Settings,
  Shield,
  TrendingUp,
  Pill,
  Car,
  Zap,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { IndustrialHero3D } from "@/components/IndustrialHero3D";
import TechStackEnterprise from "@/components/TechStackEnterprise";
import { useIsMobile } from "@/hooks/use-mobile";

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

/* ─── Metrics Counter ─── */
const CountUp = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as any, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * end * 10) / 10);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {prefix}{val}{suffix}
    </span>
  );
};

/* ─── Capability Blocks (alternating) ─── */
const capabilities = [
  {
    icon: Eye,
    title: "AI Quality Inspection",
    description: "Sub-millisecond defect detection on production lines using deep-learning vision models trained on your own data.",
    bullets: [
      "Catches micro-defects invisible to the human eye",
      "Adapts to new product variants in hours, not weeks",
      "Integrates directly with PLC reject mechanisms",
    ],
  },
  {
    icon: Settings,
    title: "Predictive Maintenance",
    description: "Sensor-fusion anomaly detection that forecasts equipment failure days in advance.",
    bullets: [
      "Reduces unplanned downtime by up to 70%",
      "Multi-sensor correlation across vibration, thermal & acoustic",
      "Maintenance scheduling optimization with cost modeling",
    ],
  },
  {
    icon: Shield,
    title: "Edge AI & Industrial IoT",
    description: "Deploy inference models directly on edge gateways and PLCs for zero-latency decision-making.",
    bullets: [
      "< 50ms inference on NVIDIA Jetson & OpenVINO",
      "Secure OPC-UA / MQTT protocol integration",
      "Over-the-air model updates with rollback safety",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Twin Development",
    description: "Physics-informed simulation models of your processes and equipment for what-if analysis.",
    bullets: [
      "Real-time synchronization with live sensor feeds",
      "Scenario planning for capacity & throughput optimization",
      "NVIDIA Omniverse & Unity-powered visualization",
    ],
  },
];

/* ─── Industries (tab data) ─── */
const industries = [
  {
    id: "pharma",
    icon: Pill,
    name: "Pharma & Life Sciences",
    challenges: "GxP validation, contamination detection, batch consistency",
    useCases: [
      "Visual inspection of vials, tablets & packaging (GxP-validated)",
      "Cleanroom environmental monitoring with anomaly detection",
      "Batch record automation and deviation prediction",
      "Drug discovery data pipeline acceleration",
    ],
    tech: ["PyTorch", "YOLOv8", "AWS SageMaker", "OPC-UA"],
  },
  {
    id: "automotive",
    icon: Car,
    name: "Automotive & Aerospace",
    challenges: "Weld integrity, paint finish, assembly precision",
    useCases: [
      "Weld & paint defect classification on assembly lines",
      "Predictive maintenance for CNC & robotic cells",
      "SPC analytics with real-time control-chart AI",
      "Autonomous guided vehicle (AGV) path optimization",
    ],
    tech: ["Detectron2", "NVIDIA Jetson", "Apache Kafka", "Simulink"],
  },
  {
    id: "energy",
    icon: Zap,
    name: "Energy & Utilities",
    challenges: "Asset integrity, grid stability, emission compliance",
    useCases: [
      "Turbine blade inspection via drone + vision AI",
      "Grid load forecasting and demand-response optimization",
      "Pipeline anomaly detection using acoustic sensors",
      "Carbon emission tracking & regulatory dashboards",
    ],
    tech: ["TensorFlow", "OpenVINO", "Databricks", "Terraform"],
  },
  {
    id: "logistics",
    icon: Truck,
    name: "Logistics & Warehousing",
    challenges: "Inventory accuracy, route efficiency, damage prevention",
    useCases: [
      "Warehouse inventory counting with aerial vision",
      "Route optimization using real-time traffic ML models",
      "Automated damage detection at dock & receiving",
      "Demand forecasting for seasonal capacity planning",
    ],
    tech: ["ONNX Runtime", "AWS Greengrass", "Snowflake", "Spark"],
  },
];

/* ─── Metrics Data ─── */
const metrics = [
  { value: 99.2, suffix: "%", label: "Detection Accuracy" },
  { value: 50, prefix: "< ", suffix: "ms", label: "Edge Latency" },
  { value: 70, suffix: "%", label: "Less Downtime" },
  { value: 40, suffix: "%", label: "Cost Reduction" },
];

/* ─── Process Steps ─── */
const processSteps = [
  { num: "01", title: "Connect", desc: "Integrate sensors, cameras & data sources" },
  { num: "02", title: "Detect", desc: "AI models identify anomalies in real-time" },
  { num: "03", title: "Optimise", desc: "Predictive insights drive smarter decisions" },
  { num: "04", title: "Scale", desc: "Deploy across lines, plants & supply chains" },
];

/* ═══════════════════════════════ PAGE ═══════════════════════════════ */

const IndustrialAI = () => {
  const [activeTab, setActiveTab] = useState("pharma");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Industrial AI & Digital Transformation"
        description="Codmek delivers Industrial AI solutions: quality inspection, predictive maintenance, digital twins, IoT edge AI, and compliance dashboards for pharma, automotive, energy & logistics."
        path="/solutions/industrial-ai"
        keywords="industrial AI, digital transformation, predictive maintenance, AI quality inspection, digital twin, edge AI, smart factory, Industry 4.0, Codmek"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Industrial AI & Digital Transformation",
            provider: { "@type": "Organization", name: "Codmek Softech", url: "https://codmek.com" },
            url: "https://codmek.com/solutions/industrial-ai",
            description:
              "AI-powered quality inspection, predictive maintenance, digital twins, computer vision safety monitoring, and IoT edge inference.",
            areaServed: "Worldwide",
          },
        ]}
      />

      <Navbar />

      {/* ═══ HERO — Split Layout with 3D ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Canvas
              dpr={isMobile ? 1 : 1.5}
              camera={{ position: [0, 0, 7], fov: 50 }}
              gl={{ antialias: !isMobile, alpha: true }}
              style={{ background: "transparent" }}
            >
              <IndustrialHero3D />
            </Canvas>
          </Suspense>
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Solutions
            </Link>

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-3 glass-panel rounded-full px-5 py-2 mb-8">
                <Factory className="w-5 h-5 text-foreground/80" />
                <span className="text-sm font-medium tracking-wide text-foreground/70">
                  Industry 4.0 &middot; Smart Manufacturing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 holographic-text leading-tight">
                Industrial AI &<br /> Digital Transformation
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                We engineer AI systems that see, predict, and optimize across the factory floor — turning
                raw sensor data into operational intelligence.
              </p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp} custom={0.3}>
                <Button size="lg" className="gap-2" asChild>
                  <a href="mailto:contact@codmek.com?subject=Industrial%20AI%20Inquiry">
                    Book a Discovery Call
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Capabilities
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ METRICS STRIP ═══ */}
      <section className="py-12 px-6 md:px-8 border-y border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  <CountUp end={m.value} suffix={m.suffix} prefix={m.prefix || ""} />
                </div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — Alternating Blocks ═══ */}
      <section id="capabilities" className="py-24 px-6 md:px-8">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              What We Deliver
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI services purpose-built for heavy industry, manufacturing, and regulated environments.
            </p>
          </motion.div>

          <div className="space-y-24">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={cap.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-foreground/5 border border-border flex items-center justify-center">
                        <Icon className="w-6 h-6 text-foreground/70" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground/50">0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{cap.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{cap.description}</p>
                    <ul className="space-y-3">
                      {cap.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Geometric SVG illustration */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-sm aspect-square glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent" />
                      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-20">
                        {i === 0 && (
                          /* Scanning beam pattern */
                          <g>
                            <rect x="40" y="40" width="120" height="120" rx="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2">
                              <animate attributeName="x1" values="40;160;40" dur="3s" repeatCount="indefinite" />
                              <animate attributeName="x2" values="40;160;40" dur="3s" repeatCount="indefinite" />
                            </line>
                            {[60, 80, 100, 120, 140].map((y) => (
                              <line key={y} x1="40" y1={y} x2="160" y2={y} stroke="currentColor" strokeWidth="0.2" />
                            ))}
                          </g>
                        )}
                        {i === 1 && (
                          /* Waveform with anomaly */
                          <g>
                            <path
                              d="M20,100 Q50,60 80,100 Q95,130 100,80 Q105,30 110,100 Q140,140 170,100 Q185,80 200,100"
                              stroke="currentColor"
                              strokeWidth="0.8"
                              fill="none"
                            />
                            <circle cx="100" cy="80" r="12" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 1" />
                            {[40, 70, 130, 160].map((x) => (
                              <line key={x} x1={x} y1="90" x2={x} y2="110" stroke="currentColor" strokeWidth="0.3" />
                            ))}
                          </g>
                        )}
                        {i === 2 && (
                          /* Network topology */
                          <g>
                            <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="0.8" fill="none" />
                            {[0, 60, 120, 180, 240, 300].map((deg) => {
                              const r = 50;
                              const x = 100 + r * Math.cos((deg * Math.PI) / 180);
                              const y = 100 + r * Math.sin((deg * Math.PI) / 180);
                              return (
                                <g key={deg}>
                                  <line x1="100" y1="100" x2={x} y2={y} stroke="currentColor" strokeWidth="0.3" />
                                  <circle cx={x} cy={y} r="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                </g>
                              );
                            })}
                          </g>
                        )}
                        {i === 3 && (
                          /* Mirrored wireframe (digital twin) */
                          <g>
                            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
                            <polygon points="60,60 90,40 90,80" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <polygon points="60,100 90,80 90,120" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <polygon points="60,140 90,120 90,160" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <polygon points="140,60 110,40 110,80" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                            <polygon points="140,100 110,80 110,120" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                            <polygon points="140,140 110,120 110,160" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY VERTICALS — Tabs ═══ */}
      <section className="py-24 px-6 md:px-8 bg-foreground/[0.02]">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              Domain Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Verticals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored AI solutions designed around compliance, safety, and throughput demands of each sector.
            </p>
          </motion.div>

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === ind.id
                      ? "bg-foreground text-background"
                      : "glass-panel text-muted-foreground hover:text-foreground hover:border-foreground/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <activeIndustry.icon className="w-7 h-7 text-foreground/80" />
                  <h3 className="text-2xl font-bold">{activeIndustry.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="font-semibold text-foreground/70">Key challenges:</span>{" "}
                  {activeIndustry.challenges}
                </p>
                <ul className="space-y-4">
                  {activeIndustry.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-64 flex-shrink-0">
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  Key Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 border border-foreground/10 text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ TECH STACK (Enterprise Component) ═══ */}
      <TechStackEnterprise />

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="py-24 px-6 md:px-8 bg-foreground/[0.02]">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-foreground/10" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center relative"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full glass-panel flex items-center justify-center relative z-10">
                  <span className="text-2xl font-bold text-foreground/60">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-panel p-12 md:p-16 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-foreground/[0.02]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Industrialise Your AI?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you're modernising a single production line or transforming an entire supply chain,
                Codmek's industrial AI team is ready to partner with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="mailto:contact@codmek.com?subject=Industrial%20AI%20Consultation">
                    Schedule a Consultation
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/solutions">View All Solutions</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrialAI;
