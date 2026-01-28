import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="grid-shell grid gap-10 pt-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Philosophy
        </p>
      </Reveal>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="font-display text-3xl text-mist sm:text-4xl">
            Engineering with narrative, clarity, and measured impact.
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-base text-muted">
            I build systems that are resilient under pressure and experiences
            that feel effortless. My approach blends architecture, product
            thinking, and modern design to translate ambiguity into outcomes
            teams can trust.
          </p>
        </Reveal>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Systems mindset',
            body: 'From infra migrations to multi-region orchestration, I focus on reliability, observability, and cost discipline.',
          },
          {
            title: 'Product intuition',
            body: 'I partner with design and product to make sure every capability feels inevitable, not bolted on.',
          },
          {
            title: 'Leadership in motion',
            body: 'I coach teams to ship faster without losing rigor, setting the cadence for sustainable delivery.',
          },
        ].map((item) => (
          <Reveal key={item.title}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-mist">{item.title}</h3>
              <p className="mt-4 text-sm text-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
