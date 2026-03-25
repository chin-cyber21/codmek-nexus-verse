import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Rocket,
  Crown,
  Users,
  Video,
  Code2,
  Target,
  ChevronRight,
  Zap,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  UserCheck,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Programs Data ─── */
const programs = [
  {
    id: "young-engineer",
    title: "Young Engineer",
    icon: GraduationCap,
    audience: "Class 4–12",
    duration: "6–24 months",
    tagline: "From curiosity to building real AI-powered apps",
    description:
      "Age-appropriate progression from visual coding and robotics for juniors, to Python and projects for middle school, to advanced AI and production apps for seniors.",
    delivery: "Live Classes • Peer Groups • Hands-on Projects",
    modules: [
      "Visual Coding & Robotics (Class 4–7)",
      "Python & Project Building (Class 8–10)",
      "Advanced AI & Production Apps (Class 11–12)",
      "Capstone: Build & Demo Day",
    ],
    highlight: "Start as early as Class 4",
  },
  {
    id: "catalyst",
    title: "Catalyst",
    icon: Rocket,
    audience: "Class 11 – Undergraduate",
    duration: "12–18 months",
    tagline: "Accelerate from student to industry-ready professional",
    description:
      "Comprehensive bridge covering CS fundamentals, DSA, full-stack development, ML foundations, and placement preparation with real-world projects.",
    delivery: "Live Mentoring • Mock Interviews • Portfolio Building",
    modules: [
      "CS Fundamentals & Programming",
      "Data Structures & Algorithms",
      "Full-Stack Web Development",
      "Machine Learning Foundations",
      "System Design Basics",
      "Cloud & DevOps Essentials",
      "Placement Preparation",
      "Capstone Project & Portfolio",
    ],
    highlight: "Placement-ready guarantee",
  },
  {
    id: "engineers-engineer",
    title: "Engineer's Engineer",
    icon: Crown,
    audience: "Working Professionals",
    duration: "Custom",
    tagline: "Personalized path to technical leadership",
    description:
      "1-on-1 mentoring tailored to your current role and target position. Learn to architect systems, lead teams, and drive technical decisions at scale.",
    delivery: "1-on-1 Mentoring • Custom Curriculum • Limited Seats",
    modules: [
      "Role Assessment & Roadmap Design",
      "System Architecture & Design Patterns",
      "Technical Leadership & Communication",
      "Custom Domain Deep-Dives",
    ],
    highlight: "Limited to 20 seats per cohort",
  },
];

/* ─── Curriculum Data ─── */
const curriculumData: Record<string, { title: string; modules: { name: string; topics: string[]; duration: string }[] }> = {
  "young-engineer": {
    title: "Young Engineer Curriculum",
    modules: [
      {
        name: "Explorer (Class 4–7)",
        duration: "6 months",
        topics: [
          "Block-based coding with Scratch & MakeCode",
          "Introduction to robotics with Arduino",
          "Basic game development",
          "Logic puzzles & computational thinking",
          "Mini project: Build a game or robot",
        ],
      },
      {
        name: "Builder (Class 8–10)",
        duration: "9 months",
        topics: [
          "Python programming fundamentals",
          "Web development basics (HTML/CSS/JS)",
          "Data science with real datasets",
          "Introduction to AI & Machine Learning",
          "Project: Build a web app with AI features",
        ],
      },
      {
        name: "Architect (Class 11–12)",
        duration: "12 months",
        topics: [
          "Advanced Python & frameworks",
          "Deep Learning & Computer Vision",
          "Full-stack application development",
          "Cloud deployment & APIs",
          "Capstone: Production-grade AI application",
        ],
      },
    ],
  },
  catalyst: {
    title: "Catalyst Curriculum",
    modules: [
      {
        name: "Foundation",
        duration: "3 months",
        topics: ["Programming in Python/C++", "OOP & design principles", "Version control with Git"],
      },
      {
        name: "Core CS",
        duration: "3 months",
        topics: ["Data Structures & Algorithms", "Database systems", "Operating systems essentials"],
      },
      {
        name: "Full-Stack",
        duration: "3 months",
        topics: ["React & modern frontend", "Node.js & REST APIs", "Database design & deployment"],
      },
      {
        name: "AI/ML",
        duration: "3 months",
        topics: ["Machine learning fundamentals", "Neural networks & deep learning", "Model deployment"],
      },
      {
        name: "Career Launch",
        duration: "3 months",
        topics: ["System design interviews", "Mock interviews & resume building", "Portfolio & capstone project"],
      },
    ],
  },
  "engineers-engineer": {
    title: "Engineer's Engineer Pathway",
    modules: [
      {
        name: "Assessment",
        duration: "Week 1–2",
        topics: ["Current skill audit", "Career goal mapping", "Custom roadmap creation"],
      },
      {
        name: "Deep Dive",
        duration: "Custom",
        topics: ["Domain-specific mastery tracks", "Architecture & system design", "Performance & scalability"],
      },
      {
        name: "Leadership",
        duration: "Ongoing",
        topics: ["Tech team management", "Code review culture", "Cross-functional communication"],
      },
    ],
  },
};

/* ─── USP Data ─── */
const usps = [
  { icon: Video, title: "Live Mentoring", desc: "Real humans teaching, not recorded lectures" },
  { icon: Users, title: "Peer-to-Peer", desc: "Collaborative learning with cohort peers" },
  { icon: Code2, title: "Project-First", desc: "Build production apps, not toy examples" },
  { icon: Target, title: "Career Trajectory", desc: "From first line of code to leading teams" },
];

/* ─── Process Steps ─── */
const processSteps = [
  { icon: BookOpen, title: "Apply", desc: "Choose your program & share your goals" },
  { icon: UserCheck, title: "Get Matched", desc: "Paired with the right mentor & cohort" },
  { icon: Video, title: "Learn Live", desc: "Interactive sessions, not passive watching" },
  { icon: Rocket, title: "Build & Launch", desc: "Ship real projects & earn credentials" },
];

const Learn = () => {
  const [activeTab, setActiveTab] = useState("young-engineer");
  const curriculum = curriculumData[activeTab];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEO
        title="Codmek Learn — AI Education Platform"
        description="Master AI with live mentoring, peer-to-peer learning, and real-world projects. Programs for school students (Class 4-12), college students, and working professionals."
        path="/learn"
        keywords="AI courses India, live AI mentoring, coding bootcamp, machine learning course, Codmek Learn, young engineer program, AI for school students, engineering courses"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Codmek Learn",
          url: "https://codmek.com/learn",
          description:
            "AI education platform offering live mentoring, bootcamps, and personalized learning for students and professionals.",
          parentOrganization: {
            "@type": "Organization",
            name: "Codmek Softech",
            url: "https://codmek.com",
          },
        }}
      />

      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.25) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "grid-move 25s linear infinite",
            }}
          />
        </div>

        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} custom={0} className="mb-4">
              <span className="inline-flex items-center gap-2 glass-panel px-4 py-2 text-sm text-muted-foreground font-mono">
                <Zap className="w-3.5 h-3.5 text-primary" />
                LIVE MENTORING • PEER-TO-PEER • REAL PROJECTS
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 holographic-text leading-tight"
            >
              Learn to Build
              <br />
              What Doesn't Exist Yet
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              From Class 4 to CTO — structured, live, mentor-led programs that turn curiosity into capability.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#programs">
                  Explore Programs <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link to="/contact">Book a Free Session</Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-6 mt-14">
              {[
                { icon: Video, label: "Live Classes" },
                { icon: UserCheck, label: "1-on-1 Mentoring" },
                { icon: Code2, label: "Real Projects" },
                { icon: Target, label: "Career Support" },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-primary" />
                    {badge.label}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* ═══════ PROGRAM CARDS ═══════ */}
      <section id="programs" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-mono text-muted-foreground mb-3 tracking-wider">
              THREE PATHWAYS
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold holographic-text mb-4">
              Choose Your Path
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="inline-flex items-center gap-2 glass-panel px-4 py-2 text-xs text-muted-foreground font-mono mt-4">
              <Layers className="w-3.5 h-3.5" />
              B2B & College Partnerships — Coming Soon
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-panel p-8 relative group overflow-hidden flex flex-col"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

                  {/* Highlight badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono text-primary/70 bg-primary/10 px-2 py-1 rounded">
                      {program.highlight}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl glass-panel flex items-center justify-center mb-4 group-hover:glow-soft transition-shadow duration-500">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{program.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{program.audience} • {program.duration}</p>
                    </div>

                    <p className="text-lg text-foreground/80 font-medium mb-3">{program.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

                    <div className="space-y-2 mb-6">
                      {program.modules.map((mod) => (
                        <div key={mod} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                          {mod}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <p className="text-xs text-muted-foreground mb-4 font-mono">{program.delivery}</p>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        onClick={() => setActiveTab(program.id)}
                        asChild
                      >
                        <a href="#curriculum">
                          View Curriculum <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ USP STRIP ═══════ */}
      <section className="py-20 px-6 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {usps.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <motion.div
                  key={usp.title}
                  variants={fadeUp}
                  custom={idx}
                  whileHover={{ scale: 1.05 }}
                  className="glass-panel p-6 text-center group"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl glass-panel flex items-center justify-center mb-4 group-hover:glow-soft transition-shadow">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{usp.title}</h4>
                  <p className="text-sm text-muted-foreground">{usp.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════ CURRICULUM DEEP-DIVE ═══════ */}
      <section id="curriculum" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-mono text-muted-foreground mb-3 tracking-wider">
              DEEP DIVE
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold holographic-text">
              Curriculum
            </motion.h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === p.id
                    ? "bg-primary text-primary-foreground"
                    : "glass-panel text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Curriculum content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{curriculum.title}</h3>
            <div className="space-y-4">
              {curriculum.modules.map((mod, idx) => (
                <motion.div
                  key={mod.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 group hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-foreground">{mod.name}</h4>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground mt-2 sm:mt-0">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.duration}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 pl-11">
                    {mod.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROCESS TIMELINE ═══════ */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-mono text-muted-foreground mb-3 tracking-wider">
              HOW IT WORKS
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold holographic-text">
              Four Steps to Launch
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />

            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl glass-panel flex items-center justify-center mb-5 relative z-10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  <span className="absolute -top-2 -left-2 text-xs font-mono text-primary/40">0{idx + 1}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ MENTORSHIP PROMISE ═══════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

            <div className="relative z-10">
              <Star className="w-10 h-10 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light text-foreground/80 italic leading-relaxed mb-8">
                "We don't teach subjects — we build engineers. Every session is live, every project is real,
                and every mentor has shipped at scale."
              </blockquote>
              <p className="text-sm font-mono text-muted-foreground tracking-wider">— CODMEK LEARN MANIFESTO</p>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30">
                {[
                  { value: "10+", label: "Years Avg. Mentor Exp." },
                  { value: "1:8", label: "Mentor-Student Ratio" },
                  { value: "100%", label: "Live & Interactive" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 md:py-32 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} custom={0}>
              <Lightbulb className="w-10 h-10 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold holographic-text mb-6">
              Start Your Journey
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-10">
              Whether you're 10 or 30 — there's a path designed for you. Pick a program, meet your mentor, and start building.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#programs">
                  Explore Programs <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link to="/contact">Apply for Engineer's Engineer</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Learn;
