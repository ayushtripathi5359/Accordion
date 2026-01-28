'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { clipReveal, stagger } from '@/lib/motion';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="grid-shell relative grid gap-12 pt-28 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div style={{ y }} className="flex flex-col gap-8">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted"
          variants={clipReveal}
          initial="hidden"
          animate="visible"
        >
          Principal Full‑Stack Engineer
        </motion.p>
        <motion.h1
          className="font-display text-4xl leading-tight text-mist sm:text-5xl lg:text-6xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {['I architect resilient platforms,', 'translate ambiguity into systems,', 'and craft digital experiences with intent.'].map(
            (line) => (
              <motion.span
                key={line}
                className="block overflow-hidden"
                variants={clipReveal}
              >
                {line}
              </motion.span>
            )
          )}
        </motion.h1>
        <motion.p
          className="max-w-xl text-base text-muted"
          variants={clipReveal}
          initial="hidden"
          animate="visible"
        >
          12+ years shipping cloud platforms, data systems, and product
          experiences that scale without sacrificing taste. I lead teams through
          high‑stakes launches with calm, precision, and a design‑first mindset.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:-translate-y-0.5"
            variants={clipReveal}
            whileHover={{ scale: 1.03 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-mist transition hover:-translate-y-0.5"
            variants={clipReveal}
            whileHover={{ scale: 1.03 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass rounded-3xl p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Currently</p>
          <h3 className="mt-4 text-lg font-semibold">
            Advising venture teams on scale, reliability, and AI‑powered
            workflows.
          </h3>
          <p className="mt-4 text-sm text-muted">New York · Remote · 2024</p>
        </div>
        <div className="glass rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/30 to-transparent p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Signature Focus
          </p>
          <h3 className="mt-4 text-lg font-semibold">
            Distributed systems, design systems, and calm automation.
          </h3>
          <p className="mt-4 text-sm text-muted">Cloud · Product · AI</p>
        </div>
      </motion.div>
    </section>
  );
}
