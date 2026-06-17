import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../ui/Button';
import styles from './Offer.module.css';

export default function Offer({
  title,
  body,
  cta1,
  cta2,
  cta1Href = '/contact',
  cta2Href = '/services',
}) {
  const ref = useScrollReveal();

  return (
    <section className={styles.offer} ref={ref}>
      <div className={styles.bgLayer} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.content} reveal`}>
          <div className={styles.decorLeft} aria-hidden="true" />
          <div className={styles.decorRight} aria-hidden="true" />

          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Ready To Grow?
          </span>

          <h2 className={styles.title}>
            {title || "Let's Build Your Brand Together"}
          </h2>

          <p className={styles.body}>
            {body ||
              'Your brand deserves more than just posts and ads — it deserves a complete growth strategy and a dedicated team that shows up every day.'}
          </p>

          <div className={styles.actions}>
            <Button href={cta1Href} size="lg" variant="primary">
              {cta1 || 'Book a Free Strategy Call'}
            </Button>
            <Button href={cta2Href} size="lg" variant="outline">
              {cta2 || 'Explore Our Services'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
