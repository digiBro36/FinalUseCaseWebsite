import { useState } from 'react';
import { ArrowRight, Calendar, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

const servicesOptions = [
  'Social Media',
  'Performance Ads',
  'Website Design',
  'SEO',
  'Branding',
  'Email Marketing',
  'Full Package',
];

const budgetOptions = [
  'Under ₹10,000',
  '₹10,000-₹30,000',
  '₹30,000-₹1L',
  '₹1L+',
  "Let's Discuss",
];

export function CTASection() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    services: [] as string[],
    budget: '',
    goals: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setForm((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="cta_section" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Ready to Grow?
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Let&apos;s Build Something Incredible Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Book a free 30-minute strategy call. No commitments, no pressure — just real insights on how to grow your business.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-glass">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Your Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent-primary focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Business Name
                  <input
                    required
                    value={form.business}
                    onChange={(e) => handleChange('business', e.target.value)}
                    placeholder="Your Company"
                    className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent-primary focus:outline-none"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Email Address
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent-primary focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Phone / WhatsApp
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent-primary focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Services Interested In
                  <div className="flex flex-wrap gap-2">
                    {servicesOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                          form.services.includes(service)
                            ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-black'
                            : 'bg-white/10 text-text-secondary hover:bg-white/20'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Monthly Marketing Budget
                  <select
                    value={form.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-accent-primary focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a budget
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="bg-bg">
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                Tell Us About Your Goals
                <textarea
                  value={form.goals}
                  onChange={(e) => handleChange('goals', e.target.value)}
                  placeholder="What do you want to achieve in the next 6 months?"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent-primary focus:outline-none"
                />
              </label>

              <Button variant="primary" size="lg" type="submit" className="w-full">
                Book My Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-xs text-text-secondary">
                We typically respond within 2 business hours. Your information is <span className="text-white">100% private</span>.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-green-500/20 px-4 py-3 text-sm font-semibold text-green-100">
                  Thanks! We received your request and will be in touch shortly.
                </div>
              ) : null}
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-glass">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                    Alternative Contact
                  </p>
                  <p className="text-base text-white">Pick what works best for you.</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-text-secondary hover:text-white"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a href="mailto:hello@digibro.in" className="text-sm text-text-secondary hover:text-white">
                      hello@digibro.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Calendly</p>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-white"
                    >
                      Schedule via Calendly
                    </a>
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
