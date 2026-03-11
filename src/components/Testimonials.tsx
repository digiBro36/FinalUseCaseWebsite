import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/swiper-bundle.css';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Founder',
    company: 'Bloom Digital India',
    avatar: 'AM',
    stars: 5,
    quote:
      'The team turned our vision into a conversion machine. Their design is gorgeous and the experience is flawless. We saw 340% more leads in the first two months.',
    badge: '+340% Leads',
  },
  {
    name: 'Rohan Sharma',
    role: 'CMO',
    company: 'Nectar Marketing',
    avatar: 'RS',
    stars: 5,
    quote:
      'Modern, fast, and attention-grabbing. Our leads doubled within the first month of working with DigiBro. They genuinely feel like an extension of our team.',
    badge: '2x Leads',
  },
  {
    name: 'Priya Nair',
    role: 'CEO',
    company: 'Sparkle Studios',
    avatar: 'PN',
    stars: 5,
    quote:
      "DigiBro transformed our online presence completely. From a non-existent website to ranking #1 on Google — it's been a game-changer for our business.",
    badge: '#1 Google Rank',
  },
  {
    name: 'Vikram Singh',
    role: 'Co-Founder',
    company: 'Growthify',
    avatar: 'VS',
    stars: 5,
    quote:
      "They don't just do marketing — they genuinely care about your growth. The team is responsive, creative, and always goes above and beyond expectations.",
    badge: '35% Higher CVR',
  },
  {
    name: 'Ananya Kapoor',
    role: 'Marketing Head',
    company: 'Velocity Gym',
    avatar: 'AK',
    stars: 5,
    quote:
      "500+ inquiries per month from local ads and SEO. DigiBro literally paid for themselves 10x over. Best investment we've made in our marketing stack.",
    badge: '500+ Leads/Mo',
  },
  {
    name: 'Deepak Tiwari',
    role: 'Founder',
    company: 'ClearConvert EdTech',
    avatar: 'DT',
    stars: 5,
    quote:
      'From 0 to 100K YouTube subscribers in 8 months. The content strategy they built for us is still compounding. Absolutely elite-level work.',
    badge: '100K Subscribers',
  },
];

export function Testimonials() {
  const slides = useMemo(
    () =>
      testimonials.map((testimony) => (
        <div
          key={testimony.name}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-glass"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-lg font-bold text-black">
                {testimony.avatar}
              </div>
              <div>
                <p className="text-base font-semibold text-white">{testimony.name}</p>
                <p className="text-sm text-text-secondary">
                  {testimony.role}, {testimony.company}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
              <div className="flex items-center gap-1 text-yellow-300">
                {Array.from({ length: testimony.stars }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-text-secondary">({testimony.stars})</span>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-secondary">“{testimony.quote}”</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-text-primary">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent-primary" />
            {testimony.badge}
          </div>
        </div>
      )),
    [],
  );

  return (
    <section id="testimonials" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            What Clients Say
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Trusted by Teams Around the World
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.key}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
