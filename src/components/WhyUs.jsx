import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import styles from './WhyUs.module.css';

const reasons = [
  {
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#w1)"/><defs><linearGradient id="w1" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#FF5722"/><stop offset="100%" stop-color="#E91E8C"/></linearGradient></defs><path d="M20 10a5 5 0 110 10 5 5 0 010-10z" stroke="white" stroke-width="2" fill="none"/><path d="M10 30c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`,
    title: 'More Than An Agency',
    desc: 'We act as your in-house growth team — dedicated strategists who care about your brand as much as you do, not just another vendor.',
  },
  {
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#w2)"/><defs><linearGradient id="w2" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#7B2FF7"/><stop offset="100%" stop-color="#1A8FE3"/></linearGradient></defs><rect x="9" y="22" width="5" height="10" rx="2" fill="white"/><rect x="17.5" y="15" width="5" height="17" rx="2" fill="white" opacity=".8"/><rect x="26" y="9" width="5" height="23" rx="2" fill="white" opacity=".6"/></svg>`,
    title: 'Data-Driven Decisions',
    desc: 'Every campaign is tracked and optimized for maximum impact — every move backed by real analytics, not gut feeling or guesswork.',
  },
  {
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#w3)"/><defs><linearGradient id="w3" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#C2185B"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M11 30c1.5-3 4.8-5 9-5s7.5 2 9 5" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="20" cy="14" r="2.5" fill="white"/></svg>`,
    title: 'Long-Term Partnership',
    desc: 'We grow when you grow — 95% of our clients stay beyond their first contract because we deliver results that speak for themselves.',
  },
  {
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#w4)"/><defs><linearGradient id="w4" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#1A8FE3"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><path d="M20 10l2.5 5 5.5.8-4 3.9.9 5.5L20 22.8l-4.9 2.4.9-5.5-4-3.9 5.5-.8z" stroke="white" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>`,
    title: 'Premium Creative',
    desc: "Professional reels, ad shoots and visuals built to stop the scroll — content that actually represents your brand's quality.",
  },
  {
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#w5)"/><defs><linearGradient id="w5" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#FF5722"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><rect x="9" y="13" width="22" height="14" rx="3" stroke="white" stroke-width="2" fill="none"/><circle cx="15" cy="20" r="2.5" fill="white" opacity=".7"/><circle cx="25" cy="20" r="2.5" fill="white" opacity=".7"/><line x1="20" y1="17" x2="20" y2="23" stroke="white" stroke-width="1.5" opacity=".5"/></svg>`,
    title: 'Fully Integrated',
    desc: 'Strategy, content, ads and websites all work together as one connected growth engine for your brand — never in silos.',
  },
  {
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#w6)"/><defs><linearGradient id="w6" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#C2185B"/><stop offset="100%" stop-color="#FF5722"/></linearGradient></defs><path d="M20 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><polyline points="24,10 30,10 30,16" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><line x1="30" y1="10" x2="22" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
    title: 'Local & Trusted',
    desc: 'Based in Meerut with 50+ brands managed across EV, Textiles, Real Estate, Food and Sports — we know your market.',
  },
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section className="section section--alt" ref={ref}>
      <div className="container">
        <SectionHead
          badge="Why ZoTo"
          title="We Act Like Your In-House Growth Team"
          subtitle="Not a vendor that posts and disappears — a partner that researches, creates and measures every single move."
        />

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.iconWrap} dangerouslySetInnerHTML={{ __html: r.svg }} />
              <div className={styles.body}>
                <h3 className={styles.title}>{r.title}</h3>
                <p className={styles.desc}>{r.desc}</p>
              </div>
              <div className={styles.hoverLine} />
            </div>
          ))}
        </div>

        <div className={`${styles.banner} reveal`}>
          <div className={styles.bannerContent}>
            <p>We don't just run your social media — we build your brand's entire digital presence.</p>
            <Link to="/why-us" className={styles.bannerLink}>
              More Reasons To Choose Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
