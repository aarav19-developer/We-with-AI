import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import { services } from '../data/Services';
import styles from './Services.module.css';

export default function Services({ preview = false }) {
  const ref = useScrollReveal();
  const displayed = preview ? services.slice(0, 6) : services;

  return (
    <section className={`section ${preview ? '' : 'section--gradient'}`} ref={ref}>
      <div className="container">
        <SectionHead
          badge="What We Do"
          title="Six Pillars That Build Your Brand"
          subtitle="Strategy, creative and measurable execution — under one roof, working as a single growth engine."
        />

        <div className={styles.grid}>
          {displayed.map((s, i) => (
            <article
              key={s.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Icon */}
              <div
                className={styles.icon}
                dangerouslySetInnerHTML={{ __html: s.svg }}
              />

              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.short}</p>

              {!preview && (
                <ul className={styles.features}>
                  {s.features.map((f) => (
                    <li key={f}>
                      <span className={styles.checkWrap}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>

        {preview && (
          <div className={styles.cta}>
            <Link to="/services" className={styles.link}>
              Explore All Services
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
