import React, { useState, useEffect } from 'react';
import logo from '../assets/logo_aarnalaxmi.svg';
import logoWhite from '../assets/logo_white_aarnalaxmi.svg';

const Header = ({ themeType = 1, transparent = false, customClass = '' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MobileMenu = (
    <div className={`fixed inset-0 z-[2000] bg-[#0a0f1c] text-white transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col md:hidden`}>
      <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
        <img src={logoWhite} alt="Aarnalaxmi" className="h-[40px]" />
        <button onClick={toggleMenu} className="text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <div className="flex flex-col p-8 gap-8 text-xl font-heading overflow-y-auto">
        <a href="#" onClick={toggleMenu} className="hover:text-brand-gold transition-colors font-semibold">Home</a>
        <div className="space-y-4">
          <span className="text-brand-gold block font-semibold">Cotton</span>
          <div className="pl-4 border-l border-white/10 flex flex-col gap-5 text-lg text-slate-300">
            <a href="#about-cotton" onClick={toggleMenu} className="hover:text-white transition-colors">About Cotton</a>
            <a href="#sustainable-cotton" onClick={toggleMenu} className="hover:text-white transition-colors">Sustainable Cotton</a>
            <a href="#memberships" onClick={toggleMenu} className="hover:text-white transition-colors">Memberships & Certifications</a>
          </div>
        </div>
        <a href="#about" onClick={toggleMenu} className="hover:text-brand-gold transition-colors font-semibold">About Us</a>
        <a href="#contact" onClick={toggleMenu} className="mt-8 bg-brand-gold text-brand-dark px-6 py-3 rounded text-center text-sm font-bold uppercase tracking-widest">Partner With Us</a>
      </div>
    </div>
  );

  // --------------- THEME 1: Floating Transparent Glass Header ---------------
  if (themeType === 1) {
    return (
      <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ${customClass}`}>
        <div className={`mx-auto transition-all duration-400 ${scrolled ? 'w-[95%] max-w-7xl mt-4 rounded-2xl' : 'w-full px-8 py-4'}`}
          style={{
            background: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
            border: scrolled ? '1px solid rgba(255,255,255,0.2)' : 'none'
          }}>
          <div className={`flex justify-between items-center ${scrolled ? 'px-6 py-2' : ''}`}>
            <a href="#" className="flex items-center">
              <img src={logoWhite} alt="Aarnalaxmi Enterprises" className="h-[50px] w-auto transition-all duration-300 hover:scale-105" />
            </a>

            <nav className="hidden md:block">
              <ul className="flex list-none gap-8 bg-black/20 px-8 py-3 rounded-full backdrop-blur-md border border-white/10">
                <li><a href="#" className="text-white text-sm uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors">Home</a></li>
                <li className="relative group">
                  <a href="#products" className="text-white text-sm uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors block">
                    Cotton
                  </a>
                  <ul className="absolute left-0 top-full w-64 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 transform group-hover:translate-y-0 translate-y-3">
                    <div className="bg-[#233544] rounded-xl shadow-2xl overflow-hidden py-3 border border-white/5">
                      <li><a href="#about-cotton" className="block px-5 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case">About Cotton</a></li>
                      <li><a href="#sustainable-cotton" className="block px-5 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case">Sustainable Cotton</a></li>
                      <li><a href="#memberships" className="block px-5 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case mt-3">Memberships & Certifications</a></li>
                    </div>
                  </ul>
                </li>
                <li><a href="#about" className="text-white text-sm uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors">About Us</a></li>
              </ul>
            </nav>

            <div className="hidden md:block">
              <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300">Contact</a>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-white flex items-center pr-2 relative z-50">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
        {MobileMenu}
      </header>
    );
  }

  // --------------- THEME 2: Classic Clean White Header ---------------
  if (themeType === 2) {
    return (
      <header className={`fixed top-0 left-0 w-full z-[1000] bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-5 shadow-sm'} ${customClass}`}>
        <div className="w-full max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Aarnalaxmi Enterprises" className="h-[55px] w-auto transition-transform hover:rotate-3" />
            <div className="hidden lg:block border-l-2 border-slate-200 pl-3">
              <span className="block font-heading font-extrabold text-brand-dark leading-none text-xl">Aarnalaxmi</span>
              <span className="block text-brand-teal text-xs tracking-widest font-semibold uppercase">Enterprises</span>
            </div>
          </a>

          <div className="flex items-center gap-10">
            <nav className="hidden md:block">
              <ul className="flex list-none gap-8">
                <li><a href="#" className="text-brand-dark font-medium hover:text-brand-teal relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-teal hover:after:w-full after:transition-all after:duration-300">Home</a></li>
                <li className="relative group">
                  <a href="#products" className="text-brand-dark font-medium hover:text-brand-teal relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-teal hover:after:w-full after:transition-all after:duration-300 block">
                    Cotton
                  </a>
                  <ul className="absolute left-0 top-full w-64 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-[#233544] rounded-xl shadow-2xl overflow-hidden py-3 border border-[#1b2a36]">
                      <li><a href="#about-cotton" className="block px-6 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case">About Cotton</a></li>
                      <li><a href="#sustainable-cotton" className="block px-6 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case">Sustainable Cotton</a></li>
                      <li><a href="#memberships" className="block px-6 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case mt-3">Memberships & Certifications</a></li>
                    </div>
                  </ul>
                </li>
                <li><a href="#about" className="text-brand-dark font-medium hover:text-brand-teal relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-teal hover:after:w-full after:transition-all after:duration-300">About Us</a></li>
              </ul>
            </nav>
            <a href="#contact" className="hidden md:flex btn btn-outline border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white !px-5 !py-2 !text-xs">Get a Quote</a>

            <button onClick={toggleMenu} className="md:hidden text-brand-dark flex items-center relative z-50">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
        {MobileMenu}
      </header>
    );
  }

  // --------------- THEME 3: Solid Dark Corporate Header ---------------
  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] bg-brand-dark transition-all duration-300 ${scrolled ? 'shadow-xl' : ''} ${customClass}`}>
      {/* Top Bar (hides on scroll) */}
      <div className={`w-full bg-[#0a0f1c] border-b border-white/10 transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="w-full max-w-7xl mx-auto px-8 h-full flex justify-between items-center text-xs text-slate-400">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> contact@aarnalaxmi.com</span>
            <span className="flex items-center gap-2"><svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> +91 98765 43210</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`w-full max-w-7xl mx-auto px-8 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <a href="#" className="flex items-center">
          <img src={logoWhite} alt="Aarnalaxmi Enterprises" className="h-[45px] w-auto" />
          <span className="ml-3 font-heading font-bold text-white tracking-wider uppercase text-lg hidden sm:block">Aarnalaxmi</span>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden md:block">
            <ul className="flex list-none gap-8">
              <li><a href="#" className="text-slate-300 hover:text-brand-gold font-medium uppercase tracking-wider text-sm transition-colors">Home</a></li>
              <li className="relative group">
                <a href="#products" className="text-slate-300 hover:text-brand-gold font-medium uppercase tracking-wider text-sm transition-colors block">
                  Cotton
                </a>
                <ul className="absolute left-0 top-full w-64 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-[#233544] rounded-xl shadow-2xl overflow-hidden py-3 border border-white/5">
                    <li><a href="#about-cotton" className="block px-6 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case">About Cotton</a></li>
                    <li><a href="#sustainable-cotton" className="block px-6 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case">Sustainable Cotton</a></li>
                    <li><a href="#memberships" className="block px-6 py-2.5 text-[15.5px] font-normal text-white hover:bg-white/10 transition-colors tracking-normal normal-case mt-3">Memberships & Certifications</a></li>
                  </div>
                </ul>
              </li>
              <li><a href="#about" className="text-slate-300 hover:text-brand-gold font-medium uppercase tracking-wider text-sm transition-colors">About Us</a></li>
            </ul>
          </nav>
          <a href="#contact" className="hidden md:block bg-brand-gold text-brand-dark px-5 py-2 rounded font-bold text-xs uppercase hover:bg-black transition-colors">Partner With Us</a>

          <button onClick={toggleMenu} className="md:hidden text-white flex items-center relative z-50">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {MobileMenu}
    </header>
  );
};

export default Header;
