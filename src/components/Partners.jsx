import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import styles from './Partners.module.css';

/* Anonymous client cards — no names, no logos, just industry + what we did */
const clients = [
  {
    id: 'ev',
    industry: 'Automotive & EV',
    tag: 'EV Manufacturing',
    what: 'Full digital brand launch for an electric vehicle manufacturer — social presence, content strategy, ad campaigns and dealership awareness across North India.',
    result: '3× engagement growth in 90 days',
    color: '#1A8FE3',
    iconSvg: `<svg viewBox="0 0 28 28" fill="none"><path d="M4 17l2-5h16l2 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="2" y="17" width="24" height="6" rx="2.5" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="7" cy="23" r="2" fill="currentColor"/><circle cx="21" cy="23" r="2" fill="currentColor"/><path d="M14 12v2M11 9h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    id: 'sports1',
    industry: 'Sports Equipment',
    tag: 'Sports Brand',
    what: 'Rebranding, content creation and Instagram growth strategy for a premium sports equipment manufacturer — reels, ad shoots and influencer collaborations.',
    result: '12K+ new followers in 60 days',
    color: '#FF5722',
    iconSvg: `<svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M14 4s2.5 4 2.5 10S14 24 14 24" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M4 14h20" stroke="currentColor" stroke-width="1.3"/></svg>`,
  },
  {
    id: 'food',
    industry: 'Food & Grocery',
    tag: 'Food Brand',
    what: 'Social media management, product photography and festive campaign execution for a well-known regional food and grocery brand across digital platforms.',
    result: '40% rise in online enquiries',
    color: '#C2185B',
    iconSvg: `<svg viewBox="0 0 28 28" fill="none"><path d="M8 4v5c0 2.5 1.5 4 6 4s6-1.5 6-4V4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13v11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M10 24h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  },
  {
    id: 'sports2',
    industry: 'Sports Equipment',
    tag: 'Iconic Sports Brand',
    what: 'Performance advertising, Meta & Google ad management and seasonal campaign strategy for one of India\'s most recognisable sports equipment brands.',
    result: '2.8× ROAS on paid campaigns',
    color: '#7B2FF7',
    iconSvg: `<svg viewBox="0 0 28 28" fill="none"><polyline points="4,20 10,13 15,17 24,8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polyline points="19,8 24,8 24,13" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,
  },
];

const filters = ['All', 'Automotive & EV', 'Sports Equipment', 'Food & Grocery'];

export default function Partners({ preview = false }) {
  const [active, setActive] = useState('All');
  const ref = useScrollReveal();

  const shown = preview
    ? clients
    : active === 'All'
    ? clients
    : clients.filter((c) => c.industry === active);

  return (
    <section className="section section--gradient" ref={ref}>
      <div className="container">
        <SectionHead
          badge="Our Clients"
          title="Brands We've Grown"
          subtitle="We protect our clients' identity — here's the work we've done across industries, without the names."
        />

        {!preview && (
          <div className={`${styles.filters} reveal`}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {shown.map((c, i) => (
            <div
              key={c.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 90}ms`, '--cc': c.color }}
            >
              <div className={styles.glow} />
              <div className={styles.cardBar} style={{ background: c.color }} />

              <div className={styles.cardTop}>
                {/* industry icon — no brand logo */}
                <div
                  className={styles.iconBox}
                  style={{ color: c.color, background: `${c.color}14`, border: `1px solid ${c.color}28` }}
                  dangerouslySetInnerHTML={{ __html: c.iconSvg }}
                />
                <span
                  className={styles.tag}
                  style={{ color: c.color, background: `${c.color}10`, borderColor: `${c.color}28` }}
                >
                  {c.tag}
                </span>
              </div>

              <p className={styles.industry}>{c.industry}</p>
              <p className={styles.what}>{c.what}</p>

              <div className={styles.result} style={{ borderColor: `${c.color}25`, background: `${c.color}08` }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke={c.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3,17 9,11 13,15 21,7"/>
                  <polyline points="16,7 21,7 21,12"/>
                </svg>
                <span style={{ color: c.color }}>{c.result}</span>
              </div>
            </div>
          ))}

          {/* "And Many More" card */}
          <div className={`${styles.card} ${styles.more} reveal`}>
            <div className={styles.morePlus}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className={styles.moreText}>And Many More</p>
            <p className={styles.moreSub}>Across retail, real estate, textiles &amp; services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
