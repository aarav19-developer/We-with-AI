import { Helmet } from 'react-helmet-async';
import Hero         from '../components/Hero';
import Marquee      from '../components/Marquee';
import VideoSection from '../components/VideoSection';
import Services     from '../components/Services';
import Results      from '../components/Results';
import WhyUs        from '../components/WhyUs';
import Process      from '../components/Process';
import StatsBand    from '../components/StatsBand';
import Partners     from '../components/Partners';
import Offer        from '../components/Offer';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zoto Smart Services — Digital Marketing Agency in Meerut</title>
        <meta
          name="description"
          content="Zoto Smart Services is a full-service digital marketing agency in Meerut, UP. We specialise in social media management, Meta ads, Google ads, branding, content creation, and website development. 50+ brands grown across India."
        />
        <meta
          name="keywords"
          content="digital marketing agency Meerut, social media management Meerut, Meta ads Meerut, Google ads Meerut, branding agency UP, content creation Meerut, website development Meerut, performance marketing India, SEO Meerut, Zoto Smart Services"
        />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://zotosmartservices.com/" />
        <meta property="og:title"       content="Zoto Smart Services — Digital Marketing Agency in Meerut" />
        <meta
          property="og:description"
          content="50+ brands grown. Social media, Meta & Google ads, branding, content creation, and websites — all under one roof in Meerut, UP."
        />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Zoto Smart Services — Digital Marketing Agency in Meerut" />
        <meta
          name="twitter:description"
          content="50+ brands grown. Social media, Meta & Google ads, branding, content creation, and websites — all under one roof in Meerut, UP."
        />
        <link rel="canonical" href="https://zotosmartservices.com/" />
      </Helmet>

      <Hero />
      <Marquee />
      <VideoSection />
      <Services preview />
      <Results />
      <WhyUs />
      <Process />
      <StatsBand />
      <Partners preview />
      <Offer />
    </>
  );
}
