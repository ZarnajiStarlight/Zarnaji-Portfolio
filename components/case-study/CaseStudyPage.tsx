"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Zap,
  ChevronRight,
  Monitor,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function Section({
  title,
  icon: Icon,
  iconColor,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  iconColor?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: iconColor ? `${iconColor}18` : "var(--accent-light)", color: iconColor ?? "var(--accent)" }}
        >
          <Icon size={16} />
        </div>
        <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

export default function CaseStudyPage({ project }: Props) {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: project.coverColor, minHeight: "340px" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                {project.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              {project.subtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <User size={14} />
                {project.role}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {project.duration}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {project.year}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievement banner */}
      <div style={{ background: "var(--accent)", padding: "12px 0" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-white text-sm font-medium text-center">
            ✦ {project.achievement}
          </p>
        </div>
      </div>

      {/* Tech stack bar */}
      <div
        className="border-b border-[var(--border)] sticky top-[57px] z-30"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-3 overflow-x-auto">
          <span className="text-xs font-medium shrink-0" style={{ color: "var(--text-muted)" }}>
            Built with:
          </span>
          <div className="flex gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge text-xs whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Overview */}
        <Section title="Project Overview" icon={Zap} delay={0}>
          <div
            className="card p-6 lg:p-8"
            style={{ background: "var(--surface)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {project.overview}
            </p>
          </div>
        </Section>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <Section title="Project Highlights" icon={Monitor} iconColor="#3b82f6" delay={0.5}>
            <div className="grid grid-cols-1 gap-6">
              {project.screenshots.map((ss, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src={ss.url}
                      alt={ss.caption}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-center italic" style={{ color: "var(--text-muted)" }}>
                    {ss.caption}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Problem */}
        <Section title="The Problem" icon={AlertTriangle} iconColor="#b45309" delay={1}>
          <div
            className="card p-6 lg:p-8 border-l-4"
            style={{
              background: "var(--surface)",
              borderLeftColor: "#f59e0b",
            }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {project.problem}
            </p>
          </div>
        </Section>

        {/* Research */}
        <Section title="Research & Discovery" icon={Lightbulb} iconColor="#7c3aed" delay={2}>
          <div
            className="card p-6 lg:p-8"
            style={{ background: "var(--surface)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {project.research}
            </p>
          </div>
        </Section>

        {/* Solution */}
        <Section title="The Solution" icon={CheckCircle2} iconColor="#059669" delay={3}>
          <div
            className="card p-6 lg:p-8 border-l-4"
            style={{
              background: "var(--surface)",
              borderLeftColor: "#10b981",
            }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {project.solution}
            </p>
          </div>
        </Section>

        {/* Architecture & Database */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--accent-light)", color: "var(--accent)" }}
              >
                <Zap size={16} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                System Architecture
              </h2>
            </div>
            <div className="card p-5" style={{ background: "var(--surface)", height: "calc(100% - 52px)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {project.architecture}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#0e749018", color: "#0e7490" }}
              >
                <Zap size={16} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                Database Design
              </h2>
            </div>
            <div className="card p-5" style={{ background: "var(--surface)", height: "calc(100% - 52px)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {project.databaseDesign}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <Section title="Key Features" icon={CheckCircle2} iconColor="#059669" delay={6}>
          <div className="space-y-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-5 flex items-start gap-4"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#05966918", color: "#059669" }}
                >
                  <ChevronRight size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Challenges */}
        <Section title="Challenges & Solutions" icon={AlertTriangle} iconColor="#b45309" delay={7}>
          <div className="space-y-4">
            {project.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-6"
                style={{ background: "var(--surface)" }}
              >
                <h4 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
                  ⚠ {challenge.title}
                </h4>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                  <span className="font-medium" style={{ color: "var(--text-secondary)" }}>Problem: </span>
                  {challenge.description}
                </p>
                <div
                  className="p-3 rounded-xl text-sm leading-relaxed"
                  style={{ background: "#05966912", color: "var(--text-secondary)" }}
                >
                  <span className="font-medium" style={{ color: "#059669" }}>✓ Solution: </span>
                  {challenge.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section title="Results & Impact" icon={TrendingUp} iconColor="#1d4ed8" delay={8}>
          <div className="card p-6 lg:p-8" style={{ background: "var(--surface)" }}>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="text-base shrink-0 mt-0.5">✦</span>
                  {result}
                </motion.li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Lessons */}
        <Section title="Lessons Learned" icon={Lightbulb} iconColor="#7c3aed" delay={9}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.lessons.map((lesson, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-4"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span className="text-base mr-1">💡</span>
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Future */}
        <Section title="Future Improvements" icon={Zap} delay={10}>
          <div className="card p-6" style={{ background: "var(--surface)" }}>
            <ul className="space-y-2">
              {project.futureImprovements.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Back nav */}
        <motion.div
          variants={fadeUp}
          custom={11}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Let&apos;s work together
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
