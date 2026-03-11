import { Flame, Handshake, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const values = [
  {
    icon: Target,
    title: 'Results-First',
    desc: 'Every decision is backed by data and tied to your business goals.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    desc: 'We treat your business like our own. Your win is our win.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: "We stay ahead of trends so you're always one step ahead of competition.",
  },
  {
    icon: Flame,
    title: 'Passion',
    desc: 'We pour genuine energy into every campaign, every brand, every client.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
              Who We Are
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Your Digital Bro — Not Just an Agency
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                DigiBro was built on one belief: businesses don't just need marketing services — they need a genuine partner who grows with them.
                Like a brother who has your back, we work alongside you every step of the way.
              </p>
              <p>
                We combine data-driven strategy with bold creativity to deliver results that actually move the needle. Whether you're a startup
                finding your voice or an established brand ready to scale, DigiBro is your unfair advantage in the digital world.
              </p>
              <p>
                Based in India, working globally — we've helped 200+ businesses build powerful online presences, generate quality leads, and
                dominate their markets.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-glass"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-lg">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-text-secondary">{value.desc}</p>
                </motion.div>
              ))}
            </div>

            <Button
              variant="ghost"
              size="lg"
              className="mt-4 w-full max-w-sm border border-white/10"
              onClick={() => {
                const el = document.getElementById('portfolio');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Meet the Team
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/10 p-6 shadow-card backdrop-blur-glass" />
              <div className="relative rounded-3xl border border-white/10 bg-bg-card/70 p-6 shadow-card backdrop-blur-glass">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-text-secondary">Team Culture</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-text-primary">DigiBro</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-16 w-16 rounded-2xl bg-white/10" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">Creative energy.</p>
                        <p className="text-sm text-text-secondary">Built by a team that lives and breathes growth.</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-accent-primary" />
                        <span>Stable. Trusted. Constantly evolving.</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-text-secondary">Award-winning campaigns</p>
                      <span className="text-sm font-semibold text-white">+24</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-text-secondary">Happy clients</p>
                      <span className="text-sm font-semibold text-white">200+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
