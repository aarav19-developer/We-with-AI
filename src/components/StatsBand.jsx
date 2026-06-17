import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './StatsBand.module.css';

const stats = [
  {
    value: '50+',
    label: 'Brands Managed',
    sub: 'Across 6+ industries',
    color: '#FF5722',
    svg: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="rgba(244,98,42,.1)"/>
        <path d="M14 22a8 8 0 1 0 16 0 8 8 0 0 0-16 0" stroke="#FF5722" strokeWidth="1.8" fill="none"/>
        <path d="M22 14c4.4 0 8 3.6 8 8" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="3" fill="#FF5722"/>
        <line x1="30" y1="14" x2="34" y2="10" stroke="#FF5722" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: '1Cr+',
    label: 'Content Reach',
    sub: 'Across social platforms',
    color: '#7B2FF7',
    svg: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="rgba(123,47,247,.1)"/>
        <circle cx="22" cy="22" r="10" stroke="#7B2FF7" strokeWidth="1.8" fill="none"/>
        <path d="M14 22c0-4.4 3.6-8 8-8" stroke="#7B2FF7" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30 22c0 4.4-3.6 8-8 8" stroke="#7B2FF7" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="12" y1="22" x2="32" y2="22" stroke="#7B2FF7" strokeWidth="1.5"/>
        <path d="M22 12c0 0 3 4 3 10s-3 10-3 10" stroke="#7B2FF7" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    value: '95%',
    label: 'Client Retention',
    sub: 'Long-term partnerships',
    color: '#C2185B',
    svg: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="rgba(194,24,91,.1)"/>
        <path d="M22 34s-12-7-12-15a8 8 0 0 1 12-7 8 8 0 0 1 12 7c0 8-12 15-12 15z" stroke="#C2185B" strokeWidth="1.8" fill="none"/>
        <path d="M17 22l3 3 7-7" stroke="#C2185B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: '500+',
    label: 'Videos & Reels',
    sub: 'Produced in-house',
    color: '#1A8FE3',
    svg: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="rgba(26,143,227,.1)"/>
        <rect x="10" y="15" width="18" height="14" rx="3" stroke="#1A8FE3" strokeWidth="1.8" fill="none"/>
        <polyline points="28,19 34,16 34,28 28,25" stroke="#1A8FE3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="22" r="3" fill="#1A8FE3" opacity=".7"/>
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Team Members',
    sub: 'Specialists & creators',
    color: '#FF8A5B',
    svg: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="rgba(255,138,91,.1)"/>
        <circle cx="18" cy="19" r="4" stroke="#FF8A5B" strokeWidth="1.8" fill="none"/>
        <path d="M10 33c0-4.4 3.6-8 8-8" stroke="#FF8A5B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="27" cy="18" r="3.5" stroke="#FF8A5B" strokeWidth="1.6" fill="none"/>
        <path d="M27 25c3.3 0 6 2.7 6 6" stroke="#FF8A5B" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    value: '3+',
    label: 'Years of Growth',
    sub: 'Building brands since day one',
    color: '#16A34A',
    svg: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="rgba(22,163,74,.1)"/>
        <polyline points="10,30 17,22 22,26 30,16 34,12" stroke="#16A34A" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="29,12 34,12 34,17" stroke="#16A34A" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* Animated counter */
function Counter({ value }) {
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const raw = value.replace(/[^0-9.]/g, '');
        const suffix = value.replace(/[0-9.]/g, '');
        const end = parseFloat(raw);
        const isFloat = raw.includes('.');
        let cur = 0;
        const step = 16;
        const inc = end / (1400 / step);
        const t = setInterval(() => {
          cur += inc;
          if (cur >= end) { cur = end; clearInterval(t); }
          el.textContent = (isFloat ? cur.toFixed(1) : Math.floor(cur)) + suffix;
        }, step);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <strong ref={ref} className={styles.val}>{value}</strong>;
}

export default function StatsBand() {
  const ref = useScrollReveal();
  return (
    <section className={styles.band} ref={ref}>
      {/* background curves */}
      <div className={styles.bgCurve} aria-hidden="true">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" width="100%" height="100%">
          <path d="M0,60 C240,120 480,0 720,80 C960,160 1200,40 1440,80 L1440,180 L0,180Z"
            fill="rgba(124,58,237,.04)"/>
          <path d="M0,100 C360,40 720,140 1080,80 C1260,52 1380,100 1440,100 L1440,180 L0,180Z"
            fill="rgba(244,98,42,.03)"/>
        </svg>
      </div>

      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="badge">By The Numbers</span>
          <h2 className={styles.title}>What We've Built</h2>
        </div>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 80}ms`, '--sc': s.color }}
            >
              <div className={styles.iconWrap}>{s.svg}</div>
              <div className={styles.content}>
                <Counter value={s.value} />
                <p className={styles.label}>{s.label}</p>
                <p className={styles.sub}>{s.sub}</p>
              </div>
              <div className={styles.glow} />
              <div className={styles.bottomBar} style={{ background: s.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
