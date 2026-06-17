import About   from '../components/About';
import Process  from '../components/Process';
import Offer    from '../components/Offer';
import styles   from './Page.module.css';

export default function AboutPage() {
  return (
    <>
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
