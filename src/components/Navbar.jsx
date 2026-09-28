import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavScroll } from '../hooks/useNavScroll';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/why-us',   label: 'Why Us'   },
  { to: '/contact',  label: 'Contact'  },
];

/* ── Animated SVG Logo ── */
function ZoToLogo({ size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ZoTo Smart Services"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        {/* main orange→purple gradient */}
        <linearGradient id="lgMain" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF5722"/>
          <stop offset="100%" stopColor="#7B2FF7"/>
        </linearGradient>
        {/* glow filter */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* spark glow */}
        <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── background rounded square ── */}
      <rect x="2" y="2" width="52" height="52" rx="14" fill="url(#lgMain)" opacity="0.12"/>
      <rect x="2" y="2" width="52" height="52" rx="14" fill="none" stroke="url(#lgMain)" strokeWidth="1.5" opacity="0.5"/>

      {/* ── orbit ring that spins ── */}
      <g style={{ transformOrigin: '28px 28px', animation: 'navOrbit 8s linear infinite' }}>
        <ellipse cx="28" cy="28" rx="22" ry="8" stroke="#FF5722" strokeWidth="1" strokeDasharray="4 3" opacity="0.35" fill="none"
          transform="rotate(-20 28 28)"/>
      </g>
      <g style={{ transformOrigin: '28px 28px', animation: 'navOrbit 12s linear infinite reverse' }}>
        <ellipse cx="28" cy="28" rx="18" ry="6" stroke="#7B2FF7" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" fill="none"
          transform="rotate(40 28 28)"/>
      </g>

      {/* ── Z letter — bold, centred ── */}
      <text
        x="28" y="36"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="30"
        fill="url(#lgMain)"
        filter="url(#glow)"
        style={{ animation: 'navZPulse 3s ease-in-out infinite' }}
      >Z</text>

      {/* ── 3 orbiting spark dots ── */}
      {/* spark 1 — orange */}
      <g style={{ transformOrigin: '28px 28px', animation: 'navOrbit 4s linear infinite' }}>
        <circle cx="50" cy="28" r="2.5" fill="#FF5722" filter="url(#sparkGlow)" opacity="0.9"/>
      </g>
      {/* spark 2 — purple, offset phase */}
      <g style={{ transformOrigin: '28px 28px', animation: 'navOrbit 4s linear infinite', animationDelay: '-1.33s' }}>
        <circle cx="50" cy="28" r="2" fill="#7B2FF7" filter="url(#sparkGlow)" opacity="0.85"/>
      </g>
      {/* spark 3 — white, offset phase */}
      <g style={{ transformOrigin: '28px 28px', animation: 'navOrbit 4s linear infinite', animationDelay: '-2.66s' }}>
        <circle cx="50" cy="28" r="1.5" fill="#fff" filter="url(#sparkGlow)" opacity="0.7"/>
      </g>

      {/* ── corner accent dots ── */}
      <circle cx="9"  cy="9"  r="2" fill="#FF5722" opacity="0.5" style={{ animation: 'navDotBlink 2.4s ease-in-out infinite' }}/>
      <circle cx="47" cy="47" r="2" fill="#7B2FF7" opacity="0.5" style={{ animation: 'navDotBlink 2.4s ease-in-out infinite', animationDelay: '1.2s' }}/>
    </svg>
  );
}

export default function Navbar() {
  const scrolled = useNavScroll(60);
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <div className={styles.logoIcon}>
            <ZoToLogo size={46} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>
              <span className={styles.logoZ}>
                {'ZoTo'.split('').map((ch, i) => (
                  <span key={i} className={styles.logoChar} style={{ animationDelay: `${i * 0.08}s` }}>{ch}</span>
                ))}
              </span>
              <span className={styles.logoSS}> Smart Services</span>
            </span>
            <span className={styles.logoSub}>Digital Marketing Agency</span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className={styles.links}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {l.label}
              <span className={styles.linkUnderline} />
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaBtn}>Book a Free Call</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerLinks}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.drawerCta}>
          <Link
            to="/contact"
            className={styles.ctaBtn}
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </header>
  );
}
