import { MessageCircle, ArrowRight } from 'lucide-react';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-white/10 bg-bg/90 px-4 py-3 backdrop-blur-lg md:hidden">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary px-4 py-2 text-sm font-semibold text-black shadow-glow"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href="#cta_section"
        className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
      >
        <span>Book Free Call</span>
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
