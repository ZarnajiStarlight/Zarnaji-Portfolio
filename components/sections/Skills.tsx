"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import {
  Monitor,
  Server,
  Database,
  Brain,
  BarChart2,
  Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Brain,
  BarChart2,
  Wrench,
};

const levelLabels = ["", "Pemula", "Familiar", "Mahir", "Lanjutan", "Ahli"];

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].name);

  const activeCategory = skillCategories.find((c) => c.name === active)!;

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Yang saya tawarkan</h2>
          <p className="section-subtitle">
            Dikelompokkan berdasarkan bidang — arahkan kursor untuk melihat konteks kemahiran.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category sidebar */}
          <div className="flex flex-row lg:flex-col flex-wrap gap-2 lg:gap-1">
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Monitor;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(cat.name)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200"
                  style={{
                    background: active === cat.name ? "var(--accent-light)" : "transparent",
                    color: active === cat.name ? "var(--accent)" : "var(--text-muted)",
                    border: `1px solid ${active === cat.name ? "var(--accent-muted)" : "transparent"}`,
                  }}
                >
                  <Icon size={16} />
                  <span className="hidden sm:block">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Skills panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="card p-6 lg:p-8"
                style={{ background: "var(--surface)" }}
              >
                <h3
                  className="text-base font-semibold mb-6"
                  style={{ color: "var(--text)" }}
                >
                  {activeCategory.name}
                </h3>
                <div className="space-y-5">
                  {activeCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "var(--text-subtle)" }}
                        >
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "var(--bg-tertiary)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(skill.level / 5) * 100}%` }}
                          transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
