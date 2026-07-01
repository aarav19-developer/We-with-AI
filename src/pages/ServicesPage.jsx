import Services from '../components/Services';
import Offer    from '../components/Offer';
import styles   from './Page.module.css';
import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services — Social Media, Ads, Branding & Websites | Zoto Smart Services Meerut</title>
        <meta
          name="description"
          content="Explore all digital marketing services by Zoto Smart Services in Meerut — social media management, Meta & Google ads, SEO, branding & logo design, content creation, and website development."
        />
        <meta
          name="keywords"
          content="digital marketing services Meerut, social media management Meerut, Meta ads agency Meerut, Google ads Meerut, SEO services Meerut, branding design Meerut, content creation agency, website development Meerut"
        />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://zotosmartservices.com/services" />
        <meta property="og:title"       content="Our Services — Social Media, Ads, Branding & Websites | Zoto Smart Services" />
        <meta property="og:description" content="Social media, Meta & Google ads, SEO, branding, content creation and websites — all under one roof at Zoto Smart Services, Meerut." />
        <meta property="og:image"       content="https://zotosmartservices.com/Z.png" />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Our Services | Zoto Smart Services — Digital Marketing Meerut" />
        <meta name="twitter:description" content="Social media, ads, branding, content and websites — all under one roof at Zoto Smart Services, Meerut." />
        <meta name="twitter:image"       content="https://zotosmartservices.com/Z.png" />
        <link rel="canonical" href="https://zotosmartservices.com/services" />
      </Helmet>

      <div className="page-hero">
        <div className="container">
          <span className="badge">What We Do</span>
          <h1>Six Pillars That Build Your Brand</h1>
          <p>
            Strategy, creative and measurable execution — under one roof, working as a
            single growth engine instead of scattered freelancers.
          </p>
        </div>
      </div>

      <Services />

      <section className="section section--alt">
        <div className="container">
          <blockquote className={styles.quote}>
            <p>
              "We don't just run your social media — we build your brand's entire
              digital presence."
            </p>
            <cite>— ZoTo Smart Services</cite>
          </blockquote>
        </div>
      </section>

      <Offer
        title="Not Sure Which Service You Need?"
        body="Tell us about your brand and goals on a free strategy call — we'll recommend exactly what will move the needle."
        cta1="Book a Free Strategy Call"
        cta2="Explore Our Services"
        cta2Href="/services"
      />
    </>
  );
}
