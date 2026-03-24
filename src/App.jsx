import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCotton from './pages/AboutCotton';
import SustainableCotton from './pages/SustainableCotton';
import MembershipCertificate from './pages/MembershipCertificate';
import CottonTypes from './components/CottonTypes';
import CottonProcess from './components/CottonProcess';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import CottonGallery from './pages/CottonGallery';
import CallToAction from './components/CallToAction';
import BusinessStats from './components/BusinessStats';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SEO from './components/SEO';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <SEO
        title="Top Organic Raw Cotton Suppliers & Exporters in India | Aarnalaxmi Cotton"
        description="Sourcing premium raw cotton? We are India's leading BCI & GOTS certified organic cotton exporters. Get wholesale cotton bales for your textile manufacturing today."
        keywords="raw cotton suppliers, organic cotton India, cotton exporters India, cotton bales manufacturers, cotton prices today, wholesale organic cotton, BCI certified cotton export, Top organic cotton exporters in Gujarat, Wholesale Shankar-6 cotton bales exporters"
        url="/"
      />
      <main>
        <Hero />
        <BusinessStats />
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
            <Route path="/about-cotton" element={<AboutCotton />} />
            <Route path="/sustainable-cotton" element={<SustainableCotton />} />
            <Route path="/membership-certificate" element={<MembershipCertificate />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/gallery" element={<CottonGallery />} />
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
