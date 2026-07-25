"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "Laravel", icon: "🔴", category: "Framework" },
  { name: "PHP", icon: "🐘", category: "Language" },
  { name: "Python", icon: "🐍", category: "Language" },
  { name: "JavaScript", icon: "🟡", category: "Language" },
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "SQL", icon: "🗄️", category: "Database" },
  { name: "YOLO11", icon: "🤖", category: "AI / CV" },
  { name: "Bootstrap", icon: "💠", category: "Frontend" },
  { name: "Git", icon: "🌿", category: "Tools" },
  { name: "Google Sheets", icon: "📊", category: "Data" },
  { name: "Excel", icon: "📈", category: "Data" },
  { name: "SPSS", icon: "📉", category: "Data" },
];

const categories = [...new Set(techStack.map((t) => t.category))];

export default function TechStack() {
  return (
    <section id="tech" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle mx-auto">
            Tools and languages I use to build, analyze, and ship real software.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-[var(--border)] cursor-default transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]"
              style={{ background: "var(--surface)" }}
            >
              <span className="text-3xl transition-transform duration-200 group-hover:scale-110">
                {tech.icon}
              </span>
              <div className="text-center">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {tech.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <span key={cat} className="badge badge-accent">
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
