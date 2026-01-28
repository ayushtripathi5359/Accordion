'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

const projects = [
  {
    label: 'Global Fintech Platform',
    title: 'Regulatory‑grade payments orchestration across three continents.',
    description:
      'Re-architected a critical payments core, decreasing settlement latency by 42% while meeting SOC2 and PCI requirements.',
    meta: ['Role: Principal Engineer', 'Stack: Go, Postgres, Kafka', 'Impact: 2.1x throughput'],
  },
  {
    label: 'Media Intelligence Suite',
    title: 'Real-time analytics that reshaped newsroom decision-making.',
    description:
      'Built streaming pipelines and a modular design system so editors could navigate engagement signals across 180 markets.',
    meta: ['Role: Engineering Lead', 'Stack: TypeScript, React, AWS', 'Impact: 65% faster insights'],
  },
  {
    label: 'AI Copilot for Enterprise Ops',
    title: 'Human-centered automation for complex workflows.',
    description:
      'Designed a secure AI assistant wrapping proprietary workflows with explainability, reducing manual triage by 70%.',
    meta: ['Role: Product & Tech Strategy', 'Stack: Python, LangChain, Next.js', 'Impact: 4x analyst capacity'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="grid-shell grid gap-10 pt-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-4"
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted"
          variants={fadeUp}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="font-display text-3xl text-mist sm:text-4xl"
          variants={fadeUp}
        >
          Case‑study caliber projects with measurable impact.
        </motion.h2>
      </motion.div>
      <motion.div
        className="grid gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.label}
            className="group rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-8"
            variants={fadeUp}
            whileHover={{ y: -8, borderColor: 'rgba(124,107,255,0.4)' }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                {project.label}
              </p>
              <h3 className="text-2xl font-semibold text-mist">
                {project.title}
              </h3>
              <p className="text-sm text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-4 text-xs text-muted">
                {project.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
