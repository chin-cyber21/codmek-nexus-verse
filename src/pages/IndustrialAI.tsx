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
                    <div className="w-full max-w-sm aspect-square glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden group/card">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent" />
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,hsl(var(--foreground)/0.06)_0%,transparent_70%)]" />
                      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                        <defs>
                          <filter id={`glow-${i}`}>
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                          </filter>
                          <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>

                        {/* Dot grid background */}
                        {Array.from({ length: 7 }).map((_, row) =>
                          Array.from({ length: 7 }).map((_, col) => (
                            <circle key={`dot-${row}-${col}`} cx={32 + col * 22.6} cy={32 + row * 22.6} r="0.6" fill="currentColor" opacity="0.08" />
                          ))
                        )}

                        {i === 0 && (
                          <g>
                            <rect x="35" y="35" width="130" height="130" rx="6" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.15" />
                            <rect x="50" y="50" width="100" height="100" rx="3" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.25" />
                            {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                              <rect key={`cell-${r}-${c}`} x={52+c*24} y={52+r*24} width="22" height="22" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.12" />
                            )))}
                            <line x1="50" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="1.5" opacity="0.5" filter={`url(#glow-${i})`}>
                              <animate attributeName="x1" values="50;150;50" dur="2.5s" repeatCount="indefinite" />
                              <animate attributeName="x2" values="50;150;50" dur="2.5s" repeatCount="indefinite" />
                            </line>
                            <rect x="76" y="76" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="0.8" fill={`url(#grad-${i})`} opacity="0.4">
                              <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" repeatCount="indefinite" />
                            </rect>
                            <rect x="100" y="100" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="0.8" fill={`url(#grad-${i})`} opacity="0.3">
                              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.3s" repeatCount="indefinite" />
                            </rect>
                            {[[50,50],[148,50],[50,148],[148,148]].map(([cx,cy],idx) => (
                              <g key={`corner-${idx}`}>
                                <circle cx={cx} cy={cy} r="3" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
                                <circle cx={cx} cy={cy} r="1" fill="currentColor" opacity="0.5">
                                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" begin={`${idx*0.3}s`} repeatCount="indefinite" />
                                </circle>
                              </g>
                            ))}
                            <line x1="160" y1="60" x2="185" y2="60" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
                            <line x1="160" y1="80" x2="178" y2="80" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
                            <line x1="160" y1="100" x2="182" y2="100" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
                          </g>
                        )}

                        {i === 1 && (
                          <g>
                            <path d="M15,120 Q35,100 55,120 Q75,140 95,100 Q105,60 115,100 Q135,140 155,120 Q175,100 195,120" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
                            <path d="M15,110 Q40,90 65,110 Q85,130 100,90 Q110,50 120,95 Q140,130 165,110 Q180,95 195,110" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" />
                            <circle cx="107" cy="70" r="18" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" strokeDasharray="3 2">
                              <animate attributeName="r" values="16;22;16" dur="2s" repeatCount="indefinite" />
                              <animate attributeName="opacity" values="0.15;0.45;0.15" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="107" cy="70" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5">
                              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="107" cy="70" r="2" fill="currentColor" opacity="0.6">
                              <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
                            </circle>
                            {[30,50,70,90,110,130,150,170].map((x,idx) => (
                              <line key={`bar-${idx}`} x1={x} y1="160" x2={x} y2={145-idx*2} stroke="currentColor" strokeWidth="2" opacity="0.12" strokeLinecap="round">
                                <animate attributeName="y2" values={`${145-idx*2};${135-idx*3};${145-idx*2}`} dur={`${1.5+idx*0.2}s`} repeatCount="indefinite" />
                              </line>
                            ))}
                            <line x1="15" y1="85" x2="195" y2="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="6 3" opacity="0.15" />
                            <text x="18" y="82" fill="currentColor" fontSize="5" opacity="0.2" fontFamily="monospace">THRESHOLD</text>
                            {[35,75,115,155].map((x,idx) => (
                              <circle key={`sensor-${idx}`} cx={x} cy={idx===2?95:120} r="2.5" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3">
                                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin={`${idx*0.4}s`} repeatCount="indefinite" />
                              </circle>
                            ))}
                          </g>
                        )}

                        {i === 2 && (
                          <g>
                            <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
                            <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.25" />
                            <circle cx="100" cy="100" r="2.5" fill="currentColor" opacity="0.4">
                              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <line x1="88" y1="100" x2="112" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
                            <line x1="100" y1="88" x2="100" y2="112" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
                            {[0,72,144,216,288].map((deg,idx) => {
                              const r1=42; const x=100+r1*Math.cos(deg*Math.PI/180); const y=100+r1*Math.sin(deg*Math.PI/180);
                              return (<g key={`n1-${idx}`}>
                                <line x1="100" y1="100" x2={x} y2={y} stroke="currentColor" strokeWidth="0.4" opacity="0.2">
                                  <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" begin={`${idx*0.5}s`} repeatCount="indefinite" />
                                </line>
                                <circle cx={x} cy={y} r="5" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
                                <circle cx={x} cy={y} r="1.8" fill="currentColor" opacity="0.35">
                                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin={`${idx*0.3}s`} repeatCount="indefinite" />
                                </circle>
                              </g>);
                            })}
                            {[30,90,150,210,270,330].map((deg,idx) => {
                              const r2=70; const x=100+r2*Math.cos(deg*Math.PI/180); const y=100+r2*Math.sin(deg*Math.PI/180);
                              const pd=[0,72,144,216,288][idx%5]; const px=100+42*Math.cos(pd*Math.PI/180); const py=100+42*Math.sin(pd*Math.PI/180);
                              return (<g key={`n2-${idx}`}>
                                <line x1={px} y1={py} x2={x} y2={y} stroke="currentColor" strokeWidth="0.25" opacity="0.1" strokeDasharray="2 2" />
                                <circle cx={x} cy={y} r="3" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.2" />
                                <circle cx={x} cy={y} r="1" fill="currentColor" opacity="0.25" />
                              </g>);
                            })}
                            <circle cx="100" cy="100" r="42" stroke="currentColor" strokeWidth="0.25" fill="none" opacity="0.08" strokeDasharray="4 3" />
                            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.2" fill="none" opacity="0.05" strokeDasharray="2 4" />
                            <circle r="2" fill="currentColor" opacity="0.6" filter={`url(#glow-${i})`}>
                              <animateMotion dur="3s" repeatCount="indefinite" path="M100,100 L142,100 L131,140 L69,140 L58,100 L100,58 Z" />
                            </circle>
                          </g>
                        )}

                        {i === 3 && (
                          <g>
                            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.15" />
                            <polygon points="50,55 85,40 85,80" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
                            <polygon points="50,95 85,80 85,120" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
                            <polygon points="50,135 85,120 85,160" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
                            <line x1="50" y1="55" x2="50" y2="135" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
                            <line x1="85" y1="40" x2="85" y2="160" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
                            <polygon points="150,55 115,40 115,80" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15">
                              <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite" />
                            </polygon>
                            <polygon points="150,95 115,80 115,120" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15">
                              <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" begin="0.3s" repeatCount="indefinite" />
                            </polygon>
                            <polygon points="150,135 115,120 115,160" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15">
                              <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" begin="0.6s" repeatCount="indefinite" />
                            </polygon>
                            <line x1="150" y1="55" x2="150" y2="135" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                            <line x1="115" y1="40" x2="115" y2="160" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                            {[60,100,140].map((y,idx) => (
                              <g key={`sync-${idx}`}>
                                <line x1="86" y1={y} x2="114" y2={y} stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 2" />
                                <circle r="1.5" fill="currentColor" opacity="0.5">
                                  <animateMotion dur={`${2+idx*0.5}s`} repeatCount="indefinite" path={`M86,${y} L114,${y}`} />
                                </circle>
                              </g>
                            ))}
                            <text x="55" y="175" fill="currentColor" fontSize="5" opacity="0.15" fontFamily="monospace">PHYSICAL</text>
                            <text x="118" y="175" fill="currentColor" fontSize="5" opacity="0.15" fontFamily="monospace">DIGITAL</text>
                            <path d="M40,30 Q100,10 160,30" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.08" />
                            <path d="M40,170 Q100,190 160,170" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.08" />
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
