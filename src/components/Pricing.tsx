import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for new businesses',
    priceMonthly: '₹15,000',
    priceQuarterly: '₹12,750',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Social Media Management (2 platforms)',
      '15 Posts/Month',
      'Basic Analytics Report',
      '1 Ad Campaign Management',
      'Email Support',
      'Monthly Strategy Call',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    tagline: 'For scaling businesses',
    priceMonthly: '₹35,000',
    priceQuarterly: '₹29,750',
    color: 'from-indigo-500 to-indigo-700',
    features: [
      'Social Media Management (4 platforms)',
      '30 Posts + 8 Reels/Month',
      'Performance Marketing (₹50K Ad Budget Managed)',
      'SEO Optimization (10 Keywords)',
      'Website Landing Page',
      'Bi-weekly Strategy Calls',
      'Dedicated Account Manager',
      'Detailed Monthly Reports',
    ],
    popular: true,
    popularBadge: 'Most Popular',
  },
  {
    name: 'Premium',
    tagline: 'Full-service agency partner',
    priceMonthly: '₹75,000',
    priceQuarterly: '₹63,750',
    color: 'from-yellow-500 to-orange-500',
    features: [
      'Everything in Growth, plus:',
      'Full Website Design & Dev',
      'Unlimited Ad Budget Management',
      'Full SEO Package (50 Keywords)',
      'Branding & Graphic Design',
      'Video Production (4 Reels/Mo)',
      'Email & WhatsApp Marketing',
      '24/7 Priority Support',
      'Weekly Strategy Sessions',
      'Competitor Intelligence Reports',
    ],
    popular: false,
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Transparent Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Flexible Plans for Every Stage of Growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            No hidden fees. No long-term lock-ins. Just results.
          </p>
        </div>

        <div className="mb-10 flex items-center justify-center gap-4">
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === 'monthly'
                ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-black shadow-glow'
                : 'bg-white/10 text-text-secondary hover:bg-white/20'
            }`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === 'quarterly'
                ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-black shadow-glow'
                : 'bg-white/10 text-text-secondary hover:bg-white/20'
            }`}
            onClick={() => setBilling('quarterly')}
          >
            Quarterly (save 15%)
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              {plan.popular ? (
                <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-2 text-xs font-semibold text-black">
                  {plan.popularBadge}
                </div>
              ) : null}
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                  {plan.name}
                </p>
                <p className="mt-1 text-base text-text-secondary">{plan.tagline}</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">
                  {billing === 'monthly' ? plan.priceMonthly : plan.priceQuarterly}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {billing === 'monthly' ? 'Billed monthly' : 'Billed quarterly'}
                </p>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-text-secondary">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 text-base">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                size="lg"
                className={`w-full ${plan.color} text-black`}
              >
                {plan.name === 'Premium' ? 'Go Premium' : plan.name === 'Growth' ? 'Start Growing' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-text-secondary">
          Need something custom? Let&apos;s build a plan just for you.
          <button
            onClick={() => {
              const el = document.getElementById('cta_section');
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="ml-2 font-semibold text-white underline underline-offset-4"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
