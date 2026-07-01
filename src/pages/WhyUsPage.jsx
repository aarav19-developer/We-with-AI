import WhyUs  from '../components/WhyUs';
import Results from '../components/Results';
import Offer   from '../components/Offer';
import { Helmet } from 'react-helmet-async';

export default function WhyUsPage() {
  return (
    <>
      <Helmet>
        <title>Why Choose Us — Zoto Smart Services | In-House Growth Team in Meerut</title>
        <meta
          name="description"
          content="Why partner with Zoto Smart Services? We act as your in-house growth team — data-driven strategy, premium creative, and long-term partnership. 50+ brands grown, 95% retention rate."
        />
        <meta
          name="keywords"
          content="why choose Zoto Smart Services, best digital marketing agency Meerut, trusted marketing agency UP, data driven marketing Meerut, brand growth agency India, digital marketing results Meerut"
        />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://zotosmartservices.com/why-us" />
        <meta property="og:title"       content="Why Choose Zoto Smart Services — Your In-House Growth Team in Meerut" />
        <meta property="og:description" content="50+ brands grown, 95% retention rate. We act as your in-house growth team — not just another vendor. See why businesses in Meerut trust Zoto." />
        <meta property="og:image"       content="https://zotosmartservices.com/Z.png" />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Why Choose Zoto Smart Services | Digital Marketing Meerut" />
        <meta name="twitter:description" content="50+ brands grown, 95% retention. We act as your in-house growth team — data-driven, results-focused." />
        <meta name="twitter:image"       content="https://zotosmartservices.com/Z.png" />
        <link rel="canonical" href="https://zotosmartservices.com/why-us" />
      </Helmet>

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
