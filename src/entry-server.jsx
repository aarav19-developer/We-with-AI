/**
 * entry-server.jsx
 * Used only at build time by prerender.js — never loaded in the browser.
 * Renders the app to an HTML string for a given URL path.
 *
 * IMPORTANT: All components imported here must be eager (no React.lazy).
 * react-dom/server renderToString does not support Suspense/lazy —
 * lazy components silently render as their fallback (empty div), so Google
 * would get a blank page for those sections.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter }   from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode }     from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ── Page components (eager imports for SSR) ── */
import AboutPage    from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage    from './pages/WhyUsPage';
import ContactPage  from './pages/ContactPage';

/* ── HomePage SSR version — all components eager, no lazy/Suspense ── */
import { Helmet }    from 'react-helmet-async';
import Hero          from './components/Hero';
import Marquee       from './components/Marquee';
import VideoSection  from './components/VideoSection';
import Services      from './components/Services';
import Results       from './components/Results';
import WhyUs         from './components/WhyUs';
import Process       from './components/Process';
import StatsBand     from './components/StatsBand';
import Partners      from './components/Partners';
import Offer         from './components/Offer';

import './index.css'; // not meaningful in SSR but prevents import errors

function HomePageSSR() {
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
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://zotosmartservices.com/" />
        <meta property="og:title"       content="Zoto Smart Services — Digital Marketing Agency in Meerut" />
        <meta property="og:description" content="50+ brands grown. Social media, Meta & Google ads, branding, content creation, and websites — all under one roof in Meerut, UP." />
        <meta property="og:image"       content="https://zotosmartservices.com/Z.png" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Zoto Smart Services — Digital Marketing Agency in Meerut" />
        <meta name="twitter:description" content="50+ brands grown. Social media, Meta & Google ads, branding, content creation, and websites — all under one roof in Meerut, UP." />
        <meta name="twitter:image"       content="https://zotosmartservices.com/Z.png" />
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

function AppRoutes({ url }) {
  const routes = {
    '/':         <HomePageSSR />,
    '/about':    <AboutPage />,
    '/services': <ServicesPage />,
    '/why-us':   <WhyUsPage />,
    '/contact':  <ContactPage />,
  };

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {routes[url] ?? <HomePageSSR />}
      </main>
      <Footer />
    </>
  );
}

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes url={url} />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}
