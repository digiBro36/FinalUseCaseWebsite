import { Mail, Monitor, Palette, Search, Smartphone, Target, Video, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: Smartphone,
    title: 'Social Media Management',
    description:
      "We build, grow, and manage your brand's social presence across Instagram, Facebook, LinkedIn, and more. Content that stops the scroll.",
    features: [
      'Instagram & Facebook Management',
      'Content Creation (Posts, Reels, Stories)',
      'Caption Writing & Hashtag Strategy',
      'Monthly Analytics Reports',
      'Community Management',
      'Competitor Analysis',
    ],
    badge: 'Most Popular',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 2,
    icon: Target,
    title: 'Performance Marketing',
    description:
      'ROI-focused paid ad campaigns that generate leads and sales fast. We manage every rupee like it\'s our own.',
    features: [
      'Google Ads (Search, Display, Shopping)',
      'Facebook & Instagram Ads',
      'YouTube Ads',
      'Lead Generation Funnels',
      'Retargeting Campaigns',
      'A/B Split Testing',
    ],
    badge: 'High ROI',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 3,
    icon: Monitor,
    title: 'Website Design & Development',
    description:
      'Beautiful, blazing-fast websites that convert visitors into customers. Mobile-first, SEO-ready, conversion-optimized.',
    features: [
      'Business Websites',
      'Landing Pages for Ads',
      'E-commerce Stores',
      'Website Redesign',
      'UI/UX Design',
      'Speed Optimization',
    ],
    badge: 'New',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 4,
    icon: Search,
    title: 'SEO & Organic Growth',
    description:
      'Rank on Google and stay there. Our SEO strategies drive long-term, compounding organic traffic to your business.',
    features: [
      'Local SEO (Google Maps)',
      'Technical SEO Audit',
      'Keyword Research & Strategy',
      'Link Building',
      'Blog Content SEO',
      'Core Web Vitals Optimization',
    ],
    badge: 'Long-term',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 5,
    icon: Palette,
    title: 'Branding & Graphic Design',
    description:
      'Build a brand that people remember. From logos to complete visual identity systems that tell your story.',
    features: [
      'Logo Design',
      'Brand Identity Kit',
      'Packaging Design',
      'Social Media Templates',
      'Brand Guidelines',
      'Pitch Deck Design',
    ],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 6,
    icon: Mail,
    title: 'Email & WhatsApp Marketing',
    description:
      'Direct, personalized communication at scale. High open rates, zero algorithm dependency, maximum conversions.',
    features: [
      'Email Campaign Strategy',
      'WhatsApp Broadcast Campaigns',
      'Drip Automation Sequences',
      'Lead Nurturing Flows',
      'Newsletter Management',
      'Open Rate Optimization',
    ],
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: 7,
    icon: Video,
    title: 'Video Marketing & Reels',
    description:
      'Video is the future. We script, produce, and distribute short-form and long-form video content that goes viral.',
    features: [
      'Reels & Shorts Production',
      'YouTube Channel Growth',
      'Video Ad Creatives',
      'Scriptwriting',
      'Motion Graphics',
      'Thumbnail Design',
    ],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 8,
    icon: BarChart2,
    title: 'Analytics & Growth Consulting',
    description:
      'Data without insight is noise. We turn your numbers into actionable strategies for sustainable growth.',
    features: [
      'Monthly Performance Reports',
      'GA4 & Meta Pixel Setup',
      'Conversion Tracking',
      'Growth Strategy Sessions',
      'Competitor Benchmarking',
      'KPI Dashboard Setup',
    ],
    gradient: 'from-indigo-500 to-blue-700',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Full-Stack Digital Marketing Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            From brand discovery to revenue generation — everything under one roof.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-glass transition hover:-translate-y-1 hover:border-accent-primary/40 hover:bg-white/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    {service.badge ? (
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-text-secondary">
                        {service.badge}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-secondary">{service.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-text-secondary">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 text-base">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    {service.features.length} features
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
