import Contact from '../components/Contact';
import styles  from './Page.module.css';

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="badge">Get In Touch</span>
          <h1>Let's Build Your Brand Together</h1>
          <p>
            Your brand deserves more than just posts and ads — it deserves a complete
            growth strategy and a dedicated team. Tell us about your business and we'll
            take it from there.
          </p>
        </div>
      </div>

      <Contact />

      {/* Bottom brand promise strip */}
      <section className="section section--alt">
        <div className={`container ${styles.miniCta}`}>
          <div className={styles.miniCtaContent}>
            {/* unique growth-arrow symbol — NOT the ZoTo logo */}
            <div className={styles.miniCtaIcon}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" stroke="var(--orange)" strokeWidth="1.5" fill="none" opacity=".35"/>
                <polyline points="8,20 13,14 18,17 24,10"
                  stroke="var(--orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <polyline points="20,10 24,10 24,14"
                  stroke="var(--orange)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.miniCtaHeading}>Growth starts with a conversation.</h3>
              <p>We don't just market. We build brands.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
