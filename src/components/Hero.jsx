import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import styles from './Hero.module.css';

/* SVG icon pills — no emojis */
const pills = [
  {
    label: 'Social Media',
    color: '#E91E8C',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Paid Ads',
    color: '#7B2FF7',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <line x1="12" y1="3" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Branding',
    color: '#FF5722',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const industries = ['Textiles', 'Food & Grocery', 'Real Estate', 'Retail', 'Automotive & EV', 'Sports'];

const statsData = [
  { value: '50+',  label: 'Brands Managed',   color: 'var(--orange)' },
  { value: '1Cr+', label: 'Content Reach',     color: 'var(--purple)' },
  { value: '95%',  label: 'Client Retention',  color: '#D97706' },
  { value: '500+', label: 'Videos & Reels',    color: 'var(--purple-light)' },
];

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.blob4} />
        <div className={styles.gridPattern} />
        <div className={styles.noiseTex} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* ── LEFT: Content ── */}
        <div className={styles.content} ref={headlineRef}>
          <div className={styles.badgeRow}>
            <span className="badge">
              <span className={styles.liveDot} />
              Digital Marketing Agency · Meerut, India
            </span>
          </div>

          <h1 className={styles.headline}>
            We Don't Just{' '}
            <span className={styles.gradText}>Market</span>
            <br />
            We Build{' '}
            <em className={styles.italicAccent}>Brands</em>
            <span className={styles.gradText}> That Last</span>
          </h1>

          <p className={styles.sub}>
            ZoTo Smart Services blends strategy, creativity and technology to take
            businesses from zero to recognized brands — through social media, advertising,
            branding, content and websites that actually convert.
          </p>

          <div className={styles.actions}>
            <Button href="/contact" size="lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.15a19.79 19.79 0 01-3.07-8.67A2 2 0 012.63 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.57a16 16 0 006 6l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
              Book a Free Strategy Call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </div>

          <div className={styles.trust}>
            <span className={styles.trustLabel}>Trusted across industries</span>
            <ul className={styles.tags}>
              {industries.map((ind) => (
                <li key={ind} className={styles.tag}>{ind}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT: Visual Card ── */}
        <div className={styles.visual}>
          <div className={styles.cardGlow} />
          <div className={styles.cardRing} />

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderDots}>
                <span style={{ background: '#FF5722' }} />
                <span style={{ background: '#7B2FF7' }} />
                <span style={{ background: '#1A8FE3' }} />
              </div>
              <span className={styles.cardHeaderLabel}>ZoTo Dashboard</span>
            </div>

            <div className={styles.statsGrid}>
              {statsData.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <strong className={styles.statValue} style={{ color: s.color }}>{s.value}</strong>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.trendBar}>
              <div className={styles.trendHeader}>
                <span className={styles.trendLabel}>Growth Trend</span>
                <span className={styles.trendBadge}>↑ 38% this quarter</span>
              </div>
              <div className={styles.bars}>
                {[35, 52, 45, 68, 62, 80, 74, 100].map((h, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{
                      height: `${h}%`,
                      background: i === 7
                        ? 'var(--orange)'
                        : i >= 5
                        ? 'var(--purple-light)'
                        : 'var(--purple-muted)',
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className={styles.cardQuote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--purple-light)" opacity=".6">
                <path d="M10 6H6C4.9 6 4 6.9 4 8v4c0 1.1.9 2 2 2h2l-1 4h2l1-4h1V8c0-1.1-.9-2-2-2zm10 0h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2l-1 4h2l1-4h1V8c0-1.1-.9-2-2-2z"/>
              </svg>
              "From zero to recognized brand — that's the ZoTo promise."
            </div>
          </div>

          {/* Floating SVG pills */}
          {pills.map((p, i) => (
            <div
              key={p.label}
              className={`${styles.pill} ${styles[`pill${i + 1}`]}`}
              style={{ '--pill-color': p.color, color: p.color }}
            >
              <span className={styles.pillIconWrap}>{p.icon}</span>
              {p.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
