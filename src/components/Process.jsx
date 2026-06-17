import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import { process } from '../data/Team';
import styles from './Process.module.css';

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <SectionHead
          badge="How We Work"
          title="A Clear, Honest 4-Step Process"
          subtitle="No black boxes and no guesswork — here's exactly what happens after you work with us."
        />

        <div className={styles.steps}>
          {process.map((p, i) => (
            <div
              key={p.step}
              className={`${styles.step} reveal`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{p.step}</div>
                {i < process.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepIconWrap}>
                  <span className={styles.stepIcon} dangerouslySetInnerHTML={{ __html: p.iconSvg }} />
                </div>
                <div>
                  <h3 className={styles.stepTitle}>{p.title}</h3>
                  <p className={styles.stepDesc}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={`${styles.note} reveal`}>
          Every client gets a dedicated account manager and a detailed monthly performance
          report — so you always know exactly how your brand is growing.
        </p>
      </div>
    </section>
  );
}
