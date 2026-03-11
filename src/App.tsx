import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { WhyUs } from './components/WhyUs';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { MobileCTA } from './components/MobileCTA';

export default function App() {
  return (
    <div className="app-outer">
      <div id="scroll-progress" />
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Hero />
          <Marquee />
          <Stats />
          <About />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <WhyUs />
          <Blog />
          <FAQ />
          <CTASection />
          <Footer />
        </motion.main>
      </AnimatePresence>

      <BackToTop />
      <MobileCTA />
    </div>
  );
}
