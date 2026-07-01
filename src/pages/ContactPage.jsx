import Contact from '../components/Contact';
import styles  from './Page.module.css';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us — Book a Free Strategy Call | Zoto Smart Services Meerut</title>
        <meta
          name="description"
          content="Get in touch with Zoto Smart Services in Meerut. Book a free digital marketing strategy call, WhatsApp us, or send an email. Let's build your brand together."
        />
        <meta
          name="keywords"
          content="contact Zoto Smart Services, book free strategy call Meerut, digital marketing consultation Meerut, hire marketing agency Meerut, Zoto contact, WhatsApp marketing agency Meerut"
        />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://zotosmartservices.com/contact" />
        <meta property="og:title"       content="Contact Zoto Smart Services — Book a Free Strategy Call" />
        <meta property="og:description" content="Ready to grow your brand? Book a free strategy call with Zoto Smart Services in Meerut. We'll show you exactly how we'd approach your growth." />
        <meta property="og:image"       content="https://zotosmartservices.com/Z.png" />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Contact Zoto Smart Services — Free Strategy Call" />
        <meta name="twitter:description" content="Book a free strategy call with Zoto Smart Services in Meerut. Let's build your brand together." />
        <meta name="twitter:image"       content="https://zotosmartservices.com/Z.png" />
        <link rel="canonical" href="https://zotosmartservices.com/contact" />
      </Helmet>

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
