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
import SEO from './components/SEO';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <SEO
        title="Aarnalaxmi Cotton - Premium Quality Cotton Supplier | Global Trading & Export"
        description="Leading certified organic and premium cotton supplier from India. Delivering sustainable cotton fiber to global textile manufacturers through trusted farming networks since 1998."
        keywords="organic cotton supplier, sustainable cotton farming, premium raw cotton trading, Indian cotton export, high-grade cotton fiber, BCI cotton partner, GOTS certified cotton, Gujarat cotton industry, Ahmedabad cotton supply, textile cotton distributor, global cotton trade, Aarnalaxmi Enterprises"
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
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
