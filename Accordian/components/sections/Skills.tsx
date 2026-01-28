'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

const stacks = [
  {
    title: 'Product Engineering',
    items: ['TypeScript', 'React / Next.js', 'Design Systems', 'Storybook'],
  },
  {
    title: 'Cloud & Platform',
    items: ['AWS / GCP', 'Kubernetes', 'Terraform', 'Observability'],
  },
  {
    title: 'Data & AI',
    items: ['Postgres', 'Kafka', 'Vector Search', 'LLM Tooling'],
  },
  {
    title: 'Delivery & Leadership',
    items: ['Architecture Reviews', 'Mentorship', 'Risk Mitigation', 'Roadmapping'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="grid-shell grid gap-12 pt-24">
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
          Stack
        </motion.p>
        <motion.h2
          className="font-display text-3xl text-mist sm:text-4xl"
          variants={fadeUp}
        >
          Modern tooling, battle‑tested architecture, design‑grade polish.
        </motion.h2>
      </motion.div>
      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stacks.map((stack) => (
          <motion.div
            key={stack.title}
            className="glass rounded-3xl p-6"
            variants={fadeUp}
            whileHover={{ y: -6, borderColor: 'rgba(124,107,255,0.5)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <h3 className="text-lg font-semibold text-mist">{stack.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
