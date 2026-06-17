import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavScroll } from '../hooks/useNavScroll';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const links = [
  { to: '/',          label: 'Home'      },
  { to: '/about',     label: 'About Us'  },
  { to: '/services',  label: 'Services'  },
  { to: '/why-us',    label: 'Why Us'    },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact',   label: 'Contact'   },
];

/* Actual logo from /public/Z.png */
function ZoToLogo({ size = 48 }) {
  return (
    <img
      src="/Z.png"
      alt="ZoTo Smart Services logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block' }}
    />
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
            <ZoToLogo size={80} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>
              <span className={styles.logoZ}>ZoTo</span>
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
          <a href="/contact" className={styles.ctaBtn}>Book a Free Call</a>
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
          <a href="/contact" className={styles.ctaBtn} onClick={() => setOpen(false)}>
            Book a Free Call
          </a>
        </div>
      </div>
    </header>
  );
}
