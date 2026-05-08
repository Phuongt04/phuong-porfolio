import React from "react";
import { motion } from "framer-motion";
import {
 
  Mail,
 
  Download,
  ExternalLink,
  Cpu,
  Bot,
  Camera,
  Flame,
  Code2,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  Zap,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "MONE — Multimodal Emotion-Support Robot",
    subtitle: "End-to-end AI companion robot for emotional well-being",
    icon: Bot,
    tags: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi 4", "Solid Edge", "Gemini API"],
    problem:
      "People under stress often need lightweight emotional support, but many assistive systems lack real-time multimodal interaction and physical embodiment.",
    solution:
      "Built a working companion robot that combines facial emotion recognition, voice-emotion processing, embedded control, and AI interaction into an integrated prototype.",
    impact: [
      "Developed CNN-based facial emotion recognition and LSTM-based voice emotion pipeline.",
      "Optimized real-time inference on Raspberry Pi 4 for edge deployment.",
      "Integrated mechanical design, embedded control, and AI behavior flow into a physical prototype.",
    ],
    links: ["GitHub", "Demo", "Case Study"],
  },
  {
    title: "Traffic Sign Recognition for Autonomous Vehicle",
    subtitle: "YOLOv8 vision system for autonomous navigation",
    icon: Camera,
    tags: ["Python", "YOLOv8", "OpenCV", "Jetson Nano", "Edge AI"],
    problem:
      "Autonomous vehicles need reliable perception on constrained edge hardware with low camera-to-motor latency.",
    solution:
      "Trained a YOLOv8 traffic sign recognition model and integrated it with lane-keeping logic for more stable autonomous navigation.",
    impact: [
      "Achieved 92% test accuracy on key labels including Stop, Turn, and Speed Limit.",
      "Reduced camera-to-motor latency for smoother navigation behavior.",
      "Deployed and tested the perception pipeline on Jetson Nano.",
    ],
    links: ["GitHub", "Demo", "Model Notes"],
  },
  {
    title: "Smart Fire Monitoring & Warning System",
    subtitle: "Long-range IoT hazard detection system",
    icon: Flame,
    tags: ["C++", "Raspberry Pi Pico", "LoRa", "MQTT", "YOLO", "Dashboard"],
    problem:
      "Hazard monitoring systems often fail in areas with unreliable Wi-Fi coverage and limited real-time visibility.",
    solution:
      "Implemented a LoRa-based monitoring system with fire and human detection, dashboard alerts, and real-world environmental data collection.",
    impact: [
      "Built long-range LoRa communication for low-connectivity environments.",
      "Integrated fire and human detection with automatic dashboard alerts.",
      "Created a real-world dataset for environmental monitoring scenarios.",
    ],
    links: ["GitHub", "Demo", "Architecture"],
  },
];

const skills = [
  {
    title: "AI & Computer Vision",
    icon: BrainCircuit,
    items: ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "CNN", "LSTM", "Model evaluation", "LLM integration"],
  },
  {
    title: "Embedded & IoT",
    icon: Cpu,
    items: ["Raspberry Pi 4", "Raspberry Pi Pico", "Jetson Nano", "ESP32", "LoRa Ra-02", "MQTT", "Edge deployment"],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "C/C++", "SQL", "Git", "Automation scripting", "API communication"],
  },
  {
    title: "Engineering Tools",
    icon: Wrench,
    items: ["Solid Edge", "Technical drawing", "Drawing standardization", "PCB Design", "Rapid prototyping"],
  },
];

const experience = [
  {
    role: "AI & Mechanical R&D Intern",
    company: "DFM-Engineering",
    date: "Mar 2026 — Jun 2026",
    points: [
      "Standardized technical drawings and Solid Edge documentation for R&D hardware projects.",
      "Built Python automation for drawing export and model handoff to reduce repetitive manual work.",
      "Coordinated hardware-to-API communication flow with backend and product stakeholders for prototype readiness.",
    ],
  },
];

const awards = [
  "Student of 5 Merits Award — University Level, 3 consecutive years",
  "Third Prize — HUTECH Speedway Competition",
  "Executive Committee Member — Young Connection Club",
  "Collaborator — HUTECH Library & Student Affairs Office",
];

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>}
    </motion.div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{children}</span>;
}

function Button({
  children,
  href = "#",
  primary = false,
}: {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        primary
          ? "inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          : "inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
      }
    >
      {children}
    </a>
  );
}

export default function TranThiPhuongPortfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-bold tracking-wide text-white">TRAN THI PHUONG</a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65 }}
          className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Zap size={16} /> Available for full-time roles from September 2026
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              AI Engineer building real-world computer vision and edge AI systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Final-year Robotics & AI student experienced in computer vision, embedded AI, hardware-software integration, and Python automation for engineering workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" primary>View Projects <ArrowRight size={16} /></Button>
              <Button href="/Tran_Thi_Phuong_CV.pdf"><Download size={16} /> Download CV</Button>
              <Button href="mailto:ttphuong10404@gmail.com"><Mail size={16} /> Contact</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Python", "Computer Vision", "YOLOv8", "Raspberry Pi", "Jetson Nano", "Automation"].map((item) => <Badge key={item}>{item}</Badge>)}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Current focus</p>
                    <h3 className="text-2xl font-bold text-white">Edge AI Product Prototyping</h3>
                  </div>
                  <Cpu className="text-cyan-300" size={34} />
                </div>
                <div className="space-y-4">
                  {[
                    ["Computer Vision", "YOLOv8, OpenCV, CNN"],
                    ["Embedded AI", "Raspberry Pi, Jetson Nano"],
                    ["Automation", "Python workflow tools"],
                    ["Integration", "Hardware → API communication"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="font-semibold text-white">{k}</p>
                      <p className="mt-1 text-sm text-slate-400">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Featured Work"
            title="Projects that connect AI models with real hardware"
            description="Each project is positioned as an engineering case study: problem, solution, architecture, deployment constraints, and measurable outcome."
          />
          <div className="grid gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-slate-950/40 lg:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className="flex min-h-[320px] flex-col justify-between bg-gradient-to-br from-cyan-300/15 via-slate-900 to-violet-500/10 p-8">
                    <div>
                      <div className="mb-6 inline-flex rounded-2xl bg-cyan-300/10 p-4 text-cyan-200">
                        <Icon size={34} />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <p className="mt-3 text-slate-300">{project.subtitle}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">Problem</p>
                        <p className="leading-7 text-slate-300">{project.problem}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">Solution</p>
                        <p className="leading-7 text-slate-300">{project.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Key achievements</p>
                      <ul className="space-y-3 text-slate-300">
                        {project.impact.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a key={link} href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/10">
                          {link} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Technical Stack"
            title="Built for AI engineering, embedded systems, and automation"
            description="A skill set shaped by real prototypes: from model training to edge deployment and engineering handoff automation."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon className="mb-5 text-cyan-300" size={32} />
                  <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => <Badge key={item}>{item}</Badge>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Experience"
            title="R&D internship with automation and hardware integration work"
            description="Practical experience across engineering documentation, workflow automation, and prototype readiness."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              {experience.map((item) => (
                <div key={item.role}>
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 text-cyan-300">{item.company}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                      <Calendar size={15} /> {item.date}
                    </div>
                  </div>
                  <ul className="space-y-4 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <GraduationCap className="mb-5 text-cyan-300" size={34} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
              <p className="mt-3 text-slate-300">Ho Chi Minh City University of Technology (HUTECH)</p>
              <p className="mt-2 text-slate-300">B.Eng. Candidate in Robotics and Artificial Intelligence</p>
              <p className="mt-2 text-slate-400">GPA: 3.3/4.0 · Expected Graduation: 2026</p>

              <div className="mt-8 border-t border-white/10 pt-8">
                <Award className="mb-5 text-cyan-300" size={34} />
                <h3 className="text-2xl font-bold text-white">Awards & Leadership</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {awards.map((award) => (
                    <li key={award} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Engineering Mindset</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">I build AI systems that move beyond notebooks.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            My work focuses on turning models into usable systems: optimizing inference on edge devices, integrating hardware with software, designing reliable communication flows, and automating repetitive engineering workflows.
          </p>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build intelligent systems together"
            description="Open to AI Engineer, Computer Vision Engineer, Edge AI Engineer, and Automation Engineer roles from September 2026."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="mailto:ttphuong10404@gmail.com" primary><Mail size={16} /> Email Me</Button>
           
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={15} /> Ho Chi Minh City, Vietnam</span>
            <span>ttphuong10404@gmail.com</span>
            <span>(+84) 386 529 961</span>
          </div>
        </div>
      </section>
    </main>
  );
}
