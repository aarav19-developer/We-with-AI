import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import { stats } from '../data/Stats';
import styles from './Results.module.css';

const colors = [
  'var(--orange)',
  'var(--purple)',
  'var(--magenta-light)',
  'var(--blue)',
  'var(--orange-light)',
  'var(--purple-light)',
];

/* Animated counter hook */
function useCounter(target, duration = 1600) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const raw = target.replace(/[^0-9.]/g, '');
          const suffix = target.replace(/[0-9.]/g, '');
          const end = parseFloat(raw);
          const isFloat = raw.includes('.');
          let start = 0;
          const step = 16;
          const increment = end / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            el.textContent = (isFloat ? start.toFixed(1) : Math.floor(start)) + suffix;
          }, step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}

function StatItem({ s, color, delay }) {
  const counterRef = useCounter(s.value);

  return (
    <div
      className={`${styles.item} reveal`}
      style={{ transitionDelay: `${delay}ms`, '--stat-color': color }}
    >
      <div className={styles.glow} />
      <strong className={styles.value} ref={counterRef} style={{ color }}>
        {s.value}
      </strong>
      <span className={styles.label}>{s.label}</span>
      <div className={styles.bar} />
    </div>
  );
}

export default function Results() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          badge="What We Deliver"
          title="Real Numbers. Real Brands."
          subtitle="We measure success in reach, retention and growth — not vanity metrics."
        />

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              s={s}
              color={colors[i % colors.length]}
              delay={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
