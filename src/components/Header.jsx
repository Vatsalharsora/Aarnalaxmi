import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_aarnalaxmi.svg';
import logoWhite from '../assets/logo_white_aarnalaxmi.svg';

const cottonMenuItems = [
  {
    href: '#about-cotton',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'About Cotton',
    desc: 'Learn about natural cotton fiber',
  },
  {
    href: '#cotton-types',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    label: 'Our Cotton Types',
    desc: 'Raw, Organic, Sustainable & Export',
  },
  {
    href: '#process',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    label: 'Farm to Fabric',
    desc: 'Our 4-step cotton process',
  },
  {
    href: '#gallery',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Cotton Gallery',
    desc: 'Visual tour of our cotton',
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] bg-white transition-all duration-300 ${
          scrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Aarnalaxmi Enterprises"
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex items-center list-none gap-6">
                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 font-medium text-[15px] hover:text-green-600 transition-colors relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </li>

                {/* Cotton Dropdown */}
                <li
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 font-medium text-[15px] transition-colors ${
                      dropdownOpen ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    Cotton
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* ─── Dropdown Panel ─── */}
                  <div
                    className={`absolute left-0 top-[calc(100%+14px)] w-72 transition-all duration-200 ${
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                    style={{ zIndex: 200 }}
                  >
                    {/* Arrow tip */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45 shadow-sm" />

                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      {/* Header strip */}
                      <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-3.5 flex items-center gap-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
                        </svg>
                        <span className="text-white font-semibold text-sm tracking-wide">Cotton Products</span>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        {cottonMenuItems.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-start gap-3.5 px-4 py-3 mx-2 my-0.5 rounded-xl hover:bg-green-50 group transition-all duration-150"
                          >
                            {/* Icon box */}
                            <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-green-100 flex items-center justify-center flex-shrink-0 text-gray-500 group-hover:text-green-600 transition-all duration-150">
                              {item.icon}
                            </div>
                            {/* Text */}
                            <div>
                              <div className="text-[14px] font-semibold text-gray-800 group-hover:text-green-700 transition-colors leading-snug">
                                {item.label}
                              </div>
                              <div className="text-[12px] text-gray-400 group-hover:text-green-500 transition-colors mt-0.5 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                            {/* Arrow */}
                            <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Footer strip */}
                      <div className="border-t border-gray-100 px-5 py-3 bg-gray-50">
                        <a
                          href="#contact"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-between text-xs font-semibold text-green-600 hover:text-green-700 transition-colors"
                        >
                          <span>Get a Free Quote</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* About Us */}
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 font-medium text-[15px] hover:text-green-600 transition-colors relative group"
                  >
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </li>

                {/* Blogs */}
                <li>
                  <Link
                    to="/blogs"
                    className="text-gray-700 font-medium text-[15px] hover:text-green-600 transition-colors relative group"
                  >
                    Blogs
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 flex items-center relative z-50"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ─── Mobile Fullscreen Menu ─── */}
      <div
        className={`fixed inset-0 z-[2000] flex flex-col md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'linear-gradient(135deg, #0a1a0f 0%, #0f2a14 100%)' }}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={logoWhite} alt="Aarnalaxmi" className="h-10" />
          </Link>
          <button onClick={toggleMenu} className="text-white w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-7 gap-2 overflow-y-auto flex-1">
          <a
            href="#"
            onClick={toggleMenu}
            className="text-white font-semibold text-lg px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            Home
          </a>

          {/* Cotton Section */}
          <div className="py-1">
            <div className="text-green-400 font-bold text-sm uppercase tracking-widest px-4 mb-2">Cotton</div>
            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
              {cottonMenuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={toggleMenu}
                  className="flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                >
                  <span className="text-green-400">{item.icon}</span>
                  <span className="text-base font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-white font-semibold text-lg px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            About Us
          </Link>

          <Link
            to="/blogs"
            onClick={toggleMenu}
            className="text-white font-semibold text-lg px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            Blogs
          </Link>

          <a
            href="#contact"
            onClick={toggleMenu}
            className="mt-4 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-base"
          >
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
