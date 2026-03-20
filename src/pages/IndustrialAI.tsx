import { motion } from "framer-motion";
import {
  ArrowLeft,
  Factory,
  ChevronRight,
  Eye,
  Settings,
  Shield,
  TrendingUp,
  Cpu,
  Layers,
  FileCheck,
  Boxes,
  Pill,
  Car,
  Zap,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/* ─── Data ─── */

const capabilities = [
  {
    icon: Eye,
    title: "AI Quality Inspection",
    description:
      "Sub-millisecond defect detection on production lines using deep-learning vision models trained on your own data — catching what the human eye misses.",
  },
  {
    icon: Settings,
    title: "Predictive Maintenance",
    description:
      "Sensor-fusion anomaly detection that forecasts equipment failure days in advance, reducing unplanned downtime by up to 70 %.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance Vision",
    description:
      "Real-time computer vision monitoring for PPE compliance, hazard zones, and unsafe behavior — with instant alerts to floor supervisors.",
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Optimization",
    description:
      "Demand forecasting, inventory balancing, and logistics routing powered by time-series ML — minimizing waste and stock-outs.",
  },
  {
    icon: Cpu,
    title: "Edge AI & Industrial IoT",
    description:
      "Deploy inference models directly on edge gateways and PLCs for zero-latency decision-making at the machine level.",
  },
  {
    icon: Layers,
    title: "Digital Twin Development",
    description:
      "Physics-informed simulation models of your processes and equipment — enabling what-if analysis and optimized scheduling.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Dashboards",
    description:
      "Automated regulatory reporting (FDA, ISO, OSHA) and live operational dashboards that turn raw telemetry into executive insights.",
  },
  {
    icon: Boxes,
    title: "Custom Industry Solutions",
    description:
      "Tailored AI systems designed for your vertical's unique constraints — from GxP-validated pharma pipelines to autonomous mining vehicles.",
  },
];

const industries = [
  {
    icon: Pill,
    name: "Pharma & Life Sciences",
    gradient: "from-emerald-500/20 to-teal-500/20",
    useCases: [
      "GxP-validated visual inspection of vials, tablets & packaging",
      "Environmental monitoring with anomaly detection (cleanroom IoT)",
      "Batch record automation and deviation prediction",
      "Drug discovery data pipeline acceleration",
    ],
  },
  {
    icon: Car,
    name: "Automotive & Aerospace",
    gradient: "from-sky-500/20 to-blue-500/20",
    useCases: [
      "Weld & paint defect classification on assembly lines",
      "Predictive maintenance for CNC & robotic cells",
      "SPC analytics with real-time control-chart AI",
      "Autonomous guided vehicle (AGV) navigation",
    ],
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    gradient: "from-amber-500/20 to-orange-500/20",
    useCases: [
      "Turbine blade inspection via drone + vision AI",
      "Grid load forecasting and demand-response optimization",
      "Pipeline anomaly detection using acoustic sensors",
      "Carbon emission tracking dashboards",
    ],
  },
  {
    icon: Truck,
    name: "Logistics & Warehousing",
    gradient: "from-violet-500/20 to-purple-500/20",
    useCases: [
      "Warehouse inventory counting with aerial vision",
      "Route optimization using real-time traffic ML models",
      "Automated damage detection at dock & receiving",
      "Demand forecasting for seasonal capacity planning",
    ],
  },
];

const techStack = [
  { category: "Vision & Models", items: ["PyTorch", "TensorFlow", "ONNX Runtime", "OpenCV", "YOLOv8", "Detectron2"] },
  { category: "Edge & IoT", items: ["NVIDIA Jetson", "Intel OpenVINO", "AWS Greengrass", "Azure IoT Edge", "MQTT / OPC-UA"] },
  { category: "Data & Cloud", items: ["Apache Kafka", "Spark", "Databricks", "Snowflake", "AWS SageMaker", "GCP Vertex AI"] },
  { category: "Simulation", items: ["NVIDIA Omniverse", "MATLAB / Simulink", "Unity Digital Twin", "CloudFormation IaC"] },
];

/* ─── Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
};

/* ─── Page ─── */

const IndustrialAI = () => (
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
            "AI-powered quality inspection, predictive maintenance, digital twins, computer vision safety monitoring, and IoT edge inference for manufacturing, pharma, automotive, energy, and logistics.",
          areaServed: "Worldwide",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What industries does Codmek's Industrial AI serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Codmek serves pharma & life sciences, automotive & aerospace, energy & utilities, and logistics & warehousing with tailored AI solutions.",
              },
            },
            {
              "@type": "Question",
              name: "Can Codmek deploy AI models on edge devices in a factory?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We deploy optimised inference models on NVIDIA Jetson, Intel OpenVINO, and cloud-edge gateways for zero-latency on-site decisions.",
              },
            },
          ],
        },
      ]}
    />

    <Navbar />

    {/* ═══ HERO ═══ */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Geometric ray background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial rays */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 h-[200%] w-px origin-top"
              style={{
                background: `linear-gradient(to bottom, hsl(var(--foreground) / 0.25), transparent 70%)`,
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 text-center">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All Solutions
        </Link>

        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="inline-flex items-center gap-3 glass-panel rounded-full px-5 py-2 mb-8">
            <Factory className="w-5 h-5 text-foreground/80" />
            <span className="text-sm font-medium tracking-wide text-foreground/70">
              Industry 4.0 &middot; Smart Manufacturing &middot; Digital Twins
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 holographic-text leading-tight">
            Industrial AI &<br className="hidden sm:block" /> Digital Transformation
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            We engineer AI systems that see, predict, and optimize across the factory floor — turning
            raw sensor data into operational intelligence for the world's most demanding industries.
          </p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp} custom={0.4}>
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

      {/* Decorative floating ring */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-foreground/10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>

    {/* ═══ CAPABILITIES ═══ */}
    <section id="capabilities" className="py-24 px-6 md:px-8">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI services purpose-built for heavy industry, manufacturing, and regulated environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass-panel p-6 rounded-xl group hover:border-foreground/20 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ═══ INDUSTRY USE CASES ═══ */}
    <section className="py-24 px-6 md:px-8 bg-foreground/[0.03]">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Verticals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domain-specific AI solutions designed around the compliance, safety, and throughput demands of each sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass-panel rounded-2xl p-8 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-foreground/80" />
                    </div>
                    <h3 className="text-2xl font-bold">{ind.name}</h3>
                  </div>

                  <ul className="space-y-3">
                    {ind.useCases.map((uc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ═══ TECH STACK ═══ */}
    <section className="py-24 px-6 md:px-8">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Battle-tested frameworks and platforms we deploy across industrial environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-panel rounded-xl p-6"
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 border border-foreground/10 text-foreground/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
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
          {/* Ambient gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-teal-500/10 opacity-50" />

          {/* Ray burst */}
          <div className="absolute inset-0 opacity-[0.04]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 h-[300%] w-px origin-top"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--foreground) / 0.3), transparent 60%)",
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>

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

export default IndustrialAI;
