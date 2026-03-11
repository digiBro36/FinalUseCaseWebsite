import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} />
      ) : (
        <span>{`${prefix}${end}${suffix}`}</span>
      )}
    </div>
  );
}
