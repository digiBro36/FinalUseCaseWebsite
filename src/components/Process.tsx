import { Clipboard, Rocket, Search, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a free 30-minute consultation to understand your business, goals, target audience, and current marketing challenges.',
    icon: Search,
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Strategy & Blueprint',
    description:
      'Our team crafts a data-driven, customized growth strategy with clear KPIs, timelines, and expected outcomes tailored to your budget.',
    icon: Clipboard,
    duration: 'Days 2-5',
  },
  {
    number: '03',
    title: 'Execution & Launch',
    description:
      'We build, create, and launch your campaigns with precision. Every asset is crafted to convert and every campaign is optimized from day one.',
    icon: Rocket,
    duration: 'Week 1-2',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description:
      'We monitor performance 24/7, optimize relentlessly, and scale what works. Monthly reviews keep you fully informed and in control.',
    icon: TrendingUp,
    duration: 'Ongoing',
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            From Strategy to Success in 4 Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Every project moves through our proven, high-velocity workflow to ensure speed, clarity, and measurable outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-10 h-[calc(100%-4rem)] w-1 -translate-x-1/2 bg-gradient-to-b from-accent-primary/40 to-accent-secondary/10" />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-xl">
                    <step.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-right text-xs font-semibold text-text-secondary">
                    <div>{step.duration}</div>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{step.description}</p>
                <div className="absolute -right-8 top-9 hidden h-16 w-16 rounded-full bg-accent-primary/20 blur-2xl lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
