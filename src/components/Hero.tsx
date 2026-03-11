import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Flame, Play, Star, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px] animate-glowPulse" />
      <div className="pointer-events-none absolute right-[10%] top-[25%] h-80 w-80 rounded-full bg-orange-400/15 blur-[160px] animate-glowPulse" />
      <div className="pointer-events-none absolute left-[30%] bottom-12 h-64 w-64 rounded-full bg-purple-500/20 blur-[140px] animate-glowPulse" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 py-24 lg:flex-row lg:items-center">
        <div className="z-10 flex w-full flex-col gap-8 lg:w-1/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textContainer}>
            <motion.p variants={item} className="text-sm font-accent uppercase tracking-widest text-text-secondary">
              Your Digital Growth Partner
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span className="block">We Build Brands</span>
              <span className="block">That Dominate</span>
              <span className="block">The Digital World</span>
            </motion.h1>
            <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Premium marketing solutions for ambitious businesses. From viral social media to performance ads — we turn your vision into measurable growth.
            </motion.p>
            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <span className="font-medium text-text-primary">We specialize in</span>
              <TypeAnimation
                sequence={[
                  'Social Media Growth',
                  1600,
                  'Performance Marketing',
                  1600,
                  'Brand Identity',
                  1600,
                  'SEO Domination',
                  1600,
                  'Web Design',
                  1600,
                  'Lead Generation',
                  1600,
                ]}
                speed={60}
                wrapper="span"
                repeat={Infinity}
                className="font-accent font-semibold text-white"
              />
            </motion.div>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                className="shadow-glow"
                onClick={() => {
                  const el = document.getElementById('cta_section');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Start Your Growth Journey
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-white/15 bg-white/5"
                onClick={() => {
                  const el = document.getElementById('cta_section');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Play className="h-4 w-4" />
                Watch Our Story
              </Button>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4 text-sm text-text-secondary"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-10 w-10 rounded-full border border-white/20 bg-white/10"
                      style={{ marginLeft: idx === 0 ? 0 : '-0.65rem' }}
                    />
                  ))}
                </div>
                <span className="text-text-primary">Trusted by 200+ Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-text-primary">4.9/5</span>
                <span className="flex items-center gap-2 text-text-secondary">
                  <Star className="h-4 w-4 text-yellow-300" />
                  <span>from 150+ reviews</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 flex w-full flex-col items-center lg:w-1/2"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-glass shadow-card">
              <div className="absolute -left-8 -top-8 h-16 w-16 rounded-full bg-accent-primary/40 blur-2xl" />
              <div className="absolute -right-8 bottom-10 h-20 w-20 rounded-full bg-accent-secondary/30 blur-2xl" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Analytics Snapshot
                    </p>
                    <p className="text-lg font-semibold text-white">Campaign Performance</p>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-xs text-text-secondary">Live</span>
                  </div>
                </div>
                <div className="mt-6 h-32 w-full rounded-2xl bg-gradient-to-r from-indigo-500/15 via-transparent to-orange-500/20 p-4">
                  <svg viewBox="0 0 200 80" className="h-full w-full">
                    <path
                      d="M10 60 C 50 10, 90 40, 130 30 S 190 40 190 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="60" r="4" fill="#6C63FF" />
                    <circle cx="130" cy="30" r="4" fill="#F5A623" />
                    <circle cx="190" cy="40" r="4" fill="#4F46E5" />
                  </svg>
                </div>

                <div className="mt-6 grid gap-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Leads</span>
                    <span className="font-semibold text-white">+340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">ROAS</span>
                    <span className="font-semibold text-white">4.2x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Traffic</span>
                    <span className="font-semibold text-white">128K</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 flex w-64 flex-col gap-4">
              {[
                { icon: TrendingUp, text: '340% Lead Growth' },
                { icon: Target, text: 'ROAS 4.2x' },
                { icon: Flame, text: '12K New Followers' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-card backdrop-blur-glass"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-base">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-medium text-text-primary">{badge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-secondary">
          <span>Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
        <div className="h-0.5 w-24 rounded-full bg-white/10" />
      </div>
    </section>
  );
}
