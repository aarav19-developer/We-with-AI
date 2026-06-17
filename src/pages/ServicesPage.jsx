import Services from '../components/Services';
import Offer    from '../components/Offer';
import styles   from './Page.module.css';

export default function ServicesPage() {
  return (
    <>
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
        cta2="Explore Our Work"
        cta2Href="/portfolio"
      />
    </>
  );
}
