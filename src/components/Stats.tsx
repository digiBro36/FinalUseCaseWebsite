import { BarChart2, DollarSign, Lock, Rocket, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './ui/AnimatedCounter';

const stats = [
  { icon: Users, number: 200, label: 'Clients Served', suffix: '+' },
  { icon: Rocket, number: 500, label: 'Campaigns Launched', suffix: '+' },
  { icon: BarChart2, number: 4.2, label: 'Average ROAS', suffix: 'x' },
  { icon: Lock, number: 98, label: 'Client Retention', suffix: '%' },
  { icon: DollarSign, number: 10, label: 'Revenue Generated', suffix: 'Cr+' },
  { icon: Star, number: 5, label: 'Years Experience', suffix: '+' },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Impact Stats
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Data That Speaks Volumes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Our work is built on measurable impact. Every percentage point, every lead, and every dollar is tracked.
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-bg-card/60 p-8 backdrop-blur-glass shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-lg">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
