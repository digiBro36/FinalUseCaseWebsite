import { BarChart2, CheckCircle, Handshake, Minus, ShieldCheck, Zap, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const differentiators = [
  {
    icon: Handshake,
    title: "We're Your Partner, Not a Vendor",
    desc: 'We invest in your success. When you grow, we grow. No transactional relationships.',
  },
  {
    icon: BarChart2,
    title: 'Full Transparency, Always',
    desc: 'Real-time dashboards, weekly updates, monthly video reports. No black boxes.',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    desc: 'Campaigns launched in 72 hours. No waiting weeks for results to start rolling in.',
  },
  {
    icon: ShieldCheck,
    title: 'Performance Guarantee',
    desc: 'If we don’t hit agreed KPIs in 90 days, we work free until we do. That’s our promise.',
  },
];

const statusIcon = {
  yes: <CheckCircle className="h-5 w-5 text-emerald-400" />,
  no: <XCircle className="h-5 w-5 text-rose-400" />,
  sometimes: <Minus className="h-5 w-5 text-text-secondary" />,
};

const tableRows = [
  ['Dedicated Account Manager', statusIcon.yes, statusIcon.sometimes, statusIcon.no],
  ['Transparent Reporting', statusIcon.yes, statusIcon.no, statusIcon.sometimes],
  ['Data-Driven Strategy', statusIcon.yes, statusIcon.sometimes, statusIcon.no],
  ['End-to-End Services', statusIcon.yes, statusIcon.no, statusIcon.no],
  ['24/7 Support', statusIcon.yes, statusIcon.no, statusIcon.no],
  ['No Long-Term Contracts', statusIcon.yes, statusIcon.no, statusIcon.yes],
  ['Performance Guarantee', statusIcon.yes, statusIcon.no, statusIcon.no],
  ['Startup-Friendly Pricing', statusIcon.yes, statusIcon.no, statusIcon.yes],
];

export function WhyUs() {
  return (
    <section id="why_us" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Why DigiBro
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-glass">
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      DigiBro
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Typical Agency
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Freelancer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, rowIndex) => (
                    <tr key={`${row[0]}-${rowIndex}`} className="border-t border-white/10">
                      {row.map((cell, idx) => (
                        <td
                          key={`${row[0]}-${idx}`}
                          className={
                            'px-4 py-4 text-sm ' + (idx === 0 ? 'text-text-primary font-medium' : 'text-text-secondary')
                          }
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-secondary">
              We pair world-class creative with meticulous execution and full transparency — so you can see the impact in real time.
            </p>
          </div>

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-xl">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
