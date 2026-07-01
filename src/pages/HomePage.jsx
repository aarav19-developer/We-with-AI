import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero    from '../components/Hero';
import Marquee from '../components/Marquee';

// Below-the-fold components — lazy loaded
const VideoSection = lazy(() => import('../components/VideoSection'));
const Services     = lazy(() => import('../components/Services'));
const Results      = lazy(() => import('../components/Results'));
const WhyUs        = lazy(() => import('../components/WhyUs'));
const Process      = lazy(() => import('../components/Process'));
const StatsBand    = lazy(() => import('../components/StatsBand'));
const Partners     = lazy(() => import('../components/Partners'));
const Offer        = lazy(() => import('../components/Offer'));

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
        <meta property="og:image"       content="https://zotosmartservices.com/Z.png" />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Zoto Smart Services — Digital Marketing Agency in Meerut" />
        <meta
          name="twitter:description"
          content="50+ brands grown. Social media, Meta & Google ads, branding, content creation, and websites — all under one roof in Meerut, UP."
        />
        <meta name="twitter:image"       content="https://zotosmartservices.com/Z.png" />
        <link rel="canonical" href="https://zotosmartservices.com/" />
      </Helmet>

      <Hero />
      <Marquee />
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <VideoSection />
        <Services preview />
        <Results />
        <WhyUs />
        <Process />
        <StatsBand />
        <Partners preview />
        <Offer />
      </Suspense>
    </>
  );
}
