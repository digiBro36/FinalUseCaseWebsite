import { useEffect } from 'react';

export function ScrollProgress() {
  useEffect(() => {
    const progress = document.getElementById('scroll-progress');
    if (!progress) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progressPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, progressPct))}%`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();

    return () => window.removeEventListener('scroll', update);
  }, []);

  return null;
}
