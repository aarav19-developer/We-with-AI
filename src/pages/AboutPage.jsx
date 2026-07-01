import About   from '../components/About';
import Process  from '../components/Process';
import Offer    from '../components/Offer';
import styles   from './Page.module.css';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Zoto Smart Services | Digital Marketing Agency in Meerut</title>
        <meta
          name="description"
          content="Meet the team behind Zoto Smart Services — a full-service digital marketing and brand-building agency in Meerut, UP. Learn how we help businesses grow from zero to recognized brands."
        />
        <meta
          name="keywords"
          content="about Zoto Smart Services, digital marketing team Meerut, brand building agency Meerut, marketing agency founders Meerut, Zoto agency story"
        />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://zotosmartservices.com/about" />
        <meta property="og:title"       content="About Us — Zoto Smart Services | Digital Marketing Agency in Meerut" />
        <meta property="og:description" content="Meet the team behind Zoto Smart Services. We're a full-service digital marketing agency in Meerut helping brands grow from zero to recognized names." />
        <meta property="og:image"       content="https://zotosmartservices.com/Z.png" />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="About Us — Zoto Smart Services | Digital Marketing Agency in Meerut" />
        <meta name="twitter:description" content="Meet the team behind Zoto Smart Services. We're a full-service digital marketing agency in Meerut helping brands grow." />
        <meta name="twitter:image"       content="https://zotosmartservices.com/Z.png" />
        <link rel="canonical" href="https://zotosmartservices.com/about" />
      </Helmet>

      <div className="page-hero">
        <div className="container">
          <span className="badge">About Us</span>
          <h1>The Team Behind Brands That Grow</h1>
          <p>
            We're a full-service digital marketing and brand-building agency in Meerut —
            built to take businesses from zero to recognized, trusted names in their industry.
          </p>
        </div>
      </div>

      <About />
      <Process />

      <section className="section section--alt">
        <div className="container">
          <blockquote className={styles.quote}>
            <p>
              "Our philosophy blends strategic research with premium creative execution —
              every campaign starts with real insight, not guesswork, and every piece of
              content is built to a standard that makes your brand proud."
            </p>
            <cite>— ZoTo Smart Services</cite>
          </blockquote>
        </div>
      </section>

      <Offer
        title="Ready To Build Your Brand With Us?"
        body="Tell us about your business and goals — we'll show you exactly how we'd approach your growth."
        cta1="Book a Free Strategy Call"
        cta2="Explore Our Services"
        cta2Href="/services"
      />
    </>
  );
}
