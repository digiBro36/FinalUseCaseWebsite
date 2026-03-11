import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const items = [
  {
    q: 'How quickly will I see results?',
    a: 'For paid ads, results typically begin within the first 7-14 days. For SEO, organic growth becomes visible in 60-90 days. Social media growth is steady from month one.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Absolutely. In fact, some of our best results have come from early-stage startups. We have startup-friendly packages and scale with you as you grow.',
  },
  {
    q: 'Do you require a long-term contract?',
    a: 'No. We offer monthly plans with no lock-in. We earn your business every month through results, not contracts.',
  },
  {
    q: 'Will I have a dedicated account manager?',
    a: 'Yes. Every client gets a dedicated account manager who is your single point of contact and is available via WhatsApp, email, and scheduled calls.',
  },
  {
    q: 'How is my ad budget managed?',
    a: 'Your ad spend goes directly to the platforms (Google, Meta). We charge a management fee separately. This means 100% of your budget actually runs as ads.',
  },
  {
    q: 'What industries do you work with?',
    a: "We've worked across e-commerce, SaaS, real estate, fitness, education, healthcare, hospitality, and professional services. Our strategies adapt to your industry.",
  },
  {
    q: 'Do you offer content creation?',
    a: 'Yes — graphics, reels, carousels, blog posts, ad copies, email sequences, and video scripts are all part of our service packages.',
  },
  {
    q: 'What makes DigiBro different from other agencies?',
    a: 'We operate like a partner, not a vendor. We\'re transparent with reporting, fast in execution, and back our work with a performance guarantee.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Questions We Get Asked All the Time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            No surprises, just clear answers. Have a question that isn&apos;t here? Reach out anytime.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={item.q}
                className="rounded-3xl border border-white/10 bg-white/5 shadow-card backdrop-blur-glass"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-text-secondary transition-transform ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`px-6 pb-5 text-sm text-text-secondary transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
