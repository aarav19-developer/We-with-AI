import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ServicesPage  from './pages/ServicesPage';
import WhyUsPage     from './pages/WhyUsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage   from './pages/ContactPage';

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
        <Routes>
          <Route path="/"          element={<HomePage />}      />
          <Route path="/about"     element={<AboutPage />}     />
          <Route path="/services"  element={<ServicesPage />}  />
          <Route path="/why-us"    element={<WhyUsPage />}     />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact"   element={<ContactPage />}   />
        </Routes>
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
