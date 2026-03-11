import { motion } from 'framer-motion';

const articles = [
  {
    title: 'How to Get 10x ROI from Facebook Ads in 2026',
    category: 'Performance Marketing',
    readTime: '5 min read',
    date: 'March 2026',
    excerpt:
      'Discover the exact funnel structure and targeting strategies our top clients are using to achieve 10x returns on Meta.',
    tagColor: 'bg-orange-500',
  },
  {
    title: 'The Ultimate Instagram Reels Strategy for Indian Businesses',
    category: 'Social Media',
    readTime: '7 min read',
    date: 'February 2026',
    excerpt:
      "Reels are the fastest-growing content format. Here's the exact framework we use to grow accounts from 0 to 50K followers.",
    tagColor: 'bg-purple-500',
  },
  {
    title: 'Local SEO in 2026: How to Rank #1 on Google Maps',
    category: 'SEO',
    readTime: '6 min read',
    date: 'January 2026',
    excerpt:
      'A step-by-step guide to dominating Google Maps in your city and driving free, high-intent local traffic to your business.',
    tagColor: 'bg-green-500',
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg/70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Knowledge Hub
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Marketing Insights That Drive Growth
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${article.tagColor}`}>
                  {article.category}
                </span>
                <span className="text-xs font-medium text-text-secondary">{article.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{article.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-text-secondary">{article.readTime}</span>
                <button className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            Read All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
