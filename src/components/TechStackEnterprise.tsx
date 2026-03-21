import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Progress } from "@/components/ui/progress";

/* ─── Pipeline Data ─── */
const pipeline = [
  {
    stage: "Perception",
    label: "01",
    description: "Vision models that see what humans can't",
    items: [
      { name: "PyTorch", role: "Deep learning framework", proficiency: 95 },
      { name: "YOLOv8", role: "Real-time object detection at 60fps", proficiency: 92 },
      { name: "OpenCV", role: "Image preprocessing pipeline", proficiency: 90 },
      { name: "Detectron2", role: "Instance segmentation & masking", proficiency: 88 },
      { name: "TensorFlow", role: "Production model serving", proficiency: 90 },
      { name: "ONNX Runtime", role: "Cross-platform inference optimization", proficiency: 85 },
    ],
  },
  {
    stage: "Edge Inference",
    label: "02",
    description: "Zero-latency decisions at the machine level",
    items: [
      { name: "NVIDIA Jetson", role: "GPU-accelerated edge compute", proficiency: 93 },
      { name: "Intel OpenVINO", role: "CPU-optimized model inference", proficiency: 88 },
      { name: "AWS Greengrass", role: "Cloud-to-edge deployment", proficiency: 85 },
      { name: "Azure IoT Edge", role: "Enterprise IoT gateway", proficiency: 82 },
      { name: "OPC-UA / MQTT", role: "Industrial protocol integration", proficiency: 90 },
    ],
  },
  {
    stage: "Data Platform",
    label: "03",
    description: "Scalable pipelines from sensor to insight",
    items: [
      { name: "Apache Kafka", role: "Real-time event streaming", proficiency: 94 },
      { name: "Apache Spark", role: "Distributed batch processing", proficiency: 90 },
      { name: "Databricks", role: "Unified analytics lakehouse", proficiency: 88 },
      { name: "Snowflake", role: "Cloud data warehousing", proficiency: 85 },
      { name: "AWS SageMaker", role: "ML training & deployment", proficiency: 90 },
      { name: "GCP Vertex AI", role: "AutoML & model registry", proficiency: 86 },
    ],
  },
  {
    stage: "Simulation & DevOps",
    label: "04",
    description: "Digital replicas and automated delivery",
    items: [
      { name: "NVIDIA Omniverse", role: "Physics-accurate digital twins", proficiency: 87 },
      { name: "MATLAB / Simulink", role: "Process simulation modeling", proficiency: 85 },
      { name: "Unity Digital Twin", role: "Interactive 3D visualization", proficiency: 83 },
      { name: "Terraform IaC", role: "Infrastructure as code automation", proficiency: 90 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

/* ─── Pipeline Flow SVG ─── */
const PipelineFlow = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="hidden lg:flex justify-center mb-16">
      <svg width="800" height="60" viewBox="0 0 800 60" fill="none" className="overflow-visible">
        {pipeline.map((_, i) => {
          const x = i * 220 + 60;
          const nextX = (i + 1) * 220 + 60;
          return (
            <g key={i}>
              {/* Node */}
              <motion.circle
                cx={x}
                cy={30}
                r={16}
                stroke="hsl(var(--foreground))"
                strokeWidth={1}
                fill="none"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 0.4, scale: 1 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              />
              <motion.text
                x={x}
                y={35}
                textAnchor="middle"
                fill="hsl(var(--foreground))"
                fontSize={11}
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.5 } : {}}
                transition={{ delay: i * 0.2 + 0.2 }}
              >
                {pipeline[i].label}
              </motion.text>
              {/* Connector */}
              {i < pipeline.length - 1 && (
                <motion.line
                  x1={x + 18}
                  y1={30}
                  x2={nextX - 18}
                  y2={30}
                  stroke="hsl(var(--foreground))"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.2 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
                />
              )}
              {/* Stage label */}
              <motion.text
                x={x}
                y={8}
                textAnchor="middle"
                fill="hsl(var(--muted-foreground))"
                fontSize={10}
                fontWeight={600}
                letterSpacing={1}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.1 }}
              >
                {pipeline[i].stage.toUpperCase()}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ─── Module Card ─── */
const ModuleCard = ({
  name,
  role,
  proficiency,
  index,
}: {
  name: string;
  role: string;
  proficiency: number;
  index: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    variants={fadeUp}
    className="glass-panel rounded-lg p-4 group hover:border-foreground/20 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-1.5">
        <h4 className="text-sm font-semibold text-foreground/90">{name}</h4>
      </div>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{role}</p>
      <Progress value={proficiency} className="h-1 bg-foreground/5 [&>div]:bg-foreground/25" />
    </div>
  </motion.div>
);

/* ─── Main Component ─── */
const TechStackEnterprise = () => (
  <section className="py-24 px-6 md:px-8">
    <div className="container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
          Enterprise AI Pipeline
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Battle-tested frameworks deployed across industrial environments — from edge inference to cloud-scale analytics.
        </p>
      </motion.div>

      <PipelineFlow />

      <div className="space-y-16">
        {pipeline.map((stage, si) => (
          <motion.div
            key={stage.stage}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={si}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-muted-foreground/60 bg-foreground/5 px-3 py-1 rounded-full">
                {stage.label}
              </span>
              <div>
                <h3 className="text-xl font-bold">{stage.stage}</h3>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {stage.items.map((item, ii) => (
                <ModuleCard
                  key={item.name}
                  name={item.name}
                  role={item.role}
                  proficiency={item.proficiency}
                  index={ii}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackEnterprise;
