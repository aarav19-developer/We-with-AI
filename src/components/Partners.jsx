import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import { partners, industries } from '../data/Team';
import styles from './Partners.module.css';

/* Industry icon SVGs */
const industryIcons = {
  'Automotive & EV': `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l1.5-4h11l1.5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="1" y="12" width="18" height="5" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="5" cy="17" r="1.5" fill="currentColor"/><circle cx="15" cy="17" r="1.5" fill="currentColor"/><path d="M10 8v2M7 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'Sports': `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 2c0 0 2 3 2 8s-2 8-2 8" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M2 10h16" stroke="currentColor" stroke-width="1.2"/></svg>`,
  'Food & Grocery': `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v4c0 2 1 3 4 3s4-1 4-3V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 9v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 18h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

export default function Partners({ preview = false }) {
  const [active, setActive] = useState('All Industries');
  const ref = useScrollReveal();

  const filtered =
    active === 'All Industries'
      ? partners
      : partners.filter((p) => p.industry === active);

  return (
    <section className="section section--gradient" ref={ref}>
      <div className="container">
        <SectionHead
          badge="Our Clients"
          title="Brands That Trust Us"
          subtitle="We've helped companies across multiple industries build their digital presence and drive real growth."
        />

        {!preview && (
          <div className={`${styles.filters} reveal`}>
            {industries.map((ind) => (
              <button
                key={ind}
                className={`${styles.filter} ${active === ind ? styles.filterActive : ''}`}
                onClick={() => setActive(ind)}
              >
                {ind}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} reveal`}
              style={{
                transitionDelay: `${i * 90}ms`,
                '--client-color': p.color,
              }}
            >
              <div className={styles.glow} />
              <div className={styles.cardTop}>
                <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}88)` }}>
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
                <span
                  className={styles.industryIcon}
                  style={{ color: p.color, background: `${p.color}12` }}
                  dangerouslySetInnerHTML={{ __html: industryIcons[p.industry] || '' }}
                />
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.sub}>{p.sub}</p>
              {!preview && p.desc && (
                <p className={styles.desc}>{p.desc}</p>
              )}
              <span className={styles.tag} style={{ color: p.color, background: `${p.color}12`, borderColor: `${p.color}28` }}>
                {p.industry}
              </span>
            </div>
          ))}

          <div className={`${styles.card} ${styles.more} reveal`}>
            <div className={styles.morePlus}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className={styles.moreText}>And Many More</p>
            <span className={styles.moreSub}>Across every industry we serve</span>
          </div>
        </div>

        {preview && (
          <div className={styles.cta}>
            <Link to="/portfolio" className={styles.link}>
              View Full Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
