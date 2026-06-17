import styles from './Marquee.module.css';

/* All SVG/symbol icons — zero emojis */
const items = [
  {
    text: '50+ Brands Managed',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    text: 'Social Media Management',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="17.5" cy="6.5" r="1.4" fill="currentColor"/></svg>,
  },
  {
    text: 'Digital Advertising',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="18" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    text: 'Branding & Identity',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/></svg>,
  },
  {
    text: 'Content Creation',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/><polygon points="10,8 10,16 17,12" fill="currentColor"/></svg>,
  },
  {
    text: 'Website Design',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="2" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="2"/><circle cx="6" cy="6.5" r="1.2" fill="currentColor"/><circle cx="10" cy="6.5" r="1.2" fill="currentColor"/></svg>,
  },
  {
    text: 'Campaign Strategy',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polyline points="3,17 9,11 13,15 21,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="16,7 21,7 21,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    text: '1Cr+ Content Reach',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    text: '95% Client Retention',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    text: '500+ Videos & Reels',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><polyline points="17,8 22,5 22,19 17,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

export default function Marquee() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <div className={styles.track}>
        <ul className={styles.list}>
          {doubled.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.iconWrap}>{item.icon}</span>
              <span>{item.text}</span>
              <span className={styles.sep} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
