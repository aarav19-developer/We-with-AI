import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const company = [
  { to: '/about',    label: 'About Us' },
  { to: '/why-us',   label: 'Why Us'   },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact'  },
];

const serviceLinks = [
  { label: 'Social Media Management'    },
  { label: 'Search Engine Optimization' },
  { label: 'Google & Meta Ads'          },
  { label: 'Content Creation'           },
  { label: 'Logo & Brand Design'        },
  { label: 'Graphic & Print Design'     },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <defs>
          <linearGradient id="igF2" x1="0" y1="24" x2="24" y2="0">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#igF2)" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="4.5" stroke="url(#igF2)" strokeWidth="2" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1.3" fill="url(#igF2)"/>
      </svg>
    ),
    hoverColor: '#E1306C',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#1877F2"/>
        <path d="M13.5 8H15V6h-1.5C12 6 11 7 11 8.5V10H9v2h2v6h2v-6h1.5l.5-2H13V8.5c0-.27.22-.5.5-.5z" fill="white"/>
      </svg>
    ),
    hoverColor: '#1877F2',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919286090694',
    svg: (
      <svg viewBox="0 0 24 24" fill="#25D366" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.386.659 4.617 1.806 6.52L.057 24l5.638-1.479A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.957 0-3.795-.52-5.385-1.426L3.6 21.8l1.26-3.866A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
      </svg>
    ),
    hoverColor: '#25D366',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* orange + purple glow reflections */}
      <div className={styles.glowOrange} aria-hidden="true" />
      <div className={styles.glowPurple} aria-hidden="true" />

      <div className={`container ${styles.top}`}>

        {/* Brand — no logo SVG, just text */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <span className={styles.wordmark}>
              <span className={styles.wordmarkZoto}>ZoTo</span>
              <span className={styles.wordmarkSS}> Smart Services</span>
            </span>
          </div>
          <p className={styles.tagline}>
            We don't just market — we build brands that last. A full-service digital marketing
            &amp; brand-building agency based in Meerut, India.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.social}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--social-hover': s.hoverColor }}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Company</h4>
          <ul>
            {company.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className={styles.colLink}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Services</h4>
          <ul>
            {serviceLinks.map((s) => (
              <li key={s.label}>
                <Link to="/services" className={styles.colLink}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Get In Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+919286090694" className={styles.colLink}>+91 92860 90694</a>
            </li>
            <li>
              <a href="mailto:zotosmartservices@gmail.com" className={styles.colLink}>
                zotosmartservices@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/919286090694" className={styles.colLink}
                target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
            <li className={styles.location}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Meerut, Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© 2026 ZoTo Smart Services. All rights reserved.</p>
        <p className={styles.motto}>We Don't Just Market. We Build Brands.</p>
      </div>
    </footer>
  );
}
