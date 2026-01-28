'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

const journey = [
  {
    year: '2024',
    title: 'Independent Principal Engineer',
    body: 'Partnering with founders to scale infrastructure, refine product strategy, and ship investor‑grade experiences.',
  },
  {
    year: '2020',
    title: 'Head of Platform Engineering · Fintech',
    body: 'Led cloud modernization and risk systems for a global payments network with 99.99% uptime targets.',
  },
  {
    year: '2016',
    title: 'Staff Engineer · Media & Data',
    body: 'Delivered real-time analytics pipelines and guided design system adoption across editorial teams.',
  },
];

export function Experience() {
  return (
    <section id="journey" className="grid-shell grid gap-10 pt-24">
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
          Journey
        </motion.p>
        <motion.h2
          className="font-display text-3xl text-mist sm:text-4xl"
          variants={fadeUp}
        >
          From builder to systems strategist.
        </motion.h2>
      </motion.div>
      <motion.div
        className="grid gap-6 border-l border-white/10 pl-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {journey.map((item) => (
          <motion.div
            key={item.year}
            className="grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 lg:grid-cols-[80px_1fr]"
            variants={fadeUp}
          >
            <span className="text-sm font-semibold text-muted">{item.year}</span>
            <div>
              <h3 className="text-lg font-semibold text-mist">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
