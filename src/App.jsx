import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCotton from './components/AboutCotton';
import CottonTypes from './components/CottonTypes';
import CottonProcess from './components/CottonProcess';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import CallToAction from './components/CallToAction';
import BusinessStats from './components/BusinessStats';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import SEO from './components/SEO';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <SEO
        title="Aarnalaxmi Cotton - Top Organic Cotton Supplier & Global Bulk Exporter"
        description="Leading certified GOTS organic & premium cotton supplier from India. Bulk cotton supply, international trading, and sustainable export to 65+ nations since 1998."
        keywords="organic cotton bulk supplier India, global cotton export company, wholesale raw cotton trading, premium fiber supplier Ahmedabad, sustainable cotton sourcing Gujarat, BCI certified cotton export, high-grade Indian cotton bales, textile industry cotton distributor, bulk cotton supply, international cotton export, raw cotton trading, cotton fiber supplier, sustainable cotton export, cotton bales export, textile cotton distributor"
        url="/"
      />
      <main>
        <Hero />
        <BusinessStats />
        <AboutCotton />
        <CottonTypes />
        <CottonProcess />
        <WhyChooseUs />
        <GallerySection />
        <CallToAction />
      </main>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="w-full bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
