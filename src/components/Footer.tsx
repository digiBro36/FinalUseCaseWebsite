import { Instagram, Linkedin, Twitter, Youtube, MessageCircle, Zap } from 'lucide-react';

const columns = [
  {
    title: 'SITEMAP',
    links: ['Home', 'Services', 'Portfolio', 'About Us', 'Blog', 'Careers'],
  },
  {
    title: 'COMPANY',
    links: ['About', 'Careers', 'Pricing', 'Blog', 'Press', 'Partners'],
  },
  {
    title: 'SERVICES',
    links: ['Social Media', 'Performance Ads', 'Web Design', 'SEO', 'Branding', 'Email Marketing'],
  },
];

const social = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'WhatsApp', icon: MessageCircle, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-bg-secondary pt-16 text-text-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                DigiBro
              </span>
              <Zap className="h-5 w-5 text-accent-primary" />
            </div>
            <p className="max-w-md text-sm text-text-secondary">
              Premium marketing solutions for ambitious businesses. Modern design, performance-driven strategy, and conversion-first thinking.
            </p>
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary transition hover:bg-white/10 hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                {col.title}
              </p>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm text-text-secondary transition hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              Newsletter
            </p>
            <p className="text-sm text-text-secondary">
              Get the latest updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent-primary focus:outline-none"
              />
              <button className="rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-text-secondary">
          <p>
            © 2026 DigiBro Marketing Agency. All rights reserved. ·{' '}
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>{' '}
            ·{' '}
            <a href="#" className="text-white hover:underline">
              Terms of Service
            </a>{' '}
            ·{' '}
            <a href="#" className="text-white hover:underline">
              Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
