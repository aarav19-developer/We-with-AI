import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded pages — each page gets its own JS chunk
const HomePage     = lazy(() => import('./pages/HomePage'));
const AboutPage    = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyUsPage    = lazy(() => import('./pages/WhyUsPage'));
const ContactPage  = lazy(() => import('./pages/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/"         element={<HomePage />}     />
            <Route path="/about"    element={<AboutPage />}    />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us"   element={<WhyUsPage />}    />
            <Route path="/contact"  element={<ContactPage />}  />
            {/* catch-all → home */}
            <Route path="*"         element={<HomePage />}     />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
