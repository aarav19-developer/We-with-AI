import WhyUs  from '../components/WhyUs';
import Results from '../components/Results';
import Offer   from '../components/Offer';

export default function WhyUsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="badge">Why ZoTo</span>
          <h1>We Act Like Your In-House Growth Team</h1>
          <p>
            Not a vendor that posts and disappears — a partner that researches, creates
            and measures every move alongside you.
          </p>
        </div>
      </div>

      <WhyUs />
      <Results />

      <Offer
        title="Ready To Work With A Team That Truly Invests In Your Growth?"
        body="Book a free strategy call and we'll show you exactly how we'd approach building your brand."
        cta1="Book a Free Call"
        cta2="See Our Services"
        cta2Href="/services"
      />
    </>
  );
}
