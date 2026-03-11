import { useEffect, useRef } from 'react';

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const dotEl = dotRef.current;
    if (!cursorEl || !dotEl) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const updatePosition = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;
      cursorEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - 8;
      mouseY = event.clientY - 8;
      dotEl.style.transform = `translate3d(${event.clientX - 4}px, ${event.clientY - 4}px, 0)`;
    };

    const handleMouseDown = () => {
      cursorEl.classList.add('scale-90');
    };

    const handleMouseUp = () => {
      cursorEl.classList.remove('scale-90');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary opacity-90 shadow-glow transition-transform duration-150"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white/90"
      />
    </>
  );
}
