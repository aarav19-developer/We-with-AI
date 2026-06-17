import styles from './SectionHead.module.css';

/**
 * align: 'center' | 'left'
 * dark:  boolean — use on dark backgrounds
 */
export default function SectionHead({ badge, title, subtitle, align = 'center', dark = false }) {
  return (
    <div className={`${styles.head} ${styles[align]} ${dark ? styles.dark : ''} reveal`}>
      {badge && (
        <span className={`badge ${dark ? styles.badgeDark : ''}`}>
          {badge}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  );
}
