import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['All', 'Social Media', 'Performance Ads', 'Web Design', 'SEO', 'Branding'];

const caseStudies = [
  {
    client: 'Bloom Digital India',
    industry: 'Digital Agency',
    service: 'Performance Marketing',
    thumbnailBg: 'from-indigo-500 to-purple-600',
    results: ['+340% Leads in 60 Days', 'ROAS 4.2x', 'CPL reduced by 60%'],
    description:
      'Restructured their entire Google Ads and Meta Ads strategy, rebuilding funnels and creatives from scratch.',
    tag: 'Performance Ads',
  },
  {
    client: 'Nectar Marketing',
    industry: 'B2B Marketing',
    service: 'Social Media + Content',
    thumbnailBg: 'from-orange-500 to-red-500',
    results: ['2x Leads in 30 Days', '50K+ Organic Reach/Month', '12K New Followers'],
    description:
      'Built a full content strategy and Reels production pipeline that transformed their LinkedIn and Instagram presence.',
    tag: 'Social Media',
  },
  {
    client: 'Sparkle Studios',
    industry: 'Fashion & Lifestyle',
    service: 'E-commerce Website + SEO',
    thumbnailBg: 'from-pink-500 to-rose-500',
    results: ['300% Organic Traffic', '#1 Google Ranking', '85% Bounce Rate Drop'],
    description:
      'Complete website rebuild and SEO overhaul that took them from page 5 to page 1 for 40+ high-intent keywords.',
    tag: 'SEO',
  },
  {
    client: 'Growthify SaaS',
    industry: 'Software / SaaS',
    service: 'Full Branding + Web Design',
    thumbnailBg: 'from-cyan-500 to-blue-500',
    results: ['New Brand Identity', '35% Higher Conversion Rate', 'Product Hunt #1 of the Day'],
    description:
      'Built their brand from zero — name, logo, design system, website, and launch marketing campaign.',
    tag: 'Branding',
  },
  {
    client: 'Velocity Gym Chain',
    industry: 'Fitness & Wellness',
    service: 'Local SEO + Meta Ads',
    thumbnailBg: 'from-green-500 to-teal-500',
    results: ['500+ Monthly Inquiries', 'Google Maps Top 3', '₹8L Revenue in 90 Days'],
    description:
      'Deployed hyper-local SEO and Facebook lead gen ads across 5 gym locations in Mumbai.',
    tag: 'Performance Ads',
  },
  {
    client: 'ClearConvert EdTech',
    industry: 'Education',
    service: 'YouTube + Email Marketing',
    thumbnailBg: 'from-violet-500 to-purple-500',
    results: ['100K YouTube Subscribers', '45% Email Open Rate', '₹25L Course Sales'],
    description:
      'Built their YouTube channel growth strategy and email drip automation that converts subscribers into paying students.',
    tag: 'Social Media',
  },
];

export function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return caseStudies;
    return caseStudies.filter((item) => item.tag === active);
  }, [active]);

  return (
    <section id="portfolio" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Results We've Delivered for Real Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            From hyper-targeted ads to viral social campaigns — these case studies show how we deliver growth that matters.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === tab
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-black shadow-glow'
                  : 'bg-white/5 text-text-secondary hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    {caseStudy.industry}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{caseStudy.client}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{caseStudy.service}</p>
                </div>
                <div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${caseStudy.thumbnailBg} flex items-center justify-center text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
                >
                  {caseStudy.client.charAt(0)}
                </div>
              </div>
              <p className="mt-5 text-sm text-text-secondary">{caseStudy.description}</p>
              <div className="mt-5 grid gap-2 text-sm">
                {caseStudy.results.map((result) => (
                  <div key={result} className="flex items-center gap-3 text-text-secondary">
                    <span className="text-lg">•</span>
                    <span>{result}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-text-secondary">{caseStudy.tag}</span>
                <button className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
