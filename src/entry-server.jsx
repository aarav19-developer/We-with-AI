/**
 * entry-server.jsx
 * Used only at build time by prerender.js — never loaded in the browser.
 * Renders the app to an HTML string for a given URL path.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter }   from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode }     from 'react';

import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage    from './pages/WhyUsPage';
import ContactPage  from './pages/ContactPage';

import './index.css'; // not meaningful in SSR but prevents import errors

function AppRoutes({ url }) {
  const routes = {
    '/':         <HomePage />,
    '/about':    <AboutPage />,
    '/services': <ServicesPage />,
    '/why-us':   <WhyUsPage />,
    '/contact':  <ContactPage />,
  };

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {routes[url] ?? <HomePage />}
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
