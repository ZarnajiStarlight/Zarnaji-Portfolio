"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

type FilterKey = "all" | "web" | "ai" | "data" | "system";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Semua Proyek" },
  { key: "ai", label: "AI / CV" },
  { key: "data", label: "Analisis Data" },
  { key: "web", label: "Aplikasi Web" },
  { key: "system", label: "Sistem" },
];

const categoryColors: Record<string, string> = {
  ai: "#7c3aed",
  data: "#0e7490",
  web: "#1d4ed8",
  system: "#166534",
};

export default function Projects() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Featured Projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="section-title">
              Karya yang saya banggakan
            </h2>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className="px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200"
                  style={{
                    background: active === f.key ? "var(--accent)" : "var(--surface)",
                    color: active === f.key ? "white" : "var(--text-muted)",
                    borderColor: active === f.key ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
                style={{ background: "var(--surface)" }}
              >
                {/* Cover */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: project.coverColor }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="text-center z-10 px-6">
                    <div className="text-4xl mb-2">
                      {project.category === "ai" ? "🤖" :
                       project.category === "data" ? "📊" :
                       project.category === "web" ? "🌐" : "📦"}
                    </div>
                    <p className="text-white/60 text-sm font-medium">{project.categoryLabel}</p>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${categoryColors[project.category]}18`,
                        color: categoryColors[project.category],
                      }}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-1 leading-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  {/* Meta */}
                  <div
                    className="flex items-center gap-4 text-xs mb-4"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {project.role}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {project.duration}
                    </span>
                  </div>

                  {/* Achievement highlight */}
                  <div
                    className="px-3 py-2.5 rounded-lg mb-5 text-xs font-medium"
                    style={{
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                    }}
                  >
                    ✦ {project.achievement}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="badge text-xs">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="badge text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: "var(--accent)" }}
                  >
                    View Case Study
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
