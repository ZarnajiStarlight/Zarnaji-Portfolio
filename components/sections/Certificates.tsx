"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Award, ExternalLink } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Web Development": "#1d4ed8",
  "Backend Development": "#7c3aed",
  "Data Science": "#0e7490",
  "Data Analysis": "#b45309",
};

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Certificates</p>
          <h2 className="section-title">Credentials & Learning</h2>
          <p className="section-subtitle">
            Continuous learning through structured courses and certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-5 group"
              style={{ background: "var(--surface)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${categoryColors[cert.category] ?? "var(--accent)"}18`,
                  color: categoryColors[cert.category] ?? "var(--accent)",
                }}
              >
                <Award size={18} />
              </div>

              <h3
                className="text-sm font-semibold leading-snug mb-1"
                style={{ color: "var(--text)" }}
              >
                {cert.name}
              </h3>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between mt-3">
                <span className="badge text-xs">{cert.category}</span>
                <span className="text-xs" style={{ color: "var(--text-subtle)" }}>
                  {cert.date}
                </span>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1 text-xs font-medium transition-colors hover:text-(--accent)"
                  style={{ color: "var(--text-subtle)" }}
                >
                  View credential
                  <ExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
