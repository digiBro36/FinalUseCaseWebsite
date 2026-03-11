import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-scroll';
import { Bolt, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

const links = [
  { label: 'Home', to: 'hero' },
  { label: 'Services', to: 'services' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'About', to: 'about' },
  { label: 'Blog', to: 'blog' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Contact', to: 'cta_section' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = useMemo(
    () =>
      links.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          spy={true}
          smooth
          offset={-80}
          duration={500}
          className="relative cursor-pointer px-3 py-1 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          activeClass="text-text-primary"
          onClick={() => setOpen(false)}
        >
          {label}
        </Link>
      )),
    [],
  );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500',
        scrolled
          ? 'bg-[rgba(5,8,20,0.72)] backdrop-blur-lg shadow-xl'
          : 'bg-transparent',
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Bolt className="h-5 w-5 text-accent-primary" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
            Strategies That Work. Results That Matter.
          </span>
        </div>
      </div>

      <nav className="hidden items-center gap-1 lg:flex">{navLinks}</nav>

      <div className="flex items-center gap-2">
        <Button
          variant="pill"
          size="sm"
          className="hidden lg:inline-flex"
          onClick={() => {
            const el = document.getElementById('cta_section');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Get Free Consultation
        </Button>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-bg/90 backdrop-blur-2xl">
          <div className="mx-auto w-[min(420px,calc(100%-2rem))] rounded-3xl border border-white/10 bg-bg-card/90 p-8 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold tracking-widest text-text-secondary">Menu</p>
                <p className="text-lg font-bold text-text-primary">Navigate</p>
              </div>
              <button
                className="rounded-full p-2 text-text-secondary transition hover:text-text-primary"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer rounded-xl px-4 py-3 text-lg font-semibold text-text-primary transition-colors hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Button
                variant="pill"
                size="md"
                className="w-full"
                onClick={() => {
                  const el = document.getElementById('cta_section');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setOpen(false);
                }}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
