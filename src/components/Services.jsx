import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import { services, serviceCategories, iconSvgs } from '../data/Services';
import styles from './Services.module.css';

/* Single service list item with icon */
function ServiceItem({ label, icon, color }) {
  return (
    <li className={styles.serviceItem} style={{ '--sc': color }}>
      <span
        className={styles.serviceIcon}
        style={{ color }}
        dangerouslySetInnerHTML={{ __html: iconSvgs[icon] || iconSvgs.file }}
      />
      <span className={styles.serviceLabel}>{label}</span>
    </li>
  );
}

/* Full services page — two category columns */
function FullServices() {
  const ref = useScrollReveal();
  return (
    <section className={`section section--gradient`} ref={ref}>
      <div className="container">
        <SectionHead
          badge="What We Do"
          title="Everything Your Brand Needs to Grow"
          subtitle="Designing, marketing and advertising — all under one roof, working as one growth engine."
        />

        <div className={styles.categoryGrid}>
          {serviceCategories.map((cat, ci) => (
            <div
              key={cat.id}
              className={`${styles.categoryCard} reveal`}
              style={{ transitionDelay: `${ci * 120}ms`, '--cc': cat.color, '--cc-soft': cat.colorSoft }}
            >
              {/* Category header */}
              <div className={styles.catHeader}>
                <div
                  className={styles.catIcon}
                  dangerouslySetInnerHTML={{ __html: cat.svg }}
                />
                <div>
                  <h3 className={styles.catTitle} style={{ color: cat.color }}>
                    {cat.label}
                  </h3>
                  <p className={styles.catCount}>{cat.services.length} services</p>
                </div>
              </div>

              {/* Service list */}
              <ul className={styles.serviceList}>
                {cat.services.map((s) => (
                  <ServiceItem key={s.label} label={s.label} icon={s.icon} color={cat.color} />
                ))}
              </ul>

              {/* top accent bar */}
              <div className={styles.catBar} style={{ background: cat.color }} />
            </div>
          ))}
        </div>

        {/* Featured 6 service cards below */}
        <div className={styles.featuredHead}>
          <span className="badge">Featured Services</span>
          <h3 className={styles.featuredTitle}>Our Core Offerings</h3>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.icon} dangerouslySetInnerHTML={{ __html: s.svg }} />
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.short}</p>
              <ul className={styles.features}>
                {s.features.map((f) => (
                  <li key={f}>
                    <span className={styles.checkWrap}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Home page preview — 6 cards only */
function PreviewServices() {
  const ref = useScrollReveal();
  return (
    <section className="section" ref={ref}>
      <div className="container">
        <SectionHead
          badge="What We Do"
          title="Services That Build Real Brands"
          subtitle="Strategy, creative and measurable execution — under one roof, working as a single growth engine."
        />
        <div className={styles.grid}>
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.icon} dangerouslySetInnerHTML={{ __html: s.svg }} />
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.short}</p>
              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>
        <div className={styles.cta}>
          <Link to="/services" className={styles.link}>
            Explore All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Services({ preview = false }) {
  return preview ? <PreviewServices /> : <FullServices />;
}
