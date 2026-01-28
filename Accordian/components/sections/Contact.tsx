'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

export function Contact() {
  return (
    <section id="contact" className="grid-shell pt-24">
      <motion.div
        className="glass rounded-[32px] border border-accent/40 bg-gradient-to-br from-accent/25 via-slate/80 to-slate p-10 shadow-soft"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted"
          variants={fadeUp}
        >
          Contact
        </motion.p>
        <motion.h2
          className="mt-4 font-display text-3xl text-mist sm:text-4xl"
          variants={fadeUp}
        >
          Let&apos;s build something that feels inevitable.
        </motion.h2>
        <motion.p className="mt-6 max-w-2xl text-sm text-muted" variants={fadeUp}>
          I partner with ambitious teams to deliver the next leap in
          performance, reliability, and product craftsmanship. If you&apos;re ready
          to elevate your platform, let&apos;s talk.
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeUp}>
          <motion.a
            href="mailto:hello@ardencole.dev"
            className="rounded-full bg-mist px-6 py-3 text-sm font-semibold text-ink"
            whileHover={{ y: -3, scale: 1.02 }}
          >
            hello@ardencole.dev
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-mist"
            whileHover={{ y: -3, scale: 1.02 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
