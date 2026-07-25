"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import Image from "next/image";

const typeIcons: Record<string, React.ElementType> = {
  Freelance: Briefcase,
  Research: GraduationCap,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Work Experience</p>
          <h2 className="section-title">Yang telah saya kerjakan</h2>
          <p className="section-subtitle">
            Keterlibatan profesional yang memberikan hasil terukur.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 lg:left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = typeIcons[exp.type] ?? Briefcase;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14 lg:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 lg:left-2 top-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-[var(--border)] flex items-center justify-center"
                    style={{
                      background: "var(--surface)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={14} />
                  </div>

                  {/* Card */}
                  <div
                    className="card p-6 lg:p-8"
                    style={{ background: "var(--surface)" }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="badge badge-accent text-xs">{exp.type}</span>
                          <span
                            className="text-xs"
                            style={{ color: "var(--text-subtle)" }}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <h3
                          className="text-lg font-bold"
                          style={{ color: "var(--text)" }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((r, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <ChevronRight
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: "var(--accent)" }}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {/* Screenshots */}
                    {exp.screenshots && exp.screenshots.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {exp.screenshots.map((ss, idx) => (
                          <div key={idx} className="flex flex-col gap-1.5">
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[var(--border)]">
                              <Image
                                src={ss.url}
                                alt={ss.caption}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <p className="text-xs text-center italic" style={{ color: "var(--text-muted)" }}>
                              {ss.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span key={s} className="badge text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
