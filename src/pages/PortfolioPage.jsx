import Partners from '../components/Partners';
import Offer    from '../components/Offer';

export default function PortfolioPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="badge">Portfolio</span>
          <h1>Brands That Trust Us</h1>
          <p>
            We've helped companies across multiple industries build their digital
            presence and drive real growth. Filter by industry to see where we've made an impact.
          </p>
        </div>
      </div>

      <Partners />

      <Offer
        title="Want Your Brand Featured Here Next?"
        body="Let's talk about your business and what a focused digital strategy could do for it."
        cta1="Book a Free Strategy Call"
        cta2="Learn What We Do"
        cta2Href="/services"
      />
    </>
  );
}
