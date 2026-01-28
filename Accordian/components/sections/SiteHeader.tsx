'use client';

import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="grid-shell flex items-center justify-between py-5">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-[0.3em]"
        >
          AC
        </a>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-muted lg:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="transition hover:text-mist"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <motion.a
          href="#contact"
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-mist"
          whileHover={{ scale: 1.03 }}
        >
          Let&apos;s Talk
        </motion.a>
      </div>
    </header>
  );
}
